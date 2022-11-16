import { ReactNode } from 'react';
import classes from './headline.module.scss';

type HeadlineProps = {
  children: ReactNode;
};

export default function Headline({ children }: HeadlineProps) {
  return <h3 className={classes.headline__wrapper}>{children}</h3>;
}
