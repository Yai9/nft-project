import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchNFT = (query, pageNum) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    if (pageNum === 1) {
      setLoading(true);
      axios({
        method: "GET",
        url: "https://test-api.solsea.io/nft-listed/?$limit=20&$skip=20",
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
		throw new Error(err.message)
        });
    } else {
      setLoading(true);
      axios({
        method: "GET",
        url: "https://test-api.solsea.io/nft-listed/?$limit=20",
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
		throw new Error(err.message)
        });
    }
  };
  useEffect(() => {
    fetchData();
  }, [pageNum]);

  return {
    data,
    loading
  };
};
