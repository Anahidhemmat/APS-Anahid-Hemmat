//Welcome!

const languages = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};

function greet(language) {
  Object.keys(languages);
  return languages[language] || "Welcome";
}

//Training JS #5: Basic data types--Object
function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

//Split The Bill

var group = {
  A: 20.45677,
  B: 15,
  C: 10,
};
function splitTheBill(x) {
  //code away...
  x.A = x.A - x.B;
  x.B = 0;
  x.C = x.B - x.A;
  for (let keys in x) {
    if (x[keys] % 1 !== 0) {
      x[keys] = x[keys].toFixed(2);
      return x;
    }
  }
  return x;
}

console.log(splitTheBill(group));
//Job Matching #1
let candidate1 = { minSalary: 120000 };
let job1 = { maxSalary: 130000 };
let job2 = { maxSalary: 80000 };
function match(candidate, job) {
  // is this job a valid match for the candidate?
  if (candidate.minSalary > job.maxSalary) {
    return true;
  } else if (candidate.minSalary > job.maxSalary) {
    return false;
  }
  
}
console.log(match(candidate1, job1));
