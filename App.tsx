import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import './global.css';

export default function App() {
    return (
        <View className="flex h-full items-center justify-center bg-white">
            <Text className="text-red-500">Hello world!</Text>
            <StatusBar style="auto" />
        </View>
    );
}
