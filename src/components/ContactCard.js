import React from 'react'

const ContactCard = (props) => {
  const { id, name, email, number} = props.contact;

  return (
    <div>
       <div className="item h-full ">
        <ul className="   mx-3 my-3 ">
          <li>
            <div
              
              className=" h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600 grid grid-cols-12"
            >
<div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 my-3 col-span-1 col-end-1">
    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>     
<div className='col-span-11 mx-5 ' >
  
         <strong className="font-medium  text-black">{name}</strong>
              <p className="mt-1 text-xs font-medium text-gray-700 ">
                {email}
              </p>
              <p className="mt-1 text-xs font-medium text-gray-700">
                {number}
              </p>
              
              </div>
              <div className="   grid lg-grid-cols-6 lg-grid-rows-3 lg-gap-6  ">
                <i className="fa-sharp fa-xl fa-solid fa-trash col-end-6  row-start-3 text-red-300 "
                 onClick={() => props.clickHander(id)}></i>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ContactCard;

