// * Initial server setup - data example
const getData = async (req, res) => {
  const message = { message: "Now hello from backend!!" };
  res.json(message);
};

export default getData;
