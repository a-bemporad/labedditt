import axios from "axios";
import { useEffect, useState } from "react";

const useRequestData = (initialData, url, headers) => {
  const [data, setData] = useState(initialData);
  const getData = () => {
    axios
      .get(url, headers)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("entrou no err", error.message);
      });
  };

  useEffect(() => {
    getData();
  }, [url]);

  return [data, getData];
};

export default useRequestData;
