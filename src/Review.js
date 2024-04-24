import React from 'react'
import * as FA6 from 'react-icons/fa6'

function Review() {
  return (
    <article className='review bg-white p-3 rounded-1'>
      <div className="review-top d-flex flex-column align-items-center gap-2">
        <div className='imgBox position-relative'>
            <img src='https://hamidkamyab.ir/cdn/img/avatar.jpg' />
            <span className='position-absolute bg-danger text-white rounded-circle'>
                <FA6.FaQuoteRight size={12}/>
            </span>
        </div>
        <span className='name'>نام نظر دهنده</span>
        <span className='job'>عنوان شغلی</span>
      </div>
      <div className="review-middle py-2">
        <p>
        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
        </p>
      </div>
      <div className="review-bottom position-relative d-flex justify-content-center">
            <button className='btn btn-sm randBtn'>
                تصادفی
            </button>

            <div className='position-absolute navBtn'>
                <button className='btn btn-next'>
                    <FA6.FaAngleRight size={14} />
                </button>
                <button className='btn btn-prev'>
                    <FA6.FaAngleLeft size={14} />
                </button>
            </div>
      </div>
    </article>
  )
}

export default Review
