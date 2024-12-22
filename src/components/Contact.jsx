import React from "react";

const Contact = () => {
  return (
    <div className="bg-green-50">
      <div className="p-5">
        {/* MAP */}
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3908.7109925970344!2d76.07817507969125!3d11.572563959308827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDM0JzIxLjIiTiA3NsKwMDQnNTkuMCJF!5e0!3m2!1sen!2sin!4v1734877666365!5m2!1sen!2sin"
            
            height="250"
            style={{border:'0'}}
            className="w-full md:px-10"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
