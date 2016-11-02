export default class AppController {
  constructor(ConfigFirebase, firebase) {
    firebase.initializeApp(ConfigFirebase);
  }
}

AppController.$inject = ['ConfigFirebase','firebase']