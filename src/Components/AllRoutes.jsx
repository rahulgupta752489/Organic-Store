import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Vegetable } from "../Pages/Vegetable";
import { Fruit } from "../Pages/Fruit";
import { Dairy } from "../Pages/Dairy";
import { Bakery } from "../Pages/Bakery";
import { Blogs } from "../Pages/Blogs";
import { Login } from "../Pages/Login";
import { Cart } from "../Pages/Cart";
import { VegetableDetails } from "../Pages/VegetableDetails";
import { FruitDetails } from "../Pages/FruitDetails";
import { DairyDetails } from "../Pages/DairyDetails";
import { BakeryDetails } from "../Pages/BakeryDetails";
import { Signup } from "../Pages/Signup";

function AllRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vegetable" element={<Vegetable />} />
            <Route path="/fruit" element={<Fruit />} />
            <Route path="/dairy" element={<Dairy />} />
            <Route path="/bakery" element={<Bakery />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/vegetable/:id" element={<VegetableDetails />} />
            <Route path="/fruit/:id" element={<FruitDetails />} />
            <Route path="/dairy/:id" element={<DairyDetails />} />
            <Route path="/bakery/:id" element={<BakeryDetails />} />
        </Routes>
    )
}

export default AllRoutes