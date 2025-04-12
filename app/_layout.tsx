import { Stack } from "expo-router";
import '../global.css'

export default function RootLayout() {
  return <Stack
  screenOptions={{
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}
  
>

    <Stack.Screen name="index" options={{ title: 'Welcome',headerShown:false }} />
    <Stack.Screen name="auth" options={{ title: 'Login' ,headerShown:false}} />
    {/* <Stack.Screen name="register" options={{ title: 'Register' }} />
    <Stack.Screen name="forgot-password" options={{ title: 'Forgot Password' }} /> */}
</Stack>;
}
