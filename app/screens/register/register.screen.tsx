import { useState } from 'react';
import { Image, View } from 'react-native';
import logo from '../../../assets/logo.png';
import { DropDown } from '../../../components/drop-down/drop-down.component';
import { PrimaryButton } from '../../../components/primary-button/primary-button.component';
import { SecondaryButton } from '../../../components/secondary-button/secondary-button.component';
import { TextInput } from '../../../components/text-input/text-input';

export function Register() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Non-Binary', value: 'non-binary' },
    ]);

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
                />
                <TextInput
                    placeholder="Age"
                    keyboardType="number-pad"
                />
                <TextInput
                    placeholder="Weight"
                    keyboardType="number-pad"
                />
                <TextInput
                    placeholder="Height"
                    keyboardType="number-pad"
                />
                <DropDown
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
                <View className="flex flex-row gap-1">
                    <PrimaryButton onPress={() => {}}>
                        Save
                    </PrimaryButton>
                    <SecondaryButton onPress={() => {}}>
                        Cancel
                    </SecondaryButton>
                </View>
            </View>
        </View>
    );
}
