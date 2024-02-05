import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { Home } from './app/screens/home/home';
import { Register } from './app/screens/register/register.screen';
import './global.css';
import { store } from './shared/store';

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
