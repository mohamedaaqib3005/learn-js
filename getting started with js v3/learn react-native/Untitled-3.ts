// auth header 
import { useEffect } from "react";
import { View, Text } from "react-native";
import * as SecureStore from "expo-secure-store";



function RedirectScreen() {
  useEffect(() => {
    const getTokenFromBackend = async () => {
      try {
        // fetch the response
        const res = await fetch("https://guava-3a7j.onrender.com/api/login?redirect_url=stride://redirect", {
          headers: {
            // Authorization: `Bearer ${token}`,
          },
        });

        console.log("response", res);
        const authHeader = res.headers.get("Authorization") || res.headers.get("authorization");//take care of case

        console.log("authHeader", authHeader);

        if (!authHeader) {
          console.log("No Authorization header ");
          return;
        }

        // remove bearer and store the rest
        const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : authHeader;

        console.log("token", token);

        const savedToken = await SecureStore.setItemAsync("TOKEN_KEY", token);

        console.log("Token stored ", savedToken);

      }
      catch (error) {
        console.log("error:", error)
      }
    }
    getTokenFromBackend()
  }, [])
  return (
    <View>
      <Text>Processing login...</Text>
    </View>
  );
}

export default RedirectScreen;  