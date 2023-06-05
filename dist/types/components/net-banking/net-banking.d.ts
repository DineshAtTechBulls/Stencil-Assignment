import 'bootstrap/dist/js/bootstrap.bundle.js';
export declare class NetBanking {
  isModalOpen: boolean;
  tappedElement: HTMLElement;
  prevSelected: HTMLElement;
  selectedElement: HTMLSelectElement;
  elements: Array<HTMLElement>;
  modalHandler(): void;
  selectHandler(): void;
  render(): any;
}
