import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function PopupIndividual(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Индивидуальная съемка
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                   Уникальная возможность взглянуть на себя с абсолютно другой стороны, выйдя из привычной зоны комфорта!
                </p>
                <div className="cost cost_number">Узнать стоимость и назначить время проведения съемки :<b>+375 29 269-51-20 </b> </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-dark" onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}