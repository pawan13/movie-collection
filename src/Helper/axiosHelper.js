import axios from "axios"

const apiEp = `https://www.omdbapi.com/?apikey=9ab71249&t=`

export const fetchData = async(str) =>{
    try {
        const response =  await axios(apiEp + str)
        return response.data
    } catch (error) {
        console.log(error)
        return error.message;
    }
}