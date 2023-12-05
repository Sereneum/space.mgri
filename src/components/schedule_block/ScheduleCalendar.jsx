import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CaretDown } from '@phosphor-icons/react';
import {
  dateGetter,
  parserDateNow,
  toTextFormatMonth,
} from '../../managers/timeManager.js';

const ScheduleCalendar = ({
  weekID,
  updateWeek,
  isVisible,
  setIsVisible,
  calendar,
}) => {
  const validDate = dateGetter(weekID);

  const createMonth = (weekID) => new Date(weekID).getMonth();
  const createYear = (weekID) => new Date(weekID).getFullYear();

  const [year, setYear] = useState(weekID ? createYear(weekID) : '');
  const [month, setMonth] = useState(weekID ? createMonth(weekID) : '');

  const [table, setTable] = useState([]);

  const getDaysInCurrentMonth = () =>
    Number(new Date(year, month + 1, 0).getDate());

  const fillTable = (calendar) => {
    const firstDay = new Date(year, month, 1).getDay();
    const days = getDaysInCurrentMonth();
    const offset = firstDay === 0 ? 6 : firstDay - 1;
    let value = 0;
    const mx = days - 1;

    const isNow = (d1, d2) =>
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();

    const rows = parseInt((days + offset) / 7) + ((days + offset) % 7 ? 1 : 0);
    const table = [];
    for (let i = 0; i < rows; ++i) {
      table.push([]);
      for (let j = 0; j < 7; ++j) {
        const cur = i * rows + j;
        if (!(cur >= offset && value <= mx)) {
          table[i].push('');
          continue;
        }
        const createDayData = parserDateNow(new Date(year, month, ++value));
        const isOk = calendar.dates.indexOf(createDayData) !== -1;

        table[i].push({
          value,
          isOk,
          strDate: createDayData,
          normalDate: new Date(year, month, value),
          isNow: isNow(validDate, new Date(year, month, value)),
        });
      }
    }
    return table;
  };

  useEffect(() => {
    calendar && setTable(fillTable(calendar));
  }, [calendar, weekID, month, year]);

  const previousMonth = () => {
    const minDate = new Date(calendar?.minDate);
    const newMonth = month - 1 < 0 ? 12 : month - 1;
    const newYear = month - 1 < 0 ? year - 1 : year;
    const newDate = new Date(newYear, newMonth, 1);

    return minDate.getMonth() <= newDate.getMonth()
    && minDate.getFullYear() <= newDate.getFullYear();
  };

  const nextMonth = () => {
    const maxDate = new Date(calendar?.maxDate);
    const newMonth = month + 1 > 12 ? 0 : month + 1;
    const newYear = month + 1 > 12 ? year + 1 : year;
    const newDate = new Date(newYear, newMonth, 1);

    return maxDate.getMonth() >= newDate.getMonth()
    && maxDate.getFullYear() >= newDate.getFullYear();
  };

  const clickOnArrow = (offset) => {
    setMonth(month + offset);
  };

  const click = (obj) => {
    updateWeek(parserDateNow(obj.normalDate));
    setIsVisible(false);
  };

  return (
    <CSSTransition
      in={isVisible}
      timeout={200}
      classNames={'my-node'}
      unmountOnExit
    >
      <div className="calendar">
        <div className="calendar-fader"></div>
        <div className="head">
          <CaretDown
            weight="bold"
            className={`arrow ${!previousMonth() && 'passiveArrow'}`}
            style={{ rotate: '90deg' }}
            onClick={() => previousMonth() && clickOnArrow(-1)}
          />
          <div className="month">{`${toTextFormatMonth(month)}, ${year}`}</div>
          <CaretDown
            weight="bold"
            className={`arrow ${!nextMonth() && 'passiveArrow'}`}
            style={{ rotate: '270deg' }}
            onClick={() => {
              nextMonth() && clickOnArrow(+1);
            }}
          />
        </div>

        {table.length && (
          <table className="calendar_box">
            <thead className="days">
              <tr className="days-container">
                {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((i, ind) => (
                  <th key={i + ind}>
                    <p>{i}</p>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="calendar_date_pool">
              {table.map((rows, rowIndex) => (
                <tr key={`r${rowIndex}`}>
                  {rows.map((colm, colmIndex) => (
                    <td
                      key={`c${rowIndex * 7 + colmIndex}`}
                      className={`${colm.isNow ? 'isNow' : ''}`}
                      onClick={() => click(colm)}
                    >
                      <p
                        key={`c${rowIndex * 7 + colmIndex}`}
                        className={`${colm.isOk ? 'isOk' : ''}`}
                      >
                        {colm.value}
                      </p>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </CSSTransition>
  );
};

export default ScheduleCalendar;
