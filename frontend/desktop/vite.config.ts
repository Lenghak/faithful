import { type UserConfig, defineConfig } from "vite";
import solid from "vite-plugin-solid";

const host = (
  globalThis as unknown as { process: { env: Record<string, string> } }
).process.env.TAURI_DEV_HOST;

// https://vite.dev/config/
export default defineConfig(() => {
  const serverConfig: UserConfig["server"] = {
    host: host || false,
    port: 1420,
    strictPort: true,
    watch: {
      ignored: ["**/src-tauri/**"],
    },
  };

  if (host) {
    serverConfig.hmr = {
      host,
      port: 1421,
      protocol: "ws",
    };
  }

  return {
    clearScreen: false,
    plugins: [solid()],
    server: serverConfig,
  };
});
