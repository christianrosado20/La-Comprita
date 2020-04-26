import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={styles.HeaderStyle}>
            <Link style={{textDecoration: 'none', color: '#fff'}} to='/'><h3>LA COMPRITA</h3></Link>
        </div>
    )
}

const styles = {
    HeaderStyle: {
        padding: '0.1rem',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8B400',
        color: '#fff',
        fontSize: '1.2rem',
        textDecoration: 'none'
    }
}

export default Header;