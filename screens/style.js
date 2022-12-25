import { View, Text, Image } from "react-native";
import styled from "styled-components/native";

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #c0c0c0;
  margin-right: 10px;
`;

export const Flex = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-weight: 700;
  color: #000;
  font-size: 18px;
`;

export const SmallTitle = styled(Title)`
  color: #c0c0c0;
  font-size: 14px;
  font-weight: 400;
`;
