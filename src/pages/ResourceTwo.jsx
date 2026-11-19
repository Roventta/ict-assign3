import { useEffect, useRef, useState } from 'react'
import './ResourceTwo.css'

const CANVAS_WIDTH = 900
const CANVAS_HEIGHT = 650
const STAGE_DURATION = 1500

const COLORS = {
  background: '#E8F1FC',
  navy: '#142D52',
  red: '#FF3030',
  redHighlight: '#FFD6D6',
  redBorder: '#FF7777',
}

const LAYOUT = {
  equalsX: 325,
  expressionX: 380,
  firstLineY: 160,
  secondLineY: 235,
}

const QUESTIONS = [
  {
    question: 'What is the goal of factorising a quadratic expression?',
    placeholder: 'Explain the goal of factorising...',
  },
  {
    question: 'Why must j and k add up to -9, the coefficient of x in the original expression?',
    placeholder: 'Explain why j + k must equal -9...',
  },
  {
    question: 'Why must j and k multiply to 20, the constant term in the original expression?',
    placeholder: 'Explain why j × k must equal 20...',
  },
  {
    question: 'The general form of a factorised quadratic expression is (x + j)(x + k). Why is the answer (x - 4)(x - 5)? Why do the factors contain minus signs instead of plus signs?',
    placeholder: 'Explain why the factors contain minus signs...',
  },
]

function clamp(value) {
  return Math.max(0, Math.min(value, 1))
}

function easeInOut(progress) {
  return progress < 0.5
    ? 2 * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 2) / 2
}

// =====================================
// CANVAS PRESENTATION
// =====================================

function ResourceCanvas({ slide }) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const previousSlideRef = useRef(slide)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const startSlide = previousSlideRef.current
    const endSlide = slide
    let startTime = null

    const transitionDurations = {
      '1-2': STAGE_DURATION * 3,
      '2-3': STAGE_DURATION,
      '3-4': STAGE_DURATION * 3,
      '4-5': STAGE_DURATION,
      '5-6': STAGE_DURATION * 2,
      '6-7': STAGE_DURATION * 2,
      '7-6': STAGE_DURATION * 2,
      '6-5': STAGE_DURATION * 2,
      '5-4': STAGE_DURATION,
    }

    const transitionKey = `${startSlide}-${endSlide}`
    const totalDuration =
      transitionDurations[transitionKey] || STAGE_DURATION

    // =====================================
    // DRAWING HELPERS
    // =====================================

    function drawText(text, x, y, {
      size = 26,
      weight = 'normal',
      color = COLORS.navy,
      align = 'left',
      opacity = 1,
    } = {}) {
      ctx.save()
      ctx.globalAlpha *= opacity
      ctx.font = `${weight} ${size}px Arial`
      ctx.fillStyle = color
      ctx.textAlign = align
      ctx.textBaseline = 'middle'
      ctx.fillText(text, x, y)
      ctx.restore()
    }

    function drawMath(text, x, y, {
      size = 30,
      align = 'left',
      opacity = 1,
    } = {}) {
      ctx.save()
      ctx.globalAlpha *= opacity
      ctx.font = `bold ${size}px Arial`
      ctx.textBaseline = 'middle'

      const characters = [...text]
      const widths = characters.map(character =>
        ctx.measureText(character).width
      )

      const totalWidth = widths.reduce(
        (total, width) => total + width,
        0
      )

      let currentX = align === 'center'
        ? x - totalWidth / 2
        : x

      characters.forEach((character, index) => {
        const width = widths[index]

        if (character === 'j' || character === 'k') {
          ctx.fillStyle = COLORS.redHighlight
          ctx.fillRect(
            currentX - 2,
            y - size * 0.55,
            width + 4,
            size * 1.1
          )

          ctx.strokeStyle = COLORS.redBorder
          ctx.lineWidth = 0.8
          ctx.strokeRect(
            currentX - 2,
            y - size * 0.55,
            width + 4,
            size * 1.1
          )

          ctx.fillStyle = COLORS.red
        } else {
          ctx.fillStyle = COLORS.navy
        }

        ctx.textAlign = 'left'
        ctx.fillText(character, currentX, y)
        currentX += width
      })

      ctx.restore()
    }

    // =====================================
    // SLIDE 1
    // =====================================

    function drawSlideOneText(opacity = 1) {
      drawText('Factorization', 90, 90, {
        size: 39,
        weight: 'bold',
        opacity,
      })

      drawText('the goal', 90, 165, {
        size: 28,
        weight: 'bold',
        opacity,
      })

      drawText('represent x² - 9x + 20 by a form of', 90, 225, {
        size: 25,
        opacity,
      })

      drawText('we then should look for the value of', 90, 345, {
        size: 25,
        opacity,
      })

      drawMath('j', 575, 345, { size: 27, opacity })
      drawText('and', 600, 345, { size: 25, opacity })
      drawMath('k', 650, 345, { size: 27, opacity })
    }

    function drawSlideOneExpression(x = 565, y = 225, size = 27) {
      drawMath('(x+j)(x+k)', x, y, { size })
    }

    function drawSlideOne() {
      drawSlideOneText()
      drawSlideOneExpression()
    }

    // =====================================
    // SLIDE 2
    // =====================================

    function drawSlideTwoTitle(opacity = 1) {
      drawText("Let's try expand this form", 90, 75, {
        size: 29,
        weight: 'bold',
        opacity,
      })
    }

    function drawFirstEquationLine(opacity = 1) {
      drawMath('(x+j)(x+k)', 90, LAYOUT.firstLineY, {
        size: 34,
        opacity,
      })

      drawText('=', LAYOUT.equalsX, LAYOUT.firstLineY, {
        size: 35,
        opacity,
      })

      drawMath(
        'x² + kx + jx + jk',
        LAYOUT.expressionX,
        LAYOUT.firstLineY,
        { size: 32, opacity }
      )
    }

    function drawSlideTwo() {
      drawSlideTwoTitle()
      drawFirstEquationLine()
    }

    // =====================================
    // SLIDE 3
    // =====================================

    function drawSimplifiedLine(opacity = 1) {
      drawText('=', LAYOUT.equalsX, LAYOUT.secondLineY, {
        size: 35,
        opacity,
      })

      drawMath(
        'x² + (j+k)x + jk',
        LAYOUT.expressionX,
        LAYOUT.secondLineY,
        { size: 32, opacity }
      )
    }

    function drawSlideThree() {
      drawSlideTwo()
      drawSimplifiedLine()
    }

    // =====================================
    // SLIDE 4
    // =====================================

    function drawSlideFourTitle(opacity = 1) {
      drawText(
        "Let's now connect this form with the original expression",
        90,
        75,
        {
          size: 26,
          weight: 'bold',
          opacity,
        }
      )
    }

    function drawSlideFourEquation(opacity = 1) {
      drawMath('x² + (j+k)x + jk', 90, 165, {
        size: 30,
        opacity,
      })

      drawText('=', 445, 165, {
        size: 35,
        opacity,
      })

      drawMath('x² - 9x + 20', 500, 165, {
        size: 30,
        opacity,
      })
    }

    function drawSlideFourExplanation(opacity = 1) {
      drawMath('j+k', 90, 260, {
        size: 29,
        opacity,
      })

      drawText('represents -9', 155, 260, {
        size: 27,
        opacity,
      })

      drawMath('jk', 90, 320, {
        size: 29,
        opacity,
      })

      drawText('represents 20', 155, 320, {
        size: 27,
        opacity,
      })
    }

    function drawSlideFourBase(opacity = 1) {
      drawSlideFourTitle(opacity)
      drawSlideFourEquation(opacity)
      drawSlideFourExplanation(opacity)
    }

    function drawSlideFour() {
      drawSlideFourBase()
    }

    // =====================================
    // SLIDE 5
    // =====================================

    function drawSlideFiveExtra(opacity = 1) {
      drawText('Can k = 4 and j = 5?', 90, 405, {
        size: 29,
        weight: 'bold',
        opacity,
      })

      drawMath('kj = 4 × 5 = 20', 90, 465, {
        size: 29,
        opacity,
      })

      drawMath('j+k = 5 + 4 = 9', 90, 515, {
        size: 29,
        opacity,
      })

      drawText('so no.', 440, 515, {
        size: 27,
        opacity,
      })
    }

    function drawSlideFive() {
      drawSlideFour()
      drawSlideFiveExtra()
    }

    // =====================================
    // SLIDE 6
    // =====================================

    function drawSlideSixExtra(opacity = 1) {
      drawText('Can k = -4 and j = -5?', 90, 405, {
        size: 29,
        weight: 'bold',
        opacity,
      })

      drawMath('kj = (-4) × (-5) = 20', 90, 465, {
        size: 29,
        opacity,
      })

      drawMath('j+k = -5 + (-4) = -9', 90, 515, {
        size: 29,
        opacity,
      })

      drawText('so yes.', 530, 515, {
        size: 27,
        opacity,
      })
    }

    function drawSlideSix() {
      drawSlideFour()
      drawSlideSixExtra()
    }

    // =====================================
    // SLIDE 7
    // =====================================

    function drawSlideSevenEquation(opacity = 1) {
      drawMath(
        'x² - 9x + 20 = (x-4)(x-5)',
        450,
        310,
        {
          size: 38,
          align: 'center',
          opacity,
        }
      )
    }

    function drawSlideSeven() {
      drawSlideSevenEquation()
    }

    // =====================================
    // TRANSITIONS
    // =====================================

    function drawTransitionOneToTwo(elapsed) {
      const startX = 565
      const startY = 225
      const endX = 90
      const endY = LAYOUT.firstLineY

      if (elapsed < STAGE_DURATION) {
        const progress = easeInOut(clamp(elapsed / STAGE_DURATION))

        drawSlideOneText(1 - progress)
        drawSlideOneExpression(startX, startY, 27)

      } else if (elapsed < STAGE_DURATION * 2) {
        const progress = easeInOut(
          clamp((elapsed - STAGE_DURATION) / STAGE_DURATION)
        )

        const currentX = startX + (endX - startX) * progress
        const currentY = startY + (endY - startY) * progress
        const currentSize = 27 + 7 * progress

        drawSlideOneExpression(currentX, currentY, currentSize)

      } else {
        const progress = easeInOut(
          clamp((elapsed - STAGE_DURATION * 2) / STAGE_DURATION)
        )

        drawSlideTwoTitle(progress)

        drawText('=', LAYOUT.equalsX, LAYOUT.firstLineY, {
          size: 35,
          opacity: progress,
        })

        drawMath(
          'x² + kx + jx + jk',
          LAYOUT.expressionX,
          LAYOUT.firstLineY,
          { size: 32, opacity: progress }
        )

        drawMath('(x+j)(x+k)', endX, endY, { size: 34 })
      }
    }

    function drawTransitionTwoToThree(elapsed) {
      drawSlideTwo()

      const progress = easeInOut(clamp(elapsed / STAGE_DURATION))
      drawSimplifiedLine(progress)
    }

    function drawSlideThreeWithOpacity(opacity) {
      drawSlideTwoTitle(opacity)
      drawFirstEquationLine(opacity)
      drawSimplifiedLine(opacity)
    }

    function drawTransitionThreeToFour(elapsed) {
      const startX = LAYOUT.expressionX
      const startY = LAYOUT.secondLineY
      const endX = 90
      const endY = 165

      if (elapsed < STAGE_DURATION) {
        const progress = easeInOut(clamp(elapsed / STAGE_DURATION))

        drawSlideThreeWithOpacity(1 - progress)

        drawMath(
          'x² + (j+k)x + jk',
          startX,
          startY,
          { size: 32 }
        )

      } else if (elapsed < STAGE_DURATION * 2) {
        const progress = easeInOut(
          clamp((elapsed - STAGE_DURATION) / STAGE_DURATION)
        )

        const currentX = startX + (endX - startX) * progress
        const currentY = startY + (endY - startY) * progress

        drawMath(
          'x² + (j+k)x + jk',
          currentX,
          currentY,
          { size: 32 - 2 * progress }
        )

      } else {
        const progress = easeInOut(
          clamp((elapsed - STAGE_DURATION * 2) / STAGE_DURATION)
        )

        drawSlideFourTitle(progress)

        drawText('=', 445, 165, {
          size: 35,
          opacity: progress,
        })

        drawMath('x² - 9x + 20', 500, 165, {
          size: 30,
          opacity: progress,
        })

        drawSlideFourExplanation(progress)

        drawMath('x² + (j+k)x + jk', endX, endY, {
          size: 30,
        })
      }
    }

    function drawTransitionFourToFive(elapsed) {
      drawSlideFour()

      const progress = easeInOut(clamp(elapsed / STAGE_DURATION))
      drawSlideFiveExtra(progress)
    }

    function drawTransitionFiveToSix(elapsed) {
      drawSlideFour()

      if (elapsed < STAGE_DURATION) {
        const progress = easeInOut(clamp(elapsed / STAGE_DURATION))
        drawSlideFiveExtra(1 - progress)
      } else {
        const progress = easeInOut(
          clamp((elapsed - STAGE_DURATION) / STAGE_DURATION)
        )

        drawSlideSixExtra(progress)
      }
    }

    function drawSlideSixWithOpacity(opacity) {
      drawSlideFourBase(opacity)
      drawSlideSixExtra(opacity)
    }

    function drawTransitionSixToSeven(elapsed) {
      if (elapsed < STAGE_DURATION) {
        const progress = easeInOut(clamp(elapsed / STAGE_DURATION))
        drawSlideSixWithOpacity(1 - progress)
      } else {
        const progress = easeInOut(
          clamp((elapsed - STAGE_DURATION) / STAGE_DURATION)
        )

        drawSlideSevenEquation(progress)
      }
    }

    function drawTransitionSevenToSix(elapsed) {
      if (elapsed < STAGE_DURATION) {
        const progress = easeInOut(clamp(elapsed / STAGE_DURATION))
        drawSlideSevenEquation(1 - progress)
      } else {
        const progress = easeInOut(
          clamp((elapsed - STAGE_DURATION) / STAGE_DURATION)
        )

        drawSlideSixWithOpacity(progress)
      }
    }

    function drawTransitionSixToFive(elapsed) {
      drawSlideFour()

      if (elapsed < STAGE_DURATION) {
        const progress = easeInOut(clamp(elapsed / STAGE_DURATION))
        drawSlideSixExtra(1 - progress)
      } else {
        const progress = easeInOut(
          clamp((elapsed - STAGE_DURATION) / STAGE_DURATION)
        )

        drawSlideFiveExtra(progress)
      }
    }

    function drawTransitionFiveToFour(elapsed) {
      drawSlideFour()

      const progress = easeInOut(clamp(elapsed / STAGE_DURATION))
      drawSlideFiveExtra(1 - progress)
    }

    // =====================================
    // MAIN DRAW FUNCTION
    // =====================================

    function draw(elapsed) {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
      ctx.fillStyle = COLORS.background
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

      const key = `${startSlide}-${endSlide}`

      switch (key) {
        case '1-2':
          drawTransitionOneToTwo(elapsed)
          break
        case '2-3':
          drawTransitionTwoToThree(elapsed)
          break
        case '3-4':
          drawTransitionThreeToFour(elapsed)
          break
        case '4-5':
          drawTransitionFourToFive(elapsed)
          break
        case '5-6':
          drawTransitionFiveToSix(elapsed)
          break
        case '6-7':
          drawTransitionSixToSeven(elapsed)
          break
        case '7-6':
          drawTransitionSevenToSix(elapsed)
          break
        case '6-5':
          drawTransitionSixToFive(elapsed)
          break
        case '5-4':
          drawTransitionFiveToFour(elapsed)
          break
        default:
          if (endSlide === 1) drawSlideOne()
          if (endSlide === 2) drawSlideTwo()
          if (endSlide === 3) drawSlideThree()
          if (endSlide === 4) drawSlideFour()
          if (endSlide === 5) drawSlideFive()
          if (endSlide === 6) drawSlideSix()
          if (endSlide === 7) drawSlideSeven()
      }
    }

    // =====================================
    // ANIMATION LOOP
    // =====================================

    function animate(timestamp) {
      if (startTime === null) startTime = timestamp

      const elapsed = Math.min(
        timestamp - startTime,
        totalDuration
      )

      draw(elapsed)

      if (elapsed < totalDuration) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        previousSlideRef.current = endSlide
        draw(totalDuration)
      }
    }

    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [slide])

  return (
    <canvas
      ref={canvasRef}
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      className="factorisation-canvas"
      aria-label={`Factorisation presentation, slide ${slide}`}
    />
  )
}

// =====================================
// EXERCISES
// =====================================

function Exercises() {
  const [isOpen, setIsOpen] = useState(false)
  const [answers, setAnswers] = useState(
    QUESTIONS.map(() => '')
  )

  function updateAnswer(index, value) {
    setAnswers(current =>
      current.map((answer, i) => i === index ? value : answer)
    )
  }

  return (
    <section className="exercises-card">
      <div className="section-heading">
        <span className="section-label">PRACTISE YOUR UNDERSTANDING</span>
        <h2>Exercises</h2>
      </div>

      <p className="exercises-description">
        Read through the slides or watch your teacher's walkthrough,
        then answer the questions below.
      </p>

      <p className="exercises-description">
        You can write your answers in the text boxes, or you can
        explain your answers verbally in a video of yourself using
        the slides above.
      </p>

      <button
        type="button"
        className="exercise-toggle"
        onClick={() => setIsOpen(current => !current)}
        aria-expanded={isOpen}
      >
        <span><strong>Click to view detail</strong></span>
        <span className="exercise-toggle-icon">{isOpen ? '−' : '+'}</span>
      </button>

      {isOpen && (
        <>
          <div className="questions-list">
            {QUESTIONS.map((item, index) => (
              <div className="question-item" key={index}>
                <label
                  className="question-title"
                  htmlFor={`question-${index}`}
                >
                  <span className="question-number">
                    Question {index + 1}
                  </span>
                  {item.question}
                </label>

                <textarea
                  id={`question-${index}`}
                  className="answer-input"
                  value={answers[index]}
                  onChange={event =>
                    updateAnswer(index, event.target.value)
                  }
                  placeholder={item.placeholder}
                  rows={4}
                />

                <div className="video-answer-prompt">
                  <span className="video-prompt-icon">▶</span>
                  <span>
                    Or explain it verbally in your video.
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="exercise-submit-area">
            <button
              type="button"
              className="exercise-submit-button"
              onClick={() => {
                const response = QUESTIONS.map((item, index) => {
                  const answer = answers[index].trim() || '[No written response]'
                  return `Question ${index + 1}: ${item.question}\n\nYour response:\n${answer}`
                }).join('\n\n----------------------------------------\n\n')

                const fileContent = [
                  '# Factorising Quadratic Expressions - Exercise Responses',
                  '',
                  `Downloaded: ${new Date().toLocaleString()}`,
                  '',
                  ...QUESTIONS.flatMap((item, index) => [
                    `## Question ${index + 1}`,
                    '',
                    item.question,
                    '',
                    '### Your response',
                    '',
                    answers[index].trim() || '*[No written response]*',
                    '',
                  ]),
                ].join('\n')

                const file = new Blob([fileContent], {
                  type: 'text/markdown;charset=utf-8',
                })
                const fileUrl = URL.createObjectURL(file)
                const downloadLink = document.createElement('a')
                downloadLink.href = fileUrl
                downloadLink.download = 'factorising-quadratic-responses.md'
                document.body.appendChild(downloadLink)
                downloadLink.click()
                document.body.removeChild(downloadLink)
                URL.revokeObjectURL(fileUrl)
              }}
            >
              Click to download your response
            </button>

            <p className="drive-submit-prompt">
              Then submit your response or your video to{' '}
              <a
                href="https://drive.google.com/drive/folders/1x_nSGfsAJAF20O2wPvrmv8b64eomiXDK?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                this Google Drive folder
              </a>.
            </p>
          </div>
        </>
      )}
    </section>
  )
}

// =====================================
// TEACHER WALKTHROUGH
// =====================================

function TeacherWalkthrough() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="walkthrough-card">
      <div className="section-heading">
        <span className="section-label">LEARNING SUPPORT</span>
        <h2>Teacher's Walkthrough</h2>
      </div>

      <p className="walkthrough-description">
        Watch your teacher explain the slides and demonstrate
        how to factorise the quadratic expression.
      </p>

      <button
        type="button"
        className="exercise-toggle"
        onClick={() => setIsOpen(current => !current)}
        aria-expanded={isOpen}
      >
        <span><strong>Click to view detail</strong></span>
        <span className="exercise-toggle-icon">{isOpen ? '−' : '+'}</span>
      </button>

      {isOpen && (
      <>
      <div className="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/xMn8HrtJi0M?si=tRiSDNfKQDnmDi2R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      </>
      )}
    </section>
  )
}

// =====================================
// MAIN PAGE
// =====================================

export default function ResourceTwo() {
  const [slide, setSlide] = useState(1)

  const previousSlide = () => {
    setSlide(current => Math.max(current - 1, 1))
  }

  const nextSlide = () => {
    setSlide(current => Math.min(current + 1, 7))
  }

  return (
    <div className="resource-two">
      <div className="resource-two-header">

        <h1>Factorising Quadratic Expressions</h1>

        <p>
          View the slides and a video to understand how to factorise a quadratic expression.
        </p>
        <p>
          Then answer the questions in the exerccise.  
        </p>
      </div>

      <section className="factorisation-presentation">
        <div className="presentation-canvas">
          <ResourceCanvas slide={slide} />
        </div>

        <div className="presentation-controls">
          <button
            type="button"
            className="slide-control"
            onClick={previousSlide}
            disabled={slide === 1}
          >
            ← Previous
          </button>

          <div className="slide-indicators">
            {Array.from({ length: 7 }, (_, index) => index + 1).map(number => (
              <button
                key={number}
                type="button"
                className={
                  slide === number
                    ? 'slide-dot active'
                    : 'slide-dot'
                }
                onClick={() => setSlide(number)}
                aria-label={`Go to slide ${number}`}
                aria-current={slide === number ? 'step' : undefined}
              />
            ))}
          </div>

          <span className="slide-number">
            {slide} / 7
          </span>

          <button
            type="button"
            className="slide-control next"
            onClick={nextSlide}
            disabled={slide === 7}
          >
            Next →
          </button>
        </div>
      </section>

      <div className="learning-support-sections">
        <TeacherWalkthrough />
        <Exercises />
      </div>
    </div>
  )
}
