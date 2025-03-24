
import { ServicesPage } from "@/components/services/service"

export default function AccessControlServices() {
  const data = [
    {
      type: "",
      image: '/access/ac3.png',
      video:'',
      content: [
        {
          title: 'Secure Your Premises with Access Control Systems',
          description: "Our access control systems help you secure your premises, restricting unauthorized entry and ensuring the safety of your assets and people."
        }
      ]
    },
    {
      type: "keyFeatures",
      image: '/access/ac4.jpg',
      video:'',
      content: [
        {
          title: "Biometric Access Control",
          description: "We offer biometric access control systems that use fingerprints, facial recognition, or iris scanning to authenticate individuals."
        },
        {
          title: "RFID and Keypad-Based Access Control",
          description: "Our RFID and keypad-based access control systems provide secure and convenient access management for your premises."
        },
        {
          title: "Time Attendance Systems Integration",
          description: "We integrate our access control systems with time attendance systems to provide a comprehensive workforce management solution."
        },
        {
          title: "Customized Access Control Solutions",
          description: "Our access control solutions are tailored to meet your specific security needs, ensuring that you get the right level of security for your premises."
        },
      ],
    },
    {
      type: "Why Choose Our Access Control Services?",
      image: '/access/ac1.jpg',
      video:'',
      content: [
        {
          title: "Expertise and Experience",
          description: "Our team of access control experts has years of experience in designing and implementing secure access control systems."
        },
        {
          title: "Customized Solutions",
          description: "We provide customized access control solutions that meet your specific security needs and ensure the safety of your assets and people."
        },
        {
          title: "Cost-Effective",
          description: "Our access control services are cost-effective, providing a secure and reliable solution for your premises without breaking the bank."
        },
      ]
    }
  ]

  return (
    <ServicesPage data={data} />
  )
}
