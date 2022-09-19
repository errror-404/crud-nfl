import { Box, TextField, Stack, Button, Typography } from "@mui/material";
import React from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { BaseApiUrl } from "../api/BaseUrl";
import { useForm } from "../hooks/formHook";

const Editar = () => {
  const location = useLocation();
  const { type } = location.state;
  return <>{type === "estadio" ? <Estadio /> : type === "jugadores" ? <Jugadores /> : type === "equipos" ? <Equipos /> : null}</>;
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
    apellidos,
    edad,
    nacionalidad,
    equipo,
    posicion,
    superbowls,
    id,
    type

  } =
    location.state;

  console.log(location.state)

  const { values, handleInputChange, reset } = useForm({
    nombre: nombre,
    apellidos: apellidos,
    edad: edad,
    nacionalidad: nacionalidad,
    equipo: equipo,
    posicion: posicion,
    superbowls: superbowls

  });

  const onSubmit = () => {
    BaseApiUrl.put("/put-jugadores", {
      nombre: values.nombre,
      apellidos: values.apellidos,
      edad: values.edad,
      nacionalidad: values.nacionalidad,
      equipo: values.equipo,
      posicion: values.posicion,
      superBowls: values.superbowls,
      id: id,
    }).then(() => {
      window.location.replace("/jugadores");
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
          <Typography variant="h6">apellidos</Typography>

          <TextField
            type="text"
            variant="outlined"
            name="apellidos"
            placeholder={apellidos}
            onChange={(e) => handleInputChange(e)}
          />
          <Typography variant="h6">edad</Typography>

          <TextField
            type="text"
            variant="outlined"
            name="edad"
            placeholder={edad}
            onChange={(e) => handleInputChange(e)}
          />
          <Typography variant="h6">nacionalidad</Typography>

          <TextField
            type="text"
            variant="outlined"
            name="nacionalidad"
            placeholder={nacionalidad}
            onChange={(e) => handleInputChange(e)}
          />
          <Typography variant="h6">equipo</Typography>

          <TextField
            type="text"
            variant="outlined"
            name="equipo"
            placeholder={equipo}
            onChange={(e) => handleInputChange(e)}
          />
          <Typography variant="h6">posicion</Typography>

          <TextField
            type="text"
            variant="outlined"
            name="posicion"
            placeholder={posicion}
            onChange={(e) => handleInputChange(e)}
          />
          <Typography variant="h6">superbowls</Typography>

          <TextField
            type="text"
            variant="outlined"
            name="superbowls"
            placeholder={superbowls}
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

const Equipos = () => {
  const location = useLocation();
  const {
    nombre,
    estadio,
    campeonatos,
    liga,
    division,
    id,
    type

  } =
    location.state;

  console.log(location.state)

  const { values, handleInputChange, reset } = useForm({
    nombre: nombre,
    estadio: estadio,
    campeonatos: campeonatos,
    liga: liga,
    division: division,


  });

  const onSubmit = () => {
    BaseApiUrl.put("/put-equipos", {
      nombre: values.nombre,
      estadio: values.estadio,
      campeonatos: values.campeonatos,
      liga: values.liga,
      division: values.division,
      id: id,
    }).then(() => {
      window.location.replace("/equipos");
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
          <Typography variant="h6">estadio</Typography>

          <TextField
            type="text"
            variant="outlined"
            name="estadio"
            placeholder={estadio}
            onChange={(e) => handleInputChange(e)}
          />
          <Typography variant="h6">campeonato</Typography>

          <TextField
            type="text"
            variant="outlined"
            name="campeonatos"
            placeholder={campeonatos}
            onChange={(e) => handleInputChange(e)}
          />
          <Typography variant="h6">liga</Typography>

          <TextField
            type="text"
            variant="outlined"
            name="liga"
            placeholder={liga}
            onChange={(e) => handleInputChange(e)}
          /><Typography variant="h6">division</Typography>

          <TextField
            type="text"
            variant="outlined"
            name="division"
            placeholder={division}
            onChange={(e) => handleInputChange(e)}
          />



          <Button variant="outlined" onClick={onSubmit}>
            Editar
          </Button>
        </Stack>
      </Box>
    </>);
}

export default Editar;
