console.log('dev');
let country1 = "India"
let continent = "Asia"
let populationI = 10
console.log (country1, continent, populationI);

console.log (typeof "dev");

let country4 = "australia"
console.log (country4);

// data type
let isIsland1 = true;
let language1 = "Hindi";
console.log(typeof isIsland1,typeof populationI,typeof country4,typeof language1);

//let var const
//language = "english" //typeError: Assignment to constant variable.

// basic operators
console.log (populationI+1);

let finlandPopulation = 6;
console.log (populationI > finlandPopulation);

let avgpopulation = 33;
console.log (populationI < avgpopulation);

//Coding Challenge #1
const marksMass = 78;
const marksHeight = 1.69;
const johnsmass  = 95;
const johnsheight = 1.88;

const marksBMI =  marksMass / ( marksHeight ** 2);
console.log(marksBMI);

const johnsBMI = johnsmass / (johnsheight ** 2);
console.log(johnsBMI);

const markHigherBMI = marksBMI > johnsBMI;
console.log(markHigherBMI);

//Coding Challenge #2
if(marksBMI > johnsBMI){
    console.log(`Mark's BMI ${marksBMI} is higher than John's BMI ${johnsBMI}!`);
}else{
    console.log(`John's BMI ${johnsBMI} is higher than Mark's ${marksBMI}!`);
    
}

let description = 'Portugal is in Europe, and its 11 million people speak portuguese';

// string template literals

let country2 = 'Portugal' ;
let population1 = 11 ;
let language2 = 'portuguese' ;

let description_New = `${country1} is in Europe, and its ${population1} million people speak ${language1}`;
console.log (description_New); 

if (populationI > 33){
    console.log(`Portugal's population is above average'.`);

}else{
    console.log(`Portugal's population is 22 million below average`)
}
let year = '1991';
console.log(year + 12);
console.log(String(23),23);

console.log ('9' - '5'); //4
console.log (    '19' - '13' + '17');  //617
console.log (    19 - 13 + '17');    //617
console.log (    '19' - '13' + 17);  //23
console.log (    '123' < 57);
console.log (   5 + 6 + '4' + 9 - 4 - 2); // 1143

const numNeighbour = '1';
if (numNeighbour === 1){
    console.log( 'only' );
}else if(numNeighbour == 0){
    console.log('zero');
}else {
    console.log('no' )
}


// Logic Operators
let country = "Portugal";
let language3 = "english";
const population = 50;
const isIsland = true;

if(language3 == "english" && population < 50 && !isIland){
    console.log(`you should live in ${country}`);
}else{
    console.log(`${country} does not match your criteria`);
}

const scoreDolphins = (96 + 108 + 89)/3;
console.log(scoreDolphins);
const scoreKoalas = (88 + 91 + 110)/3;
console.log(scoreKoalas);
if(scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy")
}else if (scoreDolphins < scoreKoalas){
    console.log("Koalas win the trophy")
}else {
    console.log("Both win the trophy")
}


// Switch statemanet

let language = "french";

switch(language){
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':  
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');                    
} 

// Ternary operator

let countryPopulation = 34;
const Toper = countryPopulation > 33 ? 'Portugal\'s population is above average' :'Portugal\'s population is below average';
console.log(Toper);

// Coding Challenge #2
const bill = 375;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.02;
const total = bill + tip;
console.log(`the bill was ${bill} , the tip was ${tip} , and the total value is ${total}`); 


function logger(){
    console.log("my name is test");
    console.log("abcd");
}
logger(); //calling / running / invoking function

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
  
  let value = toCelsius;
  console.log(value);

function describeCountry (country,population,capitalCity){
    return`${country} has ${population} milllion people and its capital city is ${capitalCity}`;
}
  const descIndia = describeCountry('india',9,'delhi');
  console.log(descIndia);

// function declaration

function percentageOfWorld1 (population){
    return (population / 7900) * 100;
}
const decPercentage1 = percentageOfWorld1 (1441);
console.log(percentageOfWorld1 (1554));
console.log(decPercentage1);

// funtion expression
const percentageOfWorld2 = function (population){
    return (population / 7900) * 100;
}
const funExpression1 = percentageOfWorld2(1441);
console.log(funExpression1);
console.log(percentageOfWorld2(1554));

// arrow function
const percentageOfWorld3 = population => (population / 7900) * 100;
const arrowFun = percentageOfWorld3(1554);
console.log(arrowFun);
console.log(percentageOfWorld3 (1441));

//Functions Calling Other Functions
function percentageOfWorld1 (population){
    return (population / 7900) * 100;
}
const describePopulation = function (country,population){
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} milllion people,which is about of ${percentage} the world.`;
}
console.log(describePopulation('India',1678));
console.log(describePopulation('USA', 332));

// coding challenge #1
 const calcAverage = (score1 , score2 , score3 )=> (score1 + score2 + score3)/3;
 const dolphinsScoreAvg = calcAverage(85, 54 ,41);
 const koalasScoreAvg = calcAverage(23, 34, 27);
 console.log(koalasScoreAvg,dolphinsScoreAvg);
 
 function checkWinner (koalasScoreAvg,dolphinsScoreAvg){
    if (koalasScoreAvg >= dolphinsScoreAvg * 2){
        console.log(`Koalas win ${koalasScoreAvg} vs. ${dolphinsScoreAvg})`);
    }else if (dolphinsScoreAvg >= koalasScoreAvg *2){
        console.log(`Dolphins win ${dolphinsScoreAvg} vs. ${koalasScoreAvg}`);
    }else {
        console.log("no team wins");
    }
 }
 checkWinner(koalasScoreAvg,dolphinsScoreAvg);

