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
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LearnTextImputAndKeyboard = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onPressHandler = () => {
    //
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      Alert.alert("Warning", "The name must be long than 3 characters", [
        {
          text: "Do not show again",
          onPress: () => console.warn("Dont show again !!"),
        },
        { text: "Cancle", onPress: () => console.warn("Cancle Press !!") },
        { text: "OK", onPress: () => console.warn("Ok Pressed !!") },
      ]);
    }
  };

  // learn 1:51p

  return (
    <SafeAreaView>
      <View style={styles.view1}>
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
        {submitted && <Text style={styles.text}>your is Name : {name}</Text>}
      </View>
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

export default LearnTextImputAndKeyboard;

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
});
