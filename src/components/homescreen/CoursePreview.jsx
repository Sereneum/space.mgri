import {
  CaretLeft, CaretRight, Check, Clock, PencilSimple, WarningCircle, X,
} from '@phosphor-icons/react';

const CoursePreview = () => (
		<div className="block">

            <div className="title_container desktop_only">
                <h1>Сейсморазведка</h1>
            </div>

            <div className="title_container back_container tablet">
                <CaretLeft weight="bold" className="icon_mid" />
                <h2>Сейсморазведка</h2>
            </div>

            <div className="element_container">
                <div className="title_container">
                    <h3>Задания</h3>
                </div>

                <div className="content_cover">

                    <div className="content_elem_row ">
                        <div className="content_inner_column">
                            <h4>1ЛР Сейсмограмма прямой волны</h4>
                            <div className="lighter lect">
                                <Check weight="bold" className="icon_min text_lighter" />
                                <p className="text_lighter">Выполнено</p>
                            </div>
                        </div>
                        <CaretRight weight="bold" className="icon_mid" />
                    </div>

                    <div className="breaker"></div>

                    <div className="content_elem_row ">
                        <div className="content_inner_column">
                            <h4>2ЛР Затухающее колебательное движение</h4>
                            <div className="lighter exam">
                                <Clock weight="bold" className="icon_min text_lighter" />
                                <p className="text_lighter">В проверке</p>
                            </div>
                        </div>
                        <CaretRight weight="bold" className="icon_mid" />
                    </div>

                    <div className="breaker"></div>

                    <div className="content_elem_row ">
                        <div className="content_inner_column">
                            <h4>3ЛР Механические колебания</h4>
                            <div className="lighter pract">
                                <PencilSimple weight="bold" className="icon_min text_lighter" />
                                <p className="text_lighter">На доработке</p>
                            </div>
                        </div>
                        <CaretRight weight="bold" className="icon_mid" />
                    </div>

                    <div className="breaker"></div>

                    <div className="content_elem_row ">
                        <div className="content_inner_column">
                            <h4>4ЛР Магнитные колебания</h4>
                            <div className="lighter declined">
                                <X weight="bold" className="icon_min text_lighter" />
                                <p className="text_lighter">Просрочено</p>
                            </div>
                        </div>
                        <CaretRight weight="bold" className="icon_mid" />
                    </div>

                    <div className="breaker"></div>

                    <div className="content_elem_row select">
                        <div className="content_inner_column">
                            <h4>5ЛР Механические колебания</h4>
                            <div className="lighter not_checked">
                                <WarningCircle weight="bold" className="icon_min" />
                                <p>Не проверено</p>
                            </div>
                        </div>
                        <CaretRight weight="bold" className="icon_mid" />
                    </div>

                </div>

            </div>

        </div>
	 );

export default CoursePreview;
