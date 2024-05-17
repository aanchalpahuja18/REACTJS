import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github () {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/aanchalpahuja18')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export default Github;

//Here we are using useEffect in order to fetch the API from github. useEffect is used so that the API call is made as soon as the Github component is rendered


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/aanchalpahuja18')

    return response.json();
}