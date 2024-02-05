import { View } from 'react-native';
import { Register } from './app/screens/register/register.screen';
import './global.css';

export default function App() {
    return (
        <View className="flex h-full items-center justify-center bg-black">
            <Register />
        </View>
    );
}
