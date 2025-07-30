"use client";
import React, { memo, useMemo } from "react";
import { Phone, Mail, ShieldCheck, Brush } from "lucide-react";

const Footer: React.FC = memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const contactDetails = useMemo(
    () => [
      {
        icon: <Phone className="h-5 w-5 text-[#4B2E2E]" />,
        label: "Phone",
        value: "+91 9971377441",
        href: "tel:+919971377441",
      },
      {
        icon: <Mail className="h-5 w-5 text-[#4B2E2E]" />,
        label: "Email",
        value: "m.kumar8802@gmail.com",
        href: "mailto:m.kumar8802@gmail.com",
      },
    ],
    []
  );

  const businessHours = useMemo(
    () => [
      { day: "Mon - Fri", hours: "9:00 AM - 9:00 PM" },
      { day: "Saturday", hours: "9:00 AM - 9:00 PM" },
      { day: "Sunday", hours: "9:00 AM - 9:00 PM" },
    ],
    []
  );

  const highlights = useMemo(
    () => [
      { icon: ShieldCheck, text: "Premium Materials" },
      { icon: Brush, text: "Elegant Finishing" },
    ],
    []
  );

  return (
    <footer className="w-full bg-[#FFFDF9] text-[#4B2E2E] font-sans border-t border-[#E5D7CD]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">
            Komal <span className="text-[#4B2E2E]/80">Wood Work</span>
          </h2>
          <p className="text-sm leading-relaxed mb-4 max-w-sm">
            We specialize in making custom interior furniture including modular
            kitchens, beds, wardrobes, and sofas. Crafted with care and built
            for timeless elegance and comfort.
          </p>
          <ul className="flex flex-wrap gap-3 mt-4">
            {highlights.map((item, index) => (
              <li
                key={index}
                className="flex items-center border border-[#D8CFC5] bg-[#FFFDF9] px-3 py-1 rounded-full text-sm"
              >
                <item.icon className="h-4 w-4 mr-2 text-[#4B2E2E]" />
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            {contactDetails.map((contact, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div>{contact.icon}</div>
                <div>
                  <p className="font-medium">{contact.label}</p>
                  <a
                    href={contact.href}
                    className="block text-[#4B2E2E]/80 break-words hover:underline"
                  >
                    {contact.value}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Business Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
          <ul className="space-y-2 text-sm">
            {businessHours.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.day}</span>
                <span className="font-medium">{item.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#FDF7F2] border-t border-[#E5D7CD] py-4 text-center text-sm">
        <p>© {currentYear} Komal Wood Work. All rights reserved.</p>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
