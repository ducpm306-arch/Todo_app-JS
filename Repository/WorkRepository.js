import { Work } from "../Model/Work";

export class WorkRepository {
  #Work = [];

  view() {
    return [...this.#Work];
  }

  add(work) {
    this.#Work.push(work);
  }

  update(id, name, date, note) {
    const work = this.#Work.find((w) => w.getId() === id);
    if (!work) return;
    work.name = name;
    work.date = date;
    work.note = note;
  }

  delete(id) {
    this.#Work = this.#Work.filter((work) => work.id != id);
  }
}
