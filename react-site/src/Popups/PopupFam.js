import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {Card} from "react-bootstrap";

export default function PopupFam(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Семейная съёмка
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Семья – это связь между прошлыми поколениями и нынешними. Поэтому очень важно сохранить главные моменты в жизни каждого человека!
                </p>
                <div className="cost cost_number">Узнать стоимость и назначить время проведения съемки :<b>+375 29 269-51-20 </b> </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-dark" onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}