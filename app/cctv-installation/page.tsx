
import { ServicesPage } from "@/components/services/service"

export default function CCTVInstallationServices() {
  const data = [
    {
      type: "CCTV Installation & Monitoring Services",
      image: '/cctv/c5.jpg',
      video:'',
      content: [
        {
          title: 'Enhance Security with CCTV Installation & Monitoring',
          description: "Our CCTV installation and monitoring services provide a robust security solution for homes, businesses, and public spaces, ensuring the safety of your assets and people."
        }
      ]
    },
    {
      type: "keyFeatures",
      image: '/cctv/c1.jpg',
      video:'',
      content: [
        {
          title: "High-Definition CCTV Surveillance Systems",
          description: "We install high-definition CCTV surveillance systems that provide clear and detailed footage, helping you identify potential security threats."
        },
        {
          title: "Remote Monitoring and Real-Time Alerts",
          description: "Our remote monitoring services provide real-time alerts and notifications, ensuring that you are informed of any potential security breaches or incidents."
        },
        {
          title: "Customized CCTV Solutions",
          description: "We provide customized CCTV solutions tailored to your specific security needs, ensuring that you get the right level of security for your premises."
        },
        {
          title: "Expert Installation and Maintenance",
          description: "Our team of experts provides professional installation and maintenance services, ensuring that your CCTV system is functioning correctly and efficiently."
        },
      ],
    },
    {
      type: "Why Choose Our CCTV Installation & Monitoring Services?",
      image: '/cctv/c3.jpg',
      video:'',
      content: [
        {
          title: "Expertise and Experience",
          description: "Our team of CCTV experts has years of experience in designing and installing robust CCTV systems, ensuring accurate and reliable results."
        },
        {
          title: "Customized Solutions",
          description: "We provide customized CCTV solutions that meet your specific security needs, ensuring that you get the right level of security for your premises."
        },
        {
          title: "Cost-Effective",
          description: "Our CCTV installation and monitoring services are cost-effective, providing a robust security solution without breaking the bank."
        },
      ]
    }
  ]

  return (
    <ServicesPage data={data} />
  )
}
