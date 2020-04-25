import React from 'react';


const Header = () => {
    return (
        <div style={styles.HeaderStyle}>
            <h3>LA COMPRITA</h3>
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
        fontSize: '1.2rem'
    }
}

export default Header;