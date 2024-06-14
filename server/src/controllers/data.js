// * Initial server setup - data example
const getData = async (req, res) => {
    const message = "Hello from backend!!";
    res.send(message);
};

export default getData;
