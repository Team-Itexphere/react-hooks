import React, { useRef } from "react";

const Ref = () => {
    const inputRef = useRef(null);
    const onClick = () => {
        inputRef.current.focus();
    }
    return (
        <div>
            <h1>Victor</h1>
            <input type="text" placeholder="Ex..." ref={inputRef}/>
            <button onClick={onClick}>Change Name</button>
        </div>
    )
}

export default Ref