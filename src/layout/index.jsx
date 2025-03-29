import React from 'react';
import Footer from '../component/Footer.jsx';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen ">
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
