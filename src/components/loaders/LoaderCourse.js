const LoaderCourse = () => (
        <>

            <div className="element_container">
                <div className="title_container padding_null">
                    <div className="loader_text loader_anim"></div>
                </div>

                <div className="content_cover loader_anim" style={{ animationDelay: '200ms' }}>
                    <div className="content_elem_row" style={{ height: '300px' }}></div>
                </div>
            </div>

            <div className="element_container">
                <div className="title_container padding_null">
                    <div className="loader_text loader_anim" style={{ animationDelay: '400ms' }}></div>
                </div>

                <div className="content_cover loader_anim" style={{ animationDelay: '600ms' }}>
                    <div className="content_elem_row" style={{ height: '400px' }}></div>
                </div>
            </div>

        </>
);

export default LoaderCourse;
