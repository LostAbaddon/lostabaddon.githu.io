window.CyberAvatorArena = window.CyberAvatorArena || {};
CyberAvatorArena.Welcome = {};

(() => {
	const BlockCount = 10;
	const PrintSpeed = 150;
	const Grids = [];
	const HintList = [];
	var inited = false;
	var running = false;

	const startAction = function () {
		this.__available = true;

		const actionBG = async () => {
			if (!running || !this.__available) return;
			await wait(3000 * Math.random());
			if (!running || !this.__available) return;
			this.classList.add('activeBG');
			await wait(2000 + 2000 * Math.random());
			this.classList.remove('activeBG');
			await wait(2000);
			if (!running || !this.__available) return;
			if (!!this.__available) actionBG();
		};
		const actionSZ = async () => {
			if (!running || !this.__available) return;
			await wait(3000 * Math.random());
			if (!running || !this.__available) return;
			this.classList.add('activeSZ');
			this.style.zIndex = Math.ceil(Math.random() * 10);
			await wait(2000 + 2000 * Math.random());
			this.classList.remove('activeSZ');
			await wait(2000);
			this.style.zIndex = 0;
			if (!running || !this.__available) return;
			if (!!this.__available) actionSZ();
		};

		actionBG();
		actionSZ();
	};
	const exitAction = function () {
		this.__available = false;
	};
	const onResize = () => {
		var width = window.CyberAvatorArena.Screen.width, height = window.CyberAvatorArena.Screen.height;
		var size = 0, offsetLeft = 0, offsetTop = 0;
		if (width > height) {
			size = height / BlockCount;
		}
		else {
			size = width / BlockCount
		}
		var W = Math.ceil(width / size);
		var H = Math.ceil(height / size);
		var l = (width - size * W) / 2 / width * 100;
		var t = (height - size * H) / 2 / height * 100;
		var w = size / width * 100;
		var h = size / height * 100;

		for (let i = 0; i < H; i ++) {
			let line = Grids[i];
			if (!!line) {
				for (let j = 0; j < W; j ++) {
					let g = line[j];
					if (!g) {
						g = newEle('div', 'block');
						g.doAction = startAction;
						g.offAction = exitAction;
						g.style.zIndex = 0;
						ScnWelcome.appendChild(g);
						line[j] = g;
						g.doAction();
					}
					g.style.width = w + '%';
					g.style.height = h + '%';
					g.style.left = (l + w * j) + '%';
					g.style.top = (t + h * i) + '%';
				}
				for (let j = line.length - 1; j >= W; j --) {
					let g = line[j];
					g.offAction();
					ScnWelcome.removeChild(g);
					line.splice(j, 1);
				}
			}
			else {
				line = [];
				for (let j = 0; j < W; j ++) {
					g = newEle('div', 'block');
					g.doAction = startAction;
					g.offAction = exitAction;
					g.style.zIndex = 0;
					g.style.width = w + '%';
					g.style.height = h + '%';
					g.style.left = (l + w * j) + '%';
					g.style.top = (t + h * i) + '%';
					ScnWelcome.appendChild(g);
					line[j] = g;
					g.doAction();
				}
				Grids[i] = line;
			}
		}
		for (let i = Grids.length - 1; i >= H ; i --) {
			let line = Grids[i];
			line.forEach(g => {
				g.offAction();
				ScnWelcome.removeChild(g);
			});
			line.splice(0);
			Grids.splice(i, 1);
		}
	};
	const prepareWords = ele => {
		if (!ele) return;
		ele.__content = ele.innerText;
		ele.innerHTML = '';
		ele.__words = newEle('span', 'words');
		ele.appendChild(ele.__words);
		ele.__cursor = newEle('span', 'cursor');
		ele.appendChild(ele.__cursor);
	};
	const showWords = async ele => {
		var len = ele.__content.length;

		ele.__words.innerText = '';
		ele.style.opacity = 1;
		await wait(200);
		ele.__cursor.classList.remove('hide');
		await wait(PrintSpeed * 3);
		for (let i = 0; i <= len; i ++) {
			let str = ele.__content.substr(0, i);
			ele.__words.innerText = str;
			await wait(PrintSpeed);
		}
		ele.__cursor.classList.add('hide');
	};
	const onPress = ({target}) => {
		var command = target.getAttribute('command');
		console.log(command, target);
	};

	CyberAvatorArena.Welcome.onInit = () => {
		inited = true;

		var list = [];
		list.push('.screen .title');
		list.push('.screen .option[name="storyMode"]');
		list.push('.screen .option[name="duelMode"]');
		list.push('.screen .option[name="cardCollection"]');
		list.push('.screen .option[name="mailZone"]');
		for (let ele of list) {
			let handler = ele.indexOf('name') > 0;
			ele = ScnWelcome.querySelector(ele);
			if (handler) {
				ele.addEventListener('click', onPress);
			}
			HintList.push(ele);
			prepareWords(ele);
		}

		running = true;
		onResize();
	};
	CyberAvatorArena.Welcome.onResize = () => {
		if (!inited) return;

		var tmr = CyberAvatorArena.Welcome.onResize.__tmr;
		if (!!tmr) {
			clearTimeout(tmr);
		}
		CyberAvatorArena.Welcome.onResize.__tmr = setTimeout(() => {
			delete CyberAvatorArena.Welcome.onResize.__tmr;
			onResize();
		}, 300);
	};
	CyberAvatorArena.Welcome.show = async () => {
		ScnWelcome.querySelector('.screen').classList.remove('waiting');
		await wait(1000);

		for (let ele of HintList) {
			await showWords(ele);
		}
	};
	CyberAvatorArena.Welcome.hide = async () => {};
}) ();