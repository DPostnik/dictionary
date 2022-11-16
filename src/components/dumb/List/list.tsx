import { Translation } from 'interfaces';
import classes from 'components/dumb/List/list.module.scss';

type ListProps<T> = {
  options: T[];
  headers: string[];
  onOptionClick: (option?: string) => void;
};

export default function List({
  options,
  headers,
  onOptionClick,
}: ListProps<Translation>) {
  return (
    <table className={classes.list}>
      <thead className={classes.list__header}>
        <tr className={classes['list__header-item']}>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody className={classes.list__content}>
        {options.map((option) => (
          <tr
            key={option.id}
            onClick={() => onOptionClick(option.id)}
            className={classes['list__content-item']}
          >
            <td>{option.id}</td>
            <td>{option.sourceText}</td>
            <td>{option.targetText}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
