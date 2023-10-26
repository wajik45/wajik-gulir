import type IInitialValue from "../interfaces/IInitialValue";
import type IDefaultValue from "../interfaces/IDefaultValue";

export default function getAwait(
  element: HTMLElement,
  defaultValue: IDefaultValue,
  initialValue?: IInitialValue
) {
  return Number(
    element.dataset.wajikAwait ||
      element.parentElement?.dataset.wajikAwait ||
      initialValue?.await ||
      defaultValue.await
  );
}
