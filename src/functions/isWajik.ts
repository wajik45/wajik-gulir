export default function isWajik(element: HTMLElement) {
  return (
    element.getAttribute("wajik") ||
    element.parentElement?.getAttribute("wajik")
  );
}
