import axios from 'axios';

const url = `${process.env.URL}/cars`
// const token = "Bearer " + localStorage.getItem("token")

const Listing = async () => {
    console.log("oi")
    return await axios.get(url)
}

export default {Listing}