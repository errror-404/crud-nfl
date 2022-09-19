import React from "react";
import { Box, Button, Modal, Stack, TextField } from "@mui/material";
import CustomDataGrid from "../components/CustomDataGrid";
import { useGetData } from "../hooks/getDataHook";
import { useAlert } from "react-alert";
import { useForm } from "../hooks/formHook";
import { BaseApiUrl } from "../api/BaseUrl";
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

const Estadios = () => {
  const navigate = useNavigate();
  const { data, loading } = useGetData("http://localhost:3001/get-estadios");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteItem = (id) => {
    BaseApiUrl.delete(`/delete-estadios${id}`).then(() => {
      window.location.reload();
    });
  };

  const updateItem = (cellValues) => {
    navigate("/estadios/editar", {
      state: {
        nombre: cellValues.nombre,
        equipo: cellValues.equipo,
        localidad: cellValues.localidad,
        capacidad: cellValues.capacidad,
        apertura: cellValues.apertura,
        id: cellValues.id,
        type: "estadio",
      },
    });
    // console.log(cellValues);
  };

  const estadiosColumn = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "nombre",
      headerName: "Nombre",
      width: 150,
    },
    {
      field: "equipo",
      headerName: "Equipo",
      width: 150,
    },
    {
      field: "localidad",
      headerName: "Localidad",
      width: 150,
    },
    {
      field: "capacidad",
      headerName: "Capacidad",
      description: "This column has a value getter and is not sortable.",
      width: 160,
    },
    {
      field: "apertura",
      headerName: "Apertura",
      description: "This column has a value getter and is not sortable.",
      width: 160,
    },
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
        title="Estadios"
        buttonText="Agregar Estadio"
        rows={data}
        columns={estadiosColumn}
        loading={loading}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AgregarEstadio />
      </Modal>
    </div>
  );
};

const AgregarEstadio = () => {
  const alert = useAlert();
  const { values, handleInputChange, reset } = useForm({
    nombre: "",
    equipo: "",
    Localidad: "",
    capacidad: "",
    apertura: "",
  });

  const onSubmit = () => {
    console.log(values);
    BaseApiUrl.post("/post-estadios", {
      nombre: values.nombre,
      equipo: values.equipo,
      localidad: values.Localidad,
      capacidad: values.capacidad,
      apertura: values.apertura,
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
      <h1>Agregar Estadio</h1>
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
          placeholder="Equipo"
          name="equipo"
          onChange={(e) => handleInputChange(e)}
        />
        <TextField
          type="text"
          variant="outlined"
          placeholder="Localidad"
          name="Localidad"
          onChange={(e) => handleInputChange(e)}
        />
        <TextField
          type="text"
          variant="outlined"
          placeholder="Capacidad"
          name="capacidad"
          onChange={(e) => handleInputChange(e)}
        />
        <TextField
          type="text"
          variant="outlined"
          placeholder="Apertura"
          name="apertura"
          onChange={(e) => handleInputChange(e)}
        />

        <Button variant="outlined" onClick={onSubmit}>
          Agregar
        </Button>
      </Stack>
    </Box>
  );
};

export default Estadios;
