import Item from "./items.js";

export default class Target {
  constructor(name, health, img) {
    this.name = 'Jerry';
    this.health = health;
    this.hits = 0;
    this.img = img;
  }

  getTemp() {
    return `
          <div class="col text-center">
          <img src="${this.img}"/>
          <p>You've hit ${this.name} ${this.hits} times. ${this.name} has ${this.health} health left.</p>
			    </div>
    `;
  }
}