interface EyebrowProps {
  children: React.ReactNode
  light?: boolean
}

export default function Eyebrow({ children, light = false }: EyebrowProps) {
  return (
    <p className={`text-[10px] font-extrabold tracking-[3px] uppercase mb-2 ${light ? 'text-gold' : 'text-orange'}`}>
      {children}
    </p>
  )
}
