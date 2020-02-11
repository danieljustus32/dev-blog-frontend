import React from "react"
import { useQuery } from "@apollo/react-hooks"

const Query = ({ children, query, id }) => {
    const { data, loading, error } = useQuery(query, {
        variables: { id: id }
    })

    if (loading) {
        return (
            <svg className="loading-wheel-viewbox" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle className="loading-wheel" cx="50" cy="50" r="45" />
            </svg>
        )
    }
    if (error) return <p>Error: {JSON.stringify(error)}</p>
    return children({ data })
}

export default Query