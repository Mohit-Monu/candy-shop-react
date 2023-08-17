import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function ListCart(props) {
  return (
    <div>
      {props.cartcandy.map((item, index) => (
        <Container key={item._id} >
          <Row className="align-items-center">
            <Col  className="text-primary">
              <h4>{item.name}</h4>
            </Col>
            <Col  className="text-primary">
              <h4>{item.description}</h4>
            </Col>
            <Col  className="text-danger">
              <h5>
                {item.price} X {item.quantity}
              </h5>
            </Col>
            <Col>
              <h2>{+item.quantity * +item.price}</h2>
            </Col>
            <Col>
              <button
                type="button"
                className=" btn btn-danger "
                value={item.id}
                onClick={props.OnDeleteFromCart}
              >
                Delete
              </button>
            </Col>
          </Row>
        </Container>
      ))}
    </div>
  );
}
export default ListCart;
