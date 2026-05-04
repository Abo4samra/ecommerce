"use client";

import { useCart } from "@/context/CartContext";
import { CheckCircle } from "lucide-react";

export default function Notification() {
  const { notification } = useCart();

  if (!notification) return null;

  return (
    <div className="toast-notification">
      <CheckCircle size={18} />
      {notification}
    </div>
  );
}
