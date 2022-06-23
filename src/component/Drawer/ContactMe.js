import React from 'react';
import phone from '../../img/phone.png'
import email from '../../img/whatup.png'
import Location from '../../img/email.png'

const ContactMe = () => {
    return (
        <div className='bg-slate-800' style={{height:'1000px'}}>


  <div  >
    
  <div class="w-11/12 max-w-5xl text-white  ">
  <div className="main flex flex-col justify-center border mt-10 mx-48 px-3 rounded-xl">
            <div className='flex  '>
                <img width={40} src={phone} alt="" />
                <div className='mx-2'>
                    <h4 className='text-primary text-3xl'>Phone</h4>
                    <p className=' sze text-2xl'>01609923033|01810851476| 01756382424</p>
                </div>
            </div>
            <div className='flex'>
                <img width={40} src="data:image/jpeg;base64,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" alt="" />
                <div className='mx-2'>
                    <h4 className='text-primary text-3xl'>What's up</h4>
                  
                    <a  className='text-2xl  sze  text-blue-600 underline' href="https://api.whatsapp.com/send/?phone=%2B8801609923033&text&app_absent=0">01609923033</a>
                </div>
            </div>
            <div className='flex mb-3'>
                <img width={40} src={email} alt="" />
                <div className='mx-2'>
                    <h4 className='text-primary text-3xl'>Email</h4>
                    <p  className='text-2xl  sze '>itabudurrahim22@gmail.com</p>
                </div>
            </div>
            <div className='flex '>
                <img width={40} src={Location}alt="" />
                <div className='mx-2'>
                    <h4 className='text-primary text-3xl'>Location</h4>
                  <a   className='text-2xl' href="https://goo.gl/maps/CqaUTEVStmCPTktG7">Barlekha/rotuli</a>
                </div>
            </div>
           </div>
 
  </div>


  </div>

           
        </div>
      
    );
};

export default ContactMe;