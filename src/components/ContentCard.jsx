export default function ContentCard({ children, className = '' }) {
  return <section className={`content-card ${className}`}>{children}</section>
}
