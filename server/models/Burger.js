import mongoose from "mongoose"
const Schema = mongoose.Schema


export const Burger = new Schema(
  {
    name: 'Cheese Burger',
    description: 'Single patty, with regular buns, and cheese.',
    price: 6
  }
)