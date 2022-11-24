const hash = require("../validators/hashPassword");
const { signupSchema } = require("../validators/validateUser");
const token = require("../validators/getToken");

const Register = async( req,res)=>{
    let success = true;
    let status = 201;
 //Validate req data with joi
  const { error } = signupSchema(req.body);
  if (error) {
    const errorMessage = error.details[0].message;
    const errors = error.details.map((el) => el.message);
    return res.status(400).json({ status: 400, success, error: errors });
  }
  try {
    const userInfo = req.body;
    const { firstName, lastName, email, password, role } = userInfo;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      return res.status(409).json({
        status: 409,
        success,
        error: "User with this email already exists.",
      });
    }

    const hashPassword = await hash(password);

    const createUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashPassword,
        role,
      },
    });
    let tokens = token(createUser.uuid);
    const userWithoutPassword = excludeOne(createUser, "id", "password");

    res.status(status).json({
      status,
      success,
      message: "User created successfully",
      data: userWithoutPassword,
      tokens,
    });
} catch (error) {
    success = false;
    status = 500;
    return res.status(status).json({ status, success, error: error.message });
  }
}


module.exports={
    Register
}