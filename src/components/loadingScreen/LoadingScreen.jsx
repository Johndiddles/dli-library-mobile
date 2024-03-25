import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { Text } from "../typography/text.component";

const LoadingScreenWrapper = styled(View)`
  flex: 1;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

const LoadingScreen = ({ text }) => {
  return (
    <>
      <LoadingScreenWrapper>
        <Text>{text}</Text>
      </LoadingScreenWrapper>
    </>
  );
};

export default LoadingScreen;
