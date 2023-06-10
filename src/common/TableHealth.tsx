import React from "react";

type TableHealthProps = {
  tHead: string[];
  tBody: any;
};

const TableHealth: React.FC<TableHealthProps> = (props) => {
  const { tHead, tBody } = props;

  const tHeadContent = tHead.map((tHeadValue, index) => (
    <th key={index} className="py-2 px-4">
      {tHeadValue}
    </th>
  ));

  const tBodyContent = tBody.map((tBodyValue: any) => (
    <tr key={tBodyValue.id}>
      {tHead.map((columnName, index) => (
        <td key={index} className="py-2 px-4">
          {tBodyValue[columnName]}
        </td>
      ))}
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