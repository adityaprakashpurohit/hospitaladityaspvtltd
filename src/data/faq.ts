export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I book an appointment?",
    answer: "You can request an appointment online through our appointment form or contact the hospital directly via phone."
  },
  {
    id: "faq-2",
    question: "Can I choose a specific doctor?",
    answer: "Yes, where available, you can select a preferred doctor during the appointment booking process."
  },
  {
    id: "faq-3",
    question: "Is emergency care available 24/7?",
    answer: "Yes, the hospital's emergency department is represented as operating 24/7 in this demo."
  },
  {
    id: "faq-4",
    question: "Do you offer health checkups?",
    answer: "Yes, several preventive health packages are available to suit different age groups and needs."
  },
  {
    id: "faq-5",
    question: "How can I contact the hospital?",
    answer: "Use the contact page, phone number, or email provided on our website."
  },
  {
    id: "faq-6",
    question: "Can I cancel an appointment?",
    answer: "For this frontend demo, cancellation is represented through a simulated appointment-management interface."
  }
];
