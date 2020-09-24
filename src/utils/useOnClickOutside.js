import {useEffect} from "react";

export const useOnClickOutside = (ref, handler) => {
    useEffect(()=> {
        
        const listener = event => {
            // if user click on menu or hamburger -> don't do anything.
            if(!ref.current || ref.current.contains(event.target) ){
                return;
            }
            // if user click on elsewhere -> call handler to close menu. 
            handler(event);
        };

        document.addEventListener("mousedown", listener);
        return ()=>{
            document.removeEventListener("mousedown", listener);
        };
    }, [ref,handler]);
};
