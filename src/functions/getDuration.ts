import type IInitialValue from "../interfaces/IInitialValue";
import type IDefaultValue from "../interfaces/IDefaultValue";

export default function getDuration(
  element: HTMLElement,
  defaultValue: IDefaultValue,
  initialValue?: IInitialValue
) {
  return Number(
    element.getAttribute("wajik-duration") ||
      element.parentElement?.getAttribute("wajik-duration") ||
      initialValue?.duration ||
      defaultValue.duration
  );
}
