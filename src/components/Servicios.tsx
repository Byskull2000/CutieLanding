"use client"
import React, { useEffect, useRef } from "react";
import Card from "./Card";
import ContactButton from "./ContactButton";
import gsap from "gsap";

const Servicios = () => {
  const titleRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(titleRef.current, {
        y: -50, opacity: 0,
    },{
        y: 0,
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
        scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "top 10%",
            toggleActions: "play reverse play reverse"
        }
    })
    
  }, [])
  
  return (
    <section
      id="servicios"
      className="flex flex-col items-center w-4/5 h-auto min-h-screen mx-auto  justify-center gap-4 md:gap-20 mb-4 "
    >
      <h2 className="text-3xl pt-24 sm:text-4xl font-bold p-4 " ref={titleRef}>
        Nuestros servicios
      </h2>

      <div className="flex flex-col md:flex-row gap-2 md:gap-5 w-full">
        <Card
          icon="/cohete.png"
          text="
                Creación de sitios web corporativos y páginas de aterrizaje (landing pages)."
        />
        <Card
          icon="/planeta.png"
          text="
Soporte y mantenimiento para páginas web."
        />
        <Card
          icon="/lapiz.png"
          text="

Servicio de Diseño UX/UI para mejorar la experiencia del usuario en plataformas digitales."
        />
        <Card
          icon="/carrito.png"
          text="

Desarrollo de tiendas en línea (e-commerce) con integración de pagos."
        />
      </div>
      <ContactButton handleClick={() => alert("hola")} />
    </section>
  );
};

export default Servicios;
