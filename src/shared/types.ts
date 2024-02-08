export interface User {
    age: number;
    name: string;
    weight: number;
    height: number;
    sex: 'male' | 'female' | 'non-binary';
}

export type RootStack = {
    Home: undefined;
    Register: undefined;
};
