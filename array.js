/*const populationArray = [1441,1145,1234,1556];
console.log(populationArray.length === 4);

const percentageOfWorld2 = function (population){
    return (population / 7900) * 100;
}
const percentages =[
    percentageOfWorld2(populationArray[0]),
    percentageOfWorld2(populationArray[1]),
    percentageOfWorld2(populationArray[2]),
    percentageOfWorld2(populationArray[3]),
]

console.log(percentages);
console.log(percentages[0]);                        //first element
console.log(percentages.length);                    //length
console.log(percentages[percentages.length -1])     //last element

populationArray[2] = 1880;
console.log(populationArray);  */                     // element change

const neighbours = ['Nepal','Lanka','Bhutan','Bangladesh'];
console.log(neighbours.push('Utopia'));
console.log(neighbours);
console.log(neighbours.pop());
console.log(neighbours)

if (neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}
neighbours[neighbours.indexOf('Lanka')] = 'Afghanistan';
console.log(neighbours);

function calcTip(bill){
    if (bill<=300 && bill>=50){
        return bill * 0.15;
    }else {
        return bill * 0.20;
    }
}
console.log(calcTip(100));

const bills =[125, 555 , 44];
const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2]),
]
console.log(tips , bills);

//const total =  tips + bills;
//console.log(total);



