import { useState, type PointerEvent } from 'react'

const cells = Array.from({ length: 49 }, (_, index) => index)

export function PixelMatrix() {
  const [active, setActive] = useState(24)

  const handlePointer = (event: PointerEvent<HTMLDivElement>) => {
    const target = (event.target as HTMLElement).closest<HTMLElement>('[data-cell]')
    if (target) setActive(Number(target.dataset.cell))
  }

  return (
    <div className="visual-wrap" aria-hidden="true">
      <div className="matrix-label mono">matriz[7][7]</div>
      <div className="pixel-matrix" onPointerMove={handlePointer} onPointerLeave={() => setActive(24)}>
        {cells.map((cell) => {
          const distance = Math.abs((cell % 7) - (active % 7)) + Math.abs(Math.floor(cell / 7) - Math.floor(active / 7))
          return <i key={cell} data-cell={cell} style={{ '--glow': Math.max(0, 1 - distance * 0.22) } as React.CSSProperties} />
        })}
      </div>
      <div className="channels mono"><span>R 218</span><span>G 76</span><span>B 104</span></div>
    </div>
  )
}
