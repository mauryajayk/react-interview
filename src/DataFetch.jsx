import React, { useEffect, useState } from "react";

function DataFetch(){
    const[api_Data, setApi_Data] = useState([]);
    
    useEffect(()=> {
        const FetchDataFromApi = async() => {
            try{
                const api = await fetch("https://fakestoreapi.com/products/1");
                const data = await api.json();
                setApi_Data(data);
            } catch (error) {
                console.error("Error Data Fetching:", error);
            }
        }
        FetchDataFromApi();
    },[]);

    return(
        <>
        <h1>Fetch Data From Api</h1>
        {api_Data ? (
            <div>
                <p>{api_Data.id}</p>
                <p>{api_Data.title}</p>
                <p>{api_Data.description}</p>
                <p>{api_Data.category}</p>
            </div>
        ):(
            <p>Loading Data....</p>
        )}
        </>
    )
}
export default DataFetch;