import React from 'react'

function Footer() {
  return (
    <footer className='border-t border-t-gray-200 py-8'>
        <div className='container mx-auto px-4'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='mb-4 md:mb-0'>
                    <h2 className='text-sm font-bold'>Job Hunt</h2>
                    <p className='text-sm'>&copy; 2024 Your Company. All Rights reserved </p>
                </div>
                <div className='flex space-x-4 mt-4 md:mt-0'>
                    <a href="https://facebook.com" className='hover:text-gray-400' aria-label='Facebook'>
 
                    </a>
                    <a href="https://twitter.com" className='hover:text-gray-400' aria-label='Facebook'>
                    
                    </a>
                    <a href="https://linkedin.com" className='hover:text-gray-400' aria-label='Facebook'>
                    
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
