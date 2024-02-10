import css from './ForbesList.module.css';
import { ForbesListItem } from '../ForbesListItem/ForbesListItem';
export const ForbesList = ({ list }) => {
  return (
    <div className={css.board}>
      <div className={css.header}>
        <h2 className={css.title}>
          <span className={css.titleTop}>Forbes</span>
          <span className={css.titleBottom}>Leader board</span>
        </h2>
      </div>

      <ul className={css.list}>
        {list.map(item => (
          <ForbesListItem
            key={item.id}
            avatar={item.avatar}
            capital={item.capital}
            isIncrease={item.isIncrease}
            name={item.name}
          />
        ))}
      </ul>
    </div>
  );
};
