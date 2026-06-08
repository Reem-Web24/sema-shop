// import React, { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import "./ProductDetails.css";
// import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer";
// import AnnouncementBar from "../../components/AnnouncementBar/AnnouncementBar";
// import { useCart } from "../../context/CartContext";

// export default function ProductDetails() {
//   const { id } = useParams(); // لجلب الـ ID الخاص بالمنتج من الرابط مستقبلاً
//   const { addToCart } = useCart();
//   const [quantity, setQuantity] = useState(1);

//   // بيانات تجريبية لمنتج فاخر (مستقبلاً سيتم جلبها ديناميكياً حسب الـ ID)
//   const product = {
//     id: id || "1",
//     name: "Sandalwood & Velvet Rose Candle",
//     price: 145,
//     image:
//       "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=600&auto=format&fit=crop", // صورة شمعة تجريبية فخمة
//     description:
//       "A harmonious sanctuary blend crafted for serene evenings. This luxury scented candle features deep notes of sustainably sourced warm sandalwood, layered delicately with the romantic whisper of crushed velvet rose petals and a touch of golden amber.",
//     details: [
//       "Burn time: Approximately 45 hours",
//       "Wax type: 100% natural soy wax for a clean, non-toxic burn",
//       "Weight: 220g",
//       "Scent Profile: Woody, Floral, Warm Amber",
//     ],
//   };

//   const handleQuantityChange = (amount) => {
//     if (quantity + amount >= 1) {
//       setQuantity(quantity + amount);
//     }
//   };

//   const handleAddToBag = () => {
//     // إضافة المنتج للسلة بالكمية المحددة
//     for (let i = 0; i < quantity; i++) {
//       addToCart(product);
//     }
//   };

//   return (
//     <div className="product-details-page">
//       <AnnouncementBar />
//       <div className="navbar-wrapper static-navbar">
//         <Navbar />
//       </div>

//       <main className="product-details-container">
//         {/* رابط بريدكرامب ناعم للعودة للمتجر */}
//         <div className="breadcrumb-nav">
//           <Link to="/shop">Shop</Link> <span>/</span>{" "}
//           <span className="current-product">{product.name}</span>
//         </div>

//         <div className="product-details-layout">
//           {/* الجانب الأيسر: صورة المنتج الفخمة */}
//           <div className="product-image-section">
//             <div className="main-image-wrapper">
//               <img src={product.image} alt={product.name} />
//             </div>
//           </div>

//           {/* الجانب الأيمن: تفاصيل المنتج وأزرار التفاعل */}
//           <div className="product-info-section">
//             <h1 className="product-title">{product.name}</h1>
//             <p className="product-price">{product.price} SAR</p>

//             <div className="product-divider"></div>

//             <p className="product-description">{product.description}</p>

//             {/* المكونات التفصيلية للشموع */}
//             <ul className="product-spec-list">
//               {product.details.map((detail, index) => (
//                 <li key={index}>✨ {detail}</li>
//               ))}
//             </ul>

//             <div className="product-divider"></div>

//             {/* التحكم بالكمية وزر الإضافة */}
//             <div className="product-actions-row">
//               <div className="detail-quantity-control">
//                 <button
//                   onClick={() => handleQuantityChange(-1)}
//                   className="detail-qty-btn"
//                 >
//                   -
//                 </button>
//                 <span className="detail-qty-number">{quantity}</span>
//                 <button
//                   onClick={() => handleQuantityChange(1)}
//                   className="detail-qty-btn"
//                 >
//                   +
//                 </button>
//               </div>

//               <button
//                 onClick={handleAddToBag}
//                 className="detail-add-to-bag-btn"
//               >
//                 ADD TO GIFT BAG
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }
