# Geek-Bazaar Routes

## Site Header:

### if a user is logged out:
HTTP method | URI path | Description
--- | --- | ---
GET | `/login` | login
GET | `/register` | register
GET | `/search` | search bar
GET | `/inventories/:id` | detail of an inventory

### if a user is logged in:
HTTP method | URI path | Description 
--- | --- | ---
GET | `/inventories` | Link to My Inventory
GET | `/search`  | search
GET | `/users/:id/profile` | user profile
GET | `/order` | user orders
GET | `/cart` | user cart
POST | `/logout` | logout

## Routes 

### if a user is logged in:
HTTP method | URI path | Description 
--- | --- | ---
POST | `/inventories` | Create a new inventory 
GET | `/inventories` | Retrieve all inventory 
PUT | `/inventories/:id` | Update an inventory
DELETE | `/inventories/:id` | Delete an inventory
GET | `/cart` | Retrieve all cart items
POST | `/cart` | Add a new item into cart
DELETE | `/cart/:id` | Delete an item from cart
POST | `/cart/checkout` | Add a new order to orders table
GET | `/orders` | Retrieve all orders
PUT | `/orders/:id/status` | Update order status
GET | `/sales` | Retrieve all sales
GET | `/users/:id/profile` | Retrieve all user profile
PUT | `/users/:id/profile` | update user profile




