import { StyleSheet, View, Button } from "react-native"
import { Modal, Portal, Text, Provider } from "react-native-paper"

export default function ReviewsModal({
  children,
  visible,
  setVisible,
  scrollToPreviousLesson,
  navigateToReviews,
}) {
  const hideModal = () => {
    scrollToPreviousLesson()
    setVisible(false)
  }

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.container}
        >
          <View style={styles.modal}>
            <Text> Congrats! </Text>
            <Text> You have just learnt five new characters </Text>
            <Text> Do you want to review them now? </Text>
            <Button title="Reviews" onPress={navigateToReviews} />
          </View>
        </Modal>
      </Portal>
      {children}
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    padding: "5%",
  },
  modal: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 40,
    padding: "10%",
  },
})
