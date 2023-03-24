import axios, { AxiosRequestConfig } from 'axios'

import { BASE_URL } from '@/config/constants'

export const publicAPI = axios.create({
    baseURL: BASE_URL || undefined,
    timeout: 30000,
})

class ApiService {
    http = axios.create({
        baseURL: BASE_URL || undefined,
        timeout: 30000,
    })

    constructor() {
        this.http.interceptors.request.use((config) => {
            console.log('config', config)
            return config
        })
    }

    get(path: string, config?: AxiosRequestConfig) {
        return this.http.get(path, config)
    }

    post(path: string, payload: any, config?: AxiosRequestConfig) {
        return this.http.post(path, payload, config)
    }

    put(path: string, payload: any, config?: AxiosRequestConfig) {
        return this.http.put(path, payload, config)
    }

    delete(path: string, config?: AxiosRequestConfig) {
        return this.http.delete(path, config)
    }
}

export const API = new ApiService()
