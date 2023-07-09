import useSWR from "swr";

const Swr = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://api.github.com/repos/vercel/swr",
    fetcher
  );
  return (
    <>
      <div>
        <h2>swr component</h2>
        <p>hoge</p>
        <span>hello {data?.name}</span>
        <p>{data?.description}</p>
        <p>{data?.subscribers_count}</p>
      </div>
    </>
  );
};

export default Swr;
