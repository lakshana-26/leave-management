const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

app.use(express.json());
const leaveRoutes = require("./routes/leaveRoutes");

app.use("/api", leaveRoutes);

connectDB();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});