// language button ---------------------

const blockLanguageButton=document.querySelector('.userNav_language');
blockLanguageButton.addEventListener('click', (e)=>{
  const arrButton = blockLanguageButton.querySelectorAll('button');
  arrButton.forEach(button=>{
    if(e.target==button) {
      e.preventDefault();
    }
  })
  blockLanguageButton.classList.toggle('active');
  console.log(e.target);
})


// -------------    top menu open\close ---------------------


const btnOpenMenu = document.querySelector('.menuToggle');

const menuPanel = document.querySelector('.top-menu');
const btnCloseMenu = menuPanel.querySelector('.close-menu');

btnOpenMenu.addEventListener('click', () => {
  menuPanel.classList.add('active');
})
menuPanel.addEventListener('click', (e) => {
  // если клик не на субменю, то панель закрывается
  if(e.target.className!=='submenu__link'){
    menuPanel.classList.remove('active');
    menuPanel.querySelector('.submenu').classList.remove('active');
  }
    else{
      // клик на субменю 
      menuPanel.querySelector('.submenu').classList.toggle('active')
    }
})

// --------------------- end-----------------------------

// ------------------------- index Service ------------------------------

if (document.querySelector('.services-list')) {
  const tabsItem = document.querySelectorAll('.services-item');
  const arrContent = document.querySelectorAll('.content__item');
  const sectionBack = document.querySelector('.services-content__list');
  tabsItem.forEach((item, index) => {
    item.addEventListener('click', () => {
      tabsItem.forEach((tab, tabIndex) => {
        tab.classList.remove('active');
        arrContent[tabIndex].classList.remove('active')
      })
      item.classList.add('active');
      arrContent[index].classList.add('active');
      // меняю бэкграунд в секции
      sectionBack.dataset.id = index;
    })
  })
}

// ------------------ form-dropDown -----------------------------------------

if (document.querySelector('.form-dropDown')) {
  const arrFormDropDown = document.querySelectorAll('.form-dropDown');
  arrFormDropDown.forEach(item => {
    const listDropDown = item.querySelector('.form-dropDown__dropList');
    // навешиваю слушитель на список выпадающих элементов 
    listDropDown.addEventListener('click', (e) => {
      // если клик на элементе
      if (e.target.className == 'dropDown-item') {
        //убираю активный класс 
        item.classList.remove('active')
        // получаю текст выбранного элемента
        const selectText = e.target.textContent;
        // получаю псевдо-плейсхолдер и переписываю в него текст выбранного элемента
        item.querySelector('.dropDown__label').textContent = selectText;
      }
    })
    const title = item.querySelector('.form-dropDown__title');
    // слушатель на заголовок 
    title.addEventListener('click', () => {
      // при клике в него добавляю / убираю активный класс
      item.classList.toggle('active');
    })
  })
}
// ------------------------footer button scrollUp --------------------------
const buttonScrollUp = document.querySelector('.footer-elevator')
buttonScrollUp.addEventListener('click', () => {
  window.scrollBy(0, -buttonScrollUp.offsetTop);
})



// -------------------------page services wiget ------------------------------
if (document.querySelector('.wiget-select-service')) {
  const arrLink = document.querySelectorAll('.service-item');
  const arrSvgInCenter = document.querySelectorAll('.wiget_center svg');
  arrLink.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
      arrSvgInCenter[index].classList.add('active')
    })
    item.addEventListener('mouseout', () => {
      arrSvgInCenter[index].classList.remove('active')
    })
  })
}

// --------------------------------- accordion -----------------------------------
if (document.querySelector('.accordion')) {
  const arrAccordion = document.querySelectorAll('.accordion');
  arrAccordion.forEach(item => {
    item.querySelector('.accordion-title').addEventListener('click', () => {

      // если клик в любое место кроме аккордеона
      const body = document.querySelector('body');
      body.addEventListener('click', (e)=>{
        if(!item.contains(e.target)){
          // закрываю аккордеон
          item.classList.remove('active')
        };
      })  
      item.classList.toggle('active')
    })
  })
}


// ------------------------- tabs in contacts ---------------------------------------

if(document.querySelector('.contacts')){
  const arrContactsTabs = document.querySelectorAll('.contact-tabs__item');
  const arrAdressItem=document.querySelectorAll('.adress-item');


  arrContactsTabs.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
      arrContactsTabs.forEach((element, indexElement)=>{
        element.classList.remove('active')
        arrAdressItem[indexElement].classList.add('hidden')
      })
      item.classList.toggle('active');
      arrAdressItem[index].classList.remove('hidden');
    })
  })


}

// ---------------------------- yandex map ------------------------------------------------




// ---------------------------------- calc -------------------------------------------
// состояние текстового инпута
// Инпут в форме (Если есть value - добавляет на label класс active)
if(document.querySelector('.input')){
  const arrInput = document.querySelectorAll('.input');
  arrInput.forEach(item=>{
    const $input = item.querySelector('input');
    $input.addEventListener("change", (e)=>{
      if($input.value){
        item.classList.add('active')
      }
      else item.classList.remove('active')
    })
  })
}



// ---------------------------------- select type calc ---------------------------------------

  // говно-реализация, перепиши плиз
  // в зависимости от состояния радиокнопки включает/выключает секции и меняет заголовок 
if(document.querySelector('.calculator')){

  const sectionCalculator = document.querySelector('.calculator');
  const sectionFastForm = document.querySelector('.fast-form');
  const FastCheck = document.getElementById('fast-check');
  const CalculatorCheck=document.getElementById('calculator-check');
  const title = document.getElementById('titleSection');
  
  // состояние по умолчанию
  CalculatorCheck.checked
  ?sectionFastForm.style.display='none'
  :sectionFastForm.style.display='flex';

  CalculatorCheck.addEventListener('change', ()=>{
    sectionCalculator.style.display='flex';
    sectionFastForm.style.display='none';
    title.textContent='КАЛЬКУЛЯТОР'
    
  })
  FastCheck.addEventListener('change', ()=>{
    sectionCalculator.style.display='none';
    sectionFastForm.style.display='flex';
    title.textContent='БЫСТРЫЙ ЗАПРОС'
  })
  

}
// ----------------------------------------------------
if(document.querySelector('.checkbox-list')){
  const arrCheckBoxTypeServices = document.querySelectorAll('.checkbox-list label');
  const arrServiceSection=document.querySelectorAll('.service-item');
  const arrServiceTitle = document.querySelectorAll('.service-item__title');
  arrCheckBoxTypeServices.forEach((item, index)=>{
    const input = item.querySelector('input');
    // неудачное решение событие срабатывает 2 раза(клик на лейбле) - (перепеши, плиз)
    item.addEventListener('click',()=>{
      input.checked
      ?arrServiceSection[index].classList.add('active')
      :arrServiceSection[index].classList.remove('active')    
    })
    
  })
  // расскрытие панелей аккордеона на форме
  arrServiceTitle.forEach((item, index)=>{
    item.addEventListener('click',(e)=>{
      arrServiceSection[index].classList.toggle('active');
      // меняю на противоположный чекбокс в панели выбора услуг
      arrCheckBoxTypeServices[index].querySelector('input').checked=!arrCheckBoxTypeServices[index].querySelector('input').checked;
      
    })
  })

  // инкримент /декримент в инпуте number
  const arrInputNumbers= document.querySelectorAll('.number');
  arrInputNumbers.forEach(item=>{
    const dec = item.querySelector('.dec');
    const inc = item.querySelector('.inc');
    const input = item.querySelector('input');
    dec.addEventListener('click', ()=>{
      if(input.value>1)
        input.value--;
    })
    inc.addEventListener('click', ()=>{
        input.value++;
    })
    
  })

  // открытие выпадающих списков в форме
  const arrSelect=document.querySelectorAll('.select');



  arrSelect.forEach(item=>{
        
    item.addEventListener('click',(e)=>{
      const title=item.querySelector('.select__title');
      const listItem=item.querySelector('.select__list');
      const placeholder=item.querySelector('span');
      const input = item.querySelector('input');
      if(title.contains(e.target)){
        item.classList.toggle('active')
      }
      if(listItem.contains(e.target)){
        placeholder.textContent=e.target.textContent;
        placeholder.classList.add('select')
        input.value=e.target.textContent;
        item.classList.toggle('active')
      }     
    })
  })

}
  
  
  
