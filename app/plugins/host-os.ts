const getNavigator = (): 'windows' | 'macos' | 'linux' => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userAgentData = (navigator as any)?.userAgentData
  if (userAgentData?.platform) {
    const platform = userAgentData.platform.toLowerCase()
    if (platform.startsWith('win')) return 'windows'
    if (platform.startsWith('mac')) return 'macos'
    if (platform.startsWith('linux')) return 'linux'
  }

  const platform = navigator?.platform?.toLowerCase()
  if (platform) {
    if (platform.startsWith('win')) return 'windows'
    if (platform.startsWith('mac')) return 'macos'
    if (platform.startsWith('linux')) return 'linux'
  }

  return 'linux' // default
}

export default defineNuxtPlugin({
  enforce: 'pre',
  async setup() {
    return {
      provide: {
        os: getNavigator()
      }
    }
  }
})
