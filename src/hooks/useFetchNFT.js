import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchNFT = (query, pageNum) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(loading, "loading");

  const fetchData = async () => {
    setLoading(true);
    let cancel;
    if (query) {
      axios({
        method: "GET",
        url: "https://test-api.solsea.io/nft-listed/?$limit=20",
        params: { q: query, pageNumber: pageNum },
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
        .then((res) => {
          console.log(res, "res");
          setData(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            return;
          }
          console.log(err);
        });
    } else if (pageNum === 1) {
      setLoading(true);
      axios({
        method: "GET",
        url: "https://test-api.solsea.io/nft-listed/?$limit=20&$skip=20",
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
        .then((res) => {
          setTimeout(() => {
            setData((prevState) => {
              return [...prevState, ...res.data.data];
            });
            setLoading(false);
          }, 1000);
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            return;
          }
          console.log(err);
        });
    } else {
      setLoading(true);
      axios({
        method: "GET",
        url: "https://test-api.solsea.io/nft-listed/?$limit=20",
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
        .then((res) => {
          console.log(data, "res");
          setData(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            return;
          }
          console.log(err);
        });
    }
    return () => cancel();
  };
  useEffect(() => {
    fetchData();
  }, [query, pageNum]);

  return {
    data,
    loading,
  };
};
