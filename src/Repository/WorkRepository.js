import { Work } from "../Model/Work";

const STORAGE_KEY = "works";

export class WorkRepository {
  #Work = [];

  constructor() {
    this.#load();
  }

  #load() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const arr = JSON.parse(raw);
    this.#Work = arr.map(
      (item) => new Work(item.id, item.name, item.date, item.status, item.note),
    );
  }

  #save() {
    const arr = this.#Work.map((w) => ({
      id: w.getId(),
      name: w.getName(),
      date: w.getDate(),
      status: w.getStatus(),
      note: w.getNote(),
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
  }

  view() {
    return [...this.#Work];
  }

  add(work) {
    this.#Work.push(work);
    this.#save();
  }

  changeStatus(id, status) {
    const work = this.#Work.find((w) => w.getId === id);
    if (!work) return;
    work.setStatus(status);
    this.#save();
  }

  delete(id) {
    this.#Work = this.#Work.filter((w) => w.getId() !== id);
    this.#save();
  }
}
