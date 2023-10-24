import type IInitialValue from "../interfaces/IInitialValue";
import type IDefaultValue from "../interfaces/IDefaultValue";

export default function getDelay(
  element: HTMLElement,
  defaultValue: IDefaultValue,
  initialValue?: IInitialValue
) {
  return Number(
    element.getAttribute("wajik-delay") ||
      element.parentElement?.getAttribute("wajik-delay") ||
      initialValue?.delay ||
      defaultValue.delay
  );
}
