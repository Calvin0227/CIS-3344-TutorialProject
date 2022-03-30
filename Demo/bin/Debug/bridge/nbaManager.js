/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2021
 * @compiler Bridge.NET 17.10.1
 */
Bridge.assembly("nbaManager", function ($asm, globals) {
    "use strict";

    Bridge.define("tutorialProject.nbaManager", {
        statics: {
            ctors: {
                init: function () {
                    Bridge.ready(this.Main);
                }
            },
            methods: {
                Main: function () {
                    var playerList = System.Array.init(71, null, tutorialProject.Player);
                    var teamList = System.Array.init(5, null, tutorialProject.Player);

                    var totalAllowedStars = 18;
                    var teamInfo = new tutorialProject.teamInfo("1", "2", "3", "4");


                    teamList[System.Array.index(0, teamList)] = new tutorialProject.Player("Point Guard", "N1", "D1", 0, "I1");
                    teamList[System.Array.index(1, teamList)] = new tutorialProject.Player("Shooting Guard", "N2", "D2", 0, "I2");
                    teamList[System.Array.index(2, teamList)] = new tutorialProject.Player("Small Forward", "N3", "D3", 0, "I3");
                    teamList[System.Array.index(3, teamList)] = new tutorialProject.Player("Power Forward", "N4", "D4", 0, "I4");
                    teamList[System.Array.index(4, teamList)] = new tutorialProject.Player("Center", "N5", "D5", 0, "I5");



                    playerList[System.Array.index(17, playerList)] = new tutorialProject.Player("Point Guard", "John Wall", "HEIGHT: 6'3, WEIGHT: 210lb, AGE: 30 years, Experience: 9 Years", 2, "Images/JohnWall.jpg");
                    playerList[System.Array.index(16, playerList)] = new tutorialProject.Player("Point Guard", "LaMelo Ball", "HEIGHT: 6'6, WEIGHT: 180lb, AGE: 19 years, Experience: Rookie", 2, "Images/LaMeloBall.jpg");
                    playerList[System.Array.index(15, playerList)] = new tutorialProject.Player("Point Guard", "Ja Morant", "HEIGHT: 6'3, WEIGHT: 174lb, AGE: 21 years, Experience: 1 Years", 2, "Images/JaMorant.jpg");
                    playerList[System.Array.index(14, playerList)] = new tutorialProject.Player("Point Guard", "Derrick Rose", "HEIGHT: 6'2, WEIGHT: 200lb, AGE: 32 years, Experience: 11 Years", 2, "Images/DerrickRose.jpg");
                    playerList[System.Array.index(13, playerList)] = new tutorialProject.Player("Point Guard", "Trae Young", "HEIGHT: 6'1, WEIGHT: 180lb, AGE: 22 years, Experience: 2 Years", 3, "Images/TraeYoung.jpg");
                    playerList[System.Array.index(12, playerList)] = new tutorialProject.Player("Point Guard", "Jamal Murray", "HEIGHT: 6'3, WEIGHT: 215lb, AGE: 24 years, Experience: 4 Years", 3, "Images/JamalMurray.jpg");
                    playerList[System.Array.index(11, playerList)] = new tutorialProject.Player("Point Guard", "Kyle Lowry", "HEIGHT: 6'0, WEIGHT: 196lb, AGE: 35 years, Experience: 14 Years", 3, "Images/KyleLowry.jpg");
                    playerList[System.Array.index(10, playerList)] = new tutorialProject.Player("Point Guard", "Kemba Walker", "HEIGHT: 6'0, WEIGHT: 184lb, AGE: 30 years, Experience: 9 Years", 3, "Images/KembaWalker.jpg");
                    playerList[System.Array.index(9, playerList)] = new tutorialProject.Player("Point Guard", "D'Angelo Russell", "HEIGHT: 6'4, WEIGHT: 193lb, AGE: 25 years, Experience: 5 Years", 3, "Images/DAngeloRussell.jpg");
                    playerList[System.Array.index(8, playerList)] = new tutorialProject.Player("Point Guard", "Tyler Herro", "HEIGHT: 6'5, WEIGHT: 195lb, AGE: 21 years, Experience: 1 Years", 3, "Images/TylerHerro.jpg");
                    playerList[System.Array.index(7, playerList)] = new tutorialProject.Player("Point Guard", "Jrue Holiday", "HEIGHT: 6'3, WEIGHT: 205lb, AGE: 30 years, Experience: 11 Years", 3, "Images/JrueHoliday.jpg");
                    playerList[System.Array.index(6, playerList)] = new tutorialProject.Player("Point Guard", "Luka Doncic", "HEIGHT: 6'7, WEIGHT: 230lb, AGE: 22 years, Experience: 2 Years", 4, "Images/LukaDoncic.jpg");
                    playerList[System.Array.index(5, playerList)] = new tutorialProject.Player("Point Guard", "Russell Westbrook", "HEIGHT: 6'3, WEIGHT: 200lb, AGE: 32 years, Experience: 12 Years", 4, "Images/RussellWestbrook.jpg");
                    playerList[System.Array.index(4, playerList)] = new tutorialProject.Player("Point Guard", "Ben Simmons", "HEIGHT: 6'11, WEIGHT: 240lb, AGE: 24 years, Experience: 3 Years", 4, "Images/BenSimmons.jpg");
                    playerList[System.Array.index(3, playerList)] = new tutorialProject.Player("Point Guard", "Chris Paul", "HEIGHT: 6'0, WEIGHT: 175lb, AGE: 35 years, Experience: 15 Years", 4, "Images/ChrisPaul.jpg");
                    playerList[System.Array.index(2, playerList)] = new tutorialProject.Player("Point Guard", "Damian Lillard", "HEIGHT: 6'2, WEIGHT: 195lb, AGE: 30 years, Experience: 8 Years", 5, "Images/DamianLillard.jpg");
                    playerList[System.Array.index(1, playerList)] = new tutorialProject.Player("Point Guard", "Stephen Curry", "HEIGHT: 6'3, WEIGHT: 185lb, AGE: 33 years, Experience: 11 Years", 5, "Images/StephenCurry.jpg");
                    playerList[System.Array.index(0, playerList)] = new tutorialProject.Player("Point Guard", "Kyrie Irving", "HEIGHT: 6'2, WEIGHT: 195lb AGE: 29 years, Experience: 9 Years", 5, "Images/KyrieIrving.jpg");
                 

                    playerList[System.Array.index(31, playerList)] = new tutorialProject.Player("Shooting Guard", "Lou Williams", "HEIGHT: 6'1, WEIGHT: 175lb, AGE: 34 years, Experience: 15 Years", 2, "Images/LouWilliams.jpg");
                    playerList[System.Array.index(30, playerList)] = new tutorialProject.Player("Shooting Guard", "Jaylen Brown", "HEIGHT: 6'6, WEIGHT: 223lb, AGE: 24 years, Experience: 4 Years", 2, "Images/JaylenBrown.jpg");
                    playerList[System.Array.index(29, playerList)] = new tutorialProject.Player("Shooting Guard", "Seth Curry", "HEIGHT: 6'2, WEIGHT: 185lb, AGE: 30 years, Experience: 6 Years", 2, "Images/SethCurry.jpg");
                    playerList[System.Array.index(28, playerList)] = new tutorialProject.Player("Shooting Guard", "Buddy Hield", "HEIGHT: 6'4, WEIGHT: 220lb, AGE: 28 years, Experience: 4 Years", 2, "Images/BuddyHield.jpg");
                    playerList[System.Array.index(27, playerList)] = new tutorialProject.Player("Shooting Guard", "Bradley Beal", "HEIGHT: 6'3, WEIGHT: 207lb, AGE: 27 years, Experience: 8 Years", 3, "Images/BradleyBeal.jpg");
                    playerList[System.Array.index(26, playerList)] = new tutorialProject.Player("Shooting Guard", "Donovan Mitchell", "HEIGHT: 6'1, WEIGHT: 215lb, AGE: 24 years, Experience: 3 Years", 3, "Images/DonovanMitchell.jpg");
                    playerList[System.Array.index(25, playerList)] = new tutorialProject.Player("Shooting Guard", "CJ McCollum", "HEIGHT: 6'3, WEIGHT: 190lb, AGE: 29 years, Experience: 7 Years", 3, "Images/CJMcCollum.jpg");
                    playerList[System.Array.index(24, playerList)] = new tutorialProject.Player("Shooting Guard", "Zach Lavine", "HEIGHT: 6'5, WEIGHT: 200lb, AGE: 26 years, Experience: 6 Years", 3, "Images/ZachLavine.jpg");
                    playerList[System.Array.index(23, playerList)] = new tutorialProject.Player("Shooting Guard", "Devin Booker", "HEIGHT: 6'5, WEIGHT: 206lb, AGE: 24 years, Experience: 5 Years", 4, "Images/DevinBooker.jpg");
                    playerList[System.Array.index(22, playerList)] = new tutorialProject.Player("Shooting Guard", "Shai Gilgeous-Alexander", "HEIGHT: 6'6, WEIGHT: 180lb, AGE: 22 years, Experience: 2 Years", 4, "Images/ShaiGilgeousAlexander.jpg");
                    playerList[System.Array.index(21, playerList)] = new tutorialProject.Player("Shooting Guard", "Klay Thompson", "HEIGHT: 6'6, WEIGHT: 215lb, AGE: 31 years, Experience: 8 Years", 4, "Images/KlayThompson.jpg");
                    playerList[System.Array.index(20, playerList)] = new tutorialProject.Player("Shooting Guard", "DeMar DeRozan", "HEIGHT: 6'6, WEIGHT: 220lb, AGE: 31 years, Experience: 11 Years", 4, "Images/DeMarDeRozan.jpg");
                    playerList[System.Array.index(19, playerList)] = new tutorialProject.Player("Shooting Guard", "Jimmy Butler", "HEIGHT: 6'7, WEIGHT: 230lb, AGE: 31 years, Experience: 9 Years", 4, "Images/JimmyButler.jpg");
                    playerList[System.Array.index(18, playerList)] = new tutorialProject.Player("Shooting Guard", "James Harden", "HEIGHT: 6'5, WEIGHT: 220lb, AGE: 31 years, Experience: 11 Years", 5, "Images/JamesHarden.jpg");

                    playerList[System.Array.index(42, playerList)] = new tutorialProject.Player("Small Forward", "TJ Warren", "HEIGHT: 6'8, WEIGHT: 220lb, AGE: 27 years, Experience: 6 Years", 2, "Images/TJWarren.jpg");
                    playerList[System.Array.index(41, playerList)] = new tutorialProject.Player("Small Forward", "Kelly Oubre Jr.", "HEIGHT: 6'7, WEIGHT: 203lb, AGE: 25 years, Experience: 5 Years", 2, "Images/KellyOubre.jpg");
                    playerList[System.Array.index(40, playerList)] = new tutorialProject.Player("Small Forward", "Gordon Hayward", "HEIGHT: 6'7, WEIGHT: 225lb, AGE: 31 years, Experience: 10 Years", 2, "Images/GordonHayward.jpg");
                    playerList[System.Array.index(39, playerList)] = new tutorialProject.Player("Small Forward", "Tobias Harris", "HEIGHT: 6'8, WEIGHT: 226lb, AGE: 28 years, Experience: 9 Years", 3, "Images/TobiasHarris.jpg");
                    playerList[System.Array.index(38, playerList)] = new tutorialProject.Player("Small Forward", "Brandon Ingram", "HEIGHT: 6'8, WEIGHT: 190lb, AGE: 23 years, Experience: 4 Years", 3, "Images/BrandonIngram.jpg");
                    playerList[System.Array.index(37, playerList)] = new tutorialProject.Player("Small Forward", "Khris Middleton", "HEIGHT: 6'7, WEIGHT: 222lb, AGE: 29 years, Experience: 8 Years", 3, "Images/KhrisMiddleton.jpg");
                    playerList[System.Array.index(36, playerList)] = new tutorialProject.Player("Small Forward", "Paul George", "HEIGHT: 6'8, WEIGHT: 220lb, AGE: 30 years, Experience: 10 Years", 3, "Images/PaulGeorge.jpg");
                    playerList[System.Array.index(35, playerList)] = new tutorialProject.Player("Small Forward", "Jayson Tatum", "HEIGHT: 6'8, WEIGHT: 210lb, AGE: 23 years, Experience: 3 Years", 4, "Images/JaysonTatum.jpg");
                    playerList[System.Array.index(34, playerList)] = new tutorialProject.Player("Small Forward", "LeBron James", "HEIGHT: 6'9, WEIGHT: 250lb, AGE: 36 years, Experience: 17 Years", 5, "Images/LeBronJames.jpg");
                    playerList[System.Array.index(33, playerList)] = new tutorialProject.Player("Small Forward", "Kawhi Leonard", "HEIGHT: 6'7, WEIGHT: 225lb, AGE: 29 years, Experience: 9 Years", 5, "Images/KawhiLeonard.jpg");
                    playerList[System.Array.index(32, playerList)] = new tutorialProject.Player("Small Forward", "Kevin Durant", "HEIGHT: 6'10, WEIGHT: 240lb, AGE: 32 years, Experience: 12 Years", 5, "Images/KevinDurant.jpg");

                    playerList[System.Array.index(55, playerList)] = new tutorialProject.Player("Power Forward", "Kevin Love", "HEIGHT: 6'8, WEIGHT: 251lb, AGE: 32 years, Experience: 12 Years", 1, "Images/KevinLove.jpg");
                    playerList[System.Array.index(54, playerList)] = new tutorialProject.Player("Power Forward", "Blake Griffin", "HEIGHT: 6'9, WEIGHT: 250lb, AGE: 32 years, Experience: 10 Years", 2, "Images/BlakeGriffin.jpg");
                    playerList[System.Array.index(53, playerList)] = new tutorialProject.Player("Power Forward", "Jaren Jackson Jr.", "HEIGHT: 6'11, WEIGHT: 242lb, AGE: 21 years, Experience: 2 Years", 2, "Images/JarenJacksonJr.jpg");
                    playerList[System.Array.index(52, playerList)] = new tutorialProject.Player("Power Forward", "Aaron Gordon", "HEIGHT: 6'8, WEIGHT: 235lb, AGE: 25 years, Experience: 6 Years", 2, "Images/AaronGordon.jpg");
                    playerList[System.Array.index(51, playerList)] = new tutorialProject.Player("Power Forward", "Serge Ibaka", "HEIGHT: 6'10, WEIGHT: 235lb, AGE: 31 years, Experience: 11 Years", 2, "Images/SergeIbaka.jpg");
                    playerList[System.Array.index(50, playerList)] = new tutorialProject.Player("Power Forward", "Al Horford", "HEIGHT: 6'9, WEIGHT: 240lb, AGE: 34 years, Experience: 13 Years", 2, "Images/AlHorford.jpg");
                    playerList[System.Array.index(49, playerList)] = new tutorialProject.Player("Power Forward", "Carmelo Anthony", "HEIGHT: 6'7, WEIGHT: 238lb, AGE: 36 years, Experience: 17 Years", 2, "Images/CarmeloAnthony.jpg");
                    playerList[System.Array.index(48, playerList)] = new tutorialProject.Player("Power Forward", "Pascal Siakam", "HEIGHT: 6'9, WEIGHT: 230lb, AGE: 27 years, Experience: 4 Years", 3, "Images/PascalSiakam.jpg");
                    playerList[System.Array.index(47, playerList)] = new tutorialProject.Player("Power Forward", "LaMarcus Aldridge", "HEIGHT: 6'11, WEIGHT: 250lb, AGE: 35 years, Experience: 14 Years", 3, "Images/LaMarcusAldridge.png");
                    playerList[System.Array.index(46, playerList)] = new tutorialProject.Player("Power Forward", "Kristaps Porzingis", "HEIGHT: 7'3, WEIGHT: 240lb, AGE: 25 years, Experience: 4 Years", 3, "Images/KristapsPorzingis.jpg");
                    playerList[System.Array.index(45, playerList)] = new tutorialProject.Player("Power Forward", "Anthony Davis", "HEIGHT: 6'10, WEIGHT: 253lb, AGE: 28 years, Experience: 8 Years", 4, "Images/AnthonyDavis.jpg");
                    playerList[System.Array.index(44, playerList)] = new tutorialProject.Player("Power Forward", "Zion Williamson", "HEIGHT: 6'7, WEIGHT: 284lb, AGE: 20 years, Experience: 1 Years", 4, "Images/ZionWilliamson.jpg");
                    playerList[System.Array.index(43, playerList)] = new tutorialProject.Player("Power Forward", "Giannis Antetokounmpo", "HEIGHT: 6'11, WEIGHT: 242lb, AGE: 26 years, Experience: 7 Years", 5, "Images/GiannisAntetokounmpo.jpg");

                    playerList[System.Array.index(70, playerList)] = new tutorialProject.Player("Center", "Jarrett Allen", "HEIGHT: 6'11, WEIGHT: 243lb, AGE: 22 years, Experience: 3 Years", 1, "Images/JarrettAllen.jpg");
                    playerList[System.Array.index(69, playerList)] = new tutorialProject.Player("Center", "Brook Lopez", "HEIGHT: 7'0, WEIGHT: 282lb, AGE: 33 years, Experience: 12 Years", 2, "Images/BrookLopez.jpg");
                    playerList[System.Array.index(68, playerList)] = new tutorialProject.Player("Center", "Clint Capela", "HEIGHT: 6'10, WE240lb, AGE: 26 years, Experience: 6 Years", 2, "Images/ClintCapela.jpg");
                    playerList[System.Array.index(67, playerList)] = new tutorialProject.Player("Center", "Hassan Whiteside", "HEIGHT: 7'0, WEIGHT: 265lb, AGE: 31 years, Experience: 8 Years", 2, "Images/HassanWhiteside.jpg");
                    playerList[System.Array.index(66, playerList)] = new tutorialProject.Player("Center", "Domantas Sabonis", "HEIGHT: 6'11, WEIGHT: 240lb, AGE: 24 years, Experience: 4 Years", 2, "Images/DomantasSabonis.jpg");
                    playerList[System.Array.index(65, playerList)] = new tutorialProject.Player("Center", "Marc Gasol", "HEIGHT: 6'11, WEIGHT: 255lb, AGE: 236 years, Experience: 12 Years", 2, "Images/MarcGasol.jpg");
                    playerList[System.Array.index(64, playerList)] = new tutorialProject.Player("Center", "Steven Adams", "HEIGHT: 6'11, WEIGHT: 265lb, AGE: 27 years, Experience: 7 Years", 2, "Images/StevenAdams.jpg");
                    playerList[System.Array.index(63, playerList)] = new tutorialProject.Player("Center", "Deandre Ayton", "HEIGHT: 6'11, WEIGHT: 250lb, AGE: 22 years, Experience: 2 Year", 3, "Images/DeandreAyton.jpg");
                    playerList[System.Array.index(62, playerList)] = new tutorialProject.Player("Center", "Nikola Vucevic", "HEIGHT: 6'11, WEIGHT: 260lb, AGE: 30 years, Experience: 9 Years", 3, "Images/NikolaVucevic.jpg");
                    playerList[System.Array.index(61, playerList)] = new tutorialProject.Player("Center", "Jonas Valanciunas", "HEIGHT: 6'11, WEIGHT: 265lb, AGE: 28 years, Experience: 8 Years", 3, "Images/JonasValanciunas.jpg");
                    playerList[System.Array.index(60, playerList)] = new tutorialProject.Player("Center", "Rudy Gobert", "HEIGHT: 7'1, WEIGHT: 258lb, AGE: 28 years, Experience: 7 Years", 3, "Images/RudyGobert.jpg");
                    playerList[System.Array.index(59, playerList)] = new tutorialProject.Player("Center", "Nikola Jokic", "HEIGHT: 6'11, WEIGHT: 284lb, AGE: 26 years, Experience: 5 Years", 4, "Images/NikolaJokic.jpg");
                    playerList[System.Array.index(58, playerList)] = new tutorialProject.Player("Center", "Karl-Anthony Towns", "HEIGHT: 6'11, WEIGHT: 248lb, AGE: 25 years, Experience: 5 Years", 4, "Images/KarlAnthonyTowns.jpg");
                    playerList[System.Array.index(57, playerList)] = new tutorialProject.Player("Center", "Bam Adebayo", "HEIGHT: 6'9, WEIGHT: 255lb, AGE: 23 years, Experience: 3 Years", 4, "Images/BamAdebayo.jpg");
                    playerList[System.Array.index(56, playerList)] = new tutorialProject.Player("Center", "Joel Embiid", "HEIGHT: 7'0, WEIGHT: 280lb, AGE: 27 years, Experience: 4 Years", 5, "Images/JoelEmbiid.jpg");

                    var dropButton = document.querySelector(".dropBtn");
                    dropButton.onclick = function (ev) {
                        document.getElementById("myDropdown").classList.toggle("show");
                    };

                    var pointGuardLink = document.querySelector("#ShowPointGuard");
                    pointGuardLink.onclick = function (ev) {
                        tutorialProject.nbaManager.ShowPosition("Point Guard", playerList, teamList, totalAllowedStars);
                        dropButton.click();
                    };
                    var shootingGuardLink = document.querySelector("#ShowShootingGuard");
                    shootingGuardLink.onclick = function (ev) {
                        tutorialProject.nbaManager.ShowPosition("Shooting Guard", playerList, teamList, totalAllowedStars);
                        dropButton.click();
                    };
                    var smallForwardLink = document.querySelector("#ShowSmallForward");
                    smallForwardLink.onclick = function (ev) {
                        tutorialProject.nbaManager.ShowPosition("Small Forward", playerList, teamList, totalAllowedStars);
                        dropButton.click();
                    };
                    var powerForwardLink = document.querySelector("#ShowPowerForward");
                    powerForwardLink.onclick = function (ev) {
                        tutorialProject.nbaManager.ShowPosition("Power Forward", playerList, teamList, totalAllowedStars);
                        dropButton.click();
                    };
                    var centerLink = document.querySelector("#ShowCenter");
                    centerLink.onclick = function (ev) {
                        tutorialProject.nbaManager.ShowPosition("Center", playerList, teamList, totalAllowedStars);
                        dropButton.click();
                    };

                    var teamSubmitButton = document.querySelector("#btnTeamSubmit");
                    teamSubmitButton.onclick = function (ev) {
                        if (Bridge.referenceEquals(teamList[System.Array.index(0, teamList)].Name, "N1")) {
                            System.Console.WriteLine("Make sure 5 players are selected");
                        } else if (Bridge.referenceEquals(teamList[System.Array.index(1, teamList)].Name, "N2")) {
                            System.Console.WriteLine("Make sure 5 players are selected");
                        }
                        if (Bridge.referenceEquals(teamList[System.Array.index(2, teamList)].Name, "N3")) {
                            System.Console.WriteLine("Make sure 5 players are selected");
                        }
                        if (Bridge.referenceEquals(teamList[System.Array.index(3, teamList)].Name, "N4")) {
                            System.Console.WriteLine("Make sure 5 players are selected");
                        }
                        if (Bridge.referenceEquals(teamList[System.Array.index(4, teamList)].Name, "N5")) {
                            System.Console.WriteLine("Make sure 5 players are selected");
                        } else {
                            teamInfo.Name = document.querySelector("#txtTeamName").value;
                            teamInfo.Stadium = document.querySelector("#txtStadiumName").value;
                            teamInfo.City = document.querySelector("#txtCity").value;
                            teamInfo.State = document.querySelector("#txtState").value;
                            document.querySelector("#txtTeamName").value = "";
                            document.querySelector("#txtStadiumName").value = "";
                            document.querySelector("#txtCity").value = "";
                            document.querySelector("#txtState").value = "";
                            tutorialProject.nbaManager.fillCourt(teamInfo, teamList);
                        }
                    };
                },
                CreateHeading: function (table) {
                    var heading = document.createElement("tr");
                    var heading_1 = document.createElement("th");
                    var heading_2 = document.createElement("th");
                    var heading_3 = document.createElement("th");
                    var heading_4 = document.createElement("th");
                    var heading_5 = document.createElement("th");
                    heading_1.innerHTML = "Image";
                    heading_2.innerHTML = "Name";
                    heading_3.innerHTML = "Description";
                    heading_4.innerHTML = "Stars";
                    heading_5.innerHTML = "Add to Team";
                    heading.appendChild(heading_1);
                    heading.appendChild(heading_2);
                    heading.appendChild(heading_3);
                    heading.appendChild(heading_4);
                    heading.appendChild(heading_5);
                    table.appendChild(heading);
                },
                ShowPosition: function (position, players, team, totalAllowedStars) {
                    var $t;
                    var table = document.querySelector("#items");
                    table.innerHTML = "";
                    tutorialProject.nbaManager.CreateHeading(table);

                    $t = Bridge.getEnumerator(players);
                    try {
                        while ($t.moveNext()) {
                            var p = $t.Current;
                            if (Bridge.referenceEquals(position, "Point Guard")) {
                                if (Bridge.referenceEquals(p.Position, "Point Guard")) {
                                    tutorialProject.nbaManager.BuildList(p, team, totalAllowedStars, table);
                                }
                            }
                            if (Bridge.referenceEquals(position, "Shooting Guard")) {
                                if (Bridge.referenceEquals(p.Position, "Shooting Guard")) {
                                    tutorialProject.nbaManager.BuildList(p, team, totalAllowedStars, table);
                                }
                            }
                            if (Bridge.referenceEquals(position, "Small Forward")) {
                                if (Bridge.referenceEquals(p.Position, "Small Forward")) {
                                    tutorialProject.nbaManager.BuildList(p, team, totalAllowedStars, table);
                                }
                            }
                            if (Bridge.referenceEquals(position, "Power Forward")) {
                                if (Bridge.referenceEquals(p.Position, "Power Forward")) {
                                    tutorialProject.nbaManager.BuildList(p, team, totalAllowedStars, table);
                                }
                            }
                            if (Bridge.referenceEquals(position, "Center")) {
                                if (Bridge.referenceEquals(p.Position, "Center")) {
                                    tutorialProject.nbaManager.BuildList(p, team, totalAllowedStars, table);
                                }
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                },
                BuildList: function (p, team, totalAllowedStars, table) {
                    var tableRow = document.createElement("tr");
                    var tableDataImage = document.createElement("td");
                    var tableDataName = document.createElement("td");
                    var tableDataDescription = document.createElement("td");
                    var tableDataPrice = document.createElement("td");
                    var img = document.createElement("img");
                    img.setAttribute("src", p.Image);
                    tableDataImage.appendChild(img);
                    tableDataName.innerHTML = p.Name;
                    tableDataDescription.innerHTML = p.Description;
                    tableDataPrice.innerHTML = Bridge.toString(p.Price);
                    tableRow.appendChild(tableDataImage);
                    tableRow.appendChild(tableDataName);
                    tableRow.appendChild(tableDataDescription);
                    tableRow.appendChild(tableDataPrice);
                    var button = document.createElement("button");
                    button.id = p.Name;
                    var text = document.createTextNode("Add to Team");
                    button.appendChild(text);
                    button.onclick = function (ev) {
                        var $t;
                        $t = Bridge.getEnumerator(team);
                        try {
                            while ($t.moveNext()) {
                                var t = $t.Current;
                                if (Bridge.referenceEquals(p.Position, t.Position)) {
                                    if (!Bridge.referenceEquals(p.Name, t.Name)) {
                                        var teamPrice = tutorialProject.nbaManager.UpdateTeamPrice(p, team);

                                        if (teamPrice <= totalAllowedStars) {
                                            t.Name = p.Name;
                                            t.Description = p.Description;
                                            t.Price = p.Price;
                                            t.Image = p.Image;
                                            tutorialProject.nbaManager.fillDiv(p);
                                            System.Console.WriteLine((t.Name || "") + " has been added to the team");
                                        } else {
                                            System.Console.WriteLine("Can not exceed 18 Stars for the whole team");
                                        }
                                    } else {
                                        System.Console.WriteLine("He is already in team");
                                    }
                                }
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    };
                    tableRow.appendChild(button);
                    table.appendChild(tableRow);
                },
                UpdateTeamPrice: function (p, team) {
                    var $t;
                    var teamPrice = 0;
                    $t = Bridge.getEnumerator(team);
                    try {
                        while ($t.moveNext()) {
                            var t = $t.Current;
                            if (Bridge.referenceEquals(p.Position, t.Position)) {
                                t.Price = p.Price;
                            }
                            teamPrice = (teamPrice + t.Price) | 0;
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    return teamPrice;
                },
                fillDiv: function (p) {
                    if (Bridge.referenceEquals(p.Position, "Point Guard")) {
                        var div = document.querySelector("#pointGuardSpot");
                        div.innerHTML = "Point Guard: " + (p.Name || "") + " " + p.Price;
                    } else if (Bridge.referenceEquals(p.Position, "Shooting Guard")) {
                        var div1 = document.querySelector("#shootingGuardSpot");
                        div1.innerHTML = "Shooting Guard: " + (p.Name || "") + " " + p.Price;
                    } else if (Bridge.referenceEquals(p.Position, "Small Forward")) {
                        var div2 = document.querySelector("#smallForwardSpot");
                        div2.innerHTML = "Small Forward: " + (p.Name || "") + " " + p.Price;
                    } else if (Bridge.referenceEquals(p.Position, "Power Forward")) {
                        var div3 = document.querySelector("#powerForwardSpot");
                        div3.innerHTML = "Power Forward: " + (p.Name || "") + " " + p.Price;
                    } else if (Bridge.referenceEquals(p.Position, "Center")) {
                        var div4 = document.querySelector("#centerSpot");
                        div4.innerHTML = "Center: " + (p.Name || "") + " " + p.Price;
                    }
                },
                fillCourt: function (teamInfo, teamList) {
                    var $t;
                    var teamInfoName = document.querySelector("#teamInfoName");
                    teamInfoName.innerHTML = ("Team Name: " + (teamInfo.Name || ""));
                    var teamInfoStadium = document.querySelector("#teamInfoStadium");
                    teamInfoStadium.innerHTML = ("Team Stadium: " + (teamInfo.Stadium || ""));
                    var teamInfoCity = document.querySelector("#teamInfoCity");
                    teamInfoCity.innerHTML = ("Team City: " + (teamInfo.City || ""));
                    var teamInfoState = document.querySelector("#teamInfoState");
                    teamInfoState.innerHTML = ("Team State: " + (teamInfo.State || ""));

                    $t = Bridge.getEnumerator(teamList);
                    try {
                        while ($t.moveNext()) {
                            var t = $t.Current;
                            if (Bridge.referenceEquals(t.Position, "Point Guard")) {
                                var pointGuard = document.querySelector("#pointGuard");
                                pointGuard.innerHTML = "";
                                var img = document.createElement("img");
                                img.setAttribute("src", t.Image);
                                pointGuard.appendChild(img);
                            } else if (Bridge.referenceEquals(t.Position, "Shooting Guard")) {
                                var shootingGuard = document.querySelector("#shootingGuard");
                                shootingGuard.innerHTML = "";
                                var img1 = document.createElement("img");
                                img1.setAttribute("src", t.Image);
                                shootingGuard.appendChild(img1);
                            } else if (Bridge.referenceEquals(t.Position, "Small Forward")) {
                                var smallForward = document.querySelector("#smallForward");
                                smallForward.innerHTML = "";
                                var img2 = document.createElement("img");
                                img2.setAttribute("src", t.Image);
                                smallForward.appendChild(img2);
                            } else if (Bridge.referenceEquals(t.Position, "Power Forward")) {
                                var powerForward = document.querySelector("#powerForward");
                                powerForward.innerHTML = "";
                                var img3 = document.createElement("img");
                                img3.setAttribute("src", t.Image);
                                powerForward.appendChild(img3);
                            } else if (Bridge.referenceEquals(t.Position, "Center")) {
                                var center = document.querySelector("#center");
                                center.innerHTML = "";
                                var img4 = document.createElement("img");
                                img4.setAttribute("src", t.Image);
                                center.appendChild(img4);
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                }
            }
        },
        $entryPoint: true
    });

    Bridge.define("tutorialProject.Player", {
        fields: {
            Position: null,
            Name: null,
            Description: null,
            Price: 0,
            Image: null
        },
        ctors: {
            ctor: function (position, name, description, price, image) {
                this.$initialize();
                this.Position = position;
                this.Name = name;
                this.Description = description;
                this.Price = price;
                this.Image = image;
            }
        }
    });

    Bridge.define("tutorialProject.teamInfo", {
        fields: {
            Name: null,
            Stadium: null,
            City: null,
            State: null
        },
        ctors: {
            ctor: function (name, stadium, city, state) {
                this.$initialize();
                this.Name = name;
                this.Stadium = stadium;
                this.City = city;
                this.State = state;
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJEZW1vLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJuYmFNYW5nZXIuY3MiXSwKICAibmFtZXMiOiBbIiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQVlZQSxpQkFBc0JBO29CQUN0QkEsZUFBb0JBOztvQkFHcEJBO29CQUVBQSxlQUFvQkEsSUFBSUE7OztvQkFJeEJBLDRDQUFjQSxJQUFJQTtvQkFDbEJBLDRDQUFjQSxJQUFJQTtvQkFDbEJBLDRDQUFjQSxJQUFJQTtvQkFDbEJBLDRDQUFjQSxJQUFJQTtvQkFDbEJBLDRDQUFjQSxJQUFJQTs7OztvQkFLbEJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsZ0RBQWdCQSxJQUFJQTtvQkFDcEJBLGdEQUFnQkEsSUFBSUE7b0JBQ3BCQSxnREFBZ0JBLElBQUlBO29CQUNwQkEsZ0RBQWdCQSxJQUFJQTtvQkFDcEJBLGdEQUFnQkEsSUFBSUE7b0JBQ3BCQSxnREFBZ0JBLElBQUlBO29CQUNwQkEsZ0RBQWdCQSxJQUFJQTtvQkFDcEJBLGdEQUFnQkEsSUFBSUE7b0JBQ3BCQSxnREFBZ0JBLElBQUlBO29CQUNwQkEsZ0RBQWdCQSxJQUFJQTs7b0JBR3BCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBa0JBLElBQUlBO29CQUN0QkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTs7b0JBR3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTs7b0JBR3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBOztvQkFHckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlC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RUxBLG9CQUFvQkE7Z0NBQ3BCQTtnQ0FDQUEsV0FBVUE7Z0NBQ1ZBLHlCQUF3QkE7Z0NBQ3hCQSwwQkFBMEJBO21DQUV6QkEsSUFBSUE7Z0NBRUxBLG1CQUFtQkE7Z0NBQ25CQTtnQ0FDQUEsV0FBVUE7Z0NBQ1ZBLHlCQUF3QkE7Z0NBQ3hCQSx5QkFBeUJBO21DQUV4QkEsSUFBSUE7Z0NBRUxBLG1CQUFtQkE7Z0NBQ25CQTtnQ0FDQUEsV0FBVUE7Z0NBQ1ZBLHlCQUF3QkE7Z0NBQ3hCQSx5QkFBeUJBO21DQUV4QkEsSUFBSUE7Z0NBRUxBLGFBQWFBO2dDQUNiQTtnQ0FDQUEsV0FBVUE7Z0NBQ1ZBLHlCQUF3QkE7Z0NBQ3hCQSxtQkFBbUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBY2pCQSxVQUFpQkEsTUFBYUEsYUFBb0JBLE9BQVdBOztnQkFFdkVBLGdCQUFXQTtnQkFDWEEsWUFBT0E7Z0JBQ1BBLG1CQUFjQTtnQkFDZEEsYUFBUUE7Z0JBQ1JBLGFBQVFBOzs7Ozs7Ozs7Ozs7OzRCQVdJQSxNQUFhQSxTQUFnQkEsTUFBYUE7O2dCQUV0REEsWUFBT0E7Z0JBQ1BBLGVBQVVBO2dCQUNWQSxZQUFPQTtnQkFDUEEsYUFBUUEiLAogICJzb3VyY2VzQ29udGVudCI6IFsidXNpbmcgU3lzdGVtO1xyXG51c2luZyBCcmlkZ2U7XHJcbnVzaW5nIEJyaWRnZS5IdG1sNTtcclxuXHJcbm5hbWVzcGFjZSB0dXRvcmlhbFByb2plY3Rcclxue1xyXG4gICAgcHVibGljIGNsYXNzIG5iYU1hbmFnZXJcclxuICAgIHtcclxuICAgICAgICBbUmVhZHldXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIE1haW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9DcmVhdGUgYXJyYXkgZm9yIGFsbCBwbGF5ZXJzIGFuZCBvbmUgZm9yIHdoZXJlIHNlbGVjdGVkIHBsYXllcnMgd2lsbCBnb1xyXG4gICAgICAgICAgICBQbGF5ZXJbXSBwbGF5ZXJMaXN0ID0gbmV3IFBsYXllcls3MV07XHJcbiAgICAgICAgICAgIFBsYXllcltdIHRlYW1MaXN0ID0gbmV3IFBsYXllcls1XTtcclxuXHJcbiAgICAgICAgICAgIC8vQ3JlYXRlIGludCB2YWx1ZSBmb3IgaG93IG1hbnkgc3RhcnMgdGhleSBjYW4gdXNlXHJcbiAgICAgICAgICAgIGludCB0b3RhbEFsbG93ZWRTdGFycyA9IDE4O1xyXG4gICAgICAgICAgICAvL0NyZWF0ZSBkZWZhdWx0IHRlYW0gaW5mbyB3aGVyZSB2YWx1ZXMgb2YgdGV4dGJveCB3aWxsIGdvXHJcbiAgICAgICAgICAgIHRlYW1JbmZvIHRlYW1JbmZvID0gbmV3IHRlYW1JbmZvKFwiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvL0xvYWQgRGVmYXVsdCBQbGF5ZXJzIGludG8gdGVhbUxpc3RcclxuICAgICAgICAgICAgdGVhbUxpc3RbMF0gPSBuZXcgUGxheWVyKFwiUG9pbnQgR3VhcmRcIiwgXCJOMVwiLCBcIkQxXCIsIDAsIFwiSTFcIik7XHJcbiAgICAgICAgICAgIHRlYW1MaXN0WzFdID0gbmV3IFBsYXllcihcIlNob290aW5nIEd1YXJkXCIsIFwiTjJcIiwgXCJEMlwiLCAwLCBcIkkyXCIpO1xyXG4gICAgICAgICAgICB0ZWFtTGlzdFsyXSA9IG5ldyBQbGF5ZXIoXCJTbWFsbCBGb3J3YXJkXCIsIFwiTjNcIiwgXCJEM1wiLCAwLCBcIkkzXCIpO1xyXG4gICAgICAgICAgICB0ZWFtTGlzdFszXSA9IG5ldyBQbGF5ZXIoXCJQb3dlciBGb3J3YXJkXCIsIFwiTjRcIiwgXCJENFwiLCAwLCBcIkk0XCIpO1xyXG4gICAgICAgICAgICB0ZWFtTGlzdFs0XSA9IG5ldyBQbGF5ZXIoXCJDZW50ZXJcIiwgXCJONVwiLCBcIkQ1XCIsIDAsIFwiSTVcIik7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vTG9hZCBhbGwgUG9pbnRpbmcgR3VhcmRzXHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbMTddID0gbmV3IFBsYXllcihcIlBvaW50IEd1YXJkXCIsIFwiSm9obiBXYWxsXCIsIFwiSEVJR0hUOiA2JzMsIFdFSUdIVDogMjEwbGIsIEFHRTogMzAgeWVhcnMsIEV4cGVyaWVuY2U6IDkgWWVhcnNcIiwgMiwgXCJJbWFnZXMvSm9obldhbGwuanBnXCIpOyBcclxuICAgICAgICAgICAgcGxheWVyTGlzdFsxNl0gPSBuZXcgUGxheWVyKFwiUG9pbnQgR3VhcmRcIiwgXCJMYU1lbG8gQmFsbFwiLCBcIkhFSUdIVDogNic2LCBXRUlHSFQ6IDE4MGxiLCBBR0U6IDE5IHllYXJzLCBFeHBlcmllbmNlOiBSb29raWVcIiwgMiwgXCJJbWFnZXMvTGFNZWxvQmFsbC5qcGdcIik7IFxyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzE1XSA9IG5ldyBQbGF5ZXIoXCJQb2ludCBHdWFyZFwiLCBcIkphIE1vcmFudFwiLCBcIkhFSUdIVDogNiczLCBXRUlHSFQ6IDE3NGxiLCBBR0U6IDIxIHllYXJzLCBFeHBlcmllbmNlOiAxIFllYXJzXCIsIDIsIFwiSW1hZ2VzL0phTW9yYW50LmpwZ1wiKTsgXHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbMTRdID0gbmV3IFBsYXllcihcIlBvaW50IEd1YXJkXCIsIFwiRGVycmljayBSb3NlXCIsIFwiSEVJR0hUOiA2JzIsIFdFSUdIVDogMjAwbGIsIEFHRTogMzIgeWVhcnMsIEV4cGVyaWVuY2U6IDExIFllYXJzXCIsIDIsIFwiSW1hZ2VzL0RlcnJpY2tSb3NlLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFsxM10gPSBuZXcgUGxheWVyKFwiUG9pbnQgR3VhcmRcIiwgXCJUcmFlIFlvdW5nXCIsIFwiSEVJR0hUOiA2JzEsIFdFSUdIVDogMTgwbGIsIEFHRTogMjIgeWVhcnMsIEV4cGVyaWVuY2U6IDIgWWVhcnNcIiwgMywgXCJJbWFnZXMvVHJhZVlvdW5nLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFsxMl0gPSBuZXcgUGxheWVyKFwiUG9pbnQgR3VhcmRcIiwgXCJKYW1hbCBNdXJyYXlcIiwgXCJIRUlHSFQ6IDYnMywgV0VJR0hUOiAyMTVsYiwgQUdFOiAyNCB5ZWFycywgRXhwZXJpZW5jZTogNCBZZWFyc1wiLCAzLCBcIkltYWdlcy9KYW1hbE11cnJheS5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbMTFdID0gbmV3IFBsYXllcihcIlBvaW50IEd1YXJkXCIsIFwiS3lsZSBMb3dyeVwiLCBcIkhFSUdIVDogNicwLCBXRUlHSFQ6IDE5NmxiLCBBR0U6IDM1IHllYXJzLCBFeHBlcmllbmNlOiAxNCBZZWFyc1wiLCAzLCBcIkltYWdlcy9LeWxlTG93cnkuanBnXCIpOyBcclxuICAgICAgICAgICAgcGxheWVyTGlzdFsxMF0gPSBuZXcgUGxheWVyKFwiUG9pbnQgR3VhcmRcIiwgXCJLZW1iYSBXYWxrZXJcIiwgXCJIRUlHSFQ6IDYnMCwgV0VJR0hUOiAxODRsYiwgQUdFOiAzMCB5ZWFycywgRXhwZXJpZW5jZTogOSBZZWFyc1wiLCAzLCBcIkltYWdlcy9LZW1iYVdhbGtlci5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbOV0gPSBuZXcgUGxheWVyKFwiUG9pbnQgR3VhcmRcIiwgXCJEJ0FuZ2VsbyBSdXNzZWxsXCIsIFwiSEVJR0hUOiA2JzQsIFdFSUdIVDogMTkzbGIsIEFHRTogMjUgeWVhcnMsIEV4cGVyaWVuY2U6IDUgWWVhcnNcIiwgMywgXCJJbWFnZXMvREFuZ2Vsb1J1c3NlbGwuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzhdID0gbmV3IFBsYXllcihcIlBvaW50IEd1YXJkXCIsIFwiVHlsZXIgSGVycm9cIiwgXCJIRUlHSFQ6IDYnNSwgV0VJR0hUOiAxOTVsYiwgQUdFOiAyMSB5ZWFycywgRXhwZXJpZW5jZTogMSBZZWFyc1wiLCAzLCBcIkltYWdlcy9UeWxlckhlcnJvLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs3XSA9IG5ldyBQbGF5ZXIoXCJQb2ludCBHdWFyZFwiLCBcIkpydWUgSG9saWRheVwiLCBcIkhFSUdIVDogNiczLCBXRUlHSFQ6IDIwNWxiLCBBR0U6IDMwIHllYXJzLCBFeHBlcmllbmNlOiAxMSBZZWFyc1wiLCAzLCBcIkltYWdlcy9KcnVlSG9saWRheS5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbNl0gPSBuZXcgUGxheWVyKFwiUG9pbnQgR3VhcmRcIiwgXCJMdWthIERvbmNpY1wiLCBcIkhFSUdIVDogNic3LCBXRUlHSFQ6IDIzMGxiLCBBR0U6IDIyIHllYXJzLCBFeHBlcmllbmNlOiAyIFllYXJzXCIsIDQsIFwiSW1hZ2VzL0x1a2FEb25jaWMuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzVdID0gbmV3IFBsYXllcihcIlBvaW50IEd1YXJkXCIsIFwiUnVzc2VsbCBXZXN0YnJvb2tcIiwgXCJIRUlHSFQ6IDYnMywgV0VJR0hUOiAyMDBsYiwgQUdFOiAzMiB5ZWFycywgRXhwZXJpZW5jZTogMTIgWWVhcnNcIiwgNCwgXCJJbWFnZXMvUnVzc2VsbFdlc3Ricm9vay5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbNF0gPSBuZXcgUGxheWVyKFwiUG9pbnQgR3VhcmRcIiwgXCJCZW4gU2ltbW9uc1wiLCBcIkhFSUdIVDogNicxMSwgV0VJR0hUOiAyNDBsYiwgQUdFOiAyNCB5ZWFycywgRXhwZXJpZW5jZTogMyBZZWFyc1wiLCA0LCBcIkltYWdlcy9CZW5TaW1tb25zLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFszXSA9IG5ldyBQbGF5ZXIoXCJQb2ludCBHdWFyZFwiLCBcIkNocmlzIFBhdWxcIiwgXCJIRUlHSFQ6IDYnMCwgV0VJR0hUOiAxNzVsYiwgQUdFOiAzNSB5ZWFycywgRXhwZXJpZW5jZTogMTUgWWVhcnNcIiwgNCwgXCJJbWFnZXMvQ2hyaXNQYXVsLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFsyXSA9IG5ldyBQbGF5ZXIoXCJQb2ludCBHdWFyZFwiLCBcIkRhbWlhbiBMaWxsYXJkXCIsIFwiSEVJR0hUOiA2JzIsIFdFSUdIVDogMTk1bGIsIEFHRTogMzAgeWVhcnMsIEV4cGVyaWVuY2U6IDggWWVhcnNcIiwgNSwgXCJJbWFnZXMvRGFtaWFuTGlsbGFyZC5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbMV0gPSBuZXcgUGxheWVyKFwiUG9pbnQgR3VhcmRcIiwgXCJTdGVwaGVuIEN1cnJ5XCIsIFwiSEVJR0hUOiA2JzMsIFdFSUdIVDogMTg1bGIsIEFHRTogMzMgeWVhcnMsIEV4cGVyaWVuY2U6IDExIFllYXJzXCIsIDUsIFwiSW1hZ2VzL1N0ZXBoZW5DdXJyeS5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbMF0gPSBuZXcgUGxheWVyKFwiUG9pbnQgR3VhcmRcIiwgXCJLeXJpZSBJcnZpbmdcIiwgXCJIRUlHSFQ6IDYnMiwgV0VJR0hUOiAxOTVsYiBBR0U6IDI5IHllYXJzLCBFeHBlcmllbmNlOiA5IFllYXJzXCIsIDUsIFwiSW1hZ2VzL0t5cmllSXJ2aW5nLmpwZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vTG9hZCBhbGwgU2hvb3RpbmcgR3VhcmRzXHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbMzFdID0gbmV3IFBsYXllcihcIlNob290aW5nIEd1YXJkXCIsIFwiTG91IFdpbGxpYW1zXCIsIFwiSEVJR0hUOiA2JzEsIFdFSUdIVDogMTc1bGIsIEFHRTogMzQgeWVhcnMsIEV4cGVyaWVuY2U6IDE1IFllYXJzXCIsIDIsIFwiSW1hZ2VzL0xvdVdpbGxpYW1zLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFszMF0gPSBuZXcgUGxheWVyKFwiU2hvb3RpbmcgR3VhcmRcIiwgXCJKYXlsZW4gQnJvd25cIiwgXCJIRUlHSFQ6IDYnNiwgV0VJR0hUOiAyMjNsYiwgQUdFOiAyNCB5ZWFycywgRXhwZXJpZW5jZTogNCBZZWFyc1wiLCAyLCBcIkltYWdlcy9KYXlsZW5Ccm93bi5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbMjldID0gbmV3IFBsYXllcihcIlNob290aW5nIEd1YXJkXCIsIFwiU2V0aCBDdXJyeVwiLCBcIkhFSUdIVDogNicyLCBXRUlHSFQ6IDE4NWxiLCBBR0U6IDMwIHllYXJzLCBFeHBlcmllbmNlOiA2IFllYXJzXCIsIDIsIFwiSW1hZ2VzL1NldGhDdXJyeS5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbMjhdID0gbmV3IFBsYXllcihcIlNob290aW5nIEd1YXJkXCIsIFwiQnVkZHkgSGllbGRcIiwgXCJIRUlHSFQ6IDYnNCwgV0VJR0hUOiAyMjBsYiwgQUdFOiAyOCB5ZWFycywgRXhwZXJpZW5jZTogNCBZZWFyc1wiLCAyLCBcIkltYWdlcy9CdWRkeUhpZWxkLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFsyN10gPSBuZXcgUGxheWVyKFwiU2hvb3RpbmcgR3VhcmRcIiwgXCJCcmFkbGV5IEJlYWxcIiwgXCJIRUlHSFQ6IDYnMywgV0VJR0hUOiAyMDdsYiwgQUdFOiAyNyB5ZWFycywgRXhwZXJpZW5jZTogOCBZZWFyc1wiLCAzLCBcIkltYWdlcy9CcmFkbGV5QmVhbC5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbMjZdID0gbmV3IFBsYXllcihcIlNob290aW5nIEd1YXJkXCIsIFwiRG9ub3ZhbiBNaXRjaGVsbFwiLCBcIkhFSUdIVDogNicxLCBXRUlHSFQ6IDIxNWxiLCBBR0U6IDI0IHllYXJzLCBFeHBlcmllbmNlOiAzIFllYXJzXCIsIDMsIFwiSW1hZ2VzL0Rvbm92YW5NaXRjaGVsbC5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbMjVdID0gbmV3IFBsYXllcihcIlNob290aW5nIEd1YXJkXCIsIFwiQ0ogTWNDb2xsdW1cIiwgXCJIRUlHSFQ6IDYnMywgV0VJR0hUOiAxOTBsYiwgQUdFOiAyOSB5ZWFycywgRXhwZXJpZW5jZTogNyBZZWFyc1wiLCAzLCBcIkltYWdlcy9DSk1jQ29sbHVtLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFsyNF0gPSBuZXcgUGxheWVyKFwiU2hvb3RpbmcgR3VhcmRcIiwgXCJaYWNoIExhdmluZVwiLCBcIkhFSUdIVDogNic1LCBXRUlHSFQ6IDIwMGxiLCBBR0U6IDI2IHllYXJzLCBFeHBlcmllbmNlOiA2IFllYXJzXCIsIDMsIFwiSW1hZ2VzL1phY2hMYXZpbmUuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzIzXSA9IG5ldyBQbGF5ZXIoXCJTaG9vdGluZyBHdWFyZFwiLCBcIkRldmluIEJvb2tlclwiLCBcIkhFSUdIVDogNic1LCBXRUlHSFQ6IDIwNmxiLCBBR0U6IDI0IHllYXJzLCBFeHBlcmllbmNlOiA1IFllYXJzXCIsIDQsIFwiSW1hZ2VzL0RldmluQm9va2VyLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFsyMl0gPSAgbmV3IFBsYXllcihcIlNob290aW5nIEd1YXJkXCIsIFwiU2hhaSBHaWxnZW91cy1BbGV4YW5kZXJcIiwgXCJIRUlHSFQ6IDYnNiwgV0VJR0hUOiAxODBsYiwgQUdFOiAyMiB5ZWFycywgRXhwZXJpZW5jZTogMiBZZWFyc1wiLCA0LCBcIkltYWdlcy9TaGFpR2lsZ2VvdXNBbGV4YW5kZXIuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzIxXSA9IG5ldyBQbGF5ZXIoXCJTaG9vdGluZyBHdWFyZFwiLCBcIktsYXkgVGhvbXBzb25cIiwgXCJIRUlHSFQ6IDYnNiwgV0VJR0hUOiAyMTVsYiwgQUdFOiAzMSB5ZWFycywgRXhwZXJpZW5jZTogOCBZZWFyc1wiLCA0LCBcIkltYWdlcy9LbGF5VGhvbXBzb24uanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzIwXSA9IG5ldyBQbGF5ZXIoXCJTaG9vdGluZyBHdWFyZFwiLCBcIkRlTWFyIERlUm96YW5cIiwgXCJIRUlHSFQ6IDYnNiwgV0VJR0hUOiAyMjBsYiwgQUdFOiAzMSB5ZWFycywgRXhwZXJpZW5jZTogMTEgWWVhcnNcIiwgNCwgXCJJbWFnZXMvRGVNYXJEZVJvemFuLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFsxOV0gPSBuZXcgUGxheWVyKFwiU2hvb3RpbmcgR3VhcmRcIiwgXCJKaW1teSBCdXRsZXJcIiwgXCJIRUlHSFQ6IDYnNywgV0VJR0hUOiAyMzBsYiwgQUdFOiAzMSB5ZWFycywgRXhwZXJpZW5jZTogOSBZZWFyc1wiLCA0LCBcIkltYWdlcy9KaW1teUJ1dGxlci5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbMThdID0gbmV3IFBsYXllcihcIlNob290aW5nIEd1YXJkXCIsIFwiSmFtZXMgSGFyZGVuXCIsIFwiSEVJR0hUOiA2JzUsIFdFSUdIVDogMjIwbGIsIEFHRTogMzEgeWVhcnMsIEV4cGVyaWVuY2U6IDExIFllYXJzXCIsIDUsIFwiSW1hZ2VzL0phbWVzSGFyZGVuLmpwZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vTG9hZCBhbGwgU21hbGwgRm9yd2FyZHNcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs0Ml0gPSBuZXcgUGxheWVyKFwiU21hbGwgRm9yd2FyZFwiLCBcIlRKIFdhcnJlblwiLCBcIkhFSUdIVDogNic4LCBXRUlHSFQ6IDIyMGxiLCBBR0U6IDI3IHllYXJzLCBFeHBlcmllbmNlOiA2IFllYXJzXCIsIDIsIFwiSW1hZ2VzL1RKV2FycmVuLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs0MV0gPSBuZXcgUGxheWVyKFwiU21hbGwgRm9yd2FyZFwiLCBcIktlbGx5IE91YnJlIEpyLlwiLCBcIkhFSUdIVDogNic3LCBXRUlHSFQ6IDIwM2xiLCBBR0U6IDI1IHllYXJzLCBFeHBlcmllbmNlOiA1IFllYXJzXCIsIDIsIFwiSW1hZ2VzL0tlbGx5T3VicmUuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzQwXSA9IG5ldyBQbGF5ZXIoXCJTbWFsbCBGb3J3YXJkXCIsIFwiR29yZG9uIEhheXdhcmRcIiwgXCJIRUlHSFQ6IDYnNywgV0VJR0hUOiAyMjVsYiwgQUdFOiAzMSB5ZWFycywgRXhwZXJpZW5jZTogMTAgWWVhcnNcIiwgMiwgXCJJbWFnZXMvR29yZG9uSGF5d2FyZC5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbMzldID0gbmV3IFBsYXllcihcIlNtYWxsIEZvcndhcmRcIiwgXCJUb2JpYXMgSGFycmlzXCIsIFwiSEVJR0hUOiA2JzgsIFdFSUdIVDogMjI2bGIsIEFHRTogMjggeWVhcnMsIEV4cGVyaWVuY2U6IDkgWWVhcnNcIiwgMywgXCJJbWFnZXMvVG9iaWFzSGFycmlzLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFszOF0gPSBuZXcgUGxheWVyKFwiU21hbGwgRm9yd2FyZFwiLCBcIkJyYW5kb24gSW5ncmFtXCIsIFwiSEVJR0hUOiA2JzgsIFdFSUdIVDogMTkwbGIsIEFHRTogMjMgeWVhcnMsIEV4cGVyaWVuY2U6IDQgWWVhcnNcIiwgMywgXCJJbWFnZXMvQnJhbmRvbkluZ3JhbS5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbMzddID0gbmV3IFBsYXllcihcIlNtYWxsIEZvcndhcmRcIiwgXCJLaHJpcyBNaWRkbGV0b25cIiwgXCJIRUlHSFQ6IDYnNywgV0VJR0hUOiAyMjJsYiwgQUdFOiAyOSB5ZWFycywgRXhwZXJpZW5jZTogOCBZZWFyc1wiLCAzLCBcIkltYWdlcy9LaHJpc01pZGRsZXRvbi5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbMzZdID0gbmV3IFBsYXllcihcIlNtYWxsIEZvcndhcmRcIiwgXCJQYXVsIEdlb3JnZVwiLCBcIkhFSUdIVDogNic4LCBXRUlHSFQ6IDIyMGxiLCBBR0U6IDMwIHllYXJzLCBFeHBlcmllbmNlOiAxMCBZZWFyc1wiLCAzLCBcIkltYWdlcy9QYXVsR2VvcmdlLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFszNV0gPSBuZXcgUGxheWVyKFwiU21hbGwgRm9yd2FyZFwiLCBcIkpheXNvbiBUYXR1bVwiLCBcIkhFSUdIVDogNic4LCBXRUlHSFQ6IDIxMGxiLCBBR0U6IDIzIHllYXJzLCBFeHBlcmllbmNlOiAzIFllYXJzXCIsIDQsIFwiSW1hZ2VzL0pheXNvblRhdHVtLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFszNF0gPSBuZXcgUGxheWVyKFwiU21hbGwgRm9yd2FyZFwiLCBcIkxlQnJvbiBKYW1lc1wiLCBcIkhFSUdIVDogNic5LCBXRUlHSFQ6IDI1MGxiLCBBR0U6IDM2IHllYXJzLCBFeHBlcmllbmNlOiAxNyBZZWFyc1wiLCA1LCBcIkltYWdlcy9MZUJyb25KYW1lcy5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbMzNdID0gbmV3IFBsYXllcihcIlNtYWxsIEZvcndhcmRcIiwgXCJLYXdoaSBMZW9uYXJkXCIsIFwiSEVJR0hUOiA2JzcsIFdFSUdIVDogMjI1bGIsIEFHRTogMjkgeWVhcnMsIEV4cGVyaWVuY2U6IDkgWWVhcnNcIiwgNSwgXCJJbWFnZXMvS2F3aGlMZW9uYXJkLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFszMl0gPSBuZXcgUGxheWVyKFwiU21hbGwgRm9yd2FyZFwiLCBcIktldmluIER1cmFudFwiLCBcIkhFSUdIVDogNicxMCwgV0VJR0hUOiAyNDBsYiwgQUdFOiAzMiB5ZWFycywgRXhwZXJpZW5jZTogMTIgWWVhcnNcIiwgNSwgXCJJbWFnZXMvS2V2aW5EdXJhbnQuanBnXCIpO1xyXG5cclxuICAgICAgICAgICAgLy9Mb2FkIGFsbCBQb3dlciBGb3J3YXJkc1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzU1XSA9IG5ldyBQbGF5ZXIoXCJQb3dlciBGb3J3YXJkXCIsIFwiS2V2aW4gTG92ZVwiLCBcIkhFSUdIVDogNic4LCBXRUlHSFQ6IDI1MWxiLCBBR0U6IDMyIHllYXJzLCBFeHBlcmllbmNlOiAxMiBZZWFyc1wiLCAxLCBcIkltYWdlcy9LZXZpbkxvdmUuanBnXCIpOyBcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs1NF0gPSBuZXcgUGxheWVyKFwiUG93ZXIgRm9yd2FyZFwiLCBcIkJsYWtlIEdyaWZmaW5cIiwgXCJIRUlHSFQ6IDYnOSwgV0VJR0hUOiAyNTBsYiwgQUdFOiAzMiB5ZWFycywgRXhwZXJpZW5jZTogMTAgWWVhcnNcIiwgMiwgXCJJbWFnZXMvQmxha2VHcmlmZmluLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs1M10gPSBuZXcgUGxheWVyKFwiUG93ZXIgRm9yd2FyZFwiLCBcIkphcmVuIEphY2tzb24gSnIuXCIsIFwiSEVJR0hUOiA2JzExLCBXRUlHSFQ6IDI0MmxiLCBBR0U6IDIxIHllYXJzLCBFeHBlcmllbmNlOiAyIFllYXJzXCIsIDIsIFwiSW1hZ2VzL0phcmVuSmFja3NvbkpyLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs1Ml0gPSBuZXcgUGxheWVyKFwiUG93ZXIgRm9yd2FyZFwiLCBcIkFhcm9uIEdvcmRvblwiLCBcIkhFSUdIVDogNic4LCBXRUlHSFQ6IDIzNWxiLCBBR0U6IDI1IHllYXJzLCBFeHBlcmllbmNlOiA2IFllYXJzXCIsIDIsIFwiSW1hZ2VzL0Fhcm9uR29yZG9uLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs1MV0gPSBuZXcgUGxheWVyKFwiUG93ZXIgRm9yd2FyZFwiLCBcIlNlcmdlIEliYWthXCIsIFwiSEVJR0hUOiA2JzEwLCBXRUlHSFQ6IDIzNWxiLCBBR0U6IDMxIHllYXJzLCBFeHBlcmllbmNlOiAxMSBZZWFyc1wiLCAyLCBcIkltYWdlcy9TZXJnZUliYWthLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs1MF0gPSBuZXcgUGxheWVyKFwiUG93ZXIgRm9yd2FyZFwiLCBcIkFsIEhvcmZvcmRcIiwgXCJIRUlHSFQ6IDYnOSwgV0VJR0hUOiAyNDBsYiwgQUdFOiAzNCB5ZWFycywgRXhwZXJpZW5jZTogMTMgWWVhcnNcIiwgMiwgXCJJbWFnZXMvQWxIb3Jmb3JkLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs0OV0gPSBuZXcgUGxheWVyKFwiUG93ZXIgRm9yd2FyZFwiLCBcIkNhcm1lbG8gQW50aG9ueVwiLCBcIkhFSUdIVDogNic3LCBXRUlHSFQ6IDIzOGxiLCBBR0U6IDM2IHllYXJzLCBFeHBlcmllbmNlOiAxNyBZZWFyc1wiLCAyLCBcIkltYWdlcy9DYXJtZWxvQW50aG9ueS5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbNDhdID0gbmV3IFBsYXllcihcIlBvd2VyIEZvcndhcmRcIiwgXCJQYXNjYWwgU2lha2FtXCIsIFwiSEVJR0hUOiA2JzksIFdFSUdIVDogMjMwbGIsIEFHRTogMjcgeWVhcnMsIEV4cGVyaWVuY2U6IDQgWWVhcnNcIiwgMywgXCJJbWFnZXMvUGFzY2FsU2lha2FtLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs0N10gPSBuZXcgUGxheWVyKFwiUG93ZXIgRm9yd2FyZFwiLCBcIkxhTWFyY3VzIEFsZHJpZGdlXCIsIFwiSEVJR0hUOiA2JzExLCBXRUlHSFQ6IDI1MGxiLCBBR0U6IDM1IHllYXJzLCBFeHBlcmllbmNlOiAxNCBZZWFyc1wiLCAzLCBcIkltYWdlcy9MYU1hcmN1c0FsZHJpZGdlLnBuZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs0Nl0gPSBuZXcgUGxheWVyKFwiUG93ZXIgRm9yd2FyZFwiLCBcIktyaXN0YXBzIFBvcnppbmdpc1wiLCBcIkhFSUdIVDogNyczLCBXRUlHSFQ6IDI0MGxiLCBBR0U6IDI1IHllYXJzLCBFeHBlcmllbmNlOiA0IFllYXJzXCIsIDMsIFwiSW1hZ2VzL0tyaXN0YXBzUG9yemluZ2lzLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs0NV0gPSBuZXcgUGxheWVyKFwiUG93ZXIgRm9yd2FyZFwiLCBcIkFudGhvbnkgRGF2aXNcIiwgXCJIRUlHSFQ6IDYnMTAsIFdFSUdIVDogMjUzbGIsIEFHRTogMjggeWVhcnMsIEV4cGVyaWVuY2U6IDggWWVhcnNcIiwgNCwgXCJJbWFnZXMvQW50aG9ueURhdmlzLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs0NF0gPSBuZXcgUGxheWVyKFwiUG93ZXIgRm9yd2FyZFwiLCBcIlppb24gV2lsbGlhbXNvblwiLCBcIkhFSUdIVDogNic3LCBXRUlHSFQ6IDI4NGxiLCBBR0U6IDIwIHllYXJzLCBFeHBlcmllbmNlOiAxIFllYXJzXCIsIDQsIFwiSW1hZ2VzL1ppb25XaWxsaWFtc29uLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs0M10gPSBuZXcgUGxheWVyKFwiUG93ZXIgRm9yd2FyZFwiLCBcIkdpYW5uaXMgQW50ZXRva291bm1wb1wiLCBcIkhFSUdIVDogNicxMSwgV0VJR0hUOiAyNDJsYiwgQUdFOiAyNiB5ZWFycywgRXhwZXJpZW5jZTogNyBZZWFyc1wiLCA1LCBcIkltYWdlcy9HaWFubmlzQW50ZXRva291bm1wby5qcGdcIik7XHJcblxyXG4gICAgICAgICAgICAvL0xvYWQgYWxsIENlbnRlcnNcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs3MF0gPSBuZXcgUGxheWVyKFwiQ2VudGVyXCIsIFwiSmFycmV0dCBBbGxlblwiLCBcIkhFSUdIVDogNicxMSwgV0VJR0hUOiAyNDNsYiwgQUdFOiAyMiB5ZWFycywgRXhwZXJpZW5jZTogMyBZZWFyc1wiLCAxLCBcIkltYWdlcy9KYXJyZXR0QWxsZW4uanBnXCIpOyBcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs2OV0gPSBuZXcgUGxheWVyKFwiQ2VudGVyXCIsIFwiQnJvb2sgTG9wZXpcIiwgXCJIRUlHSFQ6IDcnMCwgV0VJR0hUOiAyODJsYiwgQUdFOiAzMyB5ZWFycywgRXhwZXJpZW5jZTogMTIgWWVhcnNcIiwgMiwgXCJJbWFnZXMvQnJvb2tMb3Blei5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbNjhdID0gbmV3IFBsYXllcihcIkNlbnRlclwiLCBcIkNsaW50IENhcGVsYVwiLCBcIkhFSUdIVDogNicxMCwgV0UyNDBsYiwgQUdFOiAyNiB5ZWFycywgRXhwZXJpZW5jZTogNiBZZWFyc1wiLCAyLCBcIkltYWdlcy9DbGludENhcGVsYS5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbNjddID0gbmV3IFBsYXllcihcIkNlbnRlclwiLCBcIkhhc3NhbiBXaGl0ZXNpZGVcIiwgXCJIRUlHSFQ6IDcnMCwgV0VJR0hUOiAyNjVsYiwgQUdFOiAzMSB5ZWFycywgRXhwZXJpZW5jZTogOCBZZWFyc1wiLCAyLCBcIkltYWdlcy9IYXNzYW5XaGl0ZXNpZGUuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzY2XSA9IG5ldyBQbGF5ZXIoXCJDZW50ZXJcIiwgXCJEb21hbnRhcyBTYWJvbmlzXCIsIFwiSEVJR0hUOiA2JzExLCBXRUlHSFQ6IDI0MGxiLCBBR0U6IDI0IHllYXJzLCBFeHBlcmllbmNlOiA0IFllYXJzXCIsIDIsIFwiSW1hZ2VzL0RvbWFudGFzU2Fib25pcy5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbNjVdID0gbmV3IFBsYXllcihcIkNlbnRlclwiLCBcIk1hcmMgR2Fzb2xcIiwgXCJIRUlHSFQ6IDYnMTEsIFdFSUdIVDogMjU1bGIsIEFHRTogMjM2IHllYXJzLCBFeHBlcmllbmNlOiAxMiBZZWFyc1wiLCAyLCBcIkltYWdlcy9NYXJjR2Fzb2wuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzY0XSA9IG5ldyBQbGF5ZXIoXCJDZW50ZXJcIiwgXCJTdGV2ZW4gQWRhbXNcIiwgXCJIRUlHSFQ6IDYnMTEsIFdFSUdIVDogMjY1bGIsIEFHRTogMjcgeWVhcnMsIEV4cGVyaWVuY2U6IDcgWWVhcnNcIiwgMiwgXCJJbWFnZXMvU3RldmVuQWRhbXMuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzYzXSA9IG5ldyBQbGF5ZXIoXCJDZW50ZXJcIiwgXCJEZWFuZHJlIEF5dG9uXCIsIFwiSEVJR0hUOiA2JzExLCBXRUlHSFQ6IDI1MGxiLCBBR0U6IDIyIHllYXJzLCBFeHBlcmllbmNlOiAyIFllYXJcIiwgMywgXCJJbWFnZXMvRGVhbmRyZUF5dG9uLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs2Ml0gPSBuZXcgUGxheWVyKFwiQ2VudGVyXCIsIFwiTmlrb2xhIFZ1Y2V2aWNcIiwgXCJIRUlHSFQ6IDYnMTEsIFdFSUdIVDogMjYwbGIsIEFHRTogMzAgeWVhcnMsIEV4cGVyaWVuY2U6IDkgWWVhcnNcIiwgMywgXCJJbWFnZXMvTmlrb2xhVnVjZXZpYy5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbNjFdID0gbmV3IFBsYXllcihcIkNlbnRlclwiLCBcIkpvbmFzIFZhbGFuY2l1bmFzXCIsIFwiSEVJR0hUOiA2JzExLCBXRUlHSFQ6IDI2NWxiLCBBR0U6IDI4IHllYXJzLCBFeHBlcmllbmNlOiA4IFllYXJzXCIsIDMsIFwiSW1hZ2VzL0pvbmFzVmFsYW5jaXVuYXMuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzYwXSA9IG5ldyBQbGF5ZXIoXCJDZW50ZXJcIiwgXCJSdWR5IEdvYmVydFwiLCBcIkhFSUdIVDogNycxLCBXRUlHSFQ6IDI1OGxiLCBBR0U6IDI4IHllYXJzLCBFeHBlcmllbmNlOiA3IFllYXJzXCIsIDMsIFwiSW1hZ2VzL1J1ZHlHb2JlcnQuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzU5XSA9IG5ldyBQbGF5ZXIoXCJDZW50ZXJcIiwgXCJOaWtvbGEgSm9raWNcIiwgXCJIRUlHSFQ6IDYnMTEsIFdFSUdIVDogMjg0bGIsIEFHRTogMjYgeWVhcnMsIEV4cGVyaWVuY2U6IDUgWWVhcnNcIiwgNCwgXCJJbWFnZXMvTmlrb2xhSm9raWMuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzU4XSA9IG5ldyBQbGF5ZXIoXCJDZW50ZXJcIiwgXCJLYXJsLUFudGhvbnkgVG93bnNcIiwgXCJIRUlHSFQ6IDYnMTEsIFdFSUdIVDogMjQ4bGIsIEFHRTogMjUgeWVhcnMsIEV4cGVyaWVuY2U6IDUgWWVhcnNcIiwgNCwgXCJJbWFnZXMvS2FybEFudGhvbnlUb3ducy5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbNTddID0gbmV3IFBsYXllcihcIkNlbnRlclwiLCBcIkJhbSBBZGViYXlvXCIsIFwiSEVJR0hUOiA2JzksIFdFSUdIVDogMjU1bGIsIEFHRTogMjMgeWVhcnMsIEV4cGVyaWVuY2U6IDMgWWVhcnNcIiwgNCwgXCJJbWFnZXMvQmFtQWRlYmF5by5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbNTZdID0gbmV3IFBsYXllcihcIkNlbnRlclwiLCBcIkpvZWwgRW1iaWlkXCIsIFwiSEVJR0hUOiA3JzAsIFdFSUdIVDogMjgwbGIsIEFHRTogMjcgeWVhcnMsIEV4cGVyaWVuY2U6IDQgWWVhcnNcIiwgNSwgXCJJbWFnZXMvSm9lbEVtYmlpZC5qcGdcIik7XHJcblxyXG4gICAgICAgICAgICAvL0NyZWF0ZSBjbGljayBldmVudCB0byB0aGF0IGRyb3Bkb3duYm94IHNob3dzIG9wdGlvbnMgZm9yIGRpc3BsYXlpbmdcclxuICAgICAgICAgICAgdmFyIGRyb3BCdXR0b24gPSBEb2N1bWVudC5RdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIi5kcm9wQnRuXCIpO1xyXG4gICAgICAgICAgICBkcm9wQnV0dG9uLk9uQ2xpY2sgPSAoZXYpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIERvY3VtZW50LkdldEVsZW1lbnRCeUlkKFwibXlEcm9wZG93blwiKS5DbGFzc0xpc3QuVG9nZ2xlKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vQ3JlYXRlIGNsaWNrIGV2ZW50cyBzbyB0aGF0IHdoZW4gbmV3IHNlY3Rpb24gb2YgZHJvcGRvd24gYm94IGNsaWNrZWQgZGlmZmVyZW50IHNlY3Rpb25zIGFyZSBkaXNwbGF5ZWRcclxuICAgICAgICAgICAgdmFyIHBvaW50R3VhcmRMaW5rID0gRG9jdW1lbnQuUXVlcnlTZWxlY3RvcjxIVE1MQW5jaG9yRWxlbWVudD4oXCIjU2hvd1BvaW50R3VhcmRcIik7XHJcbiAgICAgICAgICAgIHBvaW50R3VhcmRMaW5rLk9uQ2xpY2sgPSAoZXYpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFNob3dQb3NpdGlvbihcIlBvaW50IEd1YXJkXCIsIHBsYXllckxpc3QsIHRlYW1MaXN0LCB0b3RhbEFsbG93ZWRTdGFycyk7XHJcbiAgICAgICAgICAgICAgICBkcm9wQnV0dG9uLkNsaWNrKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciBzaG9vdGluZ0d1YXJkTGluayA9IERvY3VtZW50LlF1ZXJ5U2VsZWN0b3I8SFRNTEFuY2hvckVsZW1lbnQ+KFwiI1Nob3dTaG9vdGluZ0d1YXJkXCIpO1xyXG4gICAgICAgICAgICBzaG9vdGluZ0d1YXJkTGluay5PbkNsaWNrID0gKGV2KSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBTaG93UG9zaXRpb24oXCJTaG9vdGluZyBHdWFyZFwiLCBwbGF5ZXJMaXN0LCB0ZWFtTGlzdCwgdG90YWxBbGxvd2VkU3RhcnMpO1xyXG4gICAgICAgICAgICAgICAgZHJvcEJ1dHRvbi5DbGljaygpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgc21hbGxGb3J3YXJkTGluayA9IERvY3VtZW50LlF1ZXJ5U2VsZWN0b3I8SFRNTEFuY2hvckVsZW1lbnQ+KFwiI1Nob3dTbWFsbEZvcndhcmRcIik7XHJcbiAgICAgICAgICAgIHNtYWxsRm9yd2FyZExpbmsuT25DbGljayA9IChldikgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgU2hvd1Bvc2l0aW9uKFwiU21hbGwgRm9yd2FyZFwiLCBwbGF5ZXJMaXN0LCB0ZWFtTGlzdCwgdG90YWxBbGxvd2VkU3RhcnMpO1xyXG4gICAgICAgICAgICAgICAgZHJvcEJ1dHRvbi5DbGljaygpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgcG93ZXJGb3J3YXJkTGluayA9IERvY3VtZW50LlF1ZXJ5U2VsZWN0b3I8SFRNTEFuY2hvckVsZW1lbnQ+KFwiI1Nob3dQb3dlckZvcndhcmRcIik7XHJcbiAgICAgICAgICAgIHBvd2VyRm9yd2FyZExpbmsuT25DbGljayA9IChldikgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgU2hvd1Bvc2l0aW9uKFwiUG93ZXIgRm9yd2FyZFwiLCBwbGF5ZXJMaXN0LCB0ZWFtTGlzdCwgdG90YWxBbGxvd2VkU3RhcnMpO1xyXG4gICAgICAgICAgICAgICAgZHJvcEJ1dHRvbi5DbGljaygpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgY2VudGVyTGluayA9IERvY3VtZW50LlF1ZXJ5U2VsZWN0b3I8SFRNTEFuY2hvckVsZW1lbnQ+KFwiI1Nob3dDZW50ZXJcIik7XHJcbiAgICAgICAgICAgIGNlbnRlckxpbmsuT25DbGljayA9IChldikgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgU2hvd1Bvc2l0aW9uKFwiQ2VudGVyXCIsIHBsYXllckxpc3QsIHRlYW1MaXN0LCB0b3RhbEFsbG93ZWRTdGFycyk7XHJcbiAgICAgICAgICAgICAgICBkcm9wQnV0dG9uLkNsaWNrKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvL0NyZWF0ZSBjbGljayBldmVudCBmb3IgZmluYWwgc3VibWl0IHdoZXJlIGl0IGNoZWNrcyB0byBtYWtlIHN1cmUgdGVhbSBpcyBmaWxsZWQgYW5kIGRpc3BsYXlzIHRlYW0gb24gY291cnRcclxuICAgICAgICAgICAgdmFyIHRlYW1TdWJtaXRCdXR0b24gPSBEb2N1bWVudC5RdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNidG5UZWFtU3VibWl0XCIpO1xyXG4gICAgICAgICAgICB0ZWFtU3VibWl0QnV0dG9uLk9uQ2xpY2sgPSAoZXYpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRlYW1MaXN0WzBdLk5hbWUgPT0gXCJOMVwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbnNvbGUuV3JpdGVMaW5lKFwiTWFrZSBzdXJlIDUgcGxheWVycyBhcmUgc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0ZWFtTGlzdFsxXS5OYW1lID09IFwiTjJcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBDb25zb2xlLldyaXRlTGluZShcIk1ha2Ugc3VyZSA1IHBsYXllcnMgYXJlIHNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRlYW1MaXN0WzJdLk5hbWUgPT0gXCJOM1wiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbnNvbGUuV3JpdGVMaW5lKFwiTWFrZSBzdXJlIDUgcGxheWVycyBhcmUgc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGVhbUxpc3RbM10uTmFtZSA9PSBcIk40XCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29uc29sZS5Xcml0ZUxpbmUoXCJNYWtlIHN1cmUgNSBwbGF5ZXJzIGFyZSBzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0ZWFtTGlzdFs0XS5OYW1lID09IFwiTjVcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBDb25zb2xlLldyaXRlTGluZShcIk1ha2Ugc3VyZSA1IHBsYXllcnMgYXJlIHNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlYW1JbmZvLk5hbWUgPSBEb2N1bWVudC5RdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI3R4dFRlYW1OYW1lXCIpLlZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlYW1JbmZvLlN0YWRpdW0gPSBEb2N1bWVudC5RdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI3R4dFN0YWRpdW1OYW1lXCIpLlZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlYW1JbmZvLkNpdHkgPSBEb2N1bWVudC5RdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI3R4dENpdHlcIikuVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVhbUluZm8uU3RhdGUgPSBEb2N1bWVudC5RdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI3R4dFN0YXRlXCIpLlZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIERvY3VtZW50LlF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjdHh0VGVhbU5hbWVcIikuVmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIERvY3VtZW50LlF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjdHh0U3RhZGl1bU5hbWVcIikuVmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIERvY3VtZW50LlF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjdHh0Q2l0eVwiKS5WYWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgRG9jdW1lbnQuUXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiN0eHRTdGF0ZVwiKS5WYWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbENvdXJ0KHRlYW1JbmZvLCB0ZWFtTGlzdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL0NyZWF0ZXMgdGhlIHRhYmxlIHdoZXJlIHBsYXllcnMgd2lsbCBiZSBkaXNwbGF5ZWRcclxuICAgICAgICBzdGF0aWMgdm9pZCBDcmVhdGVIZWFkaW5nKEhUTUxUYWJsZUVsZW1lbnQgdGFibGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgaGVhZGluZyA9IERvY3VtZW50LkNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICAgICAgdmFyIGhlYWRpbmdfMSA9IERvY3VtZW50LkNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICAgICAgdmFyIGhlYWRpbmdfMiA9IERvY3VtZW50LkNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICAgICAgdmFyIGhlYWRpbmdfMyA9IERvY3VtZW50LkNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICAgICAgdmFyIGhlYWRpbmdfNCA9IERvY3VtZW50LkNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICAgICAgdmFyIGhlYWRpbmdfNSA9IERvY3VtZW50LkNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICAgICAgaGVhZGluZ18xLklubmVySFRNTCA9IFwiSW1hZ2VcIjtcclxuICAgICAgICAgICAgaGVhZGluZ18yLklubmVySFRNTCA9IFwiTmFtZVwiO1xyXG4gICAgICAgICAgICBoZWFkaW5nXzMuSW5uZXJIVE1MID0gXCJEZXNjcmlwdGlvblwiO1xyXG4gICAgICAgICAgICBoZWFkaW5nXzQuSW5uZXJIVE1MID0gXCJTdGFyc1wiO1xyXG4gICAgICAgICAgICBoZWFkaW5nXzUuSW5uZXJIVE1MID0gXCJBZGQgdG8gVGVhbVwiO1xyXG4gICAgICAgICAgICBoZWFkaW5nLkFwcGVuZENoaWxkKGhlYWRpbmdfMSk7XHJcbiAgICAgICAgICAgIGhlYWRpbmcuQXBwZW5kQ2hpbGQoaGVhZGluZ18yKTtcclxuICAgICAgICAgICAgaGVhZGluZy5BcHBlbmRDaGlsZChoZWFkaW5nXzMpO1xyXG4gICAgICAgICAgICBoZWFkaW5nLkFwcGVuZENoaWxkKGhlYWRpbmdfNCk7XHJcbiAgICAgICAgICAgIGhlYWRpbmcuQXBwZW5kQ2hpbGQoaGVhZGluZ181KTtcclxuICAgICAgICAgICAgdGFibGUuQXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL0ZpbGxzIHRoZSB0YWJsZSBjcmVhdGVkIGFib3ZlIHdpdGggcGxheWVycyBmcm9tIGVhY2ggcG9zaXRpb24gZGVwZW5kaW5nIG9uIHdoYXQgcG9zaXRpb24gaXMgc2VsZWN0ZWRcclxuICAgICAgICBzdGF0aWMgdm9pZCBTaG93UG9zaXRpb24oc3RyaW5nIHBvc2l0aW9uLCBQbGF5ZXJbXSBwbGF5ZXJzLCBQbGF5ZXJbXSB0ZWFtLCBpbnQgdG90YWxBbGxvd2VkU3RhcnMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgdGFibGUgPSBEb2N1bWVudC5RdWVyeVNlbGVjdG9yPEhUTUxUYWJsZUVsZW1lbnQ+KFwiI2l0ZW1zXCIpO1xyXG4gICAgICAgICAgICB0YWJsZS5Jbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICBDcmVhdGVIZWFkaW5nKHRhYmxlKTtcclxuXHJcbiAgICAgICAgICAgIGZvcmVhY2ggKFBsYXllciBwIGluIHBsYXllcnMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHBvc2l0aW9uID09IFwiUG9pbnQgR3VhcmRcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihwLlBvc2l0aW9uID09IFwiUG9pbnQgR3VhcmRcIilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJ1aWxkTGlzdChwLCB0ZWFtLCB0b3RhbEFsbG93ZWRTdGFycywgdGFibGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHBvc2l0aW9uID09IFwiU2hvb3RpbmcgR3VhcmRcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihwLlBvc2l0aW9uID09IFwiU2hvb3RpbmcgR3VhcmRcIilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJ1aWxkTGlzdChwLCB0ZWFtLCB0b3RhbEFsbG93ZWRTdGFycywgdGFibGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PSBcIlNtYWxsIEZvcndhcmRcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocC5Qb3NpdGlvbiA9PSBcIlNtYWxsIEZvcndhcmRcIilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJ1aWxkTGlzdChwLCB0ZWFtLCB0b3RhbEFsbG93ZWRTdGFycywgdGFibGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PSBcIlBvd2VyIEZvcndhcmRcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocC5Qb3NpdGlvbiA9PSBcIlBvd2VyIEZvcndhcmRcIilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJ1aWxkTGlzdChwLCB0ZWFtLCB0b3RhbEFsbG93ZWRTdGFycywgdGFibGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PSBcIkNlbnRlclwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwLlBvc2l0aW9uID09IFwiQ2VudGVyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCdWlsZExpc3QocCwgdGVhbSwgdG90YWxBbGxvd2VkU3RhcnMsIHRhYmxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgdG8gZmlsbCB0aGUgdGFibGUgXHJcbiAgICAgICAgc3RhdGljIHZvaWQgQnVpbGRMaXN0KFBsYXllciBwLCBQbGF5ZXJbXSB0ZWFtLCBpbnQgdG90YWxBbGxvd2VkU3RhcnMsIEhUTUxUYWJsZUVsZW1lbnQgdGFibGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgdGFibGVSb3cgPSBEb2N1bWVudC5DcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgICAgIHZhciB0YWJsZURhdGFJbWFnZSA9IERvY3VtZW50LkNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgdmFyIHRhYmxlRGF0YU5hbWUgPSBEb2N1bWVudC5DcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHZhciB0YWJsZURhdGFEZXNjcmlwdGlvbiA9IERvY3VtZW50LkNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgdmFyIHRhYmxlRGF0YVByaWNlID0gRG9jdW1lbnQuQ3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICB2YXIgaW1nID0gRG9jdW1lbnQuQ3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAgICAgaW1nLlNldEF0dHJpYnV0ZShcInNyY1wiLCBwLkltYWdlKTtcclxuICAgICAgICAgICAgdGFibGVEYXRhSW1hZ2UuQXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICAgICAgdGFibGVEYXRhTmFtZS5Jbm5lckhUTUwgPSBwLk5hbWU7XHJcbiAgICAgICAgICAgIHRhYmxlRGF0YURlc2NyaXB0aW9uLklubmVySFRNTCA9IHAuRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHRhYmxlRGF0YVByaWNlLklubmVySFRNTCA9IHAuUHJpY2UuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGFibGVSb3cuQXBwZW5kQ2hpbGQodGFibGVEYXRhSW1hZ2UpO1xyXG4gICAgICAgICAgICB0YWJsZVJvdy5BcHBlbmRDaGlsZCh0YWJsZURhdGFOYW1lKTtcclxuICAgICAgICAgICAgdGFibGVSb3cuQXBwZW5kQ2hpbGQodGFibGVEYXRhRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICB0YWJsZVJvdy5BcHBlbmRDaGlsZCh0YWJsZURhdGFQcmljZSk7XHJcbiAgICAgICAgICAgIHZhciBidXR0b24gPSBEb2N1bWVudC5DcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBidXR0b24uSWQgPSBwLk5hbWU7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gRG9jdW1lbnQuQ3JlYXRlVGV4dE5vZGUoXCJBZGQgdG8gVGVhbVwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLkFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgICAgICAvL0NyZWF0ZXMgY2xpY2sgZXZlbnQgZm9yIGFkZCB0byB0ZWFtIGJ1dHRvbiBzbyB0aGF0IHdoZW4gcGxheWVyIGlzIGFkZGVkIGhlIGdvZXMgaW50byB5b3VyIHRlYW1cclxuICAgICAgICAgICAgYnV0dG9uLk9uQ2xpY2sgPSAoZXYpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvcmVhY2ggKFBsYXllciB0IGluIHRlYW0pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAuUG9zaXRpb24gPT0gdC5Qb3NpdGlvbilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwLk5hbWUgIT0gdC5OYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnQgdGVhbVByaWNlID0gVXBkYXRlVGVhbVByaWNlKHAsIHRlYW0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZWFtUHJpY2UgPD0gdG90YWxBbGxvd2VkU3RhcnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5OYW1lID0gcC5OYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuRGVzY3JpcHRpb24gPSBwLkRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuUHJpY2UgPSBwLlByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuSW1hZ2UgPSBwLkltYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxEaXYocCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc29sZS5Xcml0ZUxpbmUodC5OYW1lICsgXCIgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIHRlYW1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc29sZS5Xcml0ZUxpbmUoXCJDYW4gbm90IGV4Y2VlZCAxOCBTdGFycyBmb3IgdGhlIHdob2xlIHRlYW1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25zb2xlLldyaXRlTGluZShcIkhlIGlzIGFscmVhZHkgaW4gdGVhbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGFibGVSb3cuQXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICAgICAgdGFibGUuQXBwZW5kQ2hpbGQodGFibGVSb3cpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGludCBVcGRhdGVUZWFtUHJpY2UoUGxheWVyIHAsIFBsYXllcltdIHRlYW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbnQgdGVhbVByaWNlID0gMDtcclxuICAgICAgICAgICAgZm9yZWFjaCAoUGxheWVyIHQgaW4gdGVhbSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYocC5Qb3NpdGlvbiA9PSB0LlBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHQuUHJpY2UgPSBwLlByaWNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGVhbVByaWNlICs9IHQuUHJpY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRlYW1QcmljZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyB2b2lkIGZpbGxEaXYoUGxheWVyIHApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihwLlBvc2l0aW9uID09IFwiUG9pbnQgR3VhcmRcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpdiA9IERvY3VtZW50LlF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KFwiI3BvaW50R3VhcmRTcG90XCIpO1xyXG4gICAgICAgICAgICAgICAgZGl2LklubmVySFRNTCA9IFwiUG9pbnQgR3VhcmQ6IFwiICsgcC5OYW1lICsgXCIgXCIgKyBwLlByaWNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYocC5Qb3NpdGlvbiA9PSBcIlNob290aW5nIEd1YXJkXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBkaXYgPSBEb2N1bWVudC5RdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PihcIiNzaG9vdGluZ0d1YXJkU3BvdFwiKTtcclxuICAgICAgICAgICAgICAgIGRpdi5Jbm5lckhUTUwgPSBcIlNob290aW5nIEd1YXJkOiBcIiArIHAuTmFtZSArIFwiIFwiICsgcC5QcmljZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChwLlBvc2l0aW9uID09IFwiU21hbGwgRm9yd2FyZFwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGl2ID0gRG9jdW1lbnQuUXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oXCIjc21hbGxGb3J3YXJkU3BvdFwiKTtcclxuICAgICAgICAgICAgICAgIGRpdi5Jbm5lckhUTUwgPSBcIlNtYWxsIEZvcndhcmQ6IFwiICsgcC5OYW1lICsgXCIgXCIgKyBwLlByaWNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHAuUG9zaXRpb24gPT0gXCJQb3dlciBGb3J3YXJkXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBkaXYgPSBEb2N1bWVudC5RdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PihcIiNwb3dlckZvcndhcmRTcG90XCIpO1xyXG4gICAgICAgICAgICAgICAgZGl2LklubmVySFRNTCA9IFwiUG93ZXIgRm9yd2FyZDogXCIgKyBwLk5hbWUgKyBcIiBcIiArIHAuUHJpY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocC5Qb3NpdGlvbiA9PSBcIkNlbnRlclwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGl2ID0gRG9jdW1lbnQuUXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oXCIjY2VudGVyU3BvdFwiKTtcclxuICAgICAgICAgICAgICAgIGRpdi5Jbm5lckhUTUwgPSBcIkNlbnRlcjogXCIgKyBwLk5hbWUgKyBcIiBcIiArIHAuUHJpY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyB2b2lkIGZpbGxDb3VydCh0ZWFtSW5mbyB0ZWFtSW5mbywgUGxheWVyW10gdGVhbUxpc3QpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgdGVhbUluZm9OYW1lID0gRG9jdW1lbnQuUXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oXCIjdGVhbUluZm9OYW1lXCIpO1xyXG4gICAgICAgICAgICB0ZWFtSW5mb05hbWUuSW5uZXJIVE1MID0gKFwiVGVhbSBOYW1lOiBcIiArIHRlYW1JbmZvLk5hbWUpO1xyXG4gICAgICAgICAgICB2YXIgdGVhbUluZm9TdGFkaXVtID0gRG9jdW1lbnQuUXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oXCIjdGVhbUluZm9TdGFkaXVtXCIpO1xyXG4gICAgICAgICAgICB0ZWFtSW5mb1N0YWRpdW0uSW5uZXJIVE1MID0gKFwiVGVhbSBTdGFkaXVtOiBcIiArIHRlYW1JbmZvLlN0YWRpdW0pO1xyXG4gICAgICAgICAgICB2YXIgdGVhbUluZm9DaXR5ID0gRG9jdW1lbnQuUXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oXCIjdGVhbUluZm9DaXR5XCIpO1xyXG4gICAgICAgICAgICB0ZWFtSW5mb0NpdHkuSW5uZXJIVE1MID0gKFwiVGVhbSBDaXR5OiBcIiArIHRlYW1JbmZvLkNpdHkpO1xyXG4gICAgICAgICAgICB2YXIgdGVhbUluZm9TdGF0ZSA9IERvY3VtZW50LlF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KFwiI3RlYW1JbmZvU3RhdGVcIik7XHJcbiAgICAgICAgICAgIHRlYW1JbmZvU3RhdGUuSW5uZXJIVE1MID0gKFwiVGVhbSBTdGF0ZTogXCIgKyB0ZWFtSW5mby5TdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICBmb3JlYWNoIChQbGF5ZXIgdCBpbiB0ZWFtTGlzdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodC5Qb3NpdGlvbiA9PSBcIlBvaW50IEd1YXJkXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvaW50R3VhcmQgPSBEb2N1bWVudC5RdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PihcIiNwb2ludEd1YXJkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50R3VhcmQuSW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gRG9jdW1lbnQuQ3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcuU2V0QXR0cmlidXRlKFwic3JjXCIsIHQuSW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50R3VhcmQuQXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHQuUG9zaXRpb24gPT0gXCJTaG9vdGluZyBHdWFyZFwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzaG9vdGluZ0d1YXJkID0gRG9jdW1lbnQuUXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oXCIjc2hvb3RpbmdHdWFyZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzaG9vdGluZ0d1YXJkLklubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltZyA9IERvY3VtZW50LkNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLlNldEF0dHJpYnV0ZShcInNyY1wiLCB0LkltYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBzaG9vdGluZ0d1YXJkLkFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0LlBvc2l0aW9uID09IFwiU21hbGwgRm9yd2FyZFwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzbWFsbEZvcndhcmQgPSBEb2N1bWVudC5RdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PihcIiNzbWFsbEZvcndhcmRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc21hbGxGb3J3YXJkLklubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltZyA9IERvY3VtZW50LkNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLlNldEF0dHJpYnV0ZShcInNyY1wiLCB0LkltYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBzbWFsbEZvcndhcmQuQXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHQuUG9zaXRpb24gPT0gXCJQb3dlciBGb3J3YXJkXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvd2VyRm9yd2FyZCA9IERvY3VtZW50LlF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KFwiI3Bvd2VyRm9yd2FyZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3dlckZvcndhcmQuSW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gRG9jdW1lbnQuQ3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcuU2V0QXR0cmlidXRlKFwic3JjXCIsIHQuSW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvd2VyRm9yd2FyZC5BcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodC5Qb3NpdGlvbiA9PSBcIkNlbnRlclwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjZW50ZXIgPSBEb2N1bWVudC5RdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PihcIiNjZW50ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyLklubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltZyA9IERvY3VtZW50LkNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLlNldEF0dHJpYnV0ZShcInNyY1wiLCB0LkltYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXIuQXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbGFzcyBQbGF5ZXJcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFBvc2l0aW9uIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIE5hbWUgeyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgRGVzY3JpcHRpb24geyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBpbnQgUHJpY2UgeyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgSW1hZ2UgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUGxheWVyKHN0cmluZyBwb3NpdGlvbiwgc3RyaW5nIG5hbWUsIHN0cmluZyBkZXNjcmlwdGlvbiwgaW50IHByaWNlLCBzdHJpbmcgaW1hZ2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBQb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgICAgICBOYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgUHJpY2UgPSBwcmljZTtcclxuICAgICAgICAgICAgSW1hZ2UgPSBpbWFnZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgdGVhbUluZm9cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RyaW5nIE5hbWUgeyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgU3RhZGl1bSB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBDaXR5IHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFN0YXRlIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIHRlYW1JbmZvKHN0cmluZyBuYW1lLCBzdHJpbmcgc3RhZGl1bSwgc3RyaW5nIGNpdHksIHN0cmluZyBzdGF0ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICBTdGFkaXVtID0gc3RhZGl1bTtcclxuICAgICAgICAgICAgQ2l0eSA9IGNpdHk7XHJcbiAgICAgICAgICAgIFN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG59Il0KfQo=
