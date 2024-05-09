import { StatusBar } from "expo-status-bar";
import AuthNavigation from "./src/navigations/AuthNavigation";
import { Provider } from "react-redux";
import { store } from "./src/config/store";
import { PaperProvider } from "react-native-paper";
import { MD3LightTheme as DefaultTheme } from "react-native-paper";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { useCallback } from "react";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "black",
    secondary: "yellow",
  },
};

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Manrope: require("./assets/fonts/Manrope-Medium.ttf"), // used
    ManropeBold: require("./assets/fonts/Manrope-Bold.ttf"), // unused
    Inter: require("./assets/fonts/Inter-Medium.ttf"), // used
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Provider store={store} onLayout={onLayoutRootView}>
      <PaperProvider theme={theme}>
        <AuthNavigation />
        <StatusBar hidden />
      </PaperProvider>
    </Provider>
  );
}

//eas build -p android --profile preview
// eas build -p android --profile preview
//aititle
//aititle2024
