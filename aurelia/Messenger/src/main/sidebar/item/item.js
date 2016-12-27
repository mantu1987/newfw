import { Router } from 'aurelia-router';
import { bindable, customElement } from 'aurelia-framework';

@customElement('item')
export class Item {
    @bindable presence;
    static inject() { return [Router]; }
    constructor(router) {
        this.router = router;
    }
    /* attached() {
         alert(this.presence);
         updateProperties kinda method
     }*/
    onConversationChange() {
        let conversationRoute = this.router.routes.find(x => x.route === 'chat/:presenceid');
        conversationRoute.mode = {
            mode:'chat',
            presence:this.presence
        };
        this.router.navigate("/main/chat/"+this.presence.id);
    }
}
