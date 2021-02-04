import {useState, useEffect, useContext, useRef} from "react";

import {ObserverContext} from "./ObserverContext.js";

export const useObserver = () => {
    const context = useContext(ObserverContext);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if(entry.isIntersecting)
                        setIsVisible(true);
                });
            },
            {threshold: 1}
        );

        if(ref.current)
            observer.observe(ref.current);

        return () => {
            if(ref.current)
                observer.unobserve(ref.current);
        };
    }, []);

    return [ref, isVisible ? "FadeInTrigger " : ""];
};