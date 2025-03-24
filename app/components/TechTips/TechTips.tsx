import TechnologyCard from "@/components/TechCard/TechCard";

export default function TechTips() {
  const techTips = [
    {
      imageSrc: "/s7.jpg",
      title: "Benefits of Comprehensive Security Solutions with Farazkhan Security Ltd.",
      description:
        "Discover the advantages of partnering with Farazkhan Security Ltd. for your security needs, from access control to CCTV installation and more.",
      date: "March 15, 2024",
      readTime: "1 min",
    },
    {
      imageSrc: "/s1.jpg",
      title: "Unlock the Power of Advanced Security Systems with Farazkhan Security Ltd.",
      description:
        "Learn how Farazkhan Security Ltd.'s advanced security systems can help you protect your business, assets, and people.",
      date: "February 20, 2024",
      readTime: "1 min",
    },
    {
      imageSrc: "/s2.png",
      title: "Transform Your Security Posture with Farazkhan Security Ltd.'s Expert Solutions",
      description:
        "Explore how Farazkhan Security Ltd.'s comprehensive security solutions can help you create a secure and protected environment for your business.",
      date: "January 25, 2024",
      readTime: "2 mins",
    },
  ];

  return (
    <section className="grid md:flex-row items-center justify-center gap-8 p-6 container mx-auto">
      <p
        className="text-center text-3xl md:text-4xl gap-15 p-10 font-bold"
        style={{ color: "red" }}
      >
        EXPERIENCE THE POWER OF FARAZKHAN SECURITY LTD.
      </p>
      <div className="w-full flex-col lg:grid lg:grid-cols-3 gap-7 justify-center">
        {techTips.map((cardData, index) => (
          <TechnologyCard key={index} data={cardData} />
        ))}
      </div>
      <ul className="text-xl list-inside">
        <li>
          • Comprehensive Security Solutions: Farazkhan Security Ltd.
          provides a range of security solutions, including access control,
          CCTV installation, and more.
        </li>
        <li>
          • Advanced Security Systems: Farazkhan Security Ltd.&apos;s advanced
          security systems provide robust protection for your business,
          assets, and people.
        </li>
        <li>
          • Expert Security Solutions: Farazkhan Security Ltd.&apos;s team of
          experts provides customized security solutions tailored to your
          business needs.
        </li>
        <li>
          • Reliable and Efficient Security: Farazkhan Security Ltd.&apos;s
          security solutions are designed to provide reliable and efficient
          protection for your business.
        </li>
        <li>
          • Exceptional Customer Support: Farazkhan Security Ltd.&apos;s
          customer support team is dedicated to providing exceptional
          support and ensuring your satisfaction with our services.
        </li>
      </ul>
    </section>
  );
}
