import React from "react";
import { Form, Button, Container} from "react-bootstrap";
import kate from "../assets/img/Kate.jpg";

export default function Contacts() {
    return (
       <>

           <div className="container_contacts mt-5 py-5">
               <div className="container_img_contact">
                   <img src={kate} className="img-fluid w-75" alt="img_kate"/>
               </div>
               <div className="main_container_contact">
                       <Form>
                           <h3 className="text-center mb-4">Связаться со мной</h3>
                           <Form.Group controlId="formBasicEmail">
                               <Form.Label>E-mail</Form.Label>
                               <Form.Control type="email" placeholder="Email"/>
                           </Form.Group>

                           <Form.Group controlId="formBasicPassword">
                               <Form.Label>Сообщение</Form.Label>
                               <Form.Control as="textarea" rows="10"placeholder="Введите сообщение"/>
                           </Form.Group>
                           <Button variant="dark" type="submit">Отправить</Button>
                       </Form>
               </div>
           </div>
       </>
    );
}