import axios from 'axios';
const API_URL = 'https://jsonplaceholder.typicode.com/users';

const register = async (userData) => {
    const { email } = userData;
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users?email=' + email);
        return (response.data.length > 0)

    } catch (error) {
        console.log(error)
    }
};

// Kullanıcı giriş işlemi
const login = async (userData) => {
    const { email, password } = userData;
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        throw new Error('Giriş işlemi başarısız: ' + error.response.data.message);
    }
};

// Kullanıcı çıkış işlemi
const logout = () => {
    localStorage.removeItem('user');
};

// LocalStorage'daki kullanıcıyı alma
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

const userService = {
    register,
    login,
    logout,
    getCurrentUser,
};

export default userService;
