import React from 'react';
import Cards from './Card';

const CoditionalRendering = ({setValue , value , setProduct , product}) => {
    return (
        <div class="container px-4 px-lg-5 mt-5">
            <div class="row gx-4 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 justify-content-center">
                {product.map((item,index) => {
                    return (
                        <>
                            <Cards item= {item} index={index} setValue={setValue}/>
                           
                        </>
                    )
                })}
                </div>
                </div>
    );
};

export default CoditionalRendering;