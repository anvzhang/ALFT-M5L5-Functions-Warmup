/*Use loops to log all the mountain names and their elevations to the webpage.

The output should look like this:

Mount Everest: 29029
Qogir: 28151
Kanchenjunga: 28169
etc...
*/

let mountains = ["Mount Everest" , "Qogir" , "Kangchenjunga" , "Lhotse" , "Makalu" , "Cho Oyu" , "Dhaulagiri I" , "Manaslu" , "Nanga Parbat" , "Annapurna I" , "Gasherbrum I" , "Broad Peak" , "Gasherbrum II / K4" , "Shishapangma / Gosainthān" , "Gyachung Kang" , "Annapurna II" , "Gasherbrum IV / K3" , "Himalchuli" , "Distaghil Sar" , "Ngadi Chuli" , "Khunyang Chhish" , "Masherbrum / K1" , "Nanda Devi" , "Chomo Lonzo" , "Batura Sar" , "Kanjut Sar" , "Rakaposhi" , "Namcha Barwa" , "Kamet" , "Dhaulagiri II" , "Saltoro Kangri / K10" , "Kumbhakarna / Jannu" , "Tirich Mir" , "Gurla Mandhata" , "Saser Kangri I / K22" , "Chogolisa" , "Kongur Tagh" , "Shispare" , "Trivor" , "Gangkhar Puensum" , "Gongga Shan" , "Annapurna III" , "Skyang Kangri" , "Changtse" , "Kula Kangri" , "Kongur Tiube" , "Mamostong Kangri" , "Saser Kangri II E" , "Muztagh Ata" , "Ismoil Somoni Peak" , "Saser Kangri III" , "Noshaq" , "Pumari Chhish" , "Passu Sar" , "Yukshin Gardan Sar" , "Teram Kangri I" , "Jongsong Peak" , "Malubiting" , "Gangapurna" , "Jengish Chokusu" , "K12" , "Yangra" , "Sia Kangri" , "Momhil Sar" , "Kabru N" , "Skil Brum" , "Haramosh Peak" , "Istor-o-Nal" , "Ghent Kangri" , "Ultar" , "Rimo I" , "Churen Himal" , "Teram Kangri III" , "Sherpi Kangri" , "Labuche Kang" , "Kirat Chuli" , "Saraghrar" , "Jomolhari / Chomo Lhari" , "Chamlang" , "Chongtar" , "Baltoro Kangri" , "Siguang Ri" , "The Crown / Huang Guan" , "Gyala Peri" , "Porong Ri" , "Baintha Brakk / The Ogre" , "Yutmaru Sar" , "Baltistan Peak / K6" , "Kangpenqing" , "Muztagh Tower" , "Mana Peak" , "Diran" , "Labuche Kang III / East" , "Putha Hiunchuli" , "Apsarasas Kangri" , "Mukut Parbat" , "Rimo III" , "Langtang Lirung" , "Karjiang" , "Annapurna Dakshin" , "Khartaphu" , "Tongshanjiabu[14]" , "Malangutti Sar" , "Noijin Kangsang" , "Langtang Ri" , "Kangphu Kang" , "Singhi Kangri" , "Lupghar Sar"];

let elevations = [29029 , 28251 , 28169 , 27940 , 27838 , 26864 , 26795 , 26781 , 26660 , 26545 , 26509 , 26414 , 26362 , 26335 , 26089 , 26040 , 26024 , 25896 , 25866 , 25823 , 25666 , 25659 , 25643 , 25604 , 25574 , 25558 , 25551 , 25531 , 25446 , 25430 , 25400 , 25299 , 25289 , 25243 , 25171 , 25148 , 25095 , 24970 , 24859 , 24836 , 24790 , 24787 , 24754 , 24747 , 24731 , 24705 , 24659 , 24649 , 24636 , 24590 , 24590 , 24580 , 24580 , 24528 , 24505 , 24482 , 24482 , 24469 , 24459 , 24406 , 24370 , 24350 , 24350 , 24324 , 24318 , 24311 , 24308 , 24288 , 24281 , 24239 , 24229 , 24229 , 24219 , 24213 , 24170 , 24153 , 24111 , 24035 , 24019 , 23999 , 23990 , 23980 , 23934 , 23930 , 23924 , 23901 , 23894 , 23891 , 23888 , 23871 , 23858 , 23839 , 23786 , 23773 , 23770 , 23760 , 23730 , 23711 , 23691 , 23684 , 23665 , 23645 , 23645 , 23642 , 23638 , 23635 , 23629 , 23622];

for (let i = 0; i < mountains.length; i++) {
  console.log(`${mountains[i]}: ${elevations[i]}`);
}