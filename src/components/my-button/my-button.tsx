import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';


@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true
})
export class MyButton {

  @Prop() name: string;

  @Event() buttonClicked: EventEmitter;

  handleButtonClick(){
    this.buttonClicked.emit(this.name);
  }

  render() {
    return (
      <button onClick={this.handleButtonClick.bind(this)}>{this.name}</button>
    );
  }

}
