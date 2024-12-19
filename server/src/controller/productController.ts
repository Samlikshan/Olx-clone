import { Request, Response } from 'express'
import Product from "../models/productSchema";

interface ProductType {
  name: string;
  description: string;
  price: number;
  condition: string;
  color: string;
  image?: string;
  contactNumber: string;
}


export const getProducts = async (req: Request, res: Response): Promise<any> => {
  try {
    const products = await Product.find()
    return res.status(200).json({ products: products, message: 'Product fetched successfully' })
  } catch (error) {
    console.log('Error getProduct', error)
    res.status(400).json({ error: 'Error getting products' })
  }
}

export const getSingleProduct = async (req: Request, res: Response): Promise<any> => {
  const { productId } = req.params
  try {
    const product = await Product.findOne({ _id: productId })
    return res.status(200).json({ product: product, message: 'Product fetched successfully' })
  } catch (error) {

    console.log('Error getSingleProduct', error)
  }
}

export const createProduct = async (req: Request, res: Response): Promise<any> => {
  const { name, description, price, condition, color, contactNumber }: ProductType = req.body
  try {
    if (!name || !description || !price || !color || !contactNumber) {
      return res.status(400).json({
        message: 'Validation error: All fields are required',
        missingFields: {
          all: !name && !description && !price && color ? 'All fields are required' : null,
          name: !name ? 'name is required' : null,
          description: !description ? 'Descritption is required' : null,
          price: !price ? 'Price is required' : null,
          condition: !condition ? 'Condition is required' : null,
          color: !color ? 'price is required' : null,
          contactNumber: !contactNumber ? 'contact number is required' : null,
        },
      });
    }

    const image: string | undefined = req.file?.filename

    console.log(contactNumber)
    if (contactNumber.length != 10) {
      return res.status(400).json({
        error: 'Number length should be 10'
      })
    }

    if (price <= 0) {
      return res.status(400).json({
        error: 'Price can`t be belwo Below or Zero'
      })
    }

    await Product.create({ name, description, price, condition, color, image, contactNumber })

    return res.status(201).json({ message: 'Product adedd succesfully' })

  } catch (error) {
    console.log('createProduct', error)
  }
}
