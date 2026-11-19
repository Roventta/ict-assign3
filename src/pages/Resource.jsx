
import { useState } from 'react'
import ContentCard from '../components/ContentCard'

const curriculumUrl =
  'https://www.australiancurriculum.edu.au/f-10-curriculum/learning-areas/mathematics/year-10/content-description?subject-identifier=MATMATY10&content-description-code=AC9M10A01&detailed-content-descriptions=0&hide-ccp=0&hide-gc=0&load-detailed-content-descriptions=0&side-by-side=1&strands-start-index=0&view=quick'

const learningSteps = [
  'Open an AI chatbot of your choice.',
  'Tell AI to "respond in fewer than 100 words and explain things as if you were a Year 10 student."',
  'Describe the maths question you are working on. Ask AI to show you only the first step of solving it.',
  'Read AI’s explanation carefully. If you find any unfamiliar concepts, ask AI to explain them in simple terms.',
  'Once you understand every concept in the current step, ask AI to show you the next step.',
  'Repeat Steps 3–5 until you have completed the question and understand all the concepts involved.'
]

function LearningSteps() {
  return (
    <div>
      <ol className="learning-steps">
        {learningSteps.map((step, index) => (
          <li className="learning-step" key={index}>
            <div className="learning-step-number">{index + 1}</div>
            <p>{step}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

function ObserveExampleSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ContentCard className="resource-section observe-example-section">
      <div className="criterion-label">
        OBSERVE AN EXAMPLE
      </div>

      <h2>Observe an Example</h2>

      <p>
        Observe how your teacher used AI to learn and solve this question:
      </p>

      <p className="example-equation">
        <strong>x² − 9x + 20 = 0</strong>
      </p>

      <button
        type="button"
        className="exercise-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>
          <strong>Click to view detail</strong>
        </span>

        <span className="exercise-toggle-icon">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {isOpen && (
        <div className="exercise-content">
          <div className="example-video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/MIdq8PudJGA?si=gl-3NwRBkJZ0sitW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      )}
    </ContentCard>
  )
}


function ExerciseSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [q2, setQ2] = useState('')
  const [q3, setQ3] = useState('')
  const [q4, setQ4] = useState('')

  const downloadMarkdown = () => {
    const markdown = `# Exercise: Asking AI the Correct Questions

## Question

Solve the quadratic equation:

**2x² + 7x + 3 = 0**

---

## Step 1: Set up your AI chatbot

The instruction sent to AI:

> I am a Year 10 student studying Mathematics. Please keep your response under 100 words throughout our conversation.

## Step 2: Ask AI to explain the first step

My question and instructions to AI:

${q2 || 'No response provided.'}

## Step 3: Explain AI's response in your own words

${q3 || 'No response provided.'}

## Step 4: Explain the remaining steps

My explanation of the remaining steps, with the help of AI:

${q4 || 'No response provided.'}
`

    const blob = new Blob([markdown], {
      type: 'text/markdown;charset=utf-8'
    })

    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')

    link.href = url
    link.download = 'AI-Maths-Exercise.md'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    URL.revokeObjectURL(url)
  }

  return (
    <ContentCard className="exercise-section">
      <div className="criterion-label">
        PRACTISE YOUR SKILL
      </div>

      <h2>Exercise This Skill</h2>

      <p>
        Practise using AI to solve the following quadratic equation.
        Follow the four steps and explain your understanding in your
        own words.   
      </p>
      <p>
        You can type your reflection below. 
      </p>
      <p>
        You can also record a video of how you learnt to solve
        the question. You have to explain AI's response and your thinking in the video
      </p>

      <p className="example-equation">
        <strong>2x² + 7x + 3 = 0</strong>
      </p>

      <button
        type="button"
        className="exercise-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>
          <strong>Click to view detail</strong>
        </span>

        <span className="exercise-toggle-icon">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {isOpen && (
        <div className="exercise-content">

          {/* Question 1 */}
          <div className="exercise-question">
            <div className="exercise-question-heading">
              <span className="exercise-number">1</span>
              <h3>Set up your AI chatbot</h3>
            </div>

            <p>
              Open an AI chatbot and type the following instruction:
            </p>

            <div className="example-prompt">
              <span className="example-prompt-label">
                Copy this instruction
              </span>
              <p>
                I am a Year 10 student studying Mathematics.
                Please keep each response under 100 words
                throughout our conversation.
              </p>
            </div>
          </div>

          {/* Question 2 */}
          <div className="exercise-question">
            <div className="exercise-question-heading">
              <span className="exercise-number">2</span>
              <h3>Ask AI to explain the first step</h3>
            </div>

            <p>
              Describe the quadratic equation and explain how we
              name the factors in the equation this semester.
              Ask AI to explain only the first step of solving
              the question.
            </p>

            <label htmlFor="exercise-q2">
              Record the question and instructions you gave AI:
            </label>

            <textarea
              id="exercise-q2"
              value={q2}
              onChange={(e) => setQ2(e.target.value)}
              placeholder="Write what you asked AI here..."
              rows={3}
            />

            <div className="video-alternative">
              <span>🎥</span>
              <p>Or simply record your reflection in your video.</p>
            </div>
          </div>

          {/* Question 3 */}
          <div className="exercise-question">
            <div className="exercise-question-heading">
              <span className="exercise-number">3</span>
              <h3>Explain AI's response</h3>
            </div>

            <p>
              Read AI's explanation carefully. Explain its response
              in your own words below. If you do not understand
              something, ask AI to explain it before continuing.
            </p>

            <label htmlFor="exercise-q3">
              Explain the first step in your own words:
            </label>

            <textarea
              id="exercise-q3"
              value={q3}
              onChange={(e) => setQ3(e.target.value)}
              placeholder="Explain what you have learned..."
              rows={3}
            />

            <div className="video-alternative">
              <span>🎥</span>
              <p>Or simply record your reflection in your video.</p>
            </div>
          </div>

          {/* Question 4 */}
          <div className="exercise-question">
            <div className="exercise-question-heading">
              <span className="exercise-number">4</span>
              <h3>Explain the remaining steps</h3>
            </div>

            <p>
              With the help of AI, repeat the process of asking
              for one step at a time. In your own words, explain
              the remaining steps of solving the equation.
            </p>

            <label htmlFor="exercise-q4">
              Explain the remaining steps and your final answer:
            </label>

            <textarea
              id="exercise-q4"
              value={q4}
              onChange={(e) => setQ4(e.target.value)}
              placeholder="Explain how you completed the question..."
              rows={4}
            />

            <div className="video-alternative">
              <span>🎥</span>
              <p>Or simply record your reflection in your video.</p>
            </div>
          </div>

        </div>
      )}
    </ContentCard>
  )
}


export default function Resource() {
  return (
    <>
      <ContentCard className="resource-title-card">
        <h1>To Learn Math Properly in the Age of AI</h1>

        <p>
          This page introduces a practical skill that Year 10 students
          should develop to learn Mathematics effectively with AI.
        </p>

        <p>
          It provides examples of how to use AI to learn how to
          factorise <a color="red">quadratic expressions</a>.
        </p>

        <p>
          You will also find a worksheet where you can practise
          applying this skill.
        </p>
      </ContentCard>

      <ContentCard className="resource-section">
        <div className="criterion-label">
          AI-learning skill description
        </div>

        <h2>Asking AI the Correct Questions</h2>

        <p>
          This skill helps you learn Mathematics with AI while
          avoiding unnecessary distractions. It also allows you
          to benefit from the personalised guidance AI can provide.
        </p>

      <div className="learning-step-warning">
        <p>
          You should not directly ask AI: "Solve this question for me."
        </p>
      </div>


        <h3 className="procedure-heading">
          How to ask AI the correct questions
        </h3>

        <LearningSteps />
      </ContentCard>

      <ContentCard className="resource-section reminder-section">
        <div className="criterion-label">
          REMINDER
        </div>

        <h2>Quadratic Expressions: Standard and Factored Forms</h2>

        <p>
          Below is the general expression to represent a
          quadratic equation in <strong style={{ color: 'red' }}>standard form</strong>:
        </p>

        <div className="example-prompt">
          <p className="quadratic-formula">
            ax² + bx + c = 0
          </p>
        </div>

        <p>
          We use the following general expression to represent a
          quadratic equation in <strong style={{ color: 'red' }}>factored form</strong>:
        </p>

        <div className="example-prompt">
          <p className="quadratic-formula">
            a(x + k)(x + j) = 0
          </p>
        </div>
      </ContentCard>

      <ObserveExampleSection />

      <ExerciseSection />
    </>
  )
}
