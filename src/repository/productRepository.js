import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const findAll = async () => {
  return await prisma.product.findMany();
};

export const findById = async (id) => {
  return await prisma.product.findUnique({
    where: { id: Number(id) },
  });
};

export const create = async (data) => {
  return await prisma.product.create({ data });
};

export const update = async (id, data) => {
  return await prisma.product.update({
    where: { id: Number(id) },
    data,
  });
};

export const remove = async (id) => {
  return await prisma.product.delete({
    where: { id: Number(id) },
  });
};
