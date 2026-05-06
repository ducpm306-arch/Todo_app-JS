import { Work } from "../Model/Work";

export class WorkRepository {
  #Work = [];

  view(work) {
    return [...this.#Work];
  }

  add(work) {
    this.#Work.push(work);
  }

  update(work) {
    const work = this.#work.find((work) => work.id === id);
    if (!work) return;
    work.name = name;
    work.date = date;
    work.note = note;
  }

  delete(id) {
    this.#Work = this.#Work.filter((work) => work.id != id);
  }
}
