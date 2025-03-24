import Slider from "@/components/Slider/Slider";
import Image from "next/image";
import Link from "next/link";

const slides = [
  "/s9.png",
  "/s9.png",
  "/s10.jpg",
  "/s11.jpg",
  "/s12.jpg",
  "/s13.jpg"
];

export default function AboutUs() {
  return (
    <main>
      <section className="flex flex-col items-center">
        {/* Text Content Section */}
        <div className="container mx-auto max-w-4xl px-4 py-16 text-center md:max-w-6xl lg:max-w-7xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Protecting Your World with Farazkhan Security Ltd.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            At Farazkhan Security Ltd., we provide comprehensive security
            solutions to safeguard your business, assets, and people.
          </p>
          <Link
            href="/our-services"
            className="inline-flex items-center justify-center px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-colors"
            aria-label="Learn more about our services"
          >
            Learn More
          </Link>
        </div>
        <Slider images={slides} />
        <div className="w-full p-6 text-center mx-auto">
          <p className="text-2xl">
            Our mission is to provide reliable, proactive, and innovative
            security solutions that meet the evolving needs of our clients.
            We strive to deliver exceptional services that exceed
            expectations and build long-term relationships.
          </p>
        </div>
      </section>
      <br></br>
      <section className="border shadow grid gap-4 py-5">
        <div className="container mx-auto p-4 px-10 grid gap-4">
          <div className="grid gap-3">
            <br></br>
            <h1 className="text-3xl font-bold">Our Mission</h1>
            <p className="text-xl">
              To provide reliable, proactive, and innovative security
              solutions that meet the evolving needs of our clients.
            </p>
          </div>
          <div className="grid gap-3">
            <h1 className="text-3xl font-bold">Our Vision</h1>
            <p className="text-xl">
              To be the trusted security partner for businesses, providing
              comprehensive solutions that safeguard their assets, people,
              and interests.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="/our-services"
            className="inline-flex items-center justify-center px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-colors"
            aria-label="Learn more about our services"
          >
            Learn More
          </Link>
        </div>
      </section>
      <section className="container mx-auto grid gap-3 my-4">
        <h1 className="flex text-center font-bold text-4xl text-blue-500">
          Why Choose Farazkhan Security Ltd.?
        </h1>
        <div className="container mx-auto p-4 px-10">
          <div className="flex justify-center grid gap-4">
            <div className="bg-white shadow-md p-4 rounded-md">
              <blockquote className="text-2xl">
                Farazkhan Security Ltd. has been instrumental in helping
                us secure our business.
              </blockquote>
              <cite className="text-lg text-gray-500">
                - John D., CEO
              </cite>
            </div>
            <div className="bg-white shadow-md p-4 rounded-md">
              <blockquote className="text-2xl">
                Their expertise in security solutions has been a game-changer
                for our company.
              </blockquote>
              <cite className="text-lg text-gray-500">
                - Emily C., CTO
              </cite>
        
            </div>
          </div>
        </div>
        <div className="flex justify-center py-3">
          <div className="relative w-full h-[300px] md:w-[800px] md:h-[600px] lg:w-[1200px] lg:h-[700px]">
            <Image
              src="/s8.jpg"
              alt="Security experts at work"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto grid gap-3 my-4">
        <h1 className="flex text-center font-bold text-4xl text-blue-500">
          Our Security Services
        </h1>
        <div className="container mx-auto p-4 px-10 grid gap-4">
          <div className="bg-white shadow-md p-4 rounded-md">
            <h2 className="text-2xl font-bold">Access Control Systems</h2>
            <p className="text-lg">
              Our access control systems provide secure and convenient
              access management for your business.
            </p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-md">
            <h2 className="text-2xl font-bold">CCTV Installation</h2>
            <p className="text-lg">
              Our CCTV installation services provide high-quality video
              surveillance for your business.
            </p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-md">
            <h2 className="text-2xl font-bold">Intrusion Detection</h2>
            <p className="text-lg">
              Our intrusion detection systems provide early warning of
              potential security threats.
            </p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-md">
            <h2 className="text-2xl font-bold">Alarm Systems</h2>
            <p className="text-lg">
              Our alarm systems provide reliable and effective warning of
              potential security threats.
            </p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-md">
            <h2 className="text-2xl font-bold">Security System Maintenance</h2>
            <p className="text-lg">
              Our security system maintenance services ensure your security
              systems are always functioning optimally.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}