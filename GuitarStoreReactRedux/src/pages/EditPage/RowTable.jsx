function RowTable({ row = ["", ""], deleteRow }) {
  return (
    <tr key={row[0]}>
      <td className="table__cell table__cell_one" contentEditable="true">
        {row[0]}
      </td>
      <td className="table__cell table__cell_two" contentEditable="true">
        {row[1]}
      </td>
      <td className="table__cell">
        <button className="table__del" onClick={deleteRow}>
          x
        </button>
      </td>
    </tr>
  );
}
export { RowTable };
