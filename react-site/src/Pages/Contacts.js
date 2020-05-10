import React from "react";
import { Form, Button, Container} from "react-bootstrap";

export default function Contacts() {
    return (
       <Container style={{width:'100%'}}>
           <h3 className="text-center">Связаться со мной</h3>
           <Form>
               <Form.Group controlId="formBasicEmail">
                   <Form.Label>E-mail</Form.Label>
                   <Form.Control type="email" placeholder="Email"/>
               </Form.Group>

               <Form.Group controlId="formBasicPassword">
                   <Form.Label>Сообщение</Form.Label>
                   <Form.Control as="textarea" rows="10"placeholder="Введите сообщение"/>
               </Form.Group>

               <Form.Group controlId="formBasicCheckbox">
                   <Form.Check type="checkbox" label="Check me out" />
               </Form.Group>
               <Button variant="dark" type="submit">Отправить</Button>

           </Form>
       </Container>
    );
}