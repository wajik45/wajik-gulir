import type IInitialValue from "../interfaces/IInitialValue";
import type IDefaultValue from "../interfaces/IDefaultValue";
import type ViewType from "../types/ViewType";

export default function getView(
  element: HTMLElement,
  defaultValue: IDefaultValue,
  initialValue?: IInitialValue
) {
  return (
    (element.dataset.wajikView as ViewType) ||
    (element.parentElement?.dataset.wajikView as ViewType) ||
    initialValue?.view ||
    defaultValue.view
  );
}
