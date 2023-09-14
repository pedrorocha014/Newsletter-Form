import iconImage from '../assets/icon-list.svg';
import desktopImage from '../assets/illustration-sign-up-desktop.svg';
import mobileImage from '../assets/illustration-sign-up-mobile.svg';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface NewsletterFormProp {
    onSubmit: () => void;
}

const listInfos = [
    "Product discovery and building what matters",
    "Measuring to ensore updates are a success",
    "And much more!"
] 

const sendNewsletterSchema = z.object({
    email: z.string().nonempty('Valid email required').email('Valid email required')
});

type SendNewsletterData = z.infer<typeof sendNewsletterSchema>; 

function NewsletterForm(prop: NewsletterFormProp) {
    const { register, handleSubmit, formState: { errors } } = useForm<SendNewsletterData>({resolver: zodResolver(sendNewsletterSchema)});
    const onSubmit = () => prop.onSubmit();

    return (
        <div className="bg-[#ffffff] w-full h-full flex flex-col sm:w-1/2 sm:h-3/4 sm:rounded-3xl sm:justify-evenly sm:flex-row-reverse sm:items-center">
            <div >
                <img className='w-full mb-6 sm:hidden' src={mobileImage} alt="Desktop Image" />
                <img className='hidden sm:block' src={desktopImage} alt="Desktop Image" />
            </div>
            <div className="w-3/4 sm:w-2/5 self-center">
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="mb-1 font-sans font-bold text-xs">Email address</label>
                    {errors.email && <span className='float-right text-[#FF6155] text-xs font-bold'>{errors.email.message}</span>}
                    <input 
                        className={`border rounded-md pl-4 w-full h-14 mb-6 ${errors.email ? "border-amber-500 bg-orange-200" : "border-slate-400 bg-[#ffffff]"}`} 
                        {...register('email')} 
                        placeholder='email@company.com' />
                    <input 
                        className='w-full h-14 bg-[#242742] text-white text-base font-bold rounded-xl hover:bg-[#FF6A3A]' 
                        type="submit" 
                        value="Subscribe to monthly newsletter"/>
                </form>
            </div>
        </div>
    );
}

export default NewsletterForm;