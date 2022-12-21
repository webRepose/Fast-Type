import Style from '../header/Header.module.css';
const Theme = () => {
    const htmlDOM = document.querySelector('html');
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        htmlDOM.classList.add('dark');
    } else {
        htmlDOM.classList.add('light')
    }

    return (
        <>
            <button title='theme' onClick={()=>{
                if(htmlDOM.classList.contains('dark')) {
                    htmlDOM.classList.add('light')
                    htmlDOM.classList.remove('dark')
                } else {
                    htmlDOM.classList.add('dark')
                    htmlDOM.classList.remove('light')
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