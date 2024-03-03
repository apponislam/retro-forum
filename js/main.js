const commentsFetch = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const comments = data.posts;
    allcomments(comments);
}

const allcomments = comments => {
    console.log(comments);

    const commentContainer = document.getElementById('comments');

    comments.forEach(comment => {
        console.log(comment);

        const online = comment.isActive;
        const onlineStatus = online ? 'img/Status.png' : 'img/Statusred.png';

        const commentDiv = document.createElement('div');
        commentDiv.innerHTML = `
        <div class="lg:p-10 p-5 lg:mx-0 mx-3 bg-[#12132D0d] rounded-3xl border border-[#12132D0d] hover:border-[#797DFC] hover:bg-[#797DFC1a] delay-200 "> <div class="flex lg:gap-6 gap-3 lg:flex-row flex-col"> <div> <div class="w-20 h-20 relative rounded-2xl"> <img class="w-full rounded-2xl" src="${comment.image}"> <div class="w-5 h-5 absolute -top-1 -right-1"> <img class="w-full" src="${onlineStatus}"> </div> </div> </div> <div class="flex-1"> <div class="flex mb-3"> <p class="font-medium text-[14px] mr-8">#<span>${comment.category}</span></p> <p class="font-medium text-[14px]">Author : <span>${comment.author.name}</span></p> </div> <div class="mb-6 border-b border-dotted border-[#12132D]"> <h1 class="font-bold text-xl mb-4">${comment.title}</h1> <p class="font-inter mb-5">${comment.description}</p> </div> <div class="flex items-center justify-between"> <div class="flex items-center"> <div class="flex items-center lg:mr-6 mr-3"> <img class="w-7 mr-2" src="img/message.png"> <p class="font-inter">${comment.comment_count}</p> </div> <div class="flex items-center lg:mr-6 mr-3"> <img class="w-7 mr-2" src="img/eyebtn.png"> <p class="font-inter">${comment.view_count}</p> </div> <div class="flex items-center lg:mr-6 mr-3"> <img class="w-7 mr-2" src="img/clock.png"> <p class="font-inter"><span>${comment.posted_time}</span> min</p> </div> </div> <img onclick="msgRead('${comment.title}','${comment.view_count}')" id="seenbtn" class="w-7 seenitem" src="img/message2.png"> </div> </div> </div> </div>
        `

        commentContainer.appendChild(commentDiv);



    })
};


        // const title = comment.title;
        // const viewCount = comment.view_count;
        // msgRead(title, viewCount);

function msgRead(title, counter){

    const currentSeen = document.getElementById('seen-number');
    const currentSeenText = currentSeen.innerText;
    const seenNumber = parseInt(currentSeenText);
    const newSeen = seenNumber + 1;
    currentSeen.innerText = newSeen;
    console.log(newSeen);

    console.log(title, counter);
    const seenDiv = document.getElementById('readitems');
    const seenItem = document.createElement('div');
    seenItem.innerHTML = `
    <div class="flex justify-between items-center rounded-2xl bg-white p-4"> <p class="font-semibold text-clr1 flex-nowrap">${title}</p> <p class="flex w-28"><img class="w-7 mr-2" src="img/eyebtn.png" alt=""> <span>${counter}</span></p> </div>
    `
    seenDiv.appendChild(seenItem);
}




const seeBtn = id => {
    console.log('id is', id);
};


const letestCommentsFetch = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const comments = data;
    LatestComments(comments);
}

const LatestComments = comments => {
    console.log(comments);

    const commentContainer = document.getElementById('newpost');

    comments.forEach(comment => {
        console.log(comment);

        const commentDiv = document.createElement('div');
        commentDiv.innerHTML = `
        <div class="p-6 border border-[#12132D26] rounded-3xl"> <div class="h-48 bg-[#12132D0d] rounded-[20px] mb-6"> <img class="h-full block mx-auto" src="${comment.cover_image}"> </div> <div class="flex items-center mb-4"> <img class="w-6 mr-2" src="img/calander.png" alt=""> <p>${comment.author.posted_date || 'No publish date'}</p> </div> <div> <p class="font-extrabold text-[18px] mb-4">${comment.title}</p> <p class="mb-4">${comment.description}</p> </div> <div class="flex items-center"> <div class="w-11 h-11 rounded-full mr-4"> <img class="w-full rounded-full" src="${comment.profile_image}"> </div> <div> <p class="font-bold mb-1">${comment.author.name}</p> <p class="text-[14px]">${comment.author?.designation || 'Unknown' }</p> </div> </div> </div>
        `

        commentContainer.appendChild(commentDiv);

    })
};




commentsFetch();
letestCommentsFetch();