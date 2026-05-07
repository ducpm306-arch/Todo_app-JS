export class Work {
  #Id;
  #Name;
  #Date;
  #Status;
  #Note;

  constructor(Id, Name, Date, Status, Note) {
    this.#Id = Id;
    this.#Name = Name;
    this.#Date = Date;
    this.#Status = Status;
    this.#Note = Note;
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

  getStatus() {
    return this.#Status;
  }

  getNote() {
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

  setStatus(Status) {
    this.#Status = Status;
  }

  setNote(Note) {
    this.#Note = Note;
  }
}
