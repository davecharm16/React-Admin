import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from './scenes//global/Topbar';
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from './scenes/dashboard';
import { Routes, Route } from "react-router-dom";







function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <Sidebar/>
          <main className="content">
            <Topbar/>
            <Routes>
                <Route path="/" element={<Dashboard />} />
              {/* <Route path='/team' element={<Team/>} /> */}
              {/* <Route path='/Invoices' element={<Invoices/>} /> */}
              {/* <Route path='/Contacts' element={<Contacts/>} /> */}
              {/* <Route path='/Bar' element={<Bar/>} /> */}
              {/* <Route path='/Form' element={<Form/>} /> */}
              {/* <Route path='/Line' element={<Line/>} /> */}
              {/* <Route path='/Pie' element={<Pie/>} /> */}
              {/* <Route path='/faq' element={<Faq/>} /> */}
              {/* <Route path='/geography' element={<Geography/>} /> */}
              {/* <Route path='/calendar' element={<Calendar/>} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
