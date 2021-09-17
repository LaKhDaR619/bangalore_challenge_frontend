const fetcher = async (endpoint: string, body?: any) => {
  const config: RequestInit = {
    method: body ? "POST" : "GET",
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await window.fetch(endpoint, config);
  let data;
  if (response.ok) {
    return data;
  }
  return Promise.reject(data);
};

export default fetcher;
