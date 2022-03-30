using System;
using Bridge;
using Bridge.Html5;

namespace tutorialProject
{
    public class nbaManager
    {
        [Ready] 
        public static void Main()
        {
            //Create array for all players and one for where selected players will go
            Player[] playerList = new Player[71];
            Player[] teamList = new Player[5];

            //Create int value for how many stars they can use
            int totalAllowedStars = 18;
            //Create default team info where values of textbox will go
            teamInfo teamInfo = new teamInfo("1", "2", "3", "4");


            //Load Default Players into teamList
            teamList[0] = new Player("Point Guard", "N1", "D1", 0, "I1");
            teamList[1] = new Player("Shooting Guard", "N2", "D2", 0, "I2");
            teamList[2] = new Player("Small Forward", "N3", "D3", 0, "I3");
            teamList[3] = new Player("Power Forward", "N4", "D4", 0, "I4");
            teamList[4] = new Player("Center", "N5", "D5", 0, "I5");



            //Load all Pointing Guards
            playerList[17] = new Player("Point Guard", "John Wall", "HEIGHT: 6'3, WEIGHT: 210lb, AGE: 30 years, Experience: 9 Years", 2, "Images/JohnWall.jpg"); 
            playerList[16] = new Player("Point Guard", "LaMelo Ball", "HEIGHT: 6'6, WEIGHT: 180lb, AGE: 19 years, Experience: Rookie", 2, "Images/LaMeloBall.jpg"); 
            playerList[15] = new Player("Point Guard", "Ja Morant", "HEIGHT: 6'3, WEIGHT: 174lb, AGE: 21 years, Experience: 1 Years", 2, "Images/JaMorant.jpg"); 
            playerList[14] = new Player("Point Guard", "Derrick Rose", "HEIGHT: 6'2, WEIGHT: 200lb, AGE: 32 years, Experience: 11 Years", 2, "Images/DerrickRose.jpg");
            playerList[13] = new Player("Point Guard", "Trae Young", "HEIGHT: 6'1, WEIGHT: 180lb, AGE: 22 years, Experience: 2 Years", 3, "Images/TraeYoung.jpg");
            playerList[12] = new Player("Point Guard", "Jamal Murray", "HEIGHT: 6'3, WEIGHT: 215lb, AGE: 24 years, Experience: 4 Years", 3, "Images/JamalMurray.jpg");
            playerList[11] = new Player("Point Guard", "Kyle Lowry", "HEIGHT: 6'0, WEIGHT: 196lb, AGE: 35 years, Experience: 14 Years", 3, "Images/KyleLowry.jpg"); 
            playerList[10] = new Player("Point Guard", "Kemba Walker", "HEIGHT: 6'0, WEIGHT: 184lb, AGE: 30 years, Experience: 9 Years", 3, "Images/KembaWalker.jpg");
            playerList[9] = new Player("Point Guard", "D'Angelo Russell", "HEIGHT: 6'4, WEIGHT: 193lb, AGE: 25 years, Experience: 5 Years", 3, "Images/DAngeloRussell.jpg");
            playerList[8] = new Player("Point Guard", "Tyler Herro", "HEIGHT: 6'5, WEIGHT: 195lb, AGE: 21 years, Experience: 1 Years", 3, "Images/TylerHerro.jpg");
            playerList[7] = new Player("Point Guard", "Jrue Holiday", "HEIGHT: 6'3, WEIGHT: 205lb, AGE: 30 years, Experience: 11 Years", 3, "Images/JrueHoliday.jpg");
            playerList[6] = new Player("Point Guard", "Luka Doncic", "HEIGHT: 6'7, WEIGHT: 230lb, AGE: 22 years, Experience: 2 Years", 4, "Images/LukaDoncic.jpg");
            playerList[5] = new Player("Point Guard", "Russell Westbrook", "HEIGHT: 6'3, WEIGHT: 200lb, AGE: 32 years, Experience: 12 Years", 4, "Images/RussellWestbrook.jpg");
            playerList[4] = new Player("Point Guard", "Ben Simmons", "HEIGHT: 6'11, WEIGHT: 240lb, AGE: 24 years, Experience: 3 Years", 4, "Images/BenSimmons.jpg");
            playerList[3] = new Player("Point Guard", "Chris Paul", "HEIGHT: 6'0, WEIGHT: 175lb, AGE: 35 years, Experience: 15 Years", 4, "Images/ChrisPaul.jpg");
            playerList[2] = new Player("Point Guard", "Damian Lillard", "HEIGHT: 6'2, WEIGHT: 195lb, AGE: 30 years, Experience: 8 Years", 5, "Images/DamianLillard.jpg");
            playerList[1] = new Player("Point Guard", "Stephen Curry", "HEIGHT: 6'3, WEIGHT: 185lb, AGE: 33 years, Experience: 11 Years", 5, "Images/StephenCurry.jpg");
            playerList[0] = new Player("Point Guard", "Kyrie Irving", "HEIGHT: 6'2, WEIGHT: 195lb AGE: 29 years, Experience: 9 Years", 5, "Images/KyrieIrving.jpg");

            //Load all Shooting Guards
            playerList[31] = new Player("Shooting Guard", "Lou Williams", "HEIGHT: 6'1, WEIGHT: 175lb, AGE: 34 years, Experience: 15 Years", 2, "Images/LouWilliams.jpg");
            playerList[30] = new Player("Shooting Guard", "Jaylen Brown", "HEIGHT: 6'6, WEIGHT: 223lb, AGE: 24 years, Experience: 4 Years", 2, "Images/JaylenBrown.jpg");
            playerList[29] = new Player("Shooting Guard", "Seth Curry", "HEIGHT: 6'2, WEIGHT: 185lb, AGE: 30 years, Experience: 6 Years", 2, "Images/SethCurry.jpg");
            playerList[28] = new Player("Shooting Guard", "Buddy Hield", "HEIGHT: 6'4, WEIGHT: 220lb, AGE: 28 years, Experience: 4 Years", 2, "Images/BuddyHield.jpg");
            playerList[27] = new Player("Shooting Guard", "Bradley Beal", "HEIGHT: 6'3, WEIGHT: 207lb, AGE: 27 years, Experience: 8 Years", 3, "Images/BradleyBeal.jpg");
            playerList[26] = new Player("Shooting Guard", "Donovan Mitchell", "HEIGHT: 6'1, WEIGHT: 215lb, AGE: 24 years, Experience: 3 Years", 3, "Images/DonovanMitchell.jpg");
            playerList[25] = new Player("Shooting Guard", "CJ McCollum", "HEIGHT: 6'3, WEIGHT: 190lb, AGE: 29 years, Experience: 7 Years", 3, "Images/CJMcCollum.jpg");
            playerList[24] = new Player("Shooting Guard", "Zach Lavine", "HEIGHT: 6'5, WEIGHT: 200lb, AGE: 26 years, Experience: 6 Years", 3, "Images/ZachLavine.jpg");
            playerList[23] = new Player("Shooting Guard", "Devin Booker", "HEIGHT: 6'5, WEIGHT: 206lb, AGE: 24 years, Experience: 5 Years", 4, "Images/DevinBooker.jpg");
            playerList[22] =  new Player("Shooting Guard", "Shai Gilgeous-Alexander", "HEIGHT: 6'6, WEIGHT: 180lb, AGE: 22 years, Experience: 2 Years", 4, "Images/ShaiGilgeousAlexander.jpg");
            playerList[21] = new Player("Shooting Guard", "Klay Thompson", "HEIGHT: 6'6, WEIGHT: 215lb, AGE: 31 years, Experience: 8 Years", 4, "Images/KlayThompson.jpg");
            playerList[20] = new Player("Shooting Guard", "DeMar DeRozan", "HEIGHT: 6'6, WEIGHT: 220lb, AGE: 31 years, Experience: 11 Years", 4, "Images/DeMarDeRozan.jpg");
            playerList[19] = new Player("Shooting Guard", "Jimmy Butler", "HEIGHT: 6'7, WEIGHT: 230lb, AGE: 31 years, Experience: 9 Years", 4, "Images/JimmyButler.jpg");
            playerList[18] = new Player("Shooting Guard", "James Harden", "HEIGHT: 6'5, WEIGHT: 220lb, AGE: 31 years, Experience: 11 Years", 5, "Images/JamesHarden.jpg");

            //Load all Small Forwards
            playerList[42] = new Player("Small Forward", "TJ Warren", "HEIGHT: 6'8, WEIGHT: 220lb, AGE: 27 years, Experience: 6 Years", 2, "Images/TJWarren.jpg");
            playerList[41] = new Player("Small Forward", "Kelly Oubre Jr.", "HEIGHT: 6'7, WEIGHT: 203lb, AGE: 25 years, Experience: 5 Years", 2, "Images/KellyOubre.jpg");
            playerList[40] = new Player("Small Forward", "Gordon Hayward", "HEIGHT: 6'7, WEIGHT: 225lb, AGE: 31 years, Experience: 10 Years", 2, "Images/GordonHayward.jpg");
            playerList[39] = new Player("Small Forward", "Tobias Harris", "HEIGHT: 6'8, WEIGHT: 226lb, AGE: 28 years, Experience: 9 Years", 3, "Images/TobiasHarris.jpg");
            playerList[38] = new Player("Small Forward", "Brandon Ingram", "HEIGHT: 6'8, WEIGHT: 190lb, AGE: 23 years, Experience: 4 Years", 3, "Images/BrandonIngram.jpg");
            playerList[37] = new Player("Small Forward", "Khris Middleton", "HEIGHT: 6'7, WEIGHT: 222lb, AGE: 29 years, Experience: 8 Years", 3, "Images/KhrisMiddleton.jpg");
            playerList[36] = new Player("Small Forward", "Paul George", "HEIGHT: 6'8, WEIGHT: 220lb, AGE: 30 years, Experience: 10 Years", 3, "Images/PaulGeorge.jpg");
            playerList[35] = new Player("Small Forward", "Jayson Tatum", "HEIGHT: 6'8, WEIGHT: 210lb, AGE: 23 years, Experience: 3 Years", 4, "Images/JaysonTatum.jpg");
            playerList[34] = new Player("Small Forward", "LeBron James", "HEIGHT: 6'9, WEIGHT: 250lb, AGE: 36 years, Experience: 17 Years", 5, "Images/LeBronJames.jpg");
            playerList[33] = new Player("Small Forward", "Kawhi Leonard", "HEIGHT: 6'7, WEIGHT: 225lb, AGE: 29 years, Experience: 9 Years", 5, "Images/KawhiLeonard.jpg");
            playerList[32] = new Player("Small Forward", "Kevin Durant", "HEIGHT: 6'10, WEIGHT: 240lb, AGE: 32 years, Experience: 12 Years", 5, "Images/KevinDurant.jpg");

            //Load all Power Forwards
            playerList[55] = new Player("Power Forward", "Kevin Love", "HEIGHT: 6'8, WEIGHT: 251lb, AGE: 32 years, Experience: 12 Years", 1, "Images/KevinLove.jpg"); 
            playerList[54] = new Player("Power Forward", "Blake Griffin", "HEIGHT: 6'9, WEIGHT: 250lb, AGE: 32 years, Experience: 10 Years", 2, "Images/BlakeGriffin.jpg");
            playerList[53] = new Player("Power Forward", "Jaren Jackson Jr.", "HEIGHT: 6'11, WEIGHT: 242lb, AGE: 21 years, Experience: 2 Years", 2, "Images/JarenJacksonJr.jpg");
            playerList[52] = new Player("Power Forward", "Aaron Gordon", "HEIGHT: 6'8, WEIGHT: 235lb, AGE: 25 years, Experience: 6 Years", 2, "Images/AaronGordon.jpg");
            playerList[51] = new Player("Power Forward", "Serge Ibaka", "HEIGHT: 6'10, WEIGHT: 235lb, AGE: 31 years, Experience: 11 Years", 2, "Images/SergeIbaka.jpg");
            playerList[50] = new Player("Power Forward", "Al Horford", "HEIGHT: 6'9, WEIGHT: 240lb, AGE: 34 years, Experience: 13 Years", 2, "Images/AlHorford.jpg");
            playerList[49] = new Player("Power Forward", "Carmelo Anthony", "HEIGHT: 6'7, WEIGHT: 238lb, AGE: 36 years, Experience: 17 Years", 2, "Images/CarmeloAnthony.jpg");
            playerList[48] = new Player("Power Forward", "Pascal Siakam", "HEIGHT: 6'9, WEIGHT: 230lb, AGE: 27 years, Experience: 4 Years", 3, "Images/PascalSiakam.jpg");
            playerList[47] = new Player("Power Forward", "LaMarcus Aldridge", "HEIGHT: 6'11, WEIGHT: 250lb, AGE: 35 years, Experience: 14 Years", 3, "Images/LaMarcusAldridge.png");
            playerList[46] = new Player("Power Forward", "Kristaps Porzingis", "HEIGHT: 7'3, WEIGHT: 240lb, AGE: 25 years, Experience: 4 Years", 3, "Images/KristapsPorzingis.jpg");
            playerList[45] = new Player("Power Forward", "Anthony Davis", "HEIGHT: 6'10, WEIGHT: 253lb, AGE: 28 years, Experience: 8 Years", 4, "Images/AnthonyDavis.jpg");
            playerList[44] = new Player("Power Forward", "Zion Williamson", "HEIGHT: 6'7, WEIGHT: 284lb, AGE: 20 years, Experience: 1 Years", 4, "Images/ZionWilliamson.jpg");
            playerList[43] = new Player("Power Forward", "Giannis Antetokounmpo", "HEIGHT: 6'11, WEIGHT: 242lb, AGE: 26 years, Experience: 7 Years", 5, "Images/GiannisAntetokounmpo.jpg");

            //Load all Centers
            playerList[70] = new Player("Center", "Jarrett Allen", "HEIGHT: 6'11, WEIGHT: 243lb, AGE: 22 years, Experience: 3 Years", 1, "Images/JarrettAllen.jpg"); 
            playerList[69] = new Player("Center", "Brook Lopez", "HEIGHT: 7'0, WEIGHT: 282lb, AGE: 33 years, Experience: 12 Years", 2, "Images/BrookLopez.jpg");
            playerList[68] = new Player("Center", "Clint Capela", "HEIGHT: 6'10, WE240lb, AGE: 26 years, Experience: 6 Years", 2, "Images/ClintCapela.jpg");
            playerList[67] = new Player("Center", "Hassan Whiteside", "HEIGHT: 7'0, WEIGHT: 265lb, AGE: 31 years, Experience: 8 Years", 2, "Images/HassanWhiteside.jpg");
            playerList[66] = new Player("Center", "Domantas Sabonis", "HEIGHT: 6'11, WEIGHT: 240lb, AGE: 24 years, Experience: 4 Years", 2, "Images/DomantasSabonis.jpg");
            playerList[65] = new Player("Center", "Marc Gasol", "HEIGHT: 6'11, WEIGHT: 255lb, AGE: 236 years, Experience: 12 Years", 2, "Images/MarcGasol.jpg");
            playerList[64] = new Player("Center", "Steven Adams", "HEIGHT: 6'11, WEIGHT: 265lb, AGE: 27 years, Experience: 7 Years", 2, "Images/StevenAdams.jpg");
            playerList[63] = new Player("Center", "Deandre Ayton", "HEIGHT: 6'11, WEIGHT: 250lb, AGE: 22 years, Experience: 2 Year", 3, "Images/DeandreAyton.jpg");
            playerList[62] = new Player("Center", "Nikola Vucevic", "HEIGHT: 6'11, WEIGHT: 260lb, AGE: 30 years, Experience: 9 Years", 3, "Images/NikolaVucevic.jpg");
            playerList[61] = new Player("Center", "Jonas Valanciunas", "HEIGHT: 6'11, WEIGHT: 265lb, AGE: 28 years, Experience: 8 Years", 3, "Images/JonasValanciunas.jpg");
            playerList[60] = new Player("Center", "Rudy Gobert", "HEIGHT: 7'1, WEIGHT: 258lb, AGE: 28 years, Experience: 7 Years", 3, "Images/RudyGobert.jpg");
            playerList[59] = new Player("Center", "Nikola Jokic", "HEIGHT: 6'11, WEIGHT: 284lb, AGE: 26 years, Experience: 5 Years", 4, "Images/NikolaJokic.jpg");
            playerList[58] = new Player("Center", "Karl-Anthony Towns", "HEIGHT: 6'11, WEIGHT: 248lb, AGE: 25 years, Experience: 5 Years", 4, "Images/KarlAnthonyTowns.jpg");
            playerList[57] = new Player("Center", "Bam Adebayo", "HEIGHT: 6'9, WEIGHT: 255lb, AGE: 23 years, Experience: 3 Years", 4, "Images/BamAdebayo.jpg");
            playerList[56] = new Player("Center", "Joel Embiid", "HEIGHT: 7'0, WEIGHT: 280lb, AGE: 27 years, Experience: 4 Years", 5, "Images/JoelEmbiid.jpg");
            ///////////////////////////////////////////////////////////////////////////////////////////////
            //    Create click event to that dropdownbox shows each positions for displaying, 
            var dropButton = Document.QuerySelector<HTMLButtonElement>(".dropBtn");
            dropButton.OnClick = (ev) =>
            {
                Document.GetElementById("myDropdown").ClassList.Toggle("show");//gives drop downbox
            };

            // so that when new section of dropdown box clicked different sections are displayed
            var pointGuardLink = Document.QuerySelector<HTMLAnchorElement>("#ShowPointGuard");
            pointGuardLink.OnClick = (ev) =>                                                                    
            {
                ShowPosition("Point Guard", playerList, teamList, totalAllowedStars);// when each links cliked, that runs the function to show the position, depending on what position you selected, only shows that position
                dropButton.Click();                      //                             all is does is rerun that click event, that links will go away! will toggle the event
            };
            var shootingGuardLink = Document.QuerySelector<HTMLAnchorElement>("#ShowShootingGuard");
            shootingGuardLink.OnClick = (ev) =>
            {
                ShowPosition("Shooting Guard", playerList, teamList, totalAllowedStars);
                dropButton.Click();
            };
            var smallForwardLink = Document.QuerySelector<HTMLAnchorElement>("#ShowSmallForward");
            smallForwardLink.OnClick = (ev) =>
            {
                ShowPosition("Small Forward", playerList, teamList, totalAllowedStars);
                dropButton.Click();
            };
            var powerForwardLink = Document.QuerySelector<HTMLAnchorElement>("#ShowPowerForward");
            powerForwardLink.OnClick = (ev) =>
            {
                ShowPosition("Power Forward", playerList, teamList, totalAllowedStars);
                dropButton.Click();
            };
            var centerLink = Document.QuerySelector<HTMLAnchorElement>("#ShowCenter");
            centerLink.OnClick = (ev) =>
            {
                ShowPosition("Center", playerList, teamList, totalAllowedStars);
                dropButton.Click();
            };
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //Create click event for final submit where it checks to make sure team is filled and displays team on court


            var teamSubmitButton = Document.QuerySelector<HTMLButtonElement>("#btnTeamSubmit");
            teamSubmitButton.OnClick = (ev) =>
            {
                if(teamList[0].Name == "N1")
                {
                    Console.WriteLine("Make sure 5 players are selected");
                }
                else if (teamList[1].Name == "N2")
                {
                    Console.WriteLine("Make sure 5 players are selected");// if the name of the player is the default name, it will tell the user that they need to 5 player. make s
                }
                else if (teamList[2].Name == "N3")
                {
                    Console.WriteLine("Make sure 5 players are selected");
                }
                else if (teamList[3].Name == "N4")
                {
                    Console.WriteLine("Make sure 5 players are selected");
                }
                else if (teamList[4].Name == "N5")
                {
                    Console.WriteLine("Make sure 5 players are selected");
                }
                else
                {
                    teamInfo.Name = Document.QuerySelector<HTMLInputElement>("#txtTeamName").Value;       //        as long as 5 player picked, it will picked information, and run the filCourt function, 
                    teamInfo.Stadium = Document.QuerySelector<HTMLInputElement>("#txtStadiumName").Value;
                    teamInfo.City = Document.QuerySelector<HTMLInputElement>("#txtCity").Value;
                    teamInfo.State = Document.QuerySelector<HTMLInputElement>("#txtState").Value;
                    Document.QuerySelector<HTMLInputElement>("#txtTeamName").Value = "";
                    Document.QuerySelector<HTMLInputElement>("#txtStadiumName").Value = "";
                    Document.QuerySelector<HTMLInputElement>("#txtCity").Value = "";
                    Document.QuerySelector<HTMLInputElement>("#txtState").Value = "";
                    fillCourt(teamInfo, teamList);
                }
            };
        }

        //Creates the heading where players will be displayed
        static void CreateHeading(HTMLTableElement table)
        {
            var heading = Document.CreateElement("tr");
            var heading_1 = Document.CreateElement("th");
            var heading_2 = Document.CreateElement("th");
            var heading_3 = Document.CreateElement("th");
            var heading_4 = Document.CreateElement("th");
            var heading_5 = Document.CreateElement("th");///////////create table, one for image,one for the name
            heading_1.InnerHTML = "Image";              /////
            heading_2.InnerHTML = "Name";
            heading_3.InnerHTML = "Description";
            heading_4.InnerHTML = "Stars";
            heading_5.InnerHTML = "Add to Team";
            heading.AppendChild(heading_1);
            heading.AppendChild(heading_2);
            heading.AppendChild(heading_3);
            heading.AppendChild(heading_4);
            heading.AppendChild(heading_5);
            table.AppendChild(heading);
        }

        //Fills the table created above with players from each position depending on what position is selected
        static void ShowPosition(string position, Player[] players, Player[] team, int totalAllowedStars)           //   
        {
            var table = Document.QuerySelector<HTMLTableElement>("#items");
            table.InnerHTML = "";
            CreateHeading(table);           //////go thouyght the whole player list, and depending on what positon they are, display all player in thatposition

            foreach (Player p in players)
            {
                if(position == "Point Guard")
                {
                    if(p.Position == "Point Guard")                     
                    {
                        BuildList(p, team, totalAllowedStars, table);
                    }
                }
                if(position == "Shooting Guard")
                {
                    if(p.Position == "Shooting Guard")
                    {
                        BuildList(p, team, totalAllowedStars, table);
                    }
                }
                if (position == "Small Forward")
                {
                    if (p.Position == "Small Forward")
                    {
                        BuildList(p, team, totalAllowedStars, table);
                    }
                }
                if (position == "Power Forward")
                {
                    if (p.Position == "Power Forward")
                    {
                        BuildList(p, team, totalAllowedStars, table);
                    }
                }
                if (position == "Center")
                {
                    if (p.Position == "Center")
                    {
                        BuildList(p, team, totalAllowedStars, table);
                    }
                }
            }
        }

        //Function that is called to fill the table 
        static void BuildList(Player p, Player[] team, int totalAllowedStars, HTMLTableElement table)
        {
            var tableRow = Document.CreateElement("tr");
            var tableDataImage = Document.CreateElement("td");
            var tableDataName = Document.CreateElement("td");
            var tableDataDescription = Document.CreateElement("td");
            var tableDataPrice = Document.CreateElement("td");
            var img = Document.CreateElement("img");
            img.SetAttribute("src", p.Image);
            tableDataImage.AppendChild(img);
            tableDataName.InnerHTML = p.Name;
            tableDataDescription.InnerHTML = p.Description;
            tableDataPrice.InnerHTML = p.Price.ToString();
            tableRow.AppendChild(tableDataImage);
            tableRow.AppendChild(tableDataName);
            tableRow.AppendChild(tableDataDescription);
            tableRow.AppendChild(tableDataPrice);
            var button = Document.CreateElement("button");
            button.Id = p.Name;
            var text = Document.CreateTextNode("Add to Team");
            button.AppendChild(text);
            //Creates click event for add to team button so that when player is added he goes into your team
            button.OnClick = (ev) =>
            {
                foreach (Player t in team)
                {
                    if (p.Position == t.Position)
                    {
                        if (p.Name != t.Name)
                        {
                            int teamPrice = UpdateTeamPrice(p, team);

                            if (teamPrice <= totalAllowedStars)
                            {
                                t.Name = p.Name;
                                t.Description = p.Description;
                                t.Price = p.Price;
                                t.Image = p.Image;
                                fillDiv(p);
                            }
                            else
                            {
                                Console.WriteLine("Can not exceed 18 Stars for the whole team");
                            }
                        }
                        else
                        {
                            Console.WriteLine("He is already in team");
                        }
                    }
                }
            };
            tableRow.AppendChild(button);
            table.AppendChild(tableRow);
        }

        static int UpdateTeamPrice(Player p, Player[] team)
        {
            int teamPrice = 0;
            foreach (Player t in team)
            {
                if(p.Position == t.Position)
                {
                    t.Price = p.Price;
                }
                teamPrice += t.Price;
            }
            return teamPrice;
        }

        static void fillDiv(Player p)                   //gates the player that added to the team, and function check what posision that player have, fills the div elemetn with the possiion, player name, and player price
        {
            if(p.Position == "Point Guard")
            {
                var div = Document.QuerySelector<HTMLDivElement>("#pointGuardSpot");            
                div.InnerHTML = "Point Guard: " + p.Name + " " + p.Price;
            }
            else if(p.Position == "Shooting Guard")
            {
                var div = Document.QuerySelector<HTMLDivElement>("#shootingGuardSpot");
                div.InnerHTML = "Shooting Guard: " + p.Name + " " + p.Price;
            }
            else if (p.Position == "Small Forward")
            {
                var div = Document.QuerySelector<HTMLDivElement>("#smallForwardSpot");
                div.InnerHTML = "Small Forward: " + p.Name + " " + p.Price;
            }
            else if (p.Position == "Power Forward")
            {
                var div = Document.QuerySelector<HTMLDivElement>("#powerForwardSpot");
                div.InnerHTML = "Power Forward: " + p.Name + " " + p.Price;
            }
            else if (p.Position == "Center")
            {
                var div = Document.QuerySelector<HTMLDivElement>("#centerSpot");
                div.InnerHTML = "Center: " + p.Name + " " + p.Price;
            }
        }

        static void fillCourt(teamInfo teamInfo, Player[] teamList)                                     // pass the team infor objects that contain all the information the  user added, 
        {
            var teamInfoName = Document.QuerySelector<HTMLDivElement>("#teamInfoName");                    // first part of this function, takes the team infor you entered, and fills the fo divs with the object information, so that will be displayed. 
            teamInfoName.InnerHTML = ("Team Name: " + teamInfo.Name);
            var teamInfoStadium = Document.QuerySelector<HTMLDivElement>("#teamInfoStadium");
            teamInfoStadium.InnerHTML = ("Team Stadium: " + teamInfo.Stadium);
            var teamInfoCity = Document.QuerySelector<HTMLDivElement>("#teamInfoCity");
            teamInfoCity.InnerHTML = ("Team City: " + teamInfo.City);
            var teamInfoState = Document.QuerySelector<HTMLDivElement>("#teamInfoState");
            teamInfoState.InnerHTML = ("Team State: " + teamInfo.State);

            foreach (Player t in teamList)
            {
                if(t.Position == "Point Guard")
                {
                 var pointGuard = Document.QuerySelector<HTMLDivElement>("#pointGuard"); //second part , run rhought the each players in the users team list ,,for each player based on the position,  it will gates the div element, makes the images and  give the images back to the div, so that they can displayed. 
                    pointGuard.InnerHTML = "";
                    var img = Document.CreateElement("img");
                    img.SetAttribute("src", t.Image);
                    pointGuard.AppendChild(img);
                }
                else if (t.Position == "Shooting Guard")
                {
                    var shootingGuard = Document.QuerySelector<HTMLDivElement>("#shootingGuard");
                    shootingGuard.InnerHTML = "";
                    var img = Document.CreateElement("img");
                    img.SetAttribute("src", t.Image);
                    shootingGuard.AppendChild(img);
                }
                else if (t.Position == "Small Forward")
                {
                    var smallForward = Document.QuerySelector<HTMLDivElement>("#smallForward");
                    smallForward.InnerHTML = "";
                    var img = Document.CreateElement("img");
                    img.SetAttribute("src", t.Image);
                    smallForward.AppendChild(img);
                }
                else if (t.Position == "Power Forward")
                {
                    var powerForward = Document.QuerySelector<HTMLDivElement>("#powerForward");
                    powerForward.InnerHTML = "";
                    var img = Document.CreateElement("img");
                    img.SetAttribute("src", t.Image);
                    powerForward.AppendChild(img);
                }
                else if (t.Position == "Center")
                {
                    var center = Document.QuerySelector<HTMLDivElement>("#center");
                    center.InnerHTML = "";
                    var img = Document.CreateElement("img");
                    img.SetAttribute("src", t.Image);
                    center.AppendChild(img);
                }
            }

        }
    }
    class Player
    {
        public string Position { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
        public string Image { get; set; }

        public Player(string position, string name, string description, int price, string image)
        {
            Position = position;
            Name = name;
            Description = description;
            Price = price;
            Image = image;
        }
    }

    class teamInfo
    {
        public string Name { get; set; }
        public string Stadium { get; set; }
        public string City { get; set; }
        public string State { get; set; }

        public teamInfo(string name, string stadium, string city, string state)
        {
            Name = name;
            Stadium = stadium;
            City = city;
            State = state;
        }


    }

}