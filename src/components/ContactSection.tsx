import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}

const contactDetails: ContactItem[] = [
  {
    icon: <MapPin className="h-6 w-6 text-[#4B2E2E]" aria-hidden="true" />,
    label: "Workshop Address",
    value: "Plot 45, Furniture Street, Jaipur, Rajasthan, IN 302012",
  },
  {
    icon: <Phone className="h-6 w-6 text-[#4B2E2E]" aria-hidden="true" />,
    label: "Customer Support",
    value: "+91 99888 77665",
    link: "tel:+919988877665",
  },
  {
    icon: <Mail className="h-6 w-6 text-[#4B2E2E]" aria-hidden="true" />,
    label: "Email Us",
    value: "support@interiorcrafts.in",
    link: "mailto:support@interiorcrafts.in",
  },
];

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[#FFFDF9] w-full py-16 px-6 md:px-12 lg:px-24"
    >
      <header className="text-center mb-12">
        <h2
          id="contact-heading"
          className="text-3xl md:text-4xl font-bold text-[#4B2E2E]"
        >
          Contact Interior Crafts
        </h2>
        <p className="text-[#4B2E2E]/80 text-base md:text-lg mt-2 max-w-2xl mx-auto">
          Reach out to us for custom furniture like beds, kitchens, wardrobes,
          and sofas. We’re here to help turn your ideas into reality.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 border border-[#E5D7CD] bg-[#FFFCF7] p-6 rounded-xl"
          >
            <div>{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-[#4B2E2E]">
                {item.label}
              </h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-[#4B2E2E]/80 text-sm mt-1 block underline underline-offset-2 hover:text-[#4B2E2E]"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-[#4B2E2E]/80 text-sm mt-1">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
