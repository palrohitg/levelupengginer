import { motion } from "framer-motion";

const HiringPartners = () => {
  const companies = [
    { name: "Blinkit", logo: "https://res.cloudinary.com/blinkit/image/upload/w_100,f_auto,q_auto/v1/static_assets/Web%2FImages/Logo_Full.png" },
    { name: "Google", logo: "https://www.gstatic.com/images/branding/product/1x/googleg_standard_color_128dp.png" },
    { name: "Amazon", logo: "https://pngimg.com/uploads/amazon/amazon_PNG25.png" },
    { name: "Zomato", logo: "https://media-assets.swiggy.com/portal/testing/seo-assets/search-fimg_ic8hd1.png" },
    { name: "Microsoft", logo: "https://www.microsoft.com/favicon.ico" },
    { name: "JioStar", logo: "https://www.jiocinema.com/images/header_logo_dark.png" },
    { name: "Apple", logo: "https://www.apple.com/favicon.ico" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc_logo.svg/512px-Meta_Platforms_Inc_logo.svg.png" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/512px-Netflix_2015_logo.svg.png" },
    { name: "Uber", logo: "https://d1a3f4spazzrp4.cloudfront.net/kemet/kemet-core/images/logo-white.png" },
  ];

  // Duplicate for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-accent/10 to-transparent">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-3 font-display text-3xl font-bold sm:text-4xl">Our Hiring Partners</h2>
          <p className="text-lg text-muted-foreground">Join 80+ students placed at leading tech companies worldwide</p>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-background via-background/50 to-transparent dark:from-slate-950 dark:via-slate-950/50" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-background via-background/50 to-transparent dark:from-slate-950 dark:via-slate-950/50" />

          <motion.div
            className="flex gap-16 py-8 px-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedCompanies.map((company, i) => (
              <motion.div
                key={`${company.name}-${i}`}
                className="flex flex-shrink-0 items-center justify-center min-w-[150px] h-20 cursor-pointer group"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  title={company.name}
                  className="h-16 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HiringPartners;
