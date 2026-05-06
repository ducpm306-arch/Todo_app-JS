export class Work {
  #Id;
  #Name;
  #Date;
  #Note;

  constructor(Id, Name, Date, Note) {
    this.#Id = Id;
    this.#Name = Name;
    this.#Date = Date;
    this.#Note = Note;
  }

  getId() {
    return this.#Id;
  }
  getName(Name) {
    return this.#Name;
  }
  getDate(Date) {
    return this.#Date;
  }
  getNote(Note) {
    return this.#Note;
  }

  setId(Id) {
    this.#Id = Id;
  }

  setName(Name) {
    this.#Name = Name;
  }

  setDate(Date) {
    this.#Date = Date;
  }

  setNote(Note) {
    this.#Note = Note;
  }
}
