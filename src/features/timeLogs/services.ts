import fetcher from "../../utils/fetcher";
import { AddTimeLogForm } from "./types";

export const fetchTimeLogs = async (page = 1, size = 10): Promise<any> => {
  return fetcher(`/time_logs?&skip=${(page - 1) * size}&take=${size}`);
};

export const addTimeLog = async (values: any) => {
  fetcher("/time_logs", values);
};
