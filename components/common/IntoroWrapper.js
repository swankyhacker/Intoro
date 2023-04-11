import { useState } from "react"
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { Portal, Provider } from "react-native-paper"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"

import userImage from "@assets/icon/profileImage.png"
import intoroLogo from "@assets/logo/IntoroLogo.png"

import ProfileModal from "./ProfileModal"

export default function IntoroWrapper({
  children,
  logo = true,
  backButton = false,
  backNavigation,
  title = "",
}) {
  const insets = useSafeAreaInsets()
  const [visible, setVisible] = useState(false)

  const showModal = () => setVisible(true)

  return (
    <Provider>
      <Portal>
        <ProfileModal
          modal={visible}
          setModal={setVisible}
          name={"Candice Parkinson"}
          level={1}
        />
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
            <Image source={intoroLogo} style={styles.image} />
            <View style={{ marginRight: 10 }}>
              <TouchableOpacity onPress={showModal}>
                <Image style={styles.avatar} source={userImage} />
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        {title !== "" ? (
          <View style={styles.icon}>
            {backButton === true ? (
              <SimpleLineIcons
                size={40}
                name="arrow-left-circle"
                onPress={backNavigation}
              />
            ) : null}
            <Text style={styles.title}>{title}</Text>
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
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  bodyContainer: {
    flex: 9,
  },
  avatar: {
    height: 50,
    width: 50,
  },
  icon: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
    marginHorizontal: 10,
  },
})
