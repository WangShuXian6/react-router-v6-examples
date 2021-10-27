import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import LeagueStandings from "./components/LeagueStandings";
import NewTeamForm from "./components/NewTeamForm";
import PageLayout from "./components/PageLayout";
import Privacy from "./components/Privacy";
import Team from "./components/Team";
import Teams from "./components/Teams";
import Tos from "./components/Tos";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Welcome to React Router! App</h1>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route>
        </Route>
        <Route element={<PageLayout />}>
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/tos" element={<Tos />} />
        </Route>
        <Route path="contact-us" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
