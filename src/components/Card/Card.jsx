import classNames from 'classnames/bind';
import styles from './Card.module.scss';
import { CommentIcon, DotIcon } from './icons';

const cx = classNames.bind(styles);

function Card({ src, alt, address, date, title, icon, heartCount, commentCount }) {
    return (
        <section className={cx('card-container')}>
            <img src={src} alt={alt} />
            <span className={cx('date-wrapper')}>
                <span className={cx('address')}>{address}</span>
                <span className={cx('date')}>{date}</span>
            </span>
            <span className={cx('tittle')}>{title}</span>
            <span className={cx('status')}>
                <span className={cx('click-heart')}>
                    {icon} {heartCount}
                </span>
                <span className={cx('comment')}>
                    <CommentIcon />
                    {commentCount}
                </span>
                <span className={cx('seen')}>
                    <DotIcon />
                    Đã đọc
                </span>
            </span>
        </section>
    );
}

export default Card;
