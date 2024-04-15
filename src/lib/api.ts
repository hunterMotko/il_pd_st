interface FetcherParams {
  url: string;
  method?: string;
  body?: any;
  json?: boolean;
}

export const fetcher = async (
  { url, method = "GET", body, json = true }: FetcherParams,
) => {
    try {
      const res = await fetch(url, {
        method,
        body: body && JSON.stringify(body),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error("API Error");
      if (json) {
        const data = await res.json();
        return data;
      }
    } catch (e) {
     console.error(e); 
    }
};

export const getData = async (url: string) => {
  return await fetcher({ url }) 
}

export const getJudicialData = async (id: number) => {
  const url = `/api/judicial/${id}`;
  return await fetcher({ url });
};
export const getJudicialLegendData = async () => {
  const url = `/api/judicial/legend`
  return await fetcher({ url });
}
export const getJudicialLegendColors = async () => {
  const url = '/api/judicial/colors'
  return await fetcher({url})
}
export const getDistrictData = async (id: number) => {
  const url = `/api/district/${id}`;
  return await fetcher({ url });
};
export const getDistrictLegendData = async () => {
  const url = `/api/districts/legend`
  return await fetcher({ url });
}
export const getDistrictLegendColors = async () => {
  const url = '/api/districts/colors'
  return await fetcher({url})
}

export const emailPost = async (url: string, body: any) => {
  return fetcher({
    url,
    method: "POST",
    body,
    json: true,
  });
};
