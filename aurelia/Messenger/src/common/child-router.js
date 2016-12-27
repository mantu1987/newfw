import {Router, RouterConfiguration} from 'aurelia-router'

export class ChildRouter {
  heading = 'Child Router';

  constructor(router,config){
      this.router=router;
      this.config=config;
  }

  configureRouter() {
    this.config.map([
      { route: ['', 'welcome'], name: 'welcome',       moduleId: 'welcome',       nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',         moduleId: 'users',         nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router',  moduleId: 'child-router',  nav: true, title: 'Child Router' }
    ]);
  }
}