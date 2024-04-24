import React, { useState } from 'react'
import * as FA6 from 'react-icons/fa6'
import data from './data'

function Review() {
    const [index, setIndex] = useState(0);
    const { name, job, img, comment } = data[index];

    const handleSlide = (status) => {
        let len = data.length-1;
        if (status == 'next') {
            if (index >= len) {
                setIndex(0)
            } else {
                setIndex((index) => {
                    let newIndex = index + 1;
                    return newIndex;
                })
            }

        } else {
            if(index == 0){
                setIndex(len)
            }else{
                setIndex((index) => {
                    let newIndex = index - 1;
                    return newIndex;
                })
            }
            
        }
    }

    const randomItem = () =>{
        const randomIndex = Math.floor(Math.random()*data.length);
        if(randomIndex == index){
            randomItem()
        }else{
            setIndex(randomIndex)
        }
    }

    return (
        <article className='review bg-white p-3 rounded-1'>
            <div className="review-top d-flex flex-column align-items-center gap-2">
                <div className='imgBox position-relative'>
                    <div className='avatar'><img src={img} /></div>
                    <span className='position-absolute bg-danger text-white rounded-circle'>
                        <FA6.FaQuoteRight size={12} />
                    </span>
                </div>
                <span className='name'>{name}</span>
                <span className='job'>{job}</span>
            </div>
            <div className="review-middle py-2">
                <p>
                    {comment}
                </p>
            </div>
            <div className="review-bottom position-relative d-flex justify-content-center">
                <button className='btn btn-sm randBtn' onClick={randomItem}>
                    تصادفی
                </button>

                <div className='position-absolute navBtn'>
                    <button className='btn btn-next' onClick={() => handleSlide('next')}>
                        <FA6.FaAngleRight size={14} />
                    </button>
                    <button className='btn btn-prev' onClick={() => handleSlide('prev')}>
                        <FA6.FaAngleLeft size={14} />
                    </button>
                </div>
            </div>
        </article>
    )
}

export default Review
