import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://api.skyhall.io/api/v1",
    headers: {
        "Content-type": "application/json"
    },
    validateStatus: (status) => {
        return status >= 200 && status < 500
    },
});

// Add a request interceptor
apiClient.interceptors.request.use(async function (config) {
    const accessToken = localStorage.getItem(`accessToken`);
    config.headers = { Authorization: `Bearer ${accessToken}` }
    console.log(`accessToken = ${accessToken}`);
// headers: { Authorization: `Bearer ${await AsyncStorage.getItem('ACCESS_TOKEN')}` }
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

apiClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const {statusCode} = response;
    if(statusCode === 401) {
        localStorage.setItem(`accessToken`, '');
    }
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});


export default apiClient;


