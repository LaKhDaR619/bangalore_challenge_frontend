import { Row } from "antd";
import TimeLogsTable from "./timeLogsTable";

const TimeLogs: React.FC = () => {
  return (
    <>
      <Row justify="center">
        <h1 style={{ marginTop: 16 }}>TimeLogs</h1>
      </Row>
      <div style={{ padding: "0 48px", height: "100%" }}>
        <TimeLogsTable />
      </div>
    </>
  );
};

export default TimeLogs;
