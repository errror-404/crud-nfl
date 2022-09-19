import React from "react";
import CustomDataGrid from "../components/CustomDataGrid";
import { equiposColumn } from "../data/equiposColumn";
import { useGetData } from "../hooks/getDataHook";
import { Box, Button, Modal, Stack, TextField } from "@mui/material";
import { useForm } from "../hooks/formHook";
import { useAlert } from "react-alert";
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

const Equipos = () => {
  const navigate = useNavigate();
  const { data, loading } = useGetData("http://localhost:3001/get-equipos");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteItem = (id) => {
    BaseApiUrl.delete(`/delete-equipos${id}`).then(() => {
      window.location.reload();
    });
  };

  const updateItem = (cellValues) => {
    navigate("/equipos/editar", {
      state: {
        nombre: cellValues.nombre,
        estadio: cellValues.estadio,
        campeonatos: cellValues.campeonatos,
        liga: cellValues.liga,
        division: cellValues.division,
        id: cellValues.id,
        type: "equipos",
      },
    });
    // console.log(cellValues);
  };

  const equiposColumn = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "nombre",
      headerName: "Nombre",
      width: 150,
    },
    {
      field: "estadio",
      headerName: "Estadio",
      width: 150,
    },
    {
      field: "campeonatos",
      headerName: "Campeonatos",
      width: 150,
    },
    {
      field: "liga",
      headerName: "Liga",
      description: "This column has a value getter and is not sortable.",
      width: 160,
    },
    {
      field: "division",
      headerName: "Division",
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
        title="Equipos"
        buttonText="Agregar Equipo"
        rows={data}
        columns={equiposColumn}
        loading={loading}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AgregarEquipo />
      </Modal>
    </div>
  );
};

const AgregarEquipo = () => {
  const alert = useAlert();

  const { values, handleInputChange, reset } = useForm({
    nombre: "",
    estadio: "",
    ciudad: "",
    campeonatos: "",
    liga: "",
    division: "",
  });

  const onSubmit = () => {
    console.log(values);
    BaseApiUrl.post("/post-equipos", {
      nombre: values.nombre,
      estadio: values.estadio,
      ciudad: values.ciudad,
      campeonatos: values.campeonatos,
      liga: values.liga,
      division: values.division,
    })
      .then((res) => {
        alert.show("El usuario se ha agregado correctamente");
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
      <h1>Agregar Equipo</h1>
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
          placeholder="Estadio"
          name="estadio"
          onChange={(e) => handleInputChange(e)}
        />
        <TextField
          type="text"
          variant="outlined"
          placeholder="Campeonatos"
          name="campeonatos"
          onChange={(e) => handleInputChange(e)}
        />
        <TextField
          type="text"
          variant="outlined"
          placeholder="Liga"
          name="liga"
          onChange={(e) => handleInputChange(e)}
        />
        <TextField
          type="text"
          variant="outlined"
          placeholder="Division"
          name="division"
          onChange={(e) => handleInputChange(e)}
        />
        <Button variant="outlined" onClick={onSubmit}>
          Agregar
        </Button>
      </Stack>
    </Box>
  );
};

export default Equipos;
