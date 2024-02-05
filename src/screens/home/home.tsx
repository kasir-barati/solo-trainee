import { Text } from 'react-native';
import { Wrapper } from '../../components/wrapper/wrapper.component';
import { useAppSelector } from '../../shared/store';

export function Home() {
    const user = useAppSelector((state) => state.user);

    return (
        <Wrapper>
            <Text className="text-white">{user.name}</Text>
        </Wrapper>
    );
}
