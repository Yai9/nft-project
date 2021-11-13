import React, { useEffect, useState } from "react";
import NFTItem from "../NFTItem/NFTItem.js";
import Loader from "../../UI/Loader/Loader.js";
import NFTContext from "../../context/nft-context.js";

import "./NFT.scss";

const NFT = (props) => {
  const [data, setData] = useState([]);
  let nftArray = [];

  const fetchNFTData = async () => {
    let url = "https://test-api.solsea.io/nft-listed/?$limit=20&$skip=20";
    /*	  if(props.searchValue && data.filter(item=>item.title.toLowerCase().includes(props.searchValue.toLowerCase()))){

		  url = `https://test-api.solsea.io/nft-listed/?Title=${props.searchValue.replace(/ /g, '%20')}`;
	  }*/
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const nftData = await response.json();
    for (let key in nftData.data) {
      nftArray.push({
        id: nftData.data[key]._id,
        mint: nftData.data[key].Mint,
        title: nftData.data[key].Title,
        collection: nftData.data[key].nft_collection
          ? nftData.data[key].nft_collection
          : "",
        description: nftData.data[key].Description,
        image: nftData.data[key].Preview_URL,
        price: nftData.data[key].price,
        views: nftData.data[key].views,
        likes: nftData.data[key].liked,
        license: nftData.data[key].LicenseTitle,
        isNFTPRO: nftData.data[key].isNFTPR,
        tags: nftData.data[key].tags,
      });
    }
    let displayedData = [];
    if (props.searchValue) {
      displayedData = nftArray.filter((item) =>
        item.title.toLowerCase().includes(props.searchValue)
      );
    } else {
      displayedData = nftArray;
    }
    setData(displayedData);

    console.log(displayedData, "displayeddata");
    console.log(nftArray, "data");
  };

  useEffect(() => {
    fetchNFTData();
  }, [props.searchValue]);

  return (
    <>
      <NFTContext.Provider value={{ nftData: data }}>
        {data.length === 0 ? (
          <Loader />
        ) : (
          data.map((item) => (
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
          ))
        )}
      </NFTContext.Provider>
    </>
  );
};

export default NFT;
