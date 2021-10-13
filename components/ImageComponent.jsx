import React from 'react';
function ImageComponent({images}) {
    const [previewImageIndex , setPreviewImageIndex] = React.useState(2)
    return (
        <div className={'col-sm-12 col-md-5 mb-5'}>
            <div className="d-flex">
                <div className="">
                    <div className=" item-images">
                        {images.map((item , i) => {
                            return (
                                <img alt="image"
                                     src={item}
                                     width="50"
                                     onClick={() => setPreviewImageIndex(i)}
                                     className={`img-fluid ${previewImageIndex === i ? 'active' : ""}`}
                                     key={i.toString()}/>
                            )
                        })}
                        <div/>
                    </div>
                </div>
                <div className="flex-fill preview">

                    <img
                        alt="image preview"
                        className=""
                        src={images[previewImageIndex]}
                    />
                    <div className="img-border"> </div>
                </div>

            </div>
        </div>
    );
}

export default ImageComponent;