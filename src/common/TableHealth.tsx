const TableHealth: React.FC<{
  tHead: string[];
  tBody: any;
}> = (props) => {
  const { tHead, tBody } = props;
  const tHeadContent = tHead.map((tHeadValue: any, index: any) => (
    <th key={index} className="py-2 px-4">
      {tHeadValue}
    </th>
  ));

  const tBodyContent = tBody.map((tBodyValue: any) => (
    <tr key={tBodyValue.id}>
      <td className="py-2 px-4">{tBodyValue[tHead[0]]}</td>
      <td className="py-2 px-4">{tBodyValue[tHead[1]]}</td>
      <td className="py-2 px-4">{tBodyValue[tHead[2]]}</td>
      <td className="py-2 px-4">{tBodyValue[tHead[3]]}</td>
      <td className="py-2 px-4">{tBodyValue[tHead[4]]}</td>
    </tr>
  ));
  return (
    <div>
      <table className="border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>{tHeadContent}</tr>
        </thead>
        <tbody>{tBodyContent}</tbody>
      </table>
    </div>
  );
};

export default TableHealth;
