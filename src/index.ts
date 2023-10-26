import type IWajikGulir from "./interfaces/IWajikGulir";
import type IInitialValue from "./interfaces/IInitialValue";
import type IMain from "./interfaces/IMain";
import defaultValue from "./util/defaultValue";
import getDelay from "./functions/getDelay";
import getDuration from "./functions/getDuration";
import getView from "./functions/getView";
import getTimingFunction from "./functions/getTimingFunction";
import getAwait from "./functions/getAwait";
import isView from "./functions/isView";
import isAsync from "./functions/isAsync";
import isWajik from "./functions/isWajik";
import setAnimation from "./functions/setAnimation";
import waitForElement from "./functions/waitForElement";

const wajikGulir: IWajikGulir = {
  cus(initialValue?: IInitialValue) {
    const main: IMain = {
      async: {
        init() {
          waitForElement("[data-wajik-async]", (elements) => {
            for (const element of elements) {
              const children = [...element.children] as HTMLElement[];

              if (children.length > 0) {
                for (const child of children) {
                  if (isAsync(child) && isWajik(child)) {
                    setAnimation(child, "hide");
                  }
                }
              }
            }
          });
        },

        start() {
          waitForElement("[data-wajik-async]", (elements) => {
            for (const element of elements) {
              const children = [...element.children] as HTMLElement[];

              const view = getView(element, defaultValue, initialValue);

              let awaiter = 0;

              if (children.length > 0) {
                if (isView(element, view)) {
                  for (const [index, child] of children.entries()) {
                    if (isAsync(child) && isWajik(child)) {
                      const _await = getAwait(
                        child,
                        defaultValue,
                        initialValue
                      );

                      const delay = getDelay(child, defaultValue, initialValue);
                      const duration = getDuration(
                        child,
                        defaultValue,
                        initialValue
                      );
                      const timingFunction = getTimingFunction(
                        child,
                        defaultValue,
                        initialValue
                      );

                      child.style.transition = `all ${duration}ms ${timingFunction} ${delay}ms`;

                      setAnimation(child, "show");

                      child.style.transition = `all ${duration}ms ${timingFunction} ${
                        awaiter + delay
                      }ms`;

                      awaiter += _await;
                    }
                  }
                } else {
                  for (const child of children) {
                    if (isAsync(child) && isWajik(child)) {
                      if (!initialValue?.oneAction) {
                        child.style.transition = "all 400ms ease 0ms";

                        setAnimation(child, "hide");
                      }
                    }
                  }
                }
              }
            }
          });
        },
      },

      basic: {
        init() {
          waitForElement("[data-wajik]", (elements) => {
            for (const element of elements) {
              if (!isAsync(element)) setAnimation(element, "hide");
            }
          });
        },

        start() {
          waitForElement("[data-wajik]", (elements) => {
            for (const element of elements) {
              if (!isAsync(element)) {
                const delay = getDelay(element, defaultValue, initialValue);
                const duration = getDuration(
                  element,
                  defaultValue,
                  initialValue
                );
                const timingFunction = getTimingFunction(
                  element,
                  defaultValue,
                  initialValue
                );
                const view = getView(element, defaultValue, initialValue);

                if (isView(element, view)) {
                  element.style.transition = `all ${duration}ms ${timingFunction} ${delay}ms`;

                  setAnimation(element, "show");
                } else {
                  if (!initialValue?.oneAction) {
                    element.style.transition = "all 400ms ease 0ms";

                    setAnimation(element, "hide");
                  }
                }
              }
            }
          });
        },
      },
    };

    function init() {
      main.async.init();
      main.basic.init();
    }

    function start() {
      main.async.start();
      main.basic.start();
    }

    init();
    start();

    document.addEventListener("scroll", function () {
      start();
    });
  },
};

// DEV
wajikGulir.cus();

// BUILD
// export default wajikGulir;
