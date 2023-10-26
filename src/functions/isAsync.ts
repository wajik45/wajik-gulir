export default function isAsync(element: HTMLElement) {
  return (
    element.dataset.wajikAsync !== undefined ||
    element.parentElement?.dataset.wajikAsync !== undefined
  );
}
