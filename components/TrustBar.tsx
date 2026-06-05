'use client'

import { useCountUp } from '@/hooks/useCountUp'
import { STATS } from '@/lib/constants'

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value)
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}
      className="flex flex-col items-center text-center px-4 py-5 border-r border-white/10 last:border-r-0">
      <span className="text-2xl md:text-3xl font-black text-gold">{count}{suffix}</span>
      <span className="text-white/75 text-xs mt-1 font-medium">{label}</span>
    </div>
  )
}

export default function TrustBar() {
  return (
    <div className="bg-navy">
      <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-5">
        {STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  )
}
