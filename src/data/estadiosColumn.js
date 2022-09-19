import { Button } from "@mui/material";
import { BaseApiUrl } from "../api/BaseUrl";

const deleteItem = (id) => {
  BaseApiUrl.delete(`/delete-estadios`, {
    id: id,
  }).then(() => {
    window.location.reload();
  });
};

const updateItem = (cellValues) => {};



export const estadiosColumn = [
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
            onClick={() => updateItem(cellValues)}
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
