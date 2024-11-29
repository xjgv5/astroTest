import React from 'react'
import { useState } from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";
export const ButtonSubscribe = () => {
    const [subscribe, setSubscribe] = useState(false)


    return (
        <button onClick={() => {

            toast.success("Felicidades ya estas suscrito")
            setSubscribe(!subscribe)
        }}
        >
            {
                subscribe ? "ya estas suscrito" : "Suscribete"
            }
        </button >
    )
}
