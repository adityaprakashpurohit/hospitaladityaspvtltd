export interface HealthPackage {
  id: string;
  name: string;
  price: number;
  description: string;
  includedTests: string[];
  suitableFor: string;
  preparationInstructions: string;
  duration: string;
  reportAvailability: string;
}

export const healthPackages: HealthPackage[] = [
  {
    id: "basic-wellness",
    name: "BASIC WELLNESS",
    price: 1999,
    description: "A fundamental health screening designed to evaluate your general health status and detect common health issues early.",
    includedTests: [
      "Complete Blood Count (CBC)",
      "Fasting Blood Sugar",
      "Lipid Profile",
      "Liver Function Test (SGPT/SGOT)",
      "Kidney Function Test (Creatinine/Urea)",
      "General Physician Consultation"
    ],
    suitableFor: "Individuals below 30 years looking for a routine annual health checkup.",
    preparationInstructions: "10-12 hours of overnight fasting is required. Only water is permitted.",
    duration: "Approximately 2-3 hours",
    reportAvailability: "Same day evening or next working day."
  },
  {
    id: "complete-health",
    name: "COMPLETE HEALTH",
    price: 3999,
    description: "A comprehensive assessment covering vital organs and essential vitamins to give a clear picture of your overall well-being.",
    includedTests: [
      "All tests in Basic Wellness",
      "Thyroid Profile (T3, T4, TSH)",
      "Vitamin D & B12 Levels",
      "HbA1c (Average Blood Sugar)",
      "ECG (Electrocardiogram)",
      "Chest X-Ray",
      "Specialist Consultation (MD Medicine)"
    ],
    suitableFor: "Adults above 30 years or those with a family history of lifestyle diseases.",
    preparationInstructions: "10-12 hours of overnight fasting is required.",
    duration: "Approximately 3-4 hours",
    reportAvailability: "Within 24 hours."
  },
  {
    id: "executive-health",
    name: "EXECUTIVE HEALTH",
    price: 7999,
    description: "An advanced, full-body evaluation designed for busy professionals, including detailed cardiac and lifestyle assessments.",
    includedTests: [
      "All tests in Complete Health",
      "Echocardiography",
      "TMT (Treadmill Test)",
      "Ultrasound Whole Abdomen",
      "Pulmonary Function Test (PFT)",
      "Comprehensive physician consultation",
      "Diet and Lifestyle assessment"
    ],
    suitableFor: "Professionals above 40 years, executives, and those seeking an in-depth health analysis.",
    preparationInstructions: "10-12 hours of overnight fasting. Wear comfortable clothing and shoes for the TMT.",
    duration: "Approximately 5-6 hours",
    reportAvailability: "Comprehensive report within 48 hours."
  }
];
