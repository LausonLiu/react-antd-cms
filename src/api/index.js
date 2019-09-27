import axios from "axios"
import { message } from "antd"
// https://cnodejs.org/api/v1/topics

const isDev = process.env.NODE_ENV === "development"

const service = axios.create(
    {
        baseURL: isDev ? 'https://cnodejs.org/api/v1' : "https://cnodejs.org/api/v1"
    }
)

service.interceptors.request.use( (config) => {
    return config;
} )

service.interceptors.response.use( (res) => {

    if( res.status === 200 ){
        return res.data;
    }else{
        message.error('This is an error message');
    }

})

const getTopics = () => {
    return service.get("/topics");
}

export default getTopics