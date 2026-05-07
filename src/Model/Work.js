export class Work {
  #Id;
  #Name;
  #Date;
  #Note;
  #Tag;

  constructor(Id, Name, Date, Note) {
    this.#Id = Id;
    this.#Name = Name;
    this.#Date = Date;
    this.#Note = Note;
    this.#Status = Status;
  }

  getId() {
    return this.#Id;
  }
  getName() {
    return this.#Name;
  }
  getDate() {
    return this.#Date;
  }
  getNote() {
    return this.#Note;
  }

  getStatus() {
    return this.#Status;
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

  setStatus(Status) {
    this.#Status = Status;
  }
}
