import { useState } from "react";
import { useQuery } from "react-query";
import { Table } from "antd";
import { fetchTimeLogs } from "./services";

const useTimeLogs = (page: number, size: number) => {
  const { data, isLoading, isError, isFetching } = useQuery(
    ["time-logs", page, size],
    () => fetchTimeLogs(page, size),
    { keepPreviousData: true }
  );
  return { resolvedData: data ?? [], isLoading, isError, isFetching };
};

const TimeLogsTable: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize] = useState(10);

  const { resolvedData, isFetching } = useTimeLogs(pageIndex, pageSize);
  const { data, total = 0 } = resolvedData;

  const handleChange = ({ current }: any) => {
    setPageIndex(current);
  };

  const columns = [
    {
      title: "Start Time",
      dataIndex: "startTime",
    },
    {
      title: "End Time",
      dataIndex: "endTime",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
  ];

  return (
    <Table
      rowKey="id"
      dataSource={data}
      columns={columns}
      bordered
      pagination={{ pageSize, total }}
      onChange={handleChange}
      loading={isFetching}
    />
  );
};

export default TimeLogsTable;
