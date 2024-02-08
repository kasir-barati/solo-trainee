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
        user?.sex ?? 'female',
    );
    const [items, setItems] = useState<
        { label: string; value: User['sex'] }[]
    >([
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Non-Binary', value: 'non-binary' },
    ]);
    const [age, setAge] = useState<number>();
    const [name, setName] = useState<string>();
    const [weight, setWeight] = useState<number>();
    const [height, setHeight] = useState<number>();
    function changeNameHandler(name: string) {
        setName(name);
    }
    function changeAgeHandler(age: string) {
        setAge(Number(age));
    }
    function changeWeightHandler(weight: string) {
        setWeight(Number(weight));
    }
    function changeHeightHandler(height: string) {
        setHeight(Number(height));
    }
    async function saveHandler() {
        if (!sex) {
            Alert.alert('Please specify your sex');
            return;
        }
        if (!age) {
            Alert.alert('Please specify your age');
            return;
        }
        if (!name) {
            Alert.alert('Please specify your name');
            return;
        }
        if (!height) {
            Alert.alert('Please specify your height');
            return;
        }
        if (!weight) {
            Alert.alert('Please specify your weight');
            return;
        }

        await onSave({ age, name, weight, height, sex });
    }
    function cancelHandler() {
        // FIXME: On profile screen it redirects user to home but when I navigate back to this screen it won't reinitiate this screen, userData is undefined.
        setSex(null);
        setAge(undefined);
        setName(undefined);
        setWeight(undefined);
        setHeight(undefined);
        onCancel && onCancel();
    }

    return (
        <View className="grid w-full gap-1 px-1">
            <TextInput
                placeholder="Name"
                keyboardType="default"
                onChangeText={changeNameHandler}
                value={name}
            />
            <TextInput
                placeholder="Age"
                keyboardType="number-pad"
                onChangeText={changeAgeHandler}
                value={age?.toString()}
            />
            <TextInput
                placeholder="Weight"
                keyboardType="number-pad"
                onChangeText={changeWeightHandler}
                value={weight?.toString()}
            />
            <TextInput
                placeholder="Height"
                keyboardType="number-pad"
                onChangeText={changeHeightHandler}
                value={height?.toString()}
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
