const schedule = [
  {
  id: 'mar27',
  date: 'March 27',
  opp: 'vs Boston',
  score: 'L 5-2',
  recap: `Nathan Eovaldi (0-0, 0.00) vs. Garrett Crochet (0-0, 0.00). Nathan Eovaldi outdueled 2024 All-Star Garrett Crochet, exiting with the game tied 2-2 after six strong innings. Eovaldi was sharp, throwing 87 pitches while allowing just three hits, no walks, and striking out nine. Kevin Pillar and Kyle Higashioka delivered the RBIs off Crochet. The game unraveled in the ninth, when Rangers reliever Luke Jackson issued a one-out walk, followed by a single and a go-ahead three-run homer from Wilyer Abreu—his second blast of the night. Boston’s bullpen stifled the Rangers over the final four innings, surrendering just two singles.`
  },
  {
  id: 'mar28',
  date: 'March 28',
  opp: 'vs Boston',
  score: 'W 4-1',
  recap: `Jaxk Leiter (0-0, 0.00) vs. Tanner Houck (0-0, 0.00). Jonah Heim powered the Rangers with a pair of solo home runs off All-Star Tanner Houck, while Jack Leiter earned his first career win with a solid outing—scattering five hits and a walk over five innings. Wyatt Langford made a key run-saving catch in left field in the second, and Leiter worked out of jams in the third and fourth to keep Boston off the board. The Red Sox threatened in the seventh after Marc Church put two on, but Hoby Milner escaped a bases-loaded, one-out situation to preserve the lead. Five Rangers relievers combined for four shutout innings, capped by a perfect ninth from Luke Jackson to lock down the save.`
  },
  {
  id: 'mar29',
  date: 'March 29',
  opp: 'vs Boston',
  score: 'W 4-3',
  recap: `Tyler Mahle (0-0, 0.00) vs. Walker Buehler (0-0, 0.00). Tyler Mahle struggled in his season debut, throwing 31 balls in just 61 pitches and failing to make it out of the second inning. Despite the early control issues, the Rangers held a 2-1 lead after two, thanks in part to a close play in left field—Kristian Campbell appeared to make a diving catch on an Adolis García liner, but the ball popped loose when he hit the ground. The bullpen was outstanding, with five relievers keeping Texas in the game. García carried the offense, driving in three runs with two doubles and a home run. The Rangers entered the ninth with a 4-3 lead, and Arlington High School alum Chris Martin sealed the win with a perfect inning for his first save of the season.

`
  },
  {
  id: 'mar30',
  date: 'March 30',
  opp: 'vs Boston',
  score: 'W 3-2',
  recap: `Jacob deGrom (0-0, 0.00) vs. Richard Fitts (0-0, 0.00). Jacob deGrom impressed in his season debut, tossing five scoreless innings and exiting with a 1-0 lead. Boston briefly jumped ahead in the sixth, scoring twice off reliever Shawn Armstrong on a looping double down the left-field line and a throwing error by third baseman Ezequiel Duran. Red Sox rookie Richard Fitts had retired 12 straight before the Rangers struck back in the sixth. Wyatt Langford tied the game with a 330-foot wall-scraper down the right-field line, and two batters later, Adolis García launched a 431-foot go-ahead homer into the second deck in left. Robert Garcia worked a perfect seventh, while Chris Martin stranded the tying run at third in the eighth by striking out Kristian Campbell and Connor Wong. Luke Jackson pitched around two baserunners in the ninth, fanning Alex Bregman with the tying run on second to secure his second save.`
  },
  {
  id: 'mar31',
  date: 'March 31',
  opp: 'at Cincinnati',
  score: 'L 14-3',
  recap: `Kumar Rocker (0-0, 0.00) vs. Brady Singer (0-0, 0.00). The Reds jumped on Kumar Rocker early with a single, home run, single, and double to open the game, setting the tone for a lopsided night. Rocker allowed six runs on seven hits and two walks over just three innings, and the bullpen couldn’t stop the bleeding. Gerson Garabito gave up eight more runs—four earned—on seven hits and two hit batters in 2 2/3 innings. Offensively, the Rangers had no answers for Brady Singer, who cruised through seven innings of one-hit ball with eight strikeouts. Texas avoided a shutout with a pair of runs in the ninth on Jake Burger’s first homer of the season. Adolis García continues to carry the offense, hitting .357, while the rest of the lineup has combined for a .195 average.`
  },
  {
  id: 'apr1',
  date: 'April 1',
  opp: 'at Cincinnati',
  score: 'W 1-0',
  recap: `Nathan Eovaldi (0-0, 3.00) vs. Carson Spiers (0-0, 0.00). Nathan Eovaldi was masterful, tossing a complete game four-hit shutout with eight strikeouts and no walks. The Rangers needed every bit of his dominance, as the offense managed just a single run on four hits against Carson Spiers and three Reds relievers. The lone run came in the first inning on Wyatt Langford’s 361-foot homer to left—his second of the season. Eovaldi sealed the win by retiring Elly De La Cruz on a soft grounder to first with the tying run on second.

`
  },
  {
  id: 'apr2',
  date: 'April 2',
  opp: 'at Cincinnati',
  score: 'W 1-0',
  recap: `Jack Leiter (1-0, 1.80) vs. Hunter Greene (0-0, 3.60). The Rangers scratched across the game's only run in the fourth inning, when Joc Pederson singled and Josh Smith followed with a two-out RBI double off a 100-mph fastball from Hunter Greene. That was all Texas would need. Jack Leiter was outstanding, allowing just one hit and no walks with six strikeouts over five shutout innings before exiting with a blister on his middle finger. Greene was equally impressive for Cincinnati, going seven strong innings and limiting the Rangers to one run on three hits while striking out eight. The Rangers' bullpen was flawless once again, as Jacob Webb, Robert Garcia, Chris Martin, and Luke Jackson combined for four scoreless innings to preserve the 1-0 win. For the first time in franchise history, the Rangers have won back-to-back games by a 1-0 score.`
  },
  {
  id: 'apr4',
  date: 'April 4',
  opp: 'Tampa Bay',
  score: 'W 5-2',
  recap: `Tyler Mahle (0-0, 5.40) vs. Zack Littell (0-1, 1.50). The Rangers took a four-run lead in the third inning, stringing together five consecutive hits from Josh Smith, Kyle Higashioka, Leody Taveras, Marcus Semien, and Corey Seager. Tyler Mahle rebounded from his rocky season debut with five shutout innings, keeping a strong Rays lineup in check and not allowing a runner past first base. Tampa Bay chipped away with two runs in the seventh, but Josh Smith answered with a solo homer in the bottom half to push the lead to 5-2. Luke Jackson closed out the win with a perfect ninth for his fourth save.`
  },
  {
  id: 'apr5',
  date: 'April 5',
  opp: 'Tampa Bay',
  score: 'W 6-4',
  recap: `Jacob deGrom (0-0, 0.00) vs. Taj Bradley (1-0, 3.00). The Rangers jumped out early with a four-run first inning. Marcus Semien led off with a solo homer to left, and Jake Burger followed with a three-run shot after Wyatt Langford and Adolis García drew back-to-back walks. The Rays chipped away, with Brandon Lowe homering off deGrom in the third and Jonathan Aranda blasting a two-run shot off the right-field foul pole in the sixth to cut the lead to one. After a two-out double by Kameron Misner, deGrom exited. Jacob Webb allowed a game-tying double to the first batter he faced, evening the score at 4. Texas didn’t record a hit after the first inning until Kevin Pillar, pinch-hitting for Leody Taveras, singled to left in the seventh. Wyatt Langford followed with a clutch two-out line-drive homer just over the left-field wall to put the Rangers back on top. The bullpen shut the door, with García, Martin, and Jackson combining for 2 1/3 scoreless innings. Jackson earned his fifth save of the season. Despite being outhit 10–4, the Rangers drew six walks and out-homered the Rays 3–2 to claim the win.`
  },
  {
  id: 'apr6',
  date: 'April 6',
  opp: 'Tampa Bay',
  score: 'W 4-3',
  recap: `Kumar Rocker (0-1, 13.50) vs. Drew Rasmussen (1-0, 0.00). Kumar Rocker bounced back from a rough debut, allowing just one run on six hits with no walks over five solid innings. Corey Seager gave the Rangers a 2–1 lead in the sixth with a solo homer to right off Rays reliever Garrett Cleavinger. Texas added another in the seventh when Jonah Heim reached on an error, stole second, and scored on a Leody Taveras single to center. Fort Worth Paschal alum Hoby Milner retired all six batters he faced. However, the lead slipped away in the eighth as Marc Church surrendered a leadoff walk followed by a double, with both runners eventually coming around to score. Jacob Webb kept it tied with a scoreless ninth. In the bottom of the ninth, with two outs, Josh Smith doubled down the left-field line and scored the game-winner on Jonah Heim’s single to center, sealing a sweep of the Rays.`
  },
  {
  id: 'apr7',
  date: 'April 7',
  opp: 'at Chicago Cubs',
  score: 'L 7-0',
  recap: `Nathan Eovaldi (1-0, 1.20) vs. Justin Steele (2-1, 6.89). The Rangers entered the game with the best record in the AL but the lowest batting average in MLB at just .192. With a game-time temperature of 34 degrees, it was the coldest game in franchise history. Cubs starter Justin Steele struggled recently, allowing five home runs and 12 earned runs over his previous three starts, but he kept the Rangers' offense mostly in check, allowing only one runner to reach second base over seven innings. Nathan Eovaldi pitched 4 2/3 innings, surrendering three runs, while Gerson Garabito gave up four runs in 3 1/3 innings of relief. Meanwhile, Corey Seager has managed just one RBI through the first 11 games of the season.`
  },
  {
  id: 'apr8',
  date: 'April 8',
  opp: 'at Chicago Cubs',
  score: 'L 10-6',
  recap: `Patrick Corbin (0-0, 0.00) vs. Jameson Taillon (1-1, 6.35). Corbin was called up from Round Rock to replace the injured Jack Leiter and gave the Rangers four innings in his debut, allowing three runs on five hits and two walks. Texas jumped ahead in the second on Jonah Heim’s two-run single, but squandered a chance for more when Leody Taveras and Marcus Semien failed to bring Josh Jung home from third. The Cubs answered with three in the bottom half before Wyatt Langford tied it in the third with a 407-foot solo homer to left. Jacob Webb struggled in the fifth, allowing three straight singles—all of whom came around to score, putting Chicago up 6–3. The Rangers chipped away—Jung doubled and Taveras tripled in the seventh to make it 6–5. In the eighth, Josh Smith singled with two outs, and Jung followed with an RBI triple to tie the game. But Heim stranded the go-ahead run at third. In the bottom of the inning, a misplayed fly ball by Taveras resulted in a two-base error. After an intentional walk and a Jung error on a potential double-play ball, Dansby Swanson delivered the decisive blow with a two-run double, giving the Cubs an 8–6 lead. Crow-Armstrong knocked in 2 more with a 2-out single.`
  },  
  {
  id: 'apr9',
  date: 'April 9',
  opp: 'at Chicago Cubs',
  score: 'W 6-2',
  recap: `Tyler Mahle (1-0, 1.35) vs. Shota Imanaga (2-0, 1.40). Corey Seager set the tone early with a solo homer in the first, and the Rangers broke the game open in the fifth with a four-run outburst against Cubs starter Shōta Imanaga. The rally featured five hits: a Kevin Pillar single, a 398-foot two-run blast to center by Jonah Heim, a single by Marcus Semien, a hard double off the center-field wall by Josh Jung, and a bloop RBI single from Adolis García. Seager added his second homer of the game in the seventh to extend the lead to 6–1. Tyler Mahle was outstanding, tossing seven innings of two-hit ball with one walk and four strikeouts. The only blemish came in the fourth, when Seiya Suzuki tripled and scored the Cubs’ lone run. Before the game, the Rangers placed rookie Wyatt Langford on the 10-day IL.`
  },
  {
  id: 'apr11',
  date: 'April 11',
  opp: 'at Seattle',
  score: 'L 5-3',
  recap: `Jacob deGrom (0-0, 3.38) vs. Bryce Miller (0-2, 5.73). The Rangers continued their struggles in Seattle, where they’ve now dropped 33 of their last 41, falling 5–3 despite multiple scoring chances. Texas went just 2-for-12 with runners in scoring position and left nine men on base. Josh Jung stranded the bases loaded in the first, and both Jake Burger and Jonah Heim struck out on pitches out of the zone with two on in the fourth. The Rangers also came up empty after a one-out double by Marcus Semien in the seventh and again following an Adolis García leadoff double in the eighth, as Pederson, Jung, and Burger went down in order. All three Rangers runs came on a Josh Jung homer in the sixth. deGrom allowed two runs over six innings and exited with the game tied. Marc Church and Hoby Milner followed with scoreless frames, but Chris Martin gave up a two-run homer to Cal Raleigh in the eighth, which proved to be the difference.`
  },
  {
  id: 'apr12',
  date: 'April 12',
  opp: 'at Seattle',
  score: 'L 9-2',
  recap: `Kumar Rocker (0-1, 7.88) vs. Bryan Woo (1-0, 4.50). The Rangers' best scoring chance came in the first inning when their first four batters reached safely, producing an early run and loading the bases with no outs. But the momentum stalled as Joc Pederson flied out to right, and both Josh Jung and Jake Burger struck out, leaving the bases loaded. From there, Mariners starter Bryan Woo found his rhythm, retiring 14 straight during the middle innings. Kumar Rocker’s trouble came in the third, when he allowed a walk, two doubles, and a triple in a four-run frame. Caleb Boushley made his Rangers debut in relief but was hit hard, giving up five runs over 3⅔ innings. With the loss, the Rangers surrendered the division lead for the first time since April 1.`
  },   
  {
  id: 'apr13',
  date: 'April 13',
  opp: 'at Seattle',
  score: 'L 3-1',
  recap: `Nathan Eovaldi (1-1, 2.29) vs. Logan Gilbert (0-1, 2.55). The Rangers managed just four hits and wasted a solid outing from Nathan Eovaldi as Seattle completed the sweep with a 3–1 win. Both starters went five innings and surrendered home runs, but Seattle’s came with a runner aboard. In the sixth, a Julio Rodríguez single, an error by Jake Burger at first, and two hit batters gave the Mariners a 3–1 lead and chased Eovaldi from the game. Hoby Milner prevented further damage, escaping a bases-loaded, no-out jam. Texas never mounted a comeback, as four Mariners relievers combined to allow just one hit over the final four innings. A small bright spot came in the fifth when Kyle Higashioka threw out Miles Mastrobuoni attempting to steal second—marking the first time all season a Rangers catcher caught a base-stealer after 28 straight successful attempts.`
  },
  {
  id: 'apr15',
  date: 'April 15',
  opp: 'LA Angels',
  score: 'W 4-0',
  recap: `Tyler Mahle (2-0, 1.32) vs. Yusei Kikuchi (0-2, 4.58). The Rangers offense entered the game with the fewest walks in MLB. Tyler Mahle looked like a front-line starter for the third straight outing, tossing six shutout innings with nine strikeouts. Leody Taveras sparked the offense in the sixth with a bunt single, a stolen base, and advancement to third on a throwing error. Marcus Semien brought him home with a deep sac fly to left. Texas added insurance with a pair of doubles from Jonah Heim and Kyle Higashioka in the seventh, and two more runs in the eighth on hits by Corey Seager, Josh Jung, and Kevin Pillar. Relievers Robert Garcia, Chris Martin, Jacob Webb, and Luke Jackson combined to finish the shutout.`
  },
  {
  id: 'apr16',
  date: 'April 16',
  opp: 'LA Angels',
  score: 'W 3-1',
  recap: `Patrick Corbin (0-0, 6.75) vs. Jose Soriano (2-1, 2.70). The Rangers jumped out early with a three-run second inning, highlighted by Dustin Harris’s double down the right-field line and Jake Burger’s RBI single up the middle. After walks to Jonah Heim and Marcus Semien, Corey Seager delivered a two-out, two-RBI single to make it 3–0. Starter Patrick Corbin kept the Angels off balance with his off-speed stuff, striking out six over five strong innings. In the sixth, the Angels broke through with three consecutive one-out hits, including a bloop double that landed just inside the right-field line, scoring their only run. Shawn Armstrong came on to record the final two outs and preserve the 3–1 lead. Armstrong allowed two baserunners in the seventh, but Jacob Webb escaped the jam with a deep flyout to left. Luke Jackson pitched a clean ninth for his sixth save. Texas tallied 11 hits—including three each from Seager and Burger—but went just 2-for-10 with runners in scoring position.`
  },
  {
  id: 'apr17',
  date: 'April 17',
  opp: 'LA Angels',
  score: 'W 5-3',
  recap: `Kumar Rocker (0-2, 7.94) vs. Jack Kochanowicz (1-1, 5.74). The Rangers entered the game with the best starting rotation ERA in the American League and backed it up with another strong outing. The teams traded runs in the first, but Texas started the scoring in the second with a bases-loaded, two-run double by Leody Taveras. Adolis García added a solo shot in the third to make it 4–1. After the Angels trimmed the lead to 4–3 in the fifth, Corey Seager provided insurance with a towering 427-foot homer to center in the seventh—his 100th as a Ranger. Kumar Rocker was dominant, allowing just three runs over seven innings while striking out eight, walking none, and needing only 78 pitches (58 strikes). Chris Martin worked a clean eighth, and Robert Garcia pitched a perfect ninth to notch his first career save.`
  },
  {
  id: 'apr18',
  date: 'April 18',
  opp: 'LA Dodgers',
  score: 'L 3-0',
  recap: `Jacob deGrom (0-0, 4.30) vs. Yoshinobu Yamamoto (2-1, 1.23). Jacob deGrom was brilliant, allowing just three hits and a walk over seven innings while striking out seven. But the Rangers couldn’t reward him with run support. Tommy Edman launched deGrom’s second pitch of the game 398 feet over the right-field wall. That solo shot would be all the Dodgers needed, as Yamamoto outdueled deGrom with seven shutout innings of his own. Texas had opportunities but couldn’t convert. Josh Jung doubled with one out in the second but was stranded. In the third, Marcus Semien and Corey Seager singled with two outs, only for Joc Pederson to ground out. Dustin Harris doubled with two outs in the fourth but was left at second when Jake Burger struck out. The Dodgers tacked on two insurance runs in the ninth off the Rangers' bullpen, while Texas hitters swung-and-missed 22 times—15 on pitches outside the strike zone.

`
  },
  {
  id: 'apr19',
  date: 'April 19',
  opp: 'LA Dodgers',
  score: 'W 4-3',
  recap: `Nathan Eovaldi (1-2, 2.55) vs. Roki Sasaki (0-1, 3.29). Adolis Garcia crushed a 2-run walk-off homer in the bottom of the ninth to give the Rangers a dramatic 4–3 win over the Dodgers. Nathan Eovaldi delivered another quality start, allowing 3 runs on 5 hits with 7 strikeouts and no walks over 6 innings in a duel with Japanese phenom Roki Sasaki. Kyle Higashioka opened the scoring with a 381-foot homer in the third, following a walk to Dustin Harris. The Dodgers answered quickly in the fourth as Freddie Freeman launched a 2-run shot after a Mookie Betts single. Michael Conforto and Max Muncy added back-to-back hits to give L.A. a 3–2 lead. Relievers Robert Garcia and Jacob Webb combined for three scoreless innings to hold the deficit, setting the stage for the ninth. Josh Smith led off with a double, and Garcia delivered the final blow with a 394-foot blast to left on a 1-1 pitch.`
  },
  {
  id: 'apr20',
  date: 'April 20',
  opp: 'LA Dodgers',
  score: 'L 1-0',
  recap: `Tyler Mahle (3-0, 0.92) vs. Tyler Glasnow (1-0, 4.85). Tyler Mahle turned in another dominant outing, but the Rangers couldn’t back him with any offense in a 1–0 loss to the Dodgers. Dodgers starter Tyler Glasnow breezed through four scoreless innings, allowing just three hits before exiting with a leg injury after one pitch in the fifth. The Los Angeles bullpen picked up where he left off, holding the Rangers to just one hit. Josh Smith accounted for three of the Rangers' four hits, but Texas couldn’t capitalize. Their best chance came in the eighth when Marcus Semien walked and advanced to second with one out, but Smith and Adolis Garcia struck out to end the threat. Mahle held the Dodgers in check with seven shutout innings, giving up just two hits and three walks while striking out five. But reliever Chris Martin surrendered the game’s only run in the eighth. Wyatt Langford, back from a 10-day IL stint, singled to open the ninth, but was caught stealing to end the game after a pair of quick outs.`
  },
  {
  id: 'apr22',
  date: 'April 22',
  opp: 'at Athletics',
  score: 'W 8-5',
  recap: `Patrick Corbin (1-0, 3.86 vs. Osvaldo Bido (2-1, 2.61).  With the offense sputtering and tied for the fewest runs in MLB, Rangers manager Bruce Bochy shook up the batting order — and the move paid off immediately. Josh Smith (.452 OBP) was moved into the leadoff spot, with Wyatt Langford batting second ahead of Seager, Garcia, and Semien. The new-look top of the lineup responded with an 8–5 win, marking the first time this season the Rangers scored more than six runs in a game. Smith and Langford reached to open the bottom of the first, setting up an Adolis Garcia double and a Marcus Semien sacrifice fly for a quick 2–0 lead. Langford homered 403 feet to left in the third, and Smith added a solo shot in the fifth. Later that inning, Semien capped a three-run rally with a 417-foot blast to center, extending the lead to 7–2. Jake Burger added the fourth Texas homer with a 417-foot shot of his own in the sixth. Starter Patrick Corbin earned the win, tossing five innings of two-run ball while scattering seven hits and two walks. Jacob Webb allowed two home runs in the eighth to tighten the score, but Luke Jackson pitched a clean ninth to earn his seventh save. Corey Seager exited the game after his sixth-inning at-bat due to hamstring tightness.`
  },
  {
  id: 'apr23',
  date: 'April 23',
  opp: 'at Athletics',
  score: 'L 5-2',
  recap: `Kumar Rocker (1-2, 6.38) vs. JP Sears (2-2, 3.13). J.P. Sears continued his dominance over Texas, earning his third win against the Rangers this season in a 5–2 A’s victory. Kumar Rocker struggled out of the gate, allowing four runs on six hits in a rough first inning. The Rangers' offense managed just seven hits against four Oakland pitchers and struck out 11 times. Wyatt Langford provided a spark with a solo home run in the fourth, and Texas added a second run in the sixth, manufacturing it off a Kevin Pillar single and a Langford walk. Joc Pederson snapped an 0-for-41 skid with a ninth-inning double for Oakland. Before the game, the Rangers placed Corey Seager on the 10-day IL with hamstring soreness.`
  },
  {
  id: 'apr24',
  date: 'April 24',
  opp: 'at Athletics',
  score: 'L 4-3',
  recap: `Jacob deGrom (0-1, 3.32) vs. J.T. Ginn (1-1, 3.69). The Rangers let a late lead slip away, falling 4–3 to the A’s on a walk-off single in the ninth and dropping the series finale. Texas carried a 3–2 lead into the final frame, but Max Schuemann drew a leadoff walk and came all the way around to score when Leody Taveras misplayed Luis Urías’ single in center field. After a flyout, Jacob Wilson delivered the game-winning hit. Luke Jackson was charged with the blown save and the loss. 
  The Rangers’ only offense came in the fourth, when Josh Jung, Jonah Heim, and Taveras all homered to erase a 2–0 deficit. They loaded the bases later in the inning, but Adolis Garcia grounded out to end the threat. After that, Texas managed just one baserunner over the final five innings. Defensive miscues cost the Rangers early — Wyatt Langford lost a routine fly ball in the lights in the third, leading to two unearned runs on a Tyler Soderstrom double. Kumar Rocker was placed on the 15-day IL with a mild shoulder impingement.

`
  },
  {
  id: 'apr25',
  date: 'April 25',
  opp: 'at San Francisco',
  score: 'W 2-0',
  recap: `Nathan Eovaldi (1-2, 2.64) vs. Justin Verlander (0-1, 5.47). Nathan Eovaldi delivered another dominant performance Monday night, leading the Rangers to a 2–0 shutout win over the Giants. Eovaldi scattered three hits and a walk over six scoreless innings, striking out seven. He was backed by strong defense, including standout plays from Dustin Harris in center field and Josh Jung at third base. The bullpen trio of Chris Martin, Robert Garcia, and Luke Jackson combined for three hitless innings with seven strikeouts. Jackson earned his eighth save. Wyatt Langford led the offense, going 3-for-4 with two doubles. He drove in the first run in the third inning after a Jake Burger leadoff double. Langford doubled again in the sixth and scored on a Joc Pederson RBI single. The Rangers totaled seven hits in the win and notched their second shutout of the season.`
  },
  {
  id: 'apr26',
  date: 'April 26',
  opp: 'at San Francisco',
  score: 'L 3-2',
  recap: `Tyler Mahle (3-0, 0.68) vs. Robbie Ray (3-0, 4.07). The Rangers let a late opportunity slip away and fell 3–2 to the Giants on a walk-off single by Patrick Bailey in the ninth. Texas jumped ahead early with a pair of sacrifice flies from Jake Burger, but lefty Robbie Ray settled in and dominated over seven innings. Despite walking 17 batters over his previous four starts, Ray issued just one walk and induced 23 swings-and-misses from the Rangers' lineup. Tyler Mahle gave up two runs in the fifth  after base hits from the bottom of the Giants' order, finishing with five innings pitched, eight hits, one walk, and a strikeout. The game remained tied entering the ninth. Marcus Semien and Jonah Heim led off the inning with singles, but Kyle Higashioka popped up a bunt attempt, and both Josh Smith and Joc Pederson struck out chasing pitches out of the zone. In the bottom half, Jacob Webb allowed the first two Giants to reach before Christian Koss laid down a perfect sacrifice bunt. Jacob Latz entered in relief, but Bailey ended it with a first-pitch RBI single for the walk-off win.`
  },
  {
  id: 'apr27',
  date: 'April 27',
  opp: 'at San Francisco',
  score: 'L 3-2',
  recap: `Jack Leiter (2-0, 0.90) vs. Jordan Hicks (1-3, 6.59). A pair of errant throws on a slow roller in the ninth doomed the Rangers in a 3–2 walk-off loss to the Giants, dropping Texas out of first place for the first time since April 14. With the score tied in the bottom of the ninth, Heliot Ramos hit a soft tapper to the left of the mound. Reliever Luke Jackson threw wildly to first, and Jake Burger's recovery throw to third was also off the mark, allowing Ramos to circle the bases for the unearned, game-winning run. Jack Leiter made his first start since returning from the 15-day IL and allowed two runs on two hits and four walks over 3 1/3 innings. He walked three and gave up a run in the first, and Ramos tied the game in the fourth after a leadoff single and some aggressive baserunning. Texas struck early with back-to-back doubles by Burger and Joc Pederson in the first, followed by a bloop RBI single from Marcus Semien to give the Rangers a 2–0 lead. Pederson tripled to lead off the sixth, but the Rangers failed to bring him home after three consecutive outs — including a strikeout by Adolis Garcia on pitches out of the zone. The offense went just 2-for-10 with runners in scoring position. Despite 4 2/3 scoreless innings from the bullpen, the Rangers' sloppy ninth-inning defense sealed their second straight walk-off defeat.`
  },
  {
  id: 'apr28',
  date: 'April 28',
  opp: 'Athletics',
  score: 'L 2-1',
  recap: `Patrick Corbin (2-0, 3.77) vs. J.P. Sears (3-2, 3.21). Manager Bruce Bochy rolled out a new-look lineup featuring Kevin Pillar in the leadoff spot, followed by Kyle Higashioka, Wyatt Langford, and Jonah Heim. But the offense continued to struggle in key moments, going just 1-for-7 with runners in scoring position. Patrick Corbin pitched out of traffic for four innings before the A’s broke through in the fifth, scoring twice. Corbin exited after 4 2/3 innings, allowing seven hits, one walk, and striking out five. Texas got on the board in the sixth when Higashioka doubled and scored on a Heim single. They loaded the bases later in the inning, but Adolis Garcia popped out to squander the opportunity. The Rangers threatened again in the ninth as Marcus Semien led off with a single and advanced to second on a Josh Jung groundout, but Garcia struck out and Dustin Harris grounded out to end the game. Sears improved to 5–0 in his last five starts against Texas, and the Rangers have now dropped six of their last eight.`
  },
  {
  id: 'apr29',
  date: 'April 29',
  opp: 'Athletics',
  score: 'W 15-2',
  recap: `Jacob deGrom (0-1, 3.33) vs. Jacob Lopez (0-0, 0.00) The Rangers’ offense erupted for 18 hits and nine walks in a lopsided win over the A’s, backing a dominant outing from Jacob deGrom in a 15–2 blowout. Facing Triple-A call-up Joe Luis López, who was filling in for the injured J.T. Ginn, Texas capitalized early and often — highlighted by an eight-run sixth inning. deGrom was in complete control, needing just 65 pitches to throw six shutout innings. He allowed four hits, struck out seven, and didn’t issue a walk. Dane Dunning, making his season debut after being recalled from Round Rock, handled the final three innings.`
  },
  {
  id: 'apr30',
  date: 'April 30',
  opp: 'Athletics',
  score: 'L 7-1',
  recap: `Nathan Eovaldi (2-2, 2.21) vs. Luis Severino (1-3, 3.49). Nathan Eovaldi delivered another quality start, but the Rangers’ bats went cold, leading to a 7–1 defeat against the A’s. Eovaldi pitched six innings, allowing just one run on six hits, issuing no walks, and striking out eight. However, Texas repeatedly squandered scoring chances, going 1-for-11 with runners in scoring position. The first two hitters reached base in the third, sixth, and eighth innings but failed to push across runs. Jake Burger, batting third, struck out four times and left five runners stranded. Wyatt Langford, hitting leadoff, went 0-for-5 and stranded six runners. The game slipped away in the ninth when the A’s erupted for six runs, including two home runs, against the Rangers’ bullpen trio of Garcia, Jackson, and Armstrong. Despite pitching to the sixth-best ERA in MLB at the end of April, Texas ranks 27th in runs scored.`
  },
  {
  id: 'may1',
  date: 'May 1',
  opp: 'Athletics',
  score: 'L 3-0',
  recap: `Tyler Mahle (3-0, 1.23) vs. Jeffrey Springs (3-3, 5.18). Tyler Mahle delivered another solid outing, but the Rangers’ offense couldn’t capitalize, falling 3–0 to the Athletics. Mahle pitched six innings, allowing just one run on five hits and a walk while striking out six. Meanwhile, rookie pitcher Springs, who struggled in his previous start against the White Sox, held the Rangers to only two singles over six innings. Opponents had been hitting .432 against Springs’ fastball, but Texas couldn’t break through. The Rangers went 0-for-4 with runners in scoring position and have now dropped five of their last seven games against Oakland. Following the game, Jake Burger was optioned to Round Rock, and Blaine Crimm (.313/.365/.565) was called up to the big league roster.`
  },
  {
  id: 'may2',
  date: 'May 2',
  opp: 'Seattle',
  score: 'L 13-1',
  recap: `Jack Leiter (2-0, 2.03) vs. Bryan Woo (3-1, 3.09). The Mariners’ offense, highlighted by a solo homer and a grand slam from Cal Raleigh, proved more than enough to hand the Rangers a tough defeat, dropping Texas below .500 for the first time since Opening Day. Bryan Woo was dominant on the mound, retiring the first 14 Rangers batters before Jonah Heim’s harmless single in the fifth. Seattle’s pitching staff retired the next 12 batters until Josh Smith broke through with a two-out homer in the ninth — ending a 281 at-bat homerless streak for Texas. Rangers rookie Blaine Crimm made his MLB debut, going 0-for-3 with two strikeouts in the loss.`
  },
  {
  id: 'may3',
  date: 'May 3',
  opp: 'Seattle',
  score: 'L 2-1',
  recap: `Patrick Corbin (2-1, 3.79) vs. Luis Castillo (3-2, 3.62). Corey Seager returned from the 10-day IL, but the Rangers' offensive struggles continued in a 2–1 loss to the Mariners — their fourth straight defeat and ninth in the last 11 games. 
  J.P. Crawford homered on Patrick Corbin’s first pitch of the game, but Corbin settled in, retiring 12 straight at one point. He exited after 5 2/3 innings, allowing one run on five hits, two walks, and two strikeouts. The Rangers tied it in the fourth when Seager led off with a single and scored on a two-out RBI single by Jonah Heim. However, the offense managed just five hits on the night and went quietly after that. Chris Martin gave up the go-ahead run in the ninth, allowing a leadoff double to Jorge Polanco, who scored on a Rowdy Tellez single. The Rangers threatened in the bottom half, but Adolis Garcia struck out with the tying run on second to end the game.`
  },
  {
  id: 'may4',
  date: 'May 4',
  opp: 'Seattle',
  score: 'W 8-1',
  recap: `Jacob deGrom (1-1, 2.73) vs. Logan Evans (1-0, 3.60). The Rangers broke out with a six-run third inning, highlighted by Corey Seager’s two-run single and a flurry of clutch two-out hits from Marcus Semien, Adolis Garcia, and Josh Jung, to take down the Mariners 8–1. Texas sent 11 batters to the plate in the third, collecting six singles and two walks. Josh Smith led the offensive charge with a 4-hit night, capping it with an RBI triple in the eighth that scored Jung. Jacob deGrom turned in another solid outing, allowing one run on three hits and two walks over five innings, with three strikeouts. The bullpen was dominant, shutting out Seattle over the final four innings and allowing just two baserunners.`
  },
  {
  id: 'may6',
  date: 'May 6',
  opp: 'at Boston',
  score: 'W 6-1',
  recap: `Nathan Eovaldi (2-2, 2.11) vs. Lucas Giolito (0-0, 4.50). Leody Taveras was claimed off waivers by Seattle. A five-run fourth inning and another strong start from Nathan Eovaldi powered the Rangers to a 6–1 win over the Red Sox. Texas strung together six hits in the fourth, including doubles by Corey Seager and Joc Pederson and singles from Marcus Semien, Evan Carter, Jonah Heim, Josh Smith, and Wyatt Langford. The offense racked up 16 hits on the night, led by Smith (3 singles, walk) and Adolis Garcia (3 singles, walk, sac fly). Eovaldi was sharp again, going six innings and allowing just one run on five hits and a walk while striking out seven. The bullpen trio of Armstrong, Garcia, and Martin closed it out with three scoreless innings, allowing only one baserunner. Evan Carter, in his first start of 2025, went 2-for-5 with a hit off a left-hander.`
  },
  {
  id: 'may7',
  date: 'May 7',
  opp: 'at Boston',
  score: 'L 6-4',
  recap: `Tyler Mahle (3-1, 1.19) vs. Tanner Houck (0-2, 6.38). The Rangers’ bullpen couldn’t hold a one-run lead, surrendering four runs after the fifth inning as Texas fell 6–4 to the Red Sox. Tyler Mahle turned in a steady start, allowing two runs on four hits with one walk over five innings. Texas led 2–0 after Adolis Garcia’s solo homer in the fourth — the club’s first long ball in 15 games. The Rangers added another run in the fifth on a Seager single and a Pederson double. But relievers Milner, Webb, Garcia, and Boushley combined to give up four runs, with Wilyer Abreu and Alex Bregman doing the bulk of Boston’s damage. Josh Jung homered on the first pitch of the ninth off Aroldis Chapman to cut the deficit to 6–4. Wyatt Langford followed with a walk to bring the tying run to the plate, but Corey Seager flew out to the warning track and Blaine Crim struck out to end the game. The Rangers went 0-for-10 with runners in scoring position. Marcus Semien was hitless and left six men on base. Joc Pederson was a bright spot, reaching base all three times with a single, double, and walk. Evan Carter went 0-for-4 in his second game back.`
  },
  {
  id: 'may8',
  date: 'May 8',
  opp: 'at Boston',
  score: 'L 5-0',
  recap: `Jack Leiter (2-1, 2.58) vs. Brayan Bello (2-0, 2.50). The Rangers were shut out, stranding 10 baserunners in a 5–0 loss to Boston. Texas drew six walks, collected five hits, and had a batter hit by a pitch, but went 0-for-7 with runners in scoring position. Wyatt Langford and Marcus Semien each stranded five runners as the offense failed to cash in on early opportunities — five of the six walks came in the first 4 2/3 innings. Jack Leiter took the loss, allowing four runs over 5 1/3 innings on just three hits, but struggled with control, issuing four walks and hitting a batter while striking out three. Tucker Barnhart accounted for three of the team’s five hits.`
  },
  {
  id: 'may9',
  date: 'May 9',
  opp: 'at Detroit',
  score: 'L 2-1',
  recap: `Patrick Corbin (2-1, 3.28) vs. Tarik Skubal (3-2, 2.21). Tarik Skubal dominated the Rangers with 32 swings and misses over 7 innings, retiring the first 15 batters he faced. Texas finally broke through in the 6th with two singles and a hit-by-pitch to plate their only run. Patrick Corbin kept it close, allowing 2 runs on 3 hits and 4 walks with 3 strikeouts over 6 innings. The Rangers added a third hit in the 8th but went down in order in the 9th, falling 2–1.`
  },
  {
  id: 'may10',
  date: 'May 10',
  opp: 'at Detroit',
  score: 'W 10-3',
  recap: `Jacob deGrom (2-1, 2.61) vs. Jack Flaherty (1-4, 3.79). The Rangers launched five no-doubt homers to right field in a 10–3 win over the Tigers. Josh Smith (389 ft) and Corey Seager (403 ft) went back-to-back in the 1st, Evan Carter added a 390-footer in the 2nd, Joc Pederson homered 401 feet in the 4th, and Seager struck again with a 393-foot shot in the 7th. Jacob deGrom struck out 10 over 5 innings, allowing 2 runs on 5 hits and a walk. Milner, Armstrong, and Jackson combined to finish the game, giving up a run in four innings of relief. Rangers pitchers totaled 13 strikeouts on the night.`
  },
  {
  id: 'may11',
  date: 'May 11',
  opp: 'at Detroit',
  score: 'W 6-1',
  recap: `Nathan Eovaldi (3-2, 2.03) vs. Reese Olson (4-2, 3.03). The Rangers wrapped up the series holding Detroit’s high-powered offense to just six runs over three games. Nathan Eovaldi was dominant again, tossing seven scoreless innings with seven strikeouts while allowing only two hits and a walk. The Rangers’ offense stayed hot with the long ball. Marcus Semien and Josh Jung each hit 2-run homers, and Jonah Heim added a solo shot in the 8th. Evan Carter chipped in with an RBI single in the 3rd, and Wyatt Langford just missed a bases-clearing hit in the 2nd with a 107-mph liner that was caught. Over the final two games of the series, seven different Rangers went deep. In the 9th, Jacob Latz loaded the bases with one out, but Robert Garcia came on to secure the 6–2 win with a sac fly and a routine flyout.`
  },
  {
  id: 'may12',
  date: 'May 12',
  opp: 'Colorado',
  score: 'W 2-1',
  recap: `Tyler Mahle (3-1, 1.48) vs. Chase Dollander (2-3, 7.71). The Rangers had no hits through 5-2/3 innings before Wyatt Langford broke through with a 412-foot solo homer to right, giving Texas a 1–0 lead in the 6th — their first hit of the night. 
  Tyler Mahle was sharp again, allowing just one run over 6-1/3 innings on 4 hits and a walk while striking out five. Garcia and Martin followed with 1-2/3 innings of no-hit relief to carry the lead into the 9th. Drama unfolded in the final frame when Ryan McMahon led off with a single that deflected off closer Luke Jackson, forcing him to leave the game. Jacob Webb entered, loaded the bases with one out, but induced a game-ending double play to seal the 2–1 win and earn his first save of the season.`
  },
  {
  id: 'may13',
  date: 'May 13',
  opp: 'Colorado',
  score: 'W 4-1',
  recap: `Jack Leiter (2-2, 5.09) vs. Kyle Freeland (0-5, 6.41). Josh Jung powered the Rangers with two home runs and four RBIs, including a 396-foot blast in the 1st inning after back-to-back singles and a solo shot in the 8th to pad the lead. Jack Leiter held Colorado to one run over 6 innings on 2 hits and 3 walks with 5 strikeouts. Milner and Martin worked into the 9th, where the Rockies put two on with no outs, but Shawn Armstrong struck out the next three to lock down his first save. Corey Seager was placed on the 10-day IL retroactive to May 11 with a hamstring issue.`
  },
  {
  id: 'may14',
  date: 'May 14',
  opp: 'Colorado',
  score: 'W 8-3',
  recap: `Patrick Corbin (2-2, 3.13) vs. Antonio Senzatela (1-6, 5.77). The first six hitters reached base and the Rangers exploded for 4 runs in the 1st inning, highlighted by Langford’s 2-run 368-foot homer to right field. Jake Burger added a 2-out, 2-RBI double in the 5th, and Adolis Garcia crushed a 394-foot solo homer in the 6th. Corbin was solid, pitching 6 innings with 3 runs allowed on 4 hits, a walk, and a hit-by-pitch, striking out 9. Boushley followed with 2 1/3 scoreless innings but gave up two singles in the 9th before Garcia closed out the game, completing the sweep. Despite the offensive burst, the Rangers were just 3-for-20 with runners in scoring position during the series.`
  },
  {
  id: 'may15',
  date: 'May 15',
  opp: 'Houston',
  score: 'W 1-0',
  recap: `Jacob deGrom (3-1, 2.72) vs. Hunter Brown (6-1, 1.48). Jacob deGrom tossed eight scoreless innings, allowing five hits and a walk while striking out seven, backed by stellar outfield defense from Garcia and Carter that erased multiple Astros threats. The Rangers managed just three hits off Hunter Brown, but Jake Burger’s 394-foot solo homer to right in the 6th proved the difference. Garcia also doubled to lead off the 5th, but was stranded at second. Armstrong worked the 9th, issuing a two-out walk before retiring Dezenzo on a popup to seal the 1-0 win and secure the save.`
  },
  {
  id: 'may16',
  date: 'May 16',
  opp: 'Houston',
  score: 'L 6-3',
  recap: `Nathan Eovaldi (4-2, 1.78) vs. Lance McCullers (0-1, 15.75). The Rangers jumped out early with a 2-out, 2-RBI single from Jonah Heim in the 2nd, capitalizing on a Jung single and an Astros error. Despite threats in the 3rd and 4th, the Rangers left runners in scoring position and then went quiet—15 consecutive batters retired until a solo homer by Jung in the 9th. Nathan Eovaldi delivered 5 2/3 shutout innings, allowing just 2 hits and 3 walks while striking out 5. But things unraveled in the 7th when relievers Hoby Milner and Shawn Armstrong allowed seven straight Astros to reach with two outs, resulting in six runs—highlighted by Christian Walker’s 3-run homer.`
  },
  {
  id: 'may17',
  date: 'May 17',
  opp: 'Houston',
  score: 'W 5-1',
  recap: `Tyler Mahle (4-1, 1.47) vs. Ronel Blanco (3-3, 4.04). After falling behind 1-0 early, the Rangers tied the game in the 3rd on two hits, two walks, and an Astros error. Semien had a chance to break the game open, but grounded out with the bases loaded. Joc Pederson broke the tie in the 6th with a 409-foot, 2-run homer, and Wyatt Langford added insurance in the 7th with a 431-foot blast. The Rangers loaded the bases again in the 8th but came up empty. Tyler Mahle was sharp, allowing one run over six innings with 5 hits, 2 walks, and 3 strikeouts. Webb, Martin, and Garcia combined to no-hit the Astros over the final three innings to lock down the win.`
  },
  {
  id: 'may18',
  date: 'May 18',
  opp: 'Houston',
  score: 'L 4-3',
  recap: `Jack Leiter (3-2, 4.34) vs. Framber Valdez (2-4, 3.54). Jack Leiter took a no-hitter into the 7th and left with a 3-1 lead, but the Astros rallied late to hand the Rangers a tough 4–3 loss. Yainer Diaz broke up the no-hit bid and the shutout with a solo homer in the 7th. In the 8th, two bloop singles ended Leiter’s night, and reliever Robert Garcia gave up a go-ahead three-run homer to Isaac Paredes. The Rangers plated all three of their runs in the 4th on four singles, a walk, and a sac fly. A baserunning mistake in the 7th by Jonah Heim—thrown out at 3rd on a grounder to the left side—killed a potential rally, and he later stranded the tying run at 2nd with a deep flyout in the 8th. Evan Carter was placed on the 10-day IL with a right quad strain, retroactive to May 17.`
  },
  {
  id: 'may20',
  date: 'May 20',
  opp: 'at New York Yankees',
  score: 'L 5-2',
  recap: `Patrick Corbin (3-2, 3.35) vs. Will Warren (2-2, 4.61). Chris Martin was placed on the 15-day IL with right shoulder fatigue, retroactive to May 19. Texas struck out 14 times, struggling to capitalize on multiple scoring chances. Heim doubled in the 5th but was left stranded after a Haggerty strikeout. The Rangers loaded the bases in the 6th, only for Semien and Pederson to strike out. In the 8th, Langford doubled and reached 3rd on a wild pitch, but Jung and Garcia struck out to end the threat. Pederson walked in the 9th and Heim followed with a 2-run homer to avoid the shutout. Starter Corbin gave up 3 runs on 5 hits and 2 walks over 5 innings.`
  },
  {
  id: 'may21',
  date: 'May 21',
  opp: 'at New York Yankees',
  score: 'L 4-3',
  recap: `Jacob deGrom (4-1, 2.29) vs. Will Yarbrough (1-0, 3.70). The Rangers outhit the Yankees 10-5 and slugged three home runs but couldn't come through with the big hit when it mattered, stranding the bases loaded in both the 6th and 8th innings. 
  Jake Burger went deep twice—390 feet in the 5th and 367 feet in the 7th—and Sam Haggerty added a 390-foot blast to RF later in the 7th. Despite the power display, the Rangers couldn't add on when needed. Barnhart left the bases loaded in the 6th, and Smith did the same in the 8th. Jacob deGrom was strong again, retiring 15 straight at one point and finishing with 7 innings of 2-run ball, allowing just 3 hits and a walk while striking out 9. The Yankees tied it in the 8th after Robert Garcia walked two and Aaron Judge singled off Luke Jackson. Jackson then surrendered a 372-foot walk-off homer in the 9th to hand the Rangers a frustrating 4-3 loss.`
  },
  {
  id: 'may22',
  date: 'May 22',
  opp: 'at New York Yankees',
  score: 'L 1-0',
  recap: `Nathan Eovaldi (4-2, 1.61) vs. Carlos Rodon (5-3, 3.17). The Rangers’ offensive struggles continued as they struck out 12 times and managed just 4 hits in a 1-0 loss to the Yankees—marking their sixth shutout of the season. Nathan Eovaldi delivered another strong outing, allowing just 1 run on 5 hits over 6 innings with 6 strikeouts. Milner and Armstrong combined for two hitless innings out of the bullpen. Texas had chances but couldn’t convert, going 1-for-7 with runners in scoring position. In the 6th, Langford reached second with one out, but Jung and Burger struck out. In the 7th, Semien led off with a single and advanced on a wild pitch, only to be stranded after Heim struck out, Garcia grounded out, and Smith went down swinging.`
  },
  {
  id: 'may23',
  date: 'May 23',
  opp: 'at Chicago White Sox',
  score: 'L 4-1',
  recap: `Tyler Mahle (5-1, 1.47) vs. Sean Burke (2-5, 4.69). Bruce Bochy shuffled the lineup, dropping Adolis Garcia to 8th and Marcus Semien to 9th, but the offensive struggles continued as the Rangers managed just 3 hits in a 3-1 loss. Tyler Mahle ran into trouble in the 3rd, surrendering 3 runs on 3 singles, 2 walks, and a sac fly. One of the walks came with the bases loaded. The Rangers had early chances but stranded a runner at second twice in the first four innings. They finally broke through in the 6th on a Jake Burger RBI double, but Jung was thrown out at the plate to end the inning. Texas went 1-for-4 with runners in scoring position.`
  },
  {
  id: 'may24',
  date: 'May 24',
  opp: 'at Chicago White Sox',
  score: 'L 10-5',
  recap: `Jack Leiter (3-2, 4.25) vs. Bryse Wilson (0-2, 6.00). For the first time in a week, the Rangers scored more than three runs, but defensive miscues and wild pitching unraveled a promising night in an 10-5 loss to the White Sox. Jack Leiter battled through traffic for five innings, escaping multiple jams and leaving with a 4-2 lead. But the 6th inning spiraled out of control. Wyatt Langford and Sam Haggerty collided at the wall on what should’ve been the first out, leading to a triple. Josh Jung misplayed a routine grounder, and Marcus Semien missed a tag before making a late throw to first—three defensive lapses, three missed outs. Reliever Jacob Webb poured fuel on the fire, giving up a single, two walks, and two doubles as part of a six-run inning. Rangers pitching issued eight walks and surrendered 14 hits on the night.`
  },
  {
  id: 'may25',
  date: 'May 25',
  opp: 'at Chicago White Sox',
  score: 'W 5-4',
  recap: `Patrick Corbin (3-3, 3.59) vs. Davis Martin (2-5, 3.49). The Rangers lost Joc Pederson to a fractured right hand after he was hit by a pitch in yesterday’s game, placing him on the 10-day IL. Alejandro Osuna made his MLB debut in left field. Down 3-2 in the 9th, the Rangers mounted a comeback. After Jung was hit by a pitch, Jake Burger doubled to put two on. Osuna struck out, but Kyle Higashioka reached on an error that scored Jung with the tying run. Adolis García followed with a clutch double to right, scoring Burger and Higashioka to take a 5-3 lead. Robert Garcia pitched the 9th and allowed a run on back-to-back one-out doubles, but picked off the tying run at second before Osuna secured the final out on the warning track to seal the win. Burger had earlier put Texas on the board with a 423-foot, two-run homer in the 2nd. Starter Patrick Corbin went 5 1/3 innings, allowing three runs on five hits and a walk with six strikeouts.`
  },
  {
  id: 'may26',
  date: 'May 26',
  opp: 'Toronto',
  score: 'L 2-1',
  recap: `Jacob deGrom (4-1, 2.33) vs. Kevin Gausman (4-4, 4.03). The Rangers managed just one run on five hits in a 2-1 loss. Their lone run came in the 4th on a line-drive solo homer to left by Wyatt Langford. Texas had a chance in the 5th when Jonah Heim and Alejandro Osuna led off with singles, but three straight outs—two by strikeout—ended the threat. In the 9th, the Rangers needed a run to extend the game, but Langford, Josh Jung, and Jake Burger went down in order. Jacob deGrom allowed two runs on five hits and two walks over 5 1/3 innings. It marked the first start of his career without recording a strikeout. Osuna had two hits in his second major league game.`
  },
  {
  id: 'may27',
  date: 'May 27',
  opp: 'Toronto',
  score: 'W 2-0',
  recap: `Nathan Eovaldi (4-3, 1.60) vs. Bowden Francis (2-6, 5.54). Bowden Francis, who leads the AL in home runs allowed, kept the Rangers in check early. Nathan Eovaldi exited after two scoreless innings with right triceps fatigue, but the Texas bullpen picked him up. Latz, Armstrong, Milner, Jackson, and Garcia combined for seven shutout innings, allowing just two hits and two walks. The Rangers were held to four hits through seven innings before finally breaking through in the 8th. Kyle Higashioka singled with one out, and pinch-runner Sam Haggerty stole second. After a walk to Wyatt Langford, Josh Jung delivered a clutch 2-out RBI single. Langford then scored from 3rd on an errant pickoff attempt by the catcher, sealing a 2-0 win.`
  },
  {
  id: 'may28',
  date: 'May 28',
  opp: 'Toronto',
  score: 'L 2-0',
  recap: `Tyler Mahle (5-2, 1.80) vs. Paxton Schultz (0-0, 2.53). Corey Seager returned to the lineup for the first time since May 10, but the Rangers' offense remained cold. Josh Smith led off the game with a single, and Texas failed to record another hit the rest of the way. No Ranger reached second base, and the lineup struck out 13 times against five Blue Jays relievers in a bullpen game started by Paxton Shultz. Tyler Mahle delivered six shutout innings, scattering four hits and three walks while striking out five. But Jacob Webb gave up a solo homer to Bo Bichette in the 9th, and the Rangers were shut out for the seventh time this season. Seager went 0-for-4 with two strikeouts in his return.`
  },
  {
  id: 'may30',
  date: 'May 30',
  opp: 'St. Louis',
  score: 'W 11-1',
  recap: `Jack Leiter (3-2, 4.17) vs. Matthew Liberatore (3-3, 2.73). The Rangers' struggling offense finally broke out, scoring 11 runs on 15 hits in a rout of the Blue Jays. Marcus Semien, hitting just .173 entering the game, went 4-for-4 with a home run and 3 RBIs. Sam Haggerty, batting leadoff, reached base five times and tripled during a 4-run 2nd inning that also featured a Langford homer. Texas added four more in the 6th on a string of singles and walks, then Semien capped the scoring with a 2-run homer in the 7th. Jack Leiter delivered 5 2/3 shutout innings, allowing just three hits and two walks while striking out six. Caleb Boushley pitched the final three innings to earn the save.`
  },
  {
  id: 'may31',
  date: 'May 31',
  opp: 'St. Louis',
  score: 'L 2-0',
  recap: `Patrick Corbin (3-3, 3.75) vs. Sonny Gray (5-1, 4.06). The Rangers struck out 10 times and managed just four hits and two walks in a 2-0 loss to the Cardinals, with only one baserunner reaching second base. Texas was blanked for the eighth time this season and closed out May with a 12–15 record. Starter Patrick Corbin allowed two runs on three hits and two walks over 5 1/3 innings, but the offense provided no support. St. Louis manufactured a run in the 2nd and added another on a pair of doubles in the 4th. The Rangers remain the only team in MLB yet to come back from a 2-run deficit this season.`
  },
  {
  id: 'jun1',
  date: 'June 1',
  opp: 'St. Louis',
  score: 'W 8-1',
  recap: `Jacob deGrom (4-2, 2.42) vs. Erick Fedde (3-4, 3.90). Eovaldi was placed on the 15-day IL retroactive to May 29. The Rangers secured a series win behind a strong outing from Jacob deGrom and a strong performance from Josh Smith in an 8–1 victory. Smith delivered a 2-out, 2-RBI double in the 2nd and capped the scoring with a 2-run homer in the 8th. He finished the game with 4 RBIs. Texas loaded the bases with no outs in the 7th and added a run on a Langford sac fly. They broke it open in the 8th with a 5-run inning that included a Jung single, a Burger double, Heim’s sac fly, a Semien walk, a Haggerty sacrifice bunt, and Smith’s blast. deGrom went 6 innings, allowing 1 run on 4 hits and 3 walks while striking out 4. Armstrong, Milner, and Jackson closed it out with three shutout innings. Semien reached base 10 times in 11 plate appearances in the series. Rangers’ starters have now allowed 3 or fewer runs in 54 of the team’s first 60 games.`
  },
  {
  id: 'jun3',
  date: 'June 3',
  opp: 'at Tampa Bay',
  score: 'L 5-1',
  recap: `Tyler Mahle (5-2, 1.64) vs. Drew Rasmussen (4-4, 2.33). The Rangers managed just one run on four hits while striking out 12 times—seven of them looking. Tampa Bay took the lead in the 2nd inning on a 328-foot home run down the left field line—the shortest homer in MLB this season. Tyler Mahle ran into trouble in the 6th, loading the bases with one out on a single and two walks. He was relieved by Jacob Latz, who allowed all three inherited runners to score. Texas scored its lone run in the 7th, stringing together a Garcia single, a walk to Semien, and a run-scoring single from Jake Burger. Mahle’s final line: 5.1 IP, 5 H, 4 ER, 2 BB, 5 K.`
  },
  {
  id: 'jun4',
  date: 'June 4',
  opp: 'at Tampa Bay',
  score: 'L 5-4',
  recap: `Kumar Rocker (1-3, 8.10) vs. Shane Baz (4-3, 4.92). In his first start off the IL, Kumar Rocker gave up a solo homer to the second Rays batter and ran into more trouble in the third, allowing four runs on a walk, three singles, and two doubles. He exited after 3 1/3 innings, having allowed five runs on six hits and two walks with five strikeouts. The Rangers fought back in the fifth. Jonah Heim followed an Adolis García single with a 341-foot homer to left, and Josh Smith and Wyatt Langford added back-to-back hits to cut the deficit to 5–3. Texas’ bullpen kept the game close with 4 2/3 scoreless innings. In the ninth, Smith reached on an error, advanced on defensive indifference, and scored on Langford’s single to make it 5–4. But Corey Seager grounded out to second, ending the comeback attempt.`
  },
  {
  id: 'jun5',
  date: 'June 5',
  opp: 'at Tampa Bay',
  score: 'L 4-3',
  recap: `Jack Leiter (4-2, 3.66) vs. Ryan Pepiot (3-5, 3.21). Jack Leiter allowed just one run over five strong innings, striking out seven and leaving with a 2-1 lead. After giving up a solo homer in the 2nd, Jake Burger answered with a 442-foot blast in the 3rd to tie it. Marcus Semien homered twice—once in the 5th to put Texas ahead and again in the 7th to extend the lead to 3-1. The bullpen held strong as Milner, Armstrong, and Latz combined for three perfect innings. But in the 9th, Robert Garcia couldn’t close the door. A single, a walk, and another single cut the lead to 3-2. With two outs and runners on first and second, Christopher Morel grounded hard to Jung at third. Jung initially looked to second and then threw late to first to load the bases. Taylor Walls bounced one to second. Josh Smith went wide taking himself out of the play and the hitter beat Garcia to 1B. Aranda scored from third and Caminero scored from second to give the Rangers a walk-off loss.`
  },
  {
  id: 'jun6',
  date: 'June 6',
  opp: 'at Washington',
  score: 'L 2-0',
  recap: `Patrick Corbin (3-4, 3.71) vs. Michael Soroka (2-5, 5.81). Despite facing a Nationals pitching staff with the 26th best ERA in MLB, the Rangers managed just two hits and a walk in nine innings. Only one Texas batter reached second base as they were shut out for the ninth time this season. Patrick Corbin took the loss despite throwing an 8-inning complete game, allowing 2 runs on five hits, no walks, and striking out two.`
  },
  {
  id: 'jun7',
  date: 'June 7',
  opp: 'at Washington',
  score: 'W 5-0',
  recap: `Jacob deGrom (5-2, 2.34) vs. Mitchell Parker (4-5, 4.71). The Rangers jumped out early with two runs in the first inning on singles by Haggerty, Jung, and Semien, aided by a centerfield error. After that, the offense went quiet—14 straight batters were retired until the 6th when Haggerty singled. Three walks loaded the bases for Texas in the 7th, but Josh Smith’s shallow flyout ended the threat. Texas broke through in the 8th. Haggerty and Langford singled before Semien laced a 2-run double. Garcia added insurance with a 2-out bloop single to plate Semien. Jacob deGrom was brilliant, tossing 7 shutout innings with just 2 hits, no walks, a hit batter, and 8 strikeouts.`
  },
  {
  id: 'jun8',
  date: 'June 8',
  opp: 'at Washington',
  score: 'W 4-2',
  recap: `Jacob Latz (0-0, 2.95) vs. Trevor Williams (3-6, 6.03). The Rangers went with a bullpen game to give Tyler Mahle extra rest, and the strategy paid off. The combination of Latz, Webb, Milner, Armstrong, and Garcia allowed just two runs on six hits and two walks while striking out 11. Evan Carter opened the scoring with a 382-foot homer to right-center in the second following a Marcus Semien single. The Nationals tied it with two runs in the fourth, but Texas regained the lead in the fifth on a Semien groundout after loading the bases. Despite going 0-for-11 with runners in scoring position and stranding the bases loaded in the sixth, the Rangers added insurance in the eighth with a 385-foot solo homer from Jake Burger.`
  },
  {
  id: 'jun10',
  date: 'June 10',
  opp: 'at Minnesota',
  score: 'W 16-4',
  recap: `Tyler Mahle (5-3, 2.02) vs. Simeon Woods Richardson (2-2, 5.02). The Rangers erupted for a season-high 16 runs on 17 hits, four walks, and three Twins errors in a rare offensive outburst. Every Ranger in the starting lineup recorded at least one hit. Evan Carter and Wyatt Langford both homered, while Kyle Higashioka led the way with five RBIs. Carter paced the offense with three hits and a walk. Tyler Mahle earned the win despite allowing four runs on ten hits and a walk over 5-2/3 innings. The bullpen trio of Armstrong, Winn, and Boushley combined for 3-1/3 scoreless innings to close out the rout.`
  },
  {
  id: 'jun11',
  date: 'June 11',
  opp: 'at Minnesota',
  score: 'L 6-2',
  recap: `Jack Leiter (4-2, 3.48) vs. David Festa (0-1, 5.40). Marcus Semien opened the scoring with a leadoff homer in the second, and the Rangers added another run in the third on back-to-back doubles by Jonah Heim and Josh Smith. But the offense stalled again, going just 1-for-9 with runners in scoring position. Byron Buxton's 3-run, 479-foot blast in the bottom of the third turned the game around. Jack Leiter struggled with command, allowing four runs on five hits and four walks over four innings. Jacob Latz was tagged for two more runs in the fifth. Despite chances late, the Rangers stranded runners in scoring position in the 7th, 8th, and 9th innings, sealing the loss.`
  },
]

let html = '';
  
    schedule.forEach((element) => {
      newHTML = 
      `<div class = "card" id = "${element.id}">
        <h3 class = "date">
          ${element.date}
        </h3>
        <h4 class = "opp">
          ${element.opp}
        </h4>
        <h4 class = "score">
          ${element.score}
        </h4>
        <p>
          ${element.recap}
        </p>
        <image src = "logos/rangers.gif" width="30px" height="30px" class = "motherpigSMALL">
      </div>\n`
      html += newHTML
    });
  
    document.querySelector('.container').innerHTML = html;