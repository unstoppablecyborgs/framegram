import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import s from '../Sidebar.module.scss'

type Props = {
  
  label: string
  href: string
  iconActive: any
  iconDefault: any
}

export const SidebarLink = ({ href, label, iconActive, iconDefault }: Props) => {
  const pathname = usePathname()
  const isActive = href === pathname
  const isDisabled = false
  const Icon = isActive ? iconActive : iconDefault

  return (
    
    <Link href={href} className={clsx(s.link, { [s.disabled]: isDisabled })}>
      <Icon width={24} height={24} />
      <h4 className={isActive ? s.active : s.link}> {label}</h4>
    </Link>
  )
}