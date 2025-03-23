// export const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, req, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

export const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};
