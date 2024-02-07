import { TextProps } from 'react-native';

export function Text({ className, ...props }: TextProps) {
    return <Text className={`text-white ${className}`} {...props} />;
}
