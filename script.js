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