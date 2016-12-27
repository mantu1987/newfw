import { Router } from 'aurelia-router';

export class Conversation {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
  }
  created() {
    let conversationRoute = this.router.routes.find(x => x.route === 'chat/:presenceid');
    this.mode = conversationRoute.mode;
  }
  activate(transition) {
    let conversationRoute = this.router.routes.find(x => x.route === 'chat/:presenceid');
    this.mode = conversationRoute.mode;
    console.log(transition, this.router);
  }
}
