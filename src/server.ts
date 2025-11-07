import express from "express";
import cors from "cors";
import CaesarRoutes from "./routes/caesar.routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(
  cors({
    origin: ["*"],
  })
);

app.use("/", CaesarRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
