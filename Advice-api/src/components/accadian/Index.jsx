import React, { useState } from 'react';
import data from "./data"
import "./style.css"

const Accordion = () => {
    const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);
    const [selected, setSelected] = useState(null);

    const handleToggleSelection = () => {
        setEnableMultipleSelection((prev) => {
            if(!prev && selected !== null) {
                setMultiple([selected])
            }
            else {
                setMultiple([])
            }
            return !prev;
        })
    }

    const handleSingleSelection = (id) => {
        setSelected(id === selected ? null : id);
    };

    const handleMultipleSelection = (id) => {
        setMultiple((prev) =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    return (
        <div className='acc-wrapper'>
            <button onClick={handleToggleSelection}>
                {enableMultipleSelection? "Disable Multiple Selection" : "Enable Multiple Selection"}
            </button>

            <div className='accordian'>
                {data && data.length>0 ? (
                    data.map((dataItem) => (
                        <div className='item'>
                            <div 
                                onClick={
                                    enableMultipleSelection 
                                    ? () => handleMultipleSelection(dataItem.id)
                                    : () => handleSingleSelection(dataItem.id)
                                }
                                className='title'
                                >
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                            </div>
                            {
                                enableMultipleSelection
                                ? multiple.indexOf(dataItem.id) !== -1 && (
                                    <div className='acc-content'>{dataItem.answer}</div>
                                ) : selected === dataItem.id && (
                                    <div className='acc-content'>{dataItem.answer}</div>
                                )
                            }
                        </div>
                    ))
                ):(
                    <div>Data noe found1</div>
                )
                }
            </div>
        </div>
    );
};

export default Accordion;
