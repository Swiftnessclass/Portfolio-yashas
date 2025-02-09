let contact=document.getElementById('Contact');
let msg=document.getElementById('msg');
let  tabLinks=document.querySelectorAll('.tab-links')
let tabContents=document.querySelectorAll('.tab-contents')
let sidesBar=document.querySelector('.sidebar')

    let openTab=(event,tabName)=>{

      for(let tabLink of tabLinks){
        tabLink.classList.remove('active-link');
        event.currentTarget.classList.add("active-link");
      }
      for(let tabContent of tabContents){
        tabContent.classList.remove('active-tab');
       document.getElementById(tabName).classList.add('active-tab');
      }
    
    }

const showSidebar=()=>{
  let sideBar= document.querySelector('.sidebar')

  sideBar.style.display='flex';
}
const closeSidebar=()=>{
sidesBar.style.display='none';
}
    


    const scriptURL = 'https://script.google.com/macros/s/AKfycbyjWSejeVHu_TkOs0Mv08moZGsYygWt2gb_g8KQrPKLFKIsb1pCBaKvR-26kcH3ttd3CQ/exec'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{
          msg.innerHTML="message sent successfully!"
          setTimeout(function(){
            msg.innerHTML=""
          },2000)
          form.reset()
        } )
        .catch(error => console.error('Error!', error.message))
    })

