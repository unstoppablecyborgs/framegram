'use client'

import * as React from 'react'
import s from './Sidebar.module.scss'
import Link from 'next/link'
import SearchIcon from '@svg/outline/search-outline.svg'
import TrendingIcon from '@svg/outline/trending-up-outline.svg'
import HomeIcon from '@svg/outline/home-outline.svg'
import BookMarkIcon from '@svg/outline/bookmark-outline.svg'
import LogoutIcon from '@svg/outline/log-out-outline.svg'
import MessageIcon from '@svg/outline/message-circle-outline.svg'
import PersonIcon from '@svg/outline/person-outline.svg'
import PlusIcon from '@svg/outline/plus-square-outline.svg'
import clsx from 'clsx'

import SearchActiveIcon from '@svg/fill/search.svg'
import BookMarkActiveIcon from '@svg/fill/bookmark.svg'
import LogoutActiveIcon from '@svg/fill/log-out.svg'
import MessageActiveIcon from '@svg/fill/message-circle.svg'
import HomeActiveIcon from '@svg/fill/home.svg'
import PersonActiveIcon from '@svg/fill/person.svg'
import PlusActiveIcon from '@svg/fill/plus-square.svg'
import TrendingActiveIcon from '@svg/fill/trending-up.svg'
import { usePathname } from 'next/navigation'
import { SidebarLink } from './SidebarLink/SidebarLink'

export const Sidebar = () => {
  const pathname = usePathname()
  const isDisabled = false // заглушка для logout
  const isLogoutPage = pathname === '/logout'

  const topLinks = [
    {
      id: 1,
      href: '/',
      label: 'Feed',
      iconDefault: HomeIcon,
      iconActive: HomeActiveIcon,
      
    },
    {
      id: 2,
      href: '/create',
      label: 'Create',
      iconDefault: PlusIcon,
      iconActive: PlusActiveIcon
    },
    {
      id: 3,
      href: '/profile',
      label: 'My Profile',
      iconDefault: PersonIcon,
      iconActive: PersonActiveIcon
    },
    {
      id: 4,
      href: '/messenger',
      label: 'Messenger',
      iconDefault: MessageIcon,
      iconActive: MessageActiveIcon
    },
    {
      id: 5,
      href: '/search',
      label: 'Search',
      iconDefault: SearchIcon,
      iconActive: SearchActiveIcon
    },
  ]

  const middleLinks = [
    {
      id: 1,
      href: '/statistics',
      label: 'Statistics',
      iconDefault: TrendingIcon,
      iconActive: TrendingActiveIcon
    },
    {
      id: 2,
      href: '/favorites',
      label: 'Favorites',
      iconDefault: BookMarkIcon,
      iconActive: BookMarkActiveIcon
    },
  ]

  return (
    <nav className={s.sidebar}>
      <div className={clsx(s.block, s.block1)}>
        {topLinks.map(el => {
          return (
            <SidebarLink key={el.id} label={el.label} href={el.href} iconActive={el.iconActive} iconDefault={el.iconDefault}/>
          )
        })}
      </div>

      <div className={clsx(s.block, s.block2)}>
        {middleLinks.map(el => {
          return (
            <SidebarLink key={el.id} label={el.label} href={el.href} iconActive={el.iconActive} iconDefault={el.iconDefault}/> 
          )
        })}
      </div>

      <div className={s.block}>
        {/* снизу вместо isDisabled прописать типа el.href === pathname */}
        <Link href="/logout" className={clsx(s.link, { [s.disabled]: isDisabled })}>
          {isLogoutPage ? (
            <LogoutActiveIcon width={24} height={24} />
          ) : (
            <LogoutIcon width={24} height={24} />
          )}
          <h4 className={isLogoutPage ? s.active : s.link}>Log Out</h4>
        </Link>
      </div>
    </nav>
  )
}


