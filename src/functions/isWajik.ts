export default function isWajik(element: HTMLElement) {
  return (
    element.dataset.wajik !== undefined ||
    element.parentElement?.dataset.wajik !== undefined
  );
}
