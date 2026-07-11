# Data Architecture

## Creation of Table

### Activity 1: Creation of Table

- Navigate to: **System Definition > Tables**.
- Click **New** to create a new table.
- Fill in Table Information:
  - **Name:** `u_sports_hall_bookings`
  - **Label:** Sports Hall Bookings
- Click **Submit** to create the table.
  
<img width="1185" height="500" alt="Image" src="https://github.com/user-attachments/assets/cf735463-fb74-4086-8166-5581b1b4b1fc" />

---

### Activity 2: Creation of Fields

In ServiceNow, fields are created at the table level. To create a field, you first need to identify the table where the field will reside.

1. In the **Application Navigator** (left-side panel), type **Tables** in the search bar.
2. Under **System Definition**, click **Tables**. This will take you to a list of all tables in the system.

#### Select the Table to Add the Field

1. From the list of tables, search for and select the table you want to add a field to. For example, if you want to add a field to the **Sports Hall Bookings** table:
2. Type **"Sports Hall Bookings"** in the search box or scroll through the list.
3. Click on the **Sports Hall Bookings** table name. You'll now see a list of all fields (columns) associated with the **Sports Hall Bookings** table.

#### Open the Table's Columns

1. After selecting the table, you'll be brought to a view that lists all the columns (fields) that currently exist on that table.
2. To create a new field (column), go to the **Columns** tab (this is where all fields for the selected table are listed).

#### Create a New Field

1. In the **Columns** tab, click the **New** button located at the top-right corner of the page to create a new field.
2. You'll now be prompted with a form where you need to define the new field. The following fields need to be filled out:
3. Create the following fields as mentioned in the picture below.

<img width="976" height="437" alt="Image" src="https://github.com/user-attachments/assets/a5febf77-8f8c-4634-81b8-2a3b427b5f52" />

---
## 📋 Fields to be Created

Create the required fields as shown in the project specification.

Typical fields include:

| Field Label | Field Name | Type |
|-------------|------------|------|
| Sports Hall | `u_sports_hall` | Reference / Choice |
| Sport Type | `u_sport_type` | Choice |
| Booking Date | `u_booking_date` | Date |
| Start Time | `u_start_time` | Date/Time |
| End Time | `u_end_time` | Date/Time |
| User Name | `u_user` | Reference |
| Contact Number | `u_contact_number` | String |
| Email | `u_email` | Email |
| Booking Status | `u_status` | Choice |
| Booking Fee | `u_booking_fee` | Currency |
| Cancellation Charge | `u_cancellation_charge` | Currency |
| Refund Amount | `u_refund_amount` | Currency |


---

## ✅ Expected Outcome

After completing this phase:

- A custom **Sports Hall Bookings** table is created.
- All required fields are added successfully.
- The table is ready for form design, business rules, workflows, and Service Portal integration.

---

## 📌 Deliverables

- Custom Table: **Sports Hall Bookings**
- Custom Fields
- Database Structure for Booking Management
- Foundation for Subsequent Development Phases
