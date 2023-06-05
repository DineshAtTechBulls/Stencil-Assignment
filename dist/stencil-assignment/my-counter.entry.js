import { r as registerInstance, h, e as Host } from './index-9f73a17e.js';

const myCounterCss = ".highlight{color:green}.warn{color:red}";

const MyCounter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.count = 0;
    this.open = undefined;
  }
  clickListenerHandler(event) {
    console.log("counter:" + event.detail);
    if (!Number.isNaN(event.detail))
      this.count++;
  }
  connectedCallback() {
    console.log("connected callback");
  }
  disconnectedCallback() {
    console.log("disconnected callback");
  }
  componentDidLoad() {
    console.log('Component has been rendered');
  }
  componentDidUpdate() {
    console.log('Component did update');
  }
  componentWillLoad() {
    console.log('Component is about to be rendered');
  }
  componentWillUpdate() {
    console.log('Component will update and re-render');
  }
  watchCountVariable(newValue, oldValue, propName) {
    console.log(`newValue : ${newValue}, oldValue : ${oldValue}, propName : ${propName}`);
  }
  render() {
    return (h(Host, null, h("p", null, "counter value = ", h("code", { class: this.count > 5 ? "highlight" : "warn" }, this.count)), h("my-button", { name: 'count', onButtonClicked: e => this.clickListenerHandler(e) })));
  }
  static get watchers() { return {
    "count": ["watchCountVariable"]
  }; }
};
MyCounter.style = myCounterCss;

export { MyCounter as my_counter };

//# sourceMappingURL=my-counter.entry.js.map