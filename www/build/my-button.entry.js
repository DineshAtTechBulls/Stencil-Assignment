import { r as registerInstance, f as createEvent, h } from './index-9f73a17e.js';

const myButtonCss = ":host{display:block}";

const MyButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.buttonClicked = createEvent(this, "buttonClicked", 7);
    this.name = undefined;
  }
  handleButtonClick() {
    this.buttonClicked.emit(this.name);
  }
  render() {
    return (h("button", { onClick: this.handleButtonClick.bind(this) }, this.name));
  }
};
MyButton.style = myButtonCss;

export { MyButton as my_button };

//# sourceMappingURL=my-button.entry.js.map