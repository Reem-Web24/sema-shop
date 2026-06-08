import React from "react";
import { useNavigate } from "react-router-dom";
import "./Account.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AnnouncementBar from "../../components/AnnouncementBar/AnnouncementBar";

export default function Account() {
  const navigate = useNavigate();

  // بيانات تجريبية للفرونت إند (مستقبلاً سيتم جلبها من الـ Backend)
  const user = {
    name: "Reem Hassan",
    email: "reem.hassan@example.com",
    joinedDate: "January 2026",
  };

  const orders = [
    {
      id: "95739436",
      date: "June 02, 2026",
      status: "Delivered",
      total: "250 SAR",
      items: "Luxury Candle + Velvet Rose Bouquet",
    },
    {
      id: "95738120",
      date: "May 14, 2026",
      status: "Processing",
      total: "185 SAR",
      items: "Scented Incense Set",
    },
  ];

  const handleLogout = () => {
    // منطق تسجيل الخروج مؤقتاً: يعيده لصفحة الـ Login
    navigate("/login");
  };

  return (
    <div className="account-page">
      {/* شريط الإعلانات والـ Navbar الثابتين بنفس الترتيب الفخم */}
      <AnnouncementBar />
      <div className="navbar-wrapper static-navbar">
        <Navbar />
      </div>

      <main className="account-container">
        {/* الترحيب بالعميل */}
        <div className="account-welcome-header">
          <h1>Welcome back, {user.name}</h1>
          <p>
            Manage your luxury selections and track orders in one sanctuary.
          </p>
        </div>

        <div className="account-layout">
          {/* الجانب الأيسر: تفاصيل الحساب الشخصي */}
          <aside className="account-sidebar-info">
            <div className="info-card">
              <h3>Profile Details</h3>
              <div className="info-row">
                <span className="info-label">Email:</span>
                <span className="info-value">{user.email}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Member Since:</span>
                <span className="info-value">{user.joinedDate}</span>
              </div>
              <button onClick={handleLogout} className="account-logout-btn">
                SIGN OUT
              </button>
            </div>
          </aside>

          {/* الجانب الأيمن والأكبر: سجل الطلبات */}
          <section className="account-orders-section">
            <h2>Order History</h2>
            {orders.length > 0 ? (
              <div className="orders-table-wrapper">
                <table className="orders-table">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Items</th>
                      <th>Status</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td className="order-id-cell">#{order.id}</td>
                        <td>{order.date}</td>
                        <td className="order-items-cell">{order.items}</td>
                        <td>
                          <span
                            className={`status-badge ${order.status.toLowerCase()}`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="order-total-cell">{order.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="no-orders-box">
                <p>You haven't placed any luxury orders yet.</p>
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
