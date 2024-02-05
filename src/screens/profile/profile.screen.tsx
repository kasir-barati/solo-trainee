import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import { UserInfo } from '../../components/user-info/user-info.component';
import { setUser } from '../../components/user-info/user.slice';
import { Wrapper } from '../../components/wrapper/wrapper.component';
import { storeData } from '../../shared/async-store';
import { useAppDispatch } from '../../shared/store';
import { User } from '../../shared/types';

export function Profile() {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    async function saveHandler(user: User) {
        dispatch(setUser(user));
        await storeData('user-data', user);
        navigation.navigate('Home');
    }
    function cancelHandler() {
        navigation.navigate('Home');
    }

    return (
        <Wrapper>
            <Text className="h-16 w-full text-left font-extrabold text-white">
                Edit Profile
            </Text>
            <UserInfo onSave={saveHandler} onCancel={cancelHandler} />
        </Wrapper>
    );
}
