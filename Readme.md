1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans: getElementById = we can get any elements by its id ;
    getElementsByClassName = we can get any elements by its class name ;
    querySelector =  only catch the first matching element;
    querySelectorAll = catch and return all matching element;
2. How do you create and insert a new element into the DOM?
ans: document.getElementByID.createElement() we can create any element;
    for insert we can use inner.HTML and inner.TEXT;
3. What is Event Bubbling? And how does it work?
ans : Event bubling is a process where if any event happened to child element then the event can get its parent elements also in step by step.
4. What is Event Delegation in JavaScript? Why is it useful?
ans : event delegation is a technique where we dont need to use different event listener for child elements rather we can use a single event listner to their parents.
5. What is the difference between preventDefault() and stopPropagation() methods?
ans : peventdefault() stops browsers default behavior
    stopPropagation() , it stops event so that event cant get the parent element;





    <!-- my delete button is working but it works slowly -->
    N.B : my delete button is working but it works slowly 
