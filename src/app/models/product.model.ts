export class Product{
  id: String;
  stock: number;
  price: number;
  shortDescription: string;
  description: string;
  category: String;
  name: string;


  constructor(id: String, stock: number, price: number, shortDescription: string, description: string, category: String, name: string) {
    this.id = id;
    this.stock = stock;
    this.price = price;
    this.shortDescription = shortDescription;
    this.description = description;
    this.category = category;
    this.name = name;
  }
}
