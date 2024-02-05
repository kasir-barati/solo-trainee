import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import './global.css';
import { Home } from './src/screens/home/home';
import { Profile } from './src/screens/profile/profile.screen';
import { Register } from './src/screens/register/register.screen';
import { getData } from './src/shared/async-store';
import { store } from './src/shared/store';

const Drawer = createDrawerNavigator();

export default function App() {
    const [isUserRegistered, setIsRegistered] = useState(false);

    useEffect(() => {
        getData('user-data').then((user) => setIsRegistered(!!user));
    }, [isUserRegistered]);

    return (
        <Provider store={store}>
            {/* TODO: Improve drawer theme */}
            <NavigationContainer
                theme={{
                    dark: true,
                    colors: {
                        background: 'black',
                        border: 'white',
                        card: 'white',
                        notification: 'black',
                        primary: 'black',
                        text: 'black',
                    },
                }}
            >
                <Drawer.Navigator initialRouteName="Register">
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen
                        name="Profile"
                        component={Profile}
                    />
                    <Drawer.Screen
                        name="Register"
                        component={Register}
                        options={{
                            drawerItemStyle: {
                                display: isUserRegistered
                                    ? 'none'
                                    : 'flex',
                            },
                        }}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
