import { api, LightningElement, track } from 'lwc';

export default class Parent extends LightningElement {
    // @api trackedText;

    @track _trackedText;

    @api set trackedText(value) {
        this._trackedText = value;
    };
    get trackedText() {
        return this._trackedText;
    }

    get displayText() {
        return `Parent.trackedText = ${this.trackedText}`;
    }
}