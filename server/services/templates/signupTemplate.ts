export const signupTemplate = (otp) => {
  const data = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OTP Verification</title>
</head>
<body>
  <h1>OTP Verification</h1>
  <p>Dear User,</p>
  <p>Your One-Time Password (OTP) for verification is: <strong>${otp}</strong></p>
  <p>Please enter this OTP on the verification page to proceed.</p>
  <p><em>Note: This OTP is valid for a single use and will expire after a certain period of time.</em></p>
  <p>If you have any questions or need further assistance, please feel free to contact our support team.</p>
  <br>
  <p>Thank you,</p>
  <p>Food_Arch</p>
</body>
</html>
`
  return data
}
