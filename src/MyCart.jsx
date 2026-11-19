
import React, { useState } from "react";
import { Plus, Minus, Trash2, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, DecreaseProductQuantity, IncreaseProductQuantity, RemoveFromCart } from "./redux/cartSlice";

const MyCart = () => {
    const dispatch=useDispatch()
    const cart=useSelector(state=>state.carts)

  const increase = (id) => {
    dispatch(IncreaseProductQuantity(id))
  };

  const decrease = (id) => {
    dispatch(DecreaseProductQuantity(id))
  };

  const removeItem = (id) => {
    dispatch(RemoveFromCart(id))
  };



  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <aside className="w-full rounded-xl border bg-white p-5 shadow-sm lg:w-[30%] lg:sticky lg:top-24 lg:h-fit">
      <div className="mb-5 flex items-center justify-between pb-4">
        <div className="flex items-center gap-2">
          <ShoppingCart className="text-amber-700" size={22} />
          <h2 className="text-xl font-bold text-gray-800">My Cart</h2>
        </div>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">
          {totalItems} Items
        </span>
      </div>

      {cart.length === 0 ? (
        <div className="py-10 text-center">
          <ShoppingCart size={40} className="mx-auto mb-3 text-gray-300" />
          <h3 className="font-semibold text-gray-700">Your cart is empty</h3>
          <p className="mt-1 text-sm text-gray-500">Add some books to get started!</p>
        </div>
      ) : (
        <>
          <div className="max-h-[450px] space-y-4 overflow-y-auto">
            {cart.map(item => (
              <div key={item.id} className="flex gap-3 border-t pt-4">
                <img src={item.image} alt={item.title} className="h-20 w-16 rounded-md object-cover" />

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="truncate text-sm font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-xs text-gray-500">{item.author}</p>
                      <p className="mt-1 font-semibold text-amber-700">₹{item.price}</p>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500">
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button onClick={() => decrease(item.id)} className="rounded border p-1 hover:bg-gray-100">
                        <Minus size={13} />
                      </button>
                      <span className="text-sm font-medium">{item.quantity}</span>
                      <button onClick={() => increase(item.id)} className="rounded border p-1 hover:bg-gray-100">
                        <Plus size={13} />
                      </button>
                    </div>
                    <span className="text-sm font-bold">₹{item.price * item.quantity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-3 border-t pt-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Total Items</span>
              <span>{totalItems}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between border-t pt-3 text-lg font-bold text-gray-900">
              <span>Total</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full rounded-lg bg-amber-700 py-3 font-semibold text-white hover:bg-amber-800">
              Checkout
            </button>
            <button onClick={() => dispatch(clearCart())} className="w-full text-sm font-medium text-red-500 hover:text-red-700">
              Clear Cart
            </button>
          </div>
        </>
      )}
    </aside>
  );
};

export default MyCart;
