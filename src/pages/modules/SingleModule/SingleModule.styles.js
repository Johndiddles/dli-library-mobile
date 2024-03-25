import styled from "styled-components";
import { ScreenContainer } from "../../../components/utility/ScreenContainer";
import { Image, Text, TouchableOpacity, View } from "react-native";

export const SingleModuleWrapper = styled(ScreenContainer)``;
export const ThumbnailPreview = styled(Image).attrs({})`
  height: 300px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

export const PreviewTexts = styled(Text)`
  text-transform: capitalize;
`;

export const ModuleDetailsWrapper = styled(View)`
  gap: 4px;
  padding: ${(props) => props.theme.space[2]};
`;

export const ActionButtons = styled(TouchableOpacity)`
  padding: ${(props) => props.theme.space[2]};
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const DownloadButton = styled(ActionButtons)`
  background-color: rgba(75, 85, 99, 1);
`;

export const PreviewButton = styled(ActionButtons)`
  background-color: rgba(22, 163, 74, 0);
  border: 1px solid rgba(22, 163, 74, 1);
`;

export const ButtonText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading2};
  font-weight: bold;
`;
export const DownloadButtonText = styled(ButtonText)`
  color: white;
`;
export const PreviewButtonText = styled(ButtonText)`
  color: rgba(22, 163, 74, 1);
`;
