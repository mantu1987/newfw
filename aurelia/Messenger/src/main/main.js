import { Router } from 'aurelia-router';

export class Main {
  static inject() { return [Router]; }
  constructor(router) {
    this.router=router;
  }
  attached(){

  }
  configureRouter(config, router) {
    config.title = 'Contacts';

    config.map([
      { route: '', moduleId: './home/home' },
      { route: 'chat/:presenceid', moduleId: './conversation/conversation', mode: {} }
    ]);

    this.router = router;
  }
}
