import { Component, Host,  Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'my-counter',
  styleUrl: 'my-counter.css',
  shadow: true,
})
export class MyCounter{

  @State() count: number = 0;
  @Prop() open:boolean;

  clickListenerHandler(event){
      console.log("counter:"+ event.detail);
      if(!Number.isNaN(event.detail))
      this.count ++;
  }

  connectedCallback(){
    console.log("connected callback"); 
  }

  disconnectedCallback(){
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

  @Watch("count")
  watchCountVariable(newValue:number, oldValue:number, propName:string){
    console.log(`newValue : ${newValue}, oldValue : ${oldValue}, propName : ${propName}`);
    
  }


  render() {

    return (
      <Host>
        <p>counter value = <code class={this.count > 5 ? "highlight" : "warn"}>{this.count}</code></p>
        <my-button name='count' onButtonClicked={e => this.clickListenerHandler(e)}></my-button>
      </Host>
    );
  } 

}
