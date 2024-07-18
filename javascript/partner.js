// Get carousel images and dots
var images = document.querySelectorAll('.carousel-images img');
var dots = document.querySelectorAll('.carousel-dots .dot');

// Set initial index
var index = 0;

// Function to update carousel
function updateCarousel() {
    // Hide all images and remove 'active' class from all dots
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
        dots[i].classList.remove('active');
    }

    // Show current image and add 'active' class to current dot
    images[index].style.display = 'block';
    dots[index].classList.add('active');

    // Update paragraph text and background color
    updateText();
}

// Function to update paragraph text and background color
function updateText() {
    var header = document.querySelector('.text-header');
    var paragraph = document.querySelector('.text-paragraph');

    // Change text based on current image
    switch (index) {
        case 0:
            header.textContent = 'Was bieten wir unseren Kund*innen an?';
            paragraph.textContent = 'Was bieten wir unseren Kund*innen an?\n' +
                'sent ea vella quia quo ea volent.\n' +
                'At es aditam rest, optasped quat mi, consedi ssincta simet volupti sani dolorem ius, quos vel modi debis mintibus nulpa name volenis estibus aeri-\n' +
                'tatur, corunt dolor rem vellacim nonsecullum doluptiunt mi, volutNam autende ritaecabo. Everehe nimustiunt.\n' +
                'Ihilluptam facea conecupta que prae erio. Nequis et unt laut fuga. Me poriorum sint, quam inciis aut quibusam,Nam et maximag nimoluptatem quas\n' +
                'sintionsed quatio mossi ad et laborent utem estios ent ut recepta dolorrovitio quatusa nimusam sequi accabore, volorem ut offici voluptibus rectius\n' +
                'et atia evenistota nulparum, corrume venis utasperepro etur? Is et alit omniministi dolorum dia comnia ero evenihi ciendit pe quissecum reribus\n' +
                'doloris accus deria natetur asi duntem ratecto berendus nusdanduntum rempere volupti nullis ese reni ut quatemp ernatis niminturio qui utatus,\n' +
                'volum, aut acepers pitiusd antias maios ium cum fugiam, voluptatet et lique vid magnatur, qui nus.\n' +
                'Quias si niam, totatisque sitaque nihiliquae ipsam voluptasit utem cuptatibus, conseque porrum nihitae corehendit fugiasi millupi ciendusam es eos\n' +
                'adite provid utempor emperum adipsanda debisque quas eniti beatiustem sanis aut eostios amusae conet atur serro in es consere henimil imaximil\n' +
                'exeribe aquatat accus untempellor ma alique des velestibus doluptas qui ant volupient autemquunt paribus aut exerit platem conserias eatione sit';
            break;
        case 1:
            header.textContent = 'Was bieten wir unseren Kund*innen an?';
            paragraph.textContent = 'Was bieten wir unseren Kund*innen an?\n' +
                'sent ea vella quia quo ea volent.\n' +
                'At es aditam rest, optasped quat mi, consedi ssincta simet volupti sani dolorem ius, quos vel modi debis mintibus nulpa name volenis estibus aeri-\n' +
                'tatur, corunt dolor rem vellacim nonsecullum doluptiunt mi, volutNam autende ritaecabo. Everehe nimustiunt.\n' +
                'Ihilluptam facea conecupta que prae erio. Nequis et unt laut fuga. Me poriorum sint, quam inciis aut quibusam,Nam et maximag nimoluptatem quas\n' +
                'sintionsed quatio mossi ad et laborent utem estios ent ut recepta dolorrovitio quatusa nimusam sequi accabore, volorem ut offici voluptibus rectius\n' +
                'et atia evenistota nulparum, corrume venis utasperepro etur? Is et alit omniministi dolorum dia comnia ero evenihi ciendit pe quissecum reribus\n' +
                'doloris accus deria natetur asi duntem ratecto berendus nusdanduntum rempere volupti nullis ese reni ut quatemp ernatis niminturio qui utatus,\n' +
                'volum, aut acepers pitiusd antias maios ium cum fugiam, voluptatet et lique vid magnatur, qui nus.\n' +
                'Quias si niam, totatisque sitaque nihiliquae ipsam voluptasit utem cuptatibus, conseque porrum nihitae corehendit fugiasi millupi ciendusam es eos\n' +
                'adite provid utempor emperum adipsanda debisque quas eniti beatiustem sanis aut eostios amusae conet atur serro in es consere henimil imaximil\n' +
                'exeribe aquatat accus untempellor ma alique des velestibus doluptas qui ant volupient autemquunt paribus aut exerit platem conserias eatione sit';
            break;
        case 2:
            header.textContent = 'Was bieten wir unseren Kund*innen an?';
            paragraph.textContent = 'Was bieten wir unseren Kund*innen an?\n' +
                'sent ea vella quia quo ea volent.\n' +
                'At es aditam rest, optasped quat mi, consedi ssincta simet volupti sani dolorem ius, quos vel modi debis mintibus nulpa name volenis estibus aeri-\n' +
                'tatur, corunt dolor rem vellacim nonsecullum doluptiunt mi, volutNam autende ritaecabo. Everehe nimustiunt.\n' +
                'Ihilluptam facea conecupta que prae erio. Nequis et unt laut fuga. Me poriorum sint, quam inciis aut quibusam,Nam et maximag nimoluptatem quas\n' +
                'sintionsed quatio mossi ad et laborent utem estios ent ut recepta dolorrovitio quatusa nimusam sequi accabore, volorem ut offici voluptibus rectius\n' +
                'et atia evenistota nulparum, corrume venis utasperepro etur? Is et alit omniministi dolorum dia comnia ero evenihi ciendit pe quissecum reribus\n' +
                'doloris accus deria natetur asi duntem ratecto berendus nusdanduntum rempere volupti nullis ese reni ut quatemp ernatis niminturio qui utatus,\n' +
                'volum, aut acepers pitiusd antias maios ium cum fugiam, voluptatet et lique vid magnatur, qui nus.\n' +
                'Quias si niam, totatisque sitaque nihiliquae ipsam voluptasit utem cuptatibus, conseque porrum nihitae corehendit fugiasi millupi ciendusam es eos\n' +
                'adite provid utempor emperum adipsanda debisque quas eniti beatiustem sanis aut eostios amusae conet atur serro in es consere henimil imaximil\n' +
                'exeribe aquatat accus untempellor ma alique des velestibus doluptas qui ant volupient autemquunt paribus aut exerit platem conserias eatione sit';
            break;
        default:
            header.textContent = 'Default Header';
            paragraph.textContent = 'Default Text';
    }
}

// Function to change image when dot is clicked
function dotClick(e) {
    // Get index of clicked dot
    index = Array.prototype.indexOf.call(dots, e.target);

    // Update carousel
    updateCarousel();
    updateText();
}

// Add click event listener to each dot
for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', dotClick);
}

// Update carousel for the first time
updateCarousel();
