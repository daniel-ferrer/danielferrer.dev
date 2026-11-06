import styles from './FlowDiagram.module.css'

/**
 * FlowDiagram — a box-and-arrow diagram built from HTML, so it wraps
 * on narrow screens instead of shrinking like an image.
 *
 * caption: text alternative describing the whole diagram (always shown)
 * flows: [{ label?, steps: [...] }]
 *   step = 'Node text'            — a box
 *        | ['A', 'B', 'C']        — a stacked group of boxes
 *        | '→' | '←'              — a connector between boxes
 *        | { text, note?, kind? } — a box with a sub-label; kind: 'accent' | 'gate'
 */
export default function FlowDiagram({ caption, flows }) {
  return (
    <figure className={styles.figure}>
      {flows.map((flow, i) => (
        <div key={i} className={styles.flow}>
          {flow.label && <p className={styles.flowLabel}>{flow.label}</p>}
          <div className={styles.steps}>
            {pairArrows(flow.steps).map((unit, j) => (
              <div key={j} className={styles.unit}>
                {unit.map((step, k) => <Step key={k} step={step} />)}
              </div>
            ))}
          </div>
        </div>
      ))}
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  )
}

// Keep each connector with the box after it, so a wrapped line never
// ends on a dangling arrow.
function pairArrows(steps) {
  const units = []
  steps.forEach((step, i) => {
    const prevIsArrow = steps[i - 1] === '→' || steps[i - 1] === '←'
    if (prevIsArrow) units[units.length - 1].push(step)
    else units.push([step])
  })
  return units
}

function Step({ step }) {
  if (step === '→' || step === '←') {
    return (
      <span className={styles.arrow} aria-hidden="true">
        {step}
      </span>
    )
  }
  if (Array.isArray(step)) {
    return (
      <div className={styles.group}>
        {step.map((s, i) => <Step key={i} step={s} />)}
      </div>
    )
  }
  const node = typeof step === 'string' ? { text: step } : step
  return (
    <div className={`${styles.node} ${node.kind ? styles[node.kind] : ''}`}>
      <span className={styles.nodeText}>{node.text}</span>
      {node.note && <span className={styles.nodeNote}>{node.note}</span>}
    </div>
  )
}
