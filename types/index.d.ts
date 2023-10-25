declare module "react" {
  interface HTMLAttributes<T> extends React.DOMAttributes<T> {
    wajik?: string;
    "wajik-async"?: boolean;
    "wajik-delay"?: number | string;
    "wajik-duration"?: number | string;
    "wajik-await"?: number | string;
    "wajik-timing-function"?: string;
    "wajik-view"?: "top" | "middle" | "bottom";
  }
}

declare const wajikGulir: {
  cus(initialValue?: {
    delay?: number;
    duration?: number;
    await?: number;
    timingFunction?: string;
    view?: "top" | "middle" | "bottom";
    oneAction?: boolean;
  }): void;
};

export = wajikGulir;
export default wajikGulir;
