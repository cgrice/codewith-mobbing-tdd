class VendingMachine {
  constructor() {
    this.products = {};
    this.credit = 0;
  }

  hasProduct(code) {
    return this.products[code] > 0;
  }

  setStock(code, amount) {
    this.products[code] = amount;
  }

  getCredit() {
    return this.credit;
  }

  addCredit(pence) {
    this.credit += pence;
  }

  canBuyProduct(code) {
    return this.hasProduct(code) && this.credit >= 100;
  }
}

export default VendingMachine;
