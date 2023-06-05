import { Component, Fragment, State, h } from '@stencil/core';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import inputJson from '../../input.json';
import { Root } from '../../utils/modals';

@Component({
  tag: 'net-banking',
  styleUrls: ['net-banking.css'],
  shadow: true,
})
export class NetBanking {

  @State() isModalOpen:boolean = false;

  tappedElement:HTMLElement;

  prevSelected:HTMLElement;

  selectedElement: HTMLSelectElement;

  elements:Array<HTMLElement> = [];

  modalHandler(){
    this.isModalOpen = !this.isModalOpen;
  } 

  selectHandler(){
    console.log(this.selectedElement.selectedOptions[0].attributes["id"].nodeValue);
    const id:string = this.selectedElement.selectedOptions[0].attributes["id"].nodeValue;

    const jsonDetail:Root = inputJson;
    console.log(this.elements);

    console.log("previous selected element: " + this.prevSelected);
    

    if(parseInt(id.substring(4)) <= jsonDetail.body.popularBanks.length){

      const matchedElement = this.elements.find((elem:HTMLElement) => (elem.attributes["id"].nodeValue == id));

      if(!!this.prevSelected && this.prevSelected != matchedElement){
        this.prevSelected.classList.remove("selected");
      }

      this.prevSelected = matchedElement;
      
      if(!!matchedElement)
        matchedElement.classList.add("selected");
   
    }
  }

  render() {
    const jsonData: Root = inputJson;

    const header = (
      <div class="header common">
        <div>
          <img width="100" height="50" src={jsonData.header.image}></img>
        </div>
        <img onClick={this.modalHandler.bind(this)} width="80" height="60" src={jsonData.header.button} alt="" srcset="" />
      </div>
    );

    const body = (
      <div class="body common">
        <div>
          <div>Popular banks:</div>
          <div class="popularBank" style={{ 'background-color': 'rgba(236, 236, 236,0.8)' }}>
            {jsonData.body.popularBanks.map(bank => {
              return (
                <div ref={el => this.elements.push(el)} class="image-wrapper" id={"bank-"+bank.id.toString()}>
                  <img  width="85" height="50" src={bank.image} alt="" srcset="" />
                </div>
              );
            })}
          </div>
          <div>
            Bank list
            <br />
            <div class="bank-list-wrapper">
              <select class="custom-select" ref={e => 
                  this.selectedElement = e as HTMLSelectElement
                } onChange={this.selectHandler.bind(this)}>
                {jsonData.body.bankList.map(bank => {
                  return <option id={"bank-"+bank.id.toString()}>{bank.name}</option>;
                })}
              </select>
            </div>
          </div>
          <div class="bank-list-wrapper">
            <button class="button" type="submit">
              {jsonData.body.button.name}
            </button>
          </div>
        </div>
      </div>
    );

    const footer = (
      <div class="footer common">
        <img class="logo" src={jsonData.footer.logo} alt="" srcset="" />
      </div>
    );

    return (
      <Fragment>
        <button onClick={this.modalHandler.bind(this)} class="btn btn-primary">Launch Net Banking</button>

        {

          this.isModalOpen &&

        (<div class="backdrop">
          <div class="modal">
            {header}
            {body}
            {footer}
          </div>
        </div>)
      } 
      </Fragment>
    );
  }
}
