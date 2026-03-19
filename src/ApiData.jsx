import React, { useEffect, useState } from "react";

function ApiData() {
  const [api_Data, setApi_Data] = useState([]);
  useEffect(() => {
    const FetchDataFromApi = async () => {
      try {
        const api = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await api.json();
        setApi_Data(data);
      } catch (error) {
        console.error("Error Data Fetching:", error);
      }
    };
    FetchDataFromApi();
  }, []);
  return (
    <>
      {api_Data.map((item, index) => (
        <div key={index}>
          <p>{item.id}</p>
          <p>{item.title}</p>
          <p>{item.body}</p>          
        </div>
      ))}
    </>
  );
}

export default ApiData;
