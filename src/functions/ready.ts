type ElementsWajik = NodeListOf<HTMLElement> | HTMLElement[];

function ready(select: string, callback: (elements: ElementsWajik) => void) {
  const elements: ElementsWajik = document.querySelectorAll(select);

  if (elements.length < 1) {
    const intervalId = setInterval(() => {
      const elements: ElementsWajik = document.querySelectorAll(select);

      if (elements.length > 0) {
        callback(elements);

        clearInterval(intervalId);
      } else {
        setTimeout(() => clearInterval(intervalId), 2000);
      }
    });
  } else {
    callback(elements);
  }
}

export default ready;
