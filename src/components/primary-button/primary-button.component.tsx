import { PropsWithChildren } from 'react';
import {
    GestureResponderEvent,
    Text,
    TouchableOpacity,
} from 'react-native';

export function PrimaryButton({
    onPress,
    children,
}: PropsWithChildren<PrimaryButtonProps>) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="items-center rounded border border-white bg-blue-700 px-8 py-3"
        >
            <Text className="font-bold text-white">{children}</Text>
        </TouchableOpacity>
    );
}

interface PrimaryButtonProps {
    onPress: ((event: GestureResponderEvent) => void) | undefined;
}
