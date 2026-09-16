export default function PageHeading({ eyebrow, title, description }) {
  return <header className="page-heading">
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h1>{title}</h1><p>{description}</p>
  </header>;
}
