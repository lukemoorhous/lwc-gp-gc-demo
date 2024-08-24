import { api, LightningElement, track } from "lwc";

export default class Grandchild extends LightningElement {
  @api trackedTextFlat;

  @track _trackedText;

  @api
  set trackedTextGetterSetter(value) {
    this._trackedText = value;
  }
  get trackedTextGetterSetter() {
    return this._trackedText;
  }
}