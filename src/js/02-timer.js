import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const timeInput = document.getElementById('datetime-picker')
const btnStart = document.querySelector('[data-start]')
const dataDays = document.querySelector('[data-days]')
const dataHours = document.querySelector('[data-hours]')
const dataMinutes = document.querySelector('[data-minutes]')
const dataSeconds = document.querySelector('[data-seconds]')


btnStart.disabled = true
let selectedDate = ''

const date = new Date();
console.log("Date: ", date);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0] <= date) {
          Notiflix.Notify.failure("Please choose a date in the future")
          btnStart.disabled = true
      }
      else {
          btnStart.disabled = false
          selectedDate = selectedDates[0]
      }
    },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2,"0")
}

btnStart.addEventListener("click", (event) => {
    setInterval(() => {
        let currentDate = new Date()
        let daysLeft = convertMs(selectedDate - currentDate)
        dataDays.innerHTML = addLeadingZero(daysLeft.days)
        dataMinutes.innerHTML = addLeadingZero(daysLeft.minutes)
        dataHours.innerHTML = addLeadingZero(daysLeft.hours)
        dataSeconds.innerHTML = addLeadingZero(daysLeft.seconds)
    },1000)
})

flatpickr(timeInput, options)
flatpickr.onClose