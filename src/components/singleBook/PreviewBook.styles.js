import { View } from "react-native";
import styled from "styled-components";

export const BookDetails = styled(View)`
  margin-bottom: ${(props) => props.theme.space[2]};
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 10px;
  padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[3]};
`;
