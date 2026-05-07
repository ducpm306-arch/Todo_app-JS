import { useState } from "react";
import { Work } from "../Model/Work";
import { WorkRepository } from "../Repository/WorkRepository";

const repo = new WorkRepository();

export function useWork() {
  const [works, setWorks] = useState(() => repo.view());

  const addWork = (e) => {
    e.preventDefault();
    const { name, date, note } = Object.fromEntries(new FormData(e.target));
    repo.add(new Work(Date.now(), name, date, note));
    setWorks(repo.view());
    e.target.reset();
  };

  const updateWork = (e) => {};

  const deleteWork = (id) => {
    repo.delete(id);
    setWorks(repo.view());
  };

  return { works, addWork, deleteWork };
}
