import React from 'react';
import { useForm } from '@formspree/react';

function ContactForm() {

   const [{ submitting, succeeded, errors }, handleSubmit] = useForm('contact');

   const displayButtonStatus = () => {
      if (submitting) return 'Sending';
      if (!errors?.length && succeeded) return 'Sent';

      return 'Send';
   }

   return (
      <div className="py-4">
         <form
            method="POST"
            onSubmit={handleSubmit}
         >
            <div className="grid md:grid-cols-2 gap-4 w-full pb-2">
               <div className="flex flex-col">
                  <label className="uppercase text-sm pb-2">
                     Name
                  </label>
                  <input
                     className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                     id="name"
                     type="text"
                     name="name"
                     required
                  />
               </div>
               <div className="flex flex-col">
                  <label className="uppercase text-sm pb-2">
                     Phone Number (Optional)
                  </label>
                  <input
                     className="border-2 rounded-lg p-3 flex border-gray-300"
                     type="text"
                     name="phone"
                  />
               </div>
            </div>
            <div className="flex flex-col py-2">
               <label className="uppercase text-sm py-2">
                  Email
               </label>
               <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  id="email"
                  type="email"
                  name="email"
                  required
               />
            </div>
            <div className="flex flex-col py-2">
               <label className="uppercase text-sm py-2">
                  Subject
               </label>
               <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  id="Subject"
                  type="text"
                  name="subject"
                  required
               />
            </div>
            <div className="flex flex-col py-2">
               <label className="uppercase text-sm py-2">
                  Message
               </label>
               <textarea
                  id="Message"
                  className="border-2 rounded-lg p-3 border-gray-300"
                  rows={6}
                  name="message"
                  required
               ></textarea>
            </div>
            <button disabled={submitting} className="w-full p-4 text-gray-100 mt-4">
            {displayButtonStatus()}
            </button>
         </form>
      </div>
   )
}

export default ContactForm;
