import classNames from 'classnames/bind';
import styles from './News.module.scss';
import Card from '~/components/Card/Card';
import { HeartActiveIcon, HeartIcon } from '~/components/Card/icons';

const cx = classNames.bind(styles);

const news = [
    {
        src: 'https://i.imgur.com/IDSGHGJ.png',
        alt: 'img1',
        title: 'Đoàn học sinh Hà Nội đại diện Việt Nam đạt thành tích cao tại Kỳ thi Olympic quốc tế...',
        date: '21/12/2021',
        commentCount: '150',
        heartCount: '45',
        address: 'Hanoi_edu',
        icon: <HeartActiveIcon />,
    },
    {
        src: 'https://i.imgur.com/1hbTB3c.png',
        alt: 'img2',
        title: 'Một sáng tạo hiệu quả của học sinh Thủ đô năm 2021',
        date: '21/12/2021',
        commentCount: '18',
        heartCount: '250',
        address: 'Hanoi_edu',
        icon: <HeartIcon />,
    },
    {
        src: 'https://i.imgur.com/sKxMpIW.png',
        alt: 'img3',
        title: 'Học sinh Việt Nam giành 2 HCV tại Olympic quốc tế về Thiên văn và Vật lý thiên văn',
        date: '21/12/2021',
        commentCount: '285',
        heartCount: '169',
        address: 'Hanoi_edu',
        icon: <HeartActiveIcon />,
    },
    {
        src: 'https://i.imgur.com/udNV5ra.png',
        alt: 'img4',
        title: 'Hà Nội điều chỉnh việc cho học sinh THPT trở lại trường từ ngày 6/12',
        date: '21/12/2021',
        commentCount: '38',
        heartCount: '180',
        address: 'Hanoi_edu',
        icon: <HeartIcon />,
    },
    {
        src: 'https://i.imgur.com/wJ9IQtt.png',
        alt: 'img5',
        title: 'Hệ thống toàn diện kiến thức Lí, Hóa, Sinh khối THCS',
        date: '21/12/2021',
        commentCount: '282',
        heartCount: '680',
        address: 'Hanoi_edu',
        icon: <HeartActiveIcon />,
    },
];

function News() {
    return (
        <>
            <section className={cx('title-actions')}>
                <span className={cx('title-text')}>Tin Tức Sự Kiện</span>
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

export default News;
