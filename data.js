export const data = ({ name, email, phone, orders, price }) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pizza Order Confirmation</title>
  </head>
  <body>
    <div style="background-color: #f2f2f2; padding: 20px;">
      <h1 style="text-align: center; color: #ff9800;">Pizza Order Confirmation</h1>
      <p>Dear ${name},</p>
      <p>Thank you for your order! We have received the following information:</p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Total Price:</strong> $${price}</li>
      </ul>
      <p>We will begin processing your order immediately and will send you a confirmation email when it is ready for pickup. If you have any questions or concerns, please don't hesitate to contact us at 1-800-PIZZA.</p>
      <p>Thank you for choosing our pizzeria!</p>
      <p>Sincerely,<br />The Pizza Team</p>
    </div>
  </body>
</html>`;
};
