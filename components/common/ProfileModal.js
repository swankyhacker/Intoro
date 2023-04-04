import { Image, StyleSheet, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Modal } from "react-native-paper"
import Octicons from "react-native-vector-icons/Octicons"

import IntoroButton from "@components/common/IntoroButton"
import userImage from "@assets/icon/profileImage.png"

import { signOutUser } from "@api/auth"
import { clearData } from "@api/storage"

const ProfileModal = ({ name, level, modal, setModal }) => {
  const navigation = useNavigation()

  const onPress = async () => {
    try {
      await clearData("credentials")
      await signOutUser()
      setModal(false)
      navigation.navigate("Login")
    } catch (err) {
      console.log("Unable to sign out")
    }
  }
  return (
    <Modal
      visible={modal}
      onDismiss={() => setModal(false)}
      contentContainerStyle={styles.modalContainer}
    >
      <View style={styles.container}>
        <Image source={userImage} />
        <View style={styles.user}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.level}>{`Level ${level}`}</Text>
        </View>
        <Text style={styles.bodyText}>
          Keep up the good work,{"\n"}Catch you later!
        </Text>
        <IntoroButton
          onPress={onPress}
          iconPosition="left"
          text={"Sign Out"}
          icon={<Octicons name="sign-out" size={18} />}
          fontStyle={{
            fontSize: 14,
            fontWeight: "300",
          }}
        />
      </View>
    </Modal>
  )
}

export default ProfileModal

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    marginHorizontal: 35,
    paddingVertical: 20,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    width: "70%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  user: {
    alignItems: "center",
  },
  bodyText: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
  name: {
    fontSize: 19,
    fontWeight: "700",
  },
  level: { fontSize: 12, fontWeight: "300", opacity: 0.5 },
})
