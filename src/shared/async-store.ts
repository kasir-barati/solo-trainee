import AsyncStorage from '@react-native-async-storage/async-storage';

export function storeData(key: string, value: any) {
    const jsonValue = JSON.stringify(value);

    return AsyncStorage.setItem(key, jsonValue);
}

export async function getData<T>(
    key: string,
): Promise<T | undefined> {
    const data = await AsyncStorage.getItem(key);

    if (!data) {
        return undefined;
    }

    return JSON.parse(data);
}
