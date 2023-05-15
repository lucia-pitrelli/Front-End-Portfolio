export class Education {
  id?: number;
  institution: string;
  degree: string;
  date: number;

  constructor(institution: string, degree: string, date: number) {
    this.institution = institution;
    this.degree = degree;
    this.date = date;
  }
}
