const baseURL = "https://localhost";
const APIUrl = `${baseURL}/api`;

const Login = `${APIUrl}/auth/login`;
const Logout = `${APIUrl}/auth/logout`;

const Guilds = `${APIUrl}/guilds`;
const Channels = `${APIUrl}/channels`;

module.exports  = {
    APIUrl,
    Login,
    Logout,
    Guilds,
    Channels
};