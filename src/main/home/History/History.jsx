const History = () => {
    // const checkHistory = JSON.parse(localStorage.getItem('HistoryData'));
    // let historyArray = checkHistory;

    // if(checkHistory!==null) {
    //     for(let i=0;i<checkHistory.length;i++) {
    //         document.querySelector('div.history-total')
    //         .insertAdjacentHTML('afterbegin', `
    //         <div class="history-total-sub">
    //         <div class="history-mode">
    //         <p id="ModeHistory">${checkHistory[i].mode}</p>
    //         <span>${checkHistory[i].timer}</span>
    //         </div>
    //         <span><p>Слов:</p>&nbsp;<p>${checkHistory[i].words}</p></span>
    //         <span><p>Символов:</p>&nbsp;<p>${checkHistory[i].symbols}</p></span>
    //         <span><p>Ошибок:</p>&nbsp;<p>${checkHistory[i].errors}</p></span>
    //         <span class="time-now">
    //         <p id="offset">${checkHistory[i].times}</p>
    //         <p style="margin-left: auto; margin-right: 10px;" id="offsetNow">${checkHistory[i].timesNow}</p>
    //         </span>
    //         </div>`);
    //     }
    // } else {
    //     historyArray = [];
    //     document.querySelector('#historyClear').style.display = 'none'
    //     document.querySelector('div.history-total').insertAdjacentHTML('afterbegin', `
    //     <div class="no-res">История ваших результатов появится здесь</div>
    //     `)
    // }
    
    // document.querySelector('#historyClear').addEventListener('click', ()=>{
    //     let conf = confirm("Вы действительно хотите удалить историю?");
    //     if(conf === true) {
    //         window.localStorage.removeItem('HistoryData');
    //         location.reload();
    //     }
    // })

    return (
        <main>
            Hello
        </main>
    );
};

export default History;