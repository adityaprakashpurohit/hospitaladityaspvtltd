export interface Department {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  iconName: string;
  specialistCount: number;
  services: string[];
}

export const departments: Department[] = [
  {
    id: "cardiology",
    name: "Cardiology",
    description: "Comprehensive heart care from diagnosis through treatment and recovery.",
    longDescription: "Advanced cardiovascular care delivered by experienced specialists using modern diagnostic and treatment technologies. Our cardiology department is equipped to handle everything from preventive screenings to complex cardiac procedures.",
    iconName: "HeartPulse",
    specialistCount: 8,
    services: [
      "Cardiac consultation",
      "ECG",
      "Echocardiography",
      "Stress testing",
      "Preventive heart care",
      "Cardiac rehabilitation"
    ]
  },
  {
    id: "neurology",
    name: "Neurology",
    description: "Expert care for brain, spine, and nervous system disorders.",
    longDescription: "Our neurology department offers comprehensive diagnostic and therapeutic services for a wide range of neurological conditions, including stroke, epilepsy, and movement disorders.",
    iconName: "Brain",
    specialistCount: 5,
    services: [
      "Neurological consultation",
      "EEG",
      "Stroke management",
      "Headache clinic",
      "Epilepsy care",
      "Neuro-rehabilitation"
    ]
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    description: "Advanced treatment for bones, joints, and musculoskeletal conditions.",
    longDescription: "We provide comprehensive orthopedic care, from sports injuries to complex joint replacements. Our team is dedicated to restoring your mobility and relieving pain.",
    iconName: "Bone",
    specialistCount: 7,
    services: [
      "Joint replacement surgery",
      "Fracture management",
      "Sports medicine",
      "Spine care",
      "Arthroscopy",
      "Physiotherapy"
    ]
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    description: "Compassionate healthcare for infants, children, and adolescents.",
    longDescription: "Our pediatric department provides a child-friendly environment with specialists dedicated to the physical, emotional, and social health of children from birth through young adulthood.",
    iconName: "Baby",
    specialistCount: 6,
    services: [
      "Well-child checkups",
      "Vaccinations",
      "Neonatal intensive care",
      "Pediatric emergencies",
      "Growth monitoring",
      "Nutrition counseling"
    ]
  },
  {
    id: "gynecology",
    name: "Gynecology",
    description: "Comprehensive women's healthcare at every stage of life.",
    longDescription: "We offer specialized care for women, including preventive screenings, maternity services, and treatment for reproductive health issues in a comfortable and private setting.",
    iconName: "Activity", // Fallback for women's health
    specialistCount: 6,
    services: [
      "Maternity care",
      "Preventive health screenings",
      "Family planning",
      "Menopause management",
      "Minimally invasive surgery",
      "Infertility counseling"
    ]
  },
  {
    id: "general-medicine",
    name: "General Medicine",
    description: "Primary care, diagnosis, and treatment of adult diseases.",
    longDescription: "Our general medicine department serves as the first point of contact for adult patients, providing comprehensive evaluation, diagnosis, and management of various health conditions.",
    iconName: "Stethoscope",
    specialistCount: 12,
    services: [
      "Routine health checkups",
      "Fever and infection management",
      "Diabetes management",
      "Hypertension care",
      "Thyroid disorders",
      "Adult vaccination"
    ]
  }
];
