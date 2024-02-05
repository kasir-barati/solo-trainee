import { PropsWithChildren } from 'react';
import { View } from 'react-native';

export function Wrapper({ children }: PropsWithChildren) {
    return (
        <View className=" flex h-full items-center justify-center">
            {children}
        </View>
    );
}
