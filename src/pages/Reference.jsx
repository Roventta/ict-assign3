
import ContentCard from '../components/ContentCard'

const items = [
  <>
    CAST. (2024). <em>CAST Universal Design for Learning Guidelines version 3.0</em>.
    CAST.{' '}
    <a href="https://udlguidelines.cast.org/" target="_blank" rel="noreferrer">
      https://udlguidelines.cast.org/
    </a>
  </>,
  <>
    de Jong, T., Lazonder, A. W., Chinn, C. A., Fischer, F., Gobert, J.,
    Hmelo-Silver, C. E., Koedinger, K. R., Krajcik, J. S., Kyza, E. A.,
    Linn, M. C., Pedaste, M., Scheiter, K., &amp; Zacharia, Z. C. (2023).
    Let’s talk evidence – the case for combining inquiry-based and direct
    instruction. <em>Educational Research Review, 39</em>(39), 100536.{' '}
    <a href="https://doi.org/10.1016/j.edurev.2023.100536" target="_blank" rel="noreferrer">
      https://doi.org/10.1016/j.edurev.2023.100536
    </a>
  </>,
  <>
    Foxworth, L. L., Hashey, A. I., Dexter, C., Rasnitsyn, S., &amp; Beck,
    R. (2021). Approaching explicit instruction within a universal design
    for learning framework. <em>TEACHING Exceptional Children, 54</em>(4).{' '}
    <a href="https://doi.org/10.1177/00400599211010190" target="_blank" rel="noreferrer">
      https://doi.org/10.1177/00400599211010190
    </a>
  </>,
  <>
    Kimmons, R., Graham, C. R., &amp; West, R. E. (2020). The PICRAT model
    for technology integration in teacher preparation.{' '}
    <em>Contemporary Issues in Technology &amp; Teacher Education, 20</em>(1).{' '}
    <a href="https://citejournal.org/volume-20/issue-1-20/general/the-picrat-model-for-technology-integration-in-teacher-preparation/" target="_blank" rel="noreferrer">
      https://citejournal.org/volume-20/issue-1-20/general/the-picrat-model-for-technology-integration-in-teacher-preparation/
    </a>
  </>,
  <>
    Lehesvuori, S., Hähkiöniemi, M., Ketonen, L., Lerkkanen, M.-K.,
    Pöysä, S., &amp; Pakarinen, E. (2021). Reflections on dialogicity:
    Challenges and suggestions by mathematics student teachers.{' '}
    <em>Learning, Culture and Social Interaction, 31</em>, 100567.{' '}
    <a href="https://doi.org/10.1016/j.lcsi.2021.100567" target="_blank" rel="noreferrer">
      https://doi.org/10.1016/j.lcsi.2021.100567
    </a>
  </>,
  <>
    Pino, M., &amp; Mortari, L. (2014). The inclusion of students with
    dyslexia in higher education: A systematic review using narrative
    synthesis. <em>Dyslexia, 20</em>(4), 346–369.{' '}
    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4253321/" target="_blank" rel="noreferrer">
      https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4253321/
    </a>
  </>,
  <>
    Priyanda, R., Herman, T., Amalia, R., &amp; Ihsan, I. R. (2025).
    Exploring teachers’ pedagogical reasoning in mathematics education
    using the TPACK framework. <em>Frontiers in Education, 10</em>.{' '}
    <a href="https://doi.org/10.3389/feduc.2025.1552760" target="_blank" rel="noreferrer">
      https://doi.org/10.3389/feduc.2025.1552760
    </a>
  </>,
  <>
    Rexigel, E., Kuhn, J., Becker, S., &amp; Malone, S. (2024). The more
    the better? A systematic review and meta-analysis of the benefits of
    more than two external representations in STEM education.{' '}
    <em>Educational Psychology Review, 36</em>(4), Article 124.{' '}
    <a href="https://doi.org/10.1007/s10648-024-09958-y" target="_blank" rel="noreferrer">
      https://doi.org/10.1007/s10648-024-09958-y
    </a>
  </>,
  <>
    Ruiz-Martín, H., &amp; Bybee, R. W. (2022). The cognitive principles
    of learning underlying the 5E model of instruction.{' '}
    <em>International Journal of STEM Education, 9</em>(1), 1–9.{' '}
    <a href="https://doi.org/10.1186/s40594-022-00337-z" target="_blank" rel="noreferrer">
      https://doi.org/10.1186/s40594-022-00337-z
    </a>
  </>,
  <>
    Sutherland, M., Lussier, C., Nelson, G., Suhr, M. P., Fong, J.,
    Turtura, J., &amp; Clarke, B. (2024). A quantitative systematic
    literature review of self-monitoring components within mathematics
    instruction and intervention. <em>Exceptional Children, 90</em>(3),
    235–254.{' '}
    <a href="https://doi.org/10.1177/00144029241230322" target="_blank" rel="noreferrer">
      https://doi.org/10.1177/00144029241230322
    </a>
  </>,
  <>
    Tanti, M., Maddox, A., &amp; Phillips, E. (2026).{' '}
    <em>The science of learning and generative AI: A guide for secondary teachers</em>.{' '}
    <a href="https://doi.org/https://doi.org/10.26181/32775462" target="_blank" rel="noreferrer">
      https://doi.org/https://doi.org/10.26181/32775462
    </a>
  </>,
  <>
    Trgalová, J., &amp; Tabach, M. (2023). Affordances of virtual learning
    environments to support mathematics teaching.{' '}
    <em>Digital Experiences in Mathematics Education, 9</em>(3), 444–475.{' '}
    <a href="https://doi.org/10.1007/s40751-023-00127-4" target="_blank" rel="noreferrer">
      https://doi.org/10.1007/s40751-023-00127-4
    </a>
  </>
]

export default function Reference() {
  return (
    <ContentCard className="justification-section references-section">
      <h2>References</h2>

      <div className="main-text reference-list">
        {items.map((item, index) => (
          <p className="reference-item" key={index}>
            {item}
          </p>
        ))}
      </div>
    </ContentCard>
  )
}
