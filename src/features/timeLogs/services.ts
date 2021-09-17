import fetcher from "../../utils/fetcher";

export const fetchTimeLogs = async (page = 1, size = 10): Promise<any> => {
  return fetcher(`/time_logs?&skip=${(page - 1) * size}&take=${size}`);
};
