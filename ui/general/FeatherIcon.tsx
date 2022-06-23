import React from 'react';
import MIcon from 'react-native-vector-icons/Feather';

MIcon.loadFont();

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
  size: IconSizeProps['iconSizes'];
  name: string;
  color: string;
}

export const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 30,
  giga: 40,
};

export const FeatherIcon = ({ size, name, color }: IconProps) => (
  <MIcon name={name} size={IconSizes[size]} color={color} />
);
