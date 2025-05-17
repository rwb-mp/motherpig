const schedule = [
  {
  id: 'mar27',
  date: 'March 27',
  opp: 'vs Boston',
  score: 'L 5-2',
  recap: `Nathan Eovaldi (0-0, 0.00) vs. Garrett Crochet (0-0, 0.00). Eovaldi outpitched 2024 All-Star Garrett Crochet and left the game in a 2-2 tie after 6 innings. Eovaldi threw 87 pitches, giving up 3 hits and no walks, striking out 9. Newcomers Kevin Pillar and Kyle Higaahioka had the RBIs against Crochet. Rangers' reliever Luke Jackson gave up 3 runs in the 9th on a one-out walk, followed by a single and a HR by rightfielder Wilyer Abreu, his second of the game. The Boston bullpen held the Ranger offense to a pair of singles over the last 4 innings.`
  },
  {
  id: 'mar28',
  date: 'March 28',
  opp: 'vs Boston',
  score: 'W 4-1',
  recap: `Jaxk Leiter (0-0, 0.00) vs. Tanner Houck (0-0, 0.00). Jonah Heim solo-homered twice off All-Star Red Sox starting pitcher Tanner Houck and Jack Leiter notched a quality start, scattering 5 hits and a walk in 5 innings to get his first career win. Wyatt Langford made a nice run-saving catch in LF in the 2nd and Leiter pitched out of trouble in the 3rd and 4th. Boston threatened in the 7th after Marc Church put 2 on, but Hoby Milner pitched out of a bases-loaded-one-out jam. 5 Ranger relievers combined for four shutout innings including Luke Jackson's perfect 9th to get the save.`
  },
  {
  id: 'mar29',
  date: 'March 29',
  opp: 'vs Boston',
  score: 'W 4-3',
  recap: `Tyler Mahle (0-0, 0.00) vs. Walker Buehler (0-0, 0.00). Mahle couldn't find the plate in his first start of the season and didn't survive the 2nd inning as 31 of his 61 pitches were balls. But the Rangers led 2-1 after 2 innings when Red Sox LF Kristian Campbell made what appeared to be a diving catch of a Garcia line drive only to have the ball leave his glove when he hit the ground. The bullpen was excellent as 5 relievers kept the Rangers in the game and Adolis Garcia provided the offense with 3 RBIs on 2 doubles and a HR. The Rangers entered the 9th with a 4-3 lead. Arlington High School graduate Chris Martin pitched a perfect 9th for his first save of the season.`
  },
  {
  id: 'mar30',
  date: 'March 30',
  opp: 'vs Boston',
  score: 'W 3-2',
  recap: `Jacob deGrom (0-0, 0.00) vs. Richard Fitts (0-0, 0.00). deGrom was sharp in his season debut pitching 5 scoreless innings and leaving with a 1-0 lead. Boston took a 2-1 lead in the 6th off reliever Shawn Armstrong on a looping double deep down the left field line and a throwing error by 3B Ezequiel Duran. Boston's rookie starter Richard Fitts had retired 12 straight entering the Rangers' 6th. A 330-foot "wall-scraper" by Wyatt Langford down the RF line tied the game. 2 batters later Adolis Garcia homered 431-feet into the second deck in LF for what proved to be the game winner. Robert Garcia pitched a perfect 7th. Chris Martin stranded Alex Bregman at 3B in the 8th by striking out Kristian Campbell and Connor Wong. Luke Jackson allowed 2 baserunners in the 9th but struckout Alex Bregman with the tying run at 2B for his second save.`
  },
  {
  id: 'mar31',
  date: 'March 31',
  opp: 'at Cincinnati',
  score: 'L 14-3',
  recap: `Kumar Rocker (0-0, 0.00) vs. Brady Singer (0-0, 0.00). The Reds started the game with single, HR, single, double and this one was never in doubt: 6 runs on 7 hits and 2 walks against Rocker in 3 innings. The relievers fared no better, as Gerson Garabito gave up 8 runs, 4 of them earned, on 7 hits and 2 hit-batters in his 2-2/3 innings. Meanwhile the Rangers couldn't hit Brady Singer who was 9-13 last year on a good Royals team. He pitched 7 innings of 1-hit ball, striking out 8. The Rangers managed a pair of runs in the 9th on Jake Burger's 1st HR of the season. Adolis Garcia's batting average is .357 while the remainder of the team is hitting .195.`
  },
  {
  id: 'apr1',
  date: 'April 1',
  opp: 'at Cincinnati',
  score: 'W 1-0',
  recap: `Nathan Eovaldi (0-0, 3.00) vs. Carson Spiers (0-0, 0.00). Eovaldi was brilliant, throwing a complete game 4-hit shutout, striking out 8 and walking none. Carson Spiers was ineffective in 2024 posting an ERA of 5.64 and an opponent batting avg of .297, but the Rangers' lineup needed all of Eovaldi's excellence as Spiers and a trio of Reds relievers held them to a single run on 4 hits. The lone run came in the 1st inning on Wyatt Langford's 361-foot HR to LF, his 2nd of the season. Eovaldi retired Elly De La Cruz on a bouncing ball to 1B to end the game with the tying run at 2nd.`
  },
  {
  id: 'apr2',
  date: 'April 2',
  opp: 'at Cincinnati',
  score: 'W 1-0',
  recap: `Jack Leiter (1-0, 1.80) vs. Hunter Greene (0-0, 3.60). The Rangers managed a run off Greene in the 4th on a Joc Pederson single and a 2-out double by Josh Smith on a 100-mph fastball. Leiter was spectacular in his 5 innings allowing just one hit and no walks with 6 K's. Bochy pulled Leiter before the 6th inning as a precaution due to a blister on his middle finger. Hunter Greene pitched 7 innings of 3-hit ball for the Reds, allowing the one run, walking 1, and striking out 8. Jacob Webb, Robert Garcia, Chris Martin, and Luke Jackson combined to shutout the Reds over the last 4 innings. For the first time in their history the Rangers won back-to-back 1-0 games.`
  },
  {
  id: 'apr4',
  date: 'April 4',
  opp: 'Tampa Bay',
  score: 'W 5-2',
  recap: `Tyler Mahle (0-0, 5.40) vs. Zack Littell (0-1, 1.50). The Rangers took a 4-run lead in the 3rd on 5 consecutive base hits by Smith, Higashioka, Taveras, Semien, and Seager. Littell was coming off a start against Colorado in which he gave up just 1 run on 4 hits in 6 innings, walking none and striking out 7. Mahle shook off his control issues in his first start and was effective against a good hitting Rays team, throwing 5 shutout innings and not allowing a runner past first base. The Rays countered with 2 runs in the 7th, but Josh Smith homered in the Rangers' half to extend the lead to 3. Luke Jackson pitched a perfect 9th for his 4th save.`
  },
  {
  id: 'apr5',
  date: 'April 5',
  opp: 'Tampa Bay',
  score: 'W 6-4',
  recap: `Jacob deGrom (0-0, 0.00) vs. Taj Bradley (1-0, 3.00). Marcus Semien homered to left to start the game and Jake Burger followed with a 3-run homer after walks to Langford and Garcia to give deGrom a 4-run 1st inning lead. But the Rangers couldn't hold the lead. Brandon Lowe homered off deGrom in the 3rd and Jonathan Aranda drew the Rays to within a run with a towering HR off the rightfield foul pole in the 6th. After a 2-out double by Kameron Misner, deGrom's night was over. Reliever Jacob Webb allowed a double to the first batter he faced to tie the game. The Rangers would not get another hit until the 7th when Kevin Pillar pinch hit for Taveras and singled to left. With 2 outs Wyatt Langford hit a line drive HR that just cleared the wall in LF. Garcia, Martin, and Jackson pitched 2-1/3 scoreless innings and Jackson got his 5th save. The Rangers were outhit 10 to 4 but drew 6 walks and out-homered the Rays 3 to 2.`
  },
  {
  id: 'apr6',
  date: 'April 6',
  opp: 'Tampa Bay',
  score: 'W 4-3',
  recap: `Kumar Rocker (0-1, 13.50) vs. Drew Rasmussen (1-0, 0.00). Rocker rebounded nicely from his first start, giving up a run on 6 hits and no walks in 5 innings. Corey Seager homered to right in the 6th off Rays reliever Garrett Cleavinger for a 2-1 lead. The Rangers added another with 2 outs in the 7th after Jonah Heim reached on an error and stole 2B, and Taveras singled to CF to score him. Hoby Milner from Fort Worth Paschal HS retired all 6 hitters he faced. Marc Church pitched the 8th and blew the lead giving up a leadoff walk followed by a double, with both runners eventually scoring. Jacob Webb pitched a shutout ninth. In the bottom of the inning with 2 outs, Josh Smith doubled down the LF line and scored on Jonah Heim's single to CF to complete the sweep of the Rays.`
  },
  {
  id: 'apr7',
  date: 'April 7',
  opp: 'at Chicago Cubs',
  score: 'L 7-0',
  recap: `Nathan Eovaldi (1-0, 1.20) vs. Justin Steele (2-1, 6.89). The Rangers began play with the best record in the AL and the lowest batting average in MLB at .192. The temperature at game time was 34 which made it the coldest game in franchise history. In his previous 3 starts, Steele gave up 5 HR's and 12 earned runs, but the Rangers could manage only one runner to second base in his 7 innings. Eovaldi gave up 3 runs in 4-2/3, and Garabito got hit for 4 runs in 3-1/3. Seager has 1 RBI in the first 11 games.`
  },
  {
  id: 'apr8',
  date: 'April 8',
  opp: 'at Chicago Cubs',
  score: 'L 10-6',
  recap: `Patrick Corbin (0-0, 0.00) vs. Jameson Taillon (1-1, 6.35). A late inning defensive lapse resulted in 4 unearned runs for the Cubs. Corbin was called up from Round Rock to replace injured Jack Leiter. Jonah Heim plated 2 with a 1-out, bases-loaded single in the 2nd, but Taveras and Semien failed to score Jung from 3rd. The Cubs countered with 3 in the bottom half, but Langford tied it in the 3rd with a 407-foot HR to left. Corbin was finished after 4, giving up 3 runs on 5 hits and 2 walks. Jacob Webb was greeted with 3 singles in the 5th and all 3 eventually scored. In the 7th a double by Jung and a triple by Taveras cut the lead to 6-5. A 2-out single by Josh Smith in the 8th followed by a Josh Jung triple tied the game at 6, but Heim left Jung stranded at 3rd. In the bottom of the inning, Taveras misplayed a deep flyball to CF for a leadoff 2-base error. The Cubs loaded the bases on an intentional walk and an error by Josh Jung on a potential double-play grounder. Dansby Swanson drove in the winning runs with a 2-run double.`
  },  
  {
  id: 'apr9',
  date: 'April 9',
  opp: 'at Chicago Cubs',
  score: 'W 6-2',
  recap: `Tyler Mahle (1-0, 1.35) vs. Shota Imanaga (2-0, 1.40). Seager homered in the 1st for the early lead, but the Cubs answered in the 4th after a triple by Suzuki. The Rangers opened up a 4-run lead off Imanaga in the 5th on 5 hits: a single by Pillar, a 398-foot HR to CF by Heim, a single by Semien, a hard double to the CF wall by Jung, and a bloop single by Garcia. Seager's 2nd HR of the game came in the 7th and extended the lead to 6-1. Mahle was sensational over 7 innings: 2 hits, a walk, and 4 K's. Wyatt Langford was placed on the 10-day IL.`
  },
  {
  id: 'apr11',
  date: 'April 11',
  opp: 'at Seattle',
  score: 'L 5-3',
  recap: `Jacob deGrom (0-0, 3.38) vs. Bryce Miller (0-2, 5.73). The Rangers came into the game having lost 32 of their last 40 in Seattle. There were scoring opportunities, but the lineup went 2-for-12 with runners in scoring position. Josh Jung left bases loaded in the 1st. With 2 on in the 4th, both Burger and Heim struck out on pitches out of the strike zone. After a 1-out double by Semien in the 7th, Seager and Smith stranded him at 3rd. After a lead-off double by Garcia in the 8th, consecutive outs by Pederson, Jung, and Burger ended the inning. The 3 Ranger runs came on a Josh Jung HR in the 6th. After Church and Milner pitched scoreless innings in relief of deGrom, Chris Martin surrendered the game winner on a 2-run HR to Cal Raleigh in the 8th.`
  },
  {
  id: 'apr12',
  date: 'April 12',
  opp: 'at Seattle',
  score: 'L 9-2',
  recap: `Kumar Rocker (0-1, 7.88) vs. Bryan Woo (1-0, 4.50). The Rangers' best opportunity came in the 1st inning when their first 4 batters reached, scoring a run and loading the bases. But Pederson flew out to RF and Jung and Burger struck out leaving the bases full. In the middle innings Woo retired 14 straight. Rocker's bad inning was the 3rd in which he gave up a walk, 2 doubles, and a triple. Caleb Boushley made his Rangers debut in relief of Rocker and gave up 5 runs over 3-2/3. The Rangers lost the division lead for the first time since April 1.`
  },   
  {
  id: 'apr13',
  date: 'April 13',
  opp: 'at Seattle',
  score: 'L 3-1',
  recap: `Nathan Eovaldi (1-1, 2.29) vs. Logan Gilbert (0-1, 2.55), two of the best in the AL. The Rangers could only manage 4 hits off Mariners pitching and wasted a quality start by Eovaldi. Each starting pitcher went 5 innings and gave up a HR, but Seattle's came with a baserunner. In the 6th a Julio Rodriquez single, an error by Jake Burger at 1B, and 2 hit-batters gave Seattle a 3-1 lead and ended Eovaldi's day. Hoby Milner pitched out of the bases-loaded-no-out jam. 4 Mariners' relievers held the Rangers to a single over the last 4 innings and Seattle completed the sweep. In the 5th inning the Mariners Miles Mastrobuoni was thrown out by Kyle Higashioka attempting to steal 2B. It was the first base-stealer thrown out by a Ranger catcher this season after 28 successful steals.`
  },
  {
  id: 'apr15',
  date: 'April 15',
  opp: 'LA Angels',
  score: 'W 4-0',
  recap: `Tyler Mahle (2-0, 1.32) vs. Yusei Kikuchi (0-2, 4.58). The Rangers' offense entered the game with the fewest walks in MLB. Mahle looked like an ace for the 3rd straight time pitching 6 shutout innings, striking out 9. In the 6th, Taveras bunted for a single, stole 2B, and advanced to 3rd on a throwing error by the catcher. Semien scored him on a flyout to the wall in LF. The Rangers added a run in the 7th on a pair of doubles by Heim and Higashioka, and 2 more in the 8th on hits by Seager, Jung, and Pillar. Relievers Garcia, Martin, Webb, and Jackson preserved the shutout and the Rangers took the series opener.`
  },
  {
  id: 'apr16',
  date: 'April 16',
  opp: 'LA Angels',
  score: 'W 3-1',
  recap: `Patrick Corbin (0-0, 6.75) vs. Jose Soriano (2-1, 2.70). A double down the RF line by Dustin Harris followed by a soft single up the middle by Jake Burger scored the first run of the 2nd inning. After Heim and Semien drew walks, Seager came through with a 2-out, 2-RBI single to take a 3-0 lead. Corbin baffled the Angels with his off-speed pitches for 5 innings, striking out 6. In the 6th inning, 3 straight hits with 1 out, including a bloop double that landed on the RF foul line, produced the Angels' lone run. Shawn Armstrong got the last 2 outs of the inning to keep the lead at 3-1. After Armstrong allowed 2 baserunners in the 7th, Jacob Webb got the final out of the inning on a flyball to the wall in LF. Luke Jackson got his 6th save by pitching a shutout ninth. The Rangers managed 11 hits, 3 by Seager and 3 by Burger, but were 2-for-10 with runners in scoring position.`
  },
  {
  id: 'apr17',
  date: 'April 17',
  opp: 'LA Angels',
  score: 'W 5-3',
  recap: `Kumar Rocker (0-2, 7.94) vs. Jack Kochanowicz (1-1, 5.74). The Rangers began the game with the best starting pitcher ERA in the AL. The teams traded runs in the 1st. In the 2nd the Rangers loaded the bases with nobody out for Taveras who delivered with a 2-run double. Garcia homered in the 3rd to make it 4-1. LA scored twice in the 5th, but Seager led off the 7th with a 427-foot HR to CF to extend the lead to 5-3. It was Seager's 100th as a Ranger. Rocker was sensational in his 7 innings, striking out 8 and walking none on just 78 pitches, 58 for strikes. Chris Martin threw a perfect 8th, and Robert Garcia threw a perfect 9th for his first career save.`
  },
  {
  id: 'apr18',
  date: 'April 18',
  opp: 'LA Dodgers',
  score: 'L 3-0',
  recap: `Jacob deGrom (0-0, 4.30) vs. Yoshinobu Yamamoto (2-1, 1.23). The Rangers wasted a beautiful start by deGrom: 3 hits and a walk in 7 innings with 7 K's. The Dodgers opened the scoring when Tommy Edman hit deGrom's 2nd pitch of the game 398-feet over the RF wall. The Rangers had their chances but couldn't answer. In the 2nd inning Jung doubled with 1 out, but Dustin Harris and Jake Burger left him at 2nd. With 2 outs in the 3rd, Semien and Seager singled but Pederson grounded to 1st to end the inning. With 2 outs in the 4th Dustin Harris doubled down the line in left, but Burger struck out to strand him. The Dodgers scored two runs in the 9th off the bullpen. Rangers' hitters whiffed 22 times, 15 on chases out of the strike zone.`
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
  recap: `Patrick Corbin (1-0, 3.86 vs. Osvaldo Bido (2-1, 2.61). The Rangers entered the game tied with the Royals for fewest runs scored in MLB at 67. For the first time this season, Bochy made significant changes to the batting order taking Semien out of the leadoff spot and replacing him with hot-hitting Josh Smith and his .452 on-base percentage. Langford batted 2nd followed by Seager, Garcia, and Semien. The new batting order paid dividends immediately as both Smith and Langford reached base to start the game, and a Garcia double followed by a Semien sac fly gave the Rangers a 2-0 lead. Langford homered 403-feet to LF in the 3rd to make the lead 3-1. Smith homered to RF to lead off the 5th and two batters later, singles by Seager and Garcia followed by a 417-foot Semien HR to CF extended the lead to 7-2, marking the first time this year the Rangers scored more than 6 runs. The 4th HR of the game for the Rangers came in the 6th as Burger went deep 417-feet to CF, making the lead 8-2. Patrick Corbin pitched 5 innings, giving up 2 runs on 7 hits and 2 walks to get the win. Jacob Webb was tagged with 2 HR's in the 8th. Luke Jackson pitched the 9th and got his 7th save. Corey Seager left the game after his 6th inning at-bat with hamstring tightness.`
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
  recap: `Jack Leiter (2-0, 0.90) vs. Jordan Hicks (1-3, 6.59). This was Leiter's 1st start coming off the 15-day IL. Leading off the bottom of the 9th with the score 2-2, the Giants' Heliot Ramos tapped one to the left of the mound. Luke Jackson threw wild to 1B and Jake Burger retrieved the ball and threw wild to 3B allowing Ramos to round the bases with the walkoff run. In the 1st inning after doubles down the 3B line by Burger and Pederson, Semien blooped a Texas Leaguer behind SS to score them both. A single and 3 walks in the 1st inning gave the Giants their first run. Ramos scored to tie the game in the 4th after leading off with a single. Leiter's line was 2 runs on 2 hits and 4 walks with 3 K's in 3-1/3 innings. Pederson led off the 6th with a triple to deep CF, but Garcia chased 3 pitches out of the zone to strike out, Semien grounded out, and Ahmed popped out to strand him. The Rangers' bullpen pitched 4-2/3 shutout innings but the Rangers were 2 for 10 with RISP, and the team fell out of 1st place for the first time since April 14.`
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
  recap: `Jacob deGrom (0-1, 3.33) vs. Jacob Lopez in his 1st start of the season. Lopez was a Triple-A call-up to spot start for the injured J.T. Ginn. It was a great game for the hitters who feasted off Lopez and what Jared Sandler referred to as "the underbelly of the A's bullpen". The Ranger hitters combined for 18 hits and 9 walks including an 8-run 6th inning. deGrom cruised through 6 shutout innings on 65 pitches, 4 hits, 7 K's and no walks. Dane Dunning pitched the final 3 innings in his first appearance of the season after being called up from Round Rock.`
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
  recap: `Tyler Mahle (3-1, 1.19) vs. Tanner Houck (0-2, 6.38). Jonah Heim homered twice off Houck in a 4-1 win the 2nd game of the season. The bullpen consisting of Milner, Webb, Garcia, and Boushley turned a 3-2 lead into a 6-3 deficit. Mahle's line was 2 runs on 4 hits over 5 innings with a walk and 0 K's. Wilyer Abreu and Alex Bregman did most of the damage for Boston. Aroldis Chapman pitched the 9th and Jung homered on the first pitch to start the inning. Seager and Crim batted as the tying run, but Seager flew out to the warning track and Crim struck out to end the game. The Rangers went 0-for-10 with RISP including Semien who went hitless and stranded 6 baserunners. Garcia homered in the 4th ending a string of 14 games for the Rangers without a HR. Pederson had a single, a double, and a walk in 3 plate appearances. Evan Carter went 0-for-4 in his 2nd game back.`
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
  recap: `Patrick Corbin (2-1, 3.28) vs. Tarik Skubal (3-2, 2.21). 32 swings and misses over 7 innings against Skubal who retired the first 15 batters he faced. 2 singles and a hit batter produced the Rangers' run in the 6th. Corbin's line was 2 runs on 3 hits and 4 walks with 3 K's. The Rangers managed a 3rd base hit in the 8th, but they went quietly in the 9th.`
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
  recap: `Jack Leiter (2-2, 5.09) vs. Kyle Freeland (0-5, 6.41). Seager was placed on the 10-day IL retroactive to Sunday. After Colorado scored in the 1st, the Rangers started the game with 2 singles and a 396-foot HR to RF by Jung. Leiter's line was a run on 2 hits and 3 walks with 5 K's over 6 innings. Milner pitched a scoreless 7th and 8th. Jung homered again in the 8th 392-feet to LF. The first 2 Rockies in the 9th reached on base hits off Milner and Martin but Shawn Armstrong struck out the next 3 hitters for his first save.`
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
  recap: `Nathan Eovaldi (4-2, 1.78) vs. Lance McCullers (0-1, 15.75). Heim started the scoring in the 2nd with a 2-out, 2-RBI single after a single by Jung and an Astros error. The Rangers left RISP in the 3rd and 4th and then the bats went dormant as the Astros bullpen retired 15 in a row until Jung homered in the 9th. Eovaldi's line was 5-2/3 shutout innings, walking 3 and striking out 5. Milner and Armstrong imploded in the 7th giving up 5 runs including a Christian Walker 3-run HR off Armstrong. `
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