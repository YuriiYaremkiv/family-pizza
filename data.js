export const data = ({ name, email, phone, orders, price }) => {
  return `
  <html>
      <head>
      <style>
      body {
        font-family: Arial, sans-serif;
            font-size: 16px;
            line-height: 1.5;
          }
          h1 {
            font-size: 24px;
            margin-bottom: 20px;
          }
          p {
            margin-bottom: 20px;
          }
          .cta-btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #F15A29;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
          }
          .cta-btn:hover {
            background-color: #D44E22;
          }
          </style>
          </head>
          <body>
          <h1>Sending with SendGrid is Fun</h1>
          <p>Name ${name},</p>
          <p>Email ${email},</p>
          <p>Phone ${phone},</p>
          <p>Price ${price},</p>
          </body>
          </html>
          `;
};
