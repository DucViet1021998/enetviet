// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import Header from './Header';
import Sidebar from './SideBar';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('container')}>
            <Sidebar />
            <Stack gap={0}>
                <Header />
                <div>{children}</div>
            </Stack>
        </div>
    );
}
export default DefaultLayout;
