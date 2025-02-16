const { data: settings, promise } = useBrowserSyncStorage<settingsType>("settings", defaultSettings)
export const useOptionsStore = defineStore("options", () => {
	return {
		settings,
	}
})
export const SettingsPromise = promise
export const useFrontendStore = defineStore("frontend", () => {
	const { isDark, toggleDark } = useTheme()
	const currentLocale = useLocale()
	return {
		isDark,
		toggleDark,
		currentLocale,
	}
})
