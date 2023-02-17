const response = {
  settings: {
    nullValue: null,
    height: 400,
    animationDuration: 0,
    headerText: '',
    showSplashScreen: false
  }
}

const undefinedValue = response.settings.undefinedValue ?? 'default value'
const nullValue = response.settings.nullValue ?? 'default value'
const animationDuration = response.settings.animationDuration ?? 'default duration'
const headerText = response.settings.headerText ?? 'default text'
const showSplashScreen = response.settings.showSplashScreen ?? 'default value'

console.log(
  undefinedValue + ',', nullValue + ',', animationDuration + ',', headerText + ',', showSplashScreen
)