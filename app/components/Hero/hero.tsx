import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 md:px-8">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/s5.jpg" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/0"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-3xl text-white">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          Protecting Your World with Comprehensive Security Solutions
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white-300">
          Your Trusted Partner in Security Excellence
        </p>
        <Button
          className="mt-6 px-6 py-6 text-lg bg-red-400 hover:bg-red-500"
          onClick={() => router.push("/about-us")}
        >
          Learn More
        </Button>
      </div>
    </section>
  );
}