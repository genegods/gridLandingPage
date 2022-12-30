import React from 'react'
import { SecurityExpertData } from '../data/ArticleData'

const SecurityExpert = () => {
  return (
    <React.Fragment>
    <section>
      <div className=" pb-4 shadow-2xl md:pb-14 ">
        {
          SecurityExpertData.map((item, index) => {
            return(
              <div key={index}>
                <div className=" space-y-4 pt-5 pb-5 px-5">
                <img src={item.img} alt='' className='w-14 h-18 rounded-full'/>
                <div className="text-xl font-bold text-white">{item.title}</div>
                <div className=''>{item.body}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  </React.Fragment>
  )
}

export default SecurityExpert