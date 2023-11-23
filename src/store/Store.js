import { configureStore } from "@reduxjs/toolkit";
import Slices from "./Slices";

const store = configureStore({ reducer: { customers: Slices } });
export default store;
