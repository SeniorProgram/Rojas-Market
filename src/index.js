// src/index.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, AppBar, Toolbar, Typography, Box, Container, Button, Grid, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import reportWebVitals from './reportWebVitals';
import logo from './imagen/logo.png'; // Importa el logo


// Definir el tema
const theme = createTheme({
  palette: {
    primary: {
      main: '#e64a19', // Naranja
    },
    secondary: {
      main: '#ff6b6b', // Rojo
    },
    background: {
      default: '#ffffff', // Blanco
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

const DistribuidoraDashboard = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" style={{ backgroundColor: '#e64a19' }}>
        <Toolbar>
          <img src={logo} alt="Logo" style={{ height: '60px', marginRight: '16px' }} /> {/* Ajusta el tamaño del logo aquí */}
          <Button color="inherit" onClick={() => handleSectionChange('inicio')}>Tiendas</Button>
          <Button color="inherit" onClick={() => handleSectionChange('productos')}>Productos</Button>
          <Button color="inherit" onClick={() => handleSectionChange('nosotros')}>Nosotros</Button>
          <Button color="inherit" onClick={() => handleSectionChange('aliados')}>Aliados</Button>
          <Button color="inherit" onClick={() => handleSectionChange('trabaja')}>Trabaja con nosotros</Button>
          <Button color="inherit" onClick={() => handleSectionChange('contacto')}>Contacto</Button>
          <Button color="inherit" onClick={() => handleSectionChange('analisis')}>Análisis de Ventas</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box mt={4}>
          {activeSection === 'inicio' && (
            <div>
              <img src={`${process.env.PUBLIC_URL}/banner.jpg`} alt="Banner" style={{ width: '100%', borderRadius: '10px' }} />
            </div>
          )}
          {activeSection === 'productos' && (
            <div>
              <h2>Productos</h2>
              <p>Aquí puedes mostrar tus productos.</p>
            </div>
          )}
          {activeSection === 'nosotros' && (
            <div>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Paper style={{ padding: '20px', textAlign: 'center', border: '2px solid #e64a19', borderRadius: '10px' }}>
                    <Typography variant="h4" style={{ color: '#e64a19', marginBottom: '20px' }}>MISIÓN</Typography>
                    <Typography variant="body1">
                      Nos dedicamos a la distribución y comercialización de una amplia variedad de abarrotes de alta calidad, que reflejan nuestra pasión por la satisfacción de nuestro país. Nuestra operación está respaldada por la certificación HACCP de seguridad alimentaria, garantizando que nuestros productos cumplen con los más altos estándares de calidad y seguridad para nuestros clientes.
                    </Typography>
                    <img src={`${process.env.PUBLIC_URL}/mision.jpg`} alt="Misión" style={{ width: '100%', borderRadius: '10px', marginTop: '20px' }} />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper style={{ padding: '20px', textAlign: 'center', border: '2px solid #e64a19', borderRadius: '10px' }}>
                    <Typography variant="h4" style={{ color: '#e64a19', marginBottom: '20px' }}>VISIÓN</Typography>
                    <Typography variant="body1">
                      Aspiramos a ser líderes en la industria de distribución de abarrotes, siendo la primera opción para nuestro público objetivo. Buscamos mantener vínculos duraderos con clientes y proveedores basados en la confianza y beneficio mutuo. Nuestra meta es enriquecer la vida de las familias peruanas con nuestros productos, contribuyendo al bienestar comunitario y desarrollo sostenible.
                    </Typography>
                    <img src={`${process.env.PUBLIC_URL}/vision.jpg`} alt="Visión" style={{ width: '100%', borderRadius: '10px', marginTop: '20px' }} />
                  </Paper>
                </Grid>
              </Grid>
            </div>
          )}
          {activeSection === 'aliados' && (
            <div>
              <h2>Aliados</h2>
              <p>Aquí puedes mostrar tus aliados.</p>
            </div>
          )}
          {activeSection === 'trabaja' && (
            <div>
              <h2>Trabaja con nosotros</h2>
              <p>Aquí puedes mostrar oportunidades de empleo.</p>
            </div>
          )}
          {activeSection === 'contacto' && (
            <div>
              <h2>Contacto</h2>
              <p>Aquí puedes mostrar información de contacto.</p>
            </div>
          )}
          {activeSection === 'analisis' && (
            <div>
              <h2>Análisis de Ventas</h2>
              <iframe
                title="Análisis de Ventas"
                src="https://app.powerbi.com/view?r=eyJrIjoiMjhkYjQyZTAtNTg1Ni00NjgyLWE2NmQtN2MwZjRlMzVhMjIwIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9"
                style={{ width: '100%', height: '600px', border: 'none', borderRadius: '10px' }}
              ></iframe>
            </div>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DistribuidoraDashboard />
  </React.StrictMode>
);

// Medición de performance
reportWebVitals();
