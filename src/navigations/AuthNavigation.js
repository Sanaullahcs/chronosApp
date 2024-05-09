import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Auth/Login/Login";
import Navigation from "./Navigation";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const [Token, setToken] = useState("");
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("userToken");
        console.log(storedToken, "storedToken");
        setToken(storedToken);

        if (storedToken && storedToken !== token) {
          dispatch(login({ token: storedToken }));
        }
      } catch (error) {
        console.error("Error fetching token from AsyncStorage:", error);
      }
    };

    checkToken();
  }, [token]);

  useEffect(() => {
    setToken(token);
  }, [token]);

  console.log(token, "token");
  console.log(Token, "Token");
  return <>{Token ? <Navigation /> : <AuthNavigation />}</>;
};

export default App;
