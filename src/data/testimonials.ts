export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  review: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya",
    city: "Bhubaneswar",
    rating: 5,
    review: "The staff was professional and kind throughout our visit. The entire process felt organized and reassuring. Dr. Sharma took the time to explain everything clearly.",
    avatar: "P"
  },
  {
    id: "t2",
    name: "Rahul",
    city: "Cuttack",
    rating: 5,
    review: "I brought my son here for a pediatric consultation. The environment was very child-friendly, and Dr. Patel was extremely patient and gentle.",
    avatar: "R"
  },
  {
    id: "t3",
    name: "Sunita",
    city: "Puri",
    rating: 5,
    review: "The emergency response team was incredibly fast. I'm grateful for the prompt care and the clean facilities provided during our stay.",
    avatar: "S"
  },
  {
    id: "t4",
    name: "Anand",
    city: "Bhubaneswar",
    rating: 4,
    review: "Excellent diagnostic facilities. Getting my health package done was a breeze, and the reports were delivered on time without any hassle.",
    avatar: "A"
  }
];
