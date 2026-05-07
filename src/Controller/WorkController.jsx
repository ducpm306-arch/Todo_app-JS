import { useState } from "react";
import { Work } from "../Model/Work";
import { WorkRepository } from "../Repository/WorkRepository";

const repo = new WorkRepository();

export function useWork() {
  const [works, setWorks] = useState(() => repo.view());

  const addWork = (e) => {
    e.preventDefault();
    const { name, date, status, note } = Object.fromEntries(
      new FormData(e.target),
    );
    repo.add(new Work(Date.now(), name, date, status, note));
    setWorks(repo.view());
    e.target.reset();
  };

  const changeStatus = (id, status) => {
    repo.changeStatus(id, status);
    setWorks(repo.view());
  };

  const deleteWork = (id) => {
    repo.delete(id);
    setWorks(repo.view());
  };

  const searchWork = (id, name, date, status, note) => {
    const filterWork = repo
      .view(id, name, date, status, note)
      .filter((work) => {
        return (
          (!id || work.id === id) &&
           !name || work.name.toLowerCase().includes(name.toLowerCase())) &&
           !date || work.date === date) &&
           !status || work.status === status) &&
           !note || work.name.toLowerCase().includes(name.toLowerCase()))
          );
      });
  };

  return { works, addWork, deleteWork, changeStatus };
}
