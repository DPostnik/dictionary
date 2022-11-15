import { IconType } from 'enums/icons';

export interface IconProps {
  icon: IconType;
  onClick: () => void;
  className?: string;
}
