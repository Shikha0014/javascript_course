for (let voter = 1; voter <= 50; voter++) {
console.log(`Voter number ${voter} is currently voting`);
}
const percentageOfWorld = function (population){
    return (population / 7900) * 100;
       
}
const types = [];
const population = [10, 1441, 332, 83]; 
const percentages2 = [];
for (let i = 0; i < population.length; i++) {
const perc = percentageOfWorld(population[i]);
  percentages2.push(perc);
  types[i] = typeof population[i];
}
console.log(percentages2);

console.log(types);

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
 for(let i = 0; i < listOfNeighbours.length; i++)
  for(let y = 0; y < listOfNeighbours[i].length; y++)
       console.log(listOfNeighbours[i][y]);


//  const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
//  for(let i = listOfNeighbours.length - 1; i >= 0; i--)
//    //console.log(listOfNeighbours[i]);
//    for(let j = listOfNeighbours[i].length - 1; j >= 0; j--);
//   console.log(listOfNeighbours[i][j])

 
 const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */
const bills =[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []
for(let i = 0; i < bills.length; i++){
//console.log(bills[i])
tips.push(calcTip(bills[i]))
console.log(bills[i]+tips[i])
totals.push(bills[i]+tips[i])
}
console.log(tips,totals)

