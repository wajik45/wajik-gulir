interface InitialValue {
  delay?: number;
  duration?: number;
  await?: number;
  timingFunction?: string;
  view?: "top" | "middle" | "bottom";
  oneAction?: boolean;
}

interface WajikGulir {
  cus(options?: InitialValue): void;
}

declare const wajikGulir: WajikGulir;

export = wajikGulir;
