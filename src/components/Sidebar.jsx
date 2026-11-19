import { NavLink } from 'react-router'
export default function Sidebar() {
  return <aside className="sidebar">
    <h2>Learn Math with AI Properly</h2>
    <nav aria-label="Portfolio navigation">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/resource">Digital Citizenship</NavLink>
      <NavLink to="/inclusive_audit">Inclusive Audit</NavLink>
      <NavLink to="/resource_two">Teaching Resource</NavLink>
      <NavLink to="justification">Teaching Resource Justification</NavLink>
      <NavLink to="professional_learning">Professional Learning</NavLink>
      <NavLink to="/reference">Reference</NavLink>
    </nav>
  </aside>
}
