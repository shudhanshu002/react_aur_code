import { useState } from "react";
import Modal from "./Model-popup";
import "./Model.css"

export default function ModalTest() {
    const [showModalPopUp, setShowModalPOPUp] = useState(false)
    function handleToggleModalPopUp() {
        setShowModalPOPUp(!showModalPopUp)
    }

    function onClose() {
        setShowModalPOPUp(false)
    }

    return (
        <div>
            <button onClick={handleToggleModalPopUp}>open Modal popup</button>
            {showModalPopUp && (
                <Modal 
                id = {"custom-id"}
                header={<h1>Customized header</h1>}
                footer={<h1>Customized footer</h1>}
                onClose = {onClose}
                body={<div>Customized body</div>}
                />
            )}
        </div>
    )
}

