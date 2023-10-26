import type IInitialValue from "../interfaces/IInitialValue";
import type IDefaultValue from "../interfaces/IDefaultValue";

export default function getDelay(
  element: HTMLElement,
  defaultValue: IDefaultValue,
  initialValue?: IInitialValue
) {
  return Number(
    element.dataset.wajikDelay ||
      element.parentElement?.dataset.wajikDelay ||
      initialValue?.delay ||
      defaultValue.delay
  );
}
