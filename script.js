let selectedValue = document.getElementById("list").value;
function getSelectedValue() {
  selectedValue = document.getElementById("list").value;
}

const employeeArr = [
  { id: 1, name: "John",  profession: "Developer",age: "18" },
  { id: 2, name: "Jack", profession: "Developer", age: "20" },
  { id: 3, name: "Karen", profession: "Admin", age: "19" },
];


filterEmployee = () => {
  var filteredArray = employeeArr.filter(filteredEmployee);
  var text = "";
  filteredArray.forEach(myFun);

  function myFun(user) {
    text +=
      user.id +
      ". " + 
      "Name:"+ user.name +
      " " +
     "Profession:"+ user.profession +
      " " +
      "Age:"+ user.age +
      "" +
      "<br>";
  }
  document.getElementById("item").innerHTML = text;
};

filteredEmployee = (employee) => {
  if (selectedValue == "profession") {
    return true;
  }
  return employee.profession == selectedValue;
};
filterEmployee();


