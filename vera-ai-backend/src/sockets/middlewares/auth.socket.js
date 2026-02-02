const JWT = require("jsonwebtoken");
const userModel = require("../../models/user.model");
const cookie = require("cookie");

// Middleware to authenticate socket connections
const authenticateSocket = async (socket, next) => {
  const cookies = cookie.parse(socket.handshake.headers?.cookie || "");

  if (!cookies.token) {
    next(new Error("Authentication error: No token provided"));
  }

  try {
    const decoded = JWT.verify(cookies.token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id);
    socket.user = user;
    next();
  } catch (error) {
    next(new Error("Authentication error: Invalid token provided"));
  }
};

module.exports = authenticateSocket;
