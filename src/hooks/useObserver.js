import { useEffect, useState } from "react";

const useObserver = ({ distance = "100px", externalRef }) => {
    const [isNearScreen, setShow] = useState(false);
    console.log("useObserver", distance, externalRef);

    useEffect(() => {
        if (!externalRef) return;
        let observer;

        const element = externalRef.current;

        Promise.resolve(
            typeof IntersectionObserver !== "undefined"
                ? IntersectionObserver
                : import("intersection-observer")
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: distance,
            });

            if (element) observer.observe(element);
        });

        return () => observer && observer.disconnect();
    });

    const onChange = (entries, observer) => {
        const el = entries[0];
        if (el.isIntersecting) {
            setShow(true);
            observer.disconnect();
        } else {
            setShow(false);
        }
    };

    return { isNearScreen };
};

export default useObserver;
