// @ts-ignore
import { FunctionComponent } from "preact";
import '@/SCSS/header.scss';
import { useRecoilState } from "recoil";
import { themeAtom } from "@/app";
import Moon from '@/assets/icon-moon.svg';
import Sun from '@/assets/icon-sun.svg';

const Header: FunctionComponent<null> = () => {
    const [theme, setTheme ] = useRecoilState(themeAtom);

    const header = <>
        <header id="header" className={theme}>
            <h1 id="logo" className="heading-1">Dev Finder</h1>

            <div id="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                <h4 id="theme">{theme === 'dark' ? 'light' : theme}</h4>
                { theme === 'dark' ? <Sun /> : <Moon /> }
            </div>
        </header>
    </>;
    return header
}

export default Header;