import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
const SECRET_KEY = process.env.NEXT_PUBLIC_ENV_FORM_ID;

function ContactForm() {
   const [{ submitting, succeeded, errors }, handleSubmit] = useForm(
      SECRET_KEY || '',
   );

   const displayButtonStatus = () => {
      if (submitting) return 'Sending';
      return 'Send';
   };

   return (
      <div className="py-4 text-left">
         <form
            action={`https://formspree.io/f/${SECRET_KEY}`}
            method="POST"
            onSubmit={handleSubmit}
         >
            <div className="grid md:grid-cols-2 gap-4 w-full pb-2">
               <div className="flex flex-col">
                  <label className="uppercase text-sm pb-2" htmlFor="name">
                     Name
                  </label>
                  <input
                     className="border-2 rounded-lg p-2 md:p-3 flex border-gray-300 text-black"
                     id="name"
                     name="name"
                     required
                     type="text"
                  />
                  <ValidationError errors={errors} field="name" prefix="Name" />
               </div>
               <div className="flex flex-col">
                  <label className="uppercase text-sm pb-2" htmlFor="phone">
                     Phone Number (Optional)
                  </label>
                  <input
                     className="border-2 rounded-lg p-2 md:p-3 flex border-gray-300"
                     id="phone"
                     name="phone"
                     type="number"
                  />
               </div>
            </div>
            <div className="flex flex-col py-2">
               <label className="uppercase text-sm py-2" htmlFor="email">
                  Email
               </label>
               <input
                  className="border-2 rounded-lg p-2 md:p-3 flex border-gray-300"
                  id="email"
                  name="email"
                  required
                  type="email"
               />
               <ValidationError errors={errors} field="email" prefix="Email" />
            </div>
            <div className="flex flex-col py-2">
               <label className="uppercase text-sm py-2" htmlFor="subject">
                  Subject
               </label>
               <input
                  className="border-2 rounded-lg p-2 md:p-3 flex border-gray-300"
                  id="subject"
                  name="subject"
                  required
                  type="text"
               />
               <ValidationError
                  errors={errors}
                  field="subject"
                  prefix="Subject"
               />
            </div>
            <div className="flex flex-col py-2">
               <label className="uppercase text-sm py-2" htmlFor="message">
                  Message
               </label>
               <textarea
                  className="border-2 rounded-lg p-2 md:p-3 border-gray-300"
                  id="message"
                  name="message"
                  required
                  rows={6}
               ></textarea>
               <ValidationError
                  errors={errors}
                  field="message"
                  prefix="message"
               />
            </div>
            {errors.length ? (
               <div className="flex flex-col py-2">
                  <p className="text-red-300 text-center">
                     Something went wrong. Please try again in a few minutes
                  </p>
               </div>
            ) : null}
            {succeeded ? (
               <p className="text-center py-5 border-2 border-[#7cae7a] text-lg">
                  {"Thanks! I'll contact you Asap."}
               </p>
            ) : (
               <button
                  className="w-full p-4 text-gray-100 mt-4"
                  disabled={submitting || succeeded}
               >
                  {displayButtonStatus()}
               </button>
            )}
         </form>
      </div>
   );
}

export default ContactForm;
