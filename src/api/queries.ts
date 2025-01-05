import { useQuery } from "react-query"
import { User } from "../Utils/Types"

const API = 'https://portfolio-shuklasp-backend.vercel.app/'

const fetchUser = async () => {
    const res = await fetch(API+'client')
    if (!res.ok) {
        throw Error('Error in fetching data from server')
    }
    return await res.json()
}

export const useUserQuery = () => {
    return useQuery<User>({
        queryFn: fetchUser,
        initialData: () => {
            const localData = localStorage.getItem('user')
            if (localData) {
                return JSON.parse(localData)
            }
        },
        onSuccess(data) {
            localStorage.setItem('user', JSON.stringify(data))
        },
        refetchOnWindowFocus: false,
        staleTime: Infinity,
        refetchOnReconnect: true
    })
}