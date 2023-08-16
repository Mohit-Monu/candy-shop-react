import { useEffect, useState } from "react";

function ShowCandy(props) {
  function AddOne(e){
    const id=e.target.value
    props.addtoCart(id,1)
  }
  function AddTwo(e){
    const id=e.target.value
    props.addtoCart(id,2)
  }
  function AddThree(e){
    const id=e.target.value
    props.addtoCart(id,3)
  }
  const [tableCandy, SetTableCandy] = useState();
  useEffect(() => {
    SetTableCandy(()=>{
        return(props.candys.map((element,index) => (
            <tr key={element._id}>
              <td>{index+1}</td>
              <td>{element.name}</td>
              <td>{element.description}</td>
              <td>Rs.{element.price}</td>
              <td>
                <button
                onClick={AddOne}
                  className="btn btn-danger"
                  value={element._id}
                  style={{ marginRight: "6px" }}
                  type="button"
                >
                  Buy 1
                </button>
                <button
                onClick={AddTwo}
                  className="btn btn-danger"
                  value={element._id}
                  style={{ marginRight: "6px" }}
                  type="button"
                >
                  Buy 2
                </button>
                <button
                onClick={AddThree}
                  className="btn btn-danger"
                  value={element._id}
                  style={{ marginRight: "6px" }}
                  type="button"
                >
                  Buy 3
                </button>
              </td>
            </tr>
          )))
    });
  },[props.candys]);
  return (
    <div className="container text-center">
      <h1>All Candy</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sl.no</th>
            <th>Name</th>
            <th>Description</th>
            <th>price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{tableCandy}</tbody>
      </table>
    </div>
  );
}
export default ShowCandy;
