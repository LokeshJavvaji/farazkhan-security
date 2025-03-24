export default function Welcome() {
  return (
    <section className="grid md:flex-row items-center justify-center gap-8 p-6 container mx-auto">
      <div className="w-full text-center md:text-left">
        <h1 className="text-center text-3xl md:text-4xl gap-5 p-7 font-bold">
          Protecting Your World with Farazkhan Security Ltd.
        </h1>
        <p className="mt-9 text-xl text-black-600">
          At Farazkhan Security Ltd., we provide comprehensive security solutions to safeguard your business, assets, and people. Our team of experts offers customized security services, including access control, CCTV installation, intrusion detection, alarm systems, and more.
        </p>
        <div className="w-full p-10">
          <iframe
            className="w-full h-60 md:h-80 lg:h-96 rounded-lg"
            src="https://www.youtube.com/embed/BGMG7AIKNRg?autoplay=1&loop=1&playlist=BGMG7AIKNRg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <p className="mt-9 text-xl text-black-600 text-center">
          With years of experience in the security industry, we have developed a deep understanding of our clients&apos; needs. We offer tailored security solutions, exceptional customer service, and a commitment to quality that sets us apart.
        </p>
      </div>
    </section>
  );
}
