const progress = document.querySelector('.progress');
const name = document.getElementById('user_name');
const email = document.getElementById('user_email');
const textarea = document.getElementById('your_message');


window.addEventListener('scroll', progressBar)

function progressBar(event){
	let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
	let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let per = windowScroll / windowHeight * 100;
	progress.style.width = per + '%';
}

//Появление popup окна
document.getElementById('link').addEventListener('click', function(){
	var popUpBackGround = document.querySelector('.popup_background');
  document.body.style.overflow = 'hidden';
  popUpBackGround.classList.add('popup_display');
  setTimeout(function() { 
    popUpBackGround.style.opacity = 1
  }, 0);
});

//Закрытие popup и удаление данных
function closePopup(item, elem){
	var deletedArr = [name, email, textarea];
  document.body.style.overflow = 'auto';
  item.style.opacity = 0;
  setTimeout(function(){
    item.classList.remove('popup_display')
    }, 500);
  for (var i = 0; i < 3; i++){
    deletedArr[i].value = '';
    if (deletedArr[i].classList.contains('red_border')){
      deletedArr[i].classList.remove('red_border')
    }
  }
};

function showGames(){
		setTimeout(function(){
		document.querySelector('.games_hidden').classList.add('b-show');
    document.getElementById('fav_games').style.display = 'none';
	}, 400);
};

function redBorders(item){
  if (item.value.length == 0){
		item.classList.add('red_border');
    } else {
      item.classList.remove('red_border');
    }
};

window.onload = main();

function main() {
	document.getElementById('fav_games').addEventListener('click', function() {
		showGames()
	});

	document.querySelector('.popup_background').addEventListener('click',function(){
		if (event.target == document.querySelector('.popup_background')){
			closePopup(document.querySelector('.popup_background'), [name, email, textarea])};
		} 
	);

	document.querySelector('.close').addEventListener('click', function(){
		closePopup(document.querySelector('.popup_background'), [name, email, textarea])
	});

	document.getElementById('sumbit_form_button').addEventListener('click',function(){
		redBorders(name)
	});

	document.getElementById('sumbit_form_button').addEventListener('click',function(){
		redBorders(email)
	});

	document.getElementById('sumbit_form_button').addEventListener('click',function(){
		redBorders(textarea)
	});
};

	