import _axios from "axios";
import React, { useEffect } from 'react'

const BASE_URL = "https://localhost:7291/api/";

function axios() {

    const getAllFilms = async () => {
        const response = await _axios.get(BASE_URL + "/Staj");
        console.log(response)
    }

    useEffect(() => {
        getAllFilms();
    }, [])

    return (
        <div>axios</div>
    )
}

export default axios







