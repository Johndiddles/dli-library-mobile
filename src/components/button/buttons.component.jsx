import styled from "styled-components";
import { Button as RNButton } from "react-native";

export const Button = styled(RNButton)`
  fontfamily: ${(props) => props.theme.fonts.heading1};
`;
