import { api, LightningElement, track } from "lwc";

export default class Parent extends LightningElement {
  @api trackedTextFlat;

  @track _trackedText;

  @api
  set trackedTextGetterSetter(value) {
    this._trackedText = value;
  }
  get trackedTextGetterSetter() {
    return this._trackedText;
  }

  get displayTextFlat() {
    return `Parent.trackedTextFlat = ${this.trackedTextFlat}`;
  }

  get displayTextGetterSetter() {
    return `Parent.trackedTextGetterSetter = ${this.trackedTextGetterSetter}`;
  }
}
