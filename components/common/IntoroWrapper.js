import intoroLogo from "@assets/logo/IntoroLogo.png"
import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { useState } from "react"
import { Modal, Portal, Text, Button, Provider } from "react-native-paper"
import ProfileModal from "./ProfileModal"

export default function IntoroWrapper({ children, logo = true }) {
  const insets = useSafeAreaInsets()
  const [visible, setVisible] = useState(false)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalContainer}
        >
          <ProfileModal name={"Candice Parkinson"} level={2} />
        </Modal>
      </Portal>
      <View
        style={{
          ...styles.container,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        }}
      >
        {logo === true ? (
          <View style={styles.header}>
            <Image
              source={intoroLogo}
              style={{ width: 100, height: 100, resizeMode: "contain" }}
            />
            <View style={{ marginRight: 10 }}>
              <TouchableOpacity onPress={showModal}>
                <FontAwesome name="user" color="#7B9EE3" size={26} />
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        <View style={styles.bodyContainer}>{children}</View>
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 35,
    height: 300,
  },
  bodyContainer: {
    flex: 6,
  },
})
