import type { Components, JSX } from "../types/components";

interface DashBoard extends Components.DashBoard, HTMLElement {}
export const DashBoard: {
  prototype: DashBoard;
  new (): DashBoard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
