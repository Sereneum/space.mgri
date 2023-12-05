const LoaderTask = () => (
        <>

            <div className="element_container">
                <div className="title_container padding_null">
                    <div className="loader_text loader_anim"></div>
                </div>

                <div className="content_cover loader_anim" style={{ animationDelay: '200ms' }}>
                    <div className="content_elem_row" style={{ height: '70px' }}></div>
                </div>
            </div>

            <div className="element_container">
                <div className="title_container padding_null">
                    <div className="loader_text loader_anim" style={{ animationDelay: '400ms' }}></div>
                </div>

                <div className="content_cover loader_anim" style={{ animationDelay: '600ms' }}>
                    <div className="content_elem_row" style={{ height: '120px' }}></div>
                </div>

                <div className="content_cover loader_anim" style={{ animationDelay: '800ms' }}>
                    <div className="content_elem_row" style={{ height: '70px' }}></div>
                </div>
            </div>

            <div className="element_container">
                <div className="title_container padding_null">
                    <div className="loader_text loader_anim" style={{ animationDelay: '1000ms' }}></div>
                </div>

                <div className="content_cover loader_anim" style={{ animationDelay: '1200ms' }}>
                    <div className="content_elem_row" style={{ height: '160px' }}></div>
                </div>
            </div>

        </>
);

export default LoaderTask;
