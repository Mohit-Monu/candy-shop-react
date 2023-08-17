import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import AddCandy from "./components/AddCandy/AddCandy";
import Header from "./components/Header/Header";
import ShowCandy from "./components/ShowCandy/ShowCandy";
import Cart from "./components/Cart/Cart";

function App() {
  const [ShowCart, setShowCart] = useState(false);
  const [candy, setcandy] = useState([]);
  const [cart, setcart] = useState([]);

  function CartHandler() {
    if (ShowCart === false) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  }

  useEffect(() => {
    async function ShowCandyHandler() {
      try {
        const config = {
          method: "GET",
          url: "https://crudcrud.com/api/98a5467d8a384346b64695c1d1eff1fe/Candy",
        };
        const data = await axios(config);
        setcandy(data.data);
      } catch (err) {
        console.log(err);
      }
    }
    ShowCandyHandler();
    async function ShowCandyCartHandler() {
      try {
        const config = {
          method: "GET",
          url: "https://crudcrud.com/api/98a5467d8a384346b64695c1d1eff1fe/Cart",
        };
        const data = await axios(config);
        setcart(data.data);
      } catch (err) {
        console.log(err);
      }
    }
    ShowCandyCartHandler();
  }, []);

  async function AddCandyHandler(Name, Description, Price) {
    try {
      const config = {
        method: "POST",
        url: "https://crudcrud.com/api/98a5467d8a384346b64695c1d1eff1fe/Candy",
        data: {
          name: Name,
          description: Description,
          price: Price,
        },
      };
      const data = await axios(config);
      const addcandy = data.data;
      setcandy((previtem) => {
        return [addcandy, ...previtem];
      });
    } catch (err) {
      console.log(err);
    }
  }
  async function AddCandyCartHandler(id, quantity) {
    console.log(id);
    try {
      var flag = 0;
      const item = candy.filter((item) => {
        if (item._id === id) {
          return item;
        }
      });
      cart.filter(async (ele) => {
        if (ele.product_id === id) {
          flag++;
          const config = {
            method: "PUT",
            url:
              "https://crudcrud.com/api/98a5467d8a384346b64695c1d1eff1fe/Cart/" +
              ele._id,
            data: {
              product_id: item[0]._id,
              name: item[0].name,
              description: item[0].description,
              price: item[0].price ,
              quantity: ele.quantity + quantity,
            },
          };
          const data = await axios(config);
          return data;
        }
      });
      if (flag == 0) {
        const config = {
          method: "POST",
          url: "https://crudcrud.com/api/98a5467d8a384346b64695c1d1eff1fe/Cart",
          data: {
            product_id: item[0]._id,
            name: item[0].name,
            description: item[0].description,
            price: item[0].price,
            quantity: quantity,
          },
        };
        await axios(config);
      }
      const data =await axios.get(
        "https://crudcrud.com/api/98a5467d8a384346b64695c1d1eff1fe/Cart"
      );
      console.log(data.data)
      setcart(data.data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Cart show={ShowCart} onHide={CartHandler} cartcandy={cart}></Cart>
      <Header OnShowCart={CartHandler} length={cart.length}></Header>
      <AddCandy OnAddCAndy={AddCandyHandler}></AddCandy>
      <ShowCandy candys={candy} addtoCart={AddCandyCartHandler}></ShowCandy>
    </>
  );
}

export default App;
