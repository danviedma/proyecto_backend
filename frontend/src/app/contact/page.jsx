
"use client";

import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

function PaginadeContacto() {
  const router = useRouter();

  useEffect(() => {
    solicitarInformacion();
  }, []);

  const solicitarInformacion = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Contáctame!",
      html:
      '<input id="swal-input1" class="swal2-input w-80 focus:border-blue-500" placeholder="Tu nombre">' +
      '<input id="swal-input2" class="swal2-input w-80 focus:border-blue-500" placeholder="Tu email" type="email">' +
      '<textarea id="swal-input3" class="swal2-input w-80 border border-gray-300 rounded p-2 mt-4 focus:border-blue-500" placeholder="Aqui tu comentario"></textarea>',
      focusConfirm: false,
      preConfirm: () => {
        const nombre = document.getElementById("swal-input1").value;
        const email = document.getElementById("swal-input2").value;
        const consulta = document.getElementById("swal-input3").value;

        // Verificar si el email es válido
        if (!nombre || !/^[a-zA-Z\s]+$/.test(nombre.trim())) {
          Swal.showValidationMessage("Por favor, ingresa un nombre válido");
          return false;
        }

        if (!email || !/\S+@\S+\.\S+/.test(email.trim())) {
          Swal.showValidationMessage("Por favor, ingresa un email válido");
          return false;
        }

        // Verificar si algún campo está vacío
        if (!consulta) {
          Swal.showValidationMessage("Por favor, completa todos los campos");
          return false;
        }

        return {
          nombre,
          email,
          consulta,
        };
      },
      onClose: () => {
        // Se ejecuta cuando se cierra la alerta (incluso si se cierra al hacer clic fuera de la alerta)
        router.push("/");
      },
    });

    if (formValues && formValues.email) {
      // Hacer algo con los valores del formulario si es necesario
      mostrarAlerta(formValues);
    } else {
      // Si se cierra la alerta haciendo clic fuera, también deberías redirigir al index
      router.push("/");
    }
  };

  const mostrarAlerta = ({ nombre, email }) => {
    Swal.fire({
      title: "Recibí tu sugerencia!",
      html: `Gracias ${nombre} por tu sugerencia. Me comunicaré contigo ${email}!<br>`,
      icon: "success",
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        router.push("/");
      }
    });
  };

  return <div></div>;
}

export default PaginadeContacto;