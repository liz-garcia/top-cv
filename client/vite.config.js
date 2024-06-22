import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// * Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
