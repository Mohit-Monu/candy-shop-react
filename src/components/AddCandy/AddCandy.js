import { useRef } from "react";
function AddCandy(props) {
  const NameRef = useRef();
  const DescriptionRef = useRef();
  const PriceRef = useRef();

  async function AddCandy(e) {
    e.preventDefault();
    props.OnAddCAndy(
      NameRef.current.value,
      DescriptionRef.current.value,
      PriceRef.current.value
    );
  }
  return (
    <center>
      <div className="container mt-5 mb-5">
        <form onSubmit={AddCandy}>
          <span style={{ marginRight: "10px" }}>Candy Name</span>
          <input type="text" placeholder="Enter Name" required ref={NameRef} />
          <span style={{ marginRight: "10px", marginLeft: "10px" }}>
            Description
          </span>
          <input
            type="text"
            placeholder="Enter Description"
            ref={DescriptionRef}
            required
          />
          <span style={{ marginRight: "10px", marginLeft: "10px" }}>Price</span>
          <input
            type="number"
            placeholder="Enter Price"
            required
            ref={PriceRef}
          />
          <button
            style={{ marginLeft: "10px" }}
            type="submit"
            className="btn btn-danger"
          >
            Add Candy
          </button>
        </form>
      </div>
      <hr />
    </center>
  );
}
export default AddCandy;
