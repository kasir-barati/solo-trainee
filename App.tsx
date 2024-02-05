import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import './global.css';
import { Home } from './src/screens/home/home';
import { Register } from './src/screens/register/register.screen';
import { store } from './src/shared/store';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Register">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen
                        name="Register"
                        component={Register}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
