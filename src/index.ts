import { readFileSync } from "fs";

function getStatistics(): {meanAge: number, meanHeight: number} {
  const persons: {"age": number, "height": number}[] = JSON.parse(readFileSync("./persons.json").toString());

  let meanAge: number = 0;
  let meanHeight: number = 0;
  
  for (let index = 0; index < persons.length; index++) {
    meanAge += persons[index].age;
    meanHeight += persons[index].height;
  }

  meanAge = meanAge / persons.length
  meanHeight = meanHeight / persons.length

  return {
    meanAge: meanAge,
    meanHeight: meanHeight
  };
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
