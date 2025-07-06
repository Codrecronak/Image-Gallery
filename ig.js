
        const image=document.getElementsByTagName('li')
        //console.log(image)
        for(let i=0;i<image.length;i++){
        //console.log(image[i].firstChild)
    image[i].addEventListener('click',function(e){
        e.preventDefault();
        //console.log(e.target)
        let disp=document.querySelector('.display_img')
        let z=e.target.cloneNode()
        let k=document.querySelector('img')
        //console.log(disp)
       console.log(disp.replaceChild(z,k))
       //consol.log(disp)
       let addI=disp.querySelector('img')
       //addI.style.height='100%'
       //addI.style.width='100%'
       const btn=document.getElementsByTagName('button')
       btn[0].onclick= function(){
        if(btn[0].innerText=='dark'){
            addI.style.filter='brightness(50%)'
            btn[0].innerText='light'
        }
        else{
            addI.style.filter='brightness(100%)'
             btn[0].innerText='dark'

        }
       }
       

        
    })}
        
    