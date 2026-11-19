import { useEffect } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Resource from './pages/Resource'
import Justification from './pages/Justification'
import Reference from './pages/Reference'
import ResourceTwo from './pages/ResourceTwo'
import InclusiveAudit from './pages/InclusiveAudit'
import ProfessionalLearning from './pages/ProfessionalLearning'
import './App.css'

function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }) }, [pathname])
  return null
}

function Layout() {
  return <div className="layout">
    <Sidebar />
    <main className="main">
      <div id="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resource" element={<Resource/>} />
          <Route path="/inclusive_audit" element = {<InclusiveAudit/>} />
          <Route path="/justification" element={<Justification/>} />
          <Route path="/reference" element={<Reference/>} />
          <Route path="*" element={<Home />} />
          <Route path="/resource_two" element={<ResourceTwo/>}/>
          <Route path="/professional_learning" element={<ProfessionalLearning/>} />
        </Routes>
      </div>
    </main>
    <ScrollReset />
  </div>
}

export default function App() {
  return <HashRouter><Layout /></HashRouter>
}
