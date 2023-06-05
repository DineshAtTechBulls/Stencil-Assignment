import type { Components, JSX } from "../types/components";

interface NetBanking extends Components.NetBanking, HTMLElement {}
export const NetBanking: {
  prototype: NetBanking;
  new (): NetBanking;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
