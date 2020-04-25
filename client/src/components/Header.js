import React from 'react';


const Header = () => {
    return (
        <div style={styles.HeaderStyle}>
            <h3>La Comprita</h3>
        </div>
    )
}

const styles = {
    HeaderStyle: {
        padding: '0.5rem',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8B400',
        color: '#fff'
    }
}

export default Header;