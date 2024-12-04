export const employees = [
    {
      firstName: "Karen",
      lastName: "Sargsyan",
      department: "HR",
      sellery: 133,
      age: 23,
    },
    { firstName: "John", lastName: "Grigoryan", department: "IT", sellery: 3453 },
    {
      firstName: "Margarita",
      lastName: "Ananayan",
      department: "HR",
      sellery: 7888,
    },
    {
      firstName: "Aram",
      lastName: "Virabyan",
      department: "Finance",
      sellery: 666,
    },
    { firstName: "Nina", lastName: "Saqanyan", department: "IT", sellery: 5555 },
  ];
  
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