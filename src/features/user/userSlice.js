import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//https://reqres.in/api/users
const initialState = {
    users: [],
    currentUser: {},
    loading: true,
    error: null
}
export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (_, { rejectWithValue, dispatch }) => {
        const resultUsers = await axios.get('https://reqres.in/api/users')
        dispatch(setUsers(resultUsers.data.data))

    }
)
export const getUser = createAsyncThunk(
    'users/getUser',
    async (id, { rejectWithValue, dispatch }) => {
        const resultUser = await axios.get(`https://reqres.in/api/users/${id}`)
        dispatch(setUser(resultUser.data.data))

    }
)
export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        },
        setUser: (state, action) => {
            state.currentUser = action.payload
        },
        resetCurrentUser: (state, action) => {
            state.currentUser = {}
        },
        deleteUser: (state, action) => {
            const deleteUser = state.currentUser
            state.users = state.users.filter(user => user.id !== deleteUser.id)

        }
    },
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.loading = true
            state.error = null
        },
        [getUsers.fulfilled]: (state, action) => {
            state.loading = false
            state.error = null
        },
        [getUsers.rejected]: (state, action) => {
            state.error = true
        },
        [getUser.pending]: (state, action) => {
            state.loading = true
            state.error = null
        },
        [getUser.fulfilled]: (state, action) => {
            state.loading = false
            state.error = null
        },
        [getUser.rejected]: (state, action) => {
            state.error = true
        },
    }
})
export const { setUsers, setUser, resetCurrentUser, addFavoritesUsers, deleteUser } = userSlice.actions
export default userSlice.reducer