import faker from 'faker'

class Company {
  name: string;
  frase: string;

  constructor(){
    this.name = faker.company.company
  }
    
}