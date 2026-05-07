export default function WorkView({ works, onAdd, onDelete }) {
  return (
    <>
      <h2>Quản lý công việc</h2>
      <form onSubmit={onAdd}>
        Tên: <input type="text" name="name" />
        <br />
        Hạn: <input type="date" name="date" />
        <br />
        Ghi chú: <input type="text" name="note" />
        <br />
        <button type="submit">Thêm</button>
      </form>

      <h2>Danh sách công việc</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Hạn</th>
            <th>Ghi chú</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {works.map((w) => (
            <tr key={w.getId()}>
              <td>{w.getId()}</td>
              <td>{w.getName()}</td>
              <td>{w.getDate()}</td>
              <td>{w.getNote()}</td>
              <td>
                <button onClick={() => onDelete(w.getId())}>Xóa</button>
                <button
                  onClick={() =>
                    onUpdate(w.getName(), w.getDate(), w.getNote())
                  }
                >
                  Sửa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
