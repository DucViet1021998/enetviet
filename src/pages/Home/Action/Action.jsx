import classNames from 'classnames/bind';
import styles from './Action.module.scss';

const cx = classNames.bind(styles);

function Action({ title, icon }) {
    const handleClick = () => {
        alert('Chưa chọn được đâu Anh!');
    };
    return (
        <>
            <div onClick={handleClick} className={cx('container')}>
                <span className={cx('icon')}>{icon}</span>
                <span className={cx('title')}>{title}</span>
            </div>
        </>
    );
}

export default Action;
