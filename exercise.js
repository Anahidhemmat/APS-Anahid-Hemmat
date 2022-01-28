function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
for (let i = 0; i < arrayOfPeople.length; i++) {
  h1.textContent +=  arrayOfPeople[i].name + " "; 
content.append(h1);
h2.textContent += arrayOfPeople[i].job + " ";
content.append(h2);
}
  
}

let people = [
  { name: "Alireza", job: "Teacher" },
  { name: "Jafar", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
]

listOfNames(people);




///////////////////////////////
