import { View } from "react-native";
import styled from "styled-components";

export const ScreenContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
`;
