import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useToken = email => {
    const [token, setToken] = useState('');

    useEffect(() => {
        if (email) {
            fetch(`https://aurora-dental-care-server.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.token) {
                        localStorage.setItem('auroraSecretToken', data.token);
                        setToken(data.token)
                    }
                })
                .catch(error => toast.error(error.message))
        }
    }, [email])

    return [token];
}

export default useToken;