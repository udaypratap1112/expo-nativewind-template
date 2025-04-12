import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      className="flex-1 justify-center px-6 bg-white"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View className="space-y-6">
        <Text className="text-3xl font-bold text-center text-gray-800">
          Login
        </Text>

        <TextInput className="border border-gray-300 rounded-xl px-4 py-3 text-base" placeholder="Email" placeholderTextColor="#999" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
        <TextInput className="border border-gray-300 rounded-xl px-4 py-3 text-base" placeholder="Password" placeholderTextColor="#999" secureTextEntry value={password} onChangeText={setPassword} />
        <TouchableOpacity
          className="bg-blue-600 py-3 rounded-xl"
          onPress={() => console.log("Login")}
        >
          <Text className="text-center text-white text-base font-semibold">
            Sign In
          </Text>
        </TouchableOpacity>

        <Text className="text-center text-sm text-gray-500">
          Don’t have an account? <Text className="text-blue-600">Register</Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}
