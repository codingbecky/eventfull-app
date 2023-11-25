import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Properties from "./components/properties";
import SellerDatabase from "./components/sellerdatabase";
import RealtorDatabase from "./components/realtordatabase";
import Report from "./components/report";
import CreateRealtor from "./components/CreateRealtor";
import CreateSeller from "./components/CreateSeller";
import CreateProperty from "./components/CreateProperty";
import UpdateProperty from "./components/UpdateProperty";
import UpdateSeller from "./components/UpdateSeller";
import UpdateRealtor from "./components/UpdateRealtor";

import { UserSignUp } from "./screens/UserSignUp";
import { UserLogin } from "./screens/UserLogin";

import { VendorSignUp } from "./screens/VendorSignUp";
import { VendorLogin } from "./screens/VendorLogin";


import "./sb-admin-2.css";
import "./index.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* <Route path="/" exact element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
          
          <Route path="/user-signup" exact element={<UserSignUp />} />
          <Route path="/user-login" exact element={<UserLogin />} />

          <Route path="/vendor-signup" exact element={<VendorSignUp />} />
          <Route path="/vendor-login" exact element={<VendorLogin />} />

          <Route path="/property" exact element={<Properties />} />
          <Route path="/realtor" element={<RealtorDatabase />} />
          <Route path="/seller" element={<SellerDatabase />} />
          <Route path="/report" element={<Report />} />

          <Route path="/newProperty" element={<CreateProperty />} />
          <Route path="/updateProperty/:id" element={<UpdateProperty />} />

          <Route path="/newRealtor" element={<CreateRealtor />} />
          <Route path="/updateRealtor/:id" element={<UpdateRealtor />} />
          
          <Route path="/newSeller" element={<CreateSeller />} />
          <Route path="/updateSeller/:id" element={<UpdateSeller />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}