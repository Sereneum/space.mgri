const LoaderSchedule = () => (
        <>
                <div className="content_cover loader_anim loader_selector">
                    <div className="content_elem_row" style={{ height: '46px' }}></div>
                </div>

            <div className="element_container">
                <div className="title_container padding_null">
                    <div className="loader_text_schedule loader_anim" style={{ animationDelay: '100ms' }}></div>
                    <div className="loader_text_schedule loader_anim" style={{ animationDelay: '200ms' }}></div>
                </div>

                <div className="content_cover loader_anim" style={{ animationDelay: '300ms' }}>
                    <div className="content_elem_row" style={{ height: '180px' }}></div>
                </div>
            </div>

            <div className="element_container">
                <div className="title_container padding_null">
                    <div className="loader_text_schedule loader_anim" style={{ animationDelay: '500ms' }}></div>
                    <div className="loader_text_schedule loader_anim" style={{ animationDelay: '600ms' }}></div>
                </div>

                <div className="content_cover loader_anim" style={{ animationDelay: '700ms' }}>
                    <div className="content_elem_row" style={{ height: '400px' }}></div>
                </div>
            </div>

        </>
);

export default LoaderSchedule;
