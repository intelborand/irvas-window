
const timer = (id, deadline) => {

    

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),    
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / (1000 * 60)) % 60),
              seconds = Math.floor((t / 1000) % 60);

              return {
                  'total': t,
                  'days': days,
                  'hours': hours,
                  'minutes': minutes,
                  'seconds': seconds
              }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = document.querySelector('#days'),
              hours = document.querySelector('#hours'),
              minutes = document.querySelector('#minutes'),
              seconds = document.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const u = getTimeRemaining(endtime);

            days.innerHTML =  u.days;
            hours.innerHTML =  u.hours;
            minutes.innerHTML =  u.minutes;
            seconds.innerHTML =  u.seconds;

            if (u.total <= 0) {
                clearInterval(timeInterval);
            }
            
        }
    }




    setClock(id, deadline);

};

export default timer;