const httpStatus = require("http-status");
exports.create = async (req, res, next) => {
  try {
  
    return res.status(httpStatus.CREATED).json({ appointment });
  } catch (error) {
    next(error);
  }
};
