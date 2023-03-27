import { StyleSheet, View } from "react-native"
import { Modal, Portal, Text, Provider, Button } from "react-native-paper"

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
            <Text style={styles.title}> Congratulations! </Text>
            <Text style={styles.subtitle}>
              {" "}
              You have just learnt five new characters.Do you want to review
              them now?{" "}
            </Text>
            <Button
              mode="contained"
              style={styles.button}
              labelStyle={{ color: "black" }}
              onPress={navigateToReviews}
            >
              Reviews
            </Button>
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
    padding: "15%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "800",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
  button: {
    width: "60%",
    borderRadius: 15,
    backgroundColor: "#F4D23C",
  },
})
