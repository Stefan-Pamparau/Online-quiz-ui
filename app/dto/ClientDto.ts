export class ClientDto {

  id: number;
  firstName: string;
  surname: string;
  age: number;
  email: string;
  password: string;
  token: string;
  confirmed: boolean;
  userType: string;

  constructor(firstName: string, surname: string, age: number, email: string, password: string, userType: string) {
    this.firstName = firstName;
    this.surname = surname;
    this.age = age;
    this.email = email;
    this.password = password;
    this.userType = userType;
  }
}
