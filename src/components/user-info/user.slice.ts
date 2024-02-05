import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../shared/types';

export const userSlice = createSlice({
    initialState: {} as User,
    name: 'user',
    reducers: {
        getUser(state) {
            return state;
        },
        setUser(state, payload: PayloadAction<User>) {
            state.age = payload.payload.age;
            state.sex = payload.payload.sex;
            state.name = payload.payload.name;
            state.weight = payload.payload.weight;
            state.height = payload.payload.height;
        },
    },
});

export const { getUser, setUser } = userSlice.actions;
