function Header(props) {
  return (
    <div className="bg-danger pt-3 pb-3" style={{ height: "100px" }}>
      <h2 style={{ fontSize: "55px", float: "left", marginLeft: "370px" }}>
        Welcome to Candy Shop
      </h2>
      <div style={{ float: "right", marginRight: "20px", marginTop: "10px" }}>
        <button onClick={props.OnShowCart} className="btn btn-light" style={{ float: "left" }} type="button">
          Cart
        </button>
        <span style={{ float: "left", marginLeft: "5px", fontSize: "20px" }}>
          {props.length}
        </span>
      </div>
    </div>
  );
}
export default Header;
