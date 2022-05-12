import CryptoJS from "crypto-js";

// Encrypt

const encrypt = (text) => {
  var ciphertext = CryptoJS.AES.encrypt(text, "secret key 123").toString();

  return ciphertext;
};

export default encrypt;
