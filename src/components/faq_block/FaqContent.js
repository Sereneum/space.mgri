import { NavLink } from 'react-router-dom';
import { ArrowSquareOut, LinkSimple } from '@phosphor-icons/react';
import Accordion from './Accordion';

const FaqContent = () => (
        <>
            <div className="element_container">
                <div className="title_container">
                    <h3>Часто задаваемые вопросы</h3>
                </div>
                <div className="content_cover">
                    <Accordion title='Что такое Space?' description='Space – это глобальное дополнение к электронно-образовательной платформе stud.mgri.ru. Приложение позволяет упростить и ускорить выполение самых частых задач пользователя stud.' />
                    <div className="breaker"></div>
                    <Accordion title='Как добавить приложение на главный экран устройства?' description='Нажать на значок "Поделиться" в браузере. В появившемся меню выбрать опцию "Добавить на главный экран" или "Добавить ярлык". Подтвердите добавление, следуя инструкциям на устройстве.' />
                    <div className="breaker"></div>
                    <Accordion title='Не украдут ли данные моего аккаунта?' description='Space напрямую берет информацию из профиля stud и показывает Вам. Почти никакой информации нигде не сохраняется.' />
                    <div className="breaker"></div>
                    <Accordion title='Какие данные Вы собираете?' description='Только Ваш ID ученика в stud и закрепленные курсы.' />
                    <div className="breaker"></div>
                    <Accordion title='Какие задачи помогает решать приложение?' description='Быстро посмотреть расписание, проверить статус выполнения задания, прикрепить решение или отслеживать ближайшие дедлайны.' />
                    <div className="breaker"></div>
                    <Accordion title='Это платно?' description='Нет, за функционал приложения не нужно платить.' />
                    <div className="breaker"></div>
                    <Accordion title='Как мне отслеживать нужный курс?' description='Меню > Настройки курсов > Выберите необходимый курс из незакрепленных' />
                    <div className="breaker"></div>
                    <Accordion title='Можно ли переименовать курс?' description='Да, в Настройках курсов можно дать удобное название каждому закрепленному курсу.' />
                </div>
            </div>
            <div className="element_container">
                <div className="title_container">
                    <h3>Обратная связь</h3>
                </div>

                <div className="content_cover">
                    <NavLink to="https://stud.mgri.ru/WebApp/#/feedback" target="_blank" rel="noreferrer" className="content_elem_row select">
                        <LinkSimple weight="bold" className="icon_mid" />
                        <p>Контактный центр МГРИ</p>
                        <ArrowSquareOut weight="bold" className="icon_mid" />
                    </NavLink>
                </div>
            </div>
        </>
);

export default FaqContent;
