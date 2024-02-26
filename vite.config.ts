import { vitePlugin as remix } from "@remix-run/dev"
import { defineConfig } from "vite"
import { installGlobals } from "@remix-run/node"

installGlobals()

export default defineConfig({
  plugins: [
    remix({
      //   ignoredRouteFiles: ["**/*.css"],
    }),
  ],
})
