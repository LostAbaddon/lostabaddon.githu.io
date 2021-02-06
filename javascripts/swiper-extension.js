(function () {
	var root = $(document);
	// Extensions
	Swiper.prototype.slideToHash = function (hash, speed, callback) {
		var index = this.container.find('[data-hash="' + hash + '"]').index();
		if (!index && index !== 0) index = -1;
		if (index >= 0 && index < this.slides.length) {
			this.slideTo(index, speed, callback);
		}
	};
	// History Control
	Swiper.prototype.launchTimeMachine = function (limit) {
		var self = this;
		this.history = [];
		if (isNaN(limit) || limit < 1) {
			this.history.limit = 0;
		}
		else {
			this.history.limit = limit;
		}
		this.history.index = 0;
		this.history.state = 0; // 0: no time travelling; 1: travel back; 2: travel future.
		this.history.callbacks = [];
		this.history.push(this.activeIndex); // For Initial
		this.on('onSlideChangeEnd', function (s) {
			if (self.activeIndex === self.history[0]) return;
			if (self.history.state === 0) {
				if (self.history.index > 0) {
					self.history.splice(0, self.history.index);
				}
				self.history.unshift(self.activeIndex);
				if (self.history.limit > 0) self.history.splice(self.history.limit, self.history.length);
				self.history.index = 0;
				self.history.callbacks.map(function (callback) {
					callback(self, false, self.history.index === 0, self.history.index === (self.history.length - 1));
				});
			}
			else {
				self.history.state = 0;
				self.history.callbacks.map(function (callback) {
					callback(self, true, self.history.index === 0, self.history.index === (self.history.length - 1));
				});
			}
		});
		this.history.goto = function (index) {
			if (index < 0 || index >= self.history.length) return;
			if (index === self.history.index) return;
			if (index < self.history.index) self.history.state = 2;
			else self.history.state = 1;
			self.history.index = index;
			index = self.history[index];
			self.slideTo(index);
		};
		this.history.prev = function () {
			self.history.goto(self.history.index + 1);
		};
		this.history.next = function () {
			self.history.goto(self.history.index - 1);
		};
		// Callback : function (swiper, isTimeTravelling, isFirstTimeSlice, isLastTimeSlice)
		this.onHistoryChanged = function (callback) {
			if (self.history.callbacks.indexOf(callback) < 0) {
				self.history.callbacks.push(callback);
			}
		};
	};
	// Hint Pagination Bullet
	Swiper.prototype.plugins.hintBullet = function (swiper) {
		var slides = swiper.container.find('.swiper-slide');
		var bullets = swiper.container.find('.swiper-pagination-bullet');
		slides.each(function (index, slide) {
			slide = $(slide);
			var hint = slide.data('hint');
			if (!!hint) {
				$(bullets[index]).data('hint', hint);
			}
		});
	};
	// Jump to Slide
	Swiper.prototype.plugins.pptJump = function (swiper) {
		var pageInit = function () {
			var page = $(swiper.slides[swiper.activeIndex]);
			var needReset = (page.data('reset-ppt') === true);
			var step = 1000;
			if (needReset) step = 1;
			else step = page.data('step') || 1;
			var maxStep = 1;
			page.data('step', step);
			page.find('[data-step]').each(function (index, item) {
				item = $(item);
				index = item.data('step');
				if (isNaN(index) || index < 1) index = 1;
				if (index <= step) item.addClass('show');
				else item.removeClass('show');
				if (index > maxStep) maxStep = index;
			});
			page.find('[data-fade-step]').each(function (index, item) {
				item = $(item);
				index = item.data('fade-step');
				if (isNaN(index) || index < 1) index = maxStep + 1;
				if (index <= step) item.addClass('fade');
				else item.removeClass('fade');
			});
			page.data('max-step', maxStep);
		};
		var pageJump = function (delta) {
			if (isNaN(delta)) delta = 1;
			var page = $(swiper.slides[swiper.activeIndex]);
			var step = page.data('step') || 1;
			var maxStep = page.data('max-step') || 1;
			step += delta;
			if (step > maxStep || step < 1) return;
			page.data('step', step);
			page.find('[data-step]').each(function (index, item) {
				item = $(item);
				index = item.data('step');
				if (isNaN(index) || index < 1) index = 1;
				if (index <= step) item.addClass('show');
				else item.removeClass('show');
			});
			page.find('[data-fade-step]').each(function (index, item) {
				item = $(item);
				index = item.data('fade-step');
				if (isNaN(index) || index < 1) index = maxStep + 1;
				if (index <= step) item.addClass('fade');
				else item.removeClass('fade');
			});
		};
		swiper.container.on('click', function (e) {
			target = $(e.target);
			var nogo = target.is('.swiper-pagination-bullet');
			nogo = nogo || target.is('.swiper-slide-jumper');
			nogo = nogo || target.is('canvas');
			nogo = nogo || target.is('.swiper-no-ppt-jump');
			if (!nogo && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
				if (!target.is('.swiper-slide')) {
					target = target.parents('.swiper-slide');
				}
				if (target.is('.swiper-slide') || (target.data('can-jump') === true)) {
					if (e.which === 1 || e.button === 1) pageJump();
					else if (e.which === 3 || e.button === 2) {
						pageJump(-1);
						e.preventDefault();
					}
				}
			}
		});
		swiper.container.on('click', '.swiper-slide, .ppt-page', function (e) {
		});
		swiper.on('onTransitionStart', pageInit);
		root.on('keydown', function (e) {
			if (!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
				var target = $(e.target);
				if (target.is('body')) {
					if (e.which === 13 || e.keyCode === 13) pageJump();
					else if (e.which === 8 || e.keyCode === 8) {
						pageJump(-1);
						e.preventDefault();
					}
				}
			}
		});
		root.on('click tap', '.swiper-slide-jumper', function (e) {
			var hint = $(this).data('target');
			if (!isNaN(hint)) mySwiper.slideTo(hint);
			else if (!!hint) mySwiper.slideToHash(hint);
		});
		swiper.slides.each(function (index, slide) {
			slide = $(slide);
			if (slide.find('[data-step]').length > 0) {
				slide.addClass('has-sub-page');
			}
		});
		pageInit();
	};
	// Stopper
	Swiper.prototype.plugins.autoLock = function (swiper) {
		var is_locked = false;
		var setPreventer = function () {
			var page = $(swiper.slides[swiper.activeIndex]);
			var no_prev = page.data('prevent-prev') === true, no_next = page.data('prevent-next') === true;
			if (no_prev) swiper.lockSwipeToPrev();
			if (no_next) swiper.lockSwipeToNext();
			is_locked = true;
		};
		var clearPreventer = function () {
			swiper.unlockSwipes();
			is_locked = false;
		};
		swiper.on("onTransitionStart", clearPreventer);
		swiper.on("onTransitionEnd", setPreventer);
		setPreventer();
		swiper.relaseAutoLock = function (e) {
			if (is_locked) clearPreventer();
		};
		swiper.container.on('click', '.swiper-slide-jumper', function (e) {
			if (is_locked) {
				swiper.relaseAutoLock();
				swiper.slideTo($(e.target).index());
			}
		});
	};
}) ();