"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadService = async () => {
      try {
        fetch(`/api/services/${id}`);

        if (!res.ok) {
          setService(null);
          return;
        }

        const data = await res.json();
        setService(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) loadService();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!service) return <p>Service not found</p>;

  return (
    <div>
      <img src={service.image} alt={service.service} />
      <h1>{service.service}</h1>
      <p>{service.price}</p>
    </div>
  );
};

export default ServiceDetails;
