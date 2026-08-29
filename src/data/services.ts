export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const services: Service[] = [
  {
    id: "emergency",
    title: "Emergency Care",
    description: "24/7 emergency medical assistance with fully equipped trauma centers and life support.",
    iconName: "Siren"
  },
  {
    id: "outpatient",
    title: "Outpatient Consultation",
    description: "Expert consultations across 30+ specialties without the need for hospital admission.",
    iconName: "Users"
  },
  {
    id: "inpatient",
    title: "Inpatient Care",
    description: "Comfortable recovery rooms with continuous medical monitoring and compassionate nursing care.",
    iconName: "Bed"
  },
  {
    id: "diagnostics",
    title: "Diagnostic Services",
    description: "Advanced imaging and radiological services including MRI, CT Scan, X-Ray, and Ultrasound.",
    iconName: "Stethoscope"
  },
  {
    id: "laboratory",
    title: "Laboratory Services",
    description: "Accurate and timely pathology and microbiology testing with automated modern equipment.",
    iconName: "Microscope"
  },
  {
    id: "pharmacy",
    title: "24/7 Pharmacy",
    description: "Round-the-clock access to genuine prescribed medicines and healthcare products.",
    iconName: "Pill"
  },
  {
    id: "surgery",
    title: "Surgery",
    description: "State-of-the-art operation theatres equipped for minimally invasive and complex surgical procedures.",
    iconName: "Scissors"
  },
  {
    id: "icu",
    title: "Intensive Care",
    description: "Advanced ICU, NICU, and PICU facilities for critical patients requiring specialized monitoring.",
    iconName: "HeartPulse"
  },
  {
    id: "ambulance",
    title: "Ambulance Services",
    description: "Rapid response fleet of ALS and BLS ambulances available 24/7 for patient transport.",
    iconName: "Ambulance"
  }
];
