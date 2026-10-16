import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";

import ProductDetails from "../pages/ProductDetails";
import ProductItemDetails from "../pages/ProductItemDetails";
import DatabaseProductDetails from "../pages/DatabaseProductDetails";

import Solutions from "../pages/Solutions";
import Industries from "../pages/Industries";
import Technologies from "../pages/Technologies";
import Services from "../pages/Services";

import Resources from "../pages/Resources";
import Gallery from "../pages/Gallery";

import News from "../pages/News";
import Support from "../pages/Support";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import Legal from "../pages/Legal";
import NotFound from "../pages/NotFound";


/* =========================================================
   ADMIN
========================================================= */

import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";

import AdminProducts from "../pages/AdminProducts";
import AdminIndustries from "../pages/AdminIndustries";
import AdminGallery from "../pages/AdminGallery";
import AdminDownloads from "../pages/AdminDownloads";
import AdminEnquiries from "../pages/AdminEnquiries";


function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/admin/login"
        element={<AdminLogin />}
      />


      <Route
        path="/admin"
        element={<AdminDashboard />}
      >

        <Route
          path="products"
          element={<AdminProducts />}
        />

        <Route
          path="industries"
          element={<AdminIndustries />}
        />

        <Route
          path="gallery"
          element={<AdminGallery />}
        />

        <Route
          path="downloads"
          element={<AdminDownloads />}
        />

        <Route
          path="enquiries"
          element={<AdminEnquiries />}
        />

      </Route>


      <Route element={<MainLayout />}>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />


        {/* No standalone Products page. */}
        <Route
          path="/products"
          element={
            <Navigate
              to="/products/conventional-marking-systems"
              replace
            />
          }
        />


        <Route
          path="/products/items/:itemId"
          element={<ProductItemDetails />}
        />


        <Route
          path="/products/database/:slug"
          element={<DatabaseProductDetails />}
        />


        {/* The three category URLs are handled here. */}
        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />


        <Route
          path="/industries"
          element={<Industries />}
        />

        <Route
          path="/resources"
          element={<Resources />}
        />

        <Route
          path="/gallery"
          element={<Gallery />}
        />

        <Route
          path="/solutions"
          element={<Solutions />}
        />

        <Route
          path="/technologies"
          element={<Technologies />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/news"
          element={<News />}
        />

        <Route
          path="/support"
          element={<Support />}
        />

        <Route
          path="/careers"
          element={<Careers />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/legal"
          element={<Legal />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Route>

    </Routes>
  );
}


export default AppRoutes;