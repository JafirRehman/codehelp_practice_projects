import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const useGif = (tag = "") => {
  const [loading, setLoading] = useState(true);
  const [gif, setGif] = useState("");
  async function fetchdata(tag) {
    setLoading(true);
    const data = await fetch(
      tag
        ? `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
        : `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );
    const jsdata = await data.json();
    const randomgif = jsdata.data.images.downsized_large.url;
    setGif(randomgif);
    setLoading(false);
  }
  useEffect(() => {
    fetchdata(tag);
  }, [tag]);
  return {
    gif,
    loading,
    fetchdata,
  };
};

export default useGif;
