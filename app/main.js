import TargetController from "./components/targetController.js";


class App {
  constructor() {
    this.controllers = {
      targetController: new TargetController()
    }
    console.log('It\'s here')
  }
}


window["app"] = new App();