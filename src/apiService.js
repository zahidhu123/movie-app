import axios from "axios";


export function getNewsApi() {
    return  axios.get(`https://movie-task.vercel.app/api/popular?page=1`)
 }