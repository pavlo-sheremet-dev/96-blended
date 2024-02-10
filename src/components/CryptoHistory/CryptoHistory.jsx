import style from './CryptoHistory.module.css';
import { format } from 'date-fns';
const tableHeaders = ['№', 'price', 'amount', 'date'];

export const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          {tableHeaders.map(header => (
            <th className={style.th} key={header}>
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, price, amount, date }, ind) => (
          <tr className={style.tr} key={id}>
            <td className={style.td}>{ind + 1}</td>
            <td className={style.td}>{price}</td>
            <td className={style.td}>{amount}</td>
            <td className={style.td}>{format(new Date(date), 'Pp')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
