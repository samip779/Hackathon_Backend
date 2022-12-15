const notFound = (req, res, next) => {
  res.status(404);
  throw new Error(`Not Found`);
};

const errorHandler = (error, req, res, next) => {
  res.json({
    message: error.message,
    statusCode: res.statusCode,
    stack: process.env.NODE_ENV == 'production' ? null : error.stack,
  });
};

export { errorHandler, notFound };
