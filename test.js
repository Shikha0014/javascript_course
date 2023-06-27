//console.log('dev');
let country = "India"
let continent = "Asia"
let populationI = 10
console.log (country, continent, populationI);

console.log (typeof "dev");

country = "australia"
console.log (country);

// data type
let isIsland = true;
const language = "Hindi";
console.log(typeof isIsland,typeof population,typeof country,typeof language);

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

/*let country1 = 'Portugal' ;
let population1 = 11 ;
let language1 = 'portuguese' ;

let description_New = `${country1} is in Europe, and its ${population1} million people speak ${language1}`;
console.log (description_New); */

if (populationI > 33){
    console.log(`Portugal's population is above average'.`);

}else{
    console.log(`Portugal's population is 22 million below average`)
}
