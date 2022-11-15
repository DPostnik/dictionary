import { Icons } from 'constants/icons';
import { IconProps } from 'interfaces/icon';

export default function SvgComponent({ icon, onClick, className }: IconProps) {
  return Icons[icon](onClick, className);
}
