import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const contactDetails = [
  {
    icon: <MapPin className="h-6 w-6 text-[#4B2E2E]" aria-hidden="true" />,
    label: "Address",
    value: "123 Interior Lane, Designer City, IN 302001",
  },
  {
    icon: <Phone className="h-6 w-6 text-[#4B2E2E]" aria-hidden="true" />,
    label: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: <Mail className="h-6 w-6 text-[#4B2E2E]" aria-hidden="true" />,
    label: "Email",
    value: "contact@interiorspace.com",
  },
];

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full bg-[#F9F6F1] py-16 px-6 md:px-12 lg:px-24"
    >
      <header className="text-center mb-12">
        <h2
          id="contact-heading"
          className="text-3xl md:text-4xl font-bold text-[#4B2E2E] mb-4"
        >
          Contact Us
        </h2>
        <p className="text-[#4B2E2E]/80 text-base md:text-lg max-w-2xl mx-auto">
          Get in touch with us for any interior design or furniture-related
          queries. We’re here to help you.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 border border-[#E5D7CD] bg-[#FFFDFB] p-6 rounded-xl"
          >
            <div>{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-[#4B2E2E] mb-1">
                {item.label}
              </h3>
              <p className="text-[#4B2E2E]/80 text-sm">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
