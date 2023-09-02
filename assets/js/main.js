
/*** Start Loader ***/
window.addEventListener('load', ()=> {
    let loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('hide');
    }, 1000);
});
/*** End Loader ***/
/*** Start Check All ***/
function checkbox() {
    let checkAll = document.getElementById("check-all"),
     otherCheckboxes = document.querySelectorAll(
    "input[type=checkbox]:not(#check-all)"
    ),
    allChecked,
    btnDelete = document.querySelector(".deleteAll"),
    cards = document.querySelector(".container-cards");
    
    checkAll.addEventListener("change", onCheckAllChange);
    otherCheckboxes.forEach((input) =>
    input.addEventListener("change", onOtherCheckboxChange)
    );

    function onCheckAllChange() {
        otherCheckboxes.forEach((input) => (input.checked = checkAll.checked));
        allChecked = Array.from(otherCheckboxes).every((input) => input.checked);
        console.log("Check Alll", allChecked);
        allChecked ? cards.classList.add('checkAll') : cards.classList.remove('checkAll');
        if(allChecked && dataCardLists.length > 1) {
            btnDelete.innerHTML = `
            <button class='btn-red' onclick="deleteAll()">حذف الكل (${dataCardLists.length})</button>
            `;

        } else {
            btnDelete.innerHTML = "";
        }
    }

    function onOtherCheckboxChange() {
        allChecked = Array.from(otherCheckboxes).every((input) => input.checked);
        checkAll.checked = allChecked;
    }
    
   if(!dataCardLists.length) {
    btnDelete.innerHTML = "";
    allChecked = false;
    checkAll.checked = false;
    checkAll.classList.add('disabled');
   }
    
}

/*** End Check All ***/

/*** Start Scroll ***/

window.addEventListener("scroll",function (event) {
    let navBar = document.querySelector(".navbar-fixed"),
        top = this.scrollY;
    // console.log("top scrollY", top);
    if (top > 10) {
        navBar.classList.add("scrolled");
    } else {
        navBar.classList.remove("scrolled");
    }

// var horizontalScroll = document.querySelector(".horizontalScroll"),
//     verticalScroll = document.querySelector(".verticalScroll");

// horizontalScroll.innerHTML = "Scroll X: " + left + "px";
//   verticalScroll.innerHTML = "Scroll Y: " + top + "px";
},false);

/*** End Scroll ***/

/*** Start Show Data ***/
let dataCardLists;
if (localStorage.cardList != null) {
    dataCardLists = JSON.parse(localStorage.cardList);
  } else {
    dataCardLists = [
        {
            id: 1,
            image:'assets/img/person',
            title: 'محمود مصطفى',
            status: 'مرفوض',
            email: 'm.youssef@wten.com.sa',
            phone: '0534444445',
            nationality: 'سعودي',
            dateOfBirth: '2/2/1997',
            address: 'السعودية',
            qualification: 'بكاليريوس',
            cv: 'assets/pdf/Ahmed-Mamdouh-resume.pdf',
            video:'https://www.youtube.com/watch?v=qTUc_LaC48o&t=2s',
            startDate: '2015',
            endtDate: '2019',
            degree: '150',
            experienceLevel: 'متوسط',
            skills: 'متوسط',
            expectedSalary: '5000',
            Languages: 'العربية, الإنجليزية',
        },
        {
            id: 2,
            image:'assets/img/person',
            title: 'محمود مصطفى',
            status: 'مقبول',
            email: 'm.youssef@wten.com.sa',
            phone: '0534444445',
            nationality: 'سعودي',
            dateOfBirth: '23/2/2000',
            address: 'السعودية',
            qualification: 'بكاليريوس',
            cv: 'assets/pdf/Ahmed-Mamdouh-resume.pdf',
            video:'https://www.youtube.com/watch?v=qTUc_LaC48o&t=2s',
            startDate: '2019',
            endtDate: '2022',
            degree: '190',
            experienceLevel: 'متوسط',
            skills: 'متوسط',
            expectedSalary: '5000',
            Languages: 'العربية, الإنجليزية',
        },
        {
            id: 3,
            image:'assets/img/person',
            title: 'يسرا منصور',
            status: 'مرفوض',
            email: 'm.youssef@wten.com.sa',
            phone: '0534444445',
            nationality: 'سعودي',
            dateOfBirth: '1/1/1999',
            address: 'السعودية',
            qualification: 'بكاليريوس',
            cv: 'assets/pdf/Ahmed-Mamdouh-resume.pdf',
            video:'https://www.youtube.com/watch?v=qTUc_LaC48o&t=2s',
            startDate: '2017',
            endtDate: '2020',
            degree: '120',
            experienceLevel: 'متوسط',
            skills: 'متوسط',
            expectedSalary: '6000',
            Languages: 'العربية, الإنجليزية',
        },
        {
            id: 4,
            image:'assets/img/person',
            title: 'محمد محمود',
            status: 'مقبول',
            email: 'm.youssef@wten.com.sa',
            phone: '0534444445',
            nationality: 'سعودي',
            dateOfBirth: '15/10/1994',
            address: 'السعودية',
            qualification: 'بكاليريوس',
            cv: 'assets/pdf/Ahmed-Mamdouh-resume.pdf',
            video:'https://www.youtube.com/watch?v=qTUc_LaC48o&t=2s',
            startDate: '2019',
            endtDate: '2021',
            degree: '150',
            experienceLevel: 'متوسط',
            skills: 'متوسط',
            expectedSalary: '5000',
            Languages: 'العربية, الإنجليزية',
        },
        {
            id: 5,
            image:'assets/img/person',
            title: 'رغد المالكي',
            status: 'مرفوض',
            email: 'm.youssef@wten.com.sa',
            phone: '0534444445',
            nationality: 'سعودي',
            dateOfBirth: '25/5/1993',
            address: 'السعودية',
            qualification: 'بكاليريوس',
            cv: 'assets/pdf/Ahmed-Mamdouh-resume.pdf',
            video:'https://www.youtube.com/watch?v=qTUc_LaC48o&t=2s',
            startDate: '2020',
            endtDate: '2023',
            degree: '195',
            experienceLevel: 'متوسط',
            skills: 'متوسط',
            expectedSalary: '5000',
            Languages: 'العربية, الإنجليزية',
        },
        {
            id: 6,
            image:'assets/img/person',
            title: 'محمود مصطفى',
            status: 'مقبول',
            email: 'm.youssef@wten.com.sa',
            phone: '0534444445',
            nationality: 'سعودي',
            dateOfBirth: '16/8/1996',
            address: 'السعودية',
            qualification: 'بكاليريوس',
            cv: 'assets/pdf/Ahmed-Mamdouh-resume.pdf',
            video:'https://www.youtube.com/watch?v=qTUc_LaC48o&t=2s',
            startDate: '2017',
            endtDate: '2020',
            degree: '190',
            experienceLevel: 'متوسط',
            skills: 'متوسط',
            expectedSalary: '5000',
            Languages: 'العربية, الإنجليزية',
        }
    ];
  }

function showData() {
    let containerCards = document.querySelector(".container-cards");
    let data = '';
    let status;
   
    for (let i = 0; i < dataCardLists.length; i++) {
        if(dataCardLists[i].status == 'مرفوض') {
            status = `<p class="status d-inline-block reject"> ${dataCardLists[i].status} </p>`
    
        } else {
            status = `<p class="status d-inline-block accept"> ${dataCardLists[i].status} </p>`
        }
        data += `
        <div class="col-lg-4 col-md-6 mt-4">
            <div class="card-info custom-card h-100">
            <div class="top d-flex align-items-center justify-content-between">
                <div class="dropdown">
                    <button
                    class="dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                    <svg width="30" height="9" viewBox="0 0 37 9" fill="none">
                        <ellipse
                        cx="31.8958"
                        cy="4.5"
                        rx="4.83009"
                        ry="4.5"
                        fill="#B89635"
                        />
                        <ellipse
                        cx="18.9671"
                        cy="4.5"
                        rx="4.83009"
                        ry="4.5"
                        fill="#B89635"
                        />
                        <ellipse
                        cx="5.04373"
                        cy="4.5"
                        rx="4.83011"
                        ry="4.5"
                        fill="#B89635"
                        />
                    </svg>
                    </button>
                    <ul class="dropdown-menu">
                    <li><button class="dropdown-item d-flex align-items-center justify-content-between delete" onclick="deleteItem(${i})">
                    حذف
                    <svg  class="icon" width="20" height="20" viewBox="0 0 24 24" stroke-width="2"  fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M4 7l16 0"></path>
                        <path d="M10 11l0 6"></path>
                        <path d="M14 11l0 6"></path>
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                    </svg>
                    </button></li>
                    </ul>
                </div>
                <div class="checkbox-group">
                    <input type="checkbox" value="checkbox-${i}" id="checkbox-${i}" />
                    <label for="checkbox-${i}"></label>
                </div>
                </div>
                <div class="text-center">
                <div class="img-person mx-auto mb-3">
                    <img
                    class="img-fit"
                    src="${dataCardLists[i].image}-${dataCardLists[i].id}.png"
                    alt="${dataCardLists[i].title}"
                    />
                </div>
                <h2 class="title text-body font-bold">${dataCardLists[i].title}</h2>
                ${status} 
                <div class="d-flex flex-column align-items-center">
                    <a
                    class="email d-flex align-items-center justify-content-center mb-3"
                    href="mailto:${dataCardLists[i].email}"
                    >
                    <span>${dataCardLists[i].email}</span>
                    <svg
                        class="icon ms-1"
                        width="19"
                        height="15"
                        viewBox="0 0 19 15"
                    >
                        <path
                        d="M3 0H16C16.7956 0 17.5587 0.316071 18.1213 0.87868C18.6839 1.44129 19 2.20435 19 3V12C19 12.7956 18.6839 13.5587 18.1213 14.1213C17.5587 14.6839 16.7956 15 16 15H3C2.20435 15 1.44129 14.6839 0.87868 14.1213C0.316071 13.5587 0 12.7956 0 12V3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0ZM3 1C2.5 1 2.06 1.17 1.72 1.47L9.5 6.5L17.28 1.47C16.94 1.17 16.5 1 16 1H3ZM9.5 7.71L1.13 2.28C1.05 2.5 1 2.75 1 3V12C1 12.5304 1.21071 13.0391 1.58579 13.4142C1.96086 13.7893 2.46957 14 3 14H16C16.5304 14 17.0391 13.7893 17.4142 13.4142C17.7893 13.0391 18 12.5304 18 12V3C18 2.75 17.95 2.5 17.87 2.28L9.5 7.71Z"
                        fill="#B89635"
                        />
                    </svg>
                    </a>
                    <a
                    class="phone d-flex align-items-center justify-content-center"
                    href="tel:${dataCardLists[i].phone}"
                    >
                    <span>${dataCardLists[i].phone}</span>
                    <svg
                        class="icon ms-1"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                        d="M14.6076 20C6.55254 20 0 13.4475 0 5.39243C0.00170702 4.07297 0.483248 2.79918 1.35483 1.80857C2.22641 0.817966 3.42853 0.17817 4.73703 0.00849117C5.00627 -0.0228908 5.27846 0.0332138 5.51334 0.168507C5.74823 0.3038 5.93333 0.511097 6.04128 0.759738L8.13851 5.65328C8.2197 5.84316 8.25266 6.05019 8.23446 6.2559C8.21625 6.46162 8.14744 6.65964 8.03417 6.83232L6.30212 9.48255C6.26154 9.54161 6.23727 9.61035 6.23177 9.6818C6.22627 9.75326 6.23975 9.82489 6.27082 9.88947C7.09319 11.5766 8.46077 12.9368 10.1523 13.75C10.215 13.7813 10.285 13.7949 10.3549 13.7894C10.4247 13.7839 10.4917 13.7594 10.5488 13.7187L13.1677 11.9763C13.3403 11.8586 13.5398 11.7864 13.7477 11.7664C13.9556 11.7463 14.1652 11.779 14.3572 11.8615L19.2403 13.9587C19.4889 14.0667 19.6962 14.2518 19.8315 14.4867C19.9668 14.7215 20.0229 14.9937 19.9915 15.263C19.8218 16.5715 19.182 17.7736 18.1914 18.6452C17.2008 19.5168 15.927 19.9983 14.6076 20ZM4.89354 0.832776H4.84137C3.73392 0.977125 2.71678 1.51932 1.97958 2.35826C1.24239 3.1972 0.83548 4.27561 0.834719 5.39243C0.837482 9.04437 2.28943 12.5459 4.87175 15.1283C7.45406 17.7106 10.9556 19.1625 14.6076 19.1653C15.7244 19.1645 16.8028 18.7576 17.6417 18.0204C18.4807 17.2832 19.0229 16.2661 19.1672 15.1586C19.1759 15.0687 19.1552 14.9784 19.1081 14.9012C19.0611 14.8241 18.9903 14.7643 18.9064 14.7308L14.0233 12.6336C13.9598 12.6054 13.8903 12.5935 13.8211 12.599C13.7518 12.6045 13.685 12.6271 13.6268 12.6649L11.0183 14.4074C10.8391 14.5291 10.6312 14.6018 10.4152 14.6182C10.1992 14.6347 9.98266 14.5944 9.78708 14.5013C7.93058 13.6016 6.42838 12.1067 5.51958 10.2547C5.42697 10.0594 5.38602 9.84373 5.40063 9.62816C5.41525 9.41259 5.48494 9.20438 5.60305 9.02345L7.33509 6.37322C7.3738 6.31533 7.397 6.24848 7.40248 6.17906C7.40796 6.10964 7.39553 6.03997 7.36639 5.97673L5.26916 1.09363C5.23989 1.01752 5.18844 0.951955 5.12146 0.905443C5.05448 0.858932 4.97508 0.833615 4.89354 0.832776Z"
                        fill="#B89635"
                        />
                    </svg>
                    </a>
                </div>
                </div>
                <div class="details my-3">
                <div class="row">
                    <div class="col-md-6 d-flex align-items-center my-1">
                    <h6 class="mb-0 font-regular">الجنسية:</h6>
                    <p class="font-bold mb-0 ms-1">${dataCardLists[i].nationality}</p>
                    </div>
                    <div class="col-md-6 d-flex align-items-center my-1">
                    <h6 class="mb-0 font-regular">تاريخ الميلاد:</h6>
                    <p class="font-bold mb-0 ms-1">${dataCardLists[i].dateOfBirth}</p>
                    </div>
                    <div class="col-md-6 d-flex align-items-center my-1">
                    <h6 class="mb-0 font-regular">محل الإقامة:</h6>
                    <p class="font-bold mb-0 ms-1">${dataCardLists[i].address}</p>
                    </div>
                    <div class="col-md-6 d-flex align-items-center my-1">
                    <h6 class="mb-0 font-regular">المؤهل:</h6>
                    <p class="font-bold mb-0 ms-1">${dataCardLists[i].qualification}</p>
                    </div>
                </div>
                </div>
                <div class="d-flex flex-column align-items-center">
                <a
                    class="cv clr-main mb-2"
                    href="${dataCardLists[i].cv}"
                    target="_blank"
                    >السيرة الذاتية</a
                >
                <a
                    class="intro-video clr-main"
                    href="${dataCardLists[i].video}"
                    target="_blank"
                    >الفيديو التعريفي</a
                >
                </div>

                <div class="text-center mt-4">
                <button
                    onclick="openModal(${i})"
                    class="btn-main"
                >
                    عرض التفاصيل
                </button>
                </div>

                
                </div>
            </div>
        </div>
        `;
        
        // console.log("dataCardLists", dataCardLists[i]);
    }
    containerCards.innerHTML = data;
}
showData();
checkbox();
// Modal 
function openModal(id) {
    const deatailsModal = new bootstrap.Modal(document.querySelector('.deatails-modal'), {});
    
    if (deatailsModal) {
        deatailsModal.show();
        console.log("id",id);
        let modalBody = document.querySelector(".deatails-modal .modal-body");
        let dataModal = "";
        let status;
        if(dataCardLists[id].status == 'مرفوض') {
            status = `<p class="status d-inline-block reject"> ${dataCardLists[id].status} </p>`
    
        } else {
            status = `<p class="status d-inline-block accept"> ${dataCardLists[id].status} </p>`
        }
        dataModal += `
        <div class="text-center">
            <div class="img-person mx-auto mb-3">
            <img
                class="img-fit"
                src="${dataCardLists[id].image}-${dataCardLists[id].id}.png"
                alt="${dataCardLists[id].title}"
            />
            </div>
            <h2 class="title text-body font-bold">${dataCardLists[id].title}</h2>
            ${status}
            <div class="d-flex flex-column align-items-center">
            <a
                class="email d-flex align-items-center justify-content-center mb-3"
                href="mailto:${dataCardLists[id].email}"
            >
                <span>${dataCardLists[id].email}</span>
                <svg
                class="icon ms-1"
                width="19"
                height="15"
                viewBox="0 0 19 15"
                >
                <path
                    d="M3 0H16C16.7956 0 17.5587 0.316071 18.1213 0.87868C18.6839 1.44129 19 2.20435 19 3V12C19 12.7956 18.6839 13.5587 18.1213 14.1213C17.5587 14.6839 16.7956 15 16 15H3C2.20435 15 1.44129 14.6839 0.87868 14.1213C0.316071 13.5587 0 12.7956 0 12V3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0ZM3 1C2.5 1 2.06 1.17 1.72 1.47L9.5 6.5L17.28 1.47C16.94 1.17 16.5 1 16 1H3ZM9.5 7.71L1.13 2.28C1.05 2.5 1 2.75 1 3V12C1 12.5304 1.21071 13.0391 1.58579 13.4142C1.96086 13.7893 2.46957 14 3 14H16C16.5304 14 17.0391 13.7893 17.4142 13.4142C17.7893 13.0391 18 12.5304 18 12V3C18 2.75 17.95 2.5 17.87 2.28L9.5 7.71Z"
                    fill="#B89635"
                />
                </svg>
            </a>
            <a
                class="phone d-flex align-items-center justify-content-center"
                href="tel:${dataCardLists[id].phone}"
            >
                <span>${dataCardLists[id].phone}</span>
                <svg
                class="icon ms-1"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                >
                <path
                    d="M14.6076 20C6.55254 20 0 13.4475 0 5.39243C0.00170702 4.07297 0.483248 2.79918 1.35483 1.80857C2.22641 0.817966 3.42853 0.17817 4.73703 0.00849117C5.00627 -0.0228908 5.27846 0.0332138 5.51334 0.168507C5.74823 0.3038 5.93333 0.511097 6.04128 0.759738L8.13851 5.65328C8.2197 5.84316 8.25266 6.05019 8.23446 6.2559C8.21625 6.46162 8.14744 6.65964 8.03417 6.83232L6.30212 9.48255C6.26154 9.54161 6.23727 9.61035 6.23177 9.6818C6.22627 9.75326 6.23975 9.82489 6.27082 9.88947C7.09319 11.5766 8.46077 12.9368 10.1523 13.75C10.215 13.7813 10.285 13.7949 10.3549 13.7894C10.4247 13.7839 10.4917 13.7594 10.5488 13.7187L13.1677 11.9763C13.3403 11.8586 13.5398 11.7864 13.7477 11.7664C13.9556 11.7463 14.1652 11.779 14.3572 11.8615L19.2403 13.9587C19.4889 14.0667 19.6962 14.2518 19.8315 14.4867C19.9668 14.7215 20.0229 14.9937 19.9915 15.263C19.8218 16.5715 19.182 17.7736 18.1914 18.6452C17.2008 19.5168 15.927 19.9983 14.6076 20ZM4.89354 0.832776H4.84137C3.73392 0.977125 2.71678 1.51932 1.97958 2.35826C1.24239 3.1972 0.83548 4.27561 0.834719 5.39243C0.837482 9.04437 2.28943 12.5459 4.87175 15.1283C7.45406 17.7106 10.9556 19.1625 14.6076 19.1653C15.7244 19.1645 16.8028 18.7576 17.6417 18.0204C18.4807 17.2832 19.0229 16.2661 19.1672 15.1586C19.1759 15.0687 19.1552 14.9784 19.1081 14.9012C19.0611 14.8241 18.9903 14.7643 18.9064 14.7308L14.0233 12.6336C13.9598 12.6054 13.8903 12.5935 13.8211 12.599C13.7518 12.6045 13.685 12.6271 13.6268 12.6649L11.0183 14.4074C10.8391 14.5291 10.6312 14.6018 10.4152 14.6182C10.1992 14.6347 9.98266 14.5944 9.78708 14.5013C7.93058 13.6016 6.42838 12.1067 5.51958 10.2547C5.42697 10.0594 5.38602 9.84373 5.40063 9.62816C5.41525 9.41259 5.48494 9.20438 5.60305 9.02345L7.33509 6.37322C7.3738 6.31533 7.397 6.24848 7.40248 6.17906C7.40796 6.10964 7.39553 6.03997 7.36639 5.97673L5.26916 1.09363C5.23989 1.01752 5.18844 0.951955 5.12146 0.905443C5.05448 0.858932 4.97508 0.833615 4.89354 0.832776Z"
                    fill="#B89635"
                />
                </svg>
            </a>
            </div>
        </div>
        <div class="details-wrap my-4">
            <div class="details">
            <div class="row">
                <div class="col-md-6 d-flex align-items-center my-1">
                <h6 class="mb-0 font-regular">الجنسية:</h6>
                <p class="font-bold mb-0 ms-1">${dataCardLists[id].nationality}</p>
                </div>
                <div class="col-md-6 d-flex align-items-center my-1">
                <h6 class="mb-0 font-regular">تاريخ الميلاد:</h6>
                <p class="font-bold mb-0 ms-1">${dataCardLists[id].dateOfBirth}</p>
                </div>
                <div class="col-md-6 d-flex align-items-center my-1">
                <h6 class="mb-0 font-regular">محل الإقامة:</h6>
                <p class="font-bold mb-0 ms-1">${dataCardLists[id].address}</p>
                </div>
                <div class="col-md-6 d-flex align-items-center my-1">
                <h6 class="mb-0 font-regular">المؤهل:</h6>
                <p class="font-bold mb-0 ms-1">${dataCardLists[id].qualification}</p>
                </div>
            </div>
            </div>
            <div class="details">
            <div class="row">
                <div class="col-md-6 d-flex align-items-center my-1">
                <h6 class="mb-0 font-regular">المؤهل:</h6>
                <p class="font-bold mb-0 ms-1">بكاليريوس</p>
                </div>
                <div class="col-md-6 d-flex align-items-center my-1">
                <h6 class="mb-0 font-regular">تاريخ الإبتداء:</h6>
                <p class="font-bold mb-0 ms-1">2015</p>
                </div>
                <div class="col-md-6 d-flex align-items-center my-1">
                <h6 class="mb-0 font-regular">تاريخ الإنتهاء:</h6>
                <p class="font-bold mb-0 ms-1">2019</p>
                </div>
                <div class="col-md-6 d-flex align-items-center my-1">
                <h6 class="mb-0 font-regular">الدرجة:</h6>
                <p class="font-bold mb-0 ms-1">150</p>
                </div>
            </div>
            </div>
            <div class="details">
            <div class="row">
                <div class="col-md-6 d-flex align-items-center my-1">
                <h6 class="mb-0 font-regular">مستوى الخبرة:</h6>
                <p class="font-bold mb-0 ms-1">متوسط</p>
                </div>
                <div class="col-md-6 d-flex align-items-center my-1">
                <h6 class="mb-0 font-regular">مهارات ال it:</h6>
                <p class="font-bold mb-0 ms-1">متوسط</p>
                </div>
                <div class="col-md-6 d-flex align-items-center my-1">
                <h6 class="mb-0 font-regular">الراتب المتوقع:</h6>
                <p class="font-bold mb-0 ms-1">5000 ر.س</p>
                </div>
                <div class="col-md-6 d-flex align-items-center my-1">
                <h6 class="mb-0 font-regular">اللغات:</h6>
                <p class="font-bold mb-0 ms-1">
                    العربية, الإنجليزية
                </p>
                </div>
            </div>
            </div>
        </div>
        <div class="d-flex flex-column align-items-center">
            <a
            class="cv clr-main mb-2"
            href="assets/pdf/Ahmed-Mamdouh-resume.pdf"
            target="_blank"
            >السيرة الذاتية</a
            >
            <a
            class="intro-video clr-main"
            href="https://www.youtube.com/watch?v=qTUc_LaC48o&t=2s"
            target="_blank"
            >الفيديو التعريفي</a
            >
        </div>

        <div class="text-center mt-5">
            <button
            class="btn-green m-2"
            type="button"
            data-bs-dismiss="modal"
            onclick="toggleStatus(${id},'accept')"
            >
            قبول المتقدم
            </button>
            <button
            class="btn-red m-2"
            type="button"
            data-bs-dismiss="modal"
            onclick="toggleStatus(${id},'reject')"
            >
            رفض المتقدم
            </button>
        </div>
        `;
        modalBody.innerHTML = dataModal;
    }
}

// Delete Item

function deleteItem(i) {
    dataCardLists.splice(i, 1);
    showData();
}

// Delete All
function deleteAll() {
    dataCardLists.splice(0);
    showData();
    checkbox();
}

// Toggle Status 
function toggleStatus(i , status) {
    console.log("status", status);
    if(dataCardLists[i].status == 'مرفوض' && status == 'accept') {
        dataCardLists[i].status = 'مقبول';
    } else if(dataCardLists[i].status == 'مقبول' && status == 'reject') {
        dataCardLists[i].status = 'مرفوض';
    }
    // Save Local Storage
    localStorage.setItem("cardList", JSON.stringify(dataCardLists));
    showData();
}


/*** End Show Data ***/

