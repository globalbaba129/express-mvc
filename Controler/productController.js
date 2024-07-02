import Product from '../models/product.js'

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createProduct = async (req, res) => {
  const {body } = req;
  try {
    const savedProduct = await Product.create(body);
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const {body} = req;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id,  body , { new: true });
    if (updatedProduct) {
      res.json(updatedProduct);
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (deletedProduct) {
      res.json(deletedProduct);
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
