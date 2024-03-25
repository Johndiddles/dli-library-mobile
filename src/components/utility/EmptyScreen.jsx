import React from "react";
import { View } from "react-native";
import { Text } from "../typography/text.component";
import styled from "styled-components";

const EmptyScreenContentWrapper = styled(View)`
  flex: 1;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

const EmptyScreen = ({ text }) => {
  return (
    <>
      <EmptyScreenContentWrapper>
        <Text>{text}</Text>
      </EmptyScreenContentWrapper>
    </>
  );
};

export default EmptyScreen;
