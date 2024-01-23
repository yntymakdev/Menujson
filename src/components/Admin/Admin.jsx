import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Admin.css";
import { useProductContext } from "../../context/ProductContext";
const Admin = () => {
  const { addProduct } = useProductContext();

  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");

  function handleChangeProduct() {
    let newObj = {
      name: name,
      year: year,
      image: image,
    };
    addProduct(newObj);
  }

  return (
    <div className="create">
      <div className="container">
        <div className="create">
          <div className="content">
            <Typography variant="h3">Admin</Typography>
            <TextField
              onChange={(e) => setName(e.target.value)}
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setYear(e.target.value)}
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Year"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setImage(e.target.value)}
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Image"
              variant="outlined"
            />
            <Button
              onClick={handleChangeProduct}
              sx={{ width: "100%", background: "#181818" }}
              variant="contained"
            >
              create
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
