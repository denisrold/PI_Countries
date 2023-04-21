const convertUppercase = (string) => {
  let String = string.toLowerCase();
  let mayus = String.split("").shift().toUpperCase();
  String = String.slice(1);
  String = mayus + String;
  return String;
};

export default convertUppercase;
