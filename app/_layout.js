import { MyStack } from "./stack";
import { useFonts } from "expo-font"

export default function RootLayout() {
    const [loaded] = useFonts({
       "Poppins-Regular": require("../Assets/Fonts/Poppins-Regular.ttf"),
        "Poppins-Bold": require("../Assets/Fonts/Poppins-Bold.ttf"),
    });

    if (!loaded) {
        return null;
    }
  
  return (
    <MyStack />
  );
}
