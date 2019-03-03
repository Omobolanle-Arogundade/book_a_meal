import bcrypt from 'bcrypt';

let password = '';

const hashPassword = (pass) => {
  const salt = bcrypt.genSaltSync(15);
  password = bcrypt.hashSync(pass, salt);
  return password;
};

export default hashPassword;
