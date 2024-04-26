const User = require("../models/user");
const bcrypt = require("bcrypt");
const signJWT = require('../utils/jwt').signJWT;

exports.getReg = (req, res) => {
  res.render("register");
};

exports.postReg = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username: username,
      password: hashedPassword,
      role: "user",
    });
    const jwt = signJWT(user);
    console.log(jwt.token);
     await user.save();
            //   .then((user=>{
            //     const jwt = signJWT(user);
            //     console.log(jwt.token);
            //     res.json({success:true,user,token:jwt.token})
            //   }))
            //   .catch(err=>res.send(err));

    res.redirect("/user/login");
  } catch (err) {
    res.status(401).send('err');
  }
};

exports.getLogin = (req,res) => {
    res.render('login');
};

exports.postLogin = async(req,res) => {
    const {username,password} = req.body;
    const user = await User.findOne({username:username});
    if (!user) {
        return res.status(400).send('NO user found');
    }
    const isValid = await bcrypt.compare(password,user.password);
    if (isValid) {
        const token = signJWT(user);
        return res.status(200).json({success:true,user:user,token:token,expiresIn:token.expires});
    }
    res.status(401).json({msg:'Wrong password'});
};

exports.testRoute = (req,res) => {
    res.send('test route');
};