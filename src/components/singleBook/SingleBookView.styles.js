import styled from "styled-components";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Text as CustomText } from "../typography/text.component";
import { ScreenContainer } from "../utility/ScreenContainer";

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
  padding: ${(props) => props.theme.space[3]};
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

export const ButtonText = styled(CustomText).attrs({ variant: "label" })``;
export const DownloadButtonText = styled(ButtonText)`
  color: white;
`;
export const PreviewButtonText = styled(ButtonText)`
  color: rgba(22, 163, 74, 1);
`;
