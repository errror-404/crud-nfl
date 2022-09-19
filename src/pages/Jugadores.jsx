import { Box, Button, Modal, Stack, TextField } from "@mui/material";
import React from "react";
import { BaseApiUrl } from "../api/BaseUrl";
import CustomDataGrid from "../components/CustomDataGrid";
import { jugadoresColumns } from "../data/jugadoresColumn";
import { useForm } from "../hooks/formHook";
import { useGetData } from "../hooks/getDataHook";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Jugadores = () => {
  const navigate = useNavigate();
  const { data, loading } = useGetData("http://localhost:3001/get-jugadores");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const deleteItem = (id) => {
    // console.log(id)
    BaseApiUrl.delete(`/delete-jugadores${id}`).then(() => {
      window.location.reload();
    });
  };

  const updateItem = (cellValues) => {
    navigate("/jugadores/editar", {
      state: {
        nombre: cellValues.nombre,
        apellidos: cellValues.apellidos,
        edad: cellValues.edad,
        posicion: cellValues.posicion,
        equipo: cellValues.equipo,
        nacionalidad: cellValues.nacionalidad,
        superbowls: cellValues.superbowls,
        id: cellValues.id,
        type: "jugadores",
      },
    });
    // console.log(cellValues);
  };

  const jugadoresColumns = [
    {
      field: "nombre",
      headerName: "Nombre",
      width: 150,
    },
    {
      field: "apellidos",
      headerName: "Apellidos",
      width: 150,
    },
    {
      field: "edad",
      headerName: "Edad",
      width: 150,
    },
    {
      field: "nacionalidad",
      headerName: "Nacionalidad",
      description: "This column has a value getter and is not sortable.",
      width: 160,
    },
    {
      field: "posicion",
      headerName: "Posicion",
      description: "This column has a value getter and is not sortable.",
      width: 160,
    },
    {
      field: "equipo",
      headerName: "Equipo",
      description: "This column has a value getter and is not sortable.",
      width: 160,
    },

    {
      field: "superbowls",
      headerName: "Superbowls",
      description: "This column has a value getter and is not sortable.",
      width: 160,
    },
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "acciones",
      headerName: "Acciones",
      width: 300,
      renderCell: (cellValues) => {
        return (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={() => updateItem(cellValues.row)}
              sx={{ mr: 2 }}
            >
              Editar
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => deleteItem(cellValues.row.id)}
            >
              Borrar
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <div>
      <CustomDataGrid
        title="Jugadores"
        buttonText="Agregar Jugador"
        rows={data}
        columns={jugadoresColumns}
        loading={loading}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AgregarJugador />
      </Modal>
    </div>
  );
};

const AgregarJugador = () => {
  const alert = useAlert();
  const { values, handleInputChange, reset } = useForm({
    nombre: "",
    apellidos: "",
    edad: "",
    posicion: "",
    equipo: "",
    nacionalidad: "",
    superBowls: "",
  });

  const onSubmit = () => {
    console.log(values);
    BaseApiUrl.post("/post-jugadores", {
      nombre: values.nombre,
      apellidos: values.apellidos,
      edad: values.edad,
      posicion: values.posicion,
      equipo: values.equipo,
      nacionalidad: values.nacionalidad,
      superBowls: values.superBowls,
    })
      .then((res) => {
        alert.show("El usuario se ha agregado correctamente");
        reset();
      })
      .finally(() => {
        window.location.reload();
      })
      .catch((err) => {
        alert.error("Ha ocurrido un error");
      });
  };

  return (
    <Box sx={style}>
      <h1>Agregar Jugador</h1>
      <Stack spacing={2}>
        <TextField
          type="text"
          variant="outlined"
          placeholder="Nombre"
          name="nombre"
          onChange={(e) => handleInputChange(e)}
        />
        <TextField
          type="text"
          variant="outlined"
          placeholder="Apellidos"
          name="apellidos"
          onChange={(e) => handleInputChange(e)}
        />
        <TextField
          type="number"
          variant="outlined"
          placeholder="Edad"
          name="edad"
          onChange={(e) => handleInputChange(e)}
        />
        <TextField
          type="text"
          variant="outlined"
          placeholder="Posicion"
          name="posicion"
          onChange={(e) => handleInputChange(e)}
        />
        <TextField
          type="text"
          variant="outlined"
          placeholder="Equipo"
          name="equipo"
          onChange={(e) => handleInputChange(e)}
        />
        <TextField
          type="text"
          variant="outlined"
          placeholder="Nacionalidad"
          name="nacionalidad"
          onChange={(e) => handleInputChange(e)}
        />
        <TextField
          type="number"
          variant="outlined"
          placeholder="superbowls"
          name="superBowls"
          onChange={(e) => handleInputChange(e)}
        />
        <Button variant="outlined" onClick={onSubmit}>
          Agregar
        </Button>
      </Stack>
    </Box>
  );
};

export default Jugadores;
