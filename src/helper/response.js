export const successResponse = (res, code, data) => {
  return res.status(code).json({
    code,
    status: 'true',
    data,
  });
};

export const errorResponse = (res, code, message) => {
  return res.status(code).json({
    code,
    status: 'error',
    data: { message },
  });
};
