import axios from "axios"

const REACT_APP_API_URL="http://localhost:5000/"


const $host = axios.create(
    {
        baseURL: REACT_APP_API_URL
    }
)

const $authHost = axios.create(
    {
        baseURL: REACT_APP_API_URL,
    }
)

$host.interceptors.request.use(function (config)
{  
    const token = localStorage.getItem('token')
    config.headers.authorization=`Bearer ${token}`
    return config
})


export
{
    $host, $authHost
}