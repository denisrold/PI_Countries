const nameConvert = (query) => {
  let querys = query.name.toLowerCase();
  let mayus = querys.split("").shift().toUpperCase();
  querys = querys.slice(1);
  querys = { name: mayus + querys };
  return querys;
};

module.exports = nameConvert;
