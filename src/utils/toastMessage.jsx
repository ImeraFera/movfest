import { toast } from "react-toastify"


export const notify = (message, type) => {

    const toastOptions = {
        autoClose: 1500,
        draggable: false,
        theme: 'dark',
    }

    switch (type) {
        case 'success':
            return toast.success(message, toastOptions);
        case 'error':
            return toast.error(message, toastOptions);
    }

}