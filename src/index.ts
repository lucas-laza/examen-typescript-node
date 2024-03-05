import { readFileSync } from "fs";

type Person = { age: number; height: number };

function getStatistics(): { meanAge: number, meanHeight: number } {
  const persons: Person[] = JSON.parse(readFileSync("./persons.json").toString());

  let meanAge: number = 0;
  let meanHeight: number = 0;
  
  for (let index = 0; index < persons.length; index++) {
    if (
      !Object.hasOwn(persons[index], 'age') || 
      typeof persons[index].age !== 'number' || 
      isNaN(persons[index].age) ||
      !Object.hasOwn(persons[index], 'height') ||
      typeof persons[index].height !== 'number' || 
      isNaN(persons[index].height)
    ) {
      throw new Error("Wrong data");
    }
    meanAge += persons[index].age;
    meanHeight += persons[index].height;
  }

  meanAge = meanAge / persons.length;
  meanHeight = meanHeight / persons.length;

  return {
    meanAge,
    meanHeight
  };
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
