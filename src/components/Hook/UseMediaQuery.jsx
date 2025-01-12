import React, { useEffect, useState } from 'react'
 
const UseMediaQuery = (query) => {
    const[matches,setMatches] = useState(window.matchMedia(query).matches);

    useEffect(()=>{
        const media = window.matchMedia(query);
        const listener = ()=>setMatches(media.matches);
        media.addEventListener("change",listener);
        console.log(media);
        return ()=> media.removeEventListener("change",listener);
        

    },[query]);

  return matches
};

export default UseMediaQuery