import { Contact } from "@/shared/config/contactType";
import Link from "@/shared/ui/Link";
import { memo } from "react";

const ContactCard = memo(
    ({ name, telegram, img, github, status, university }: Contact) => {
        return (
            <div className="card w-72 bg-base-100 border border-blue-500">
                <figure>
                    <img src={img} alt="contact" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{status}</p>
                    <p>{university}</p>
                    <div className="flex gap-4">
                        <Link
                            variant="text"
                            className=""
                            to={`https://t.me/${telegram}`}
                        >
                            телеграм
                        </Link>
                        <Link
                            variant="text"
                            className=""
                            to={`https://github.com/${github}`}
                        >
                            гитхаб
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
);

export default ContactCard;
