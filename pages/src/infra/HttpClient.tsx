export type Client = {
  fetchOptions: RequestInit;
  body?: any;
};

export default function HttpClient(fetchUrl: RequestInfo, client: Client) {
  const { fetchOptions, body } = client;

  const options: RequestInit = {
    ...fetchOptions,
    body: body ? JSON.stringify(body) : undefined,
  };

  return fetch(fetchUrl, options).then(async (response: Response) => {
    const responseBody = await response.text();
    return {
      ok: response.ok,
      body: responseBody,
    };
  });
}
