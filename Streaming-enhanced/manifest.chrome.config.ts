import { defineManifest } from "@crxjs/vite-plugin"
import ManifestConfig from "./manifest.config"
import packageJson from "./package.json" with { type: "json" }

const { name, displayName } = packageJson
// @ts-expect-error ManifestConfig provides all required fields
export default defineManifest((env) => ({
	...ManifestConfig,
	key: env["CHROME_ADDON_KEY"],
}))
