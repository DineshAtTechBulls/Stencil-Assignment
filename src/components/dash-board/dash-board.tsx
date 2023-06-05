import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'dash-board',
  styleUrl: 'dash-board.css',
  shadow: true,
})
export class DashBoard {

  @Prop() open: boolean;

  @State() isCounter?: boolean = true;

  netBankingListener(e:any){

    console.log("event: " + e.detail);
    
    this.switchView();
    
  }

  counterListener(e:any){
    console.log("event: " + e.detail);
    this.switchView();
  }

  switchView(){
    this.isCounter = !this.isCounter ?? true;
  }


  render() {

    const buttons = [
      {
        name: 'counter',
        class: 'counter',
        listener : this.counterListener,
        active: this.isCounter
      },
      {
        name: 'net-banking',
        class: 'net-banking',
        listener: this.netBankingListener,
        active: !this.isCounter
      }
    ];

    return (
      <div>
        <header>DashBoard</header>
        {buttons.map(d => <my-button class={`${d.class} ${d.active ? d.active : ''}`} name={d.name} onButtonClicked={d.listener.bind(this)}>{d.name}</my-button>)}
        
        {this.isCounter && <my-counter></my-counter>}
        {!this.isCounter && <net-banking></net-banking>}
      </div>
    );
  }

}