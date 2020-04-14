// function jamiesMakePainter(color) {
//   const painter = {
//     paints: function() {
//       return(`Paints ${color}!`);
//     }
//   }
//   return painter;
// }

// const painter1 = jamiesMakePainter("blue");

// console.log(painter1.paints());

const paint = (color) => {
  const painter = {
    paints: function() {
      return `Paints ${color}!`;
    }
  }
  return painter;
}
const painter1 = paint("green");
const painter2 = paint("blue");
const painter3 = paint("red");

console.log(painter1.paints());
console.log(painter2.paints());
console.log(painter3.paints());

const sound = () => {
  const noise = {
    sound
  }
}