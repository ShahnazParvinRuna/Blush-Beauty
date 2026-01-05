
const services = [
  {
    id: 1,
    service: "Classic Manicure",
    price: "$10",
    image: "https://i.ibb.co/JRWc8qVC/Classic-Manicure.jpg",
  },
  {
    id: 2,
    service: "Gel Nail Extension",
    price: "$20",
    image: "https://i.ibb.co/NnsH8drh/Gel-Nail-Extension.jpg",
  },
  {
    id: 3,
    service: "Pedicure Spa",
    price: "$15",
    image: "https://i.ibb.co/BHgLmLNG/Pedicure-Spa.jpg",
  },
  {
    id: 4,
    service: "Bridal Makeup",
    price: "$90",
    image: "https://i.ibb.co/KcN0SJSJ/bride-getting-her-make-up-ready.jpg",
  },
  {
    id: 5,
    service: "Party Makeup",
    price: "$25",
    image: "https://i.ibb.co/QR98JB2/Party-Makeup.jpg",
  },
  {
    id: 6,
    service: "Facial Cleanup",
    price: "$15",
    image: "https://i.ibb.co/Z1xJ9BZJ/Facial-Cleanup.jpg",
  },
  {
    id: 7,
    service: "Haircut & Styling",
    price: "$12",
    image: "https://i.ibb.co/ns3wK3wf/Haircut-Styling.jpg",
  },
  {
    id: 8,
    service: "Hair Spa & Treatment",
    price: "$20",
    image: "https://i.ibb.co/Bxw8QZJ/Hair-Spa-Treatment.jpg",
  },
];

export default services;

export async function GET(request) {
  return Response.json({
    status: 200,
    message: "parlore api created",
  });
}
