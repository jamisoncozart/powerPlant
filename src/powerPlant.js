// This function stores our state.

// const storeState = () => {
//   let currentState = {};
//   return (stateChangeFunction) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   }
// }

const storeAllStates = () => {
  let overallState = {};
  return () => {
    let currentState = {};
    return (stateChangeFunction) => {
      const newState = stateChangeFunction(currentState);
      currentState = {...newState};
      overallState = {...overallState, currentState};
      return overallState;
    }
  }
}

const allPlants = storeAllStates();
const p1StateChanger = allPlants();
const p2StateChanger = allPlants();


// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees. 

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}

// We create two functions using our function factory. We could easily create many more.

const feed = changeState("soil")(5);
const water = changeState("water")(5);
const sun = changeState("sun")(5);

p1StateChanger(feed);
p1StateChanger(water);
p1StateChanger(sun);

p2StateChanger(feed);
p2StateChanger(water);
const allPlantStats = p2StateChanger(sun);

console.log(allPlantStats);


// $(document).ready(function() {
//   // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
//   $('#feed-p1').click(function() {
//     const newState = p1StateChanger(feed);
//     $('#p1-soil-value').text(newState.soil);
//   });
//   $('#water-p1').click(function() {
//     const newState = p1StateChanger(water);
//     $('#p1-water-value').text(newState.water);
//   });
//   $('#sun-p1').click(function() {
//     const newState = p1StateChanger(sun);
//     $('#p1-sun-value').text(newState.sun);
//   });

//   // $('#feed-p2').click(function() {
//   //   const newState = p2StateChanger(feed);
//   //   $('#p2-soil-value').text(newState.soil);
//   // });
//   // $('#water-p2').click(function() {
//   //   const newState = p2StateChanger(water);
//   //   $('#p2-water-value').text(newState.water);
//   // });
//   // $('#sun-p2').click(function() {
//   //   const newState = p2StateChanger(sun);
//   //   $('#p2-sun-value').text(newState.sun);
//   // });
// });

// const plantNamedJack = stateChanger(redFoo);
// console.log(plantNamedJack);
// const plantNamedFred = stateChanger(redFoo);
// console.log(plantNamedFred);
// const fedPlant = stateChanger(redFoo);
// console.log(fedPlant);

// const feedPlant = plant2(redFoo);
// const water = plant2(waterPlant);
// const water2 = plant2(waterPlant);

// console.log(water2);

// const feed = changeState("soil");
// const hydrate = changeState("water");
// const giveLight = changeState("light");
// // const fedPlant = feed(5)(plant = {});
// // console.log(fedPlant);

// const feedStateByOne = changeState("soil");
// const fedPlant = feedStateByOne(plant = {});
// console.log(fedPlant);

// (parameters) => <return statement>
///////\\\\\\\\/////////\\\\\\\\\
///////\///////\\\\\\\\/\\\\\\\\\
// ----- Great Notes ------ /////\
//\\\\\////////\\\\\\\\/\\\\\\\\\\\\\\HI OMG
// let plant = { soil: 0, light: 0, water: 0 };
// const newPlant = changePlantState(plant, "soil");

// console.log(newPlant);

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

/*
                    ____
                 _.' :  `._
             .-.'`.  ;   .'`.-.
    __      / : ___\ ;  /___ ; \      __
  ,'_ ""--.:__;".-.";: :".-.":__;.--"" _`,
  :' `.t""--.. '<@.`;_  ',@>` ..--""j.' `;
       `:-.._J '-.-'L__ `-- ' L_..-;'
         "-.__ ;  .-"  "-.  : __.-"
             L ' /.------.\ ' J
              "-.   "--"   .-"
             __.l"-:_JL_;-";.__
          .-j/'.;  ;""""  / .'\"-.
        .' /:`. "-.:     .-" .';  `.
     .-"  / ;  "-. "-..-" .-"  :    "-.
  .+"-.  : :      "-.__.-"      ;-._   \
  ; \  `.; ;                    : : "+. ;
  :  ;   ; ;                    : ;  : \:
 : `."-; ;  ;                  :  ;   ,/;
  ;    -: ;  :                ;  : .-"'  :
  :\     \  : ;             : \.-"      :
   ;`.    \  ; :            ;.'_..--  / ;
   :  "-.  "-:  ;          :/."      .'  :
     \       .-`.\        /t-""  ":-+.   :
      `.  .-"    `l    __/ /`. :  ; ; \  ;
        \   .-" .-"-.-"  .' .'j \  /   ;/
         \ / .-"   /.     .'.' ;_:'    ;
          :-""-.`./-.'     /    `.___.'
                \ `t  ._  /  bug :F_P:
                 "-.t-._:'
*/