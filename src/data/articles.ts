export interface Article {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export const articles: Article[] = [
  {
    id: "understanding-blood-pressure",
    title: "Understanding Blood Pressure: What Your Numbers Mean",
    category: "Cardiology",
    shortDescription: "High blood pressure is often called a silent killer. Learn how to read your numbers and when to seek medical help.",
    content: "Blood pressure is the force of blood pushing against the walls of your arteries. It's recorded as two numbers: systolic (the top number) and diastolic (the bottom number). Normal blood pressure for most adults is defined as a systolic pressure of less than 120 and a diastolic pressure of less than 80. High blood pressure, or hypertension, occurs when this force is consistently too high. Over time, uncontrolled hypertension can lead to serious health complications like heart attacks, stroke, and kidney disease. Lifestyle changes such as a balanced diet (like the DASH diet), regular physical activity, maintaining a healthy weight, and limiting alcohol and sodium intake play a crucial role in managing blood pressure. Regular checkups are essential because hypertension often has no symptoms.",
    author: "Dr. Ananya Sharma",
    date: "August 12, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "childrens-preventive-health",
    title: "Children's Preventive Health: A Guide for Parents",
    category: "Pediatrics",
    shortDescription: "Discover the essential milestones and checkups your child needs from infancy through adolescence.",
    content: "Preventive health care is vital for children to ensure they achieve proper growth and development milestones. Well-child visits allow pediatricians to monitor physical, emotional, and social development. Vaccinations are a critical part of these visits, protecting children from severe preventable diseases. Parents should also pay attention to nutrition, ensuring a diet rich in fruits, vegetables, whole grains, and lean proteins, while limiting added sugars. Screen time should be monitored and limited, encouraging physical play and reading instead. Establishing good sleep hygiene early on is also crucial for cognitive and physical development. Don't hesitate to discuss any behavioral concerns or developmental delays with your pediatrician during routine visits.",
    author: "Dr. Priya Patel",
    date: "July 28, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "when-to-see-orthopedic",
    title: "When Should You See an Orthopedic Specialist?",
    category: "Orthopedics",
    shortDescription: "Don't ignore joint pain. Here are the signs that indicate it's time to consult an orthopedic doctor.",
    content: "Musculoskeletal pain is common, but it shouldn't be a normal part of daily life. You should consider seeing an orthopedic specialist if you experience difficulty performing daily activities (like climbing stairs), chronic pain lasting more than 12 weeks, limited range of motion in joints, or instability when walking or standing. Sudden injuries, such as a suspected fracture, dislocation, or severe sprain, require immediate orthopedic evaluation. Specialists can diagnose conditions using advanced imaging and offer both non-surgical (like physical therapy and medication) and surgical treatments. Ignoring joint pain, especially related to conditions like osteoarthritis, can lead to further joint deterioration, so early consultation is always recommended.",
    author: "Dr. Rajesh Kumar",
    date: "August 05, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1552196563-5527ee32663b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "understanding-diabetes",
    title: "Understanding Diabetes and Lifestyle Management",
    category: "General Medicine",
    shortDescription: "A comprehensive guide to managing diabetes through diet, exercise, and medical care.",
    content: "Diabetes is a chronic condition that affects how your body turns food into energy. When you have diabetes, your body either doesn't make enough insulin or can't use the insulin it makes as well as it should. Managing diabetes requires a multifaceted approach. A healthy diet, focusing on portion control and complex carbohydrates, is essential to prevent blood sugar spikes. Regular physical activity helps your body use insulin more effectively. Monitoring blood glucose levels regularly is crucial to understand how your body responds to different foods and activities. Taking prescribed medications consistently and keeping up with regular medical appointments can help prevent long-term complications affecting the eyes, kidneys, and nerves.",
    author: "Dr. Sanjay Gupta",
    date: "August 20, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];
