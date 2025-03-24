
import { ServicesPage } from "@/components/services/service"

export default function AlarmSystemsServices() {
  const data = [
    {
      type: "",
      image: '/alarm/a1.jpg',
      video:'',
      content: [
        {
          title: 'Enhance Safety with Alarm Systems and Intrusion Detection',
          description: "Our alarm systems and intrusion detection services provide comprehensive safety solutions for homes, businesses, and public spaces, ensuring the protection of your assets and people."
        }
      ]
    },
    {
      type: "keyFeatures",
      image: '/alarm/a2.jpg',
      video:'',
      content: [
        {
          title: "Motion Sensors",
          description: "Detects movement and alerts you or our monitoring team of potential intruders."
        },
        {
          title: "Fire Alarms",
          description: "Detects smoke and heat, alerting you or our monitoring team of potential fires."
        },
        {
          title: "Burglar Alarms",
          description: "Detects unauthorized entry, alerting you or our monitoring team of potential intruders."
        },
        {
          title: "24/7 Monitoring Services",
          description: "Our monitoring team is always available to respond to alerts and notify emergency services if necessary."
        },
      ],
    },
    {
      type: "Why Choose Our Alarm Systems Services?",
      image: '/alarm/a3.jpg',
      video:'',
      content: [
        {
          title: "Enhanced Safety and Security",
          description: "Our alarm systems and intrusion detection services provide comprehensive safety solutions, ensuring the protection of your assets and people."
        },
        {
          title: "Reduced Risk of Loss",
          description: "Our alarm systems and intrusion detection services reduce the risk of loss due to theft, fire, or other safety hazards."
        },
        {
          title: "Increased Peace of Mind",
          description: "Our alarm systems and intrusion detection services provide you with increased peace of mind, knowing that your assets and people are protected."
        },
      ]
    }
  ]

  return (
    <ServicesPage data={data} />
  )
}
