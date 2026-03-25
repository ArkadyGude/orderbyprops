export default function orderByProps(obj, order = []) {
  const result = [];
  for (const key of order) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push({ key, value: obj[key] });
    }
  }

  const remainingKeys = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && !order.includes(key)) {
      remainingKeys.push(key);
    }
  }

  remainingKeys.sort();

  for (const key of remainingKeys) {
    result.push({ key, value: obj[key] });
  }

  return result;
}
