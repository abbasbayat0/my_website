const Social = () => {
    return (
        <div className='w-full h-52 z-10 absolute bottom-0 flex justify-center items-center lg:flex-col lg:left-10 xl:top-1/3 lg:top-1/2 lg:w-20 lg:justify-center md:flex-col md:left-10 md:top-1/2 md:w-20 md:justify-center'>
                <a href="https://www.linkedin.com/in/abbasbayat/" className="p-6 lg:p-0" target="_blank" rel="noreferrer">
                    <i className='fa-brands fa-linkedin transition-all duration-300 opacity-70 text-sand-50 text-3xl cursor-pointer md:text-5xl lg:text-5xl lg:mt-5 xl:text-3xl' 
                    onMouseEnter={(e)=>{e.target.classList.replace("opacity-70", "opacity-100");
                        e.target.classList.replace("text-sand-50", "text-jordy-400")}} 
                    onMouseLeave={(e)=>{e.target.classList.replace("opacity-100", "opacity-70");
                        e.target.classList.replace("text-jordy-400", "text-sand-50")}}>
                    </i>
                </a>
                <br />

                <a href="https://github.com/abbasbayat0" className="p-6 lg:p-0" target="_blank" rel="noreferrer">
                    <i className='fa-brands fa-github transition-all duration-300 opacity-70 text-sand-50 text-3xl cursor-pointer md:text-5xl lg:text-5xl lg:mt-5 xl:text-3xl' 
                    onMouseEnter={(e)=>{e.target.classList.replace("opacity-70", "opacity-100");
                        e.target.classList.replace("text-sand-50", "text-moody-500")}} 
                    onMouseLeave={(e)=>{e.target.classList.replace("opacity-100", "opacity-70");
                        e.target.classList.replace("text-moody-500", "text-sand-50")}}>
                    </i>
                </a>
                <br />

                <a href="https://t.me/abbasbayat" className="p-6 lg:p-0" target="_blank" rel="noreferrer">
                    <i className='fa-brands fa-telegram transition-all duration-300 opacity-70 text-sand-50 text-3xl cursor-pointer md:text-5xl lg:text-5xl lg:mt-5 xl:text-3xl' 
                    onMouseEnter={(e)=>{e.target.classList.replace("opacity-70", "opacity-100");
                        e.target.classList.replace("text-sand-50", "text-curious-500")}} 
                    onMouseLeave={(e)=>{e.target.classList.replace("opacity-100", "opacity-70");
                        e.target.classList.replace("text-curious-500", "text-sand-50")}}>
                    </i>
                </a>
                <br />

                <a href="https://www.instagram.com/abbasbayat0/" className="p-6 lg:p-0" target="_blank" rel="noreferrer">
                    <i className='fa-brands fa-instagram transition-all duration-300 opacity-70 text-sand-50 text-3xl cursor-pointer md:text-5xl lg:text-5xl lg:mt-5 xl:text-3xl' 
                    onMouseEnter={(e)=>{e.target.classList.replace("opacity-70", "opacity-100");
                        e.target.classList.replace("text-sand-50", "text-blush-600")}} 
                    onMouseLeave={(e)=>{e.target.classList.replace("opacity-70", "opacity-100");
                        e.target.classList.replace("text-blush-600", "text-sand-50")}}>
                    </i>
                </a>
            </div>
    );
}
export default Social;