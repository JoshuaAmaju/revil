export function deepFind(box: object, value: string) {
  let result = box[value];

  if (!result) {
    for (const key in box) {
      let item = box[key];
      if (is.object(item)) {
        result = deepFind(item, value);
      }
    }
  }

  return result;
}

export const is = {
  object(box: object) {
    return Object.prototype.toString.call(box) === "[object Object]";
  }
};
