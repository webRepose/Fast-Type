import Style from '../header/Header.module.css';
const Theme = () => {
    const htmlDOM = document.querySelector('html');
    console.log(window.matchMedia('(prefers-color-scheme: dark)').matches)

    console.log(window.localStorage.getItem('theme'))
    window.localStorage.setItem('theme', '');


    if (window.matchMedia('(prefers-color-scheme: dark)').matches && window.localStorage.getItem('theme')=== '') {
        window.localStorage.setItem('theme', 'dark');
        htmlDOM.classList.add('dark');
    } 
    else if(window.matchMedia('(prefers-color-scheme: light)').matches && window.localStorage.get('theme')=== '' ) {
        htmlDOM.classList.add('light');
        window.localStorage.setItem('theme', 'light');
        // htmlDOM.classList.add('dark');
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