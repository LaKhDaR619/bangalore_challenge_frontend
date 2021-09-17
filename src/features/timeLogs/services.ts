import fetcher from "../../utils/fetcher";

export const fetchTimeLogs = async (page = 0, size = 10): Promise<any> => {
  return fetcher(`/time_logs?skip=${page}&take=${size}`);
};
