import { Add_To_Cart } from "../constant";
import { Remove_To_Cart } from "../constant";

const addToCart = (data) => {
    return {
    type:Add_To_Cart,
    data:data
    }
}

const removeToCart = (data) => {
    return {
    type:Remove_To_Cart,
    data:data
    }
}