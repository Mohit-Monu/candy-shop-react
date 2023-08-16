import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListCart from "./ListCart";

function Cart (props){
  return(
    <Modal
        {...props}
        size="xl"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title >View Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListCart cartcandy={props.cartcandy}></ListCart>
        </Modal.Body>
        <Modal.Title className="text-danger align-self-center">Total Price- Rs.</Modal.Title>
          
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide} >
            Close
          </Button>
          <Button variant="primary">
            Order
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
export default Cart