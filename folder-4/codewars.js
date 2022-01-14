//Job Matching #1
function match(candidate, job) {
  // is this job a valid match for the candidate?
  candidate.minSalary = candidate.minSalary - (candidate.minSalary * 10) / 100;
  if (candidate.minSalary <= job.maxSalary) {
    return true;
  } else if (candidate.minSalary > job.maxSalary) {
    return false;
  } else {
    throw new Error("error");
  }
}

//Crash Override
function aliasGen(name, lastName) {
  // Code Here
  let regExp = /^[a-z]/i;
  if (regExp.test(name) && regExp.test(lastName)) {
    name = name[0].toUpperCase();
    lastName = lastName[0].toUpperCase();
    return `${firstName[name]} ${surname[lastName]}`;
  } else {
    return "Your name must start with a letter from A - Z.";
  }
}
