import {
    TextInput as ReactNativeTextInput,
    TextInputProps as ReactNativeTextInputProps,
} from 'react-native';

export function TextInput(props: ReactNativeTextInputProps) {
    return (
        <ReactNativeTextInput
            className="rounded border border-white bg-[#282A36] px-3 py-1 text-white"
            placeholderTextColor="white"
            {...props}
        />
    );
}
