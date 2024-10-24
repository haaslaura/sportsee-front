import { useState, useEffect } from "react"

export function useFetch(url) {
    const [data, setData] = useState({})

    useEffect(() => {
        if (!url) return

        async function fetchData() {
            const response = await fetch(url)
            const data = await response.json()

            setData(data)
            // ici ajout de setLoading(false)
        }

        fetchData()
    }, [url])

    return { data }
}