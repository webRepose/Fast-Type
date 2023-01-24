import Style from '../styles/Header/Header.module.css';
const Theme = () => {
    const htmlDOM = document.querySelector('html');
    if(window.localStorage.getItem('theme') === null) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            window.localStorage.setItem('theme', 'dark');
            htmlDOM.classList.add('dark');
        } 
        else if(window.matchMedia('(prefers-color-scheme: light)').matches) {
            htmlDOM.classList.add('light');
            window.localStorage.setItem('theme', 'light');
        }
    }

    if(window.localStorage.getItem('theme') === 'dark' ) {
        htmlDOM.classList.add('dark');
        htmlDOM.classList.remove('light');
        window.localStorage.setItem('theme', 'dark');
    } else {
        htmlDOM.classList.add('light');
        htmlDOM.classList.remove('dark');
        window.localStorage.setItem('theme', 'light');
    }

    return (
        <>
            <button title='theme' onClick={()=>{
                if(htmlDOM.classList.contains('dark')) {
                    htmlDOM.classList.add('light');
                    htmlDOM.classList.remove('dark');
                    window.localStorage.setItem('theme', 'light'); 
                } else {
                    htmlDOM.classList.add('dark');
                    htmlDOM.classList.remove('light');
                    window.localStorage.setItem('theme', 'dark'); 
                }
            }} className={Style.menuTheme}>
                <div 
                className={Style.menuThemeActive}>
                <div className={Style.activeThemeIcon}></div>
                </div>
            </button>
        </>
    );
}

export default Theme;