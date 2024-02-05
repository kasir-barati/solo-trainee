import { ComponentProps } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export function DropDown(
    props: ComponentProps<typeof DropDownPicker>,
) {
    return (
        <DropDownPicker
            theme="DARK"
            style={{ borderColor: 'white', borderRadius: 4 }}
            {...props}
            placeholderStyle={{ color: 'white' }}
        />
    );
}
