export default function WorkView({ onUpdate }) {
  return (
    <>
      <h2>Sửa công việc</h2>
      <form>
        Tên: <input type="text" name="name"></input> <br />
        Ngày: <input type="date" name="date"></input> <br />
        Ghi chú: <input type="text" name="note"></input> <br />
        <button type="submit">Thêm</button>
      </form>
    </>
  );
}
