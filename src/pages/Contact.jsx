import { useEffect } from "react"
import { Banner } from "../components/Banner"
import { ContactSection } from "../components/ContactSection"
import contactpageimage from "../assets/images/contactpageimage.jpg"

export const Contact = () => {
    useEffect(()=>{
    window.scroll(0,0)
    },[])
    return(
        <>
        <Banner
  title="Contact FoodDash"
  description="Have questions about your order, delivery, or our menu? Our support team is ready to assist you. We're committed to providing a smooth food ordering experience and ensuring every customer receives the help they need. Get in touch and let us know how we can help."
  bgImage={contactpageimage}
/>
<ContactSection />
  </>
    )
}