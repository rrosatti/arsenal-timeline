function LeagueTrophy() {
  return (
    <svg className="trophy-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 6h12v2c0 5-2.5 9-6 11-3.5-2-6-6-6-11V6z" fill="#c8a44a" />
      <path d="M7 7h3v3c0 2-.5 3-1.5 3.5C7.5 12.5 7 11 7 9V7z" fill="#c8a44a" opacity="0.7" />
      <path d="M22 7h3v2c0 2-.5 3.5-1.5 4.5-1-1-1.5-2.5-1.5-4.5V7z" fill="#c8a44a" opacity="0.7" />
      <rect x="14" y="18" width="4" height="4" rx="0.5" fill="#c8a44a" opacity="0.6" />
      <rect x="11" y="22" width="10" height="3" rx="1" fill="#c8a44a" />
      <rect x="13" y="3" width="6" height="3" rx="1" fill="#c8a44a" opacity="0.5" />
    </svg>
  )
}

function FACup() {
  return (
    <svg className="trophy-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 5h12v3c0 6-2 10-6 13-4-3-6-7-6-13V5z" fill="#c8a44a" />
      <path d="M6 6h4v2c0 3-1 5-2.5 6C6.5 13 6 11 6 9V6z" fill="#c8a44a" opacity="0.7" />
      <path d="M22 6h4v3c0 2-.5 4-1.5 5C23 13 22 11 22 8V6z" fill="#c8a44a" opacity="0.7" />
      <rect x="14" y="19" width="4" height="3" rx="0.5" fill="#c8a44a" opacity="0.6" />
      <rect x="10" y="22" width="12" height="3" rx="1" fill="#c8a44a" />
      <circle cx="16" cy="11" r="2.5" fill="#1a1000" opacity="0.3" />
    </svg>
  )
}

function LeagueCup() {
  return (
    <svg className="trophy-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5h8v3c0 5-1.5 8-4 10-2.5-2-4-5-4-10V5z" fill="#c8a44a" />
      <path d="M8 7h4v1c0 2-.5 4-2 5-1-1-2-3-2-5V7z" fill="#c8a44a" opacity="0.7" />
      <path d="M20 7h4v1c0 2-1 4-2 5-1.5-1-2-3-2-5V7z" fill="#c8a44a" opacity="0.7" />
      <path d="M14 6h4v1h-4z" fill="#1a1000" opacity="0.2" />
      <rect x="14" y="16" width="4" height="4" rx="0.5" fill="#c8a44a" opacity="0.6" />
      <rect x="11" y="20" width="10" height="3" rx="1" fill="#c8a44a" />
    </svg>
  )
}

function EuropeanCup() {
  return (
    <svg className="trophy-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4h8v3c0 5-1.5 9-4 11-2.5-2-4-6-4-11V4z" fill="#c8a44a" />
      <path d="M6 5h6v2c0 3-1.5 6-3.5 7C7 13 6 10 6 7V5z" fill="#c8a44a" opacity="0.7" />
      <path d="M20 5h6v2c0 3-1 5.5-2.5 7C22 13 20 10 20 7V5z" fill="#c8a44a" opacity="0.7" />
      <rect x="14" y="17" width="4" height="4" rx="0.5" fill="#c8a44a" opacity="0.6" />
      <rect x="10" y="21" width="12" height="3" rx="1" fill="#c8a44a" />
      <circle cx="16" cy="9" r="2" fill="none" stroke="#1a1000" strokeWidth="0.8" opacity="0.3" />
    </svg>
  )
}

function getTrophyTypes(title: string): string[] {
  const t = title.toLowerCase()
  const types: string[] = []

  if (t.includes('double') || t.includes('league title') || t.includes('league championship') || t.includes('invincible'))
    types.push('league')
  if (t.includes('double') || t.includes('fa cup'))
    types.push('fa')
  if (t.includes('league cup'))
    types.push('league-cup')
  if (t.includes('cup winners') || t.includes('champions league'))
    types.push('european')

  return types
}

const trophyComponents: Record<string, () => JSX.Element> = {
  'league': LeagueTrophy,
  'fa': FACup,
  'league-cup': LeagueCup,
  'european': EuropeanCup,
}

export default function TrophyIcons({ title }: { title: string }) {
  const types = getTrophyTypes(title)
  if (types.length === 0) return null

  return (
    <span className="trophy-icons">
      {types.map((type) => {
        const Component = trophyComponents[type]
        return Component ? <Component key={type} /> : null
      })}
    </span>
  )
}
