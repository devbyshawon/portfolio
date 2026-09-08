import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import { navLinks, personalInfo } from '@/app/lib/constants';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-primary border-t border-border'>
            <div className='max-w-7xl mx-auto px-6 py-12'>
        
                {/* THREE COLUMNS: Links, Social, Copyright */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          
                    {/* COLUMN 1: Quick Links */}
                    <div>
                        <h3 className='font-grotesk font-bold text-text-light mb-4'>Navigation</h3>
                        <div className='flex flex-col gap-2'>
                            <Link href='/' className='text-text-secondary hover:text-secondary transition-colors'>
                                Home
                            </Link> 
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className='text-text-secondary hover:text-secondary transition-colors'
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* COLUMN 2: Social Links */}
                    <div>
                        <h3 className='font-grotesk font-bold text-text-light mb-4'>Follow</h3>
                        <div className='flex gap-4'>
                            <a
                                href={personalInfo.github}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-text-secondary hover:text-secondary transition-colors'
                                aria-label='GitHub'
                            >
                                <FaGithub size={24} />
                            </a>

                            <a
                                href={personalInfo.linkedin}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-text-secondary hover:text-secondary transition-colors'
                                aria-label='LinkedIn'
                            >
                                <FaLinkedin size={24} />
                            </a>

                            <a
                                href={personalInfo.twitter}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-text-secondary hover:text-secondary transition-colors'
                                aria-label='Twitter'
                            >
                                <FaTwitter size={24} />
                            </a>

                            <a      
                                href={`mailto:${personalInfo.email}`}
                                className='text-text-secondary hover:text-secondary transition-colors'
                                aria-label='Email'
                            >
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>

                    {/* COLUMN 3: About */}
                    <div>
                        <h3 className='font-grotesk font-bold text-text-light mb-4'>About</h3>
                        <p className='text-text-secondary text-sm leading-relaxed'>
                            Full-stack MERN developer building production systems. Currently working on ShopFlow and Bangla Resume Parser.
                        </p>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className='border-t border-border mb-6' />

                {/* BOTTOM: Copyright + Credit */}
                <div className='flex flex-col md:flex-row justify-between items-center text-text-muted text-sm'>
                    <p>© {currentYear} Arham. All rights reserved.</p>
                        <p>Built with Next.js, Tailwind CSS, & Framer Motion</p>
                </div>
            </div>
        </footer>        
    )
};

export default Footer;