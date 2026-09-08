'use client';

import { useState, useEffect} from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { navLinks } from '@/app/lib/constants';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true)
    }, [])

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        if (href.startsWith('#')) {
            const sectionId = href.slice(1);
            const element = document.getElementById(sectionId);
            element?.scrollIntoView({ behavior: 'smooth'});
        }
    }

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <>
            <nav className='fixed top-0 w-full bg-primary border-b border-border z-50 backdrop-blur-sm'>
                <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
                    {/* Nav Logo link */}
                    <Link
                        href='/'
                        className='font-grotesk text-2xl font-bold text-text-light hover:text-secondary transition-colors'
                    >
                        Arham
                    </Link>

                    {/* DESKTOP NAVIGATION - Hide on mobile */}
                    <div className='hidden md:flex items-center gap-8'>
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className='text-text-secondary hover:text-secondary transition-colors font-medium'
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* RIGHT SIDE: Theme Toggle + Mobile Menu Button */}
                    <div className='flex items-center gap-4'>            
                        
                        {/* THEME TOGGLE BUTTON */}
                        { mounted && (
                            <button
                                onClick={toggleTheme}
                                className='p-2 hover:bg-bg-subtle rounded-lg transition-colors'
                                aria-label='Toggle theme'
                            >
                                {theme === 'dark' ? (
                                    <Sun size={20} className='text-secondary' />
                                ) : (
                                    <Moon size={20} className='text-secondary' />
                                )}
                            </button>
                        )}

                        {/* MOBILE MENU BUTTON - Show on mobile only */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='md:hidden p-2 hover:bg-bg-subtle rounded-lg transition-colors'
                            aria-label='Toggle menu'
                        >
                            {isOpen ? (
                                <X size={24} className='text-text-light' />
                            ) : (
                                <Menu size={24} className='text-text-light' />
                            )}
                        </button>
                    </div>
                </div>

                {/* MOBILE MENU - Show only on mobile */}
                {isOpen && (
                    <div className='md:hidden bg-bg-subtle border-t border-border'>
                        <div className='flex flex-col gap-4 px-6 py-4'>
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => handleNavClick(link.href)}
                                    className='text-text-light hover:text-secondary transition-colors text-left font-medium'
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            <div className='h-[73px]' />
        </>
    )
};

export default Navbar;