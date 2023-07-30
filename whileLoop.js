const percentageOfWorld = function (population){
    return (population / 7900) * 100;
}
const population = [10, 1441, 332, 83]; 
const percentages3 = [];
let i = 0;
    while (i < population.length){
const perc = percentageOfWorld(population[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);


/*const percentageOfWorld = function (population){
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

console.log(types);*/
