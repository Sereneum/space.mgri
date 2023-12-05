const LoaderMenu = () => (
        <>

            <div className="element_container">
                <div className="title_container padding_null">
                    <div className="loader_text loader_anim"></div>
                </div>

                <div className="content_cover loader_anim" style={{ animationDelay: '100ms' }}>
                    <div className="content_elem_row" style={{ height: '120px' }}></div>
                </div>
            </div>

            <div className="element_container">
                <div className="title_container padding_null">
                    <div className="loader_text loader_anim" style={{ animationDelay: '300ms' }}></div>
                </div>

                <div className="content_cover loader_anim" style={{ animationDelay: '400ms' }}>
                    <div className="content_elem_row" style={{ height: '170px' }}></div>
                </div>

                <div className="content_cover loader_anim" style={{ animationDelay: '500ms' }}>
                    <div className="content_elem_row" style={{ height: '140px' }}></div>
                </div>

                <div className="content_cover loader_anim" style={{ animationDelay: '600ms' }}>
                    <div className="content_elem_row" style={{ height: '70px' }}></div>
                </div>
            </div>

            <div className="element_container">
                <div className="title_container padding_null">
                    <div className="loader_text loader_anim" style={{ animationDelay: '800ms' }}></div>
                </div>

                <div className="content_cover loader_anim" style={{ animationDelay: '900ms' }}>
                    <div className="content_elem_row" style={{ height: '260px' }}></div>
                </div>
            </div>

            <div className="element_container">
                <div className="title_container padding_null">
                    <div className="loader_text loader_anim" style={{ animationDelay: '1100ms' }}></div>
                </div>

                <div className="content_cover loader_anim" style={{ animationDelay: '1200ms' }}>
                    <div className="content_elem_row" style={{ height: '150px' }}></div>
                </div>
            </div>

        </>
);

export default LoaderMenu;
