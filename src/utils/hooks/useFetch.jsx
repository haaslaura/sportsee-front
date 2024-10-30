import { useState, useEffect } from "react"

export function useFetch(input) {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {       

        console.log(input);
        
        if (!input) return
        setLoading(true)

        async function fetchData() {
            try {

                if (input.data) {
                    setData(input.data)
                    console.log(input.data)

                } else if (input.url) {
                    const response = await fetch(input.url)
                    const data = await response.json()
                    setData(data)

                } else {
                    throw new Error ("Aucune URL ou donnée n'a été fournie.")
                
                }

            } catch (err) {
                console.log(err)
                setError(true)

            } finally {
                setLoading(false)
            }
        }

        fetchData() // appel fonction pour appeler data...

    }, [input]) // ... dès le changement dans l'url ou l'import de données

    return { isLoading, data, error }
}