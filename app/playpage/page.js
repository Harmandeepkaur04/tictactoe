"use client"
import { useRouter } from 'next/navigation';
import TicTacToe from '../tictactoe/page';
import styles from './page.module.css';

export default function PlayPage() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/tictactoe');
    };

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <div className={styles.headerContent}>Tic Tac Toe</div>
            </header>
            <button className={styles.playButton} onClick={handleClick}>
                Play
            </button>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    Developed by Harmandeep Kaur
                </div>
            </footer>
        </main>
    );
}
