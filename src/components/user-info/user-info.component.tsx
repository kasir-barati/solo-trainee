import { useState } from 'react';
import { Alert, View } from 'react-native';
import { DropDown } from '../../components/drop-down/drop-down.component';
import { PrimaryButton } from '../../components/primary-button/primary-button.component';
import { SecondaryButton } from '../../components/secondary-button/secondary-button.component';
import { TextInput } from '../../components/text-input/text-input';
import { useAppSelector } from '../../shared/store';
import { User } from '../../shared/types';

export function UserInfo({ onSave, onCancel }: UserInfoProps) {
    const user = useAppSelector((state) => state.user);
    const [open, setOpen] = useState(false);
    const [sex, setSex] = useState<User['sex'] | null>(
        user?.sex ?? null,
    );
    const [items, setItems] = useState([
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Non-Binary', value: 'non-binary' },
    ]);
    const [userData, setUserData] = useState<User | null>(
        user ?? null,
    );
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

        await onSave({ ...userData, sex });
    }
    function cancelHandler() {
        // FIXME: On profile screen it redirects user to home but when I navigate back to this screen it won't reinitiate this screen, userData is undefined.
        setUserData(null);
        setSex(null);
        onCancel && onCancel();
    }

    return (
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
    );
}

interface UserInfoProps {
    onCancel?: () => void;
    onSave: (user: User) => Promise<void>;
}
