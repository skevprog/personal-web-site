import React from 'react';
import { useForm } from '@formspree/react';

function ContactForm() {
   const [{ submitting, succeeded, errors }, handleSubmit] = useForm('contact');

   const displayButtonStatus = () => {
      if (submitting) return 'Sending';
      if (!errors?.length && succeeded) return 'Sent';

      return 'Send';
   };

   return (
      <div className="py-4">
         <form method="POST" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4 w-full pb-2">
               <div className="flex flex-col">
                  <label className="uppercase text-sm pb-2">Name</label>
                  <input
                     className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                     id="name"
                     name="name"
                     required
                     type="text"
                  />
               </div>
               <div className="flex flex-col">
                  <label className="uppercase text-sm pb-2">
                     Phone Number (Optional)
                  </label>
                  <input
                     className="border-2 rounded-lg p-3 flex border-gray-300"
                     name="phone"
                     type="text"
                  />
               </div>
            </div>
            <div className="flex flex-col py-2">
               <label className="uppercase text-sm py-2">Email</label>
               <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  id="email"
                  name="email"
                  required
                  type="email"
               />
            </div>
            <div className="flex flex-col py-2">
               <label className="uppercase text-sm py-2">Subject</label>
               <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  id="Subject"
                  name="subject"
                  required
                  type="text"
               />
            </div>
            <div className="flex flex-col py-2">
               <label className="uppercase text-sm py-2">Message</label>
               <textarea
                  className="border-2 rounded-lg p-3 border-gray-300"
                  id="Message"
                  name="message"
                  required
                  rows={6}
               ></textarea>
            </div>
            <button
               className="w-full p-4 text-gray-100 mt-4"
               disabled={submitting}
            >
               {displayButtonStatus()}
            </button>
         </form>
      </div>
   );
}

export default ContactForm;
