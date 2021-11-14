import React, { useEffect, useState } from "react";
import NFTItem from "../NFTItem/NFTItem.js";
import Loader from "../../UI/Loader/Loader.js";
import NFTContext from "../../context/nft-context.js";

import "./NFT.scss";

const NFT = (props) => {
  const [data, setData] = useState([]);
  let nftArray = [];

  const fetchNFTData = async () => {
    if (props.data && props.data.length !== 0) {
      const nftData = props.data;
      console.log(props.data, "props.data");
      for (let key in nftData) {
        nftArray.push({
          id: nftData[key]._id,
          mint: nftData[key].Mint,
          title: nftData[key].Title,
          collection: nftData[key].nft_collection
            ? nftData[key].nft_collection
            : "",
          description: nftData[key].Description,
          image: nftData[key].Preview_URL,
          price: nftData[key].price,
          views: nftData[key].views,
          likes: nftData[key].liked,
          license: nftData[key].LicenseTitle,
          isNFTPRO: nftData[key].isNFTPR,
          tags: nftData[key].tags,
        });
      }
    }
    setData(nftArray);
    console.log(nftArray, "data");
  };

  useEffect(() => {
    fetchNFTData();
  }, [props.data]);

  return (
    <>
      <NFTContext.Provider value={{ nftData: data }}>
        {data.length === 0 ? (
          <Loader />
        ) : (
          data.map((item, index) => {
            if (data.length === index + 1) {
              return (
                <>
                  <div key={item.id} ref={props.lastItem}>
                    <NFTItem
                      id={item.id}
                      mint={item.mint}
                      title={item.title}
                      collection={item.collection}
                      desc={item.description}
                      image={item.image}
                      price={item.price}
                      views={item.views}
                      likes={item.likes}
                      license={item.license}
                    />
                  </div>
                  {props.loading ? <Loader /> : null}
                </>
              );
            } else {
              return (
                <div key={item.id}>
                  <NFTItem
                    id={item.id}
                    mint={item.mint}
                    title={item.title}
                    collection={item.collection}
                    desc={item.description}
                    image={item.image}
                    price={item.price}
                    views={item.views}
                    likes={item.likes}
                    license={item.license}
                  />
                </div>
              );
            }
          })
        )}
      </NFTContext.Provider>
    </>
  );
};

export default NFT;
