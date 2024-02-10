import style from './Statistics.module.css';
export const StatisticsItem = ({ stats: { title, total }, icon: Icon }) => {
  return (
    <li className={style.item}>
      <Icon size={30} />
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </li>
  );
};
