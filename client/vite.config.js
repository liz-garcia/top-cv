import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";

// * Load environment variables from .env file
const environment = process.env.NODE_ENV;
dotenv.config({ path: `.env.${environment}` });

// * The environment should set the port
const vitePort = process.env.VITE_PORT;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/client/dist/", // Adjust this path as per your actual folder structure
  server: {
    port: vitePort,
  },
});

// TODO Remove console.log's later
console.log(
  `Vite server running in ${environment} mode on port ${vitePort} at http://localhost:${vitePort}/`
);
