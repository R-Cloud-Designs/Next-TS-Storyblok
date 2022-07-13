/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    passWithNoTests: true,
    coverage: {
      enabled: true,
      reportsDirectory: ".coverage/",
    },
  },
  envDir: ".env.development",
  logLevel: "info",
});
