const appName = process.env.APP_NAME;

const message = (otp) => {
  return `Dear User,\n ${otp} is your otp for Login.Please Enter the OTP to proceed.\n Regards\n ${appName}`;
};

module.exports = message;
