import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
    return (
        <div className='hero-banner-container'>
            <div>
                <p className='beats-solo'>SMALL text</p>
                <h3>Mid TEXT</h3>
                <img src="" alt="headphones" className='hero-banner-image' />
                <div>
                    <Link href='/product/ID'>
                        <button type='button'>
                            buttons text
                        </button>
                    </Link>
                    <div className='desc'>
                        <h5>Description</h5>
                        <p>DESCRIPTION</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner