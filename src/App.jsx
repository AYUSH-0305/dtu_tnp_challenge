import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Admin from "./pages/Admin";
import PublicView from "./pages/PublicView";

export default function App() {
return (
<Routes>
<Route path="/admin" element={<Admin />} />
<Route path="/view/:token" element={<PublicView />} />
<Route path="*" element={<Navigate to="/admin" replace />} />
</Routes>
);
}