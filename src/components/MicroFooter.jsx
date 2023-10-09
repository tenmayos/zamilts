function MicroFooter() {

    const currentYear = new Date().getFullYear();
    
    return (
        <div className='text-center'>
            <span className='text-sm text-center pb-4'>
                © {currentYear} Zamil Trade & Services All rights reserved
            </span>
        </div>
    )
}

export default MicroFooter;