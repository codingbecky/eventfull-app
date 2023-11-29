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

import { MainPage } from "./screens/MainPage";
import { AboutUs } from "./screens/AboutUs";

import { SearchCategory } from "./screens/SearchCategory";
import { VendorDetailsPage } from "./screens/VendorDetailsPage/VendorDetailsPage";
import { CustomerBookingPage } from "./screens/CustomerBookingPage";

import { VendorAccount } from "./screens/VendorAccount";
import { VendorCompany } from "./screens/VendorCompany";
import { VendorBooking } from "./screens/VendorBooking";
import { VendorSchedule } from "./screens/VendorSchedule";

import { MyAccountDefault } from "./screens/MyAccountDefault";
import { MyAccount } from "./screens/MyAccount";
import { Subscribe } from "./screens/Subscribe";
import { Plans } from "./screens/Plans";
import { Payment } from "./screens/Payment";

import "./sb-admin-2.css";
import "./index.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" exact element={<MainPage />} />

          <Route path="/about-us" exact element={<AboutUs />} />
          {/* <Route path="/register" element={<Register />} /> */}
          
          <Route path="/search-category" element={<SearchCategory />} />
          <Route path="/vendor-details" element={<VendorDetailsPage />} />
          <Route path="/booking-status" element={<CustomerBookingPage />} />

          <Route path="/myaccount-default" element={<MyAccountDefault />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/payment" element={<Payment />} />

          <Route path="/vendor-account" element={<VendorAccount />} />
          <Route path="/vendor-company" element={<VendorCompany />} />
          <Route path="/vendor-booking" element={<VendorBooking />} />
          <Route path="/vendor-schedule" element={<VendorSchedule />} />

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
