interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
}

export default function SectionHeading({ eyebrow, title, description, centered = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading${centered ? ' section-heading--center' : ''}`}>
      <p className="section-heading__eyebrow">{eyebrow}</p>
      <h2 className="section-heading__title">{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  )
}