import React, { createContext, useState, useContext, useEffect } from "react"; // 🌟 أضفنا useEffect هنا

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("semaCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 🌟 States الجديدة الخاصة بنافذة التنبيه المنبثقة 🌟
  const [showToast, setShowToast] = useState(false);
  const [lastAddedProduct, setLastAddedProduct] = useState(null);

  // 🌟 الـ لمسة السحرية الأخيرة: حفظ التغييرات تلقائياً في ذاكرة المتصفح 🌟
  useEffect(() => {
    localStorage.setItem("semaCart", JSON.stringify(cartItems));
  }, [cartItems]); // يشتغل التحديث فوراً كلما زادت المنتجات، نقصت، أو تعدلت الكميات

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const isExist = prevItems.find((item) => item.id === product.id);

      if (isExist) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });

    // 🌟 تشغيل التنبيه وحفظ المنتج المضاف حالياً 🌟
    setLastAddedProduct(product);
    setShowToast(true);

    // إخفاء التنبيه تلقائياً بعد 3.5 ثوانٍ
    setTimeout(() => {
      setShowToast(false);
    }, 3500);
  };

  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + amount;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      }),
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalItemsCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeItem,
        totalItemsCount,
        subtotal,
        // 🌟 تمرير قيم التنبيه الجديدة هنا 🌟
        showToast,
        setShowToast,
        lastAddedProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
