import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { MenuIcon } from './icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <section className={cx('title')}>
                <MenuIcon />
                <h2 className={cx('school-name')}>TRƯỜNG THPT THỦ ĐÔ</h2>
            </section>

            <section className={cx('user')}>
                <div className={cx('wrapper-name')}>
                    <span className={cx('name-user')}>Hà Trung Kiên</span>
                    <span className={cx('duty-user')}>Lãnh đạo nhà trường</span>
                </div>
                <img className={cx('avatar-user')} src="https://i.imgur.com/JBEbH21.jpg" alt="avatar" />
            </section>
        </header>
    );
}

export default Header;
