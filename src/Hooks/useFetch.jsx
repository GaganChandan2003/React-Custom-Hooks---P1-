
import { useEffect,useState } from 'react';

const useFetch = (url) => {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(false);


    const fetchData=()=>
    {
        
        fetch(url)
        .then((res)=>res.json())
        .then((res)=>{setdata(res.items);setloading(false);})
        .catch((err)=>{seterror(true);setloading(false);});
       
    }
    
    useEffect(()=>
    {
       fetchData();
    },[url]);
    return {loading,error,data}
    
  
}

export default useFetch