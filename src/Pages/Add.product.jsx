import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Addproductsapi } from "../Redux/Apicall";

export default function AddProduct() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const title = data.get("title");
    const info = data.get("info");
    const tax = data.get("tax");
    const desc = data.get("desc");
    const categories= data.get("categories").split(",");
    const size= data.get("size").split(",");
    const img = data.get("img");
    const color = data.get("color").split(",");
    const amount= data.get("amount");
    const price = data.get("price");
    console.log("data in allproduct",data);

    let alldata={
        title,
        info,
        tax,
        desc,
        categories,
        size,
        img,
        color,
        amount,
        price
    }

    Addproductsapi(alldata);
    console.log("alldata ka data",alldata);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Add Product
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="title"
            name="title"
            autoComplete="title"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="info"
            label="info"
            id="info"
            autoComplete="info"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="tax"
            label="tax"
            id="tax"
            autoComplete="tax"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="desc"
            label="desc"
            id="desc"
            autoComplete="desc"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="img"
            label="img"
            id="img"
            autoComplete="img"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="categories"
            label="categories"
            id="categories"
            autoComplete="categories"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="size"
            label="size"
            id="size"
            autoComplete="size"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="color"
            label="color"
            id="color"
            autoComplete="color"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="amount"
            label="amount"
            id="amount"
            autoComplete="amount"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="price"
            label="price"
            id="price"
            autoComplete="price"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button 
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            // disabled={isfetching}
          >
            Add Product
          </Button>
        </Box>
      </Box>
    </Container>
  );
}