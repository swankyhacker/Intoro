import { useState, useEffect } from "react"
import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { Portal, Provider } from "react-native-paper"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import intoroLogo from "@assets/logo/IntoroLogo.png"
import { getCurrentUser } from "@api/auth"

import ProfileModal from "./ProfileModal"
import getCurrentLevel from "@api/firestore/getCurrentLevel"

export default function IntoroWrapper({ children, logo = true }) {
  const insets = useSafeAreaInsets()
  const [visible, setVisible] = useState(false)
  const [userLevel, setUserLevel] = useState(null)
  const user = getCurrentUser()
  const uid = user?.uid
  const displayName = user?.displayName

  const showModal = () => setVisible(true)

  useEffect(() => {
    if (user) {
      const getLevel = async () => {
        const level = await getCurrentLevel(uid)
        setUserLevel(level)
      }

      getLevel()
    }
  }, [])

  return (
    <Provider>
      <Portal>
        <ProfileModal
          modal={visible}
          setModal={setVisible}
          name={displayName}
          level={userLevel}
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
            <Image source={intoroLogo} style={styles.logo} />
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
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  bodyContainer: {
    flex: 6,
  },
})
