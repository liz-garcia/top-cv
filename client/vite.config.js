import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import removeConsole from "vite-plugin-remove-console";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Vite configuration
export default defineConfig({
  plugins: [
    react(),
    removeConsole({
      // Apply to all JavaScript/TypeScript files
      include: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    }),
  ],
});
