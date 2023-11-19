import Container from "./Container";
import { EmailIcon, PhoneIcon, LocationIcon } from './ContactIcons';

const ContactSection = ({ data }) => {
  const { title, description, email, phone, location } = data;
  return (
    <Container className="flex w-full flex-col my-16 items-center justify-center text-center">
      <div className="text-xl" id="contact">
        <h2 className="text-4xl font-bold text-center mb-8">{title}</h2>
        <p className="pb-8">{description}</p>
        <span className="block mb-2">
          <EmailIcon /> {email}
        </span>
        <span className="block mb-2">
          <PhoneIcon /> {phone}
        </span>
        <span className="block mb-2">
          <LocationIcon /> {location}
        </span>
      </div>
    </Container>
  );
}



export default ContactSection;