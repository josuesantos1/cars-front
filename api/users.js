import axios from 'axios';

const url = `${process.env.URL}/users`
const token = "Bearer " + localStorage.getItem("token")

const signUp = async (body) => {
    return await axios.post(url, body)
}

const signIn = async (body) => {
    return await axios.post(`${process.env.URL}/signin`, body)
}

const view = async () => {
    return await axios.get(url, {
        headers: {
            Authorization: token
        }
    })
}

const update = async (body) => {
    return await axios.post(url, body, {
        headers: {
            Authorization: token
        }
    })
}

export default { signUp, signIn, view }
