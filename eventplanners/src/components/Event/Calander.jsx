// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import dayjs from 'dayjs';
// import eventData from './events.json'; // Assuming you have events stored in events.json
// import EventCard from './EventCard';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   background: '#FEFBF3',
//   borderRadius: 7,
//   boxShadow: 24,
//   p: 4,
// };

// const Calendar = ( {isAdmin} ) => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [currentMonth, setCurrentMonth] = useState(new Date());

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//   };

//   const handleModalClose = () => {
//     setSelectedDate(null);
//   };

//   const daysInMonth = (date) => {
//     return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
//   };

//   const startOfMonth = (date) => {
//     return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
//   };

//   const formatDate = (date) => {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');
//     return `${year}.${month}.${day}`;
//   };

//   const isFutureMonth = (date) => {
//     const today = new Date();
//     return date > today || date.getMonth() > today.getMonth();
//   };

//   const hasEvents = (date) => {
//     const formattedDate = formatDate(date);
//     return eventData[formattedDate] && eventData[formattedDate].length > 0;
//   };

//   const days = [];
//   const daysCount = daysInMonth(currentMonth);
//   const startDay = startOfMonth(currentMonth);

//   for (let i = 1; i <= daysCount + startDay; i++) {
//     if (i > startDay) {
//       const day = i - startDay;
//       days.push({ day, isDisabled: !isFutureMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)), hasEvents: hasEvents(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)) });
//     } else {
//       days.push(null);
//     }
//   }

//   const goToPreviousMonth = () => {
//     setCurrentMonth((prevMonth) => new Date(prevMonth.getFullYear(), prevMonth.getMonth() - 1));
//   };

//   const goToNextMonth = () => {
//     setCurrentMonth((prevMonth) => new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1));
//   };

//   return (
//     <div id='calender' className="flex flex-col items-center">
//       <div className="flex justify-between items-center w-full mb-4">
//         <button onClick={goToPreviousMonth} disabled={!isFutureMonth(currentMonth)}>
//           Previous Month
//         </button>
//         <h1>{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</h1>
//         <button onClick={goToNextMonth}>
//           Next Month
//         </button>
//       </div>
//       <div className="grid grid-cols-7 gap-2" style={{ width: '600px' }}>
//         {days.map((dayObj, index) => (
//           <div key={index}>
//             <button
//               className={`py-2 px-4 text-sm font-medium ${dayObj && dayObj.isDisabled ? 'text-gray-400' : 'text-textColor'} ${dayObj && dayObj.hasEvents ? 'bg-lightRed rounded-[100%]' : ''}`}
//               onClick={() => handleDateClick(dayObj && new Date(currentMonth.getFullYear(), currentMonth.getMonth(), dayObj.day))}
//               disabled={!dayObj || !dayObj.day || dayObj.isDisabled}
//             >
//               {dayObj && dayObj.day}
//             </button>
//           </div>
//         ))}
//       </div>
//       <Modal
//         open={selectedDate !== null}
//         onClose={handleModalClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <h2 className='text-lg font-medium text-highlight'>Events on {selectedDate && selectedDate.toDateString()}</h2>
//           <ul>
//             {selectedDate &&
//               eventData[formatDate(selectedDate)] &&
//               eventData[formatDate(selectedDate)].map((event, index) => (
//                 <li key={index}>
//                   <div className='text-base text-headColor font-medium'>{event.title} : </div>
//                   <div className='text-textColor'>{event.description}</div>
                  
//                 </li>
//               ))}
//           </ul>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default Calendar;
