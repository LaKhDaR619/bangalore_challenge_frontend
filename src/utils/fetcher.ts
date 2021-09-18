const fetcher = async (endpoint: string, body?: any) => {
  const config: any = {
    method: body ? "POST" : "GET",
    headers: {},
  };

  if (body) {
    config.headers["Content-Type"] = "application/json";
    config.body = JSON.stringify(body);
  }

  const response = await window.fetch(endpoint, config);

  const data = await response.json();

  if (response.ok) {
    return data;
  }
  return Promise.reject(data);
};

export default fetcher;
