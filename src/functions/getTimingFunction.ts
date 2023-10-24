import type IInitialValue from "../interfaces/IInitialValue";
import type IDefaultValue from "../interfaces/IDefaultValue";

export default function getTimingFunction(
  element: HTMLElement,
  defaultValue: IDefaultValue,
  initialValue?: IInitialValue
) {
  return (
    element.getAttribute("wajik-timing-function") ||
    element.parentElement?.getAttribute("wajik-timing-function") ||
    initialValue?.timingFunction ||
    defaultValue.timingFunction
  );
}
