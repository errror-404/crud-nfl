import PersonIcon from '@mui/icons-material/Person';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Groups3Icon from '@mui/icons-material/Groups3';
import DashboardIcon from '@mui/icons-material/Dashboard';
export default [
  {
    id: 1,
    name: "Dashboard",
    path: "/dashboard",
    icon:<DashboardIcon/>
  },
  {
    id: 2,
    name: "Jugadores",
    path: "/jugadores",
    icon: <PersonIcon/>
  },
  {
    id: 3,
    name: "Equipos",
    path: "/equipos",
    icon: <Groups3Icon/>
  },
  {
    id: 4,
    name: "Estadios",
    path: "/estadios",
    icon: <ApartmentIcon/>
  },
];
