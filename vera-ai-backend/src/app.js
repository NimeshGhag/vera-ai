const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

// importing routes
const authRoutes = require("./routes/auth.routes");
const chatRoutes = require("./routes/chat.routes");

// creating a server
const app = express();

// Middlwares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(
  express.static(path.join(__dirname, "..", "..", "vera-ai-frontend", "dist")),
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);

app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "vera-ai-frontend", "dist", "index.html"),
  );
});

module.exports = app;
