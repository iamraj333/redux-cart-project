
import React, { useState } from "react";
import { BookOpen, ShoppingCart, Search, Menu, X } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
    const carts=useSelector(state=>state.carts)
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = carts.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2">
          <BookOpen size={30} className="text-amber-700" />
          <span className="text-2xl font-bold text-amber-900">BookNest</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="/" className="text-gray-700 hover:text-amber-700">Home</a>
          <a href="/books" className="text-gray-700 hover:text-amber-700">Books</a>
          <a href="/categories" className="text-gray-700 hover:text-amber-700">Categories</a>
          <a href="/about" className="text-gray-700 hover:text-amber-700">About</a>
        </div>

        <div className="hidden items-center gap-2 rounded-full bg-gray-100 px-4 py-2 lg:flex">
          <Search size={18} className="text-gray-500" />
          <input type="text" placeholder="Search books..." className="w-36 bg-transparent text-sm outline-none" />
        </div>

        <button className="relative rounded-full p-2 text-gray-700 transition hover:bg-amber-50 hover:text-amber-700" aria-label={`Shopping cart with ${cartCount} items`}>
          <ShoppingCart size={25} />
          {cartCount >=0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-600 px-1 text-xs font-bold text-white">{cartCount}</span>}
        </button>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-4 border-t bg-white px-6 py-5 md:hidden">
          <a href="/" className="hover:text-amber-700">Home</a>
          <a href="/books" className="hover:text-amber-700">Books</a>
          <a href="/categories" className="hover:text-amber-700">Categories</a>
          <a href="/about" className="hover:text-amber-700">About</a>
          <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2">
            <Search size={18} />
            <input type="text" placeholder="Search books..." className="w-full bg-transparent outline-none" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
