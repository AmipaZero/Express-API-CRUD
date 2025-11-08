import * as productService from '../services/productService.js';
import { successResponse, errorResponse } from '../helper/response.js';

export const getAll = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    return successResponse(res, 200, products);
  } catch (err) {
    return errorResponse(res, 500, err.message);
  }
};

export const getOne = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    return successResponse(res, 200, product);
  } catch (err) {
    return errorResponse(res, 404, err.message);
  }
};

export const create = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    return successResponse(res, 201, product);
  } catch (err) {
    return errorResponse(res, 400, err.message);
  }
};

export const update = async (req, res) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body);
    return successResponse(res, 200, product);
  } catch (err) {
    return errorResponse(res, 400, err.message);
  }
};

export const remove = async (req, res) => {
  try {
    await productService.deleteProduct(req.params.id);
    return successResponse(res, 200, { message: 'produk berhasil dihapus' });
  } catch (err) {
    return errorResponse(res, 400, err.message);
  }
};
