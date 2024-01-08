

// ?Controllers for Home Page
//----------------------------------
const Home = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        "Welcome Nikhil by router and this is the second method using controller"
      );
  } catch (error) {
    console.log(error);
  }
};

//? Controller for Registration page
//-----------------------------------
const Register = async (req, res) => {
  try {
    console.log(req.body);
    res
      .status(200)
      .json({message:req.body});
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Home ,Register};
