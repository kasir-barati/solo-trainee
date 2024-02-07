import AsyncStorage from '@react-native-async-storage/async-storage';

export function storeData(key: Key, value: any) {
    const jsonValue = JSON.stringify(value);

    return AsyncStorage.setItem(key, jsonValue);
}

export async function getData<T>(key: Key): Promise<T | undefined> {
    const data = await AsyncStorage.getItem(key);

    if (!data) {
        return undefined;
    }

    return JSON.parse(data);
}

export function deleteData(key: Key) {
    return AsyncStorage.removeItem(key);
}

type Key = 'user-data';
