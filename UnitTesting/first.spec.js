function Add(x, y) {
  return x + y;
}

describe("A suite is just a function", function () {
  let a;

  it("and so is a spec", function () {
    a = true;

    expect(a).toBe(true);
  });
});

describe("Suite for addition", () => {
  it("adds two numbers", () => {
    let result;
    result = Add(20, 30);
    expect(result).toBe(50);
  });
});
