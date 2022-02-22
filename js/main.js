 // ২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 
const fcolor =  document.getElementsByTagName('h1');
for (const x of fcolor){
    const xy = x.style.color = 'blue';
}

// ৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 
document.getElementById('backpack').style.backgroundColor = 'tomato';

// ৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 
const cardColor = document.getElementsByClassName('card');
for (const xx of cardColor){
    const xxy = xx.style.borderRadius = '30px';
}

// ৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো

document.getElementById('click-here').addEventListener('click', function(){
    const newText = 'Love for click :) ';
    console.log(newText);
    // create new tag
    const newTAg = document.createElement('h3');
    newTAg.innerText = newText;
    const parentTag = document.getElementById('parent-tag');
    // append that
    parentTag.appendChild(newTAg);

})

// ৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 
document.getElementById('click-here').addEventListener('click', function(){
    const cards = document.getElementsByClassName('card');
    
    for(const card of cards){
        console.dir(card.children[2]);
    
        card.removeChild(card.children[2]);

    }
 
})

// ৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 

const subMail = document.getElementById('sub-mail');
const deleteButton = document.getElementById('disabled-button');
subMail.addEventListener('keyup', function(event){
    if(event.target.value == 'email'){
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled', true);
    }
})

// ৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে। 
document.getElementById('show-image').addEventListener('mouseenter', function(event){
    // document.getElementById('parentdiv').removeChild(parentdiv.children[0]);
    
    document.getElementById('show-image').style.display = 'none';
    document.getElementById('disabled-image').style.display = 'block';

})

// ৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 
document.getElementById('subscribe').addEventListener('dblclick', function(event){
    document.getElementById('subscribe').style.backgroundColor = 'cyan';
    console.log('double click')
})

// alhamdulillah all complete
