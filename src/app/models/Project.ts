export class Project {
  id?: number;
  name: string;
  details: string;
  date: number;
  image: string;

  constructor(name: string, details: string, date: number, image: string) {
    this.date = date;
    this.name = name;
    this.details = details;
    this.image = image;
  }
}
