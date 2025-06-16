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
        value: "+91 98765 43210",
        href: "tel:+919876543210",
      },
      {
        icon: <Mail className="h-5 w-5 text-[#4B2E2E]" />,
        label: "Email",
        value: "komalwoodwork@example.com",
        href: "mailto:komalwoodwork@example.com",
      },
    ],
    []
  );

  const businessHours = useMemo(
    () => [
      { day: "Mon - Fri", hours: "9:00 AM - 7:00 PM" },
      { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
      { day: "Sunday", hours: "Closed" },
    ],
    []
  );

  const features = useMemo(
    () => [
      { icon: ShieldCheck, text: "Premium Quality" },
      { icon: Brush, text: "Elegant Finishing" },
    ],
    []
  );

  return (
    <footer className="w-full bg-[#F9F6F1] text-[#4B2E2E] font-sans border-t border-[#E5D7CD]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">
            Komal <span className="text-[#4B2E2E]/80">Wood Work</span>
          </h2>
          <p className="text-sm leading-relaxed mb-4 max-w-sm">
            Custom interior furniture solutions crafted with care, quality, and
            a timeless aesthetic for every space in your home.
          </p>
          <ul className="flex flex-wrap gap-3 mt-4">
            {features.map((item, index) => (
              <li
                key={index}
                className="flex items-center border border-[#D8CFC5] bg-white px-3 py-1 rounded-full text-sm"
              >
                <item.icon className="h-4 w-4 mr-2 text-[#4B2E2E]" />
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-4 text-sm">
            {contactDetails.map((contact, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div>{contact.icon}</div>
                <div>
                  <p className="font-medium">{contact.label}</p>
                  <a
                    href={contact.href}
                    className="block text-[#4B2E2E]/80 break-words"
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
      <div className="bg-white border-t border-[#E5D7CD] py-4 text-center text-sm">
        <p>
          © {currentYear} Komal Wood Work. All rights reserved. | Crafted with
          care in India
        </p>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
