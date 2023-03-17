import { Image, StyleSheet, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Modal } from "react-native-paper"
import Octicons from "react-native-vector-icons/Octicons"

import IntoroButton from "@components/common/IntoroButton"
import userImage from "@assets/icon/profileImage.png"

const ProfileModal = ({ name, level, modal, setModal }) => {
  const navigation = useNavigation()
  return (
    <Modal
      visible={modal}
      onDismiss={() => setModal(false)}
      contentContainerStyle={styles.modalContainer}
    >
      <View style={styles.container}>
        <View>
          <Image source={userImage} />
        </View>
        <View
          style={{
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "700" }}>{name}</Text>
          <Text
            style={{ fontSize: 10, fontWeight: "300", opacity: 0.5 }}
          >{`Level ${level}`}</Text>
        </View>
        <View>
          <Text style={styles.bodyText}>
            Keep up the good work,{"\n"}Catch you later!
          </Text>
        </View>
        <View style={{ width: "45%", marginTop: 20 }}>
          <IntoroButton
            onPress={() => navigation.navigate("Login")}
            iconPosition="left"
            text={"Sign Out"}
            icon={<Octicons name="sign-out" size={18} />}
            fontStyle={{
              fontSize: 14,
              fontWeight: "300",
            }}
          />
        </View>
      </View>
    </Modal>
  )
}

export default ProfileModal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  bodyText: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 35,
    height: 300,
  },
})
