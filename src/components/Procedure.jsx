import { useEffect, useState } from 'react'

export default function Procedure({ steps, criterion }) {
  const [revealed, setRevealed] = useState(1)
  const [repeating, setRepeating] = useState([])
  const [animationKey, setAnimationKey] = useState(0)
  useEffect(() => {
    if (!repeating.length) return
    const timer = window.setTimeout(() => setRepeating([]), 1200)
    return () => window.clearTimeout(timer)
  }, [animationKey, repeating])

  function handleStep(index) {
    const next = index + 2
    if (next <= steps.length && next > revealed) {
      setRevealed(next)
      return
    }
    if (index + 1 === steps.length) {
      setRepeating(criterion === 1 ? [4, 5] : [2, 3, 4])
      setAnimationKey(k => k + 1)
    }
  }

  function reset() {
    setRevealed(1)
    setRepeating([])
    setAnimationKey(k => k + 1)
  }

  return <ol className="procedure-list">
    {steps.map((step, index) => {
      const number = index + 1
      const last = number === steps.length
      return <li key={number} hidden={number > revealed}>
        <div className={last ? 'reset-step-wrapper' : ''}>
          <button key={`${number}-${animationKey}`} type="button"
            className={`procedure-step ${repeating.includes(number) ? 'repeat-glow' : ''}`}
            onClick={() => handleStep(index)}>
            <span className="step-number">{number}</span>
            <span>{step.text}</span>
            {!last && <span className="step-arrow" aria-hidden="true">↓</span>}
            {last && criterion === 2 && <span className="step-arrow" aria-hidden="true">↻</span>}
          </button>
          {last && <button type="button" className="reset-button" onClick={reset}
            aria-label={`Reset Criterion ${criterion} procedure`}>Reset ↻</button>}
        </div>
        {step.label && <div className={`example-prompt ${step.error ? 'ai-response-error' : ''}`}>
          <span className="example-prompt-label">{step.label}</span>
          <p><code>{step.prompt}</code></p>
        </div>}
        {repeating.includes(number) && <div className="repeat-banner" key={`${animationKey}-${number}`}>REPEAT!</div>}
      </li>
    })}
  </ol>
}
