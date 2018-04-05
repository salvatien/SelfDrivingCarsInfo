const googleIMG = new Image(2144,306);
    googleIMG.src = './media/google1.jpg';

var frameNr = 0;
var googleIMGFramesCount = 4;
var frameWidth = googleIMG.width / googleIMGFramesCount;
var frameHeight = googleIMG.height;
var c = document.getElementById('canv').getContext('2d');

function draw() {
    c.clearRect(0,0,520,300);

    frameNr++;
    if (frameNr > googleIMGFramesCount) {
        frameNr = 1;
    }
    var frameXpos = (frameNr-1)*frameWidth;
    //c.drawImage(googleIMG, 100, 100);
    c.drawImage(googleIMG, frameXpos, 0, frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);
}

googleIMG.onload = function(){
    setInterval('draw()',3000);
};



function openStart(evt) {
    var start = document.getElementById("start");
    var google = document.getElementById("google");
    var wady = document.getElementById("wady");
    start.style.display = "block";
    google.style.display = "none";
    wady.style.display = "none";
    document.getElementById("startButton").style.backgroundColor = 'green';
    document.getElementById("googleButton").style.backgroundColor = 'black';
    document.getElementById("wadyButton").style.backgroundColor = 'black';
    play();
    drawCarsCanv();
}



function openGoogle(evt) {
    var start = document.getElementById("start");
    var google = document.getElementById("google");
    var wady = document.getElementById("wady");
    google.style.display = "block";
    start.style.display = "none";
    wady.style.display = "none";
    document.getElementById("googleButton").style.backgroundColor = 'green';
    document.getElementById("startButton").style.backgroundColor = 'black';
    document.getElementById("wadyButton").style.backgroundColor = 'black';
    play();
}



function openwady(evt) {
    var start = document.getElementById("start");
    var google = document.getElementById("google");
    var wady = document.getElementById("wady");
    wady.style.display = "block";
    google.style.display = "none";
    start.style.display = "none";
    document.getElementById("wadyButton").style.backgroundColor = 'green';
    document.getElementById("googleButton").style.backgroundColor = 'black';
    document.getElementById("startButton").style.backgroundColor = 'black';
    play();
}




  function play(){
       var audio = document.getElementById("audio");
       audio.play();
  }


var descriptions = [
    "<p> z angielskiego Laser Illuminating Detection and Ranging, jest to system, który pozwala zbudować trójwymiarową mapę terenu oraz pojazdów i innych obiektów poprzez odbijanie od nich wiązki laserowej i mierzenie czasu jej powrótu - pozwala to na dokładne określenie dystansu i kształtu obiektu. Waymo używa tutaj 64-wiązkowego lasera Velodyne, który jest umieszczony na dachu samochodu w celu zminimalizowania szansy na przesłonięcie go. Urządzenie obraca się kilkaset razy na minutę, dzięki czemu do dyspozycji jest obraz w 360 stopniach. Zasięg to około 200m, co pozwala na reagowanie na napotkane sytuacje z odpowiednim wyprzedzeniem, dzięki czemu jazda jest płynna i bezpieczna. </p> ",
    "<p> Główną rolą kamer jest zbieranie informacji o ograniczeniach, do jakich samochód powinien się zastosować - znaki drogowe, sygnalizacja świetlna, tablice ostrzegawcze. Bardzo ważnym aspektem jest również rozpoznawanie sylwetek ludzkich oraz gestów zaobserwowanych przez kamerę - dzięki temu samochód poprawnie zareaguje na polecenia policjanta kierującego ruchem, rozróżni stojący na poboczu radiowóz od zwykłego zaparkowanego pojazdu, czy zostawi miejsce dla rowerzysty sygnalizującego skręt poprzez wyciągnięta rękę.</p>",
    "<p> LIDAR odpowiada za wykrywanie odległości i rysowanie otoczenia, jednak nie potrafi on określać prędkości innych obiektów na drodze, dlatego też na każdym ze zderzaków zamontowane są dwa sensory, które pozwalają odpowiednio reagować na zmiany prędkości otaczających samochodów, motocykli czy rowerów. Sygnał nie jest wysyłany jedynie do systemu zarządzania prędkością, czyli w analogii do tradycyjnego samochodu - do pedałów, ale do całości systemu sterowania, co pozwala na przykład na odbicie w bok, kiedy nie ma wystarczająco dużo czasu, aby zahamować.</p>",
    "<p>Autonomiczny pojazd musi potrafić wyliczyć optymalną trasę do punktu docelowego, i musi nią przejechać - inaczej umięjętność jazdy w ruchu ulicznym bez udziału kierowcy to jedynie sztuka dla sztuki. Co prawda nawet w tradycyjnych samochodach od dawna używa się systemów nawigacji GPS, jednak w przypadku Waymo trzeba było pójść o 2 kroki dalej - po pierwsze, dokładność systemu GPS jest ograniczona - różnica może wynieść nawet kilka metrów, poza tym system nie działa na parkingach podziemnych i w zamkniętych pomieszczeniach. Aby zminimalizować ten problem, dane geolokacyjne porównuje się z obrazem z kamer oraz innych czujników, aby skorygować wyliczone położenie względem rzeczywistego.</p>",
    "<p>Na samochód autonomiczny składa się jeszcze cała masa czujników i systemów - żyroskopy, mierniki wysokości, tachometry, systemy wykrywania awarii osprzętowania czy oczywiście CPU sterujące nimi wszystkimi. Warto też pamiętać, że samochody Waymo wyposażone są też w bardziej tradycyjne systemy, które kojarzymy z naszych samochodów. Ponieważ nie są to już jedynie prototypy, a samochody, które w niedalekiej przyszłości wejdą do sprzedaży, nie może być zaskoczeniem, że obecne są np. klimatyzacja, asystent parkowania czy system głośnomówiący.  </p>",
    "<p> Sercem samochodu jest oczywiście silnik, jednakże w przypadku omawianych samochodów jeszcze istotniejszą rolę pełni oprogramowanie. Waymo położyło największy nacisk na przewidywanie zachowań innych uczestników ruchu, nawet tych niezgodnych z przepisami, albo nieprzewidywalnych. Oprócz tego, samochody uczą się różnych sytuacji drogowych dzięki machine learningowi i wspólnej bazie danych, dzięki czemu im więcej takich aut będzie na drodze, tym bezpieczniejsze powinny się one stawać. </p>"
    + "<p>Trzeba jednak przyznać, że testy prowadzone przez spółkę już dawno nauczyły ich o wiele więcej, niż w ciągu życia zobaczy przeciętny kierowca - fizycznie samochody przejechały już łącznie ponad 3 miliony mil, a w ramach komputerowych symulacji... 2,5 miliarda! Ponadto testowane były w zamkniętych ośrodkach badawczych, takich jak baza Castle, gdzie zbudowano hektarowe miasteczko - makietę, na którym testowane są różne scenariusze - nawet takie jak trudne warunki atmosferyczne. </p>"
    + "<p>Za podejmowanie decyzji odpowiada sztuczna inteligencja - poprzez logikę rozmytą ocenia się różne możliwe zachowania samochodu jako bezpieczne lub nie, po czym w fazie testów sprawdza się, które rozwiązanie zapewnia najlepszy rezultat. Wynik eksperymentu jest przesyłany do wszystkich samochodów, dzięki czemu powinny one poradzić sobie z podobną sytuacją, nawet jeśli parametry będą nieco odmienne. Ze względu na centralne sterowanie, możliwa jest reakcja zestawem kilku akcji w ramach jednej sytuacji drogowej, co znacząco zwiększa bezpieczeństwo manewru. Najtrudniejszym aspektem dla sztucznej inteligencji jest oczywiście przewidywanie tego, co zrobią inni kierowcy - gdyby wszystkie samochody zamienić na autonomiczne, byłoby to o wiele prostsze zadanie, jednakże jest to odległa przyszłość. Na podstawie dotychczasowych poczynań danego pojazdu, oraz ogólnej historii podobnych przypadków, w czasie rzeczywistym oceniane są szanse na to, jaki manewr zostanie wykonany, a reakcja na ich zmianę jest natychmiastowa, dzięki czemu minimalizujemy liczbę wypadków, które w przypadku tradycyjnych samochodów zostałyby spowodowane przez kiepski refleks kierowcy. </p>"
];

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  document.getElementById("slideshowDescr").innerHTML = descriptions[slideIndex-1];
}




function drawCarsCanv() {
    var bg=document.createElement('img');
    bg.src='media/drogabg.png';
    var img=document.createElement('img');
    img.src='media/firefly.png';
    var img2=document.createElement('img');
    img2.src='media/firefly2.png';
    var red=document.createElement('img');
    red.src='media/czerwoneslup.png';
    var yellow=document.createElement('img');
    yellow.src='media/zolteslup.png';
    var green=document.createElement('img');
    green.src='media/zieloneslup.png';
    var wadyCanv = document.getElementById('wadyCanv');
    var wadyCanvCtx = wadyCanv.getContext('2d');
    var position = -600;
    var interval = setInterval(frame, 10);
    function frame() {
    	position++;
        if(position > 1350){
	        wadyCanvCtx.clearRect(0,0,1350,320);
		wadyCanvCtx.drawImage(bg, (position+600)/2, 0, 2000, 660, 0, 0, 1350, 320);
		wadyCanvCtx.drawImage(green, 1250-(position+600)/2*1350/2000,100, 40, 220);
		clearInterval(interval);
        }
	else if(position > 70) {
		clearInterval(interval);
		interval = setInterval(frame, 90-position);
                wadyCanvCtx.clearRect(0,0,1350,320);
		wadyCanvCtx.drawImage(bg, (position+600)/2, 0, 2000, 660, 0, 0, 1350, 320);
		if(position%2==0) {
	       		wadyCanvCtx.drawImage(img2, 550 + position-20, 170, 300, 150);
			wadyCanvCtx.drawImage(img, position+250-20, 170, 300, 150);
		}
		else {
			wadyCanvCtx.drawImage(img, 550 + position-20, 170, 300,150);
			wadyCanvCtx.drawImage(img2, position+250-20, 170, 300, 150);
		}
		wadyCanvCtx.drawImage(green, 1250-(position+600)/2*1350/2000,100, 40, 220);
	}
	else if(position > 50) {
		clearInterval(interval);
		interval = setInterval(frame, 20);
                wadyCanvCtx.clearRect(0,0,1350,320);
		wadyCanvCtx.drawImage(bg, (position+600)/2, 0, 2000, 660, 0, 0, 1350, 320);
	        wadyCanvCtx.drawImage(img, 600, 170, 300, 150);
		wadyCanvCtx.drawImage(img2, 300, 170, 300, 150);
		wadyCanvCtx.drawImage(yellow, 1250-(position+600)/2*1350/2000, 100, 40, 220);
	}

    	else if(position == 50) {
		clearInterval(interval);
		interval = setInterval(frame, 500);
	}
        else if (position > 0){
		clearInterval(interval);
		interval = setInterval(frame, 10+position);
                wadyCanvCtx.clearRect(0,0,1350,320);
		wadyCanvCtx.drawImage(bg, (position+600)/2, 0, 2000, 660, 0, 0, 1350, 320);
		if(position%2==0) {
	       		wadyCanvCtx.drawImage(img, position+250, 170, 300, 150);
			wadyCanvCtx.drawImage(img, 600, 170, 300, 150);
		}
		else {
			wadyCanvCtx.drawImage(img2, position+250, 170, 300, 150);
			wadyCanvCtx.drawImage(img2, 600, 170, 300, 150);
		}
		wadyCanvCtx.drawImage(red, 1250-(position+600)/2*1350/2000, 100, 40, 220);
	}
    	else {
            wadyCanvCtx.clearRect(0,0,1350,320);
	    wadyCanvCtx.drawImage(bg, (position+600)/2, 0, 2000, 660, 0, 0, 1350, 320);
	    if(position%2==0) {
	       	wadyCanvCtx.drawImage(img, position+250, 170, 300, 150);
            	wadyCanvCtx.drawImage(img, 600, 170, 300, 150);
	    }
	    else {
		wadyCanvCtx.drawImage(img2, position+250, 170, 300, 150);
                wadyCanvCtx.drawImage(img2, 600, 170, 300, 150);
            }
            wadyCanvCtx.drawImage(red, 1250-(position+600)/2*1350/2000, 100, 40, 220);
        }

    }
}
