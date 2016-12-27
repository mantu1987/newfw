import { Router } from 'aurelia-router';

export class Main {
  static inject() { return [Router]; }
  constructor(router) {
    this.router=router;
  }
  attached(){

  }
/*console.log('clicked', this.presence, this.router);
        let conversationRoute = this.router.routes.find(x => x.route === 'conversation');*/
  configureRouter(config, router) {
    config.title = 'Contacts';

    config.map([
      { route: '', moduleId: './home/home' },
      { route: ':presenceid', moduleId: './conversation/conversation', mode: {} }
    ]);

    this.router = router;
  }
}
