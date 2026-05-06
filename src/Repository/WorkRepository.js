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
    work.setName = name;
    work.setDate = date;
    work.setNote = note;
  }

  delete(id) {
    this.#Work = this.#Work.filter((work) => work.getId != id);
  }
}
