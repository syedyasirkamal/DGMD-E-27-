import styles from "@/styles/Header.module.css";
const Header = () => {
    const headerStyle = {
        padding: '20px 0',
        lineHeight: '1.5em',
        color: '#aeadad',
        textAlign: 'center',
    };
    return (
        <header style={headerStyle} className={styles.header}>
            <h1>DGMD E-27 Final Project</h1>
            <h1>ToDos App</h1>
            <p>Items will persist in the browser local storage</p>
        </header>
    );
};
export default Header;
