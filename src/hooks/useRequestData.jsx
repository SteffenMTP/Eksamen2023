import { useState } from 'react'
import axios from 'axios'


//URL Base to call the API
const UrlAPI = axios.create({ baseURL: "http://localhost:5888/" });


const useRequestData = () => {

    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [data, setData] = useState();

    const makeRequest = async (endpoint, headers = null, params = null, method = "GET", bodydata = null) => {
        setLoading(true);
        setData();

        try {

            let response

            if (method === "GET") {

                response = await UrlAPI.get(endpoint, { headers: headers, params: params })

            } else if (method === "POST") {

                response = await UrlAPI.post(endpoint, bodydata, { headers: headers, params: params })

            } else if (method === "DELETE") {

                response = await UrlAPI.delete(endpoint, { headers: headers, params: params })

            } else if (method === "PUT") {

                response = await UrlAPI.put(endpoint, bodydata, { headers: headers, params: params })

            } else if (method === "PATCH") {

                response = await UrlAPI.patch(endpoint, bodydata, { headers: headers, params: params })

            } else {

                throw new Error("Need a method! Either GET POST PUT PATCH DELETE")

            }

            setData(response.data)
            setError()

        } catch (error) {

            console.log("ERROR", error)
            setError("An error occured: " + error.message)
            setData()

        } finally {
            setLoading(false)
        }
    }

    return { loading, error, data, makeRequest }
}

export default useRequestData