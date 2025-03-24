
import { ServicesPage } from "@/components/services/service"

export default function SecuritySystemMaintenanceServices() {
  const data = [
    {
      type: "Security System Maintenance",
      image: '/maintenance/m4.jpg',
      video:'',
      content: [
        {
          title: 'Ensure Uninterrupted Security Coverage with Regular Maintenance',
          description: "Our security system maintenance and support services ensure that your security systems are functioning correctly and efficiently, providing uninterrupted security coverage for your premises."
        }
      ]
    },
    {
      type: "keyFeatures",
      image: '/maintenance/m1.jpeg',
      video:'',
      content: [
        {
          title: "Regular System Maintenance",
          description: "We provide regular system maintenance to ensure that your security systems are functioning correctly and efficiently."
        },
        {
          title: "Software Updates",
          description: "Our team of experts provides software updates to ensure that your security systems are up-to-date and secure."
        },
        {
          title: "Troubleshooting",
          description: "We provide troubleshooting services to identify and resolve any issues with your security systems."
        },
        {
          title: "Hardware Repairs",
          description: "Our team of experts provides hardware repairs to ensure that your security systems are functioning correctly and efficiently."
        },
      ],
    },
    {
      type: "Why Choose Our Security System Maintenance & Support Services?",
      image: '/maintenance/m5.png',
      video:'',
      content: [
        {
          title: "Expertise and Experience",
          description: "Our team of security system experts has years of experience in maintaining and supporting security systems, ensuring that you receive the best possible service."
        },
        {
          title: "Customized Solutions",
          description: "We provide customized maintenance and support solutions that meet your specific security needs, ensuring that you receive the right level of support for your premises."
        },
        {
          title: "Cost-Effective",
          description: "Our security system maintenance and support services are cost-effective, providing a reliable and secure solution for your premises without breaking the bank."
        },
      ]
    }
  ]

  return (
    <ServicesPage data={data} />
  )
}
