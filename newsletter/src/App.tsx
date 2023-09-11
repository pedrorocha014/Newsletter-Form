import { useState } from "react";
import NewsletterForm from "./components/NewsletterForm";
import NewsletterModal from "./components/NewsletterModal";

function App() {
  const [newsletterSubmit, setNewsletterSubmit] = useState(false);

  const onSubmitForm = () => {
    setNewsletterSubmit(true);
  }

  return (
    <div className="bg-[#36384d] w-full h-full absolute top-0 left-0 flex justify-center items-center">
      {newsletterSubmit ? <NewsletterModal /> : <NewsletterForm onClick={() => onSubmitForm()}/>}
    </div>
  );
}

export default App;
