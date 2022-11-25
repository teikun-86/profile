import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

const Dropdown = ({ children, className }) => {
    return (
        <>
            <Menu as="div" className={`relative ${className}`}>
                {children}
            </Menu>
        </>
    );
};

const Content = ({ children, ...props }) => {
    let cls = "absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-1000 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-1 after:z-10 after:w-3 after:h-3 after:absolute after:-top-1 after:right-1 after:bg-white after:dark:bg-gray-1000 after:transform after:rotate-45 after:-z-10 ";

    if (props.className) {
        props.className += cls;
    } else {
        props.className = cls;
    }

    return (
        <>
            <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items {...props}>
                    {children}
                </Menu.Items>
            </Transition>
        </>
    )
}

const Label = ({ children, ...props }) => {
    return (
        <>
            <Menu.Button as="div" {...props}>
                {children}
            </Menu.Button>
        </>
    );
}
const Item = ({ as = "button", href = "", children, onClick, target = "", raw = false, ...props }) => {
    let cls = "group flex items-center w-full items-center rounded-md px-2 py-2 cursor-pointer text-gray-800 hover:text-gray-1000 dark:text-gray-200 hover:dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-1000 ";

    if (raw === true) {
        return <Menu.Item {...props} as={as} onClick={onClick}>
            {children}
        </Menu.Item>
    }

    if (props.className) {
        props.className += cls;
    } else {
        props.className = cls;
    }

    if (as === 'a') {
        return (
            <Menu.Item as="div">
                <Link href={href} {...props}>
                    {children}
                </Link>
            </Menu.Item>
        );
    }

    return (
        <Menu.Item onClick={onClick} as="button" {...props}>
            {children}
        </Menu.Item>
    )
}


Dropdown.Label = Label;
Dropdown.Content = Content;
Dropdown.Item = Item;

export default Dropdown;