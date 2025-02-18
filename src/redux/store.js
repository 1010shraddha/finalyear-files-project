import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
//import { ImportExportOutlined } from "@mui/icons-material";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        wishlist: wishlistReducer,
    },
});

export default store;