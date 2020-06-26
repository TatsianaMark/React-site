import React from "react";
import { Form, Button, Container} from "react-bootstrap";
import kate from "../assets/img/Kate.jpg";
import SocialFollow from "../Components/SocialFollow";
import  {GoMail} from "react-icons/go";

export default function Contacts() {
    return (
       <>

           <div className="container_contacts mt-5 py-5">
               <div className="container_img_contact">
                   <img src={kate} className="img-fluid w-75 mt-3" alt="img_kate"/>
               </div>
               <div className="main_container_contact">
                       <Form>
                           <div className="contact contact_header text-center">
                               <div className="contact contact_number">
                                   <p>PHONE: +375292695120</p>
                                   <p>(Viber, WhatsApp, Telegram)</p>
                               </div>
                               <div className="message_me">
                                   <a href="edorogus@gmail.com">edorogus@gmail.com</a>
                               </div>
                               <div className="contact-text pb-3">
                                   <h3>Связаться со мной</h3>
                               </div>
                               <div className="social social_media">
                                   <SocialFollow/>
                               </div>
                           </div>
                           <Form.Group controlId="formBasicEmail">
                               <Form.Label>E-mail</Form.Label>
                               <Form.Control type="email" placeholder="Email"/>
                           </Form.Group>

                           <Form.Group controlId="formBasicPassword">
                               <Form.Label>Сообщение</Form.Label>
                               <Form.Control as="textarea" rows="5"placeholder="Введите сообщение"/>
                           </Form.Group>
                           <Button variant="dark" type="submit">Отправить</Button>
                       </Form>
               </div>
           </div>
       </>
    );
}