import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function KnowMore() {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full p-16 pt-0 justify-center items-center text-center">
      <p className="mt-4 text-xl font-bold text-center">
        At Farazkhan Security Ltd., we deliver comprehensive security solutions that empower businesses to protect their assets, people, and interests.
      </p>
      <p className="mt-4 text-lg font-bold text-center">
        With years of experience and a dedicated team of security professionals, we ensure exceptional results every time. Our commitment to quality, reliability, and customer satisfaction sets us apart in the industry.
      </p>
      <p className="mt-4 text-lg font-bold text-center">
        Whether you need to secure your premises, protect your data, or ensure compliance with regulatory requirements, we have the expertise to help. Our solutions are designed to be scalable, secure, and tailored to your specific business needs.
      </p>
      <Button
        className="mt-6 px-6 py-6 text-lg bg-red-400 hover:bg-red-500 cursor-pointer"
        onClick={() => router.push("/contact")}
      >
        Contact Us
      </Button>
    </div>
  );
}
