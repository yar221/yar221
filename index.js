var me = document.querySelector('#me')
var myWorks = document.querySelector('#my_works')
var contactMe = document.querySelector('#contact_me')
var changeColumns = document.querySelector('#change_columns')
var meText = document.querySelector('#me_text')
var myWorksText= document.querySelector('#my_works_text') 
var contactMeText= document.querySelector('#contact_me_text') 
var allMyWorks = document.querySelector('#all_my_works')      
var callMe = document.querySelector('#call_me')     
me.addEventListener('click', colorInfoChange2)
myWorks.addEventListener('click', colorInfoChange)
contactMe.addEventListener('click', colorInfoChange3)

function colorInfoChange(){
	changeColumns.classList.add('hide')
	callMe.classList.add('hide')
	allMyWorks.classList.remove('hide')

	myWorks.style.backgroundColor = '#3ba8c0'
	myWorksText.style.color = '#eff3f7'

	me.style.backgroundColor = '#eff3f7'
	meText.style.color = '#3ba8c0'

	contactMe.style.backgroundColor = '#eff3f7'
	contactMeText.style.color = '#3ba8c0'
}

function colorInfoChange2(){
	allMyWorks.classList.add('hide')
	callMe.classList.add('hide')
	changeColumns.classList.remove('hide')

	me.style.backgroundColor = '#3ba8c0'
	meText.style.color = '#eff3f7'

	myWorks.style.backgroundColor = '#eff3f7'
	myWorksText.style.color = '#3ba8c0'

	contactMe.style.backgroundColor = '#eff3f7'
	contactMeText.style.color = '#3ba8c0'

}

function colorInfoChange3(){
	callMe.classList.remove('hide')
	changeColumns.classList.add('hide')
	allMyWorks.classList.add('hide')

	contactMe.style.backgroundColor = '#3ba8c0'
	contactMeText.style.color = '#eff3f7'

	me.style.backgroundColor = '#eff3f7'
	meText.style.color = '#3ba8c0'

	myWorks.style.backgroundColor = '#eff3f7'
	myWorksText.style.color = '#3ba8c0'

}