//private stuff
import Target from "../models/target.js";

let _state = {
  targets: [
    new Target('bear', 100, './assets/images/Man_Bear.png')
  ]
}

let _subs = {
  targets: []
}

function setState(propName, value) {
  _state[propName] = value;
  _subs[propName].forEach(fn => fn());
}



//public stuff
export default class TargetService {
  constructor() {
    console.log('TarSer has begun!')
  }
  attack(dmg) {
    let targets = _state.targets;
    targets[0].health -= dmg;
    if (targets[0].health <= 0) {
      targets[0].health = 0;
      targets[0].img = './assets/images/Mix.png';
      targets[0].hits--;
    }
    targets[0].hits++;

    setState('targets', targets)
  }

  get TargetTemp() {
    return _state.targets[0].getTemp();
  }

  updateSubs(fun) {
    let subFunction = _subs.targets;
    subFunction[0] = fun;
  }
}