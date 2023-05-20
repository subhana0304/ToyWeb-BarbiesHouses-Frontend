import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Barbies House`;
    }, [title])
};

export default useTitle;