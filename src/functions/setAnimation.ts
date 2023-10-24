import getCssUnit from "./getCssUnit";
import getAnimations from "./getAnimations";

export default function setAnimation(element: HTMLElement, type: string) {
  const animationName =
    element.getAttribute("wajik") ||
    element.parentElement?.getAttribute("wajik");

  if (animationName) {
    const animationNameArr = animationName.split("-");
    const unit = {
      tr: getCssUnit(animationNameArr, "tr"),
      sc: getCssUnit(animationNameArr, "sc"),
      rt: getCssUnit(animationNameArr, "rt"),
    };
    const animations = getAnimations({
      tr: unit.tr,
      sc: unit.sc,
      rt: unit.rt,
    });

    animations.forEach((animation) => {
      if (animationName.startsWith(animation.name)) {
        if (type === "hide") {
          element.style.opacity = "0";
          return (element.style.transform = animation.transformValue.hide);
        }

        element.style.opacity = "1";
        return (element.style.transform = animation.transformValue.show);
      }
    });
  }
}
