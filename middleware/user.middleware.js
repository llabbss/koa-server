const comparePassword = (ctx, next) => {};

const validateUserInfo = (ctx, next) => {
  console.log(ctx);
};

module.exports = {
  comparePassword,
  validateUserInfo
};
