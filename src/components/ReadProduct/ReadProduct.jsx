import React, { useEffect } from "react";
import { useProductContext } from "../../context/ProductContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const ReadProduct = () => {
  const { deleteProduct, ReadProduct, data } = useProductContext();
  useEffect(() => {
    ReadProduct();
  }, []);
  return (
    <div>
      {data.map((el) => (
        <Card sx={{ maxWidth: 200, padding: 2 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="260"
            image={el.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {el.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {el.year}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={(e) => deleteProduct(el.id)} size="small">
              delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default ReadProduct;
