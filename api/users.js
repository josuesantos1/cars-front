import axios from 'axios';

const signUp = async (body) => {
    return await axios.post(`${process.env.URL}/users`, body)
}

const signIn = async (body) => {
    return await axios.post(`${process.env.URL}/signin`, body)
}

export default { signUp, signIn }
