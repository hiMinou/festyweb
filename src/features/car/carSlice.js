import{createSlice}from "@reduxjs/toolkit"

const initialState = {
    cars: ["Who we are", "How we help", "News & stories"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer