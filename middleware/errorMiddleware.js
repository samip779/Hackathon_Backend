const notFound = (req, res, next) => {
  res.status(404);
  throw new Error(`Not Found`);
};

const errorHandler = (error, req, res, next) => {
  if (res.statusCode === 200) {
    res.status(500);
    res.json({
      message: 'INTERNAL SERVER ERROR',
      statusCode: 500,
      stack: process.env.NODE_ENV == 'production' ? null : error.stack,
    });
  }
  res.json({
    message: error.message,
    statusCode: res.statusCode,
    stack: process.env.NODE_ENV == 'production' ? null : error.stack,
  });
};

export { errorHandler, notFound };
