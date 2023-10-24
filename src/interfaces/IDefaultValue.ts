import type ViewType from "../types/ViewType";

export default interface IDefaultValue {
  delay: number;
  duration: number;
  await: number;
  timingFunction: string;
  view: ViewType;
  oneAction: boolean;
}
