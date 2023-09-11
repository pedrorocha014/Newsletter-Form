import iconSuccess from '../assets/icon-success.svg'

function NewsletterModal() {
    return (
        <div className="bg-[#ffffff] w-1/4 h-2/4 rounded-3xl flex justify-evenly items-center">
            <div className="w-96">
                <img className='mb-6' src={iconSuccess} alt="Success Icon" />
                <h1 className='mb-6 font-sans font-bold text-5xl'>Thanks for subscribing!</h1>
                <p className='mb-6 font-sans text-base'>A confirmation email has been sent to <b>ash@loremcompany.com</b>. Please open it and click the button inside to confirm your subscription.</p>
                <button className='w-96 h-14 bg-[#242742] text-white text-base font-bold rounded-xl hover:bg-[#FF6A3A]'>
                        Subscribe to monthly newsletter
                </button>
            </div>
        </div>
    );
}

export default NewsletterModal;