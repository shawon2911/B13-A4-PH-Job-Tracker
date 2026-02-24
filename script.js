// create interview and rejected empty array list
let interviewList = [];
let rejectedList = [];
// set the all jobs number in total card
let totalNumber = document.getElementById('total-number');
let interviewNumber = document.getElementById('interview-number');
let rejectedNumber = document.getElementById('rejected-number');
let availableNumber = document.getElementById('available-number');
const allCards = document.getElementById('all-cards');
// catch the tab buttons by their id
const allTab = document.getElementById('all-tab');
const interviewTab = document.getElementById('interview-tab');
const rejectedTab = document.getElementById('rejected-tab');
// catch the main container by main tag
const mainContainer = document.querySelector('main');
// catch the filtered section
const filteredSection = document.getElementById('filtered-section');
let currentStatus = 'all';



    // create a function to set the number
function calculateNumber(){
    totalNumber.innerText = allCards.children.length;
    availableNumber.innerText = allCards.children.length;
    interviewNumber.innerText = interviewList.length;
    rejectedNumber.innerText = rejectedList.length;
}
// calling the function
calculateNumber();

// create a function to toggle between tabs
function toggleStyle(id){
    // step:1 = remove focus color from all tab
    allTab.classList.remove('bg-blue-500', 'text-white');
    interviewTab.classList.remove('bg-blue-500', 'text-white');
    rejectedTab.classList.remove('bg-blue-500', 'text-white');

    // step:2 = add default color to all
    allTab.classList.add('bg-white', 'text-[#64748B]');
    interviewTab.classList.add('bg-white', 'text-[#64748B]');
    rejectedTab.classList.add('bg-white', 'text-[#64748B]');

    // step:3 = remove default color from clicked tab
    const selected = document.getElementById(id);
    currentStatus = id;
    selected.classList.remove('bg-white', 'text-[#64748B]');
    selected.classList.add('bg-blue-500', 'text-white');

    if(id == "interview-tab"){
        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderInterview();

    }
    else if (id == "all-tab"){
        allCards.classList.remove('hidden');
        filteredSection.classList.add('hidden');
    }
    else if (id == "rejected-tab"){
        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderRejected();
    }
}

// event handling on main container 
    mainContainer.addEventListener('click', function(event){   
        console.log("clicked", event)
        if(event.target.classList.contains('delete-btn')){  
            console.log('click')                                                        //for delete button
             const card = event.target.closest('.card-left');
             const companyName = card.querySelector('.company-name').innerText;
             interviewList = interviewList.filter(item => item.companyName != companyName);
             rejectedList = rejectedList.filter(item => item.companyName != companyName);
             card.remove();
             if(currentStatus == 'interview-tab'){
                renderInterview();
             } 
             else if(currentStatus == 'rejected-tab'){
             renderRejected();
             }
        
        calculateNumber();
            }
                                            
        if(event.target.classList.contains('interview-btn')){                                                   //for interview button
            const card = event.target.closest('.card-left');
            // catch everything inside a parentNode
            const companyName = card.querySelector('.company-name').innerText;
            const position = card.querySelector('.position').innerText;
            const salary = card.querySelector('.salary').innerText;
            const status = card.querySelector('.job-status').innerText;
            const responsibility = card.querySelector('.job-responsible').innerText;
            
            // create a object using these information
            const jobInfo = {
                companyName,
                position,
                salary,
                status :"Interview",
                responsibility
            }
            // searching that a item is unique or not
            const jobExist = interviewList.find(item => item.companyName == jobInfo.companyName);
            if(!jobExist){
                interviewList.push(jobInfo);
                card.querySelector('.job-status').innerText = "Interview";
            
            }
            rejectedList = rejectedList.filter(item => item.companyName != jobInfo.companyName)
            
            calculateNumber();
            if(currentStatus == 'rejected-tab'){
                renderRejected();
            }
        }
        else if(event.target.classList.contains('rejected-btn')){                                                           //for  rejected button
            const card = event.target.closest('.card-left');
            // catch everything inside a parentNode
            const companyName = card.querySelector('.company-name').innerText;
            const position = card.querySelector('.position').innerText;
            const salary = card.querySelector('.salary').innerText;
            const status = card.querySelector('.job-status').innerText;
            const responsibility = card.querySelector('.job-responsible').innerText;
            
            // create a object using these information
            const jobInfo = {
                companyName,
                position,
                salary,
                status :"Reject",
                responsibility
            }
            // searching that a item is unique or not
            const jobExist = rejectedList.find(item => item.companyName == jobInfo.companyName);
            if(!jobExist){
                rejectedList.push(jobInfo);
                card.querySelector('.job-status').innerText = "Reject";
            
            }
            interviewList = interviewList.filter(item => item.companyName != jobInfo.companyName);
            
            if(currentStatus == 'interview-tab'){
                renderInterview();
            }
            calculateNumber();
            }
        
    })


    // this function is created for show the interview on the screen
    function renderInterview(){
        filteredSection.innerHTML = '';
        for(let interview of interviewList){
            console.log(interview)
            let div = document.createElement('div')
            div.className = "card-left bg-white rounded-md p-6 flex justify-between items-start mb-5";
            div.innerHTML = `
                    <div>
                        <div>
                            <h3 class="company-name font-semibold text-[18px] text-[#002C5C]">${interview.companyName}</h3>
                            <p class="position text-[#64748B] ">${interview.position}</p>
                            <p class="salary text-[14px] text-[#64748B] py-[15px]">${interview.salary}</p>
                        </div>
                        <div class=" bg-[#EEF4FF] w-[150px] text-center py-[11px] ">
                            <h4 class="   job-status font-medium text-[14px] text-[#002C5C]  ">${interview.status}</h4>
                        </div>
                        <p class="job-responsible text-[14px] text-[#323B49] pt-[13px] pb-[30px]">${interview.responsibility}</p>

                        <div class="space-x-2">
                            <button class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
                            <button class="rejected-btn btn btn-outline btn-error">REJECTED</button>
                        </div>
                    </div>
                    
                    
                    
                    <div class="btn right-content p-2 border border-gray-400 rounded-full cursor-pointer mt-2">
                        <button class="delete-btn cursor-pointer" >
                            <i class="fa-solid fa-trash-can "></i>
                        </button>
                    </div>
            `
            filteredSection.appendChild(div);
        }
    }
    // this function is created for show the rejection on the screen
    function renderRejected(){
        filteredSection.innerHTML = '';
        for(let reject of rejectedList){
            
            let div = document.createElement('div')
            div.className = "card-left bg-white rounded-md p-6 flex justify-between items-start mb-5";
            div.innerHTML = `
                    <div>
                        <div>
                            <h3 class="company-name font-semibold text-[18px] text-[#002C5C]">${reject.companyName}</h3>
                            <p class="position text-[#64748B] ">${reject.position}</p>
                            <p class="salary text-[14px] text-[#64748B] py-[15px]">${reject.salary}</p>
                        </div>
                        <div class=" bg-[#EEF4FF] w-[150px] text-center py-[11px] ">
                            <h4 class="   job-status font-medium text-[14px] text-[#002C5C]  ">${reject.status}</h4>
                        </div>
                        <p class="job-responsible text-[14px] text-[#323B49] pt-[13px] pb-[30px]">${reject.responsibility}</p>

                        <div class="space-x-2">
                            <button class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
                            <button class="rejected-btn btn btn-outline btn-error">REJECTED</button>
                        </div>
                    </div>
                    
                    
                    
                    <div class="btn right-content p-2 border border-gray-400 rounded-full cursor-pointer mt-2">
                        <button class="delete-btn cursor-pointer" >
                            <i class="fa-solid fa-trash-can "></i>
                        </button>
                    </div>
            `
            filteredSection.appendChild(div);
        }
    }