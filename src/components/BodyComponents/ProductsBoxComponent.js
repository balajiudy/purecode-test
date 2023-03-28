import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Container, Typography } from "@mui/material";
import useFetch from "../../utils/useFetch";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

function ActionAreaCard({ item }) {
  return (
    <Card
      sx={{
        minWidth: "325px",
        maxHeight: "90px",
        padding: "5px",
        borderStyle: "none",
        boxShadow: "none",
        display: "flex",
        flexDirection: "row",
      }}>
      <CardMedia
        component="img"
        image={item.image}
        alt={item.category}
        sx={{
          height: "100px",
          width: "100px",
          borderRadius: "10px",
          boxShadow: "0px 0px 17px 0px #bfbebe94",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="caption" component="div">
          {item.title.substring(0, 20)}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {item.description.substring(0, 25)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function ProductsBoxComponent() {
  const [status, setStatus] = React.useState(false);
  const [data] = useFetch("https://fakestoreapi.com/products/");
  React.useEffect(() => {
    if (data?.length > 4) setStatus(true);
  }, [data]);

  return (
    <Box
      sx={{
        width: 760,
        height: 300,
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0px 0px 17px 0px #bfbebe94",
      }}>
      <Typography variant="h7">Popular Products</Typography>
      <br />
      <Typography variant="caption">
        Checkout what other people are liking the most
      </Typography>
      <Container
        sx={{
          maxWidth: 300,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 1,
        }}>
        {status ? (
          <>
            {data
              ?.filter((item, index) => index < 4)
              .map((item) => (
                <ActionAreaCard item={item} />
              ))}
          </>
        ) : (
          <>
            {data?.map((item) => (
              <ActionAreaCard item={item} />
            ))}
          </>
        )}
      </Container>
      {status ? (
        <Button variant="text" sx={{ color: "purple" }}>
          VIEW ALL
        </Button>
      ) : (
        <></>
      )}
    </Box>
  );
}
