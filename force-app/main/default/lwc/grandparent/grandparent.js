import { LightningElement, track } from "lwc";

const PLACEHOLDER =
  "Enter a value for trackedText to see it propagate through the Hierarchy";

export default class Grandparent extends LightningElement {
  @track _trackedText;

  get placeholderText() {
    return PLACEHOLDER;
  }
  get trackedText() {
    return this._trackedText ? this._trackedText : PLACEHOLDER;
  }
  get displayText() {
    return `Grandparent.trackedText = ${this.trackedText}`;
  }

  handleInput(event) {
    this._trackedText = event.target.value;
  }
}
