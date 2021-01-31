import React from "react";

export const IsVisible = (props) => {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting)
                    setVisible(true);
            });
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);

    return props.render(isVisible, domRef);
};