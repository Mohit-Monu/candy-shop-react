
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function ListCart(props) {
  return (
    <div>
      {props.cartcandy.map((item, index) => (
        <Container key={item.id}>
          <Row className="align-items-center">
            <Col md={3}>
              <Image
                src={item.imageUrl}
                className="mb-2 shadow-lg"
                rounded
                style={{ height: "150px" }}
              />
            </Col>
            <Col md={5} className="text-primary">
              <h4>{item.title}</h4>
            </Col>
            <Col md={2} className="text-danger">
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
