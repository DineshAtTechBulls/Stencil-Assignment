import { r as registerInstance, h } from './index-9f73a17e.js';

const dashBoardCss = ":host{display:block}";

const DashBoard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.open = undefined;
    this.isCounter = true;
  }
  netBankingListener(e) {
    console.log("event: " + e.detail);
    this.switchView();
  }
  counterListener(e) {
    console.log("event: " + e.detail);
    this.switchView();
  }
  switchView() {
    var _a;
    this.isCounter = (_a = !this.isCounter) !== null && _a !== void 0 ? _a : true;
  }
  render() {
    const buttons = [
      {
        name: 'counter',
        class: 'counter',
        listener: this.counterListener,
        active: this.isCounter
      },
      {
        name: 'net-banking',
        class: 'net-banking',
        listener: this.netBankingListener,
        active: !this.isCounter
      }
    ];
    return (h("div", null, h("header", null, "DashBoard"), buttons.map(d => h("my-button", { class: `${d.class} ${d.active ? d.active : ''}`, name: d.name, onButtonClicked: d.listener.bind(this) }, d.name)), this.isCounter && h("my-counter", null), !this.isCounter && h("net-banking", null)));
  }
};
DashBoard.style = dashBoardCss;

export { DashBoard as dash_board };

//# sourceMappingURL=dash-board.entry.js.map