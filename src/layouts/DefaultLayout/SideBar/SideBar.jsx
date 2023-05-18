import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import MenuIcon from './Menu/MenuIcon';
import { EnetvietIcon, HomeIcon, MessageIcon, MailIcon, PhoneIcon, Chart1Icon, SettingIcon, Chart2Icon } from './icons';

import Nav from 'react-bootstrap/Nav';

const cx = classNames.bind(styles);

const navBar = [
    {
        icon: <EnetvietIcon />,
    },
    {
        href: '/home',
        icon: <HomeIcon />,
    },
    {
        href: '/message',
        icon: <MessageIcon />,
    },
    {
        href: '/mail',
        icon: <MailIcon />,
    },
    {
        href: '/Phone',
        icon: <PhoneIcon />,
    },
    {
        href: '/chart1',
        icon: <Chart1Icon />,
    },
    {
        href: '/chart2',
        icon: <Chart2Icon />,
    },
    {
        href: '/setting',
        icon: <SettingIcon />,
    },
];

function Sidebar() {
    return (
        <aside className={cx('container')}>
            <Nav variant="pills" defaultActiveKey="/home" className="flex-column">
                {navBar.map((icon, i) => (
                    <MenuIcon href={icon.href ? icon.href : null} key={i} icon={icon.icon} />
                ))}
            </Nav>
        </aside>
    );
}

export default Sidebar;
