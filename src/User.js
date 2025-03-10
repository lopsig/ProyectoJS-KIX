export class User {
  firstName; //string
  lastName; //string
  email; //string
  birthDate; //date
  userName; //string
  password; //string

  constructor(firstName, lastName, email, birthDate, userName, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthDate = birthDate;
    this.userName = userName;
    this.password = password;
  }

  //GETTER
  get firstName() {
    return this.firstName
  };
  get lastName() {
    return this.lastName
  }
  get email() {
    return this.email
  };
  get birthDate() {
    return this.birthDate
  };
  get password() {
    return this.password
  };

  //SETTER
  set firstName(editFirstName) {
    this.firstName = editFirstName
  }
  set lastName(editLastName) {
    this.lastName = editLastName
  }

  set birthDate(editBirthDate) {
    this.birthDate = editBirthDate
  }

  set password(password) {
    this.password = password
  }
}
