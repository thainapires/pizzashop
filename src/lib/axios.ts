import { env } from '@/env'
import axios from 'axios'

export const api = axios.create({
    baseURL: env.VITE_API_URL,
    withCredentials: true,
})

//This is only to test loading states and some other stuff
if(env.VITE_ENABLE_API_DELAY){
    api.interceptors.request.use(async (config) => {
        await new Promise(resolve => setTimeout(resolve, Math.round(Math.random() * 3000)))
        return config
    })
}