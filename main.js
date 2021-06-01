let odg1 = document.getElementById('odg1');
let odg2 = document.getElementById('odg2');
let odg3 = document.getElementById('odg3');
let odg4 = document.getElementById('odg4');
let text = document.getElementById('text');
let pitanje = document.getElementById('pitanje');
let dugme = document.getElementById('dugme');

pitanje1();

function pitanje1() {
    pitanje.textContent = "Najveća životinja na svetu je:"
    odg1.textContent = "a) Zelena anakonda";
    odg2.textContent = "b) Slon";
    odg3.textContent = "c) Žirafa";
    odg4.textContent = "d) Plavi kit";
    odg1.addEventListener("click", function () {
        odg1.style.background = "red";
        odg4.style.background = "green";
        odg2.style.background = "#222629";
        odg3.style.background = "#222629";
        text.textContent = "Plavi kit je najveća životinja koja je ikada postojala na Zemlji. Prosečno su dugački oko 26 m, a populacija koja živi na južnom delu je u pravilu krupnija od one koja živi na severnom delu. Pojedine životinje su često dugačke oko 30 m, a najveći izmereni plavi kit bio je dugačak 33,58 m";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "red";
        odg4.style.background = "green";
        odg1.style.background = "#222629";
        odg3.style.background = "#222629";
        text.textContent = "Plavi kit je najveća životinja koja je ikada postojala na Zemlji. Prosečno su dugački oko 26 m, a populacija koja živi na južnom delu je u pravilu krupnija od one koja živi na severnom delu. Pojedine životinje su često dugačke oko 30 m, a najveći izmereni plavi kit bio je dugačak 33,58 m";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg4.style.background = "green";
        odg1.style.background = "#222629";
        odg2.style.background = "#222629";
        text.textContent = "Plavi kit je najveća životinja koja je ikada postojala na Zemlji. Prosečno su dugački oko 26 m, a populacija koja živi na južnom delu je u pravilu krupnija od one koja živi na severnom delu. Pojedine životinje su često dugačke oko 30 m, a najveći izmereni plavi kit bio je dugačak 33,58 m";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "green";
        odg1.style.background = "#222629";
        odg2.style.background = "#222629";
        odg3.style.background = "#222629";
        text.textContent = "Plavi kit je najveća životinja koja je ikada postojala na Zemlji. Prosečno su dugački oko 26 m, a populacija koja živi na južnom delu je u pravilu krupnija od one koja živi na severnom delu. Pojedine životinje su često dugačke oko 30 m, a najveći izmereni plavi kit bio je dugačak 33,58 m";
    })
}

function pitanje2() {
    pitanje.textContent = "Na zastavi koje države se nalaze žuta zvezda, knjiga i puška AK-47 (Kalašnjikov):"
    odg1.textContent = "a) Mozambika";
    odg2.textContent = "b) Kube";
    odg3.textContent = "c) Somalije";
    odg4.textContent = "d) Severne Koreje";
    odg1.addEventListener("click", function () {
        odg1.style.background = "green";
        odg2.style.background = "#222629";
        odg3.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Zastava Mozambika sastoji se od vodoravno raspoređenih boja zelene, crne i žute. U desnom uglu je crveni trougao sa žutom zvezdom, knjigom i puškom AK-47. Zelena boja simbolizše bogatstvo, crna Afriku, žuta rude, bela mir, crvena borbu za nezavisnost, žuta socijalističko opredeljenje, knjiga obrazovanje, motika seljake i poljoprivredu, a puška odlučnost zemlje da se bori za slobodu.";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "red";
        odg1.style.background = "green";
        odg3.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Zastava Mozambika sastoji se od vodoravno raspoređenih boja zelene, crne i žute. U desnom uglu je crveni trougao sa žutom zvezdom, knjigom i puškom AK-47. Zelena boja simbolizše bogatstvo, crna Afriku, žuta rude, bela mir, crvena borbu za nezavisnost, žuta socijalističko opredeljenje, knjiga obrazovanje, motika seljake i poljoprivredu, a puška odlučnost zemlje da se bori za slobodu.";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg1.style.background = "green";
        odg2.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Zastava Mozambika sastoji se od vodoravno raspoređenih boja zelene, crne i žute. U desnom uglu je crveni trougao sa žutom zvezdom, knjigom i puškom AK-47. Zelena boja simbolizše bogatstvo, crna Afriku, žuta rude, bela mir, crvena borbu za nezavisnost, žuta socijalističko opredeljenje, knjiga obrazovanje, motika seljake i poljoprivredu, a puška odlučnost zemlje da se bori za slobodu.";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg1.style.background = "green";
        odg2.style.background = "#222629";
        odg3.style.background = "#222629";
        text.textContent = "Zastava Mozambika sastoji se od vodoravno raspoređenih boja zelene, crne i žute. U desnom uglu je crveni trougao sa žutom zvezdom, knjigom i puškom AK-47. Zelena boja simbolizše bogatstvo, crna Afriku, žuta rude, bela mir, crvena borbu za nezavisnost, žuta socijalističko opredeljenje, knjiga obrazovanje, motika seljake i poljoprivredu, a puška odlučnost zemlje da se bori za slobodu.";
    })
}

function pitanje3() {
    pitanje.textContent = "Koja je životinja odgovorna za više ljudskih žrtava u Africi od bilo koje druge velike životinje?:"
    odg1.textContent = "a) Nosorog";
    odg2.textContent = "b) Slon";
    odg3.textContent = "c) Nilski konj";
    odg4.textContent = "d) Hijena";
    odg1.addEventListener("click", function () {
        odg1.style.background = "red";
        odg3.style.background = "green";
        odg2.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Nilski konj je nepredvidljiva i agresivna životinja, zbog čega je i najopasniji sisar u Africi. Uprkos zdepastom obliku i kratkim nogama, lako može trčati brže od čoveka. U proseku, nilski konji svake godine ubiju 2,900 ljudi!";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "red";
        odg3.style.background = "green";
        odg1.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Nilski konj je nepredvidljiva i agresivna životinja, zbog čega je i najopasniji sisar u Africi. Uprkos zdepastom obliku i kratkim nogama, lako može trčati brže od čoveka. U proseku, nilski konji svake godine ubiju 2,900 ljudi!";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "green";
        odg1.style.background = "#222629";
        odg2.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Nilski konj je nepredvidljiva i agresivna životinja, zbog čega je i najopasniji sisar u Africi. Uprkos zdepastom obliku i kratkim nogama, lako može trčati brže od čoveka. U proseku, nilski konji svake godine ubiju 2,900 ljudi!";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg3.style.background = "green";
        odg1.style.background = "#222629";
        odg2.style.background = "#222629";
        text.textContent = "Nilski konj je nepredvidljiva i agresivna životinja, zbog čega je i najopasniji sisar u Africi. Uprkos zdepastom obliku i kratkim nogama, lako može trčati brže od čoveka. U proseku, nilski konji svake godine ubiju 2,900 ljudi!";
    })
}

function pitanje4() {
    pitanje.textContent = "Koji je film iz 1991. godine osvojio Oscara za najbolji adaptirani scenario, najbolji film, najboljeg glumca, glumicu i reditelja?:"
    odg1.textContent = "a) Porodica Adams (eng. The Addams Family)";
    odg2.textContent = "b) Kad jaganjci utihnu (eng. The Silence of the Lambs)";
    odg3.textContent = "c) Terminator 2: Sudnji dan (eng. Terminator 2: Judgment Day)";
    odg4.textContent = "d) Robin Hood: Princ lopova (eng. Robin Hood: Prince of Thieves)";
    odg1.addEventListener("click", function () {
        odg1.style.background = "red";
        odg2.style.background = "green";
        odg3.style.background = "#222629";
        odg3.style.background = "#222629";
        text.textContent = "Kad jaganjci utihnu je američki triler Jonathana Demmea iz 1991. godine, temeljen na romanu Thomasa Harrisa. Jonathan Demme osvojio je Oscara za najboljeg reditelja. Jodie Foster i Anthony Hopkins osvojili su Oscara za uloge Clarice Sterling i dr. Hannibala Lectera, a osim toga film je osvojio i Oscara za najbolji adaptirani scenario i najbolji film. Kad jaganjci utihnu je treći film u istoriji koji je osvojio pet najprestižnijih Oscara.";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "green";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Kad jaganjci utihnu je američki triler Jonathana Demmea iz 1991. godine, temeljen na romanu Thomasa Harrisa. Jonathan Demme osvojio je Oscara za najboljeg reditelja. Jodie Foster i Anthony Hopkins osvojili su Oscara za uloge Clarice Sterling i dr. Hannibala Lectera, a osim toga film je osvojio i Oscara za najbolji adaptirani scenario i najbolji film. Kad jaganjci utihnu je treći film u istoriji koji je osvojio pet najprestižnijih Oscara.";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Kad jaganjci utihnu je američki triler Jonathana Demmea iz 1991. godine, temeljen na romanu Thomasa Harrisa. Jonathan Demme osvojio je Oscara za najboljeg reditelja. Jodie Foster i Anthony Hopkins osvojili su Oscara za uloge Clarice Sterling i dr. Hannibala Lectera, a osim toga film je osvojio i Oscara za najbolji adaptirani scenario i najbolji film. Kad jaganjci utihnu je treći film u istoriji koji je osvojio pet najprestižnijih Oscara.";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        text.textContent = "Kad jaganjci utihnu je američki triler Jonathana Demmea iz 1991. godine, temeljen na romanu Thomasa Harrisa. Jonathan Demme osvojio je Oscara za najboljeg reditelja. Jodie Foster i Anthony Hopkins osvojili su Oscara za uloge Clarice Sterling i dr. Hannibala Lectera, a osim toga film je osvojio i Oscara za najbolji adaptirani scenario i najbolji film. Kad jaganjci utihnu je treći film u istoriji koji je osvojio pet najprestižnijih Oscara.";
    })
}

function pitanje5() {
    pitanje.textContent = "Akrofobični ljudi se boje:"
    odg1.textContent = "a) Visine";
    odg2.textContent = "b) Zmije";
    odg3.textContent = "c) Uskog prostora";
    odg4.textContent = "d) Pauka";
    odg1.addEventListener("click", function () {
        odg1.style.background = "green";
        odg2.style.background = "#222629";
        odg3.style.background = "#222629";
        odg3.style.background = "#222629";
        text.textContent = "Akrofobija, ili strah od visine, jedna je od najčešćih fobija. Procenjuje se da približno 3 do 5 posto populacije pati od akrofobije.";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Akrofobija, ili strah od visine, jedna je od najčešćih fobija. Procenjuje se da približno 3 do 5 posto populacije pati od akrofobije.";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg1.style.background = "green";
        odg2.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Akrofobija, ili strah od visine, jedna je od najčešćih fobija. Procenjuje se da približno 3 do 5 posto populacije pati od akrofobije.";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "green";
        odg2.style.background = "#222629";
        text.textContent = "Akrofobija, ili strah od visine, jedna je od najčešćih fobija. Procenjuje se da približno 3 do 5 posto populacije pati od akrofobije.";
    })
}

function pitanje6() {
    pitanje.textContent = "Najdublje jezero na svetu je:"
    odg1.textContent = "a) Jezero Titicaca";
    odg2.textContent = "b) Viktorijino jezero";
    odg3.textContent = "c) Bajkalsko jezero";
    odg4.textContent = "d) Kaspijsko jezero";
    odg1.addEventListener("click", function () {
        odg1.style.background = "red";
        odg2.style.background = "#222629";
        odg3.style.background = "green";
        odg3.style.background = "#222629";
        text.textContent = "Bajkalsko jezero se nalazi u azijskom delu Ruske Federacije. Pored toga što je najdublje (oko 1700 m) jezero na svetu, ono je takođe i najstarije.";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "red";
        odg3.style.background = "green";
        odg1.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Bajkalsko jezero se nalazi u azijskom delu Ruske Federacije. Pored toga što je najdublje (oko 1700 m) jezero na svetu, ono je takođe i najstarije.";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "green";
        odg1.style.background = "#222629";
        odg2.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Bajkalsko jezero se nalazi u azijskom delu Ruske Federacije. Pored toga što je najdublje (oko 1700 m) jezero na svetu, ono je takođe i najstarije.";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg3.style.background = "green";
        odg1.style.background = "#222629";
        odg2.style.background = "#222629";
        text.textContent = "Bajkalsko jezero se nalazi u azijskom delu Ruske Federacije. Pored toga što je najdublje (oko 1700 m) jezero na svetu, ono je takođe i najstarije.";
    })
}

function pitanje7() {
    pitanje.textContent = "Pre solo karijere, Sting je bio glavni tekstopisac, pevač i basista rock grupe:"
    odg1.textContent = "a) The Who";
    odg2.textContent = "b) The Police";
    odg3.textContent = "c) Oasis";
    odg4.textContent = "d) The Clash";
    odg1.addEventListener("click", function () {
        odg1.style.background = "red";
        odg2.style.background = "green";
        odg3.style.background = "#222629";
        odg3.style.background = "#222629";
        text.textContent = "Sting je engleski muzičar koji je solo karijeru započeo nakon velikog uspeha njegove rock grupe The Police.";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "green";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Sting je engleski muzičar koji je solo karijeru započeo nakon velikog uspeha njegove rock grupe The Police.";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Sting je engleski muzičar koji je solo karijeru započeo nakon velikog uspeha njegove rock grupe The Police.";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        text.textContent = "Sting je engleski muzičar koji je solo karijeru započeo nakon velikog uspeha njegove rock grupe The Police.";
    })
}

function pitanje8() {
    pitanje.textContent = "Ko je režirao filmove “Čeljusti” (Jaws), “Schindlerova lista” (Schindler’s List) i “Park iz doba Jure” (Jurassic Park)?:"
    odg1.textContent = "a) Alfred Hitchcock";
    odg2.textContent = "b) Steven Spielberg";
    odg3.textContent = "c) Stanley Kubrick";
    odg4.textContent = "d) James Cameron";
    odg1.addEventListener("click", function () {
        odg1.style.background = "red";
        odg2.style.background = "green";
        odg3.style.background = "#222629";
        odg3.style.background = "#222629";
        text.textContent = "Steven Spielberg je američki filmski reditelj, trostruki dobitnik Oscara i finansijski najuspešniji reditelj u istoriji. Njegova 3 filma: Čeljusti, E.T. i Park iz doba Jure postali su finansijski najuspešniji filmovi tog vremena. Schindlerova lista je dobitnik 7 Oscara, 7 BAFTA i 3 Zlatna globusa.";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "green";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Steven Spielberg je američki filmski reditelj, trostruki dobitnik Oscara i finansijski najuspešniji reditelj u istoriji. Njegova 3 filma: Čeljusti, E.T. i Park iz doba Jure postali su finansijski najuspešniji filmovi tog vremena. Schindlerova lista je dobitnik 7 Oscara, 7 BAFTA i 3 Zlatna globusa.";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Steven Spielberg je američki filmski reditelj, trostruki dobitnik Oscara i finansijski najuspešniji reditelj u istoriji. Njegova 3 filma: Čeljusti, E.T. i Park iz doba Jure postali su finansijski najuspešniji filmovi tog vremena. Schindlerova lista je dobitnik 7 Oscara, 7 BAFTA i 3 Zlatna globusa.";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        text.textContent = "Steven Spielberg je američki filmski reditelj, trostruki dobitnik Oscara i finansijski najuspešniji reditelj u istoriji. Njegova 3 filma: Čeljusti, E.T. i Park iz doba Jure postali su finansijski najuspešniji filmovi tog vremena. Schindlerova lista je dobitnik 7 Oscara, 7 BAFTA i 3 Zlatna globusa.";
    })
}

function pitanje9() {
    pitanje.textContent = "Najveća piramida u Egiptu je:"
    odg1.textContent = "a) Sneferuova piramida";
    odg2.textContent = "b) Keopsova piramida";
    odg3.textContent = "c) Menkorova piramida";
    odg4.textContent = "d) Kefrenova piramida";
    odg1.addEventListener("click", function () {
        odg1.style.background = "red";
        odg2.style.background = "green";
        odg3.style.background = "#222629";
        odg3.style.background = "#222629";
        text.textContent = "Keopsova piramida je najveća od tri velike egipatske piramide. Sagrađena je oko 2900 godine pne. u egipatskom gradu Gizi, na zapadnoj obali reke Nila blizu Kaira. Kada je sagrađena piramida je bila visoka 145,75 m , ali se tokom godina smanjila za 10 m. Piramida se sastoji od oko 2 300 000 kamenih blokova";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "green";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Keopsova piramida je najveća od tri velike egipatske piramide. Sagrađena je oko 2900 godine pne. u egipatskom gradu Gizi, na zapadnoj obali reke Nila blizu Kaira. Kada je sagrađena piramida je bila visoka 145,75 m , ali se tokom godina smanjila za 10 m. Piramida se sastoji od oko 2 300 000 kamenih blokova";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Keopsova piramida je najveća od tri velike egipatske piramide. Sagrađena je oko 2900 godine pne. u egipatskom gradu Gizi, na zapadnoj obali reke Nila blizu Kaira. Kada je sagrađena piramida je bila visoka 145,75 m , ali se tokom godina smanjila za 10 m. Piramida se sastoji od oko 2 300 000 kamenih blokova";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        text.textContent = "Keopsova piramida je najveća od tri velike egipatske piramide. Sagrađena je oko 2900 godine pne. u egipatskom gradu Gizi, na zapadnoj obali reke Nila blizu Kaira. Kada je sagrađena piramida je bila visoka 145,75 m , ali se tokom godina smanjila za 10 m. Piramida se sastoji od oko 2 300 000 kamenih blokova";
    })
}

function pitanje10() {
    pitanje.textContent = "“Mislim, dakle postojim (jesam)” (Cogito ergo sum) je rekao:"
    odg1.textContent = "a) Isaac Newton";
    odg2.textContent = "b) Nikola Tesla";
    odg3.textContent = "c) Pitagora";
    odg4.textContent = "d) René Descartes";
    odg1.addEventListener("click", function () {
        odg1.style.background = "red";
        odg4.style.background = "green";
        odg2.style.background = "#222629";
        odg3.style.background = "#222629";
        text.textContent = "Rene Descartes je francuski filozof, fizičar, matematičar i utemeljitelj analitičke geometrije. Poznat je i kao začetnik racionalističkog pravca u filozofiji, kao i po poznatoj uzrečici “Mislim, dakle postojim (jesam)”";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "red";
        odg4.style.background = "green";
        odg1.style.background = "#222629";
        odg3.style.background = "#222629";
        text.textContent = "Rene Descartes je francuski filozof, fizičar, matematičar i utemeljitelj analitičke geometrije. Poznat je i kao začetnik racionalističkog pravca u filozofiji, kao i po poznatoj uzrečici “Mislim, dakle postojim (jesam)”";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg4.style.background = "green";
        odg1.style.background = "#222629";
        odg2.style.background = "#222629";
        text.textContent = "Rene Descartes je francuski filozof, fizičar, matematičar i utemeljitelj analitičke geometrije. Poznat je i kao začetnik racionalističkog pravca u filozofiji, kao i po poznatoj uzrečici “Mislim, dakle postojim (jesam)”";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "green";
        odg1.style.background = "#222629";
        odg2.style.background = "#222629";
        odg3.style.background = "#222629";
        text.textContent = "Rene Descartes je francuski filozof, fizičar, matematičar i utemeljitelj analitičke geometrije. Poznat je i kao začetnik racionalističkog pravca u filozofiji, kao i po poznatoj uzrečici “Mislim, dakle postojim (jesam)”";
    })
}

function pitanje11() {
    pitanje.textContent = "Najveća vrsta mačaka na svetu je:"
    odg1.textContent = "a) Ris";
    odg2.textContent = "b) Lav";
    odg3.textContent = "c) Gepard";
    odg4.textContent = "d) Tigar";
    odg1.addEventListener("click", function () {
        odg1.style.background = "red";
        odg4.style.background = "green";
        odg2.style.background = "#222629";
        odg3.style.background = "#222629";
        text.textContent = "Tigar (Panthera tigris) je najveća vrsta mačaka na svetu. Najmanja podvrsta živi u Indoneziji. Dug je 140 cm, a rep mu je još oko 60 cm. Mužjaci teže 120 kg, a ženke oko 90 kg. Sibirski tigar je bitno veći. Dužina tela može biti čak i 3 metra. Rep je dug 90 cm, a može dostići težinu preko 350 kg (ženka 300 kg). Time je sibirski tigar, nakon medveda najveći kopneni grabežljivac.";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "red";
        odg4.style.background = "green";
        odg1.style.background = "#222629";
        odg3.style.background = "#222629";
        text.textContent = "Tigar (Panthera tigris) je najveća vrsta mačaka na svetu. Najmanja podvrsta živi u Indoneziji. Dug je 140 cm, a rep mu je još oko 60 cm. Mužjaci teže 120 kg, a ženke oko 90 kg. Sibirski tigar je bitno veći. Dužina tela može biti čak i 3 metra. Rep je dug 90 cm, a može dostići težinu preko 350 kg (ženka 300 kg). Time je sibirski tigar, nakon medveda najveći kopneni grabežljivac.";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg4.style.background = "green";
        odg1.style.background = "#222629";
        odg2.style.background = "#222629";
        text.textContent = "Tigar (Panthera tigris) je najveća vrsta mačaka na svetu. Najmanja podvrsta živi u Indoneziji. Dug je 140 cm, a rep mu je još oko 60 cm. Mužjaci teže 120 kg, a ženke oko 90 kg. Sibirski tigar je bitno veći. Dužina tela može biti čak i 3 metra. Rep je dug 90 cm, a može dostići težinu preko 350 kg (ženka 300 kg). Time je sibirski tigar, nakon medveda najveći kopneni grabežljivac.";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "green";
        odg1.style.background = "#222629";
        odg2.style.background = "#222629";
        odg3.style.background = "#222629";
        text.textContent = "Tigar (Panthera tigris) je najveća vrsta mačaka na svetu. Najmanja podvrsta živi u Indoneziji. Dug je 140 cm, a rep mu je još oko 60 cm. Mužjaci teže 120 kg, a ženke oko 90 kg. Sibirski tigar je bitno veći. Dužina tela može biti čak i 3 metra. Rep je dug 90 cm, a može dostići težinu preko 350 kg (ženka 300 kg). Time je sibirski tigar, nakon medveda najveći kopneni grabežljivac.";
    })
}

function pitanje12() {
    pitanje.textContent = "Pored mačaka predu i:"
    odg1.textContent = "a) Psi";
    odg2.textContent = "b) Žirafe";
    odg3.textContent = "c) Veverice";
    odg4.textContent = "d) Nilski konji";
    odg1.addEventListener("click", function () {
        odg1.style.background = "red";
        odg3.style.background = "green";
        odg2.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Mačke nisu jedine životinje koje mogu da predu. Pored njih predu i veverice, rakuni, mungosi…";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "red";
        odg3.style.background = "green";
        odg1.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Mačke nisu jedine životinje koje mogu da predu. Pored njih predu i veverice, rakuni, mungosi…";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "green";
        odg1.style.background = "#222629";
        odg2.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Mačke nisu jedine životinje koje mogu da predu. Pored njih predu i veverice, rakuni, mungosi…";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg3.style.background = "green";
        odg1.style.background = "#222629";
        odg2.style.background = "#222629";
        text.textContent = "Mačke nisu jedine životinje koje mogu da predu. Pored njih predu i veverice, rakuni, mungosi…";
    })
}

function pitanje13() {
    pitanje.textContent = "Republika Nikaragva se graniči sa:"
    odg1.textContent = "a) Tanzanijom, Ugandom, Sudanom, Etiopijom i Somalijom";
    odg2.textContent = "b) Hondurasom i Kostarikom";
    odg3.textContent = "c) Peruom, Bolivijom i Argentinom";
    odg4.textContent = "d) Tajlandom, Laosom i Vijetnamom";
    odg1.addEventListener("click", function () {
        odg1.style.background = "red";
        odg2.style.background = "green";
        odg3.style.background = "#222629";
        odg3.style.background = "#222629";
        text.textContent = "Republika Nikaragva je država u Srednjoj Americi. Graniči se sa Hondurasom na severu i Kostarikom na jugu. Na zapadu izlazi na Tihi okean, a na istoku na Karipsko more.";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "green";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Republika Nikaragva je država u Srednjoj Americi. Graniči se sa Hondurasom na severu i Kostarikom na jugu. Na zapadu izlazi na Tihi okean, a na istoku na Karipsko more.";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Republika Nikaragva je država u Srednjoj Americi. Graniči se sa Hondurasom na severu i Kostarikom na jugu. Na zapadu izlazi na Tihi okean, a na istoku na Karipsko more.";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        text.textContent = "Republika Nikaragva je država u Srednjoj Americi. Graniči se sa Hondurasom na severu i Kostarikom na jugu. Na zapadu izlazi na Tihi okean, a na istoku na Karipsko more.";
    })
}

function pitanje14() {
    pitanje.textContent = "Gde su se prvo počele koristiti papirne novčanice?:"
    odg1.textContent = "a) Indija";
    odg2.textContent = "b) Kina";
    odg3.textContent = "c) Egipat";
    odg4.textContent = "d) Portugal";
    odg1.addEventListener("click", function () {
        odg1.style.background = "red";
        odg3.style.background = "#222629";
        odg2.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Papirne novčanice su se prvi put pojavile u Kini u 7. veku, gde su u početku služile trgovcima kojima su papirne menice bile daleko praktičnije sredstvo plaćanja od dotada korišćenih i sve teže nosivih bakarnih kovanica. Kao službena valuta počele su da se koriste u 11. veku u Kini, a njihova upotreba među trgovcima u Evropi datira od 14. veka, da bi ih države počele koristiti u 17. veku.";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "green";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Papirne novčanice su se prvi put pojavile u Kini u 7. veku, gde su u početku služile trgovcima kojima su papirne menice bile daleko praktičnije sredstvo plaćanja od dotada korišćenih i sve teže nosivih bakarnih kovanica. Kao službena valuta počele su da se koriste u 11. veku u Kini, a njihova upotreba među trgovcima u Evropi datira od 14. veka, da bi ih države počele koristiti u 17. veku.";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Papirne novčanice su se prvi put pojavile u Kini u 7. veku, gde su u početku služile trgovcima kojima su papirne menice bile daleko praktičnije sredstvo plaćanja od dotada korišćenih i sve teže nosivih bakarnih kovanica. Kao službena valuta počele su da se koriste u 11. veku u Kini, a njihova upotreba među trgovcima u Evropi datira od 14. veka, da bi ih države počele koristiti u 17. veku.";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        text.textContent = "Papirne novčanice su se prvi put pojavile u Kini u 7. veku, gde su u početku služile trgovcima kojima su papirne menice bile daleko praktičnije sredstvo plaćanja od dotada korišćenih i sve teže nosivih bakarnih kovanica. Kao službena valuta počele su da se koriste u 11. veku u Kini, a njihova upotreba među trgovcima u Evropi datira od 14. veka, da bi ih države počele koristiti u 17. veku.";
    })
}

function pitanje15() {
    pitanje.textContent = "Na kom se kontinentu nalazi Gvajana?:"
    odg1.textContent = "a) Severna Amerika";
    odg2.textContent = "b) Južna Amerika";
    odg3.textContent = "c) Afrika";
    odg4.textContent = "d) Azija";
    odg1.addEventListener("click", function () {
        odg1.style.background = "red";
        odg3.style.background = "#222629";
        odg2.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Gvajana je država u Južnoj Americi, smeštena na severu kontinenta na obali Atlantskog okeana. Na zapadu se graniči sa Venezuelom, na jugu sa Brazilom i na istoku sa Surinamom.";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "green";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Gvajana je država u Južnoj Americi, smeštena na severu kontinenta na obali Atlantskog okeana. Na zapadu se graniči sa Venezuelom, na jugu sa Brazilom i na istoku sa Surinamom.";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Gvajana je država u Južnoj Americi, smeštena na severu kontinenta na obali Atlantskog okeana. Na zapadu se graniči sa Venezuelom, na jugu sa Brazilom i na istoku sa Surinamom.";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        text.textContent = "Gvajana je država u Južnoj Americi, smeštena na severu kontinenta na obali Atlantskog okeana. Na zapadu se graniči sa Venezuelom, na jugu sa Brazilom i na istoku sa Surinamom.";
    })
}

function pitanje16() {
    pitanje.textContent = "Epski roman “Rat i mir” napisao je:"
    odg1.textContent = "a) Lav Nikolajevič Tolstoj";
    odg2.textContent = "b) Fjodor Mihajlovič Dostojevski";
    odg3.textContent = "c) Johann Wolfgang von Goethe";
    odg4.textContent = "d) Sergej Aleksandrovič Jesenjin";
    odg1.addEventListener("click", function () {
        odg1.style.background = "green";
        odg3.style.background = "#222629";
        odg2.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Rat i mir je epski roman Lava Nikolajeviča Tolstoja objavljen između 1865. i 1869. Smatra se jednim od dva Tolstojeva remek-dela uz Anu Karenjinu pa je jedan od najvećih romana u istoriji književnosti.";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Rat i mir je epski roman Lava Nikolajeviča Tolstoja objavljen između 1865. i 1869. Smatra se jednim od dva Tolstojeva remek-dela uz Anu Karenjinu pa je jedan od najvećih romana u istoriji književnosti.";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg1.style.background = "green";
        odg2.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Rat i mir je epski roman Lava Nikolajeviča Tolstoja objavljen između 1865. i 1869. Smatra se jednim od dva Tolstojeva remek-dela uz Anu Karenjinu pa je jedan od najvećih romana u istoriji književnosti.";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "green";
        odg2.style.background = "#222629";
        text.textContent = "Rat i mir je epski roman Lava Nikolajeviča Tolstoja objavljen između 1865. i 1869. Smatra se jednim od dva Tolstojeva remek-dela uz Anu Karenjinu pa je jedan od najvećih romana u istoriji književnosti.";
    })
}

function pitanje17() {
    pitanje.textContent = "Koji je glavni grad Kolumbije?:"
    odg1.textContent = "a) Tijuana";
    odg2.textContent = "b) Bogota";
    odg3.textContent = "c) Medellin";
    odg4.textContent = "d) Managua";
    odg1.addEventListener("click", function () {
        odg1.style.background = "red";
        odg3.style.background = "#222629";
        odg2.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Bogota je glavni grad Kolumbije. Najveći je i najmnogoljudniji grad u državi sa 6 700 000 stanovnika.";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "green";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Bogota je glavni grad Kolumbije. Najveći je i najmnogoljudniji grad u državi sa 6 700 000 stanovnika.";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Bogota je glavni grad Kolumbije. Najveći je i najmnogoljudniji grad u državi sa 6 700 000 stanovnika.";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        text.textContent = "Bogota je glavni grad Kolumbije. Najveći je i najmnogoljudniji grad u državi sa 6 700 000 stanovnika.";
    })
}

function pitanje18() {
    pitanje.textContent = "U kojoj se državi nalazi najviše vulkana?:"
    odg1.textContent = "a) Indonezija";
    odg2.textContent = "b) Filipini";
    odg3.textContent = "c) Italija";
    odg4.textContent = "d) Japan";
    odg1.addEventListener("click", function () {
        odg1.style.background = "green";
        odg3.style.background = "#222629";
        odg2.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Zbog svog položaja između pacifičkih, evroazijskih i australijskih tektonskih ploča, Indonezija ima daleko najviše vulkana – oko 130 aktivnih i još mnogo ugašenih.";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Zbog svog položaja između pacifičkih, evroazijskih i australijskih tektonskih ploča, Indonezija ima daleko najviše vulkana – oko 130 aktivnih i još mnogo ugašenih.";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg1.style.background = "green";
        odg2.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Zbog svog položaja između pacifičkih, evroazijskih i australijskih tektonskih ploča, Indonezija ima daleko najviše vulkana – oko 130 aktivnih i još mnogo ugašenih.";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "green";
        odg2.style.background = "#222629";
        text.textContent = "Zbog svog položaja između pacifičkih, evroazijskih i australijskih tektonskih ploča, Indonezija ima daleko najviše vulkana – oko 130 aktivnih i još mnogo ugašenih.";
    })
}

function pitanje19() {
    pitanje.textContent = "Afrika nije prirodno stanište ove životinje:"
    odg1.textContent = "a) Tigar";
    odg2.textContent = "b) Kapski pavijan";
    odg3.textContent = "c) Gnu";
    odg4.textContent = "d) Leopard";
    odg1.addEventListener("click", function () {
        odg1.style.background = "green";
        odg3.style.background = "#222629";
        odg2.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Tigar živi u azijskim džunglama, u jugoistočnom Sibiru i jugoistočnoj Aziji. U Africi se mogu videti jedino u zoološkim vrtovima ili u zaštićenim savanama Afrike gde se najugroženiji južnokineski tigrovi pokušavaju razmnožiti a zatim vratiti u prirodno stanište.";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Tigar živi u azijskim džunglama, u jugoistočnom Sibiru i jugoistočnoj Aziji. U Africi se mogu videti jedino u zoološkim vrtovima ili u zaštićenim savanama Afrike gde se najugroženiji južnokineski tigrovi pokušavaju razmnožiti a zatim vratiti u prirodno stanište.";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg1.style.background = "green";
        odg2.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Tigar živi u azijskim džunglama, u jugoistočnom Sibiru i jugoistočnoj Aziji. U Africi se mogu videti jedino u zoološkim vrtovima ili u zaštićenim savanama Afrike gde se najugroženiji južnokineski tigrovi pokušavaju razmnožiti a zatim vratiti u prirodno stanište.";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "green";
        odg2.style.background = "#222629";
        text.textContent = "Tigar živi u azijskim džunglama, u jugoistočnom Sibiru i jugoistočnoj Aziji. U Africi se mogu videti jedino u zoološkim vrtovima ili u zaštićenim savanama Afrike gde se najugroženiji južnokineski tigrovi pokušavaju razmnožiti a zatim vratiti u prirodno stanište.";
    })
}

function pitanje20() {
    pitanje.textContent = "Koje je godine počeo Prvi svetski rat?:"
    odg1.textContent = "a) 1914.";
    odg2.textContent = "b) 1907.";
    odg3.textContent = "c) 1912.";
    odg4.textContent = "d) 1915.";
    odg1.addEventListener("click", function () {
        odg1.style.background = "green";
        odg3.style.background = "#222629";
        odg2.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Prvi svetski rat je bio globalni oružani sukob između dva saveza država (Antanta i Središnje sile) koji se odvijao na više kontinenata od 28. jula 1914. do 11. novembra 1918. godine.";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Prvi svetski rat je bio globalni oružani sukob između dva saveza država (Antanta i Središnje sile) koji se odvijao na više kontinenata od 28. jula 1914. do 11. novembra 1918. godine.";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg1.style.background = "green";
        odg2.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Prvi svetski rat je bio globalni oružani sukob između dva saveza država (Antanta i Središnje sile) koji se odvijao na više kontinenata od 28. jula 1914. do 11. novembra 1918. godine.";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "green";
        odg2.style.background = "#222629";
        text.textContent = "Prvi svetski rat je bio globalni oružani sukob između dva saveza država (Antanta i Središnje sile) koji se odvijao na više kontinenata od 28. jula 1914. do 11. novembra 1918. godine.";
    })
}

function pitanje21() {
    pitanje.textContent = "Koji latinski izraz znači veliki rad, i odnosi se na najbolje, najpopularnije, ili najpriznatije dostignuće autora, umetnika ili kompozitora?:"
    odg1.textContent = "a) Fama volat";
    odg2.textContent = "b) Magnum opus";
    odg3.textContent = "c) Tempori parce";
    odg4.textContent = "d) Labor omnia vincit";
    odg1.addEventListener("click", function () {
        odg1.style.background = "red";
        odg3.style.background = "#222629";
        odg2.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Magnum opus (negde i Opus magnum, plural magna opera), na latinskom jeziku znači veliki rad, i odnosi se na najbolje, najpopularnije, ili najpriznatije dostignuće autora, umetnika ili kompozitora, ili najčešće nešto što podrazumeva nečiji udeo ili doprinos velikom količinom materijala.";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "green";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Magnum opus (negde i Opus magnum, plural magna opera), na latinskom jeziku znači veliki rad, i odnosi se na najbolje, najpopularnije, ili najpriznatije dostignuće autora, umetnika ili kompozitora, ili najčešće nešto što podrazumeva nečiji udeo ili doprinos velikom količinom materijala.";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Magnum opus (negde i Opus magnum, plural magna opera), na latinskom jeziku znači veliki rad, i odnosi se na najbolje, najpopularnije, ili najpriznatije dostignuće autora, umetnika ili kompozitora, ili najčešće nešto što podrazumeva nečiji udeo ili doprinos velikom količinom materijala.";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        text.textContent = "Magnum opus (negde i Opus magnum, plural magna opera), na latinskom jeziku znači veliki rad, i odnosi se na najbolje, najpopularnije, ili najpriznatije dostignuće autora, umetnika ili kompozitora, ili najčešće nešto što podrazumeva nečiji udeo ili doprinos velikom količinom materijala.";
    })
}

function pitanje22() {
    pitanje.textContent = "Ko je napisao naučno-fantastični roman “Nineteen Eighty-Four (Hiljadu devetsto osamdeset četvrta, ili 1984)”:"
    odg1.textContent = "a) Benjamin Disraeli";
    odg2.textContent = "b) George Orwell";
    odg3.textContent = "c) Mark Twain";
    odg4.textContent = "d) Charles Dickens";
    odg1.addEventListener("click", function () {
        odg1.style.background = "red";
        odg3.style.background = "#222629";
        odg2.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Nineteen Eighty-Four (1984) je naučno-fantastični roman koji je 1949. godine objavio britanski književnik George Orwell. 1984 je postao ne samo najpoznatiji Orwellov roman, nego jedno od klasičnih dela distopije i jedan od najuticajnijih romana 20. veka. Često se smatra jednim od klasika moderne književnosti.";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "green";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Nineteen Eighty-Four (1984) je naučno-fantastični roman koji je 1949. godine objavio britanski književnik George Orwell. 1984 je postao ne samo najpoznatiji Orwellov roman, nego jedno od klasičnih dela distopije i jedan od najuticajnijih romana 20. veka. Često se smatra jednim od klasika moderne književnosti.";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Nineteen Eighty-Four (1984) je naučno-fantastični roman koji je 1949. godine objavio britanski književnik George Orwell. 1984 je postao ne samo najpoznatiji Orwellov roman, nego jedno od klasičnih dela distopije i jedan od najuticajnijih romana 20. veka. Često se smatra jednim od klasika moderne književnosti.";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        text.textContent = "Nineteen Eighty-Four (1984) je naučno-fantastični roman koji je 1949. godine objavio britanski književnik George Orwell. 1984 je postao ne samo najpoznatiji Orwellov roman, nego jedno od klasičnih dela distopije i jedan od najuticajnijih romana 20. veka. Često se smatra jednim od klasika moderne književnosti.";
    })
}

function pitanje23() {
    pitanje.textContent = "Ko je bio prvi čovek u Svemiru?:"
    odg1.textContent = "a) Neil Armstrong";
    odg2.textContent = "b) Buzz Aldrin";
    odg3.textContent = "c) Sergei Krikalev";
    odg4.textContent = "d) Yuri Gagarin";
    odg1.addEventListener("click", function () {
        odg1.style.background = "red";
        odg4.style.background = "green";
        odg2.style.background = "#222629";
        odg3.style.background = "#222629";
        text.textContent = "Yuri Gagarin je prvi čovek koji je otputovao u svemir 12. aprila 1961. godine u svemirskoj letelici Vostok I.";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "red";
        odg4.style.background = "green";
        odg1.style.background = "#222629";
        odg3.style.background = "#222629";
        text.textContent = "Yuri Gagarin je prvi čovek koji je otputovao u svemir 12. aprila 1961. godine u svemirskoj letelici Vostok I.";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg4.style.background = "green";
        odg1.style.background = "#222629";
        odg2.style.background = "#222629";
        text.textContent = "Yuri Gagarin je prvi čovek koji je otputovao u svemir 12. aprila 1961. godine u svemirskoj letelici Vostok I.";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "green";
        odg1.style.background = "#222629";
        odg2.style.background = "#222629";
        odg3.style.background = "#222629";
        text.textContent = "Yuri Gagarin je prvi čovek koji je otputovao u svemir 12. aprila 1961. godine u svemirskoj letelici Vostok I.";
    })
}

function pitanje24() {
    pitanje.textContent = "Koliko krugova Pakla ima u Danteovoj Božanstvenoj komediji?:"
    odg1.textContent = "a) Devet";
    odg2.textContent = "b) Dvanaest";
    odg3.textContent = "c) Sedam";
    odg4.textContent = "d) Trinaest";
    odg1.addEventListener("click", function () {
        odg1.style.background = "green";
        odg3.style.background = "#222629";
        odg2.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Božanstvena komedija je epski spev koji je napisao Dante Alighieri između 1304. i svoje smrti 1321. godine. Na površini, poema opisuje Danteova putovanja kroz pakao, čistilište i raj; ali na dubljem nivou ona predstavlja, alegorijski, putovanje duše prema Bogu. Pakao je alegorijska slika zemaljskog sveta i njegove pokvarenosti, a Dante je simbol grešnog čoveka. Kroz Pakao i Čistilište ga vodi Vergilije, koji je njegov uzor i simbol razuma. Pakao ima 9 krugova u obliku levka.";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Božanstvena komedija je epski spev koji je napisao Dante Alighieri između 1304. i svoje smrti 1321. godine. Na površini, poema opisuje Danteova putovanja kroz pakao, čistilište i raj; ali na dubljem nivou ona predstavlja, alegorijski, putovanje duše prema Bogu. Pakao je alegorijska slika zemaljskog sveta i njegove pokvarenosti, a Dante je simbol grešnog čoveka. Kroz Pakao i Čistilište ga vodi Vergilije, koji je njegov uzor i simbol razuma. Pakao ima 9 krugova u obliku levka.";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg1.style.background = "green";
        odg2.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Božanstvena komedija je epski spev koji je napisao Dante Alighieri između 1304. i svoje smrti 1321. godine. Na površini, poema opisuje Danteova putovanja kroz pakao, čistilište i raj; ali na dubljem nivou ona predstavlja, alegorijski, putovanje duše prema Bogu. Pakao je alegorijska slika zemaljskog sveta i njegove pokvarenosti, a Dante je simbol grešnog čoveka. Kroz Pakao i Čistilište ga vodi Vergilije, koji je njegov uzor i simbol razuma. Pakao ima 9 krugova u obliku levka.";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "green";
        odg2.style.background = "#222629";
        text.textContent = "Božanstvena komedija je epski spev koji je napisao Dante Alighieri između 1304. i svoje smrti 1321. godine. Na površini, poema opisuje Danteova putovanja kroz pakao, čistilište i raj; ali na dubljem nivou ona predstavlja, alegorijski, putovanje duše prema Bogu. Pakao je alegorijska slika zemaljskog sveta i njegove pokvarenosti, a Dante je simbol grešnog čoveka. Kroz Pakao i Čistilište ga vodi Vergilije, koji je njegov uzor i simbol razuma. Pakao ima 9 krugova u obliku levka.";
    })
}

function pitanje25() {
    pitanje.textContent = "Koja je reprezentacija pobedila na Svetskom prvenstvu u fudbalu 2010. godine?:"
    odg1.textContent = "a) Španija";
    odg2.textContent = "b) Engleska";
    odg3.textContent = "c) Nizozemska";
    odg4.textContent = "d) Portugal";
    odg1.addEventListener("click", function () {
        odg1.style.background = "green";
        odg3.style.background = "#222629";
        odg2.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Svetsko prvenstvo u fudbalu – Južna Afrika 2010. je održano u Južnoafričkoj Republici od 11. juna do 11. jula 2010. Titulu je osvojila reprezentacija Španije, koja je rezultatom 1:0, nakon produžetaka, savladala reprezentaciju Nizozemske. Ovim je Španija po prvi put postala svetski prvak.";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Svetsko prvenstvo u fudbalu – Južna Afrika 2010. je održano u Južnoafričkoj Republici od 11. juna do 11. jula 2010. Titulu je osvojila reprezentacija Španije, koja je rezultatom 1:0, nakon produžetaka, savladala reprezentaciju Nizozemske. Ovim je Španija po prvi put postala svetski prvak.";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg1.style.background = "green";
        odg2.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Svetsko prvenstvo u fudbalu – Južna Afrika 2010. je održano u Južnoafričkoj Republici od 11. juna do 11. jula 2010. Titulu je osvojila reprezentacija Španije, koja je rezultatom 1:0, nakon produžetaka, savladala reprezentaciju Nizozemske. Ovim je Španija po prvi put postala svetski prvak.";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "green";
        odg2.style.background = "#222629";
        text.textContent = "Svetsko prvenstvo u fudbalu – Južna Afrika 2010. je održano u Južnoafričkoj Republici od 11. juna do 11. jula 2010. Titulu je osvojila reprezentacija Španije, koja je rezultatom 1:0, nakon produžetaka, savladala reprezentaciju Nizozemske. Ovim je Španija po prvi put postala svetski prvak.";
    })
}

function pitanje26() {
    pitanje.textContent = "Kako se zvao prvi Zemljin veštački satelit koji je bio lansiran iz SSSRa 1957. godine?:"
    odg1.textContent = "a) Vostok";
    odg2.textContent = "b) Sputnjik I";
    odg3.textContent = "c) Lajka";
    odg4.textContent = "d) Apollo 11";
    odg1.addEventListener("click", function () {
        odg1.style.background = "red";
        odg3.style.background = "#222629";
        odg2.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Sputnjik I je prvi veštački satelit lansiran u svemir od strane SSSR u oktobru 1957. godine. Njegova pojava je iznenadila zapadne zemlje, i dovela do svojevrsne trke u razvoju veštačkih satelita i drugih kosmičkih letelica između SAD i SSSR.";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "green";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Sputnjik I je prvi veštački satelit lansiran u svemir od strane SSSR u oktobru 1957. godine. Njegova pojava je iznenadila zapadne zemlje, i dovela do svojevrsne trke u razvoju veštačkih satelita i drugih kosmičkih letelica između SAD i SSSR.";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Sputnjik I je prvi veštački satelit lansiran u svemir od strane SSSR u oktobru 1957. godine. Njegova pojava je iznenadila zapadne zemlje, i dovela do svojevrsne trke u razvoju veštačkih satelita i drugih kosmičkih letelica između SAD i SSSR.";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        text.textContent = "Sputnjik I je prvi veštački satelit lansiran u svemir od strane SSSR u oktobru 1957. godine. Njegova pojava je iznenadila zapadne zemlje, i dovela do svojevrsne trke u razvoju veštačkih satelita i drugih kosmičkih letelica između SAD i SSSR.";
    })
}

function pitanje27() {
    pitanje.textContent = "Marie Antoinette (Marija Antoaneta) je bila:"
    odg1.textContent = "a) Engleska kraljica";
    odg2.textContent = "b) Francuska kraljica";
    odg3.textContent = "c) Operska pjevačica";
    odg4.textContent = "d) Poznati poslastičar";
    odg1.addEventListener("click", function () {
        odg1.style.background = "red";
        odg3.style.background = "#222629";
        odg2.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Marija Antoaneta (rođena u Beču) je bila francuska kraljica, supruga Luja XVI. Ostala je upamćena kao zadnja, te zbog svog porekla i običaja, najomraženija kraljica apsolutističke Francuske. Poznatom ju je učinilo rasipništvo i skandali koje je uzrokovala, često iskrivljeni i preterano loše opisivani, ali i smrt; pogubljena je giljotinom na vrhuncu Francuske revolucije.";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "green";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Marija Antoaneta (rođena u Beču) je bila francuska kraljica, supruga Luja XVI. Ostala je upamćena kao zadnja, te zbog svog porekla i običaja, najomraženija kraljica apsolutističke Francuske. Poznatom ju je učinilo rasipništvo i skandali koje je uzrokovala, često iskrivljeni i preterano loše opisivani, ali i smrt; pogubljena je giljotinom na vrhuncu Francuske revolucije.";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Marija Antoaneta (rođena u Beču) je bila francuska kraljica, supruga Luja XVI. Ostala je upamćena kao zadnja, te zbog svog porekla i običaja, najomraženija kraljica apsolutističke Francuske. Poznatom ju je učinilo rasipništvo i skandali koje je uzrokovala, često iskrivljeni i preterano loše opisivani, ali i smrt; pogubljena je giljotinom na vrhuncu Francuske revolucije.";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        text.textContent = "Marija Antoaneta (rođena u Beču) je bila francuska kraljica, supruga Luja XVI. Ostala je upamćena kao zadnja, te zbog svog porekla i običaja, najomraženija kraljica apsolutističke Francuske. Poznatom ju je učinilo rasipništvo i skandali koje je uzrokovala, često iskrivljeni i preterano loše opisivani, ali i smrt; pogubljena je giljotinom na vrhuncu Francuske revolucije.";
    })
}

function pitanje28() {
    pitanje.textContent = "U kom klubu je David Beckham završio svoju karijeru?:"
    odg1.textContent = "a) Los Angeles Galaxy";
    odg2.textContent = "b) Manchester United";
    odg3.textContent = "c) Paris Saint-Germain";
    odg4.textContent = "d) Real Madrid";
    odg1.addEventListener("click", function () {
        odg1.style.background = "red";
        odg3.style.background = "green";
        odg2.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "David Beckham je umirovljeni engleski fudbaler i jedan od najpoznatijih svetskih sportista. Zadnji klub za koji je igrao je Paris Saint-Germain. Beckham je u posljednjoj utakmici prvenstva igrao je za PSG do 83. minute, kada ga je Ancelotti povukao s terena kako bi dobio oproštaj kakav zaslužuje.";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "red";
        odg3.style.background = "green";
        odg1.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "David Beckham je umirovljeni engleski fudbaler i jedan od najpoznatijih svetskih sportista. Zadnji klub za koji je igrao je Paris Saint-Germain. Beckham je u posljednjoj utakmici prvenstva igrao je za PSG do 83. minute, kada ga je Ancelotti povukao s terena kako bi dobio oproštaj kakav zaslužuje.";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "green";
        odg1.style.background = "#222629";
        odg2.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "David Beckham je umirovljeni engleski fudbaler i jedan od najpoznatijih svetskih sportista. Zadnji klub za koji je igrao je Paris Saint-Germain. Beckham je u posljednjoj utakmici prvenstva igrao je za PSG do 83. minute, kada ga je Ancelotti povukao s terena kako bi dobio oproštaj kakav zaslužuje.";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg3.style.background = "green";
        odg1.style.background = "#222629";
        odg2.style.background = "#222629";
        text.textContent = "David Beckham je umirovljeni engleski fudbaler i jedan od najpoznatijih svetskih sportista. Zadnji klub za koji je igrao je Paris Saint-Germain. Beckham je u posljednjoj utakmici prvenstva igrao je za PSG do 83. minute, kada ga je Ancelotti povukao s terena kako bi dobio oproštaj kakav zaslužuje.";
    })
}

function pitanje29() {
    pitanje.textContent = "Machu Picchu je sveti grad:"
    odg1.textContent = "a) Maya";
    odg2.textContent = "b) Inka";
    odg3.textContent = "c) Azteca";
    odg4.textContent = "d) Tolteca";
    odg1.addEventListener("click", function () {
        odg1.style.background = "red";
        odg3.style.background = "#222629";
        odg2.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Machu Picchu je sveti grad Inka (“Izgubljeni grad Inka”) smešten na najvišem delu istočnih Andi u Peruu. Machu Picchu je 2007. godine izabran kao jedno od Sedam novih svetskih čuda.";
    })
    odg2.addEventListener("click", function () {
        odg2.style.background = "green";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg4.style.background = "#222629";
        text.textContent = "Machu Picchu je sveti grad Inka (“Izgubljeni grad Inka”) smešten na najvišem delu istočnih Andi u Peruu. Machu Picchu je 2007. godine izabran kao jedno od Sedam novih svetskih čuda.";
    })
    odg3.addEventListener("click", function () {
        odg3.style.background = "red";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        odg4.style.background = "#222629";
        text.textContent = "Machu Picchu je sveti grad Inka (“Izgubljeni grad Inka”) smešten na najvišem delu istočnih Andi u Peruu. Machu Picchu je 2007. godine izabran kao jedno od Sedam novih svetskih čuda.";
    })
    odg4.addEventListener("click", function () {
        odg4.style.background = "red";
        odg3.style.background = "#222629";
        odg1.style.background = "#222629";
        odg2.style.background = "green";
        text.textContent = "Machu Picchu je sveti grad Inka (“Izgubljeni grad Inka”) smešten na najvišem delu istočnih Andi u Peruu. Machu Picchu je 2007. godine izabran kao jedno od Sedam novih svetskih čuda.";
    })
}

dugme.addEventListener("click", function () {
    text.textContent = "";
    odg1.style.background = "#222629";
    odg2.style.background = "#222629";
    odg3.style.background = "#222629";
    odg4.style.background = "#222629";
    let random = Math.floor(Math.random() * 30);
    random;
    if (random == 0) {
        pitanje1();
    } else if (random == 1) {
        pitanje2();
    } else if (random == 2) {
        pitanje3();
    } else if (random == 3) {
        pitanje4();
    } else if (random == 4) {
        pitanje5();
    } else if (random == 5) {
        pitanje6();
    } else if (random == 6) {
        pitanje7();
    } else if (random == 7) {
        pitanje8();
    } else if (random == 8) {
        pitanje9();
    } else if (random == 9) {
        pitanje10();
    } else if (random == 10) {
        pitanje11();
    } else if (random == 11) {
        pitanje12();
    } else if (random == 12) {
        pitanje13();
    } else if (random == 13) {
        pitanje14();
    } else if (random == 14) {
        pitanje15();
    } else if (random == 15) {
        pitanje16();
    } else if (random == 16) {
        pitanje17();
    } else if (random == 17) {
        pitanje18();
    } else if (random == 18) {
        pitanje19();
    } else if (random == 19) {
        pitanje20();
    } else if (random == 20) {
        pitanje21();
    } else if (random == 21) {
        pitanje22();
    } else if (random == 22) {
        pitanje23();
    } else if (random == 23) {
        pitanje24();
    } else if (random == 24) {
        pitanje25();
    } else if (random == 25) {
        pitanje26();
    } else if (random == 26) {
        pitanje27();
    } else if (random == 27) {
        pitanje28();
    } else if (random == 28) {
        pitanje29();
    } else {
        pitanje30();
    }
})