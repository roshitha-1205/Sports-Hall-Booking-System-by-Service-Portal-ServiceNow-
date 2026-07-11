# Functional Requirements

## Description

This phase focuses on defining the core functional requirements of the **Sports Hall Booking System**. It outlines the features required to provide a seamless booking experience through the **ServiceNow Service Portal**, ensuring efficient reservation management, automated workflows, and accurate booking validation.

---

## 📋 Functional Requirements

### 1. Widgets and Pages Configuration

Develop and configure ServiceNow **Service Portal Widgets** and **Pages** to capture and display the following booking information:

- Sports Hall / Facility Name
- Sport Type (Badminton, Basketball, Table Tennis, etc.)
- Booking Date
- Time Slot (Start Time – End Time)
- User Contact Details

---

### 2. Booking Validation & Availability

Implement validation mechanisms to ensure accurate and conflict-free bookings.

#### Requirements

- Real-time validation of sports hall availability.
- Prevention of overlapping bookings.
- Configurable booking rules, including:
  - Maximum booking duration
  - Advance booking limits
  - Slot availability checks

---

### 3. Approval & Confirmation Workflow

Automate the booking approval process to improve efficiency and transparency.

#### Workflow Features

- Optional approval by the Sports Hall Manager.
- Automatic booking status updates:
  - Pending
  - Approved
  - Rejected
  - Cancelled
- Email notifications sent to users and administrators for every status change.

---

### 4. Payment & Refund Handling *(Future Enhancement)*

Provide automated payment and refund management for paid sports facilities.

#### Features

- Automatic booking fee calculation based on:
  - Sport type
  - Booking duration
- Cancellation charge calculation (e.g., 10% deduction).
- Automatic refund amount calculation and storage.
- Maintain payment and refund records for future reference.

---

## 🎯 Expected Outcome

At the end of this phase, the Sports Hall Booking System will have clearly defined functional requirements covering portal configuration, booking validation, approval workflows, and payment handling, providing a strong foundation for development and testing.
