import { Box, TextField, Stack, Button, Typography } from "@mui/material";
import React from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { BaseApiUrl } from "../api/BaseUrl";
import { useForm } from "../hooks/formHook";

const Editar = () => {
  const location = useLocation();
  const { type } = location.state;
  return <>{type === "estadio" ? <Estadio /> : null}</>;
};

const Estadio = () => {
  const location = useLocation();
  const { nombre, equipo, localidad, capacidad, apertura, id, type } =
    location.state;

  const { values, handleInputChange, reset } = useForm({
    nombre: nombre,
    equipo: equipo,
    localidad: localidad,
    capacidad: capacidad,
    apertura: apertura,
  });

  const onSubmit = () => {
    BaseApiUrl.put("/put-estadios", {
      nombre: values.nombre,
      equipo: values.equipo,
      localidad: values.localidad,
      capacidad: values.capacidad,
      apertura: values.apertura,
      id: id,
    }).then(() => {
      window.location.replace("/estadios");
    });
  };

  return (
    <>
      <Box>
        <h1>Editar {type}</h1>
        <Stack spacing={3}>
          <Typography variant="h6">Nombre</Typography>
          <TextField
            type="text"
            variant="outlined"
            name="nombre"
            placeholder={nombre}
            onChange={(e) => handleInputChange(e)}
          />
          <Typography variant="h6">Equipo</Typography>

          <TextField
            type="text"
            variant="outlined"
            name="equipo"
            placeholder={equipo}
            onChange={(e) => handleInputChange(e)}
          />
          <Typography variant="h6">Localidad</Typography>

          <TextField
            type="text"
            variant="outlined"
            name="localidad"
            placeholder={localidad}
            onChange={(e) => handleInputChange(e)}
          />
          <Typography variant="h6">Capacidad</Typography>

          <TextField
            type="text"
            variant="outlined"
            name="capacidad"
            placeholder={capacidad}
            onChange={(e) => handleInputChange(e)}
          />
          <Typography variant="h6">Apertura</Typography>

          <TextField
            type="text"
            variant="outlined"
            name="apertura"
            placeholder={apertura}
            onChange={(e) => handleInputChange(e)}
          />
          <Button variant="outlined" onClick={onSubmit}>
            Editar
          </Button>
        </Stack>
      </Box>
    </>
  );
};

const Jugadores = () => {
  const location = useLocation();
  const { 
    nombre,
    apellido,
    posicion,
    equipo,
    dorsal,
    
  } =
    location.state;

  const { values, handleInputChange, reset } = useForm({
    nombre: nombre,
    equipo: equipo,
    localidad: localidad,
    capacidad: capacidad,
    apertura: apertura,
  });

  const onSubmit = () => {
    BaseApiUrl.put("/put-estadios", {
      nombre: values.nombre,
      equipo: values.equipo,
      localidad: values.localidad,
      capacidad: values.capacidad,
      apertura: values.apertura,
      id: id,
    }).then(() => {
      window.location.replace("/estadios");
    });
  };

  return (
    <>
      <Box>
        <h1>Editar {type}</h1>
        <Stack spacing={3}>
          <Typography variant="h6">Nombre</Typography>
          <TextField
            type="text"
            variant="outlined"
            name="nombre"
            placeholder={nombre}
            onChange={(e) => handleInputChange(e)}
          />
          <Typography variant="h6">Equipo</Typography>

          <TextField
            type="text"
            variant="outlined"
            name="equipo"
            placeholder={equipo}
            onChange={(e) => handleInputChange(e)}
          />
          <Typography variant="h6">Localidad</Typography>

          <TextField
            type="text"
            variant="outlined"
            name="localidad"
            placeholder={localidad}
            onChange={(e) => handleInputChange(e)}
          />
          <Typography variant="h6">Capacidad</Typography>

          <TextField
            type="text"
            variant="outlined"
            name="capacidad"
            placeholder={capacidad}
            onChange={(e) => handleInputChange(e)}
          />
          <Typography variant="h6">Apertura</Typography>

          <TextField
            type="text"
            variant="outlined"
            name="apertura"
            placeholder={apertura}
            onChange={(e) => handleInputChange(e)}
          />
          <Button variant="outlined" onClick={onSubmit}>
            Editar
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Editar;
