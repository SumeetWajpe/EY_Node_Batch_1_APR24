function Add(x, y) {
  return x + y;
}

function Subtract(x, y) {
  return x - y;
}

// module.exports.Add = Add;
// module.exports.Subtract = Subtract;
module.exports = { Add, Subtraction: Subtract };
