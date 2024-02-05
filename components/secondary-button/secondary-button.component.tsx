import { PropsWithChildren } from 'react';
import {
    GestureResponderEvent,
    Text,
    TouchableOpacity,
} from 'react-native';

export function SecondaryButton({
    children,
    onPress,
}: PropsWithChildren<SecondaryButtonProps>) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="flex items-center rounded border border-white bg-transparent px-8 py-3"
        >
            <Text className="font-bold text-white">{children}</Text>
        </TouchableOpacity>
    );
}

interface SecondaryButtonProps {
    onPress: ((event: GestureResponderEvent) => void) | undefined;
}
