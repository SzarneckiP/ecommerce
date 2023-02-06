import React from 'react'
import Link from 'next/link'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {

    const currentYear = new Date().getFullYear()

    return (
        <div className='footer-container'>
            <p>{currentYear} E-commerce Store All rights reserved</p>
            <p className='icons'>
                <Link href='https://www.instagram.com/' cursor={'pointer'} target='_blank' rel='noreferrer'>
                    <AiFillInstagram />
                </Link>
                <Link href='https://twitter.com/' cursor={'pointer'} target='_blank' rel='noreferrer'>
                    <AiFillTwitterCircle />
                </Link>


            </p>
        </div>
    )
}

export default Footer