import type IInitialValue from "../interfaces/IInitialValue";
import type IDefaultValue from "../interfaces/IDefaultValue";

export default function getDuration(
  element: HTMLElement,
  defaultValue: IDefaultValue,
  initialValue?: IInitialValue
) {
  return Number(
    element.dataset.wajikDuration ||
      element.parentElement?.dataset.wajikDuration ||
      initialValue?.duration ||
      defaultValue.duration
  );
}
