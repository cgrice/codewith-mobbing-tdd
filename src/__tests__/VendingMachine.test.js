import VendingMachine from "../VendingMachine";

test("The machine knows that a product is out of stock", () => {
  const machine = new VendingMachine();
  machine.setStock("B2", 4);
  expect(machine.hasProduct("A1")).toBe(false);
});

test("The machine knows that a product is in stock", () => {
  const machine = new VendingMachine();
  machine.setStock("B2", 3);
  expect(machine.hasProduct("B2")).toBe(true);
});

test("The machine knows a product is stock when it has stock added", () => {
  const machine = new VendingMachine();
  machine.setStock("A1", 5);
  expect(machine.hasProduct("A1")).toBe(true);
});

test("The machine knows how much credit there is", () => {
  const machine = new VendingMachine();
  expect(machine.getCredit()).toBe(0);
});

test("The machine can take coins and add them to the credit", () => {
  const machine = new VendingMachine();
  machine.addCredit(50);
  machine.addCredit(20);
  machine.addCredit(10);
  expect(machine.getCredit()).toBe(80);
});

test("We can buy a chocolate bar from the machine if we can afford it", () => {
  const machine = new VendingMachine();
  machine.setStock("C3", 1);
  machine.addCredit(100);
  expect(machine.canBuyProduct("C3")).toBe(true);
});

test("We can't buy a chocolate bar from the machine if we can't afford it", () => {
  const machine = new VendingMachine();
  machine.setStock("C3", 1);
  expect(machine.canBuyProduct("C3")).toBe(false);
});
