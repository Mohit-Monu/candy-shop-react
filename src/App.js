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
  const url = "https://crudcrud.com/api/7f7396baa800460aba3d44fbdef24678";

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
          url: "https://crudcrud.com/api/7f7396baa800460aba3d44fbdef24678/Candy",
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
          url: "https://crudcrud.com/api/7f7396baa800460aba3d44fbdef24678/Cart",
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
        url: "https://crudcrud.com/api/7f7396baa800460aba3d44fbdef24678/Candy",
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
    try {
      let flag = 0;
      const item = cart.filter((item) => {
        if (item._id === id) {
          return item;
        }
      });
      const alreadyPresent = cart.filter(async (ele) => {
        if (ele._id === id) {
          flag++;
          const config = {
            method: "PUT",
            url: "https://crudcrud.com/api/7f7396baa800460aba3d44fbdef24678/Cart",
            data: {
              name: ele.name,
              description: ele.description,
              price: item.price*(ele.quantity+quantity),
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
          url: "https://crudcrud.com/api/7f7396baa800460aba3d44fbdef24678/Cart",
          data: {
            name: item.name,
            description: item.description,
            price: item.price,
            quantity: 1,
          },
        };
        const data = await axios(config);
        const addcandy = data.data;
        setcart((previtem) => {
          return [addcandy, ...previtem];
        });
      }
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
