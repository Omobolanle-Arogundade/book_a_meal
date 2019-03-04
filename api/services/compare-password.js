import bcrypt from 'bcrypt';

const comparePassword = (password, userPassword) => {
  const isEqual = bcrypt.compareSync(password, userPassword);
  return isEqual;
};

export default comparePassword;
