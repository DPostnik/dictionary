import { IconProps, Icons } from 'enums/icons';

export default function SvgComponent({ icon, onClick, className }: IconProps) {
  return Icons[icon](onClick, className);
}
