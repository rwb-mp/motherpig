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

  document.getElementById("leave-a-comment").addEventListener("click", () => {
    window.open("commentbox.html",'_blank').focus();
  })

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
    class: 'mar27',
    day: 'Thu',
    date: '27',
    opp: 'Bos <img src="logos/red-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 5-2',
    recap: '<a href = "journal.html#mar27" target = "_blank">Recap</a>'
    },
    {
    id: '6',
    month: 'mar',
    class: 'mar28',
    day: 'Fri',
    date: '28',
    opp: 'Bos <img src="logos/red-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 4-1',
    recap: '<a href = "journal.html#mar28" target = "_blank">Recap</a>'
    },
    {
    id: '7',
    month: 'mar',
    class: 'mar29',
    day: 'Sat',
    date: '29',
    opp: 'Bos <img src="logos/red-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 4-3',
    recap: '<a href = "journal.html#mar29" target = "_blank">Recap</a>'
    },
    {
    id: '8',
    month: 'mar',
    class: 'mar30',
    day: 'Sun',
    date: '30',
    opp: 'Bos <img src="logos/red-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 3-2',
    recap: '<a href = "journal.html#mar30" target = "_blank">Recap</a>'
    },
    {
    id: '9',
    month: 'mar',
    class: 'mar31',
    day: 'Mon',
    date: '31',
    opp: 'at Cin <img src="logos/reds.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 14-3',
    recap: '<a href = "journal.html#mar31" target = "_blank">Recap</a>'
    },
    {
    id: '10',
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
    class: 'apr1',
    day: 'Tue',
    date: '1',
    opp: 'at Cin <img src="logos/reds.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 1-0',
    recap: '<a href = "journal.html#apr1" target = "_blank">Recap</a>'
    },
    {
    id: '18',
    month: 'apr',
    class: 'apr2',
    day: 'Wed',
    date: '2',
    opp: 'at Cin <img src="logos/reds.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 1-0',
    recap: '<a href = "journal.html#apr2" target = "_blank">Recap</a>'
    },
    {
    id: '19',
    month: 'apr',
    class: 'apr3',
    day: 'Thu',
    date: '3',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '20',
    month: 'apr',
    class: 'apr4',
    day: 'Fri',
    date: '4',
    opp: 'TB <img src="logos/rays.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 5-2',
    recap: '<a href = "journal.html#apr4" target = "_blank">Recap</a>'
    },
    {
    id: '21',
    month: 'apr',
    class: 'apr5',
    day: 'Sat',
    date: '5',
    opp: 'TB <img src="logos/rays.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 6-4',
    recap: '<a href = "journal.html#apr5" target = "_blank">Recap</a>'
    },
    {
    id: '22',
    month: 'apr',
    class: 'apr6',
    day: 'Sun',
    date: '6',
    opp: 'TB <img src="logos/rays.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 4-3',
    recap: '<a href = "journal.html#apr6" target = "_blank">Recap</a>'
    },
    {
    id: '23',
    month: 'apr',
    class: 'apr7',
    day: 'Mon',
    date: '7',
    opp: 'at CHC <img src="logos/cubs.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 7-0',
    recap: '<a href = "journal.html#apr7" target = "_blank">Recap</a>'
    },
    {
    id: '24',
    month: 'apr',
    class: 'apr8',
    day: 'Tue',
    date: '8',
    opp: 'at CHC <img src="logos/cubs.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 10-6',
    recap: '<a href = "journal.html#apr8" target = "_blank">Recap</a>'
    },
    {
    id: '25',
    month: 'apr',
    class: 'apr9',
    day: 'Wed',
    date: '9',
    opp: 'at CHC <img src="logos/cubs.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 6-2',
    recap: '<a href = "journal.html#apr9" target = "_blank">Recap</a>'
    },
    {
    id: '26',
    month: 'apr',
    class: 'apr10',
    day: 'Thu',
    date: '10',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '27',
    month: 'apr',
    class: 'apr11',
    day: 'Fri',
    date: '11',
    opp: 'at Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 5-3',
    recap: '<a href = "journal.html#apr11" target = "_blank">Recap</a>'
    },
    {
    id: '28',
    month: 'apr',
    class: 'apr12',
    day: 'Sat',
    date: '12',
    opp: 'at Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 9-2',
    recap: '<a href = "journal.html#apr12" target = "_blank">Recap</a>'
    },
    {
    id: '29',
    month: 'apr',
    class: 'apr13',
    day: 'Sun',
    date: '13',
    opp: 'at Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 3-1',
    recap: '<a href = "journal.html#apr13" target = "_blank">Recap</a>'
    },
    {
    id: '30',
    month: 'apr',
    class: 'apr14',
    day: 'Mon',
    date: '14',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '31',
    month: 'apr',
    class: 'apr15',
    day: 'Tue',
    date: '15',
    opp: 'LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 4-0',
    recap: '<a href = "journal.html#apr15" target = "_blank">Recap</a>'
    },
    {
    id: '32',
    month: 'apr',
    class: 'apr16',
    day: 'Wed',
    date: '16',
    opp: 'LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 3-1',
    recap: '<a href = "journal.html#apr16" target = "_blank">Recap</a>'
    },
    {
    id: '33',
    month: 'apr',
    class: 'apr17',
    day: 'Thu',
    date: '17',
    opp: 'LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 5-3',
    recap: '<a href = "journal.html#apr17" target = "_blank">Recap</a>'
    },
    {
    id: '34',
    month: 'apr',
    class: 'apr18',
    day: 'Fri',
    date: '18',
    opp: 'LAD <img src="logos/dodgers.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 3-0',
    recap: '<a href = "journal.html#apr18" target = "_blank">Recap</a>'
    },
    {
    id: '35',
    month: 'apr',
    class: 'apr19',
    day: 'Sat',
    date: '19',
    opp: 'LAD <img src="logos/dodgers.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 4-3',
    recap: '<a href = "journal.html#apr19" target = "_blank">Recap</a>'
    },
    {
    id: '36',
    month: 'apr',
    class: 'apr20',
    day: 'Sun',
    date: '20',
    opp: 'LAD <img src="logos/dodgers.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 1-0',
    recap: '<a href = "journal.html#apr20" target = "_blank">Recap</a>'
    },
    {
    id: '37',
    month: 'apr',
    class: 'apr21',
    day: 'Mon',
    date: '21',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '38',
    month: 'apr',
    class: 'apr22',
    day: 'Tue',
    date: '22',
    opp: 'at Ath <img src="logos/athletics.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 8-5',
    recap: '<a href = "journal.html#apr22" target = "_blank">Recap</a>'
    },
    {
    id: '39',
    month: 'apr',
    class: 'apr23',
    day: 'Wed',
    date: '23',
    opp: 'at Ath <img src="logos/athletics.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 5-2',
    recap: '<a href = "journal.html#apr23" target = "_blank">Recap</a>'
    },
    {
    id: '40',
    month: 'apr',
    class: 'apr24',
    day: 'Thu',
    date: '24',
    opp: 'at Ath <img src="logos/athletics.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 4-3',
    recap: '<a href = "journal.html#apr24" target = "_blank">Recap</a>'
    },
    {
    id: '41',
    month: 'apr',
    class: 'apr25',
    day: 'Fri',
    date: '25',
    opp: 'at SF <img src="logos/giants.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 2-0',
    recap: '<a href = "journal.html#apr25" target = "_blank">Recap</a>'
    },
    {
    id: '42',
    month: 'apr',
    class: 'apr26',
    day: 'Sat',
    date: '26',
    opp: 'at SF <img src="logos/giants.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 3-2',
    recap: '<a href = "journal.html#apr26" target = "_blank">Recap</a>'
    },
    {
    id: '43',
    month: 'apr',
    class: 'apr27',
    day: 'Sun',
    date: '27',
    opp: 'at SF <img src="logos/giants.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 3-2',
    recap: '<a href = "journal.html#apr27" target = "_blank">Recap</a>'
    },
    {
    id: '44',
    month: 'apr',
    class: 'apr28',
    day: 'Mon',
    date: '28',
    opp: 'Ath <img src="logos/athletics.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 2-1',
    recap: '<a href = "journal.html#apr28" target = "_blank">Recap</a>'
    },
    {
    id: '45',
    month: 'apr',
    class: 'apr29',
    day: 'Tue',
    date: '29',
    opp: 'Ath <img src="logos/athletics.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 15-2',
    recap: '<a href = "journal.html#apr29" target = "_blank">Recap</a>'
    },
    {
    id: '46',
    month: 'apr',
    class: 'apr30',
    day: 'Wed',
    date: '30',
    opp: 'Ath <img src="logos/athletics.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 7-1',
    recap: '<a href = "journal.html#apr30" target = "_blank">Recap</a>'
    },
    {
    id: '47',
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
    class: 'may1',
    day: 'Thu',
    date: '1',
    opp: 'Ath <img src="logos/athletics.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 3-0',
    recap: '<a href = "journal.html#may1" target = "_blank">Recap</a>'
    },
    {
    id: '55',
    month: 'may',
    class: 'may2',
    day: 'Fri',
    date: '2',
    opp: 'Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 13-1',
    recap: '<a href = "journal.html#may2" target = "_blank">Recap</a>'
    },
    {
    id: '56',
    month: 'may',
    class: 'may3',
    day: 'Sat',
    date: '3',
    opp: 'Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 2-1',
    recap: '<a href = "journal.html#may3" target = "_blank">Recap</a>'
    },
    {
    id: '57',
    month: 'may',
    class: 'may4',
    day: 'Sun',
    date: '4',
    opp: 'Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 8-1',
    recap: '<a href = "journal.html#may4" target = "_blank">Recap</a>'
    },
    {
    id: '58',
    month: 'may',
    class: 'may5',
    day: 'Mon',
    date: '5',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '59',
    month: 'may',
    class: 'may6',
    day: 'Tue',
    date: '6',
    opp: 'at Bos <img src="logos/red-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 6-1',
    recap: '<a href = "journal.html#may6" target = "_blank">Recap</a>'
    },
    {
    id: '60',
    month: 'may',
    class: 'may7',
    day: 'Wed',
    date: '7',
    opp: 'at Bos <img src="logos/red-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 6-4',
    recap: '<a href = "journal.html#may7" target = "_blank">Recap</a>'
    },
    {
    id: '61',
    month: 'may',
    class: 'may8',
    day: 'Thu',
    date: '8',
    opp: 'at Bos <img src="logos/red-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 5-0',
    recap: '<a href = "journal.html#may8" target = "_blank">Recap</a>'
    },
    {
    id: '62',
    month: 'may',
    class: 'may9',
    day: 'Fri',
    date: '9',
    opp: 'at Det <img src="logos/tigers.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 2-1',
    recap: '<a href = "journal.html#may9" target = "_blank">Recap</a>'
    },
    {
    id: '63',
    month: 'may',
    class: 'may10',
    day: 'Sat',
    date: '10',
    opp: 'at Det <img src="logos/tigers.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 10-3',
    recap: '<a href = "journal.html#may10" target = "_blank">Recap</a>'
    },
    {
    id: '64',
    month: 'may',
    class: 'may11',
    day: 'Sun',
    date: '11',
    opp: 'at Det <img src="logos/tigers.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 6-1',
    recap: '<a href = "journal.html#may11" target = "_blank">Recap</a>'
    },
    {
    id: '65',
    month: 'may',
    class: 'may12',
    day: 'Mon',
    date: '12',
    opp: 'Col <img src="logos/rockies.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 2-1',
    recap: '<a href = "journal.html#may12" target = "_blank">Recap</a>'
    },
    {
    id: '66',
    month: 'may',
    class: 'may13',
    day: 'Tue',
    date: '13',
    opp: 'Col <img src="logos/rockies.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 4-1',
    recap: '<a href = "journal.html#may13" target = "_blank">Recap</a>'
    },
    {
    id: '67',
    month: 'may',
    class: 'may14',
    day: 'Wed',
    date: '14',
    opp: 'Col <img src="logos/rockies.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 8-3',
    recap: '<a href = "journal.html#may14" target = "_blank">Recap</a>'
    },
    {
    id: '68',
    month: 'may',
    class: 'may15',
    day: 'Thu',
    date: '15',
    opp: 'Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 1-0',
    recap: '<a href = "journal.html#may15" target = "_blank">Recap</a>'
    },
    {
    id: '69',
    month: 'may',
    class: 'may16',
    day: 'Fri',
    date: '16',
    opp: 'Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 6-3',
    recap: '<a href = "journal.html#may16" target = "_blank">Recap</a>'
    },
    {
    id: '70',
    month: 'may',
    class: 'may17',
    day: 'Sat',
    date: '17',
    opp: 'Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 5-1',
    recap: '<a href = "journal.html#may17" target = "_blank">Recap</a>'
    },
    {
    id: '71',
    month: 'may',
    class: 'may18',
    day: 'Sun',
    date: '18',
    opp: 'Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 4-3',
    recap: '<a href = "journal.html#may18" target = "_blank">Recap</a>'
    },
    {
    id: '72',
    month: 'may',
    class: 'may19',
    day: 'Mon',
    date: '19',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '73',
    month: 'may',
    class: 'may20',
    day: 'Tue',
    date: '20',
    opp: 'at NYY <img src="logos/yankees.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 5-2',
    recap: '<a href = "journal.html#may20" target = "_blank">Recap</a>'
    },
    {
    id: '74',
    month: 'may',
    class: 'may21',
    day: 'Wed',
    date: '21',
    opp: 'at NYY <img src="logos/yankees.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 4-3',
    recap: '<a href = "journal.html#may21" target = "_blank">Recap</a>'
    },
    {
    id: '75',
    month: 'may',
    class: 'may22',
    day: 'Thu',
    date: '22',
    opp: 'at NYY <img src="logos/yankees.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 1-0',
    recap: '<a href = "journal.html#may22" target = "_blank">Recap</a>'
    },
    {
    id: '76',
    month: 'may',
    class: 'may23',
    day: 'Fri',
    date: '23',
    opp: 'at CHW <img src="logos/white-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 4-1',
    recap: '<a href = "journal.html#may23" target = "_blank">Recap</a>'
    },
    {
    id: '77',
    month: 'may',
    class: 'may24',
    day: 'Sat',
    date: '24',
    opp: 'at CHW <img src="logos/white-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 10-5',
    recap: '<a href = "journal.html#may24" target = "_blank">Recap</a>'
    },
    {
    id: '78',
    month: 'may',
    class: 'may25',
    day: 'Sun',
    date: '25',
    opp: 'at CHW <img src="logos/white-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 5-4',
    recap: '<a href = "journal.html#may25" target = "_blank">Recap</a>'
    },
    {
    id: '79',
    month: 'may',
    class: 'may26',
    day: 'Mon',
    date: '26',
    opp: 'Tor <img src="logos/blue-jays.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 2-1',
    recap: '<a href = "journal.html#may26" target = "_blank">Recap</a>'
    },
    {
    id: '80',
    month: 'may',
    class: 'may27',
    day: 'Tue',
    date: '27',
    opp: 'Tor <img src="logos/blue-jays.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 2-0',
    recap: '<a href = "journal.html#may27" target = "_blank">Recap</a>'
    },
    {
    id: '81',
    month: 'may',
    class: 'may28',
    day: 'Wed',
    date: '28',
    opp: 'Tor <img src="logos/blue-jays.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 2-0',
    recap: '<a href = "journal.html#may28" target = "_blank">Recap</a>'
    },
    {
    id: '82',
    month: 'may',
    class: 'may29',
    day: 'Thu',
    date: '29',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '83',
    month: 'may',
    class: 'may30',
    day: 'Fri',
    date: '30',
    opp: 'SL <img src="logos/cardinals.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 11-1',
    recap: '<a href = "journal.html#may30" target = "_blank">Recap</a>'
    },
    {
    id: '84',
    month: 'may',
    class: 'may31',
    day: 'Sat',
    date: '31',
    opp: 'SL <img src="logos/cardinals.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 2-0',
    recap: '<a href = "journal.html#may31" target = "_blank">Recap</a>'
    },
    {
    id: '85',
    month: 'jun',
    class: 'jun1',
    day: 'Sun',
    date: '1',
    opp: 'SL <img src="logos/cardinals.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 8-1',
    recap: '<a href = "journal.html#jun1" target = "_blank">Recap</a>'
    },
    {
    id: '86',
    month: 'jun',
    class: 'jun2',
    day: 'Mon',
    date: '2',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '87',
    month: 'jun',
    class: 'jun3',
    day: 'Tue',
    date: '3',
    opp: 'at TB <img src="logos/rays.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 5-1',
    recap: '<a href = "journal.html#jun3" target = "_blank">Recap</a>'
    },
    {
    id: '88',
    month: 'jun',
    class: 'jun4',
    day: 'Wed',
    date: '4',
    opp: 'at TB <img src="logos/rays.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 5-4',
    recap: '<a href = "journal.html#jun4" target = "_blank">Recap</a>'
    },
    {
    id: '89',
    month: 'jun',
    class: 'jun5',
    day: 'Thu',
    date: '5',
    opp: 'at TB <img src="logos/rays.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 4-3',
    recap: '<a href = "journal.html#jun5" target = "_blank">Recap</a>'
    },
    {
    id: '90',
    month: 'jun',
    class: 'jun6',
    day: 'Fri',
    date: '6',
    opp: 'at Was <img src="logos/nationals.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 2-0',
    recap: '<a href = "journal.html#jun6" target = "_blank">Recap</a>'
    },
    {
    id: '91',
    month: 'jun',
    class: 'jun7',
    day: 'Sat',
    date: '7',
    opp: 'at Was <img src="logos/nationals.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 5-0',
    recap: '<a href = "journal.html#jun7" target = "_blank">Recap</a>'
    },
    {
    id: '92',
    month: 'jun',
    class: 'jun8',
    day: 'Sun',
    date: '8',
    opp: 'at Was <img src="logos/nationals.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 4-2',
    recap: '<a href = "journal.html#jun8" target = "_blank">Recap</a>'
    },
    {
    id: '93',
    month: 'jun',
    class: 'jun9',
    day: 'Mon',
    date: '9',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '94',
    month: 'jun',
    class: 'jun10',
    day: 'Tue',
    date: '10',
    opp: 'at Min <img src="logos/twins.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 16-4',
    recap: '<a href = "journal.html#jun10" target = "_blank">Recap</a>'
    },
    {
    id: '95',
    month: 'jun',
    class: 'jun11',
    day: 'Wed',
    date: '11',
    opp: 'at Min <img src="logos/twins.gif" width="20px" height="20px" style="vertical-align:bottom"> ',
    time: '',
    score: 'L 6-2',
    recap: '<a href = "journal.html#jun11" target = "_blank">Recap</a>'
    },
    {
    id: '96',
    month: 'jun',
    class: 'jun12',
    day: 'Thu',
    date: '12',
    opp: 'at Min <img src="logos/twins.gif" width="20px" height="20px" style="vertical-align:bottom"> ',
    time: '',
    score: 'W 16-3',
    recap: '<a href = "journal.html#jun12" target = "_blank">Recap</a>'
    },
    {
    id: '97',
    month: 'jun',
    class: 'jun13',
    day: 'Fri',
    date: '13',
    opp: 'CHW <img src="logos/white-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 3-1',
    recap: '<a href = "journal.html#jun13" target = "_blank">Recap</a>'
    },
    {
    id: '98',
    month: 'jun',
    class: 'jun14',
    day: 'Sat',
    date: '14',
    opp: 'CHW <img src="logos/white-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 5-4',
    recap: '<a href = "journal.html#jun14" target = "_blank">Recap</a>'
    },
    {
    id: '99',
    month: 'jun',
    class: 'jun15',
    day: 'Sun',
    date: '15',
    opp: 'CHW <img src="logos/white-sox.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 2-1',
    recap: '<a href = "journal.html#jun15" target = "_blank">Recap</a>'
    },
    {
    id: '100',
    month: 'jun',
    class: 'jun16',
    day: 'Mon',
    date: '16',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '101',
    month: 'jun',
    class: 'jun17',
    day: 'Tue',
    date: '17',
    opp: 'KC <img src="logos/royals.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 6-1',
    recap: '<a href = "journal.html#jun17" target = "_blank">Recap</a>'
    },
    {
    id: '102',
    month: 'jun',
    class: 'jun18',
    day: 'Wed',
    date: '18',
    opp: 'KC <img src="logos/royals.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 6-3',
    recap: '<a href = "journal.html#jun18" target = "_blank">Recap</a>'
    },
    {
    id: '103',
    month: 'jun',
    class: 'jun19',
    day: 'Thu',
    date: '19',
    opp: 'KC <img src="logos/royals.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 4-1',
    recap: '<a href = "journal.html#jun19" target = "_blank">Recap</a>'
    },
    {
    id: '104',
    month: 'jun',
    class: 'jun20',
    day: 'Fri',
    date: '20',
    opp: 'at Pit <img src="logos/pirates.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 6-2',
    recap: '<a href = "journal.html#jun20" target = "_blank">Recap</a>'
    },
    {
    id: '105',
    month: 'jun',
    class: 'jun21',
    day: 'Sat',
    date: '21',
    opp: 'at Pit <img src="logos/pirates.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 3-2',
    recap: '<a href = "journal.html#jun21" target = "_blank">Recap</a>'
    },
    {
    id: '106',
    month: 'jun',
    class: 'jun22',
    day: 'Sun',
    date: '22',
    opp: 'at Pit <img src="logos/pirates.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 8-3',
    recap: '<a href = "journal.html#jun22" target = "_blank">Recap</a>'
    },
    {
    id: '107',
    month: 'jun',
    class: 'jun23',
    day: 'Mon',
    date: '23',
    opp: 'at Bal <img src="logos/orioles.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 6-0',
    recap: '<a href = "journal.html#jun23" target = "_blank">Recap</a>'
    },
    {
    id: '108',
    month: 'jun',
    class: 'jun24',
    day: 'Tue',
    date: '24',
    opp: 'at Bal <img src="logos/orioles.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 6-5',
    recap: '<a href = "journal.html#jun24" target = "_blank">Recap</a>'
    },
    {
    id: '109',
    month: 'jun',
    class: 'jun25',
    day: 'Wed',
    date: '25',
    opp: 'at Bal <img src="logos/orioles.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 7-0',
    recap: '<a href = "journal.html#jun25" target = "_blank">Recap</a>'
    },
    {
    id: '110',
    month: 'jun',
    class: 'jun26',
    day: 'Thu',
    date: '26',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '111',
    month: 'jun',
    class: 'jun27',
    day: 'Fri',
    date: '27',
    opp: 'Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 7-6',
    recap: '<a href = "journal.html#jun27" target = "_blank">Recap</a>'
    },
    {
    id: '112',
    month: 'jun',
    class: 'jun28',
    day: 'Sat',
    date: '28',
    opp: 'Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 3-2',
    recap: '<a href = "journal.html#jun28" target = "_blank">Recap</a>'
    },
    {
    id: '113',
    month: 'jun',
    class: 'jun29',
    day: 'Sun',
    date: '29',
    opp: 'Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 6-4',
    recap: '<a href = "journal.html#jun29" target = "_blank">Recap</a>'
    },
    {
    id: '114',
    month: 'jun',
    class: 'jun30',
    day: 'Mon',
    date: '30',
    opp: 'Bal <img src="logos/orioles.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 10-6',
    recap: '<a href = "journal.html#jun30" target = "_blank">Recap</a>'
    },
    {
    id: '115',
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
    id: '116',
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
    id: '117',
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
    id: '118',
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
    id: '119',
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
    id: '120',
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
    id: '121',
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
    id: '122',
    month: 'jul',
    class: 'jul1',
    day: 'Tue',
    date: '1',
    opp: 'Bal <img src="logos/orioles.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 10-2',
    recap: '<a href = "journal.html#jul1" target = "_blank">Recap</a>'
    },
    {
    id: '123',
    month: 'jul',
    class: 'jul2',
    day: 'Wed',
    date: '2',
    opp: 'Bal <img src="logos/orioles.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 6-0',
    recap: '<a href = "journal.html#jul2" target = "_blank">Recap</a>'
    },
    {
    id: '124',
    month: 'jul',
    class: 'jul3',
    day: 'Thu',
    date: '3',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '125',
    month: 'jul',
    class: 'jul4',
    day: 'Fri',
    date: '4',
    opp: 'at SD <img src="logos/padres.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 3-2',
    recap: '<a href = "journal.html#jul4" target = "_blank">Recap</a>'
    },
    {
    id: '126',
    month: 'jul',
    class: 'jul5',
    day: 'Sat',
    date: '5',
    opp: 'at SD <img src="logos/padres.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 7-4',
    recap: '<a href = "journal.html#jul5" target = "_blank">Recap</a>'
    },
    {
    id: '127',
    month: 'jul',
    class: 'jul6',
    day: 'Sun',
    date: '6',
    opp: 'at SD <img src="logos/padres.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 4-1',
    recap: '<a href = "journal.html#jul6" target = "_blank">Recap</a>'
    },
    {
    id: '128',
    month: 'jul',
    class: 'jul7',
    day: 'Mon',
    date: '7',
    opp: 'at LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 6-5',
    recap: '<a href = "journal.html#jul7" target = "_blank">Recap</a>'
    },
    {
    id: '129',
    month: 'jul',
    class: 'jul8',
    day: 'Tue',
    date: '8',
    opp: 'at LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 13-1',
    recap: '<a href = "journal.html#jul8" target = "_blank">Recap</a>'
    },
    {
    id: '130',
    month: 'jul',
    class: 'jul9',
    day: 'Wed',
    date: '9',
    opp: 'at LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 11-8',
    recap: '<a href = "journal.html#jul9" target = "_blank">Recap</a>'
    },
    {
    id: '131',
    month: 'jul',
    class: 'jul10',
    day: 'Thu',
    date: '10',
    opp: 'at LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 11-4',
    recap: '<a href = "journal.html#jul10" target = "_blank">Recap</a>'
    },
    {
    id: '132',
    month: 'jul',
    class: 'jul11',
    day: 'Fri',
    date: '11',
    opp: 'at Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 7-4',
    recap: '<a href = "journal.html#jul11" target = "_blank">Recap</a>'
    },
    {
    id: '133',
    month: 'jul',
    class: 'jul12',
    day: 'Sat',
    date: '12',
    opp: 'at Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 5-4',
    recap: '<a href = "journal.html#jul12" target = "_blank">Recap</a>'
    },
    {
    id: '134',
    month: 'jul',
    class: 'jul13',
    day: 'Sun',
    date: '13',
    opp: 'at Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 5-1',
    recap: '<a href = "journal.html#jul13" target = "_blank">Recap</a>'
    },
    {
    id: '135',
    month: 'jul',
    class: 'jul14',
    day: 'Mon',
    date: '14',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '136',
    month: 'jul',
    class: 'jul15',
    day: 'Tue',
    date: '15',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '137',
    month: 'jul',
    class: 'jul16',
    day: 'Wed',
    date: '16',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '138',
    month: 'jul',
    class: 'jul17',
    day: 'Thu',
    date: '17',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '139',
    month: 'jul',
    class: 'jul18',
    day: 'Fri',
    date: '18',
    opp: 'Det <img src="logos/tigers.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 2-0',
    recap: '<a href = "journal.html#jul18" target = "_blank">Recap</a>'
    },
    {
    id: '140',
    month: 'jul',
    class: 'jul19',
    day: 'Sat',
    date: '19',
    opp: 'Det <img src="logos/tigers.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 4-1',
    recap: '<a href = "journal.html#jul19" target = "_blank">Recap</a>'
    },
    {
    id: '141',
    month: 'jul',
    class: 'jul20',
    day: 'Sun',
    date: '20',
    opp: 'Det <img src="logos/tigers.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'L 2-1',
    recap: '<a href = "journal.html#jul20" target = "_blank">Recap</a>'
    },
    {
    id: '142',
    month: 'jul',
    class: 'jul21',
    day: 'Mon',
    date: '21',
    opp: 'Ath <img src="logos/athletics.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 7-2',
    recap: '<a href = "journal.html#jul21" target = "_blank">Recap</a>'
    },
    {
    id: '143',
    month: 'jul',
    class: 'jul22',
    day: 'Tue',
    date: '22',
    opp: 'Ath <img src="logos/athletics.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 6-2',
    recap: '<a href = "journal.html#jul22" target = "_blank">Recap</a>'
    },
    {
    id: '144',
    month: 'jul',
    class: 'jul23',
    day: 'Wed',
    date: '23',
    opp: 'Ath <img src="logos/athletics.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 2-1',
    recap: '<a href = "journal.html#jul23" target = "_blank">Recap</a>'
    },
    {
    id: '145',
    month: 'jul',
    class: 'jul24',
    day: 'Thu',
    date: '24',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '146',
    month: 'jul',
    class: 'jul25',
    day: 'Fri',
    date: '25',
    opp: 'Atl <img src="logos/braves.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '',
    score: 'W 8-3',
    recap: '<a href = "journal.html#jul25" target = "_blank">Recap</a>'
    },
    {
    id: '147',
    month: 'jul',
    class: 'jul26',
    day: 'Sat',
    date: '26',
    opp: 'Atl <img src="logos/braves.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '148',
    month: 'jul',
    class: 'jul27',
    day: 'Sun',
    date: '27',
    opp: 'Atl <img src="logos/braves.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '149',
    month: 'jul',
    class: 'jul28',
    day: 'Mon',
    date: '28',
    opp: 'at LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '8:38',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '150',
    month: 'jul',
    class: 'jul29',
    day: 'Tue',
    date: '29',
    opp: 'at LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '8:38',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '151',
    month: 'jul',
    class: 'jul30',
    day: 'Wed',
    date: '30',
    opp: 'at LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '8:38',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '152',
    month: 'jul',
    class: 'jul31',
    day: 'Thu',
    date: '31',
    opp: 'at Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '8:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '153',
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
    id: '154',
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
    id: '155',
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
    id: '156',
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
    id: '157',
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
    id: '158',
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
    id: '159',
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
    id: '160',
    month: 'aug',
    class: 'aug1',
    day: 'Fri',
    date: '1',
    opp: 'at Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '9:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '161',
    month: 'aug',
    class: 'aug2',
    day: 'Sat',
    date: '2',
    opp: 'at Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '3:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '162',
    month: 'aug',
    class: 'aug3',
    day: 'Sun',
    date: '3',
    opp: 'at Sea <img src="logos/mariners.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '3:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '163',
    month: 'aug',
    class: 'aug4',
    day: 'Mon',
    date: '4',
    opp: 'NYY <img src="logos/yankees.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '164',
    month: 'aug',
    class: 'aug5',
    day: 'Tue',
    date: '5',
    opp: 'NYY <img src="logos/yankees.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '165',
    month: 'aug',
    class: 'aug6',
    day: 'Wed',
    date: '6',
    opp: 'NYY <img src="logos/yankees.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '166',
    month: 'aug',
    class: 'aug7',
    day: 'Thu',
    date: '7',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '167',
    month: 'aug',
    class: 'aug8',
    day: 'Fri',
    date: '8',
    opp: 'Phi <img src="logos/phillies.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'CW33/Victory+'
    },
    {
    id: '168',
    month: 'aug',
    class: 'aug9',
    day: 'Sat',
    date: '9',
    opp: 'Phi <img src="logos/phillies.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:15',
    score: '',
    recap: 'Fox'
    },
    {
    id: '169',
    month: 'aug',
    class: 'aug10',
    day: 'Sun',
    date: '10',
    opp: 'Phi <img src="logos/phillies.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '170',
    month: 'aug',
    class: 'aug11',
    day: 'Mon',
    date: '11',
    opp: 'Ari <img src="logos/diamondbacks.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '171',
    month: 'aug',
    class: 'aug12',
    day: 'Tue',
    date: '12',
    opp: 'Ari <img src="logos/diamondbacks.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '172',
    month: 'aug',
    class: 'aug13',
    day: 'Wed',
    date: '13',
    opp: 'Ari <img src="logos/diamondbacks.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '173',
    month: 'aug',
    class: 'aug14',
    day: 'Thu',
    date: '14',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '174',
    month: 'aug',
    class: 'aug15',
    day: 'Fri',
    date: '15',
    opp: 'at Tor <img src="logos/blue-jays.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:07',
    score: '',
    recap: 'CW33/Victory+'
    },
    {
    id: '175',
    month: 'aug',
    class: 'aug16',
    day: 'Sat',
    date: '16',
    opp: 'at Tor <img src="logos/blue-jays.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '2:07',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '176',
    month: 'aug',
    class: 'aug17',
    day: 'Sun',
    date: '17',
    opp: 'at Tor <img src="logos/blue-jays.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '12:37',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '177',
    month: 'aug',
    class: 'aug18',
    day: 'Mon',
    date: '18',
    opp: 'at KC <img src="logos/royals.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '178',
    month: 'aug',
    class: 'aug19',
    day: 'Tue',
    date: '19',
    opp: 'at KC <img src="logos/royals.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '179',
    month: 'aug',
    class: 'aug20',
    day: 'Wed',
    date: '20',
    opp: 'at KC <img src="logos/royals.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '180',
    month: 'aug',
    class: 'aug21',
    day: 'Thu',
    date: '21',
    opp: 'at KC <img src="logos/royals.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '181',
    month: 'aug',
    class: 'aug22',
    day: 'Fri',
    date: '22',
    opp: 'Cle <img src="logos/guardians.gif" width="24px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '182',
    month: 'aug',
    class: 'aug23',
    day: 'Sat',
    date: '23',
    opp: 'Cle <img src="logos/guardians.gif" width="24px" height="20px" style="vertical-align:bottom">',
    time: '6:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '183',
    month: 'aug',
    class: 'aug24',
    day: 'Sun',
    date: '24',
    opp: 'Cle <img src="logos/guardians.gif" width="24px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '184',
    month: 'aug',
    class: 'aug25',
    day: 'Mon',
    date: '25',
    opp: 'LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '185',
    month: 'aug',
    class: 'aug26',
    day: 'Tue',
    date: '26',
    opp: 'LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '186',
    month: 'aug',
    class: 'aug27',
    day: 'Wed',
    date: '27',
    opp: 'LAA <img src="logos/angels.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '187',
    month: 'aug',
    class: 'aug28',
    day: 'Thu',
    date: '28',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '188',
    month: 'aug',
    class: 'aug29',
    day: 'Fri',
    date: '29',
    opp: 'at Ath <img src="logos/athletics.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '9:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '189',
    month: 'aug',
    class: 'aug30',
    day: 'Sat',
    date: '30',
    opp: 'at Ath <img src="logos/athletics.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '9:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '190',
    month: 'aug',
    class: 'aug31',
    day: 'Sun',
    date: '31',
    opp: 'at Ath <img src="logos/athletics.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '3:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '191',
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
    id: '192',
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
    id: '193',
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
    id: '194',
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
    id: '195',
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
    id: '196',
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
    id: '197',
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
    id: '198',
    month: 'sep',
    class: 'sep1',
    day: 'Mon',
    date: '1',
    opp: 'at Ari <img src="logos/diamondbacks.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '199',
    month: 'sep',
    class: 'sep2',
    day: 'Tue',
    date: '2',
    opp: 'at Ari <img src="logos/diamondbacks.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '8:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '200',
    month: 'sep',
    class: 'sep3',
    day: 'Wed',
    date: '3',
    opp: 'at Ari <img src="logos/diamondbacks.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '2:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '201',
    month: 'sep',
    class: 'sep4',
    day: 'Thu',
    date: '4',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '202',
    month: 'sep',
    class: 'sep5',
    day: 'Fri',
    date: '5',
    opp: 'Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'CW33/Victory+'
    },
    {
    id: '203',
    month: 'sep',
    class: 'sep6',
    day: 'Sat',
    date: '6',
    opp: 'Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:15',
    score: '',
    recap: 'Fox'
    },
    {
    id: '204',
    month: 'sep',
    class: 'sep7',
    day: 'Sun',
    date: '7',
    opp: 'Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '205',
    month: 'sep',
    class: 'sep8',
    day: 'Mon',
    date: '8',
    opp: 'Mil <img src="logos/brewers.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '206',
    month: 'sep',
    class: 'sep9',
    day: 'Tue',
    date: '9',
    opp: 'Mil <img src="logos/brewers.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '207',
    month: 'sep',
    class: 'sep10',
    day: 'Wed',
    date: '10',
    opp: 'Mil <img src="logos/brewers.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '208',
    month: 'sep',
    class: 'sep11',
    day: 'Thu',
    date: '11',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '209',
    month: 'sep',
    class: 'sep12',
    day: 'Fri',
    date: '12',
    opp: 'at NYM <img src="logos/mets.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '210',
    month: 'sep',
    class: 'sep13',
    day: 'Sat',
    date: '13',
    opp: 'at NYM <img src="logos/mets.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '3:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '211',
    month: 'sep',
    class: 'sep14',
    day: 'Sun',
    date: '14',
    opp: 'at NYM <img src="logos/mets.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '12:40',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '212',
    month: 'sep',
    class: 'sep15',
    day: 'Mon',
    date: '15',
    opp: 'at Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '213',
    month: 'sep',
    class: 'sep16',
    day: 'Tue',
    date: '16',
    opp: 'at Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '214',
    month: 'sep',
    class: 'sep17',
    day: 'Wed',
    date: '17',
    opp: 'at Hou <img src="logos/astros.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '215',
    month: 'sep',
    class: 'sep18',
    day: 'Thu',
    date: '18',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '216',
    month: 'sep',
    class: 'sep19',
    day: 'Fri',
    date: '19',
    opp: 'Mia <img src="logos/marlins.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'CW33/Victory+'
    },
    {
    id: '217',
    month: 'sep',
    class: 'sep20',
    day: 'Sat',
    date: '20',
    opp: 'Mia <img src="logos/marlins.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '6:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '218',
    month: 'sep',
    class: 'sep21',
    day: 'Sun',
    date: '21',
    opp: 'Mia <img src="logos/marlins.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '219',
    month: 'sep',
    class: 'sep22',
    day: 'Mon',
    date: '22',
    opp: '',
    time: '',
    score: '',
    recap: ''
    },
    {
    id: '220',
    month: 'sep',
    class: 'sep23',
    day: 'Tue',
    date: '23',
    opp: 'Min <img src="logos/twins.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '221',
    month: 'sep',
    class: 'sep24',
    day: 'Wed',
    date: '24',
    opp: 'Min <img src="logos/twins.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '7:05',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '222',
    month: 'sep',
    class: 'sep25',
    day: 'Thu',
    date: '25',
    opp: 'Min <img src="logos/twins.gif" width="20px" height="20px" style="vertical-align:bottom">',
    time: '1:35',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '223',
    month: 'sep',
    class: 'sep26',
    day: 'Fri',
    date: '26',
    opp: 'at Cle <img src="logos/guardians.gif" width="24px" height="20px" style="vertical-align:bottom">',
    time: '6:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '224',
    month: 'sep',
    class: 'sep27',
    day: 'Sat',
    date: '27',
    opp: 'at Cle <img src="logos/guardians.gif" width="24px" height="20px" style="vertical-align:bottom">',
    time: '5:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '225',
    month: 'sep',
    class: 'sep28',
    day: 'Sun',
    date: '28',
    opp: 'at Cle <img src="logos/guardians.gif" width="24px" height="20px" style="vertical-align:bottom">',
    time: '2:10',
    score: '',
    recap: 'Victory+'
    },
    {
    id: '226',
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
    id: '227',
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
    id: '228',
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
    id: '229',
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
    id: '230',
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
    id: '231',
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
    
      document.querySelector('.may').innerHTML = html;

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
    
      document.querySelector('.six-week-month').innerHTML = html;

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

const targetDate = new Date("July 26 2025 18:05:00").getTime();

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


      