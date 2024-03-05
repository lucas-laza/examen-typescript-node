import { readFileSync } from "fs";

function getStatistics(): number {
  const persons: {"age": number, "height": number}[] = JSON.parse(readFileSync("./persons.json").toString());

  let maxAge: number = 0;
  persons.forEach(person => {
    if (person.age !== undefined && person.age > maxAge) {
      maxAge = person.age;
    }
  });

  return maxAge;
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
