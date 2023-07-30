const myCountry = {
   conutry: 'India',
   capital: 'New Delhi',
   population: 1455,
   language: 'English',
   neighbours: ['Nepal','Lanka','Bhutan','Bangladesh'],

/*console.log(myCountry);

console.log(`${myCountry.conutry} has ${myCountry.population} million ${myCountry.language} Speaking people,${myCountry.neighbours.length} neighbours countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2 ;
console.log(myCountry.population);
myCountry['population'] -= 2 ;
console.log(myCountry.population);*/

 describe: function () {
    console.log(`${this.conutry} has ${this.population} million ${this.language} Speaking people,${this.neighbours.length} neighbours countries and a capital called ${this.capital}.`);
    },


 checkIsIsland: function(){
    this.isIsland = this.neighbours.length === 0 ? true : false;
 
    }
};
myCountry.describe();
myCountry.checkIsIsland();
console.log(myCountry);

const mark = {
    fullName: 'Mark Miller',
    weight: 78,
    height: 1.68,
    calcBMI: function() {
       this.bmi = this.weight / this.height ** 2;
       return this.bmi;
    }
};
const john = {
    fullName: 'John Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }

};

mark.calcBMI();
john.calcBMI();

if(mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`)
}else{
    console.log(`${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s (${mark.bmi})`)
}

