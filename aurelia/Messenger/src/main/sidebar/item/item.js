import { Router } from 'aurelia-router';
import { bindable, customElement } from 'aurelia-framework';

@customElement('item')
export class Item {
    @bindable presence;
    constructor() {
       // console.log('item load', this.presence);
    }
   /* attached() {
        alert(this.presence);
        updateProperties kinda method
    }*/
    onConversationChange(){
        console.log('clicked',this.presence);
    }
}
