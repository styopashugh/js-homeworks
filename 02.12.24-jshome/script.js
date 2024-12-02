const str1 = "react";
const str2 = "redux";
let commonCount = 0;
let checkedChars = "";

for (const i in str1) {
  if (str2.includes(str1[i])) {
    commonCount++;
    console.log(str1[i]);
    checkedChars = `Because the strings "react" and "redux" share the characters ${str1[i]}`;
  }
}
console.log(commonCount);
console.log(checkedChars);
