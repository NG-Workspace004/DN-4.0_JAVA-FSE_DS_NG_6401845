import React from "react";

export default function UserGreeting() {
  return (
    <div>
      <h2>Welcome Back!</h2>
      <p>You can now book your tickets below:</p>
      <ul>
        <li>
          Flight 101 - Delhi to Mumbai - ₹5000{" "}
          <button>Book Now</button>
        </li>
        <li>
          Flight 202 - Chennai to Bangalore - ₹3000{" "}
          <button>Book Now</button>
        </li>
        <li>
          Flight 303 - Kolkata to Hyderabad - ₹4500{" "}
          <button>Book Now</button>
        </li>
      </ul>
    </div>
  );
}
