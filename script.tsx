interface Vehicule{
    make:String;
    model:String;
    year : Number;
    start(): void;
}
class Voiture implements Vehicule {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start(): void {
      console.log("Car engine started");
    }
  }
  const maVoiture = new Voiture('Toyota', 'Corolla', 2021);
  maVoiture.start();