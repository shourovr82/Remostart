import React, { useEffect, useState } from 'react'

const ToastMessage = ({message,duration}) => {
    const [showToast, setShowToast] = useState(false)

    useEffect(() => {
        setShowToast(true)

        setTimeout(() => setShowToast(false), duration)
    }, [duration])

    return (
        showToast &&
        <div>{message}</div>
    )

}

export default ToastMessage