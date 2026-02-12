import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/kevincui1034" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/kevincui-datascientist/" },
]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((items, index) => {
                return (
                    <Link href={items.path} key={index} className={iconStyles}>
                        {items.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;