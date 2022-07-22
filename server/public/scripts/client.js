

$(readyNow)

function readyNow() {
    console.log('readyNow');
    $(document).ready(addPictures);
    $('#start').on('click', getRandomName);
    displayServer();
    
}


function addPictures() {
    for (let pic of people) $('#picture-content').append(`
        <div class><button class="pics"><img src="https://github.com/${pic.githubUsername}.png?size=250" alt="profile image of ${pic.name}"></button></div>
    `)
}


function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
function getRandomName() {
    console.log('in getRandomName');
    const randomName = Math.floor(Math.random() * people.length);
    const item = people[randomName].name;
    $('#game-start').text(`Guess Who ${item} Is ?`);
    return item;
}

function displayServer() {
    console.log('before AJAX');
    $.ajax({
        method:'GET',
        url:'/people',
    }).then(function(response){
        console.log('response', response);
        for(let person of response) {
            $('#server').append(`
            <p>Name:${person.name}</p>
            `)
        }
    }).catch(function(error){
        console.log('error', error);
        alert('something went wrong');
    });
    console.log('after AJAX')
}

// Kyles Code

// function getRandomName(arr) {
//     console.log('in getRandomName');
//     const randomName = Math.floor(Math.random() * arr.length);
//     const item = arr[randomName].name;
//     return item;
// }

// console.log(getRandomName(people));

// Latisha's code 

// // console.log('Here are all the available people:', people);

// $(readyNow);

// function readyNow(){
//     console.log('ready now');
//     addPictures();
    
//     $(document).ready(randomPerson);
// }

// function addPictures(){
//     console.log('in addPictures');
//     for(let pic of people) {
//     $('#picture-content').append(`
//     <div> 
//     <img src="https://github.com/${pic.githubUsername}.png?size=250" alt="Profile image of ${pic.name}">
//     </div>
//     `)
//     }
// }

// function randomNumber(min, max){
//     return Math.floor(Math.random() * (1 + max - min) + min);
// }

// function randomPerson(){
//     console.log('in randomPerson');
//         for( let i=0; i<people.length; i+=1){
//             let randomPerson = people[num];
            
//             if (i === randomNumber(0,4)){
//                 console.log('person', randomPerson.name); 
//                 $('#random-person').text(`
//                 Click on: ${randomPerson.name}
//                 `)
//             }
//         }
//     }
// console.log(randomPerson.name);
// console.log('number:',randomNumber(0,4));