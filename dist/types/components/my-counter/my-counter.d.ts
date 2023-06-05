export declare class MyCounter {
  count: number;
  open: boolean;
  clickListenerHandler(event: any): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentDidLoad(): void;
  componentDidUpdate(): void;
  componentWillLoad(): void;
  componentWillUpdate(): void;
  watchCountVariable(newValue: number, oldValue: number, propName: string): void;
  render(): any;
}
