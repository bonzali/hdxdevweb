import React from 'react';



function Details({data}) {
    const [selection, setUserSelection] = React.useState({
        colorIndex: 0,
        sizeIndex: 0,
    })

    return (
        <div className={`col-sm-12 col-md-7 Details `}>
           <div className="p-4 p-md-0 pt-md-5">
               <div className="d-flex">
                   <div className="flex-fill">
                       <h3 className="item-name">{data.title}</h3>
                   </div>
                   <div className="avatar d-flex">
                       <span className="name details-title">Xels trends</span>
                       <span><img src={"/images/bg2.jpg"}/></span>
                   </div>
               </div>

               <div className="item-details details-title">
                   {data.details.map((item, i) => <span key={`detail-${i}`}>{item}</span>)}
               </div>
               <div className="mb-2">
                   <div className="details-title">Select Color</div>
                   <div className="d-flex item-colors mt-1 ">
                       {data.colors.map((item, i) => <div
                           onClick={() => setUserSelection({...selection , colorIndex : i})}
                           className={selection.colorIndex === i ? 'active' : ""}  key={`color-${i}`}>
                           <div style={{background : `${item}`}} > </div>
                       </div>)}
                   </div>
               </div>

               <div className='mb-2'>
                   <div className="details-title">
                       <span className="mr-5">Select Size</span>
                       <span className="text-danger">Size Guide</span>
                   </div>
                   <div className="d-flex item-sizes mt-1 " >
                       {data.sizes.map((item, i) => <div
                           onClick={() => setUserSelection({...selection , sizeIndex : i})}
                           className={selection.sizeIndex === i ? 'active' : ""}  key={`color-${i}`}>
                           {item}
                       </div>)}
                   </div>

               </div>

               <p>{data.description}</p>

               <div className={'item-options d-flex justify-content-around p-2 mt-1'}>
                    <span>Option 1</span>
                    <span>Option 2</span>
                    <span>Option 3</span>
               </div>

           </div>
        </div>
    );
}

export default Details;