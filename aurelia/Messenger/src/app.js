import { WebAPI } from './web-api';

export class App {
  static inject = [WebAPI];

  constructor(api) {
    this.api = api;
  }

  configureRouter(config, router) {
    config.title = 'Contacts';

    config.map([
      { route: '', moduleId: 'login/login' },
      { route: 'main', moduleId: 'main/main' },
      { route: 'contacts/:id', moduleId: 'contact-detail', name: 'contacts' }
    ]);

    this.router = router;
  }
}
