import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert, Image, View } from 'react-native';
import logo from '../../../assets/logo.png';
import { DropDown } from '../../../components/drop-down/drop-down.component';
import { Loading } from '../../../components/loading/loading.component';
import { PrimaryButton } from '../../../components/primary-button/primary-button.component';
import { SecondaryButton } from '../../../components/secondary-button/secondary-button.component';
import { TextInput } from '../../../components/text-input/text-input';
import { getData, storeData } from '../../../shared/async-store';
import { useAppDispatch } from '../../../shared/store';
import { User } from '../../../shared/types';
import { setUser } from './register.slice';

export function Register() {
    const [loadingUserData, setLoadingUserData] = useState(true);
    const [open, setOpen] = useState(false);
    const [sex, setSex] = useState(null);
    const [items, setItems] = useState([
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Non-Binary', value: 'non-binary' },
    ]);
    const [userData, setUserData] = useState<User>();
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    function changeUserName(name: string) {
        setUserData({
            ...userData!,
            name,
        });
    }
    function changeUserAge(age: string) {
        setUserData({
            ...userData!,
            age: Number(age),
        });
    }
    function changeUserWeight(weight: string) {
        setUserData({
            ...userData!,
            weight: Number(weight),
        });
    }
    function changeUserHeight(height: string) {
        setUserData({
            ...userData!,
            height: Number(height),
        });
    }
    async function saveHandler() {
        if (!sex) {
            Alert.alert('Please specify your sex');
            return;
        }
        if (!userData?.age) {
            Alert.alert('Please specify your age');
            return;
        }
        if (!userData?.name) {
            Alert.alert('Please specify your name');
            return;
        }
        if (!userData?.height) {
            Alert.alert('Please specify your height');
            return;
        }
        if (!userData?.weight) {
            Alert.alert('Please specify your weight');
            return;
        }

        const user: User = {
            ...userData,
            sex,
        };
        dispatch(setUser(user));
        await storeData('user-data', user);
        navigation.navigate('Home');
    }
    function cancelHandler() {
        setUserData(undefined);
        setSex(null);
    }

    useEffect(() => {
        getData('user-data').then((data) => {
            if (!data) {
                setLoadingUserData(false);
                return;
            }

            dispatch(setUser(data as User));
            navigation.navigate('Home');
        });
    }, [loadingUserData]);

    if (loadingUserData) {
        return <Loading />;
    }

    return (
        <View className="flex h-full items-center justify-center bg-black">
            <Image
                source={logo}
                className="mb-4 scale-75 rounded-full bg-white"
            />
            <View className="grid w-full gap-1 px-1">
                <TextInput
                    placeholder="Name"
                    keyboardType="default"
                    onChangeText={changeUserName}
                    value={userData?.name}
                />
                <TextInput
                    placeholder="Age"
                    keyboardType="number-pad"
                    onChangeText={changeUserAge}
                    value={
                        userData?.age !== undefined
                            ? String(userData.age)
                            : undefined
                    }
                />
                <TextInput
                    placeholder="Weight"
                    keyboardType="number-pad"
                    onChangeText={changeUserWeight}
                    value={
                        userData?.weight !== undefined
                            ? String(userData.weight)
                            : undefined
                    }
                />
                <TextInput
                    placeholder="Height"
                    keyboardType="number-pad"
                    onChangeText={changeUserHeight}
                    value={
                        userData?.height !== undefined
                            ? String(userData.height)
                            : undefined
                    }
                />
                <DropDown
                    open={open}
                    value={sex}
                    items={items}
                    setOpen={setOpen}
                    setValue={setSex}
                    setItems={setItems}
                    placeholder="Specify your sex"
                />
                <View className="flex flex-row gap-1">
                    <PrimaryButton onPress={saveHandler}>
                        Save
                    </PrimaryButton>
                    <SecondaryButton onPress={cancelHandler}>
                        Cancel
                    </SecondaryButton>
                </View>
            </View>
        </View>
    );
}
