
window.onload = function () {
    const detailsElement = document.querySelector('.details');
    const iconArrowElement = document.querySelector('.icon-arrow')

    document.querySelector('.btn-details').addEventListener('click', (e) => {
        if(detailsElement.classList.contains('d-none')){
            detailsElement.classList.remove('d-none');
        }else{            
            detailsElement.classList.add('d-none');
        }

        if (iconArrowElement.classList.contains('rotate')){            
            iconArrowElement.classList.remove('rotate');
        }else{            
            iconArrowElement.classList.add('rotate');
        }

        console.log(e.target)
        console.log(e.target.querySelector('.icon-arrow'))
        console.log(e.querySelector('.icon-arrow'))

    })
}