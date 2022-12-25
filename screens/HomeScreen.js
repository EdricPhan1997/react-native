import { View, Text, Image, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { styled } from "nativewind";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronDownIcon,
  UserIcon,
  StarIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
// import { Avatar, Flex, Title, SmallTitle } from "./style";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledSafeAreaView = styled(SafeAreaView);
const StyledImage = styled(Image);

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: "Hieu" // doi ten title
      headerShown: false, // an title mac dinh tren dt
    });
  }, []);
  return (
    <StyledSafeAreaView className="bg-white pt-5">
      {/* <StyledText className="text-red-500"> */}
      {/* Header */}
      <StyledView className="flex-row pb-3 items-center mx-4 space-x-2">
        <StyledImage
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <StyledView className="flex-1">
          <StyledText className="font-bold text-xs text-gray-400">
            Deliver Now !!
          </StyledText>
          <StyledText className="text-xl font-bold">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </StyledText>
        </StyledView>
        <UserIcon size={35} color="#00ccbb" />
      </StyledView>
      {/* Search */}
      <StyledView className="flex-row items-center space-x-2 pb-2 mx-4">
        <StyledView className="flex-row flex-1 bg-gray-200 space-x-2 p-3">
          <StarIcon size={20} color="gray" />
          <TextInput placeholder="learn react" keyboardType="default" />
        </StyledView>
        <AdjustmentsHorizontalIcon />
      </StyledView>
      {/* </StyledText> */}
    </StyledSafeAreaView>
  );
};

export default HomeScreen;

// SafeAreaView : day content vao khung hinh co the xem dc
