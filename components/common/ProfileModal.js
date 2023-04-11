import { Image, StyleSheet, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Modal } from "react-native-paper"
import Octicons from "react-native-vector-icons/Octicons"

import IntoroButton from "@components/common/IntoroButton"
import userImage from "@assets/icon/profileImage.png"

import { signOutUser } from "@api/auth"
import { clearData } from "@api/storage"

const ProfileModal = ({ user, level, modal, setModal }) => {
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
        <View style={styles.userDetail}>
          <Text style={styles.name}>{user?.displayName}</Text>
          <Text style={styles.email}>{user?.email}</Text>
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
          buttonStyle={{ width: "40%" }}
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
    height: 320,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  userDetail: {
    alignItems: "center",
  },
  bodyText: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    fontWeight: "300",
    opacity: 0.5,
    marginBottom: 4,
  },
  level: { fontSize: 13, fontWeight: "300", opacity: 0.5 },
})
