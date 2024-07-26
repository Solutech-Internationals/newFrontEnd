import { FaLaptop, FaBriefcase, FaGraduationCap, FaPalette, FaDollarSign, FaWindows, FaApple, FaChromecast, FaLinux, FaMicrochip } from "react-icons/fa";

const data = [
    {
        question: 'Tell us, what will you use your Laptop for?',
        options: [
            { text: 'Essentials', icon: FaLaptop },
            { text: 'Work', icon: FaBriefcase },
            { text: 'Education', icon: FaGraduationCap },
            { text: 'Creative Hobbies', icon: FaPalette }
        ]
    },
    {
        question: 'What is your Budget?',
        options: [
            { text: 'Under 30k', icon: FaDollarSign },
            { text: '30k - 50k', icon: FaDollarSign },
            { text: '50k - 70k', icon: FaDollarSign },
            { text: 'Above 70k', icon: FaDollarSign }
        ]
    },

    {
        question: 'What is your preferred Processor?',
        options: [
            { text: 'Intel Core i3', icon: FaMicrochip },
            { text: 'Intel Core i5', icon: FaMicrochip },
            { text: 'Intel Core i7', icon: FaMicrochip },
            { text: 'Intel Core i9', icon: FaMicrochip }
        ]
    },
    {
        question: 'What is your preferred RAM?',
        options: [
            { text: '4GB', icon: FaMicrochip },
            { text: '8GB', icon: FaMicrochip },
            { text: '16GB', icon: FaMicrochip },
            { text: '32GB', icon: FaMicrochip }
        ]
    },
];

export default data;
