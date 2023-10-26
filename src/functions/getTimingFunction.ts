import type IInitialValue from "../interfaces/IInitialValue";
import type IDefaultValue from "../interfaces/IDefaultValue";

export default function getTimingFunction(
  element: HTMLElement,
  defaultValue: IDefaultValue,
  initialValue?: IInitialValue
) {
  return (
    element.dataset.wajikTimingFunction ||
    element.parentElement?.dataset.wajikTimingFunction ||
    initialValue?.timingFunction ||
    defaultValue.timingFunction
  );
}
