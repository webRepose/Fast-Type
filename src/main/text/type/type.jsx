import Style from "./type.module.css"
function Type() {
    return (
        <>
        <main>
        <section className={Style.choiceParams}>
            <h3>Набирайте текст</h3>
        </section>
        <section className={Style.choiceParams}>
            <div className={Style.inputBlock}>
                <p className={Style.inputText}>Если клиент очень умный, он сможет добиться желаемого результата. Пусть дело решается гибкостью и подобием истины, которую</p>
                <textarea autoFocus className={Style.inputArea} formvalidate='formNoValidate' spellCheck="false" onPaste={()=>{return false}} autoComplete="off"></textarea>
            </div>
        </section>    
        </main>
        </>
    );
};

export default Type;