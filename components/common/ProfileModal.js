import { StyleSheet, Text, View, Image } from "react-native"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Octicons from "react-native-vector-icons/Octicons"
import IntoroButton from "@components/common/IntoroButton"
import userImage from "@assets/icon/profileImage.png"
import { useNavigation } from "@react-navigation/native"

const ProfileModal = ({ name, level }) => {
  const navigation = useNavigation()
  return (
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
        <Text style={{ fontSize: "14", fontWeight: "700" }}>{name}</Text>
        <Text
          style={{ fontSize: "10", fontWeight: "300", opacity: 0.5 }}
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
})
