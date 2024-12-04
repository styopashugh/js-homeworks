import { employees } from "./employers";

function transformUserData(data = []) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    let { firstName, lastName, ...item } = data[i];
    result.push({
      fullName: `${firstName} ${lastName} `,
      ...item,
    });
  }
  console.log(result);
  return result;
}

transformUserData(employees);
///////////////////////////////////////
/////////////////////////////////////////////////

function foo(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % k == 0) {
      console.log(arr.indexOf(arr[i]));
    }
  }
}

foo([1, 14, 3, 4, 5, 49, 70], 2);
