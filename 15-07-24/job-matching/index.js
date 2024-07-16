// Let's build a matchmaking system that helps discover jobs for developers
// based on a number of factors.

// One of the simplest, yet most important factors is compensation.
// As developers we know how much money we need to support our lifestyle,
// so we generally have a rough idea of the minimum salary we would be satisfied with.

// Let's give this a try. We'll create a function match (job_matching in Python)
// which takes a candidate and a job, which will return a Boolean indicating whether
// the job is a valid match for the candidate.

// A candidate will have a minimum salary, so it will look like this:
let candidate = {
  minSalary: 120000,
};
// A job will have a maximum salary, so it will look like this:

let job = {
  maxSalary: 150000,
};

// If either the candidate's minimum salary or the job's
// maximum salary is not present, throw an error.

// For a valid match, the candidate's minimum salary must be
// less than or equal to the job's maximum salary. However,
// let's also include 10% wiggle room (deducted from the candidate's minimum salary)
//   in case the candidate is a rockstar who enjoys programming on Codewars in their spare time.
//   The company offering the job may be able to work something out.

// -----------------

// input: object
// output: boolean

// algo
// 1. check if minSalary and maxSalary are present
// 2. if not, throw an error
// 3. check if minSalary is less than or equal to maxSalary
// 4. if not, return false
// 5. return true

// v1
// function match(candidate, job) {
//   if (!candidate.minSalary || !job.maxSalary) {
//     throw new Error("Invalid input");
//   }
//   return candidate.minSalary <= job.maxSalary * 1.1;
// }

// v2
function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary) {
    throw new Error("Invalid input");
  }
  return candidate.minSalary * 0.9 <= job.maxSalary;
}

// v3
// const match = (candidate, job) => (!candidate.minSalary || !job.maxSalary)
//     ? new Error("Invalid input")
//     : candidate.minSalary * 0.9 <= job.maxSalary


console.log(match(candidate, job));