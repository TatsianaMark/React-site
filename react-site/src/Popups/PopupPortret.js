import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function PopupPortret(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Портретная съёмка
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Один из сложнейших видов фотосъемки, требующий немалых знаний и умений.
                    Задача портретного снимка является передача всех граней личности, изображенной на фото, начиная от красоты внешности и заканчивая богатым внутренним миром.
                </p>
                <div className="cost cost_number">Узнать стоимость и назначить время проведения съемки :<b>+375 29 269-51-20 </b> </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-dark" onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}