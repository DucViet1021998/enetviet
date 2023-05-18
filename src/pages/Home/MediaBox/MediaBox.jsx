import classNames from 'classnames/bind';
import styles from './MediaBox.module.scss';
import Card from '~/components/Card/Card';
import { HeartActiveIcon } from '~/components/Card/icons';

const cx = classNames.bind(styles);

const news = [
    {
        src: 'https://i.imgur.com/l49meMQ.png',
        alt: 'img1',
        title: 'Phần mềm quản lý điểm học sinh thcs kết nối csdl ngành GD&ĐT',
        date: '21/12/2021',
        commentCount: '150',
        heartCount: '45',
        address: 'Hanoi_edu',
        icon: <HeartActiveIcon />,
    },
    {
        src: 'https://i.imgur.com/tG8XpLc.png',
        alt: 'img2',
        title: 'Vì sao ngày càng nhiều trường học đầu tư sử dụng phần mềm kết nối giáo dục?',
        date: '21/12/2021',
        commentCount: '18',
        heartCount: '250',
        address: 'Hanoi_edu',
    },
    {
        src: 'https://i.imgur.com/6GhpqYL.png',
        alt: 'img3',
        title: 'Giải đáp các thắc mắc thường gặp khi cài đặt và sử dụng phần mềm kết nối giáo dục eNetViet',
        date: '21/12/2021',
        commentCount: '285',
        heartCount: '169',
        address: 'Hanoi_edu',
        icon: <HeartActiveIcon />,
    },
    {
        src: 'https://i.imgur.com/WMobobU.png',
        alt: 'img4',
        title: 'Kết nối chặt chẽ giữa gia đình và nhà trường: Chìa khóa giúp trẻ phát triển toàn diện',
        date: '21/12/2021',
        commentCount: '38',
        heartCount: '180',
        address: 'Hanoi_edu',
    },
    {
        src: 'https://i.imgur.com/0bhLHDn.png',
        alt: 'img5',
        title: 'Cách tải, cài đặt và sử dụng phần mềm giả lập LDPlayer miễn phí',
        date: '21/12/2021',
        commentCount: '282',
        heartCount: '680',
        address: 'Hanoi_edu',
        icon: <HeartActiveIcon />,
    },
];

function MediaBox() {
    return (
        <>
            <section className={cx('title-actions')}>
                <span className={cx('title-text')}>Media Box</span>
            </section>

            <section className={cx('news')}>
                {news.map((card, i) => (
                    <Card
                        key={i}
                        title={card.title}
                        address={card.address}
                        src={card.src}
                        commentCount={card.commentCount}
                        heartCount={card.heartCount}
                        alt={card.alt}
                        date={card.date}
                        icon={card.icon}
                    />
                ))}
            </section>
        </>
    );
}

export default MediaBox;
