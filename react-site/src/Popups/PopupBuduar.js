import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function PopupBuduar(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Будуарная съёмка
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Слово “будуар”, появившееся в далеком 18 веке, имеет французские корни и подразумевает собой комнату (в большинстве случаев это название  применялось для спальни или гардеробной). Главным атрибутом данной съемки можно назвать красивое нижнее белье или сорочку, в которую одета модель. Стоит уточнить, что фотосессия в стиле будуар не предполагает излишней откровенности, зачастую оголенные части тела прикрываются красивым пледом или легким халатом-накидкой. Обнаженность в данном образе играет второстепенную роль, уступая позиции женственности и красоте.
                </p>
                <div className="cost cost_number">Узнать стоимость и назначить время проведения съемки :<b>+375 29 269-51-20 </b> </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-dark" onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}