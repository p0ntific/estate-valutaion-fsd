import andrew from "../../assets/imgs/contacts/andrew.jpg";
import ivan from "../../assets/imgs/contacts/Ivan.jpg";
import roma from "../../assets/imgs/contacts/Roma.jpg";
import maxn from "../../assets/imgs/contacts/maxNoName.jpg";
import maxi from "../../assets/imgs/contacts/maxIgitov.jpg";
import victor from "../../assets/imgs/contacts/victor.jpg";
import gpbLogo from "../../assets/imgs/gpbLogo.png";
import moex from "../../assets/imgs/moex.png";
import { Contact } from "./contactType";
import { Partner } from "./partnerType";

export const contactsData: Contact[] = [
    {
        name: "Игитов Максим",
        status: "Data Scientist / Team Lead",
        img: maxi,
        telegram: "MaksIgitov",
        github: "https://github.com/MaximIgitov",
        university: "НИУ ИТМО",
    },
    {
        name: "Даутов Максим",
        status: "product manager / business analyst",
        img: maxn,
        telegram: "DautMM",
        github: "#",
        university: "НИУ ИТМО",
    },
    {
        name: "Якимов Роман",
        status: "Python, Backend-developer",
        img: roma,
        telegram: "littump",
        github: "https://github.com/Littump",
        university: "НИТУ МИСИС",
    },
    {
        name: "Горошко Андрей",
        status: "frontend-разработчик",
        img: andrew,
        telegram: "andrew_pontific",
        github: "https://github.com/p0ntific",
        university: "СПБГУ",
    },
    {
        name: "Виноградов Иван",
        status: "ML - developer / Data scientist",
        img: ivan,
        telegram: "Rollersman",
        github: "https://github.com/Guettoman",
        university: "НИУ МФТИ",
    },
    {
        name: "Ратков Виктор",
        status: "ml/dl",
        img: victor,
        telegram: "physnomath",
        github: "https://github.com/VirusTI",
        university: "НИУ МФТИ",
    },
];

export const partnerData: Partner[] = [
    {
        img: gpbLogo,
        name: "Газпромбанк",
    },
    {
        img: moex,
        name: "Московская Биржа",
    },
];
