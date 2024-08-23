import { api, LightningElement } from 'lwc';

export default class Grandchild extends LightningElement {
    @api trackedText;

    get displayText() {
        return `Grandchild.trackedText = ${this.trackedText}`;
    }
}