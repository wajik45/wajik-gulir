export default function getCssUnit(arr: string[], type: string) {
  const filter = [arr[arr.length - 1]].filter((item) => {
    if (item.match(/\d+/g)) return item.startsWith(type);
  });

  if (filter.length > 0) {
    return filter[0].replace(/\(|\)/g, "").replace(type, "");
  }
}
