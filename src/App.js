import {Routes,Route} from "react-router-dom"
import LandingPage from './Pages/LandingPage/LandingPage'
import LoginForm from "./Components/Login/LoginForm"
import AdminDashBoard from './Components/AdminDashBoard/AdminDashBoard'
import AddEvent from "./Components/VacationCRUD/AddEvent";
// import AddVacationForm from "./Components/AddVacation/AddVacationForm";
// import AdminLandingPage from "./Components/AdminPages/LandingPage";
import UpdateVacation from "./Components/VacationCRUD/UpdateVacation";
import RemoveVacation from "./Components/VacationCRUD/RemoveVacation";
import AboutUs from './Pages/AboutUs/AboutUs';
import Packages from './Pages/Packages/Packages';
import Contactus from './Pages/ContactUs/ContactUs';
import ViewComments from "./Pages/Comments/ViewComments";
import AllPackagesModifier from "./Components/AdminDashBoard/AllPackagesModifier";
import DetailedComment from "./Pages/Comments/DetailedComment";
import { QueryClient, QueryClientProvider } from 'react-query';
// import AdminPage from './Pages/AdminPage/AdminPage';

function App() {
  const queryClient=new QueryClient()
  return (
  
    <div className="App">
      <QueryClientProvider client={queryClient}>      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Packages" element={<Packages />} />
      <Route path="/Contactus" element={<Contactus />} />
      {/* <Route path="/AdminPage" element={<AdminPage/>} /> */}
      <Route path="/AddEvent" element={<AddEvent/>} />
      <Route path="/LoginForm" element={<LoginForm/>} />
      <Route path="/AdminDashBoard" element={<AdminDashBoard/>} />
      <Route path="/AddEvent" element={<AddEvent/>} />
      <Route path="/updateVacation" element={<UpdateVacation/>} />
      <Route path="/AllPackagesModifier" element={<AllPackagesModifier/>} />
      <Route path="/RemoveVacation" element={<RemoveVacation/>} />
      <Route path="/ViewComments" element={<ViewComments/>} />
      <Route path="/DetailedComment" element={<DetailedComment/>} />

      
      
      

      
      </Routes>
      </QueryClientProvider>
    </div>
   
  );
}

export default App;
