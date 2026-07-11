
## Creation & Implementation of Business Rules on Sports Hall Bookings Table

Business Rules were implemented on the **Sports Hall Bookings** table to automate the calculation of cancellation charges and refund amounts. When a booking is cancelled, the system automatically calculates a **10% cancellation charge** and stores the remaining refundable balance in the appropriate field.

---

### Activity 1: Navigation of Business Rules

- Navigate to the **All** menu.
- Type **Business Rules** in the search bar.
- Under **System Definition**, select **Business Rules**.
- Click the **New** button to create a new Business Rule.

---

### Activity 2: Configure the Business Rule

- Select the **Sports Hall Bookings** (`u_sports_hall_bookings`) table.
- Configure the Business Rule properties according to the project requirements.
- Define the appropriate trigger (Before/After Update) based on the business logic.
- Write the server-side script to:
  - Detect when a booking status changes to **Cancelled**.
  - Calculate **10% cancellation charges**.
  - Calculate the remaining refundable amount.
  - Store both values in their respective fields.
- Save and submit the Business Rule.

<img width="1172" height="537" alt="Image" src="https://github.com/user-attachments/assets/931c13ec-3103-4a49-a806-cfed01aab4d7" />

---

## Business Logic

- Trigger the Business Rule when a booking is cancelled.
- Calculate **10%** of the booking fee as the cancellation charge.
- Deduct the cancellation charge from the total booking amount.
- Store the cancellation charge in the **Cancellation Charge** field.
- Store the remaining amount in the **Refund Amount** field.
- Update the booking record automatically.
