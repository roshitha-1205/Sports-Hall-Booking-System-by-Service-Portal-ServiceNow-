
## Navigation – Sports Hall Booking System Workflow

### Step 1: Open Service Portal

- Log in to your **ServiceNow Personal Developer Instance (PDI)**.
- Open the **Sports Zone Service Portal**.

---

### Step 2: User Authentication

- Log in using valid ServiceNow credentials.
- The system authenticates the user before granting access.

---

### Step 3: Browse Available Sports Halls

- Browse the list of available sports halls.
- View available booking dates and time slots in real time.

---

### Step 4: Select Hall, Date, and Time Slot

Select the required booking details:

- Sports Hall
- Booking Date
- Start Time
- End Time

Click the **Proceed** button.

---

### Step 5: Enter Booking Details

Complete the booking form by providing:

- Name
- Contact Number
- Email Address
- Purpose of Booking

Review all entered details before submission.

---

### Step 6: Submit Booking Request

- Click the **Submit** button.
- The booking request is sent to the ServiceNow backend for processing.

---

### Step 7: System Checks Availability

The system automatically:

- Checks the selected sports hall and time slot.
- Verifies that no conflicting booking already exists.

---

### Step 8: Availability Decision

#### If the slot is available:

- The booking process continues.

#### If the slot is unavailable:

- The system displays a **"Slot Unavailable"** message.
- The user is prompted to choose another available time slot.

---

### Step 9: Create Booking Record

- A new booking record is created in the **Sports Hall Bookings** table.
- The booking is assigned an initial status such as **Pending Approval**.

---

### Step 10: Trigger ServiceNow Workflow

The system automatically:

- Starts the Flow Designer workflow.
- Executes Business Rules and automated processes.

---

### Step 11: Approval Process

The system checks whether manager approval is required.

#### If approval is required:

- The Sports Hall Manager reviews the booking request.
- The manager either **Approves** or **Rejects** the booking.

#### If approval is not required:

- The booking is automatically approved.

---

### Step 12: Send Notification

The system sends an email notification to the user containing:

- Booking ID
- Sports Hall Name
- Booking Date
- Time Slot
- Booking Status (Approved/Rejected)

---

### Step 13: Online Payment *(Optional)*

If the selected sports hall requires payment:

- The user completes the online payment.
- The payment status is recorded.

If payment is not applicable, this step is skipped.

---

### Step 14: Update Booking Status

The system automatically:

- Updates the booking status.
- Marks the reserved time slot as unavailable.
- Updates the booking calendar.

---

### Step 15: Store Booking Data

The final booking details are securely stored in the database for:

- Booking History
- Reports
- Analytics
- Facility Utilization Monitoring
- Future Reference

---

### Step 16: End Process

- The booking process is completed successfully.
- The user can view the confirmed booking through the **Sports Zone Service Portal Dashboard**.
- A confirmation email containing the venue and booking details is sent to the registered email address.

---

## Expected Outcome

- User successfully accesses the Sports Zone Service Portal.
- Sports hall booking is completed successfully.
- Slot availability is validated automatically.
- Approval workflow is executed.
- Payment (if applicable) is completed securely.
- Booking status is updated automatically.
- Confirmation email is sent to the user.
- Booking information is securely stored for future reference.
