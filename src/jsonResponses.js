const randomNumberJSON = (qmax = 1) => {
  let max = Number(qmax); // cast max to a Number
  max = !max ? 1 : max; // if max is not a number, default to 1.
  max = max < 1 ? 1 : max; // if max is less than one, default to 1.
  const number = Math.random() * max;
  const responseObj = {
    timestamp: new Date(),
    number,
  };
  return JSON.stringify(responseObj);
};

const getRandomNumberResponse = (request, response, params) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(randomNumberJSON(params.max));
  response.end();
};

module.exports.getRandomNumberResponse = getRandomNumberResponse;
