import { Snackbar } from "react-native-paper"

const ErrorSnackBar = ({ visible, onDismiss, message }) => {
  return (
    <Snackbar visible={visible} duration={2000} onDismiss={onDismiss}>
      {message}
    </Snackbar>
  )
}

export default ErrorSnackBar
