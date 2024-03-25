import React, { useEffect } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import styled from "styled-components";
import { SafeArea } from "../utility/SafeAreaComponent";

const SplashScreenWrapper = styled(View)`
  padding: 16px;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #333333;
`;

const DLIText = styled(Text)`
  font-size: 40px;
  font-family: ${(props) => props.theme.fonts.heading1};
  color: green;
`;

const LibraryText = styled(Text)`
  font-size: 28px;
  font-weight: bold;
  color: white;
`;

const SplashScreen = ({ setIsReady }) => {
  useEffect(() => {
    (() => setTimeout(() => setIsReady(true), 3000))();
  }, []);

  return (
    <SafeArea>
      <SplashScreenWrapper>
        <Image
          source={require("../../../assets/splash.png")}
          width={Dimensions.get("window").width}
          height={Dimensions.get("window").height}
          resizeMode="contain"
        />
      </SplashScreenWrapper>
    </SafeArea>
  );
};

export default SplashScreen;
