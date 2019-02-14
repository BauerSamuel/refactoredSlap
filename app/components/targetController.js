//private
//stuff
import TargetService from "./targetService.js";

let _ts = new TargetService();

function draw() {
  let template = _ts.TargetTemp;
  //for loop that goes through target getTemp updates template each times.
  document.getElementById('contents').innerHTML = template;
}


//public
//stuff
export default class TargetController {
  constructor() {
    console.log('Target Controller has begun to run.')
    _ts.updateSubs(draw);
    draw();
  }
  attack(dmg) {
    //Maybe an if statement to alter dmg based on items.
    _ts.attack(dmg)
  }
}