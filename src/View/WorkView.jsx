export default function WorkView({
  works,
  onAdd,
  onDelete,
  onStatusChange,
  onSearch,
}) {
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
        Trạng thái:{""}
        <select name="status">
          <option value="Doing">Đang làm</option>
          <option value="Done">Đã xong</option>
        </select>
        <br />
        <button type="submit">Thêm</button>
      </form>

      <form onSearch={onSearch}>
        <h2>Tìm kiếm công việc</h2>
        <br />
        Tìm kiếm: <input type="text" name="search" />
        <br />
        <button type="submit">Tìm kiếm</button> <br />
      </form>

      <h2>Danh sách công việc</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Hạn</th>
            <th>Ghi chú</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {works.map((w) => (
            <tr key={w.getId()}>
              <td>{w.getId()}</td>
              <td>{w.getName()}</td>
              <td>{w.getDate()}</td>
              <td>
                <select
                  value={w.getStatus()}
                  onChange={(e) => onStatusChange(w.getId(), e.target.value)}
                >
                  <option value="Doing">Đang làm</option>
                  <option value="Done">Đã xong</option>
                </select>
              </td>
              <td>{w.getNote()}</td>
              <td>
                <button onClick={() => onDelete(w.getId())}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
