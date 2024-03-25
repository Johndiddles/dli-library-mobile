import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import AppProvider from "./src/providers/AppProvider";
import SplashScreen from "./src/components/splashScreen/SplashScreen";
import Navigation from "./src/infrastructure/navigation";

import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme/index";

import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_700Bold,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
    Oswald_700Bold,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  });
  const [isAppReady, setIsAppReady] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        {!isAppReady || !oswaldLoaded || !latoLoaded ? (
          <SplashScreen setIsReady={setIsAppReady} />
        ) : (
          <Navigation />
        )}
        <StatusBar style="auto" />
      </AppProvider>
    </ThemeProvider>
  );
}
