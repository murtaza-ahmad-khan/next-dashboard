import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import * as yup from "yup";

import { Form, Input } from "../../../components/dashboard";

const useStyles = makeStyles({
  flexGrow: {
    flexGrow: 1,
  },
});

const validationSchema = yup.object().shape({
  title: yup.string().min(4).required(),
  description: yup.string(),
  category: yup.string().min(2).required(),
  price: yup.number().required(),
  quantity: yup.number().required(),
  color: yup.string(),
  size: yup.string(),
  weight: yup.string(),
  sale: yup.number(),
  seo_description: yup.string(),
  seo_keywords: yup.string(),
});

const initialValues = {
  title: "",
  description: "",
  category: "",
  price: "",
  quantity: "",
  color: "",
  size: "",
  weight: "",
  sale: "",
  seo_description: "",
  seo_keywords: "",
};

export default function ProductForm() {
  const classes = useStyles();

  const submitHandler = (values) => {
    console.log(values);
  };
  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h6">Add a Product</Typography>
        </CardContent>
        <CardContent>
          <Form
            initialValues={initialValues}
            onSubmit={submitHandler}
            validationSchema={validationSchema}
          >
            <Input label="Title" name="title" fullWidth />
            <Input
              label="Product Description"
              name="description"
              multiline
              rows={10}
              fullWidth
            />

            <Grid container spacing={2} className={classes.flexGrow}>
              <Grid item xs={12} sm={12} md={3}>
                <Input label="Price" name="price" type="number" fullWidth />
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <Input
                  label="Quantity"
                  name="quantity"
                  type="number"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <Input label="Color" name="color" fullWidth />
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <Input label="Size" name="size" fullWidth />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Input label="Weight" name="weight" fullWidth />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Input label="Sale" name="sale" type="number" fullWidth />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Input
                  field="select"
                  label="Category"
                  name="category"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Input
              label="SEO Description"
              name="seo_description"
              multiline
              rows={5}
              fullWidth
            />
            <Input label="SEO Keywords" name="seo_keywords" fullWidth />

            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Form>
        </CardContent>
      </Card>
    </Container>
  );
}
