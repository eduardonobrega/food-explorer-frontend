import { Routes, Route } from 'react-router-dom';

import { Dish } from '../pages/Dish';
import { New } from '../pages/New';
import { Edit } from '../pages/Edit';
import { Home } from '../pages/Home';
import { Payment } from '../pages/Payment';
import { PaymentOnly } from '../pages/PaymentOnly';
import { Favorites } from '../pages/Favorites';

export function AppRoutes() {
  const user = {
    isAdmin: false,
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/:id" element={<Dish />} />

      {!user.isAdmin && <Route path="/payment" element={<Payment />} />}
      {!user.isAdmin && <Route path="/payment-only" element={<PaymentOnly />} />}
      {!user.isAdmin && <Route path="/favorites" element={<Favorites />} />}
      {user.isAdmin && <Route path="/new" element={<New />} />}
      {user.isAdmin && <Route path="/edit/:id" element={<Edit />} />}
    </Routes>
  );
}
