
import React, { useState } from "react";
import BookCard from "./components/BookCard";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./redux/cartSlice";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Development",
    price: 399,
    originalPrice: 599,
    discount: 33,
    rating: 4.8,
    reviews: 1250,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
  },
  {
    id: 2,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Finance",
    price: 299,
    originalPrice: 449,
    discount: 33,
    rating: 4.7,
    reviews: 980,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    category: "Business",
    price: 349,
    originalPrice: 499,
    discount: 30,
    rating: 4.6,
    reviews: 850,
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=500",
  },
  {
    id: 4,
    title: "Deep Work",
    author: "Cal Newport",
    category: "Productivity",
    price: 279,
    originalPrice: 399,
    discount: 30,
    rating: 4.5,
    reviews: 720,
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500",
  },
];

const Product = () => {
  const dispatch=useDispatch()
  const handleAddToCart = (e,book) => {
    e.preventDefault()
    dispatch(addToCart(book))
  };

  const carts=useSelector(state=>state.carts)
  const cartCount = carts.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Our Books</h2>
          <p className="mt-2 text-gray-500">
            Discover your next favorite book.
          </p>
        </div>
        <div className="rounded-lg bg-amber-50 px-4 py-2 font-semibold text-amber-800">
          Cart ({cartCount})
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onAddToCart={(e)=>handleAddToCart(e,book)}
          />
        ))}
      </div>
    </section>
  );
};

export default Product;
