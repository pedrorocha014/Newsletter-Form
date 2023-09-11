import { InputHTMLAttributes } from 'react';
import iconImage from '../assets/icon-list.svg'
import desktopImage from '../assets/illustration-sign-up-desktop.svg'

type NewsletterFormProp = Pick<InputHTMLAttributes<HTMLButtonElement>, 'onClick'>;

function NewsletterForm(prop: NewsletterFormProp) {
    const listInfos = [
        "Product discovery and building what matters",
        "Measuring to ensore updates are a success",
        "And much more!"
    ] 

    return (
        <div className="bg-[#ffffff] w-1/2 h-3/4 rounded-3xl flex justify-evenly items-center">
            <div className="w-96">
                <h1 className="font-sans font-bold text-5xl mb-6">Stay updated!</h1>
                <p className="font-sans text-base mb-6">Join 60,000+ product managers receiving monthly updates on:</p>
                <div className="mb-10">
                    {listInfos.map((info, index) => {
                        return (
                            <div key={index} className='flex mb-2'>
                                <img src={iconImage} alt="Ícone" />
                                <p className="text-base ml-4">{info}</p>
                            </div>
                        );
                    })}
                </div>
                <p className="mb-1 font-sans font-bold text-xs">Email address</p>
                <input className="pl-4 w-96 h-14 mb-6" type="text" placeholder='email@company.com'/>
                <button 
                    className='w-96 h-14 bg-[#242742] text-white text-base font-bold rounded-xl hover:bg-[#FF6A3A]'
                    {...prop}
                >
                    Subscribe to monthly newsletter
                </button>
            </div>
            <div >
                <img src={desktopImage} alt="Desktop Image" />
            </div>
        </div>
    );
}

export default NewsletterForm;