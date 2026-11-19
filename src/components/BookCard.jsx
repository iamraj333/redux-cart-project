
import React from "react";
import { ShoppingCart, Star, Heart } from "lucide-react";

const BookCard = ({ book, onAddToCart }) => {
  return (
    <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative h-40 overflow-hidden bg-gray-100">
        <img src={book.image} alt={book.title} className="h-full w-full object-cover transition group-hover:scale-105" />
        {book.discount && (
          <span className="absolute left-2 top-2 rounded bg-red-500 px-2 py-1 text-[10px] font-semibold text-white">
            {book.discount}% OFF
          </span>
        )}
        <button className="absolute right-2 top-2 rounded-full bg-white p-1.5 shadow hover:text-red-500">
          <Heart size={15} />
        </button>
      </div>

      <div className="p-3">
        <p className="mb-1 text-[10px] font-medium uppercase tracking-wide text-amber-700">
          {book.category}
        </p>
        <h3 className="truncate text-sm font-bold text-gray-800">
          {book.title}
        </h3>
        <p className="mt-1 truncate text-xs text-gray-500">
          by {book.author}
        </p>

        <div className="mt-2 flex items-center gap-1">
          <Star size={13} className="fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-medium text-gray-700">{book.rating}</span>
          <span className="text-[10px] text-gray-400">({book.reviews})</span>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-base font-bold text-gray-900">₹{book.price}</span>
          {book.originalPrice && (
            <span className="text-xs text-gray-400 line-through">₹{book.originalPrice}</span>
          )}
        </div>

        <button onClick={(e) => onAddToCart(e, book)} className="mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-amber-700 px-2 py-2 text-xs font-semibold text-white transition hover:bg-amber-800 active:scale-95">
          <ShoppingCart size={15} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookCard;
