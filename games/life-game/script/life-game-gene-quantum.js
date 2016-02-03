((root) => {
	"use strict";

	class LifeGameGeneQuantum {
		constructor () {
			this.alive = false;
			this.gene = {};
			this.init();
		}
		init () {
			this.angle = 0;
			this.life = LifeGameGeneQuantum.AgeLimit;
			this.isRebirth = false;
			this.design(LifeGameGeneQuantum.SampleGene);
		}
		design (gene) {
			if (!gene) return;
			if (gene.rebirth) this.gene.rebirth = gene.rebirth;
			if (gene.friends) this.gene.friends = gene.friends;
			if (gene.overpop) this.gene.overpop = gene.overpop;
			if (gene.actions) this.gene.actions = gene.actions;
			this.gene.force = getGeneForce(this.gene);
			this.aging = getGeneAging(this.gene);
		}
		birth () {
			this.alive = true;
			this.angle = 0;
			this.life = LifeGameGeneQuantum.AgeLimit;
		}
		die () {
			this.alive = false;
			this.angle = 0;
			this.life = 0;
			this.design(LifeGameGeneQuantum.SampleGene);
		}
		envolve () {
			if (LifeGameGeneQuantum.AgeLimit <= 0) return;
			this.life -= this.aging;
			if (this.life <= 0) {
				this.die();
			}
		}
		update (neighbors) {
			var effect = getTotalEffect(neighbors);
			this.angle += lifeEnergy(effect, this.gene);
			if (this.angle > LifeGameGeneQuantum.AngleLimit) this.angle -= LifeGameGeneQuantum.AngleLimit;
			effect = Math.round(effect);
			this.isRebirth = false;
			if (this.alive) {
				if (this.gene.friends.indexOf(effect) < 0 || this.gene.overpop.indexOf(effect) < 0) {
					this.die();
				}
			}
			else {
				if (this.gene.rebirth.indexOf(effect) >= 0) {
					this.isRebirth = true;
					this.birth();
					this.design(pickStrongest(neighbors));
				}
			}
		}
		mutate (property) {
			if (!this.isRebirth || !this.alive) return;
			if (Math.random() <= property) {
				if (Math.random() < 0.3) {
					this.gene.rebirth = mutateGene(this.gene.rebirth);
				}
				else {
					if (Math.random() < 0.5) {
						this.gene.overpop = mutateGene(this.gene.overpop);
					}
					else {
						this.gene.friends = mutateGene(this.gene.friends);
					}
				}
				this.gene.force = getGeneForce(this.gene);
				this.aging = getGeneAging(this.gene);
			}
			if (Math.random() <= property) {
				var index = Math.floor(this.gene.actions.length * Math.random());
				this.gene.actions[index] = LifeGameGeneQuantum.AngleLimit * Math.random() * Math.random();
			}
		}
		get copy () {
			var self = this;
			return {
				alive: self.alive,
				angle: self.angle,
				gene: copyGene(self.gene),
			}
		}
	}

	var lifeEnergy = (life, gene) => {
		var min = Math.floor(life), max = min + 1;
		if (max >= gene.actions.length) max = gene.actions.length - 1;
		life -= min;
		life = life * life * (3 - 2 * life);
		min = gene.actions[min];
		max = gene.actions[max];
		life = min + (max - min) * life;
		return life;
	};
	var copyGene = (gene) => {
		var copy = {};
		copy.friends = [];
		gene.friends.map((g) => copy.friends.push(g));
		copy.overpop = [];
		gene.overpop.map((g) => copy.overpop.push(g));
		copy.rebirth = [];
		gene.rebirth.map((g) => copy.rebirth.push(g));
		copy.force = gene.force;
		return copy;
	};
	var getGeneForce = (gene) => {
		var force = 32 - gene.rebirth.length * 2 - gene.friends.length - gene.overpop.length;
		force += gene.rebirth.length / 8;
		force += gene.overpop.length / 64;
		force += gene.friends.length / 512;
		return force;
	};
	var getGeneAging = (gene) => {
		var aging = 24 - (gene.rebirth.length + gene.friends.length + gene.overpop.length);
		return aging;
	};
	var getTotalEffect = (neighbors) => {
		var x = 0, y = 0, delta = Math.PI * 2 / LifeGameGeneQuantum.AngleLimit, angle;
		neighbors.map((life) => {
			if (life.alive) {
				angle = life.angle * delta;
				x += Math.sin(angle);
				y += Math.cos(angle);
			}
		});
		return Math.sqrt(x * x + y * y);
	};
	var mutateGene = (gene) => {
		var result = [];
		for (let i = 0; i < 9; i++) result[i] = false;
		gene.map((g) => result[g] = true);
		var index = Math.floor(Math.random() * 9);
		if (index === 10) index = 9;
		result[index] = !result[index];
		gene = [];
		result.forEach((g, i) => {
			if (g) gene.push(i);
		});
		return gene;
	};
	var pickStrongest = (genes) => {
		var random = LifeGame.Core.randomFight;
		var gene = genes[0].gene, force, f, g;
		if (random) force = gene.force * (Math.random() + Math.random());
		else force = gene.force;
		for (let i = 1, l = genes.length; i < l; i++) {
			g = genes[i].gene;
			if (random) f = g.force * (Math.random() + Math.random());
			else f = g.force;
			if (f > force) {
				gene = g;
				force = f;
			}
		}
		return gene;
	};

	LifeGameGeneQuantum.SampleGene = {
		rebirth: [3],
		friends: [2, 3, 4, 5, 6, 7, 8],
		overpop: [0, 1, 2, 3],
		actions: [1, 2, 3, 4, 5, 6, 7, 8, 9],
	};
	LifeGameGeneQuantum.AgeLimit = -1;
	LifeGameGeneQuantum.AngleLimit = 50;

	// Export
	root.LifeGame = root.LifeGame || {};
	root.LifeGame.Gene = root.LifeGame.Gene || {};
	root.LifeGame.Gene.Quantum = LifeGameGeneQuantum;
}) (window);