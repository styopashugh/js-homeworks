const employees = [
  { name: "Karen", department: "HR" },
  { name: "John", department: "IT" },
  { name: "Margarita", department: "HR" },
  { name: "Aram", department: "Finance" },
  { name: "Nina", department: "IT" },
];

const departmentCount = {};

for (const employer of employees) {
  if (!departmentCount[employer.department]) {
    departmentCount[employer.department] = 1;
  } else {
    departmentCount[employer.department] += 1;
  }
}
console.log(departmentCount);
