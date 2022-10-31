const baseURL = "https://localhost:3000";
const APIUrl = `${baseURL}/api`;

const Login = `${APIUrl}/login`;
const Logout = `${APIUrl}/logout`;

const Guilds = `${APIUrl}/guilds`;
const Channels = `${APIUrl}/channels`;

module.exports  = {
    APIUrl,
    Login,
    Logout,
    Guilds,
    Channels
};
