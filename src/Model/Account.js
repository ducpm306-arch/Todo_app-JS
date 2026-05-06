export class Account {
  #Id;
  #Name;
  #Email;
  #Password;

  constructor(Id, Name, Email, Password) {
    this.#Id = Id;
    this.#Name = Name;
    this.#Email = Email;
    this.#Password = Password;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.Email;
  }

  getPassword() {
    return this.Password;
  }

  setId() {
    this.#Id = Id;
  }

  setName() {
    this.#Name = Name;
  }

  setEmail() {
    this.#Email = Email;
  }

  setPassword() {
    this.#Password = Password;
  }
}
