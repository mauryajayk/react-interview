import React, { useState } from "react";

function DropdownMenu({items}){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <h1>Dropdown Menu</h1>
        <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
        {isOpen && (
            <ul>
                {items.map((item, index)=> (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        ) }
        </>
    )
}
export default DropdownMenu