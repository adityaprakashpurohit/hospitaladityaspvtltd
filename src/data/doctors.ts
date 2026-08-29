export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  department: string;
  role: string;
  experience: number;
  languages: string[];
  consultationFee: number;
  image: string;
  availableDays: string[];
  specialties: string[];
  biography: string;
  education: string[];
}

export const doctors: Doctor[] = [
  {
    id: "dr-ananya-sharma",
    name: "Dr. Ananya Sharma",
    qualification: "MD, DM Cardiology",
    department: "Cardiology",
    role: "Senior Consultant — Cardiology",
    experience: 18,
    languages: ["English", "Hindi", "Odia"],
    consultationFee: 800,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    availableDays: ["Monday", "Wednesday", "Friday"],
    specialties: ["Preventive Cardiology", "Cardiac Care", "Echocardiography"],
    biography: "Dr. Ananya Sharma is a highly experienced cardiologist with over 18 years of expertise in diagnosing and treating cardiovascular diseases. She is dedicated to providing patient-centered care and utilizing the latest medical advancements.",
    education: [
      "MBBS - SCB Medical College, Cuttack",
      "MD (Internal Medicine) - AIIMS, New Delhi",
      "DM (Cardiology) - AIIMS, New Delhi"
    ]
  },
  {
    id: "dr-rajesh-kumar",
    name: "Dr. Rajesh Kumar",
    qualification: "MS, MCh Orthopedics",
    department: "Orthopedics",
    role: "Head of Orthopedics",
    experience: 22,
    languages: ["English", "Hindi", "Bengali"],
    consultationFee: 1000,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    specialties: ["Joint Replacement", "Sports Injuries", "Spine Surgery"],
    biography: "Dr. Rajesh Kumar leads our Orthopedics department. With 22 years of surgical experience, he specializes in complex joint replacements and sports medicine, helping patients regain mobility and quality of life.",
    education: [
      "MBBS - CMC Vellore",
      "MS (Orthopedics) - PGIMER, Chandigarh",
      "Fellowship in Joint Replacement - UK"
    ]
  },
  {
    id: "dr-priya-patel",
    name: "Dr. Priya Patel",
    qualification: "MD Pediatrics",
    department: "Pediatrics",
    role: "Senior Pediatrician",
    experience: 12,
    languages: ["English", "Hindi", "Gujarati"],
    consultationFee: 600,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    specialties: ["Neonatology", "Childhood Asthma", "Vaccination"],
    biography: "Dr. Priya Patel is a compassionate pediatrician who specializes in infant and child health. She is known for her gentle approach and commitment to preventive care for children of all ages.",
    education: [
      "MBBS - King Edward Memorial Hospital",
      "MD (Pediatrics) - Seth GS Medical College"
    ]
  },
  {
    id: "dr-vikram-singh",
    name: "Dr. Vikram Singh",
    qualification: "MD, DM Neurology",
    department: "Neurology",
    role: "Consultant Neurologist",
    experience: 15,
    languages: ["English", "Hindi"],
    consultationFee: 900,
    image: "https://images.unsplash.com/photo-1537368910025-702800faa86b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    availableDays: ["Monday", "Thursday", "Saturday"],
    specialties: ["Stroke Management", "Epilepsy", "Headache Disorders"],
    biography: "Dr. Vikram Singh is an expert in neurological disorders. He has extensive experience in managing stroke patients and chronic headache disorders, offering comprehensive care plans tailored to individual needs.",
    education: [
      "MBBS - Maulana Azad Medical College",
      "MD (Medicine) - Delhi University",
      "DM (Neurology) - NIMHANS, Bangalore"
    ]
  }
];
