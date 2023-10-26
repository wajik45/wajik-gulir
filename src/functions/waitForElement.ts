type ElementsWajik = NodeListOf<HTMLElement> | HTMLElement[];

export default function waitForElement(
  findMany: string,
  callback: (elements: ElementsWajik) => any
) {
  const elements: ElementsWajik = document.querySelectorAll(findMany);

  if (elements.length < 1) {
    const start = performance.now();

    function checkElement() {
      const elements: ElementsWajik = document.querySelectorAll(findMany);

      if (elements.length > 0) {
        callback(elements);
      } else {
        const currentTime = performance.now();

        if (currentTime - start < 5000) {
          requestAnimationFrame(checkElement);
        } else {
          return;
        }
      }
    }

    requestAnimationFrame(checkElement);
  } else {
    callback(elements);
  }
}
