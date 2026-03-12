export class Movie {
  constructor({ id, title, price, currency }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.currency = currency;
  }

  getLabel() {
    return `${this.title} (${this.price} ${this.currency})`;
  }
}