import React from "react";
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const OverlayDiv = styled.div`
    background: rgba(49, 49, 49, 0.92);
    width: 100vw;
    heigth: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
`

const ContentDiv = styled.div`
    min-width: 600px;
    min-heigth: 300px;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 3px;
    line-heigth: 1.4;
    position: absolute;
`

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <OverlayDiv onClick={onClose}>
            <ContentDiv onClick={(e) => e.stopPropagation()}>
                {children}
            </ContentDiv>
        </OverlayDiv>,
    document.getElementById("modal-root")
    );
}

export default Modal;