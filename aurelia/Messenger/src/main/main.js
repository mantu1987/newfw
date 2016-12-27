import { Router } from 'aurelia-router';

export class Main {
  static inject() { return [Router]; }
  constructor(router) {

  }
  configureRouter(config, router) {
    config.title = 'Contacts';

    config.map([
      { route: '', moduleId: './home/home' }
    ]);

    this.router = router;
  }
}
