import { Text, View } from 'react-native';
import { useAppSelector } from '../../shared/store';

export function Home() {
    const user = useAppSelector((state) => state.user);

    return (
        <View>
            <Text>{user.name}</Text>
        </View>
    );
}
