import ContactCard from "@/entities/contacts/ui/ContactCard";
import { contactsData } from "@/shared/config/contacts";
import { memo } from "react";

const ContactCards = memo(() => {
    const contacts = contactsData;
    return (
        <div className="flex flex-wrap justify-around py-20 gap-y-10">
            {contacts.map((contact, id) => (
                <ContactCard key={id + "partner"} {...contact} />
            ))}
        </div>
    );
});

export default ContactCards;
