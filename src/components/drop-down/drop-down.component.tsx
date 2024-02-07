import { ComponentProps } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export function DropDown(
    props: ComponentProps<typeof DropDownPicker>,
) {
    return (
        <DropDownPicker
            style={{
                borderColor: 'gray',
                backgroundColor: 'transparent',
            }}
            {...props}
            placeholderStyle={{ color: 'white' }}
            labelStyle={{ color: 'white' }}
            dropDownContainerStyle={{
                backgroundColor: 'gray',
            }}
        />
    );
}
