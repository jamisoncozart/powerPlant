const hydrate = (plant) => {
  return {
    ...plant,
    water: (plant.water || 0) + 1
  }
}

const plant = {};

console.log(plant.water);

const plantWithWater = hydrate(plant);
const reallyWateredPlant = hydrate(plantWithWater);

console.log(plantWithWater.water);
console.log(reallyWateredPlant.water);

// {
//   water: 0,
//   soil: 0,
//   light: 0
// }