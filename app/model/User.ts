export class User {
  id: number;
  firstName: string;
  surname: string;
  age: number;
  email: string;
  password: string;
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
