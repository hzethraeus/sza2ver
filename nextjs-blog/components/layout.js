import styles from './layout.module.css';
import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
    
    return (<>
    <Header />

    <div className={styles.container}>
        {children}
        
        </div>
        <Footer />
        </>)
  }