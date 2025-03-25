
'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

export const ServicesPage = ({ data }: { data: { type: string; image: string; video: string, content: { title: string; description: string }[] }[] }) => {
  const router = useRouter()

  return (
    <main>
      <section>
        <div className="relative w-full h-[72vh]" style={{ backgroundColor: '#f0f0f0' }}>
          <Image src={data[0].image} alt="VPN security application on laptop and smartphone" fill className="object-cover" style={{ borderRadius: '10px' }} />
          <h1 className="absolute top-20 left-20 text-black text-5xl font-bold" style={{ zIndex: 1 }}>{data[0].type}</h1>
          <div className="flex justify-center">
            <iframe className="w-[100%] md:w-[60%] lg:w-[40%] h-60 md:h-80 lg:h-80 rounded-lg absolute top-60" width="560" height="315" src={data[0].video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-2" style={{ backgroundColor: '#ffffff', padding: '20px' }}>
        <br></br>
        <br></br>
        <p className="container mx-auto text-2xl" style={{ fontSize: '24px', fontWeight: 'bold' }}>
          <strong>{data[0].content[0].title}:</strong> {data[0].content[0].description}
        </p>
        <br></br>
        {data.slice(1).map((miniData, index) => (
          <div key={index}>
            {miniData.image && (
              <div className="flex justify-center py-3">
                <div className="relative w-[50vh] h-[50vh]" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                  <Image src={miniData.image} alt="VPN security application on laptop and smartphone" fill className="object-cover" />
                </div>
              </div>
            )}
            {miniData.type && (
              <div>
                <h1 className="text-2xl font-bold" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                  <strong>{miniData.type}</strong>
                </h1>
                <ul className="pl-6 pt-4 space-y-2">
                  {miniData.content.map((feature, idx) => (
                    <li key={idx} className="text-3xl flex items-start gap-3">
                      <span className="text-2xl font-bold">{idx + 1}.</span>
                      <div>
                        <p className="text-xl text-black" style={{ fontSize: '18px', color: '#000000' }}>
                          <strong className="text-xl font-semibold text-black">{feature.title}: </strong> {feature.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
        <div className="flex justify-center mt-6 py-4">
          <button className="bg-red-400 text-white py-3 px-6 cursor-pointer rounded-lg" onClick={() => router.push('contact')} style={{ backgroundColor: '#ff0000', color: '#ffffff', padding: '10px 20px', borderRadius: '10px' }}>Contact Us</button>
        </div>
      </section>
    </main>
  );
};
