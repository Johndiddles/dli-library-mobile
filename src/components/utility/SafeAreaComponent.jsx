import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";

export const SafeArea = styled(SafeAreaView).attrs({
  edges: ["top"],
})`
  flex: 1;
  padding-top: 0px;
  background-color: #eeeeee;
`;
