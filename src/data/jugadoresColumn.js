import { Button } from "@mui/material";
import { BaseApiUrl } from "../api/BaseUrl";

const deleteItem = (id) => {
  BaseApiUrl.delete(`/delete-jugadores`, {
    id: id,
  }).then(() => {
    window.location.reload();
  });
};

const updateItem = (cellValues) => {};

export const jugadoresColumns = [
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
