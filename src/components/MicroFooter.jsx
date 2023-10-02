function MicroFooter() {

    const currentYear = new Date().getFullYear();
    
    return (
        <div className='text-center'>
            <hr className='border border-gray-200 my-4 w-2/3 lg:w-10/12 m-auto' />
            <span className='text-sm text-center pb-4'>
                © {currentYear} Zamil Trade & Services All rights reserved
            </span>
        </div>
    )
}

export default MicroFooter;