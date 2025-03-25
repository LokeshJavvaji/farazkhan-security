'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

export const ServicesPage = ({ data }: { data: { type: string; image: string; video :string, content: { title: string; description: string }[] }[] }) => {
    const router = useRouter()
    return (
        <main>
            <section>
                <div className="relative w-full h-[75vh]">
                    <Image
                        src={data[0].image}
                        alt="VPN security application on laptop and smartphone"
                        fill
                        className="object-cover"
                    />
                    <h1 className="absolute top-10 left-20 text-white text-5xl font-bold">{data[0].type}</h1>
                    <div className="flex justify-center">
                    <iframe className="w-[100%] md:w-[60%] lg:w-[40%] h-60 md:h-80 lg:h-80 rounded-lg absolute top-40"  width="560" height="315" src={data[0].video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-4 py-2">
                <p className="container mx-auto">
                    <strong>{data[0].content[0].title}:</strong> {data[0].content[0].description}
                </p>

                {
                    data.slice(1).map((miniData, index) => (
                        <div key={index}>
                            {miniData.image && (
                                <div className="flex justify-center py-3">
                                    <div className="relative w-[100%] h-[300px]">
                                        <Image
                                            src={miniData.image}
                                            alt="VPN security application on laptop and smartphone"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            )}

                            {miniData.type && (
                                <div>
                                    <h1>
                                        <strong>{miniData.type}</strong>
                                    </h1>
                                    <ul className="pl-6 pt-4 space-y-2">
                                        {miniData.content.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="font-bold">{idx + 1}.</span>
                                                <div>
                                                    <p>
                                                        <strong className="font-semibold text-black">{feature.title}: </strong>
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))
                }

                <div className="flex justify-center mt-6 py-4">
                    <button className=" bg-red-400 text-white py-3 px-6 cursor-pointer rounded-lg" onClick={() => router.push('contact')}>Contact Us</button>
                </div>
            </section>
        </main>
    );
};
