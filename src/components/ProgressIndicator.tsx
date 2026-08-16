type ProgressProps = { published: number; total: number }

export function ProgressIndicator({ published, total }: ProgressProps) {
  const percentage = (published / total) * 100
  return (
    <section className="progress" aria-label={`Progresso: ${published} de ${total} posts publicados`}>
      <div className="progress-copy">
        <span className="eyebrow">Progresso do semestre</span>
        <strong>{published} <small>de {total} posts publicados</small></strong>
      </div>
      <div className="progress-track" aria-hidden="true"><span style={{ width: `${percentage}%` }} /></div>
      <span className="mono progress-value">{String(percentage).padStart(2, '0')}%</span>
    </section>
  )
}
