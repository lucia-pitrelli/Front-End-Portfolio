export class Persona {
  id?: number;
  fullname: string;
  position: string;
  ubication: string;

  constructor(fullname: string, position: string, ubication: string) {
    this.fullname = fullname;
    this.position = position;
    this.ubication = ubication;
  }
}
