import axios from "axios";


export function getNewsApi() {
    return  axios.get(`https://movie-task.vercel.app/api/popular?page=1`)
 }

 export function getNewsSecoundApi() {
    return  axios.get(`https://movie-task.vercel.app/api/popular?page=2`)
 }

 export function getNewsThirdApi() {
    return  axios.get(`https://movie-task.vercel.app/api/popular?page=3`)
 }

 export function getHighRatedApi() {
    return  axios.get(`https://movie-task.vercel.app/api/popular?page=4`)
 }




