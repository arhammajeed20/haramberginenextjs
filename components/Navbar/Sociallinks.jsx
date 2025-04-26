import React from "react";

const SocialLinks = () => {
  const links = [
    {
      href: "https://twitter.com/harambergine",
      label: "Twitter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-twitter h-[1.2rem] w-[1.2rem] text-white hover:text-gray-300 transition-colors"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
    },
    {
      href: "https://t.me/harambergine",
      label: "Telegram",
      icon: (
        <div className="h-[1.2rem] w-[1.2rem] relative">
          <img
            alt="Telegram"
            loading="lazy"
            width="20"
            height="20"
            decoding="async"
            className="invert brightness-0 hover:opacity-80 transition-opacity"
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telegram-AcA144u4WpR552b9EIPEMiBLp4CIQ8.webp"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="flex space-x-2">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
            {link.icon}
            <span className="sr-only">{link.label}</span>
          </button>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
