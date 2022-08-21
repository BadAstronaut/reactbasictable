import { DataGrid } from '@mui/x-data-grid';
import { darken, lighten } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';
import './App.css';

const getBackgroundColor = (color, mode) =>
  mode === 'dark' ? darken(color, 0.6) : lighten(color, 0.6);

const getHoverBackgroundColor = (color, mode) =>
  mode === 'dark' ? darken(color, 0.5) : lighten(color, 0.5);

function iconLoad (cellVal){
  //console.log(cellVal.row.col2=="Pagado")
  if (cellVal.row.col2=="Pagado") {
    //console.log(cellVal.row.col2=="Pagado")
    return (
      <>
      <CircleIcon></CircleIcon>
      </>
    );
      
    } else {return ''}
  }



function App() {
  const rows = [
    { id: 1, col1: 'Hello', col2: 'Pagado', col3:21, col4:'' },
    { id: 2, col1: 'DataGridPro', col2: 'Pagado', col3:10, col4:'' },
    { id: 3, col1: 'MUI', col2: 'Pendiente', col3:30, col4:'' },
  ];

  const columns = [
    { field: 'col1', headerName: 'Column 1', width: 150, headerClassName: 'cuca', 
    headerAlign: 'center'},
    { field: 'col2', headerName: 'Column 2', width: 150 },
    { field: 'col3', headerName: 'Ultimo Pago Hace:....', width: 250, 
    cellClassName: (params) =>{

    if (params.value == null) {
        return '';
    }
    let c = params.value >20 ? 'sanchito-app-negative' : 'sanchito-app-normal'
    //console.log(c)
    return c
    }
    },
    { field: 'col4', headerName: 'Estado', width: 50, renderCell: (cellValues) => {
      let cVal = iconLoad(cellValues);
      return cVal;
    }},
  ];

  //const params = GridRowClassNameParams;
  //console.log(params);


  return (
    <div className="App">
      <div style={{ height: 300, width: '100%' }}>
      <CircleIcon />
        <DataGrid rows={rows} columns={columns}  
          sx={{
          m: 2,
          boxShadow: 2,
          border: 2,
          borderColor: 'rgb(13, 129, 216)',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
          '& .sanchito-app- negative': {
            bgcolor: '#ffb4b5' 
          },
          '& .sanchito-app-normal': {
            bgcolor: '#6cb6fe' 
          },

          '& .sanchito-app-theme--Pagado': {
            bgcolor: '#68abfe' ,
            '&:hover': {
              bgcolor: '#6cb6fe',
            },
          },
          '& .sanchito-app-theme--Pendiente': {
            bgcolor: '#78d1fe' ,
            '&:hover': {
              bgcolor: '#6cb6fe',
            },
            
          },
          '& .sanchito-app-theme--PartiallyFilled': {
            bgcolor: (theme) =>
              getBackgroundColor(theme.palette.warning.main, theme.palette.mode),
            '&:hover': {
              bgcolor: (theme) =>
                getHoverBackgroundColor(
                  theme.palette.warning.main,
                  theme.palette.mode,
                ),
            },
          },
          '& .sanchito-app-theme--Rejected': {
            bgcolor: (theme) =>
              getBackgroundColor(theme.palette.error.main, theme.palette.mode),
            '&:hover': {
              bgcolor: (theme) =>
                getHoverBackgroundColor(theme.palette.error.main, theme.palette.mode),
            },
          },
          }} 
          getRowClassName={(params) => `sanchito-app-theme--${params.row.col2}`} 
          />
    </div>
    </div>
  );
}

export default App;
