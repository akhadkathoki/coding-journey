# 🛍️ Nxt Trendz — E-Commerce Platform

A modern and responsive e-commerce web application built with **React.js**, featuring authentication, product discovery, filtering, product details, shopping cart management, and protected routes.

## 🚀 Live Preview

🔗 **[View Live Website](https://trendsak1.ccbp.tech/login)**

### Demo Credentials

**Username:** `rahul`  
**Password:** `rahul@2021`

---

## ✨ Features

### 🔐 Authentication
- User login with username and password
- JWT-based authentication
- Protected routes for authenticated users
- Persistent login session using JWT token
- Logout functionality

### 🏠 Home Section
- Attractive e-commerce landing page
- Featured products and promotional content
- Navigation to product categories and shopping sections
- Responsive layout for different screen sizes

### 🛍️ Products Section
- Browse a collection of products
- Product listing with product images, names, ratings, and prices
- Search products by name
- Filter products by category
- Filter products by rating
- Sort products based on price
- Responsive product grid

### 📦 Product Details
- Detailed product information
- Product image and description
- Product rating and price
- Availability information
- Quantity selection
- Add products to cart
- Navigation between products and shopping sections

### 🛒 Shopping Cart
- Add products to the shopping cart
- Increase or decrease product quantity
- Remove products from the cart
- Automatically calculate total cart price
- Display total number of items
- Empty cart state
- Continue shopping functionality

### 🚪 Logout
- Securely log out the authenticated user
- Clear authentication token
- Redirect the user to the login page
- Prevent access to protected pages after logout

---

## 🧩 Application Flow

```text
                    ┌──────────────┐
                    │    Login     │
                    └──────┬───────┘
                           │
                     JWT Authentication
                           │
                           ▼
                    ┌──────────────┐
                    │     Home     │
                    └──────┬───────┘
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
         Products      Product       Cart
                       Details
              │            │            │
              └────────────┼────────────┘
                           ▼
                        Logout
                           │
                           ▼
                     Login Page
