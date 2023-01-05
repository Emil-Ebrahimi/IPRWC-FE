export class Product{
  id: number;
  stock: number;
  price: number;
  shortDescription: string;
  description: string;
  category: string;
  name: string;


  constructor(id: number, stock: number, price: number, shortDescription: string, description: string, category: string, name: string) {
    this.id = id;
    this.stock = stock;
    this.price = price;
    this.shortDescription = shortDescription;
    this.description = description;
    this.category = category;
    this.name = name;
  }
}
