import * as productRepository from '../repository/productRepository.js';

export const getAllProducts = async () => {
  return await productRepository.findAll();
};

export const getProductById = async (id) => {
  const product = await productRepository.findById(id);
  if (!product) throw new Error('Produk tidak ditemukan!');
  return product;
};

export const createProduct = async (data) => {
  return await productRepository.create(data);
};

export const updateProduct = async (id, data) => {
  await getProductById(id); // pastikan produk ada dulu
  return await productRepository.update(id, data);
};

export const deleteProduct = async (id) => {
  await getProductById(id); // pastikan produk ada dulu
  return await productRepository.remove(id);
};
