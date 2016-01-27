(function (root) {
	"use strict";

	var mGene = new WeakMap();
	class LifeGameGeneClassic {
		constructor () {
			this.alive = false;
			this.gene = {};
			this.design(LifeGameGeneClassic.SampleGene);
			this.isRebirth = false;
		}
		design (gene) {
			if (!gene) return;
			if (gene.rebirth) this.gene.rebirth = gene.rebirth;
			if (gene.friends) this.gene.friends = gene.friends;
			if (gene.overpop) this.gene.overpop = gene.overpop;
			this.gene.force = getGeneForce(this.gene);
		}
		birth () {
			this.alive = true;
		}
		die () {
			this.alive = false;
		}
		envolve () {
		}
		update (neighbors) {
			var effect = getTotalEffect(neighbors);
			this.isRebirth = false;
			if (this.alive) {
				if (this.gene.friends.indexOf(effect) < 0 || this.gene.overpop.indexOf(effect) < 0) {
					this.die();
					this.design(LifeGameGeneClassic.SampleGene);
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
			if (!this.isRebirth) return;
			if (Math.random() > property) return;
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
		}
		get effect () {
			return this.alive ? 1 : 0;
		}

		static get originEffect () {
			return 0;
		}
		static addEffect (oldEffect, effect) {
			return oldEffect + effect;
		}
		static getLifeEffect (effect) {
			return effect;
		}
	}

	var getGeneForce = (gene) => {
		var force = 32 - gene.rebirth.length * 2 - gene.friends.length - gene.overpop.length;
		force += gene.rebirth.length / 8;
		force += gene.overpop.length / 64;
		force += gene.friends.length / 512;
		return force;
	};
	var getTotalEffect = (neighbors) => {
		var effect = LifeGameGeneClassic.originEffect;
		neighbors.map((g) => {
			effect = LifeGameGeneClassic.addEffect(effect, g.effect);
		});
		return LifeGameGeneClassic.getLifeEffect(effect);
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
		var gene = genes[0].gene;
		for (let i = 1, l = genes.length; i < l; i++) {
			if (genes[i].gene.force > gene.force) {
				gene = genes[i].gene;
			}
		}
		return gene;
	};

	LifeGameGeneClassic.SampleGene = {
		rebirth: [3],
		friends: [2, 3, 4, 5, 6, 7, 8],
		overpop: [0, 1, 2, 3],
	};

	// Export
	root.LifeGame = root.LifeGame || {};
	root.LifeGame.Gene = root.LifeGame.Gene || {};
	root.LifeGame.Gene.Classic = LifeGameGeneClassic;
}) (window);