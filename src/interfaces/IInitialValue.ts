import type ViewType from "../types/ViewType";

export default interface IInitialValue {
  delay?: number;
  duration?: number;
  await?: number;
  timingFunction?: string;
  view?: ViewType;
  oneAction?: boolean;
}
