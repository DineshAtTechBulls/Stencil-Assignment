import type { Components, JSX } from "../types/components";

interface MyCounter extends Components.MyCounter, HTMLElement {}
export const MyCounter: {
  prototype: MyCounter;
  new (): MyCounter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
