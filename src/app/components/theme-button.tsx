'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { useTheme } from "next-themes"

export default function ThemeButton() {

    const { setTheme, theme } = useTheme()

    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

  return (
    <Button onClick={handleTheme} size='icon' className='bg-white dark:bg-[#131313] text-black dark:text-white hover:bg-[#eee] dark:hover:bg-[#222]'>
        <BsSun className='hidden dark:inline-block'/>
        <BsMoon className='dark:hidden'/>
    </Button>
  )
}
