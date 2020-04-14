// const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   }
// }

// const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) + 1
//   }
// };

const changePlantState = (plant, property) => {
  return {
    ...plant,
    [property]: (plant[property] || 0) + 1
  }
}

let plant = { soil: 0, light: 0, water: 0 };
const newPlant = changePlantState(plant, "soil");

console.log(newPlant);





// In theory, the function isn't mutating state because we are returning a new object. (Unfortunately, in reality, JavaScript is still referencing - and mutating - the original object because it creates a shallow clone, not a deep clone. But we'd need to use a special library to ensure we have a deep clone, so we won't worry about that right now!)


// const plant = {};

// console.log(plant.water);

// const plantWithWater = hydrate(plant);
// const reallyWateredPlant = hydrate(plantWithWater);

// console.log(plantWithWater.water);
// console.log(reallyWateredPlant.water);

// {
//   water: 0,
//   soil: 0,
//   light: 0
// }