export const isEmailSend = (input) => {
  if (!input) {
    return {
      message: 'Technical Issue!, Please Click on resend button.',
      code: 'SOMETHING_WENT_WRONG',
    }
  } else {
    return 'Verification email sent'
  }
}
