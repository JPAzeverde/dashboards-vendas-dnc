import { useState, useEffect } from 'react'
import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'


const axioInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/`
})

export const usePost = <T, P>(endpoint: string, withAuth?: boolean) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<number | null>(null)

    const postData = async(postData: P, config?: AxiosRequestConfig) =>{
        setData(null)
        setLoading(true)
        setError(null)
        try{
            const headers = withAuth ? {
                Authorization:`Bearer ${Cookies.get('Authorization')}`,
                'Content-Type': 'application/json',
                ...config?.headers
            } : {
                'Content-Type': 'application/json',
                ...config?.headers
            }
            const response = await axioInstance({
                url: endpoint,
                method:'POST',
                data: postData,
                headers: headers,
                ...config
            })
            setData(response.data)
        } catch(e: any) {
            setError(e.response.status ?? 500)
        } finally{
            setLoading(false)
        }
    }
    return {data, loading, error, postData}
}

export const useGet = <T>(endpoint: string, config?: AxiosRequestConfig) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<number | null>(null)

    const getData = async() =>{
        setLoading(true)
        setError(null)

        try{
            const response = await axioInstance({
                url: endpoint,
                method:'GET',
                headers:{
                    Authorization:`Bearer ${Cookies.get('Authorization')}`,
                    ...config?.headers
                },
                ...config
            })
            setData(response.data)
        } catch(e: any) {
            setError(e.response.status ?? 500)
        } finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getData()
    },[])


    return {data, loading, error, getData}
} 

export const usePut = <T>(endpoint: string) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<number | null>(null)

    const putData = async(putData: T, config?: AxiosRequestConfig) =>{
        setData(null)
        setLoading(true)
        setError(null)
        try{
            const response = await axioInstance({
                url: endpoint,
                method:'PUT',
                data: putData,
                headers:{
                    'Authorization':`Bearer ${Cookies.get('Authorization')}`,
                    'Content-Type': 'application/json',
                    ...config?.headers
                },
                ...config
            })
            setData(response.data)
        } catch(e: any) {
            setError(e.response.status ?? 500)
        } finally{
            setLoading(false)
        }
    }
    return {data, loading, error, putData}
}


export const useDelete = <T>(endpoint: string) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(false)

    const deleteData = async(config?: AxiosRequestConfig) =>{
        setData(null)
        setLoading(true)

        try{
            const response = await axioInstance({
                url: endpoint,
                method:'DELETE',
                data: deleteData,
                headers:{
                    Authorization:`Bearer ${Cookies.get('Authorization')}`,
                    'Content-Type': 'application/json',
                    ...config?.headers
                },
                ...config
            })
            setData(response.data)
        } catch(e: any) {
            throw e.response?.status
        } finally{
            setLoading(false)
        }
    }
    return {data, loading, deleteData}
}