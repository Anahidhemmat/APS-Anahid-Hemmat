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
