import type IInitialValue from "../interfaces/IInitialValue";
import type IDefaultValue from "../interfaces/IDefaultValue";

export default function getAwait(
  element: HTMLElement,
  defaultValue: IDefaultValue,
  initialValue?: IInitialValue
) {
  return Number(
    element.getAttribute("wajik-await") ||
      element.parentElement?.getAttribute("wajik-await") ||
      initialValue?.await ||
      defaultValue.await
  );
}
