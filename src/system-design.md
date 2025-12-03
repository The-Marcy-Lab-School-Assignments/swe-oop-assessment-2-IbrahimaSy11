# Section 3 — System Design

Loom Link:https://www.loom.com/share/e0e813828b124bd8ab0a326a4d4b0aac
UML Diagram: https://lucid.app/lucidchart/31a8d062-a63f-490d-ba73-448092fbd9c8/edit?viewport_loc=463%2C-980%2C2267%2C1233%2C0_0&invitationId=inv_0134d8ef-ff01-4010-8f25-1094253397b1

## Notes:

Feel free to add any notes or planning here.

Based on the instructions, I need 3 classes. I know I can add more than 3 classes, but don’t think too deeply into it

1. Restaurant
   Why do you need a Restaurant class?
   The restaurant needs a way to manage the menu items customers can order from.
   This class handles adding items, removing items, and giving customers the list of items.

## Class Restaurant

- id: String
- name: String
- address: String
- menuItems: Array<MenuItemObject>

---

- addMenuItem(item)
- removeMenuItem(itemId)
- getMenuItems()

2. Customer
   Why do you need a customer class?
   A customer places orders. They also need to see their order history.
   This class is responsible for creating orders and storing them.

## Class Customer

- id: String
- name: String
- phoneNumber: String
- orders: Array<Order>

---

- placeOrder(restaurant, items)
- getOrderHistory()

3. Order
   Why do you need an order class?
   Once a customer places an order, the system must track the items, the restaurant, the customer, and the order status.
   The order also needs to update the status and calculate the total price.

## Class Order

- id: String
- customer: Customer
- restaurant: Restaurant
- items: Array<OrderItemObject>
- status: String
- createdAt: Date

---

- addItem(item)
- calculateTotal()
- updateStatus(newStatus)

UML Relationships

Customer 1 → 0.. Orders\*

Customer is 1 because it’s just one person.
Orders is 0.._ because one customer can make as many orders as they want, or none yet.
Restaurant 1 → 0.. Orders_
Restaurant is 1 because it’s one restaurant.
Orders is 0.._ because a restaurant can get a lot of orders, or sometimes no orders.
Order 1 → 1 Customer
Order is 1 because each order belongs to one customer only.
Customer is 1 because every order must be tied to exactly one customer.
Order 1 → 1 Restaurant
Order is 1 because the order must come from one restaurant.
Restaurant is 1 because an order can’t come from multiple restaurants.
Order 1 → 1.. Items_
Order is 1 because it’s one order.
Items is 1..\* because an order must have at least one item, but it can have many items.

---
