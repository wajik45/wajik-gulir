interface IInitailValue {
  delay?: number;
  duration?: number;
  await?: number;
  timingFunction?: string;
  view?: "top" | "middle" | "bottom";
  oneAction?: boolean;
}

interface IWajikGulir {
  cus(options: IInitailValue): void;
}

declare const wajikGulir: IWajikGulir;

export = wajikGulir;
