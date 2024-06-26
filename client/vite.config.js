import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// * Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Default is '' because on our heroku servers
  // we want to have it default to our current URL
  define: {
    // "import.meta.env.VITE_BASE_SERVER_URL": JSON.stringify(""),
    "import.meta.env.VITE_BASE_SERVER_URL": JSON.stringify(
      process.env.UI_BASE_URL || ""
    ),
  },
});
