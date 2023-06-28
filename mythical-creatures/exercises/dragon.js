function createDragon(name, rider, temperament) {
  return {
    name: name,
    rider: rider,
    temperament: temperament,
    timesEaten: 0,
    hungry: true
  }
}

function greetRider(dragon){
  return `Hi, ${dragon.rider}!`
}

function eat(dragon){
  dragon.timesEaten += 1;
  if (dragon.timesEaten > 2){
    dragon.hungry = false
  }
  return dragon
}

// function findFireBreathers(dragons){
//   var fireBreathers = dragons.find(dragon => dragon.temperament === "aggressive")
//   return fireBreathers
// }

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  // findFireBreathers
}