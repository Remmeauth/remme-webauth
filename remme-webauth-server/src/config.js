import { config } from "dotenv";
config();

export const nodeAddress = process.env.NODE_ADDRESS || "localhost";
