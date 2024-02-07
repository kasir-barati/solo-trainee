import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import logo from '../../assets/logo.png';
import { Loading } from '../../components/loading/loading.component';
import { UserInfo } from '../../components/user-info/user-info.component';
import { setUser } from '../../components/user-info/user.slice';
import { Wrapper } from '../../components/wrapper/wrapper.component';
import { getData, storeData } from '../../shared/async-store';
import { useAppDispatch } from '../../shared/store';
import { User } from '../../shared/types';

export function Register() {
    const [loadingUserData, setLoadingUserData] = useState(true);
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    async function saveHandler(user: User) {
        dispatch(setUser(user));
        await storeData('user-data', user);
        navigation.navigate('Home');
    }

    useEffect(() => {
        getData('user-data')
            .then((data) => {
                if (!data) {
                    setLoadingUserData(false);
                    return;
                }

                dispatch(setUser(data as User));
                // BUG, but why?
                navigation.navigate('Home');
            })
            .catch(
                console.error.bind(
                    'An error occurred while getting data',
                ),
            );
    }, [loadingUserData]);

    if (loadingUserData) {
        return <Loading />;
    }

    return (
        <Wrapper>
            <Image
                source={logo}
                className="mb-4 scale-75 rounded-full bg-white"
            />
            <UserInfo onSave={saveHandler} />
        </Wrapper>
    );
}
