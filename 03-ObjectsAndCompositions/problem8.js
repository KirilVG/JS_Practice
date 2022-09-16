function rectangle(width, height, color) {
  console.log(color[0].toUpperCase() + color.slice[1]);

  let res = {
    width: width,
    height: height,
    color: color[0].toUpperCase() + color.slice(1),
    calcArea: function () {
      return width * height;
    },
  };
  
  return res;
}

let rect = rectangle(4, 5, "red");

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());
