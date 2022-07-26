import { useEffect, useState } from "react"

export default function Custom404() {

    let [remainingTime, setRemainingTime] = useState(5)
    useEffect(() => {
        setTimeout(() => {
            window.location.replace('/')
        }, 5000)
        setInterval(() => {
            setRemainingTime(remainingTime - 1)
        }, 1000)
    })

    return (
        <h1 className="text-center text-lg font-semibold">404 - Page Not Found
            Redirecting in {remainingTime}..
        </h1>

    )
}
