import axios from 'axios';

const signUp = async (body) => {
    return await axios.post(`${process.env.URL}/users`, body)
}

export default { signUp }
