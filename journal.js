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
  recap: `Patrick Corbin (0-0, 0.00) vs. Jameson Taillon (1-1, 6.35). Corbin was called up from Round Rock to replace the injured Jack Leiter and gave the Rangers four innings in his debut, allowing three runs on five hits and two walks. Texas jumped ahead in the second on Jonah Heim’s two-run single, but squandered a chance for more when Leody Taveras and Marcus Semien failed to bring Josh Jung home from third. The Cubs answered with three in the bottom half before Wyatt Langford tied it in the third with a 407-foot solo homer to left. Jacob Webb struggled in the fifth, allowing three straight singles—all of whom came around to score, putting Chicago up 6–3. The Rangers chipped away—Jung doubled and Taveras tripled in the seventh to make it 6–5. In the eighth, Josh Smith singled with two outs, and Jung followed with an RBI triple to tie the game. But Heim stranded the go-ahead run at third. In the bottom of the inning, a misplayed fly ball by Taveras resulted in a two-base error. After an intentional walk and a Jung error on a potential double-play ball, Dansby Swanson delivered the decisive blow with a two-run double, giving the Cubs an 8–6 win.`
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
  recap: `The Rangers won in walk-off fashion in the 9th on a 2-run HR by Adolis Garcia. The pitching match-up was Nathan Eovaldi (1-2, 2.55) vs. Roki Sasaki (0-1, 3.29). Higashioka started the scoring in the 3rd with a 381-foot HR to LF following a walk to Dustin Harris. Freddie Freeman answered in the 4th with a 404-foot HR to RF after a Mookie Betts single. The Dodgers scored a third run in the inning on a Conforto single and a Max Muncy double. It was another quality start for Eovaldi who gave up 3 runs on 5 hits, no walks, and 7 strikeouts over 6 innings. Robert Garcia and Jacob Webb pitched 3 shutout innings to keep the score 3-2. In the bottom of the ninth, Smith doubled down the LF line, and on a 1-1 count, Adolis Garcia homered 394-feet to LF for the win.`
  },
  {
  id: 'apr20',
  date: 'April 20',
  opp: 'LA Dodgers',
  score: 'L 1-0',
  recap: `The starting pitchers in the rubber game between the 2 most recent World Series champions were Tyler Mahle (3-0, 0.92) vs. Tyler Glasnow (1-0, 4.85). Glasnow cruised through the Rangers' lineup for 4 innings giving up no runs on 3 hits, but left the game with a leg injury after throwing one pitch in the 5th inning. The Rangers' lineup fared no better against the Dodger bullpen. Josh Smith had 3 singles in the game, but the only other hit through 8 innings was a single by Heim. Tyler Mahle continued his dominance with 7 shutout innings giving up no runs on a couple of hits and 3 walks. The Rangers' bullpen faltered as Chris Martin gave up the first run of the game in the 8th. In the Ranger half of the 8th, Semien advanced to 2B with 1 out after reaching on a walk, but Smith and Garcia struck out. Langford in his 1st game back after 10 days on the IL singled to start the 9th. Pillar popped out, Jung lined out to LF, and Langford was caught stealing 2B to end the game.`
  },
  {
  id: 'apr22',
  date: 'April 22',
  opp: 'at Athletics',
  score: 'W 8-5',
  recap: `Patrick Corbin (1-0, 3.86 vs. Osvaldo Bido (2-1, 2.61). The Rangers entered the game tied with the Royals for fewest runs scored in MLB at 67. For the first time this season, Bochy made significant changes to the batting order taking Semien out of the leadoff spot and replacing him with hot-hitting Josh Smith and his .452 OBP. Langford batted 2nd followed by Seager, Garcia, and Semien. The new batting order paid dividends immediately as both Smith and Langford reached base to start the game. A Garcia double followed by a Semien sac fly gave the Rangers a 2-0 lead. Langford homered 403-feet to LF in the 3rd to make it 3-1. Smith homered to RF to lead off the 5th and two batters later, singles by Seager and Garcia followed by a 417-foot Semien HR to CF extended the lead to 7-2. It was the first time the Rangers scored more than 6 runs. The Rangers' 4th HR of the game came in the 6th as Burger went deep 417-feet to CF to make it 8-2. Patrick Corbin pitched 5 innings, giving up 2 runs on 7 hits and 2 walks to get the win. Jacob Webb was tagged with 2 HR's in the 8th. Luke Jackson pitched the 9th and got his 7th save. Corey Seager left the game after his 6th inning at-bat with hamstring tightness.`
  },
  {
  id: 'apr23',
  date: 'April 23',
  opp: 'at Athletics',
  score: 'L 5-2',
  recap: `Kumar Rocker (1-2, 6.38) vs. JP Sears (2-2, 3.13). J.P. Sears beat the Rangers 3 times in 2024. Rocker had a dreadful 1st inning giving up 4 runs on 6 hits. The Rangers' managed 7 hits against 4 A's pitchers and struck out 11 times. Langford hit a solo HR in the 4th and the Rangers manufactured a run in the 6th after a single by Pillar and a walk to Langford. Joc Pederson ended an 0-for-41 slump with a 9th-inning double. Corey Seager was placed on the 10-day IL with hamstring soreness.`
  },
  {
  id: 'apr24',
  date: 'April 24',
  opp: 'at Athletics',
  score: 'L 4-3',
  recap: `Jacob deGrom (0-1, 3.32) vs. J.T. Ginn (1-1, 3.69). The Rangers entered the 9th with a 3-2 lead. Max Schuemann walked and scored from first on a single by Luis Urias when Taveras booted it in CF. After a flyout to LF, Jacob Wilson singled and the A's had the walk-off win and Luke Jackson was charged with a blown save. The Rangers wasted an opportunity in the 1st when Langford doubled with one out, but Garcia struck out on ball four and Jung popped out to end the inning. The A's scored 2 in the 3rd when Langford lost an easy fly ball in the lights to put runners on 2nd and 3rd with 1 out. After a ground out that should have ended the inning, Soderstrom doubled to score both runners. The Rangers' runs came in the 4th on HRs by Jung, Heim, and Taveras. Later in the inning the Rangers loaded the bases with 2 outs, but Garcia grounded out to 3B to end the threat. The Rangers managed only one baserunner after the 4th inning. Kumar Rocker was placed on the 15-day IL with a "mild shoulder impingement".`
  },
  {
  id: 'apr25',
  date: 'April 25',
  opp: 'at San Francisco',
  score: 'W 2-0',
  recap: `Nathan Eovaldi (1-2, 2.64) vs. Justin Verlander (0-1, 5.47). Eovaldi was masterful again through his 6 innings allowing no runs on 3 hits and a walk with 7 K's. Dustin Harris in CF and Josh Jung at 3B made nice defensive plays behind Eovaldi. The trio of Martin, Garcia, and Jackson held the Giants scoreless the rest of the way on 1 hit with no walks and 7 K's. The Rangers managed 7 hits, 3 by Langford. Langford doubled in the team's 1st run in the 3rd when he followed a Jake Burger leadoff double. In the 6th Pederson batted in the team's 2nd run when he singled following a Smith single and a Langford double. Luke Jackson recorded his 8th save.`
  },
  {
  id: 'apr26',
  date: 'April 26',
  opp: 'at San Francisco',
  score: 'L 3-2',
  recap: `Tyler Mahle (3-0, 0.68) vs. Robbie Ray (3-0, 4.07). Coming into the game, Ray had walked 17 batters over 19 innings in his last 4 starts, but the Rangers only walked once in his 7 innings. A pair of sac flies by Burger gave the Rangers a 2-0 lead after 3. In the 5th Mahle gave up hits to the 8th and 9th-place hitters, both of whom scored on a single by Willy Adames. Mahle's line was 5 innings, 2 runs on 8 hits, a walk, and a strikeout. The Rangers swung and missed 23 times against Ray in his 7 innings. With the score tied at 2, Semien and Heim singled to start the 9th, but Higashioka popped up a bunt attempt for the first out, and Smith and Pederson struck out on pitches out of the zone. In the bottom of the 9th, the first 2 Giants reached against Jacob Webb. Christian Koss executed a perfect sac bunt to move the runners and Patrick Bailey singled on the first pitch from Jacob Latz for the walkoff win.`
  },
  {
  id: 'apr27',
  date: 'April 27',
  opp: 'at San Francisco',
  score: 'L 3-2',
  recap: `Jack Leiter (2-0, 0.90) vs. Jordan Hicks (1-3, 6.59). This was Leiter's 1st start coming off the 15-day IL. With the score 2-2 in the bottom of the 9th, the Giants' Heliot Ramos tapped one to the left of the mound. Luke Jackson threw wild to 1B and Jake Burger retrieved the ball and threw wild to 3B allowing Ramos to round the bases for the walkoff win. In the 1st inning after doubles down the 3B line by Burger and Pederson, Semien blooped a Texas Leaguer behind SS to score them both. A single and 3 walks in the 1st inning gave the Giants their first run. Ramos scored to tie the game in the 4th after leading off with a single. Leiter's line was 2 runs on 2 hits and 4 walks with 3 K's in 3-1/3 innings. Pederson led off the 6th with a triple to deep CF, but Garcia chased 3 pitches out of the zone to strike out, Semien grounded out, and Ahmed popped out to strand him. The Rangers' bullpen pitched 4-2/3 shutout innings but the Rangers were 2 for 10 with RISP. The team fell out of 1st place for the first time since April 14.`
  },
  {
  id: 'apr28',
  date: 'April 28',
  opp: 'Athletics',
  score: 'L 2-1',
  recap: `Patrick Corbin (2-0, 3.77) vs. J.P. Sears (3-2, 3.21). Bochy shuffled the batting order: Pillar, Higashioka, Langford, Heim, Semien, Jung, Garcia, Burger, and Smith. The lead-off batter for the Athletics reached in each of the first 5 innings but Corbin pitched out of trouble until the 5th when the A's broke through for 2 runs. Corbin's line over 4-2/3 innings: 2 runs on 7 hits, a walk and 5 K's. The bullpen held the A's scoreless the rest of the way, but 2 runs were all the A's needed. The Rangers scored in the 6th on a Higashioka double and a Heim single. The Rangers added 2 more baserunners in the inning but Garcia popped up in the infield to leave them loaded. Semien led off the 9th with a single and moved to 2B on a Jung groundout, but Garcia struck out and Dustin Harris grounded out giving J.P. Sears his 5th straight win over the Rangers. The Rangers were 1-for-7 with runners in scoring position.`
  },
  {
  id: 'apr29',
  date: 'April 29',
  opp: 'Athletics',
  score: 'W 15-2',
  recap: `Jacob deGrom (0-1, 3.33) vs. Jacob Lopez (0-0, 0.00) Lopez was a Triple-A call-up to spot start for the injured J.T. Ginn. It was a great game for the hitters who feasted off Lopez and what Jared Sandler referred to as "the underbelly of the A's bullpen". The Ranger hitters combined for 18 hits and 9 walks including an 8-run 6th inning. deGrom cruised through 6 shutout innings on 65 pitches, 4 hits, 7 K's and no walks. Dane Dunning pitched the final 3 innings in his first appearance of the season after being called up from Round Rock.`
  },
  {
  id: 'apr30',
  date: 'April 30',
  opp: 'Athletics',
  score: 'L 7-1',
  recap: `Nathan Eovaldi (2-2, 2.21) vs. Luis Severino (1-3, 3.49). The Rangers wasted another quality start by Eovaldi who gave up a run in 6 innings on 6 hits, no walks, and 8 K's. The lineup generated plenty of scoring opportunities but went 1-for-11 with RISP. The first 2 hitters reached in the 3rd, 6th, and 8th but failed to score. Burger hitting in the 3-spot struck out 4 times leaving 5 runners on base, and Langford in the leadoff spot went 0-for-5 stranding 6 runners. The A's exploded for 6 runs in the 9th on a pair of homers against the trio of Garcia, Jackson, and Armstrong. At the end of April the Rangers have the 6th best ERA in MLB and the offense is ranked 27th in runs scored.`
  },
  {
  id: 'may1',
  date: 'May 1',
  opp: 'Athletics',
  score: 'L 3-0',
  recap: `Tyler Mahle (3-0, 1.23) vs. Jeffrey Springs (3-3, 5.18). It was another quality start for Mahle who pitched 6 innings giving up a run on 5 hits and a walk, striking out 6. In Springs' previous start he gave up 7 runs to the 8-23 White Sox. Opponents were hitting .432 against Springs' fastball, but the Rangers' lineup could manage only 2 singles over 6 innings. The Rangers were 0-for-4 with RISP and have now lost 5 of 7 against the Athletics. After the game Jake Burger was sent down to Round Rock and Blaine Crimm (.313/.365/.565) was called up.`
  },
  {
  id: 'may2',
  date: 'May 2',
  opp: 'Seattle',
  score: 'L 13-1',
  recap: `Jack Leiter (2-0, 2.03) vs. Bryan Woo (3-1, 3.09). A solo HR by Cal Raleigh in the 4th and a grand slam in the 5th gave the Mariners more runs than they would need against the anemic Rangers' offense. Woo pitched 6 innings, retiring the first 14 hitters he faced until Heim singled harmlessly in the 5th. Mariners' pitching retired the next 12 hitters until Smith homered to right with 2 outs in the ninth followed by a Langford single. The Smith HR ended a streak of 281 Ranger AB's without a HR. The Rangers' record fell below .500 for the first time since their opening day loss. Blaine Crim went 0-for 3 with 2 K's in his MLB debut.`
  },
  {
  id: 'may3',
  date: 'May 3',
  opp: 'Seattle',
  score: 'L 2-1',
  recap: `Patrick Corbin (2-1, 3.79) vs. Luis Castillo (3-2, 3.62). It was Seager's 1st game back from the 10-day IL. J.P. Crawford homered on Corbin's 1st pitch of the game 369-feet to RF. The Rangers answered in the 5th when Seager led off with a single and Heim scored him on a 2-out RBI-single. Corbin retired 12 in a row at one point and left after 5-2/3, giving up a run on 5 hits and 2 walks with 2 K's. Chris Martin pitched the 9th and gave up a leadoff double to the hot-hitting Polanco who scored on an RBI-single by Telez. In the bottom of the 9th Semien walked with 1 out and Heim moved him to 2nd on a ground-out to 1B. Garcia struck out on a slider low and outside to end the game. 1 run on 5 hits for the Rangers who now have lost 4 straight and 9 of 11.`
  },
  {
  id: 'may4',
  date: 'May 4',
  opp: 'Seattle',
  score: 'W 8-1',
  recap: `Jacob deGrom (1-1, 2.73) vs. Logan Evans (1-0, 3.60) making his 2nd MLB start. Seager started the Rangers' scoring in the 3rd with a clutch bases-loaded single scoring 2. After Pederson lined out for the 2nd out, Semien, Garcia, and Jung all had 2-out RBIs. The Rangers sent 11 to the plate in the inning scoring 6 runs on 6 singles and 2 walks. deGrom was solid again pitching 5 innings allowing a run on 3 hits and 2 walks with 3 K's. The bullpen shutout the Mariners over the last 4 innings allowing only 2 baserunners. Josh Smith had 4 of the Rangers' 12 hits including a triple in the 8th that scored Jung.`
  },
  {
  id: 'may6',
  date: 'May 6',
  opp: 'at Boston',
  score: 'W 6-1',
  recap: `Nathan Eovaldi (2-2, 2.11) vs. Lucas Giolito (0-0, 4.50) making his 2nd start in 2025. Leody Taveras was claimed off waivers by Seattle. The Rangers scored 5 in the 4th on doubles by Seager and Pederson, and singles by Semien, Carter, Heim, Smith, and Langford. It was another great start for Eovaldi: 6 innings, a run on 5 hits, a walk, and 7 K's. The bullpen of Armstrong, Garcia, and Martin pitched 3 shutout innings allowing 1 baserunner. The Rangers had 16 base hits including 3 singles and a walk by Josh Smith, and 3 singles, a walk, and a sac fly by Adolis Garcia. Evan Carter went 2-for-5 in his 1st start of 2025 with 1 of his hits coming against a LHP.`
  },
  {
  id: 'may7',
  date: 'May 7',
  opp: 'at Boston',
  score: 'L 6-4',
  recap: `Tyler Mahle (3-1, 1.19) vs. Tanner Houck (0-2, 6.38). Milner, Webb, Garcia, and Boushley turned a 3-2 lead into a 6-3 deficit. Mahle's line was 2 runs on 4 hits over 5 innings with a walk and no K's. Wilyer Abreu and Alex Bregman did most of the damage for Boston. Aroldis Chapman pitched the 9th and Jung homered on the first pitch of the inning. After a Langford walk, Seager and Crim batted as the tying run, but Seager flew out to the warning track and Crim struck out to end the game. The Rangers went 0-for-10 with RISP. Semien went hitless and stranded 6 baserunners. Garcia homered in the 4th ending a string of 14 games for the Rangers without a HR. Pederson had a single, a double, and a walk in 3 plate appearances. Evan Carter went 0-for-4 in his 2nd game back.`
  },
  {
  id: 'may8',
  date: 'May 8',
  opp: 'at Boston',
  score: 'L 5-0',
  recap: `Jack Leiter (2-1, 2.58) vs. Brayan Bello (2-0, 2.50). The Rangers were shutout on 5 hits, 6 walks, and a HBP. Five of the walks came in the first 4-2/3 innings but the Rangers couldn't capitalize as they were 0-for-7 in the game with RISP. Langford and Semien each stranded 5 baserunners. Leiter pitched 5-1/3 and was charged with 4 runs on 3 hits, 4 walks, and a hit batter, striking out 3. Tucker Barnhart had 3 of the Rangers' 5 hits.`
  },
  {
  id: 'may9',
  date: 'May 9',
  opp: 'at Detroit',
  score: 'L 2-1',
  recap: `Patrick Corbin (2-1, 3.28) vs. Tarik Skubal (3-2, 2.21). 32 swings and misses over 7 innings against Skubal who retired the first 15 batters he faced. 2 singles and a hit batter produced the Rangers' run in the 6th. Corbin's line was 2 runs on 3 hits and 4 walks with 3 K's. The Rangers managed a 3rd base hit in the 8th, but went quietly in the 9th.`
  },
  {
  id: 'may10',
  date: 'May 10',
  opp: 'at Detroit',
  score: 'W 10-3',
  recap: `Jacob deGrom (2-1, 2.61) vs. Jack Flaherty (1-4, 3.79) who came into the game having lost his last 4 starts. The Rangers slugged 5 HR's to RF and none of them was cheap. Smith homered 389-feet to start the game and two batters later Seager homered 403-feet. Carter led off the 2nd by going deep 390-feet. Pederson homered 401-feet in the 4th and Seager 393-feet in the 7th. Meanwhile deGrom struck out 10 in his 5 innings of work, giving up 2 runs on 5 hits and a walk. Milner, Armstrong, and Jackson gave up a run in 4 innings of relief. Rangers' pitchers struck out 13 Tigers' hitters.`
  },
  {
  id: 'may11',
  date: 'May 11',
  opp: 'at Detroit',
  score: 'W 6-1',
  recap: `Nathan Eovaldi (3-2, 2.03) vs. Reese Olson (4-2, 3.03). The Tigers came into the series averaging 5.47 runs per game, but Rangers' pitchers held them to 6 runs in the entire series. Eovaldi's line was 2 hits and a walk in 7 innings with 7 K's. The offense was primarily long ball again today. Semien and Jung hit 2-run blasts in the 2nd and 5th, and Heim hit a solo HR in the 8th. Carter had an RBI single in the 3rd. Langford left bases loaded in the 2nd on one of the hardest-hit balls of the game at 107 mph. In the last 2 games of the series, 7 different Rangers hit HR's. After retiring the 1st batter in the 9th, Jacob Latz loaded the bases on 2 singles and a walk. Robert Garcia came in for Latz and gave up a sac fly for the 2nd out and a fly ball to right for the final out to secure the win.`
  },
  {
  id: 'may12',
  date: 'May 12',
  opp: 'Colorado',
  score: 'W 2-1',
  recap: `Tyler Mahle (3-1, 1.48) vs. Chase Dollander (2-3, 7.71). No Rockies' starter had pitched as many as 4 hitless innings all season, but the Rangers' first hit came with 2 outs in the 6th when Langford homered 412-feet to RF to give the Rangers the lead. Mahle pitched 6-1/3 innings giving up a run on 4 hits and a walk with 5 K's. Garcia and Martin pitched 1-2/3 innings of no-hit relief to get to the 9th with the lead. Ryan McMahon started the 9th with a single up the middle that struck and injured Luke Jackson. Jacob Webb loaded the bases with one out but got a double-play ball to end the game and record his 1st save.`
  },
  {
  id: 'may13',
  date: 'May 13',
  opp: 'Colorado',
  score: 'W 4-1',
  recap: `Jack Leiter (2-2, 5.09) vs. Kyle Freeland (0-5, 6.41). Seager was placed on the 10-day IL retroactive to Sunday May 11. After Colorado scored in the 1st, the Rangers started the game with 2 singles and a 396-foot HR to RF by Jung. Leiter's line was a run on 2 hits and 3 walks with 5 K's over 6 innings. Milner pitched a scoreless 7th and 8th. Jung homered again in the 8th 392-feet to LF. The first 2 Rockies in the 9th reached on base hits off Milner and Martin but Shawn Armstrong struck out the next 3 hitters for his first save.`
  },
  {
  id: 'may14',
  date: 'May 14',
  opp: 'Colorado',
  score: 'W 8-3',
  recap: `Patrick Corbin (2-2, 3.13) vs. Antonio Senzatela (1-6, 5.77). The Rangers scored 4 in the 1st when the first 6 hitters reached base on 4 singles, a walk, and a 2-run 368-foot HR to RF by Langford. Burger plated 2 more in the 5th on a 2-out, 2-RBI double. Garcia homered 394-feet to right in the 6th following a walk to Pederson. Corbin pitched 6 innings giving up 3 runs on 4 hits, a walk, and a hit-batter, striking out 9. Boushley pitched a scoreless 2-1/3 but gave up 2 singles in the 9th. Garcia got the last 2 outs to end the game and get the sweep. In the series the Rangers were 3-for-20 with RISP.`
  },
  {
  id: 'may15',
  date: 'May 15',
  opp: 'Houston',
  score: 'W 1-0',
  recap: `Jacob deGrom (3-1, 2.72) vs. Hunter Brown (6-1, 1.48). The Rangers managed only 3 hits in 8 innings off Hunter Brown but one of them was a Jake Burger 394-foot HR to RF to lead off the 6th. 3 sensational plays in the outfield by Garcia and 1 by Carter kept Houston off the scoreboard through deGrom's 8 innings. deGrom's line was 5 hits, a walk, and 7 K's. The first baserunner for the Rangers didn't come until the 5th when Garcia led off with a double. Semien and Jung struck out and Carter popped out to leave him at 2B. The Rangers' third hit was a Jake Burger single in the 8th. Shawn Armstrong issued a 2-out walk in the 9th but retired Dezenzo on an infield pop-up to earn the save.`
  },
  {
  id: 'may16',
  date: 'May 16',
  opp: 'Houston',
  score: 'L 6-3',
  recap: `Nathan Eovaldi (4-2, 1.78) vs. Lance McCullers (0-1, 15.75). Heim started the scoring in the 2nd with a 2-out, 2-RBI single after a single by Jung and an Astros error. The Rangers left RISP in the 3rd and 4th and then the bats went dormant as the Astros bullpen retired 15 in a row until Jung homered in the 9th. Eovaldi's line was 5-2/3 shutout innings, 2 hits, 3 walks, and 5 K's. Milner and Armstrong imploded in the 7th as 7 consecutive Astros reached base with 2 outs, giving up 6 runs including a Christian Walker 3-run HR.`
  },
  {
  id: 'may17',
  date: 'May 17',
  opp: 'Houston',
  score: 'W 5-1',
  recap: `Tyler Mahle (4-1, 1.47) vs. Ronel Blanco (3-3, 4.04). After the Astros scored in the 1st, the Rangers answered in the 3rd with 2 hits, 2 walks, and an Astros error. Semien had a chance to break the game open, but grounded out weakly with bases loaded. Burger doubled in the 4th, but Higashioka and Haggerty left him at 2B. The Rangers finally broke the tie in the 6th on a Joc Pederson 409-foot, 2-run HR, and Langford homered 431-feet in the 7th. The Rangers had a chance to put the game out of reach by loading the bases with 1 out in the 8th, but Haggerty popped out and Smith struck out to strand the runners. Mahle pitched 6 innings allowing a run on 5 hits and 2 walks with 3 K's. Webb, Martin, and Garcia no-hit the Astros over the final 3 innings.`
  },
  {
  id: 'may18',
  date: 'May 18',
  opp: 'Houston',
  score: 'L 4-3',
  recap: `Jack Leiter (3-2, 4.34) vs. Framber Valdez (2-4, 3.54). Evan Carter was placed on the 10-day IL with a right quad strain retroactive to yesterday May 17. Leiter had a no-hitter through 6-2/3 innings and a 3-0 lead, but Yainer Diaz homered in the 7th to cut the lead to 3-1. The first 2 Astros reached in the 8th on bloop singles, and Leiter was replaced by Robert Garcia. Garcia retired the next 2 batters, but Isaac Paredes homered 351-feet down the LF line to give tha Astros a 4-3 lead. The Rangers scored their runs in the 4th on 4 singles, a walk, and a sac fly. In the 7th Jonah Heim committed a baserunning blunder as he was thrown out at 3B trying to advance on a grounder to the left side of the infield. Duran then singled Pillar to 3B and Haggerty grounded out to end the inning. Heim stranded Garcia at 2B in the 8th when he flew out 389-feet to the warning track.`
  },
  {
  id: 'may20',
  date: 'May 20',
  opp: 'at New York Yankees',
  score: 'L 5-2',
  recap: `Patrick Corbin (3-2, 3.35) vs. Will Warren (2-2, 4.61). Chris Martin was placed on the 15-day IL with right shoulder fatigue retroactive to yesterday May 19. Apparently the game plan was to take the strikes and swing at the balls. The Rangers struck out 14 times. Heim doubled in the 5th and Haggerty struck out. The Rangers loaded the bases in the 6th and Semien and Pederson struck out. Langford doubled and advanced to 3B on a wild pitch and Jung and Garcia struck out. Pederson walked in the 9th and Heim homered to avoid the shutout. Corbin's line was 5 innings, 3 runs, 5 hits, and 2 walks.`
  },
  {
  id: 'may21',
  date: 'May 21',
  opp: 'at New York Yankees',
  score: 'L 4-3',
  recap: `Jacob deGrom (4-1, 2.29) vs. Will Yarbrough (1-0, 3.70). The Rangers outhit the Yankees 10-5 including 3 HR's, but could not get the clutch bases-loaded hit in either the 6th or the 8th. Barnhart left them loaded in the 6th and Smith in the 8th. Burger homered 390-feet in the 5th and 367-feet in the 7th. Three batters later in the 7th, Haggerty homered 390-feet to RF. deGrom retired 15 in a row after giving up a run in the 2nd. His line was 7 innings, 2 runs on 3 hits and a walk with 9 K's. After Robert Garcia walked 2 batters in the 8th, Aaron Judge singled off Luke Jackson to tie the game at 3. In the 9th Jackson surrendered a 372-foot HR to RF for the walk-off loss.`
  },
  {
  id: 'may22',
  date: 'May 22',
  opp: 'at New York Yankees',
  score: 'L 1-0',
  recap: `Nathan Eovaldi (4-2, 1.61) vs. Carlos Rodon (5-3, 3.17). The Rangers embarrassed themselves again as they struck out 12 times and managed only 4 hits against 4 Yankee pitchers. Eovaldi had another strong start throwing 6 innings, allowing a run on 5 hits and a walk with 6 K's. Milner and Armstrong pitched a hitless 2 innings in relief. Their best opportunity was in the 7th when Semien led off with a single and moved to 2B on a WP. Heim struck out, Garcia grounded out, and Smith struck out to strand him at 3B. Langford reached 2B in the 6th with 1 out but Jung and Burger struck out to end the inning. The Rangers were 1-for-7 with RISP. It was the 6th time the Rangers have been shutout. `
  },
  {
  id: 'may23',
  date: 'May 23',
  opp: 'at Chicago White Sox',
  score: 'L 4-1',
  recap: `Tyler Mahle (5-1, 1.47) vs. Sean Burke (2-5, 4.69). Bochy moved Garcia to the 8th spot in the lineup and Semien, who has batted 5th since April 28, to the 9th spot. Mahle had a bad 3rd inning in which he gave up 3 runs on 3 singles, 2 walks, and a sac fly. One of the walks came with the bases loaded. After stranding a runner at 2B twice in the first 4 innings, the Rangers finally scored a run in the 6th on a Burger double with Jung being thrown out at the plate to end the inning. The Rangers finished the gane with 3 hits and were 1-for-4 with RISP.`
  },
  {
  id: 'may24',
  date: 'May 24',
  opp: 'at Chicago White Sox',
  score: 'L 10-5',
  recap: `Jack Leiter (3-2, 4.25) vs. Bryse Wilson (0-2, 6.00). For the first time in a week the Rangers scored more than 3 runs. Leiter allowed many baserunners in his 5 innings but pitched out of trouble multiple times and left with a 4-2 lead. The Chicago 6th started with Langford and Haggerty colliding at the wall allowing a triple on what should have been the first out. Jung then misplayed a grounder on what should have been the 2nd out. Then Semien missed a tag of the runner and threw late to 1B for what should have been the 3rd out. The White Sox went on to have a 6-run inning with Jacob Webb allowing a single, 2 BB's, and 2 doubles. Rangers' pitching gave up 14 hits and 8 BB's.`
  },
  {
  id: 'may25',
  date: 'May 25',
  opp: 'at Chicago White Sox',
  score: 'W 5-4',
  recap: `Patrick Corbin (3-3, 3.59) vs. Davis Martin (2-5, 3.49). Joc Pederson was placed on the 10-day IL with a fractured right hand after being hit by a pitch in yesterday's game. Alejandro Osuna made his MLB debut in LF. Trailing 3-2 in the 9th, Burger doubled after Jung was hit by a pitch. Osuna struck out and Higashioka reached on an error scoring Jung with the tying run. Adolis Garcia followed with a double scoring Burger and Higashioka to take a 5-3 lead. Robert Garcia pitched the 9th. The White Sox scored on a pair of doubles with one out to put the tying run at 2B. Robert Garcia picked the runner off 2B and Osuna caught a flyball on the warning track for the final out to avoid the sweep. Jake Burger put the Rangers on the board in the 2nd with a 423-foot 2-run bomb to left. Corbin's line was 5-1/3 innings, 3 runs on 5 hits and a walk with 6 K's.`
  },
  {
  id: 'may26',
  date: 'May 26',
  opp: 'Toronto',
  score: 'L 2-1',
  recap: `Jacob deGrom (4-1, 2.33) vs. Kevin Gausman (4-4, 4.03). 1 run on 5 hits for Texas. Their lone run came in the 4th on a Langford line-drive homer to LF. The Rangers had an opportunity in the 5th when Heim and Osuna led off with singles. Garcia struck out, Semien flew out to shallow RF, and Haggerty struck out. The Rangers entered the 9th needing a run, but Langford, Jung, and Burger went 3 up and 3 down. deGrom's line was 5-1/3 innings, 2 runs on 5 hits and 2 walks. It was the first start in his career in which he failed to strike out a batter. Osuna had 2 hits in his 2nd MLB game.`
  },
  {
  id: 'may27',
  date: 'May 27',
  opp: 'Toronto',
  score: 'W 2-0',
  recap: `Nathan Eovaldi (4-3, 1.60) vs. Bowden Francis (2-6, 5.54). Bowden Francis has given up more HR's than any pitcher in the AL. Eovaldi left after two shutout innings with right triceps fatigue. Latz, Armstrong, Milner, Jackson, and Garcia pitched 7 shutout innings in relief giving up only 2 hits and 2 walks. The Rangers were shutout on 4 hits through 7 innings. Higashioka singled with one out and Haggerty pinch-ran and stole 2B. After a walk to Langford, Haggerty scored on a Jung 2-out single, and Langford scored on an errant pickoff attempt by the catcher.`
  },
  {
  id: 'may28',
  date: 'May 28',
  opp: 'Toronto',
  score: 'L 2-0',
  recap: `Tyler Mahle (5-2, 1.80) vs. Paxton Schultz (0-0, 2.53). Seager was in the lineup for the first time since May 10. It was a bullpen game for the Blue Jays as reliever Paxton Shultz started and 4 others followed. Josh Smith led off the game with a single and the Rangers didn't get another hit. No runner got to 2B and the Rangers struck out 13 times. Mahle pitched 6 shutout innings on 4 hits, 3 walks, and 5 K's. Bo Bichette homered in the 9th off Jacob Webb and the Rangers were shutout for the 7th time. Seager went 0-for-4 striking out twice.`
  },
  {
  id: 'may30',
  date: 'May 30',
  opp: 'St. Louis',
  score: 'W 11-1',
  recap: `Jack Leiter (3-2, 4.17) vs. Matthew Liberatore (3-3, 2.73). 11 runs on 15 hits for the struggling Rangers' offense. 4 runs scored in the 2nd on singles by Higashioka and Semien, a triple by Haggerty, and a Langford HR. 4 more scored in the 6th on 4 singles and 2 BB's. Semien homered in the 7th to add 2 more. Leiter pitched 5-2/3 innings, no runs on 3 hits and 2 BB's with 6 K's. Caleb Boushley pitched the final 3 innings to get the save. Marcus Semien came into the game batting .173 and went 4-for-4 with a HR. Haggerty reached base 5 times in the leadoff spot.`
  },
  {
  id: 'may31',
  date: 'May 31',
  opp: 'St. Louis',
  score: 'L 2-0',
  recap: `Patrick Corbin (3-3, 3.75) vs. Sonny Gray (5-1, 4.06). The Rangers struck out 10 times and could only manage 4 hits and a couple of walks, with one baserunner reaching 2B. Ranger pitchers only gave up 5 hits, but the Cardinals manufactured a run in the 2nd and scored on 2 doubles in the 4th. Corbin's line was 2 runs on 3 hits and 2 walks with 3 K's in 5-1/3 innings. The Rangers were shutout for the 8th time this season and had a record of 12-15 in the month of May. They are the only team in MLB to not overcome a 2-run deficit all season.`
  },
  {
  id: 'jun1',
  date: 'June 1',
  opp: 'St. Louis',
  score: 'W 8-1',
  recap: `Jacob deGrom (4-2, 2.42) vs. Erick Fedde (3-4, 3.90). Eovaldi was placed on the 15-day IL retroactive to May 29. Josh Smith hit a 2-out, 2-RBI double in the 2nd to give Texas the early lead. They added another in the 7th on a Langford sac fly after loading the bases with no outs. The Rangers broke the game open in the 8th with 5 runs on a Jung single, a double by Burger, a sac fly by Heim, a Semien walk, a sac bunt by Haggerty, and a 2-run HR by Josh Smith. deGrom allowed a run on 4 hits and 3 walks with 4 K's in 6 innings. Armstrong, Milner, and Jackson pitched the final 3 shutout innings to give the Rangers the series win. Semien reached base 10 times in 11 plate appearances in the three games. Rangers' starting pitchers gave up 3 or fewer runs in 54 of the team's first 60 games.`
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
  recap: `Kumar Rocker (1-3, 8.10) vs. Shane Baz (4-3, 4.92). In his first start off the IL, Kumar Rocker gave up a solo homer to the second Rays batter and ran into more trouble in the third, allowing four runs on a walk, three singles, and two doubles. He exited after 3 1/3 innings, having allowed five runs on six hits and two walks with five strikeouts. The Rangers fought back in the fifth. Jonah Heim followed an Adolis García single with a 341-foot homer to left, and Josh Smith and Wyatt Langford added back-to-back hits to cut the deficit to 5–3. Texas’ bullpen kept the game close with 4 2/3 scoreless innings. In the ninth, Smith reached on an error, advanced on defensive indifference, and scored on Langford’s single to make it 5–4. But Corey Seager grounded out softly to second, ending the comeback attempt.`
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