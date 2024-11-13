import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
//import { ImportExportOutlined } from "@mui/icons-material";

const store = configureStore({
    reducer: {
        cart: cartSlice,
    },
});

export default store;