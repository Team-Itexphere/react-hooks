import React, { useEffect, useLayoutEffect, useRef } from "react";

const LayoutEffect = () => {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    useEffect(() => {
        inputRef.current.value = "Hello "
    }, []);

    return (
        <div>
            <input ref={inputRef} value="Reor" />

        </div>
    )
}

export default LayoutEffect;