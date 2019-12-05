import React from "react";
import "./main.scss";
import { Table } from "antd";

const MainCmp: React.FC = () => {
  const getClassName = (shareClass: string) => {
    if (shareClass === "seed") {
      return "seed";
    } else if (shareClass === "SA") {
      return "SA";
    } else if (shareClass === "SB") {
      return "SB";
    } else if (shareClass === "SC") {
      return "SC";
    } else {
      return "other-share-class";
    }
  };
  const columns = [
    {
      title: () => (
        <div>
          <h1>21,00,000</h1>
          <h2>Shareholder</h2>
        </div>
      ),
      dataIndex: "shareholder",
      key: "shareholder"
    },
    {
      title: () => (
        <div>
          <p className="shareClass seed">seed</p>
          <p className="shareClass SA">SA</p>
          <p className="shareClass SB">SB</p>
          <p className="shareClass SC">SC</p>
          <p className="shareClass other-share-class">SD</p>
          <p className="shareClass other-share-class">SO</p>
          <h2>Share Classes</h2>
        </div>
      ),
      dataIndex: "shareclasses",
      key: "shareclasses",
      render: (shareClasses: string[]) => (
        <span>
          {shareClasses.map((shareClass, index) => (
            <p className={`shareClass ${getClassName(shareClass)}`} key={index}>
              {shareClass}
            </p>
          ))}
        </span>
      )
    },
    {
      title: () => (
        <div>
          <h1>21,00,000</h1>
          <h2>Fully Diluted</h2>
        </div>
      ),
      dataIndex: "fullydiluted",
      key: "fullydiluted"
    },
    {
      title: () => (
        <div>
          <h1>100%</h1>
          <h2>Ownership</h2>
        </div>
      ),
      dataIndex: "ownership",
      key: "ownership"
    }
  ];
  const data = [
    {
      shareholder: "Shareholder-1",
      shareclasses: ["seed", "SB", "PSD"],
      fullydiluted: "100,000",
      ownership: "20%",
      key: "a1"
    },
    {
      shareholder: "Shareholder-2",
      shareclasses: ["seed", "SA", "SB"],
      fullydiluted: "100,000",
      ownership: "20%",
      key: "a2"
    },
    {
      shareholder: "Shareholder-3",
      shareclasses: ["SC", "SD", "SE", "SO", "SF"],
      fullydiluted: "100,000",
      ownership: "20%",
      key: "a3"
    },
    {
      shareholder: "Shareholder-4",
      shareclasses: ["SO", "SD", "SF", "SA", "SB"],
      fullydiluted: "100,000",
      ownership: "20%",
      key: "a4"
    },
    {
      shareholder: "Shareholder-5",
      shareclasses: ["seed", "SA", "SB", "SC", "SD", "SE", "SD"],
      fullydiluted: "100,000",
      ownership: "20%",
      key: "a5"
    }
  ];
  return (
    <Table
      columns={columns}
      dataSource={data}
      expandedRowRender={record => (
        <p style={{ margin: 0 }}>{record.fullydiluted}</p>
      )}
    />
  );
};

export default MainCmp;
