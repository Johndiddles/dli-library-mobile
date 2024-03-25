import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const FilterWrapper = styled(View)`
  padding-bottom: ${(props) => props.theme.space[3]};
  padding-left: ${(props) => props.theme.space[0]};
  padding-left: ${(props) => props.theme.space[0]};
  padding-top: 0px;
  border-radius: 14px;
`;

export const SearchWrapper = styled(View)`
  gap: ${(props) => props.theme.space[2]};
  flex-direction: row;
  align-items: center;
`;

const StyledFilterButton = styled(TouchableOpacity)`
  padding: ${(props) => props.theme.space[2]};
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 50px;
`;

export const FilterButton = () => {
  return (
    <StyledFilterButton>
      <Ionicons color="rgba(0,0,0,0.5)" name="filter" size={24} />
    </StyledFilterButton>
  );
};
