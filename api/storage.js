import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(`@${key}`, jsonValue)
    console.log("Data saved to Async Storage")
  } catch (err) {
    console.log("Error while storing data to AsyncStorage:", err)
  }
}

export async function getData(key) {
  try {
    const jsonValue = await AsyncStorage.getItem(`@${key}`)
    return jsonValue !== null ? JSON.parse(jsonValue) : null
  } catch (err) {
    console.log("Error while fetching data from async storage:", err)
    return null
  }
}
