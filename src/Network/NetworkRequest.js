import axios from "axios";
import React from 'react';


const BASE_URL = "https://jsonplaceholder.typicode.com/posts/1"
const getDummyData = () => {
    return new Promise((resolve, reject) => {
        axios.get(BASE_URL).then((response) => {
            resolve(response)
            console.log("Response,", response)
        }).catch((error) => {
            reject(error)
            console.log("Error,", error)
        })
    })
}

const Post_URL = "https://jsonplaceholder.typicode.com/1"

const getErrorData = () => {
    return new Promise((resolve, reject) => {
        axios.get(Post_URL).then((response) => {
            resolve(response)
            console.log("Response of Error URL,", response)
        }).catch((error) => {
            reject(error)
            console.log("Error URL,", error)
        })
    })
}

export {getDummyData, getErrorData};