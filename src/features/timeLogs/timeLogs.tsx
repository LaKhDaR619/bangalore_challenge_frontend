import { Row } from "antd";
import { Link } from "react-router-dom";
import TimeLogsTable from "./timeLogsTable";

const TimeLogs: React.FC = () => {
  return (
    <>
      <Row justify="center">
        <h1 style={{ marginTop: 16 }}>TimeLogs</h1>
      </Row>
      <div style={{ padding: "0 48px" }}>
        <TimeLogsTable />
        <Link to="/add_log">Add Log</Link>
      </div>
    </>
  );
};

export default TimeLogs;
