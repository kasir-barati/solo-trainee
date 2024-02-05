import { Text, View } from 'react-native';

export function Loading() {
    return (
        <View className="flex h-full items-center justify-center bg-black">
            <Text className="h1 text-red-500">Loading...</Text>
        </View>
    );
}
