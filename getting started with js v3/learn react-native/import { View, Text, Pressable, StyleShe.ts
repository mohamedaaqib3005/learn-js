import { View, Text, Pressable, StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";

export default function LoginScreen() {

  const authUrl =
    "https://guava-3a7j.onrender.com/api/login?redirect_url=stride://redirect";

  const login = async () => {
    try {
      await WebBrowser.openAuthSessionAsync(
        authUrl,
        "stride://redirect"
      );
    } catch (err) {
      console.log("Login error:", err);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Please login before starting your workout</Text>

      <Pressable onPress={login} style={styles.loginButtons}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtons: {
    backgroundColor: "#06b2cc",
    marginTop: 400,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "white"
  }
})


//store authorization header and read JWT

