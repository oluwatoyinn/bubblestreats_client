import React from 'react'

 function Banner(props) {
    

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row max-height justify-content-center align-items-center">
                    <div className="col-10 mx-auto banner text-center">
                        <h1 className="text-capitalize">
                            welcome to <strong className="banner-title">BubblesTreat</strong>
                        </h1>
                        <a href="#store" className="btn banner-link text-uppercase my-2">explore our website</a>
                    </div>
                </div>
                {/* store */}
            </div>
        </React.Fragment>
    )
}

export default Banner
