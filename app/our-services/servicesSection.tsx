
'use client'

// components/ServicesSection.js
import Image from 'next/image';
import Link from 'next/link';

const ServicesSection = ({ active = true }: { active?: boolean }) => {
  const services = [
    {
      title: "CCTV Installation & Monitoring",
      description: "Installation of high-definition CCTV surveillance systems for homes, businesses, and public spaces. Remote monitoring and real-time alerts to enhance security.",
      images: [
        { image: "/cctv/c1.jpg", alt: "CCTV Installation" },
        { image: "/cctv/c2.jpg", alt: "CCTV Installation" },
        { image: "/cctv/c3.jpg", alt: "CCTV Installation" },
      ],
      href: 'cctv-installation',
    },
    {
      title: "Access Control Systems",
      description: "Setup of biometric, RFID, and keypad-based access control systems to restrict unauthorized entry. Integration with time attendance systems for workforce management.",
      images: [
        { image: "/access/ac2.jpg", alt: "Access Control Systems" },
        { image: "/access/ac5.jpg", alt: "Access Control Systems" },
        { image: "/access/ac4.jpg", alt: "Access Control Systems" },
      ],
      href: 'access-control-systems',
    },
    {
      title: "Alarm Systems & Intrusion Detection",
      description: "Installation of motion sensors, fire alarms, and burglar alarms for enhanced safety. 24/7 monitoring services with emergency response activation.",
      images: [
        { image: "/alarm/a1.jpg", alt: "Alarm Systems" },
        { image: "/alarm/a2.jpg", alt: "Alarm Systems" },
        { image: "/alarm/a3.jpg", alt: "Alarm Systems" },
      ],
      href: 'alarm-systems',
    },
    {
      title: "Security System Maintenance & Support",
      description: "Regular system maintenance to ensure uninterrupted security coverage. Software updates, troubleshooting, and hardware repairs for security systems.",
      images: [
        { image: "/maintenance/m1.jpg", alt: "Security System Maintenance" },
        { image: "/maintenance/m2.png", alt: "Security System Maintenance" },
        { image: "/maintenance/m5.png", alt: "Security System Maintenance" },
      ],
      href: 'security-system-maintenance',
    },
  ]

  return (
    <section className="set-image justify-center">
      {active && (
        <div className='container mx-auto'>
          <h1 className="mt-4 text-4xl font-bold">Transform Your Security with Farazkhan Security Ltd.</h1>
          <p className="mt-4 flex justify-between items-center text-xl text-black-600">At Farazkhan Security Ltd., we provide comprehensive security solutions to safeguard your business, assets, and people. Our team is dedicated to delivering exceptional services that meet your unique security needs.</p>
        </div>
      )}
      <div className="mx-auto px-4 py-12 pb-0 bg-cover text-black">
        <div className='container mx-auto'>
          <h2 className="text-4xl font-bold mb-10 text-red-500">Our Security Services</h2>
          {services.map((service, index) => (
            <div className="mb-16" key={index}>
              <h3 className="text-3xl font-bold mb-4">
                {active ? (
                  <Link href={service.href} className='hover:underline'>
                    {service.title}
                  </Link>
                ) : (
                  <span>
                    {service.title}
                  </span>
                )}
              </h3>
              <p className="mb-10 text-xl">
                {service.description}
              </p>
              <div className="flex flex-wrap justify-center">
                {service.images.map((image, index) => (
                  <div className="w-full md:w-1/3 xl:w-1/3 p-6" key={index}>
                    <Image src={image.image} alt={image.alt} layout="responsive" width={400} height={300} className="rounded-lg" />
                  </div>
                ))}
              </div>
              {active && (
                <div className="text-center mt-8">
                  <Link href={service.href} className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-md transition duration-300">
                    Learn More
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
