import React from "react";
import Marquee from "react-fast-marquee";

const logos = [
    //   { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", alt: "React" },
    //   { src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg", alt: "Sass" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", alt: "Tailwind" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", alt: "Node.js" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg", alt: "React 2" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg", alt: "Git" },

    { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft" },

    { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft" },
];

const ClientLogoMarquee = () => {
    return (
        <section className="bg-white py-10 px-4 md:px-8">
            <h2 className="text-3xl font-bold text-center text-[#02353c] mb-8">
              we have team thousend of sales teams
            </h2>

            <Marquee
                pauseOnHover={true}
                speed={50}
                gradient={false}
                className="overflow-hidden"
            >
                {logos.map((logo, index) => (
                    <div
                        key={index}
                        className="mx-10 flex items-center justify-center"
                    >
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            className="h-12 md:h-16 object-contain filter drop-shadow-md"
                        />
                    </div>
                ))}
            </Marquee>
        </section>
    );
};

export default ClientLogoMarquee;
