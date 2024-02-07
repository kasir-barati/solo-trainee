import {
    TextInput as ReactNativeTextInput,
    TextInputProps as ReactNativeTextInputProps,
} from 'react-native';

export function TextInput(props: ReactNativeTextInputProps) {
    return (
        <ReactNativeTextInput
            className="border border-gray-500 bg-transparent px-3 py-1 text-white"
            placeholderTextColor="white"
            {...props}
        />
    );
}
