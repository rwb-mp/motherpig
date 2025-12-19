document.getElementById("findButton").addEventListener("click", () => {
  let searchTerm = document.getElementById("inputBoxValue").value;
  if (searchTerm==='Ari'||searchTerm==='Ath'||searchTerm==='Atl'||searchTerm==='Bal'||searchTerm==='Bos'||searchTerm ==='CHC'||searchTerm==='CHW'||searchTerm==='Cin'||searchTerm==='Cle'||searchTerm==='Col'||searchTerm==='Det'||searchTerm==='Hou'||searchTerm==='KC'||searchTerm==='LAA'||searchTerm==='LAD'||searchTerm==='Mia'||searchTerm==='Mil'||searchTerm ==='Min'||searchTerm==='NYM'||searchTerm==='NYY'||searchTerm==='Phi'||searchTerm==='Pit'||searchTerm==='SD'||searchTerm==='Sea'||searchTerm==='SF'||searchTerm ==='SL'||searchTerm ==='TB'||searchTerm ==='Tor'||searchTerm==='Was') {
    let text = document.getElementById("search").innerHTML;
    let re = new RegExp(searchTerm,"g"); // search for all instances
    let newText = text.replace(re, `<mark>${searchTerm}</mark>`);
    document.getElementById("search").innerHTML = newText;
  } else {
      unsearchForTeam(inputBoxValue.value);
    }
  })

  const unsearchForTeam = (inputBoxValue) => {
    let searchTerm = document.getElementById("inputBoxValue").value;
    let text = document.getElementById("search").innerHTML;
    let re = new RegExp(`<mark>${searchTerm}</mark>`,"g"); // search for all instances
    let newText = text.replace(re, `${searchTerm}`);
    document.getElementById("search").innerHTML = newText;
    document.getElementById("inputBoxValue").value = '';
  }
/*  I HID THE JAVASCRIPT FOR THE COMMENT BUTTON HERE
  document.getElementById("leave-a-comment").addEventListener("click", () => {
    window.open("commentbox.html",'_blank').focus();
  })
*/
/*
  document.getElementById("locked-on-rangers").addEventListener("click", () => {
    window.open("https://lockedonpodcasts.com/podcasts/locked-on-texas-rangers/",'_blank').focus();
  })
*/
  document.getElementById("locked-on-rangers").addEventListener("click", () => {
    window.open("https://www.youtube.com/playlist?list=PLYwDB94YNfvIdb5u2cZG90CaGQzlIT7u7",'_blank').focus();
  })
/*
  document.getElementById("dlls").addEventListener("click", () => {
    window.open("https://alldlls.com/rangers/podcast/",'_blank').focus();
  })
*/
document.getElementById("dlls").addEventListener("click", () => {
  window.open("https://www.youtube.com/playlist?list=PLgRo7pt7HJBgDCTO4aHCB687zRuPgrvGT",'_blank').focus();
})
  const calendar = [
    {
    id: '1',
    month: 'mar',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '2',
    month: 'mar',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '3',
    month: 'mar',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '4',
    month: 'mar',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '5',
    month: 'mar',
    class: 'mar26',
    day: 'Thu',
    date: '26',
    opp: 'at Phi <img src="logos/phillies.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '2:05',
    score: '',
    recap: '<a href = "journal.html#mar26" target = "_blank">Recap</a>'
    },
    {
    id: '6',
    month: 'mar',
    class: 'mar27',
    day: 'Fri',
    date: '27',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '7',
    month: 'mar',
    class: 'mar28',
    day: 'Sat',
    date: '28',
    opp: 'at Phi <img src="logos/phillies.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '3:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '8',
    month: 'mar',
    class: 'mar29',
    day: 'Sun',
    date: '29',
    opp: 'at Phi <img src="logos/phillies.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '12:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '9',
    month: 'mar',
    class: 'mar30',
    day: 'Mon',
    date: '30',
    opp: 'at Bal <img src="logos/orioles.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '5:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '10',
    month: 'mar',
    class: 'mar31',
    day: 'Tue',
    date: '31',
    opp: 'at Bal <img src="logos/orioles.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '5:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '11',
    month: 'mar',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '12',
    month: 'mar',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '13',
    month: 'mar',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '14',
    month: 'mar',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '15',
    month: 'apr',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '16',
    month: 'apr',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '17',
    month: 'apr',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '18',
    month: 'apr',
    class: 'apr1',
    day: 'Wed',
    date: '1',
    opp: 'at Bal <img src="logos/orioles.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '11:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '19',
    month: 'apr',
    class: 'apr2',
    day: 'Thu',
    date: '2',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '20',
    month: 'apr',
    class: 'apr3',
    day: 'Fri',
    date: '3',
    opp: 'Cin <img src="logos/reds.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '3:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '21',
    month: 'apr',
    class: 'apr4',
    day: 'Sat',
    date: '4',
    opp: 'Cin <img src="logos/reds.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '22',
    month: 'apr',
    class: 'apr5',
    day: 'Sun',
    date: '5',
    opp: 'Cin <img src="logos/reds.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '23',
    month: 'apr',
    class: 'apr6',
    day: 'Mon',
    date: '6',
    opp: 'Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '24',
    month: 'apr',
    class: 'apr7',
    day: 'Tue',
    date: '7',
    opp: 'Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '25',
    month: 'apr',
    class: 'apr8',
    day: 'Wed',
    date: '8',
    opp: 'Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '26',
    month: 'apr',
    class: 'apr9',
    day: 'Thu',
    date: '9',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '27',
    month: 'apr',
    class: 'apr10',
    day: 'Fri',
    date: '10',
    opp: 'at LAD <img src="logos/dodgers.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '9:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '28',
    month: 'apr',
    class: 'apr11',
    day: 'Sat',
    date: '11',
    opp: 'at LAD <img src="logos/dodgers.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '8:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '29',
    month: 'apr',
    class: 'apr12',
    day: 'Sun',
    date: '12',
    opp: 'at LAD <img src="logos/dodgers.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '3:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '30',
    month: 'apr',
    class: 'apr13',
    day: 'Mon',
    date: '13',
    opp: 'at Ath <img src="logos/athletics.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '8:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '31',
    month: 'apr',
    class: 'apr14',
    day: 'Tue',
    date: '14',
    opp: 'at Ath <img src="logos/athletics.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '8:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '32',
    month: 'apr',
    class: 'apr15',
    day: 'Wed',
    date: '15',
    opp: 'at Ath <img src="logos/athletics.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '8:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '33',
    month: 'apr',
    class: 'apr16',
    day: 'Thu',
    date: '16',
    opp: 'at Ath <img src="logos/athletics.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '2:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '34',
    month: 'apr',
    class: 'apr17',
    day: 'Fri',
    date: '17',
    opp: 'at Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '8:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '35',
    month: 'apr',
    class: 'apr18',
    day: 'Sat',
    date: '18',
    opp: 'at Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:15',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '36',
    month: 'apr',
    class: 'apr19',
    day: 'Sun',
    date: '19',
    opp: 'at Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '3:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '37',
    month: 'apr',
    class: 'apr20',
    day: 'Mon',
    date: '20',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '38',
    month: 'apr',
    class: 'apr21',
    day: 'Tue',
    date: '21',
    opp: 'Pit <img src="logos/pirates.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '39',
    month: 'apr',
    class: 'apr22',
    day: 'Wed',
    date: '22',
    opp: 'Pit <img src="logos/pirates.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '40',
    month: 'apr',
    class: 'apr23',
    day: 'Thu',
    date: '23',
    opp: 'Pit <img src="logos/pirates.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '41',
    month: 'apr',
    class: 'apr24',
    day: 'Fri',
    date: '24',
    opp: 'Ath <img src="logos/athletics.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '42',
    month: 'apr',
    class: 'apr25',
    day: 'Sat',
    date: '25',
    opp: 'Ath <img src="logos/athletics.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '43',
    month: 'apr',
    class: 'apr26',
    day: 'Sun',
    date: '26',
    opp: 'Ath <img src="logos/athletics.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '44',
    month: 'apr',
    class: 'apr27',
    day: 'Mon',
    date: '27',
    opp: 'NYY <img src="logos/yankees.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '45',
    month: 'apr',
    class: 'apr28',
    day: 'Tue',
    date: '28',
    opp: 'NYY <img src="logos/yankees.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '46',
    month: 'apr',
    class: 'apr29',
    day: 'Wed',
    date: '29',
    opp: 'NYY <img src="logos/yankees.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '47',
    month: 'apr',
    class: 'apr30',
    day: 'Thu',
    date: '30',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '48',
    month: 'apr',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '49',
    month: 'apr',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '50',
    month: 'may',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '51',
    month: 'may',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '52',
    month: 'may',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '53',
    month: 'may',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '54',
    month: 'may',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '55',
    month: 'may',
    class: 'may1',
    day: 'Fri',
    date: '1',
    opp: 'at Det <img src="logos/tigers.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '5:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '56',
    month: 'may',
    class: 'may2',
    day: 'Sat',
    date: '2',
    opp: 'at Det <img src="logos/tigers.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:15',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '57',
    month: 'may',
    class: 'may3',
    day: 'Sun',
    date: '3',
    opp: 'at Det <img src="logos/tigers.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '12:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '58',
    month: 'may',
    class: 'may4',
    day: 'Mon',
    date: '4',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '59',
    month: 'may',
    class: 'may5',
    day: 'Tue',
    date: '5',
    opp: 'at NYY <img src="logos/yankees.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '60',
    month: 'may',
    class: 'may6',
    day: 'Wed',
    date: '6',
    opp: 'at NYY <img src="logos/yankees.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '61',
    month: 'may',
    class: 'may7',
    day: 'Thu',
    date: '7',
    opp: 'at NYY <img src="logos/yankees.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '11:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '62',
    month: 'may',
    class: 'may8',
    day: 'Fri',
    date: '8',
    opp: 'CHC <img src="logos/cubs.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '63',
    month: 'may',
    class: 'may9',
    day: 'Sat',
    date: '9',
    opp: 'CHC <img src="logos/cubs.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '64',
    month: 'may',
    class: 'may10',
    day: 'Sun',
    date: '10',
    opp: 'CHC <img src="logos/cubs.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '65',
    month: 'may',
    class: 'may11',
    day: 'Mon',
    date: '11',
    opp: 'Ari <img src="logos/diamondbacks.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '66',
    month: 'may',
    class: 'may12',
    day: 'Tue',
    date: '12',
    opp: 'Ari <img src="logos/diamondbacks.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '67',
    month: 'may',
    class: 'may13',
    day: 'Wed',
    date: '13',
    opp: 'Ari <img src="logos/diamondbacks.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '68',
    month: 'may',
    class: 'may14',
    day: 'Thu',
    date: '14',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '69',
    month: 'may',
    class: 'may15',
    day: 'Fri',
    date: '15',
    opp: 'at Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '70',
    month: 'may',
    class: 'may16',
    day: 'Sat',
    date: '16',
    opp: 'at Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '71',
    month: 'may',
    class: 'may17',
    day: 'Sun',
    date: '17',
    opp: 'at Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '72',
    month: 'may',
    class: 'may18',
    day: 'Mon',
    date: '18',
    opp: 'at Col <img src="logos/rockies.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '73',
    month: 'may',
    class: 'may19',
    day: 'Tue',
    date: '19',
    opp: 'at Col <img src="logos/rockies.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '74',
    month: 'may',
    class: 'may20',
    day: 'Wed',
    date: '20',
    opp: 'at Col <img src="logos/rockies.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '2:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '75',
    month: 'may',
    class: 'may21',
    day: 'Thu',
    date: '21',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '76',
    month: 'may',
    class: 'may22',
    day: 'Fri',
    date: '22',
    opp: 'at LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '8:38',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '77',
    month: 'may',
    class: 'may23',
    day: 'Sat',
    date: '23',
    opp: 'at LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '9:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '78',
    month: 'may',
    class: 'may24',
    day: 'Sun',
    date: '24',
    opp: 'at LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '3:07',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '79',
    month: 'may',
    class: 'may25',
    day: 'Mon',
    date: '25',
    opp: 'Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '80',
    month: 'may',
    class: 'may26',
    day: 'Tue',
    date: '26',
    opp: 'Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '81',
    month: 'may',
    class: 'may27',
    day: 'Wed',
    date: '27',
    opp: 'Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '82',
    month: 'may',
    class: 'may28',
    day: 'Thu',
    date: '28',
    opp: 'Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '83',
    month: 'may',
    class: 'may29',
    day: 'Fri',
    date: '29',
    opp: 'KC <img src="logos/royals.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '84',
    month: 'may',
    class: 'may30',
    day: 'Sat',
    date: '30',
    opp: 'KC <img src="logos/royals.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '3:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '85',
    month: 'may',
    class: 'may31',
    day: 'Sun',
    date: '31',
    opp: 'KC <img src="logos/royals.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '86',
    month: 'may',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '87',
    month: 'may',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '88',
    month: 'may',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '89',
    month: 'may',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '90',
    month: 'may',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '91',
    month: 'may',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '92',
    month: 'jun',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '93',
    month: 'jun',
    class: 'jun1',
    day: 'Mon',
    date: '1',
    opp: 'at SL <img src="logos/cardinals.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:45',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '94',
    month: 'jun',
    class: 'jun2',
    day: 'Tue',
    date: '2',
    opp: 'at SL <img src="logos/cardinals.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:45',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '95',
    month: 'jun',
    class: 'jun3',
    day: 'Wed',
    date: '3',
    opp: 'at SL <img src="logos/cardinals.gif" width="20px" height="20px" style="vertical-align:bottom"> ',
    time: '6:45',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '96',
    month: 'jun',
    class: 'jun4',
    day: 'Thu',
    date: '4',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '97',
    month: 'jun',
    class: 'jun5',
    day: 'Fri',
    date: '5',
    opp: 'Cle <img src="logos/guardians.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '98',
    month: 'jun',
    class: 'jun6',
    day: 'Sat',
    date: '6',
    opp: 'Cle <img src="logos/guardians.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '99',
    month: 'jun',
    class: 'jun7',
    day: 'Sun',
    date: '7',
    opp: 'Cle <img src="logos/guardians.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '100',
    month: 'jun',
    class: 'jun8',
    day: 'Mon',
    date: '8',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '101',
    month: 'jun',
    class: 'jun9',
    day: 'Tue',
    date: '9',
    opp: 'at KC <img src="logos/royals.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '102',
    month: 'jun',
    class: 'jun10',
    day: 'Wed',
    date: '10',
    opp: 'at KC <img src="logos/royals.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '103',
    month: 'jun',
    class: 'jun11',
    day: 'Thu',
    date: '11',
    opp: 'at KC <img src="logos/royals.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '104',
    month: 'jun',
    class: 'jun12',
    day: 'Fri',
    date: '12',
    opp: 'at Bos <img src="logos/red-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '105',
    month: 'jun',
    class: 'jun13',
    day: 'Sat',
    date: '13',
    opp: 'at Bos <img src="logos/red-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '3:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '106',
    month: 'jun',
    class: 'jun14',
    day: 'Sun',
    date: '14',
    opp: 'at Bos <img src="logos/red-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '12:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '107',
    month: 'jun',
    class: 'jun15',
    day: 'Mon',
    date: '15',
    opp: 'Min <img src="logos/twins.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '108',
    month: 'jun',
    class: 'jun16',
    day: 'Tue',
    date: '16',
    opp: 'Min <img src="logos/twins.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '109',
    month: 'jun',
    class: 'jun17',
    day: 'Wed',
    date: '17',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '110',
    month: 'jun',
    class: 'jun18',
    day: 'Thu',
    date: '18',
    opp: 'Min <img src="logos/twins.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '12:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '111',
    month: 'jun',
    class: 'jun19',
    day: 'Fri',
    date: '19',
    opp: 'SD <img src="logos/padres.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '112',
    month: 'jun',
    class: 'jun20',
    day: 'Sat',
    date: '20',
    opp: 'SD <img src="logos/padres.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '3:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '113',
    month: 'jun',
    class: 'jun21',
    day: 'Sun',
    date: '21',
    opp: 'SD <img src="logos/padres.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '114',
    month: 'jun',
    class: 'jun22',
    day: 'Mon',
    date: '22',
    opp: 'at Mia <img src="logos/marlins.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '5:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '115',
    month: 'jun',
    class: 'jun23',
    day: 'Tue',
    date: '23',
    opp: 'at Mia <img src="logos/marlins.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '5:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '116',
    month: 'jun',
    class: 'jun24',
    day: 'Wed',
    date: '24',
    opp: 'at Mia <img src="logos/marlins.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '11:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '117',
    month: 'jun',
    class: 'jun25',
    day: 'Thu',
    date: '25',
    opp: 'at Tor <img src="logos/blue-jays.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:07',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '118',
    month: 'jun',
    class: 'jun26',
    day: 'Fri',
    date: '26',
    opp: 'at Tor <img src="logos/blue-jays.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:07',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '119',
    month: 'jun',
    class: 'jun27',
    day: 'Sat',
    date: '27',
    opp: 'at Tor <img src="logos/blue-jays.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '2:07',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '120',
    month: 'jun',
    class: 'jun28',
    day: 'Sun',
    date: '28',
    opp: 'at Tor <img src="logos/blue-jays.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '12:37',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '121',
    month: 'jun',
    class: 'jun29',
    day: 'Mon',
    date: '29',
    opp: 'at Cle <img src="logos/guardians.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '122',
    month: 'jun',
    class: 'jun30',
    day: 'Tue',
    date: '30',
    opp: 'at Cle <img src="logos/guardians.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '123',
    month: 'jun',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '124',
    month: 'jun',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '125',
    month: 'jun',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '126',
    month: 'jun',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '127',
    month: 'jul',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '128',
    month: 'jul',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '129',
    month: 'jul',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '130',
    month: 'jul',
    class: 'jul1',
    day: 'Wed',
    date: '1',
    opp: 'at Cle <img src="logos/guardians.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '131',
    month: 'jul',
    class: 'jul2',
    day: 'Thu',
    date: '2',
    opp: 'Det <img src="logos/tigers.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '132',
    month: 'jul',
    class: 'jul3',
    day: 'Fri',
    date: '3',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '133',
    month: 'jul',
    class: 'jul4',
    day: 'Sat',
    date: '4',
    opp: 'Det <img src="logos/tigers.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '3:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '134',
    month: 'jul',
    class: 'jul5',
    day: 'Sun',
    date: '5',
    opp: 'Det <img src="logos/tigers.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '135',
    month: 'jul',
    class: 'jul6',
    day: 'Mon',
    date: '6',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '136',
    month: 'jul',
    class: 'jul7',
    day: 'Tue',
    date: '7',
    opp: 'LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '137',
    month: 'jul',
    class: 'jul8',
    day: 'Wed',
    date: '8',
    opp: 'LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '138',
    month: 'jul',
    class: 'jul9',
    day: 'Thu',
    date: '9',
    opp: 'LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '139',
    month: 'jul',
    class: 'jul10',
    day: 'Fri',
    date: '10',
    opp: 'Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '140',
    month: 'jul',
    class: 'jul11',
    day: 'Sat',
    date: '11',
    opp: 'Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '3:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '141',
    month: 'jul',
    class: 'jul12',
    day: 'Sun',
    date: '12',
    opp: 'Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '142',
    month: 'jul',
    class: 'jul13',
    day: 'Mon',
    date: '13',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '143',
    month: 'jul',
    class: 'jul14',
    day: 'Tue',
    date: '14',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '144',
    month: 'jul',
    class: 'jul15',
    day: 'Wed',
    date: '15',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '145',
    month: 'jul',
    class: 'jul16',
    day: 'Thu',
    date: '16',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '146',
    month: 'jul',
    class: 'jul17',
    day: 'Fri',
    date: '17',
    opp: 'at Atl <img src="logos/braves.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:15',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '147',
    month: 'jul',
    class: 'jul18',
    day: 'Sat',
    date: '18',
    opp: 'at Atl <img src="logos/braves.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '3:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '148',
    month: 'jul',
    class: 'jul19',
    day: 'Sun',
    date: '19',
    opp: 'at Atl <img src="logos/braves.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '12:30',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '149',
    month: 'jul',
    class: 'jul20',
    day: 'Mon',
    date: '20',
    opp: 'CHW <img src="logos/white-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '150',
    month: 'jul',
    class: 'jul21',
    day: 'Tue',
    date: '21',
    opp: 'CHW <img src="logos/white-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '151',
    month: 'jul',
    class: 'jul22',
    day: 'Wed',
    date: '22',
    opp: 'CHW <img src="logos/white-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '152',
    month: 'jul',
    class: 'jul23',
    day: 'Thu',
    date: '23',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '153',
    month: 'jul',
    class: 'jul24',
    day: 'Fri',
    date: '24',
    opp: 'Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '154',
    month: 'jul',
    class: 'jul25',
    day: 'Sat',
    date: '25',
    opp: 'Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:15',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '155',
    month: 'jul',
    class: 'jul26',
    day: 'Sun',
    date: '26',
    opp: 'Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '156',
    month: 'jul',
    class: 'jul27',
    day: 'Mon',
    date: '27',
    opp: 'Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '157',
    month: 'jul',
    class: 'jul28',
    day: 'Tue',
    date: '28',
    opp: 'at TB <img src="logos/rays.gif" width="20px" height=blue-jays"20px" style="vertical-align:bottom">',
    time: '5:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '158',
    month: 'jul',
    class: 'jul29',
    day: 'Wed',
    date: '29',
    opp: 'at TB <img src="logos/rays.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '5:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '159',
    month: 'jul',
    class: 'jul30',
    day: 'Thu',
    date: '30',
    opp: 'at TB <img src="logos/rays.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '11:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '160',
    month: 'jul',
    class: 'jul31',
    day: 'Fri',
    date: '31',
    opp: 'at Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '161',
    month: 'jul',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '162',
    month: 'aug',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '163',
    month: 'aug',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '164',
    month: 'aug',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '165',
    month: 'aug',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '166',
    month: 'aug',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '167',
    month: 'aug',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '168',
    month: 'aug',
    class: 'aug1',
    day: 'Sat',
    date: '1',
    opp: 'at Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '169',
    month: 'aug',
    class: 'aug2',
    day: 'Sun',
    date: '2',
    opp: 'at Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '170',
    month: 'aug',
    class: 'aug3',
    day: 'Mon',
    date: '3',
    opp: 'SF <img src="logos/giants.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '171',
    month: 'aug',
    class: 'aug4',
    day: 'Tue',
    date: '4',
    opp: 'SF <img src="logos/giants.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '172',
    month: 'aug',
    class: 'aug5',
    day: 'Wed',
    date: '5',
    opp: 'SF <img src="logos/giants.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '173',
    month: 'aug',
    class: 'aug6',
    day: 'Thu',
    date: '6',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '174',
    month: 'aug',
    class: 'aug7',
    day: 'Fri',
    date: '7',
    opp: 'Bal <img src="logos/orioles.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '175',
    month: 'aug',
    class: 'aug8',
    day: 'Sat',
    date: '8',
    opp: 'Bal <img src="logos/orioles.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '176',
    month: 'aug',
    class: 'aug9',
    day: 'Sun',
    date: '9',
    opp: 'Bal <img src="logos/orioles.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '177',
    month: 'aug',
    class: 'aug10',
    day: 'Mon',
    date: '10',
    opp: 'at LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '8:38',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '178',
    month: 'aug',
    class: 'aug11',
    day: 'Tue',
    date: '11',
    opp: 'at LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '8:38',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '179',
    month: 'aug',
    class: 'aug12',
    day: 'Wed',
    date: '12',
    opp: 'at LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '8:38',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '180',
    month: 'aug',
    class: 'aug13',
    day: 'Thu',
    date: '13',
    opp: 'at LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '9:07',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '181',
    month: 'aug',
    class: 'aug14',
    day: 'Fri',
    date: '14',
    opp: 'at Ath <img src="logos/athletics.gif" width="24px" height="20px" style="vertical-align:bottom">',
    time: '8:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '182',
    month: 'aug',
    class: 'aug15',
    day: 'Sat',
    date: '15',
    opp: 'at Ath <img src="logos/athletics.gif" width="24px" height="20px" style="vertical-align:bottom">',
    time: '8:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '183',
    month: 'aug',
    class: 'aug16',
    day: 'Sun',
    date: '16',
    opp: 'at Ath <img src="logos/athletics.gif" width="24px" height="20px" style="vertical-align:bottom">',
    time: '3:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '184',
    month: 'aug',
    class: 'aug17',
    day: 'Mon',
    date: '17',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '185',
    month: 'aug',
    class: 'aug18',
    day: 'Tue',
    date: '18',
    opp: 'Was <img src="logos/nationals.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '186',
    month: 'aug',
    class: 'aug19',
    day: 'Wed',
    date: '19',
    opp: 'Was <img src="logos/nationals.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '187',
    month: 'aug',
    class: 'aug20',
    day: 'Thu',
    date: '20',
    opp: 'Was <img src="logos/nationals.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '188',
    month: 'aug',
    class: 'aug21',
    day: 'Fri',
    date: '21',
    opp: 'LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '189',
    month: 'aug',
    class: 'aug22',
    day: 'Sat',
    date: '22',
    opp: 'LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '190',
    month: 'aug',
    class: 'aug23',
    day: 'Sun',
    date: '23',
    opp: 'LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '191',
    month: 'aug',
    class: 'aug24',
    day: 'Mon',
    date: '24',
    opp: 'at CHW <img src="logos/white-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '192',
    month: 'aug',
    class: 'aug25',
    day: 'Tue',
    date: '25',
    opp: 'at CHW <img src="logos/white-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '193',
    month: 'aug',
    class: 'aug26',
    day: 'Wed',
    date: '26',
    opp: 'at CHW <img src="logos/white-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '194',
    month: 'aug',
    class: 'aug27',
    day: 'Thu',
    date: '27',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '195',
    month: 'aug',
    class: 'aug28',
    day: 'Fri',
    date: '28',
    opp: 'at Mil <img src="logos/brewers.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '196',
    month: 'aug',
    class: 'aug29',
    day: 'Sat',
    date: '29',
    opp: 'at Mil <img src="logos/brewers.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:15',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '197',
    month: 'aug',
    class: 'aug30',
    day: 'Sun',
    date: '30',
    opp: 'at Mil <img src="logos/brewers.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '198',
    month: 'aug',
    class: 'aug31',
    day: 'Mon',
    date: '31',
    opp: 'Ath <img src="logos/athletics.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '199',
    month: 'aug',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '200',
    month: 'aug',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '201',
    month: 'aug',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '202',
    month: 'aug',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '203',
    month: 'aug',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '204',
    month: 'sep',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '205',
    month: 'sep',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '206',
    month: 'sep',
    class: 'sep1',
    day: 'Tue',
    date: '1',
    opp: 'Ath <img src="logos/athletics.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '207',
    month: 'sep',
    class: 'sep2',
    day: 'Wed',
    date: '2',
    opp: 'Ath <img src="logos/athletics.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '208',
    month: 'sep',
    class: 'sep3',
    day: 'Thu',
    date: '3',
    opp: 'TB <img src="logos/rays.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '209',
    month: 'sep',
    class: 'sep4',
    day: 'Fri',
    date: '4',
    opp: 'TB <img src="logos/rays.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '210',
    month: 'sep',
    class: 'sep5',
    day: 'Sat',
    date: '5',
    opp: 'TB <img src="logos/rays.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '211',
    month: 'sep',
    class: 'sep6',
    day: 'Sun',
    date: '6',
    opp: 'TB <img src="logos/rays.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '212',
    month: 'sep',
    class: 'sep7',
    day: 'Mon',
    date: '7',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '213',
    month: 'sep',
    class: 'sep8',
    day: 'Tue',
    date: '8',
    opp: 'at Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '8:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '214',
    month: 'sep',
    class: 'sep9',
    day: 'Wed',
    date: '9',
    opp: 'at Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '8:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '215',
    month: 'sep',
    class: 'sep10',
    day: 'Thu',
    date: '10',
    opp: 'at Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '3:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '216',
    month: 'sep',
    class: 'sep11',
    day: 'Fri',
    date: '11',
    opp: 'at Ari <img src="logos/diamondbacks.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '8:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '217',
    month: 'sep',
    class: 'sep12',
    day: 'Sat',
    date: '12',
    opp: 'at Ari <img src="logos/diamondbacks.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '218',
    month: 'sep',
    class: 'sep13',
    day: 'Sun',
    date: '13',
    opp: 'at Ari <img src="logos/diamondbacks.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '3:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '219',
    month: 'sep',
    class: 'sep14',
    day: 'Mon',
    date: '14',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '220',
    month: 'sep',
    class: 'sep15',
    day: 'Tue',
    date: '15',
    opp: 'Bos <img src="logos/red-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '221',
    month: 'sep',
    class: 'sep16',
    day: 'Wed',
    date: '16',
    opp: 'Bos <img src="logos/red-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '222',
    month: 'sep',
    class: 'sep17',
    day: 'Thu',
    date: '17',
    opp: 'Bos <img src="logos/red-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '223',
    month: 'sep',
    class: 'sep18',
    day: 'Fri',
    date: '18',
    opp: 'Tor <img src="logos/blue-jays.gif" width="24px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '224',
    month: 'sep',
    class: 'sep19',
    day: 'Sat',
    date: '19',
    opp: 'Tor <img src="logos/blue-jays.gif" width="24px" height="20px" style="vertical-align:bottom">',
    time: '6:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '225',
    month: 'sep',
    class: 'sep20',
    day: 'Sun',
    date: '20',
    opp: 'Tor <img src="logos/blue-jays.gif" width="24px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '226',
    month: 'sep',
    class: 'sep21',
    day: 'Mon',
    date: '21',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '227',
    month: 'sep',
    class: 'sep22',
    day: 'Tue',
    date: '22',
    opp: 'NYM <img src="logos/mets.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '228',
    month: 'sep',
    class: 'sep23',
    day: 'Wed',
    date: '23',
    opp: 'NYM <img src="logos/mets.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '229',
    month: 'sep',
    class: 'sep24',
    day: 'Thu',
    date: '24',
    opp: 'NYM <img src="logos/mets.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '230',
    month: 'sep',
    class: 'sep25',
    day: 'Fri',
    date: '25',
    opp: 'at Min <img src="logos/twins.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '231',
    month: 'sep',
    class: 'sep26',
    day: 'Sat',
    date: '26',
    opp: 'at Min <img src="logos/twins.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '3:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '232',
    month: 'sep',
    class: 'sep27',
    day: 'Sun',
    date: '27',
    opp: 'at Min <img src="logos/twins.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '2:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '233',
    month: 'sep',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '234',
    month: 'sep',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '235',
    month: 'sep',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '236',
    month: 'sep',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '237',
    month: 'sep',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '238',
    month: 'sep',
    class: 'placeholder',
    day: '',
    date: '',
    opp: '',
    time: '',
    score: '',
    recap: ''
    }
  ]
  
  let marchCalendar = calendar.filter((element) => element.month === 'mar');
    
  let html = '';
  
    marchCalendar.forEach((element) => {
      newHTML = 
      `<div class = ${element.class}>
          <div>
            ${element.day}
          </div>
          <div class = "date">
            ${element.date}
          </div>
          <div class = "opp">
            ${element.opp}
          </div>
          <div>
            ${element.time}
          </div>
          <div>
            ${element.score}
          </div>
          <div>
            ${element.recap}
          </div>
         </div>\n`
      html += newHTML
    });
  
    document.querySelector('.two-week-month').innerHTML = html;

    let aprilCalendar = calendar.filter((element) => element.month === 'apr');
        
    html = '';
    
      aprilCalendar.forEach((element) => {
        newHTML = 
        `<div class = ${element.class}>
            <div>
              ${element.day}
            </div>
            <div class = "date">
              ${element.date}
            </div>
            <div class = "opp">
              ${element.opp}
            </div>
            <div>
              ${element.time}
            </div>
            <div>
              ${element.score}
            </div>
            <div>
              ${element.recap}
            </div>
           </div>\n`
        html += newHTML
      });
    
      document.querySelector('.apr').innerHTML = html;

      let mayCalendar = calendar.filter((element) => element.month === 'may');
        
    html = '';
    
      mayCalendar.forEach((element) => {
        newHTML = 
        `<div class = ${element.class}>
            <div>
              ${element.day}
            </div>
            <div class = "date">
              ${element.date}
            </div>
            <div class = "opp">
              ${element.opp}
            </div>
            <div>
              ${element.time}
            </div>
            <div>
              ${element.score}
            </div>
            <div>
              ${element.recap}
            </div>
           </div>\n`
        html += newHTML
      });
    
      document.querySelector('.six-week-month-may').innerHTML = html;

      let juneCalendar = calendar.filter((element) => element.month === 'jun');
        
    html = '';
    
      juneCalendar.forEach((element) => {
        newHTML = 
        `<div class = ${element.class}>
            <div>
              ${element.day}
            </div>
            <div class = "date">
              ${element.date}
            </div>
            <div class = "opp">
              ${element.opp}
            </div>
            <div>
              ${element.time}
            </div>
            <div>
              ${element.score}
            </div>
            <div>
              ${element.recap}
            </div>
           </div>\n`
        html += newHTML
      });
    
      document.querySelector('.jun').innerHTML = html;

      let julyCalendar = calendar.filter((element) => element.month === 'jul');
        
    html = '';
    
      julyCalendar.forEach((element) => {
        newHTML = 
        `<div class = ${element.class}>
            <div>
              ${element.day}
            </div>
            <div class = "date">
              ${element.date}
            </div>
            <div class = "opp">
              ${element.opp}
            </div>
            <div>
              ${element.time}
            </div>
            <div>
              ${element.score}
            </div>
            <div>
              ${element.recap}
            </div>
           </div>\n`
        html += newHTML
      });
    
      document.querySelector('.jul').innerHTML = html;

      let augustCalendar = calendar.filter((element) => element.month === 'aug');
        
    html = '';
    
      augustCalendar.forEach((element) => {
        newHTML = 
        `<div class = ${element.class}>
            <div>
              ${element.day}
            </div>
            <div class = "date">
              ${element.date}
            </div>
            <div class = "opp">
              ${element.opp}
            </div>
            <div>
              ${element.time}
            </div>
            <div>
              ${element.score}
            </div>
            <div>
              ${element.recap}
            </div>
           </div>\n`
        html += newHTML
      });
    
      document.querySelector('.six-week-month-aug').innerHTML = html;

      let septemberCalendar = calendar.filter((element) => element.month === 'sep');
            
      html = '';
      
        septemberCalendar.forEach((element) => {
          newHTML = 
          `<div class = ${element.class}>
              <div>
                ${element.day}
              </div>
              <div class = "date">
                ${element.date}
              </div>
              <div class = "opp">
                ${element.opp}
              </div>
              <div>
                ${element.time}
              </div>
              <div>
                ${element.score}
              </div>
              <div>
                ${element.recap}
              </div>
             </div>\n`
          html += newHTML
        });
      
        document.querySelector('.sep').innerHTML = html;

        const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const targetDate = new Date("March 28 2026 14:35:00").getTime();

function timer () {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;

    if(distance < 0){
        Days.innerHTML = "00";
        Hours.innerHTML = "00";
        Minutes.innerHTML = "00";
        Seconds.innerHTML = "00";
    }
}

setInterval(timer, 1000);


const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".weatherCard");
const apiKey = "365b72917b4b101022fe0f45d1a1602a";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city");
    }
});

async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}

function displayWeatherInfo(data){

    const {name: city, 
           main: {temp, humidity}, 
           weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("div");
    const tempDisplay = document.createElement("div");
    const humidityDisplay = document.createElement("div");
    const descDisplay = document.createElement("div");
    const weatherEmoji = document.createElement("div");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${((temp - 273.15) * (9/5) + 32).toFixed(1)}°F`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId){

    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧";
        case (weatherId >= 600 && weatherId < 700):
            return "❄";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫";
        case (weatherId === 800):
            return "☀";
        case (weatherId >= 801 && weatherId < 810):
            return "☁";
        default:
            return "❓";
    }
}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}


      