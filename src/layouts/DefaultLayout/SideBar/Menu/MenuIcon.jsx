import Nav from 'react-bootstrap/Nav';

function MenuIcon({ href, icon }) {
    return (
        <Nav.Item>
            <Nav.Link href={href}>
                <span>{icon}</span>
            </Nav.Link>
        </Nav.Item>
    );
}

export default MenuIcon;
