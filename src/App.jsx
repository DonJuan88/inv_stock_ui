import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Categoryindex from "./Pages/Category/Index";
import ProductIndex from "./Pages/Product/Index";

import BrandIndex from "./Pages/Brand";
import Report1 from "./Pages/Reports/Report1";
import Report2 from "./Pages/Reports/Report2";
import { Dashboard } from "@mui/icons-material";
import SupplierIndex from "./Pages/Supplier";
import CustomerIndex from "./Pages/Customer";
import PurchesaIndex from "./Pages/Purchase";
import OrderIndex from "./Pages/Order";
import BranchIndex from "./Pages/Branch";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="flex sticky">
          <Sidebar />

          <div className="content mt-2 ml-2 flex ">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/brands" element={<BrandIndex />} />
              <Route path="/category" element={<Categoryindex />} />
              <Route path="/products" element={<ProductIndex />} />
              <Route path="/suppliers" element={<SupplierIndex />} />
              <Route path="/customers" element={<CustomerIndex />} />
              <Route path="/purchases" element={<PurchesaIndex />} />
              <Route path="/orders" element={<OrderIndex />} />
              <Route path="/branchs" element={<BranchIndex />} />

              <Route path="/reports/sales" element={<Report1 />} />
              <Route path="/reports/inventory" element={<Report2 />} />
            </Routes>
          </div>
          {/* </div> */}
        </div>
      </div>
    </Router>
  );
};

export default App;
