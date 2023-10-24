export default function isAsync(element: HTMLElement) {
  return (
    element.getAttribute("wajik-async") === "" ||
    element.parentElement?.getAttribute("wajik-async") === ""
  );
}
