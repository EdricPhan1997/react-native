import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  Alert,
  Modal,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LearnImgAndBackground = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const onPressHandler = () => {
    //
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      setShowWarning(true);
      // Alert.alert(
      //   "Warning",
      //   "The name must be long than 3 characters",
      //   [
      //     {
      //       text: "Do not show again",
      //       onPress: () => console.warn("Dont show again !!"),
      //     },
      //     { text: "Cancle", onPress: () => console.warn("Cancle Press !!") },
      //     { text: "OK", onPress: () => console.warn("Ok Pressed !!") },
      //   ],
      //   { cancelable: true, onDismiss: () => console.warn("Alert dismissed") }
      // );
    }
  };

  // learn 1:51p

  return (
    <SafeAreaView>
      {/* <Modal
        transparent
        visible={showWarning}
        onRequestClose={() => {
          setShowWarning(false);
        }}
        animationType="fade"
        // animationType="slide"
        hardwareAccelerated
      >
        <View style={styles.center_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>Warning !!</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>
                The name must be long than 3 characters
              </Text>
            </View>

            <Pressable
              style={styles.warning_button}
              onPress={() => setShowWarning(false)}
              android_ripple={{ color: "#fff" }}
            >
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal> */}
      <ImageBackground source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/12/12/35/texture-145968_960_720.png' }} style={styles.view1}>
        <Text style={styles.text}>Please write your name !!!</Text>
        <TextInput
          // multiline
          style={styles.input}
          placeholder="e.g name ???"
          onChangeText={(value) => setName(value)}
          // keyboardType= 'ascii-capable'
          // maxLength={10}
          // editable={false}
          // secureTextEntry
        />
        {/* <Button
          title={submitted ? "Clear" : "submit"}
          onPress={onPressHandler}
          // disabled={submitted}
          color="#00f"
        /> */}

        {/* <TouchableOpacity style={styles.button} onPress={onPressHandler} activeOpacity={0.2}>
          <Text>{submitted ? "Clear" : "submit"}</Text>
        </TouchableOpacity> */}
        {/* <TouchableHighlight
          style={styles.button}
          onPress={onPressHandler}
          underlayColor="#dddd"
        >
          <Text>{submitted ? "Clear" : "submit"}</Text>
        </TouchableHighlight> */}

        {/* <TouchableWithoutFeedback onPress={onPressHandler}>
          <View style={styles.button}>
            <Text>{submitted ? "Clear" : "submit"}</Text>
          </View>
        </TouchableWithoutFeedback> */}
        <Pressable
          // click lau lau
          // onLongPress={onPressHandler}
          // delayLongPress={2000}
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#dddd" : "#00ff00" },
            styles.button,
          ]}
          onPress={onPressHandler}
          // Click xung quanh voi pham vi tuy chinh
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          android_ripple={{ color: "#00f" }}
        >
          <Text>{submitted ? "Clear" : "submit"}</Text>
        </Pressable>
        {submitted ? (
          <View>
            <Text style={styles.text}>your is Name : {name}</Text>
            <Image
              style={styles.image}
              source={require("../../assets/favicon.png")}
              resizeMode="contain"
            />
          </View>
        ) : (
          <>
            <Image
              style={styles.image}
              source={require("../../assets/favicon.png")}
              // source={{
              //   uri: "https://img",
              // }}
              resizeMode="contain"
              // blurRadius={1}
            />
          </>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};

/*
  Todo: mutiline : dung de nhap nhieu dong khi enter tu dong xuong dong chu khong submit
   * maxLength : nhap toi da bao nhieu ky tu
  * editable= {false} : disable khong cho nguoi dung nhap du lieu
  * secureTextEntry === passworld
*/

/*
  Todo: Button 
    * onPress == onClick

  ! Do Button it tinh nang nen ta dung TouchableOpacity de thay the


  Todo: TouchableOpacity
  * activeOpacity: xac dinh do opacity khi click

  Todo TouchableHighlight => giong  nhu TouchableOpacity, nhung khong co do opacity mac dinh ma phai tuy chinh qua params underlayColor = "color"

  Todo TouchableWithoutFeedback : khong bao ra cam giac khi click
*/

export default LearnImgAndBackground;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#0000ff",
  },
  view1: {
    // width: "100%",
    height: 100,
    margin: 10,
    // backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    color: "#000",
    marginTop: 10,
    textAlign: "center",
  },
  full: {
    width: "100%",
    height: "100%",
  },
  input: {
    borderWidth: 1,
    width: 200,
    height: 40,
    borderColor: "red",
    borderRadius: 5,
    margin: 10,
    textAlign: "center",
  },
  button: {
    // backgroundColor: "#00ff00",
    padding: 8,
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
  },
  center_view: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#00000099",
  },
  warning_title: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff0",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  warning_body: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  warning_button: {
    backgroundColor: "#00ffff",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  image: {
    // width: 100,
    // height: 100,
    margin: 10,
  },
});
