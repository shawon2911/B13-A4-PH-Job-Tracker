// create interview and rejected empty array list
const interviewList = [];
const rejectedList = [];
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
const filteredSection = document.getElementById('filtered-section')



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
    selected.classList.remove('bg-white', 'text-[#64748B]');
    selected.classList.add('bg-blue-500', 'text-white');
}

// event handling on main container
    mainContainer.addEventListener('click', function(event){
        if(event.target.classList.contains('interview-btn')){
            const parentNode = event.target.parentNode.parentNode
            // catch everything inside a parentNode
            const companyName = parentNode.querySelector('.company-name').innerText;
            const position = parentNode.querySelector('.position').innerText;
            const salary = parentNode.querySelector('.salary').innerText;
            const statusElement = parentNode.querySelector('.job-status');
            const responsibility = parentNode.querySelector('.job-responsible').innerText;
            
            // create a object using these information
            const jobInfo = {
                companyName,
                position,
                salary,
                status,
                responsibility
            }
            // searching that a item is unique or not
            const jobExist = interviewList.find(item => item.companyName == jobInfo.companyName);
            if(!jobExist){
                interviewList.push(jobInfo);
                statusElement.innerText = "Interview";
            }
            renderInterview();
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
                            <h3 class="company-name font-semibold text-[18px] text-[#002C5C]">Mobile First Corp</h3>
                            <p class="position text-[#64748B] ">React Native Developer</p>
                            <p class="salary text-[14px] text-[#64748B] py-[15px]">Remote • Full-time • $130,000 - $175,000</p>
                        </div>
                        <div class=" bg-[#EEF4FF] w-[150px] text-center py-[11px] ">
                            <h4 class="   job-status font-medium text-[14px] text-[#002C5C]  ">NOT APPLIED</h4>
                        </div>
                        <p class="job-responsible text-[14px] text-[#323B49] pt-[13px] pb-[30px]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>

                        <div class="space-x-2">
                            <button class="btn btn-outline btn-success">INTERVIEW</button>
                            <button class="btn btn-outline btn-error">REJECTED</button>
                        </div>
                    </div>
                    
                    
                    
                    <div class="btn right-content p-2 border border-gray-400 rounded-full cursor-pointer mt-2">
                        <button class="delete-btn cursor-pointer" >
                            <i class="fa-solid fa-trash-can "></i>
                        </button>
                    </div>
            `
        }
    }