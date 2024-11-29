import React from 'react'
import { useState } from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";

const notify = () => toast.success("Notificacion", {
    theme: 'dark'
})

export const ButtonSubscribe = () => {
    const [subscribe, setSubscribe] = useState(false)



    return (
        <>
            <button onClick={() => {

                notify()
                setSubscribe(!subscribe)
            }}
            >
                {
                    subscribe ? "ya estas suscrito" : "Suscribete"
                }
            </button >
            <ToastContainer />
        </>
    )
}
