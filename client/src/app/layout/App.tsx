import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/store";

function App() {
  const { darkMode } = useAppSelector((state) => state.ui);
  const palletteType = darkMode ? "dark" : "light";
  const darkTheme = createTheme({
    palette: {
      mode: palletteType,
      background: {
        default: palletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Box
        sx={{
          minHeight: "100vh",
          background: darkMode
            ? "radial-gradient(circle,#1e3aBa, #111B27)"
            : "radial-gradient(circle,#baecf9, #f0f9ff)",
          py: 6,
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 8 }}>
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
