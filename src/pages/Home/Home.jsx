import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import {
    CalendarCheckIcon,
    HomeIconPrimary,
    CalendarManagerIcon,
    AttendanceIcon,
    ChartIcon,
    Contact2Icon,
    Contact1Icon,
    MailIcon,
    Chart2Icon,
    StatisticAttendance,
    ContactHistoryIcon,
    AttendanceListIcon,
    MeetingIcon,
    BarcodeIcon,
    HttpIcon,
} from './icons';
import Action from './Action';
import News from './News';
import MediaBox from './MediaBox/MediaBox';

const cx = classNames.bind(styles);

const actions = [
    {
        title: 'Đăng ký hoạt động ngoại khóa',
        icon: <CalendarCheckIcon />,
    },
    {
        title: 'Quản lý hoạt động ngoại khóa',
        icon: <CalendarManagerIcon />,
    },
    {
        title: 'Dung lượng sử dụng',
        icon: <ChartIcon />,
    },
    {
        title: 'Gửi thông báo học sinh',
        icon: <Contact1Icon />,
    },
    {
        title: 'Gửi thông báo giáo viên',
        icon: <Contact2Icon />,
    },
    {
        title: 'Lịch sử gửi thông báo',
        icon: <ContactHistoryIcon />,
    },
    {
        title: 'Điểm danh toàn trường',
        icon: <AttendanceIcon />,
    },
    {
        title: 'Hộp thư thông báo',
        icon: <MailIcon />,
    },
    {
        title: 'Thống kê giáo dục',
        icon: <Chart2Icon />,
    },
    {
        title: 'Thống kê điểm danh',
        icon: <StatisticAttendance />,
    },
    {
        title: 'Danh sách điểm danh',
        icon: <AttendanceListIcon />,
    },
    {
        title: 'Quản lý cuộc họp',
        icon: <MeetingIcon />,
    },
    {
        title: 'Quét mã QR Code',
        icon: <BarcodeIcon />,
    },
    {
        title: 'Trang tin điện tử',
        icon: <HttpIcon />,
    },
];

function Home() {
    const handleClick = () => {
        alert('Chưa chọn lớp được đâu Anh!');
    };
    return (
        <>
            <section className={cx('header')}>
                <HomeIconPrimary />
                <span className={cx('title')}>Trang chủ</span>
            </section>
            <section className={cx('classes')}>
                <span
                    onClick={handleClick}
                    style={{ color: 'white', backgroundColor: 'rgba(0, 120, 212, 1)' }}
                    className={cx('class')}
                >
                    Lớp 10A1
                </span>
                <span onClick={handleClick} className={cx('class')}>
                    Lớp 10A2
                </span>
                <span onClick={handleClick} className={cx('class')}>
                    Lớp 10A3
                </span>
            </section>
            <section className={cx('title-actions')}>
                <span className={cx('title-text')}>Các chức năng</span>
            </section>
            <section className={cx('actions')}>
                {actions.map((action, i) => (
                    <Action key={i} icon={action.icon} title={action.title} />
                ))}
            </section>
            <News />
            <MediaBox />
        </>
    );
}

export default Home;
