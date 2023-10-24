import ViewType from "../types/ViewType";

export default function isView(element: HTMLElement, view?: ViewType) {
  const elementTop = element.getBoundingClientRect().top;
  const elementHeight = element.getBoundingClientRect().height;
  const height = window.innerHeight || document.documentElement.clientHeight;

  if (view === "top") return elementTop <= height;
  if (view === "middle") return elementTop <= height - elementHeight / 2;
  if (view === "bottom") return elementTop <= height - elementHeight;

  return elementTop <= height - elementHeight / 2;
}
