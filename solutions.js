class Cat {
  constructor(hunger, age){
    this.hunger = 100;
    this.age = 0;
  }
  ageUp(){
    this.age ++;
  }
  hunger(){
    console.log('yum')
  }
}
const garfield = new Cat;
const bob = new Cat;
const catPerson = {
  cats: ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6']
}


const ageUp = (cat) => {
  cat.age ++;
}
ageUp(bob);
ageUp(bob);

catArray = [];
for (let i=0; i<6; i++){
  catArray.push(i);
}
console.log(catArray[3])


class Pirate {

  constructor(name, age, money){
    this.name = name;
    this.age = age;
    this.money = money;
  }
  age(){
    this.age++;
  }
  findTreasure(){
    this.money += 500;
  }
  talk(){
    console.log('arrrgghhh')
  }

}
const blackPearl = new Pirate('Black Pearl', 20, 6000);
const jollyRoger = new Pirate('Jolly Roger', 25, 1500);
const fancy = new Pirate('Fancy', 40, 800);
const whydah = new Pirate('Whydah', 30, 500);

const pirateArray1 = [blackPearl, jollyRoger, fancy];
const pirateArray2 = [jollyRoger, fancy, whydah];

const logArray = (array) => {
  console.log(array)
}
logArray(pirateArray1)
