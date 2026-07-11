## Data Handling

In this phase, **Email Notifications**, **Events**, and **Email Scripts** are configured to automatically generate and send booking confirmation and reminder emails to users. The notification system is triggered through scheduled jobs using ServiceNow Events, ensuring timely communication with users regarding their sports hall bookings.

---

## Activity 1: Configure Events

1. Navigate to the **Application Navigator**.
2. Click on **All**.
3. Search for **Event Registry**.
4. Under **System Notification**, select **Events**.
5. Click **New**.
6. Fill in the event details:

| Field | Value |
|--------|-------|
| **Name** | `sports.hall.reminder` |
| **Table** | `u_sports_hall_bookings` |
| **Fired By** | Scheduled Jobs |
| **Description** | Event triggered when a Scheduled Job runs |

7. Click **Submit** or **Save**.

<img width="1352" height="632" alt="Image" src="https://github.com/user-attachments/assets/132658e4-d2b2-4099-a905-47b3823be31a" />

---

## Activity 2: Configure Email Notifications

1. Navigate to the **Application Navigator**.
2. Click on **All**.
3. Search for **System Notification**.
4. Under **System Notification**, select **Email → Notifications**.
5. Click **New**.
6. Fill in the notification details:

| Field | Value |
|--------|-------|
| **Name** | Booking Confirmation Reminder |
| **Table** | `u_sports_hall_bookings` |
| **When to Send** | Event is Fired |
| **Event Name** | `sports.hall.reminder` |
| **Active** | True |

7. Configure the email subject, message body, and recipients.
8. Attach the required **Email Script** to generate dynamic booking details and action buttons.
9. Click **Submit** or **Save**.

---

## Expected Outcome

- The **sports.hall.reminder** event is created successfully.
- Scheduled Jobs trigger the event automatically.
- Booking confirmation/reminder emails are generated.
- Dynamic booking details are included in the email.
- Users receive confirmation emails with action buttons after the event is fired.
