import './InclusiveAudit.css'

export default function InclusiveAudit() {
  return (
    <main className="inclusive-audit">
      <article className="inclusive-audit-card">
        <header className="inclusive-audit-heading">
              <span className="inclusive-audit-label">AUDIT 1</span>
          <h2>Stating Clear Learning Goals</h2>
        </header>

        <div className="inclusive-audit-comparison" aria-label="Comparison of the old and revised introductory content">
          <figure className="inclusive-audit-figure">
            <img src="/1-old.PNG" alt="Old version of the introductory content" />
            <figcaption>Before</figcaption>
          </figure>
          <figure className="inclusive-audit-figure">
            <img src="/1-new.PNG" alt="Revised version of the introductory content" />
            <figcaption>After</figcaption>
          </figure>
        </div>

        <section className="inclusive-audit-section">
          <h2>Description</h2>
          <p>
            I removed the theory and policy information from the introductory text to reduce distractions and reading load for students. I also separated the steps involved in the AI-learning skill from the example conversations that students might have with an AI system. The first two sections of the resource now focus on explaining what students should achieve by studying the page and what they should do to master the AI-learning skill. The section also includes a non-example to illustrate an ineffective approach to developing this skill.
          </p>
        </section>

        <section className="inclusive-audit-section">
          <h2>Justification</h2>
          <p>
            Foxworth et al. (2021) suggested that concise and simple language reduces barriers to students’ engagement with learning content. By describing the success criteria in concise, direct language and presenting the expected actions step by step, this change reflects UDL Consideration 2.1 (CAST, 2024), which recommends clarifying vocabulary, symbols, and language structures.
          </p>
          <p>
            This change also provides students with meaningful goals and highlights the central idea of the page. Foxworth et al. (2021) suggested that expressing learning goals in simple language can benefit all students by making expectations clear. This may be particularly helpful for students who experience difficulty with English reading, because the revised introduction contains only the essential information they need to read (Foxworth et al., 2021). In addition, by explicitly stating the overall goal and breaking it down into smaller goals, this change reflects UDL Consideration 8.1 (CAST, 2024): clarifying the meaning and purpose of goals to support engagement.
          </p>
          <p>
            Finally, I added a non-example that illustrates an ineffective way of learning with AI. Foxworth et al. (2021) suggested that non-examples can support UDL by providing another form of representation through which students can interpret and understand learning expectations.
          </p>
        </section>
      </article>

      <article className="inclusive-audit-card">
        <header className="inclusive-audit-heading">
              <span className="inclusive-audit-label">AUDIT 2</span>
          <h2>Connecting Prior Knowledge</h2>
        </header>

        <div
          className="inclusive-audit-comparison"
          aria-label="Comparison of the old and revised background-knowledge section"
        >
          <figure className="inclusive-audit-figure">
            <img
              src={`${import.meta.env.BASE_URL}2-old.PNG`}
              alt="Old version before adding the background-knowledge section"
            />
            <figcaption>Before: No background knowledge reminder section</figcaption>
          </figure>
          <figure className="inclusive-audit-figure">
            <img
              src={`${import.meta.env.BASE_URL}2-new.PNG`}
              alt="Revised version with the background-knowledge section"
            />
            <figcaption>After</figcaption>
          </figure>
        </div>

        <section className="inclusive-audit-section">
          <h2>Description</h2>
          <p>
            I added a section between the steps of the AI-learning skill and the practical examples to remind students of the relevant background knowledge. The section breaks down the terminology and mathematical expressions that are essential to the learning activities on this page.
          </p>
        </section>

        <section className="inclusive-audit-section">
          <h2>Justification</h2>
          <p>
            This provides students with multiple means of representation of the mathematical concepts involved in the learning activity. The section presents the names of the forms of quadratic expressions, highlighted in red, alongside the corresponding general formulas. Foxworth et al. (2021) suggested that multiple means of representation can decode mathematical concepts into simpler language and support students’ comprehension.
          </p>
          <p>
            Furthermore, this audit explicitly responds to UDL Consideration 3.1, which advocates connecting prior knowledge to new learning (CAST, 2024). Although this page does not focus on teaching the general forms of quadratic expressions, this knowledge is a prerequisite for the learning activity. CAST (2024) suggested that students’ ability to recall previous knowledge varies, and they may have different knowledge gaps or misunderstandings. Meanwhile, some students might remember the knowledge but not understand how it relates to the current learning activity (Ruiz-Martín &amp; Bybee, 2022). Therefore, providing background knowledge can reduce barriers to accessing the main learning activities by prompting students to retrieve relevant prior knowledge and build on it (Ruiz-Martín &amp; Bybee, 2022).
          </p>
        </section>
      </article>


      {/* AUDIT THREE */}
<article className="inclusive-audit-card">
  <header className="inclusive-audit-heading">
    <span className="inclusive-audit-label">AUDIT 3</span>
    <h2>Providing a Video Demonstration</h2>
  </header>

  <div
    className="inclusive-audit-comparison"
    aria-label="Comparison of the resource before and after adding a video walkthrough"
  >
    <figure className="inclusive-audit-figure">
      <img
        src={`${import.meta.env.BASE_URL}2-old.PNG`}
        alt="Original resource without a video walkthrough"
      />
      <figcaption>Before: no video walkthrough</figcaption>
    </figure>

    <figure className="inclusive-audit-figure">
      <img
        src={`${import.meta.env.BASE_URL}3-new.PNG`}
        alt="Revised resource with a video walkthrough"
      />
      <figcaption>After: video walkthrough added</figcaption>
    </figure>
  </div>

  <section className="inclusive-audit-section">
    <h2>Description</h2>
    <p>
      I added a YouTube video that directly demonstrates the AI-learning
      skill. In the video, I followed each step outlined by the
      AI-learning-skill page to use AI to learn and solve a mathematical
      question.
    </p>
  </section>

  <section className="inclusive-audit-section">
    <h2>Justification</h2>
    <p>
      In the video, I read all the steps of the AI-learning skill aloud
      and verbally explained all the actions that students should take
      when following the steps. Moreover, I performed the actions
      described by the AI-learning-skill page. This provides students
      with additional visual, auditory, and performative representations
      of the learning process, supporting UDL's principle of multiple
      means of representation. According to Rexigel et al. (2024),
      students can receive significant learning advantages when exposed
      to more than two means of representation compared with learning
      with only two means of representation. Rexigel et al. (2024)
      suggested that the diversity of representations helps students
      manage their cognitive load and accommodates different learning
      preferences.
    </p>
  </section>
</article>

      {/* AUDIT FOUR */}
      <article className="inclusive-audit-card">
        <header className="inclusive-audit-heading">
          <span className="inclusive-audit-label">AUDIT 4</span>
          <h2>Providing a Structured Learning Worksheet</h2>
        </header>

        <div
          className="inclusive-audit-comparison"
          aria-label="Comparison of the worksheet before and after its introduction"
        >
          <figure className="inclusive-audit-figure">
            <img
              src={`${import.meta.env.BASE_URL}2-old.PNG`}
              alt="Original resource without the student worksheet"
            />
            <figcaption>Before: no structured worksheet</figcaption>
          </figure>

          <figure className="inclusive-audit-figure">
            <img
              src={`${import.meta.env.BASE_URL}4-new.PNG`}
              alt="Revised resource with the student worksheet"
            />
            <figcaption>After: structured worksheet added</figcaption>
          </figure>
        </div>

        <section className="inclusive-audit-section">
          <h2>Description</h2>
          <p>
            I added a worksheet for students to follow the steps of the
            AI-learning skill to learn and solve a mathematical question.
            At the end of the worksheet, there is a button that students
            can use to save their work into a file.
          </p>
        </section>

        <section className="inclusive-audit-section">
          <h2>Justification</h2>
          <p>
            The worksheet first asks students to perform the actions
            outlined in the previous chapter. It then asks students to
            reflect on the AI's responses and rephrase the mathematical
            knowledge they learnt through their discussions with AI.
            This supports UDL Consideration 6.4, which recommends
            providing checklists and templates to help students monitor
            their learning progress as part of multiple means of action
            and expression (CAST, 2024).
          </p>

          <p>
            Sutherland et al. (2024) suggested that students, with or
            without disabilities, might lose track of their progress
            and skip steps when following instructions. This worksheet
            provides a static set of instructions that students can
            refer to and use to record their progress, helping to
            mitigate these challenges. Furthermore, requiring students
            to reflect on their conversations with AI addresses the
            difficulty of ensuring that they are making meaningful
            progress. Their written responses allow them to track
            their progress and compare it with the instructions
            provided by the worksheet (Sutherland et al., 2024).
          </p>
        </section>
      </article>

            {/* AUDIT FIVE */}
      <article className="inclusive-audit-card">
        <header className="inclusive-audit-heading">
          <span className="inclusive-audit-label">AUDIT 5</span>
          <h2>Providing an Alternative Way to Demonstrate Learning</h2>
        </header>

        <div
          className="inclusive-audit-comparison"
          aria-label="Comparison of the worksheet before and after adding a video response option"
        >
          <figure className="inclusive-audit-figure">
            <img
              src={`${import.meta.env.BASE_URL}2-old.PNG`}
              alt="Original worksheet without a video response option"
            />
            <figcaption>Before: no worksheet</figcaption>
          </figure>

          <figure className="inclusive-audit-figure">
            <img
              src={`${import.meta.env.BASE_URL}5-new.PNG`}
              alt="Revised worksheet with an alternative video response option"
            />
            <figcaption>After: video response option added</figcaption>
          </figure>
        </div>

        <section className="inclusive-audit-section">
          <h2>Description</h2>
          <p>
            I added an alternative way for students to complete the
            worksheet and practise their AI-learning skills. This option
            allows students to record a video demonstrating their process
            of AI-assisted learning.
          </p>
        </section>

        <section className="inclusive-audit-section">
          <h2>Justification</h2>
          <p>
            This change acknowledges that some students might experience
            difficulties writing or typing structured sentences. The
            worksheet requires students to first describe their
            conversations with AI and then reflect on the information
            exchanged. These tasks require students to process textual
            information, organise their work, and write a structured
            paragraph.
          </p>

          <p>
            Pino and Mortari (2014) suggested that students with dyslexia are challenged by those tasks, as their gaps of literal skills stop them from engaging with the actual lesson content or effectively demonstrate the full extent of their subject mastery. Porta et al. (2026) then suggested that students valued flexible learning environments that allow them to approach the content and demonstrate their learning in different ways and paces. This change explicitly responds to these findings and provides students with a different tool to construct and organize their learning.
          </p>
        </section>
      </article>

            {/* SUMMARY */}
      <article className="inclusive-audit-card">
        <header className="inclusive-audit-heading">
          <span className="inclusive-audit-label">UDL DESIGN AUDIT</span>
          <h2>Summary of Inclusive Design Improvements</h2>
        </header>

        <section className="inclusive-audit-section">
          <p>
            This audit discovered that the old page only provided text information to students. Students could only read the instructions on the page and read or type more text inside an AI chatbot. This poses obstacles to students with varying levels of dyslexia engaging in the learning activity, as they might spend an extensive amount of time reading the page or constructing sentences, rather than reflecting on mathematical knowledge.
          </p>

          <p>
            In response, I rewrote the introduction with simpler language and emphasized the learning goal. I also provided a non-example as another means of representation for students to understand the bigger picture of this activity. Meanwhile, I provided a video of me explaining the learning activity and demonstrating the skill that students should practice. This reduced the cognitive load for students with difficulties in reading texts and accommodated students with preferences for learning from verbal or visual resources.
          </p>

          <p>
            On the other hand, I provided a worksheet for students to record and reflect on their thinking either via text or by recording a video. This allows students to not only perceive information but also to reflect and synthesize new ideas. This alternative way to answer the worksheet alleviates the difficulty of structuring sentences that some students might experience, freeing up students' working memory for thinking about math.
          </p>
        </section>
      </article>

    </main>
  )
}
