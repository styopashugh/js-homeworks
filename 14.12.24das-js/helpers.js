export function findData(arr, callBack) {
  let findValue = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) {
      continue;
    }
    if (callBack(arr[i], i, arr)) {
      findValue = arr[i];
    }
  }

  return findValue;
}
