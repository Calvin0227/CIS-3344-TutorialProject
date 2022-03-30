/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2021
 * @compiler Bridge.NET 17.10.1
 */
Bridge.assembly("Demo", function ($asm, globals) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJEZW1vLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJuYmFNYW5nZXIuY3MiXSwKICAibmFtZXMiOiBbIiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQVlZQSxpQkFBc0JBO29CQUN0QkEsZUFBb0JBOztvQkFHcEJBO29CQUVBQSxlQUFvQkEsSUFBSUE7OztvQkFJeEJBLDRDQUFjQSxJQUFJQTtvQkFDbEJBLDRDQUFjQSxJQUFJQTtvQkFDbEJBLDRDQUFjQSxJQUFJQTtvQkFDbEJBLDRDQUFjQSxJQUFJQTtvQkFDbEJBLDRDQUFjQSxJQUFJQTs7OztvQkFLbEJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsZ0RBQWdCQSxJQUFJQTtvQkFDcEJBLGdEQUFnQkEsSUFBSUE7b0JBQ3BCQSxnREFBZ0JBLElBQUlBO29CQUNwQkEsZ0RBQWdCQSxJQUFJQTtvQkFDcEJBLGdEQUFnQkEsSUFBSUE7b0JBQ3BCQSxnREFBZ0JBLElBQUlBO29CQUNwQkEsZ0RBQWdCQSxJQUFJQTtvQkFDcEJBLGdEQUFnQkEsSUFBSUE7b0JBQ3BCQSxnREFBZ0JBLElBQUlBO29CQUNwQkEsZ0RBQWdCQSxJQUFJQTs7b0JBR3BCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBa0JBLElBQUlBO29CQUN0QkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTs7b0JBR3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTs7b0JBR3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBOztvQkFHckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTtvQkFDckJBLGlEQUFpQkEsSUFBSUE7b0JBQ3JCQSxpREFBaUJBLElBQUlBO29CQUNyQkEsaURBQWlCQSxJQUFJQTs7b0JBR3JCQSxpQkFBaUJBO29CQUNqQkEscUJBQXFCQSxVQUFDQTt3QkFFbEJBOzs7b0JBSUpBLHFCQUFxQkE7b0JBQ3JCQSx5QkFBeUJBLFVBQUNBO3dCQUV0QkEsdURBQTRCQSxZQUFZQSxVQUFVQTt3QkFDbERBOztvQkFFSkEsd0JBQXdCQTtvQkFDeEJBLDRCQUE0QkEsVUFBQ0E7d0JBRXpCQSwwREFBK0JBLFlBQVlBLFVBQVVBO3dCQUNyREE7O29CQUVKQSx1QkFBdUJBO29CQUN2QkEsMkJBQTJCQSxVQUFDQTt3QkFFeEJBLHlEQUE4QkEsWUFBWUEsVUFBVUE7d0JBQ3BEQTs7b0JBRUpBLHVCQUF1QkE7b0JBQ3ZCQSwyQkFBMkJBLFVBQUNBO3dCQUV4QkEseURBQThCQSxZQUFZQSxVQUFVQTt3QkFDcERBOztvQkFFSkEsaUJBQWlCQTtvQkFDakJBLHFCQUFxQkEsVUFBQ0E7d0JBRWxCQSxrREFBdUJBLFlBQVlBLFVBQVVBO3dCQUM3Q0E7OztvQkFJSkEsdUJBQXVCQTtvQkFDdkJBLDJCQUEyQkEsVUFBQ0E7d0JBRXhCQSxJQUFHQTs0QkFFQ0E7K0JBRUNBLElBQUlBOzRCQUVMQTs7d0JBRUpBLElBQUlBOzRCQUVBQTs7d0JBRUpBLElBQUlBOzRCQUVBQTs7d0JBRUpBLElBQUlBOzRCQUVBQTs7NEJBSUFBLGdCQUFnQkE7NEJBQ2hCQSxtQkFBbUJBOzRCQUNuQkEsZ0JBQWdCQTs0QkFDaEJBLGlCQUFpQkE7NEJBQ2pCQTs0QkFDQUE7NEJBQ0FBOzRCQUNBQTs0QkFDQUEscUNBQVVBLFVBQVVBOzs7O3lDQU1OQTtvQkFFdEJBLGNBQWNBO29CQUNkQSxnQkFBZ0JBO29CQUNoQkEsZ0JBQWdCQTtvQkFDaEJBLGdCQUFnQkE7b0JBQ2hCQSxnQkFBZ0JBO29CQUNoQkEsZ0JBQWdCQTtvQkFDaEJBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUEsb0JBQW9CQTtvQkFDcEJBLG9CQUFvQkE7b0JBQ3BCQSxvQkFBb0JBO29CQUNwQkEsb0JBQW9CQTtvQkFDcEJBLG9CQUFvQkE7b0JBQ3BCQSxrQkFBa0JBOzt3Q0FJR0EsVUFBaUJBLFNBQWtCQSxNQUFlQTs7b0JBRXZFQSxZQUFZQTtvQkFDWkE7b0JBQ0FBLHlDQUFjQTs7b0JBRWRBLDBCQUFxQkE7Ozs7NEJBRWpCQSxJQUFHQTtnQ0FFQ0EsSUFBR0E7b0NBRUNBLHFDQUFVQSxHQUFHQSxNQUFNQSxtQkFBbUJBOzs7NEJBRzlDQSxJQUFHQTtnQ0FFQ0EsSUFBR0E7b0NBRUNBLHFDQUFVQSxHQUFHQSxNQUFNQSxtQkFBbUJBOzs7NEJBRzlDQSxJQUFJQTtnQ0FFQUEsSUFBSUE7b0NBRUFBLHFDQUFVQSxHQUFHQSxNQUFNQSxtQkFBbUJBOzs7NEJBRzlDQSxJQUFJQTtnQ0FFQUEsSUFBSUE7b0NBRUFBLHFDQUFVQSxHQUFHQSxNQUFNQSxtQkFBbUJBOzs7NEJBRzlDQSxJQUFJQTtnQ0FFQUEsSUFBSUE7b0NBRUFBLHFDQUFVQSxHQUFHQSxNQUFNQSxtQkFBbUJBOzs7Ozs7Ozs7O3FDQU9oQ0EsR0FBVUEsTUFBZUEsbUJBQXVCQTtvQkFFbEVBLGVBQWVBO29CQUNmQSxxQkFBcUJBO29CQUNyQkEsb0JBQW9CQTtvQkFDcEJBLDJCQUEyQkE7b0JBQzNCQSxxQkFBcUJBO29CQUNyQkEsVUFBVUE7b0JBQ1ZBLHdCQUF3QkE7b0JBQ3hCQSwyQkFBMkJBO29CQUMzQkEsMEJBQTBCQTtvQkFDMUJBLGlDQUFpQ0E7b0JBQ2pDQSwyQkFBMkJBO29CQUMzQkEscUJBQXFCQTtvQkFDckJBLHFCQUFxQkE7b0JBQ3JCQSxxQkFBcUJBO29CQUNyQkEscUJBQXFCQTtvQkFDckJBLGFBQWFBO29CQUNiQSxZQUFZQTtvQkFDWkEsV0FBV0E7b0JBQ1hBLG1CQUFtQkE7b0JBRW5CQSxpQkFBaUJBLFVBQUNBOzt3QkFFZEEsMEJBQXFCQTs7OztnQ0FFakJBLElBQUlBLG1DQUFjQTtvQ0FFZEEsSUFBSUEsZ0NBQVVBO3dDQUVWQSxnQkFBZ0JBLDJDQUFnQkEsR0FBR0E7O3dDQUVuQ0EsSUFBSUEsYUFBYUE7NENBRWJBLFNBQVNBOzRDQUNUQSxnQkFBZ0JBOzRDQUNoQkEsVUFBVUE7NENBQ1ZBLFVBQVVBOzRDQUNWQSxtQ0FBUUE7OzRDQUlSQTs7O3dDQUtKQTs7Ozs7Ozs7OztvQkFLaEJBLHFCQUFxQkE7b0JBQ3JCQSxrQkFBa0JBOzsyQ0FHS0EsR0FBVUE7O29CQUVqQ0E7b0JBQ0FBLDBCQUFxQkE7Ozs7NEJBRWpCQSxJQUFHQSxtQ0FBY0E7Z0NBRWJBLFVBQVVBOzs0QkFFZEEseUJBQWFBOzs7Ozs7O29CQUVqQkEsT0FBT0E7O21DQUdTQTtvQkFFaEJBLElBQUdBO3dCQUVDQSxVQUFVQTt3QkFDVkEsZ0JBQWdCQSxtQkFBa0JBLHNCQUFlQTsyQkFFaERBLElBQUdBO3dCQUVKQSxXQUFVQTt3QkFDVkEsaUJBQWdCQSxzQkFBcUJBLHNCQUFlQTsyQkFFbkRBLElBQUlBO3dCQUVMQSxXQUFVQTt3QkFDVkEsaUJBQWdCQSxxQkFBb0JBLHNCQUFlQTsyQkFFbERBLElBQUlBO3dCQUVMQSxXQUFVQTt3QkFDVkEsaUJBQWdCQSxxQkFBb0JBLHNCQUFlQTsyQkFFbERBLElBQUlBO3dCQUVMQSxXQUFVQTt3QkFDVkEsaUJBQWdCQSxjQUFhQSxzQkFBZUE7OztxQ0FJOUJBLFVBQW1CQTs7b0JBRXJDQSxtQkFBbUJBO29CQUNuQkEseUJBQXlCQSxDQUFDQSxpQkFBZ0JBO29CQUMxQ0Esc0JBQXNCQTtvQkFDdEJBLDRCQUE0QkEsQ0FBQ0Esb0JBQW1CQTtvQkFDaERBLG1CQUFtQkE7b0JBQ25CQSx5QkFBeUJBLENBQUNBLGlCQUFnQkE7b0JBQzFDQSxvQkFBb0JBO29CQUNwQkEsMEJBQTBCQSxDQUFDQSxrQkFBaUJBOztvQkFFNUNBLDBCQUFxQkE7Ozs7NEJBRWpCQSxJQUFHQTtnQ0FFQ0EsaUJBQWlCQTtnQ0FDakJBO2dDQUNBQSxVQUFVQTtnQ0FDVkEsd0JBQXdCQTtnQ0FDeEJBLHVCQUF1QkE7bUNBRXRCQSxJQUFJQTtnQ0FFTEEsb0JBQW9CQTtnQ0FDcEJBO2dDQUNBQSxXQUFVQTtnQ0FDVkEseUJBQXdCQTtnQ0FDeEJBLDBCQUEwQkE7bUNBRXpCQSxJQUFJQTtnQ0FFTEEsbUJBQW1CQTtnQ0FDbkJBO2dDQUNBQSxXQUFVQTtnQ0FDVkEseUJBQXdCQTtnQ0FDeEJBLHlCQUF5QkE7bUNBRXhCQSxJQUFJQTtnQ0FFTEEsbUJBQW1CQTtnQ0FDbkJBO2dDQUNBQSxXQUFVQTtnQ0FDVkEseUJBQXdCQTtnQ0FDeEJBLHlCQUF5QkE7bUNBRXhCQSxJQUFJQTtnQ0FFTEEsYUFBYUE7Z0NBQ2JBO2dDQUNBQSxXQUFVQTtnQ0FDVkEseUJBQXdCQTtnQ0FDeEJBLG1CQUFtQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFjakJBLFVBQWlCQSxNQUFhQSxhQUFvQkEsT0FBV0E7O2dCQUV2RUEsZ0JBQVdBO2dCQUNYQSxZQUFPQTtnQkFDUEEsbUJBQWNBO2dCQUNkQSxhQUFRQTtnQkFDUkEsYUFBUUE7Ozs7Ozs7Ozs7Ozs7NEJBV0lBLE1BQWFBLFNBQWdCQSxNQUFhQTs7Z0JBRXREQSxZQUFPQTtnQkFDUEEsZUFBVUE7Z0JBQ1ZBLFlBQU9BO2dCQUNQQSxhQUFRQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIEJyaWRnZTtcclxudXNpbmcgQnJpZGdlLkh0bWw1O1xyXG5cclxubmFtZXNwYWNlIHR1dG9yaWFsUHJvamVjdFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgbmJhTWFuYWdlclxyXG4gICAge1xyXG4gICAgICAgIFtSZWFkeV1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgTWFpbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL0NyZWF0ZSBhcnJheSBmb3IgYWxsIHBsYXllcnMgYW5kIG9uZSBmb3Igd2hlcmUgc2VsZWN0ZWQgcGxheWVycyB3aWxsIGdvXHJcbiAgICAgICAgICAgIFBsYXllcltdIHBsYXllckxpc3QgPSBuZXcgUGxheWVyWzcxXTtcclxuICAgICAgICAgICAgUGxheWVyW10gdGVhbUxpc3QgPSBuZXcgUGxheWVyWzVdO1xyXG5cclxuICAgICAgICAgICAgLy9DcmVhdGUgaW50IHZhbHVlIGZvciBob3cgbWFueSBzdGFycyB0aGV5IGNhbiB1c2VcclxuICAgICAgICAgICAgaW50IHRvdGFsQWxsb3dlZFN0YXJzID0gMTg7XHJcbiAgICAgICAgICAgIC8vQ3JlYXRlIGRlZmF1bHQgdGVhbSBpbmZvIHdoZXJlIHZhbHVlcyBvZiB0ZXh0Ym94IHdpbGwgZ29cclxuICAgICAgICAgICAgdGVhbUluZm8gdGVhbUluZm8gPSBuZXcgdGVhbUluZm8oXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vTG9hZCBEZWZhdWx0IFBsYXllcnMgaW50byB0ZWFtTGlzdFxyXG4gICAgICAgICAgICB0ZWFtTGlzdFswXSA9IG5ldyBQbGF5ZXIoXCJQb2ludCBHdWFyZFwiLCBcIk4xXCIsIFwiRDFcIiwgMCwgXCJJMVwiKTtcclxuICAgICAgICAgICAgdGVhbUxpc3RbMV0gPSBuZXcgUGxheWVyKFwiU2hvb3RpbmcgR3VhcmRcIiwgXCJOMlwiLCBcIkQyXCIsIDAsIFwiSTJcIik7XHJcbiAgICAgICAgICAgIHRlYW1MaXN0WzJdID0gbmV3IFBsYXllcihcIlNtYWxsIEZvcndhcmRcIiwgXCJOM1wiLCBcIkQzXCIsIDAsIFwiSTNcIik7XHJcbiAgICAgICAgICAgIHRlYW1MaXN0WzNdID0gbmV3IFBsYXllcihcIlBvd2VyIEZvcndhcmRcIiwgXCJONFwiLCBcIkQ0XCIsIDAsIFwiSTRcIik7XHJcbiAgICAgICAgICAgIHRlYW1MaXN0WzRdID0gbmV3IFBsYXllcihcIkNlbnRlclwiLCBcIk41XCIsIFwiRDVcIiwgMCwgXCJJNVwiKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy9Mb2FkIGFsbCBQb2ludGluZyBHdWFyZHNcclxuICAgICAgICAgICAgcGxheWVyTGlzdFsxN10gPSBuZXcgUGxheWVyKFwiUG9pbnQgR3VhcmRcIiwgXCJKb2huIFdhbGxcIiwgXCJIRUlHSFQ6IDYnMywgV0VJR0hUOiAyMTBsYiwgQUdFOiAzMCB5ZWFycywgRXhwZXJpZW5jZTogOSBZZWFyc1wiLCAyLCBcIkltYWdlcy9Kb2huV2FsbC5qcGdcIik7IFxyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzE2XSA9IG5ldyBQbGF5ZXIoXCJQb2ludCBHdWFyZFwiLCBcIkxhTWVsbyBCYWxsXCIsIFwiSEVJR0hUOiA2JzYsIFdFSUdIVDogMTgwbGIsIEFHRTogMTkgeWVhcnMsIEV4cGVyaWVuY2U6IFJvb2tpZVwiLCAyLCBcIkltYWdlcy9MYU1lbG9CYWxsLmpwZ1wiKTsgXHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbMTVdID0gbmV3IFBsYXllcihcIlBvaW50IEd1YXJkXCIsIFwiSmEgTW9yYW50XCIsIFwiSEVJR0hUOiA2JzMsIFdFSUdIVDogMTc0bGIsIEFHRTogMjEgeWVhcnMsIEV4cGVyaWVuY2U6IDEgWWVhcnNcIiwgMiwgXCJJbWFnZXMvSmFNb3JhbnQuanBnXCIpOyBcclxuICAgICAgICAgICAgcGxheWVyTGlzdFsxNF0gPSBuZXcgUGxheWVyKFwiUG9pbnQgR3VhcmRcIiwgXCJEZXJyaWNrIFJvc2VcIiwgXCJIRUlHSFQ6IDYnMiwgV0VJR0hUOiAyMDBsYiwgQUdFOiAzMiB5ZWFycywgRXhwZXJpZW5jZTogMTEgWWVhcnNcIiwgMiwgXCJJbWFnZXMvRGVycmlja1Jvc2UuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzEzXSA9IG5ldyBQbGF5ZXIoXCJQb2ludCBHdWFyZFwiLCBcIlRyYWUgWW91bmdcIiwgXCJIRUlHSFQ6IDYnMSwgV0VJR0hUOiAxODBsYiwgQUdFOiAyMiB5ZWFycywgRXhwZXJpZW5jZTogMiBZZWFyc1wiLCAzLCBcIkltYWdlcy9UcmFlWW91bmcuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzEyXSA9IG5ldyBQbGF5ZXIoXCJQb2ludCBHdWFyZFwiLCBcIkphbWFsIE11cnJheVwiLCBcIkhFSUdIVDogNiczLCBXRUlHSFQ6IDIxNWxiLCBBR0U6IDI0IHllYXJzLCBFeHBlcmllbmNlOiA0IFllYXJzXCIsIDMsIFwiSW1hZ2VzL0phbWFsTXVycmF5LmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFsxMV0gPSBuZXcgUGxheWVyKFwiUG9pbnQgR3VhcmRcIiwgXCJLeWxlIExvd3J5XCIsIFwiSEVJR0hUOiA2JzAsIFdFSUdIVDogMTk2bGIsIEFHRTogMzUgeWVhcnMsIEV4cGVyaWVuY2U6IDE0IFllYXJzXCIsIDMsIFwiSW1hZ2VzL0t5bGVMb3dyeS5qcGdcIik7IFxyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzEwXSA9IG5ldyBQbGF5ZXIoXCJQb2ludCBHdWFyZFwiLCBcIktlbWJhIFdhbGtlclwiLCBcIkhFSUdIVDogNicwLCBXRUlHSFQ6IDE4NGxiLCBBR0U6IDMwIHllYXJzLCBFeHBlcmllbmNlOiA5IFllYXJzXCIsIDMsIFwiSW1hZ2VzL0tlbWJhV2Fsa2VyLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs5XSA9IG5ldyBQbGF5ZXIoXCJQb2ludCBHdWFyZFwiLCBcIkQnQW5nZWxvIFJ1c3NlbGxcIiwgXCJIRUlHSFQ6IDYnNCwgV0VJR0hUOiAxOTNsYiwgQUdFOiAyNSB5ZWFycywgRXhwZXJpZW5jZTogNSBZZWFyc1wiLCAzLCBcIkltYWdlcy9EQW5nZWxvUnVzc2VsbC5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbOF0gPSBuZXcgUGxheWVyKFwiUG9pbnQgR3VhcmRcIiwgXCJUeWxlciBIZXJyb1wiLCBcIkhFSUdIVDogNic1LCBXRUlHSFQ6IDE5NWxiLCBBR0U6IDIxIHllYXJzLCBFeHBlcmllbmNlOiAxIFllYXJzXCIsIDMsIFwiSW1hZ2VzL1R5bGVySGVycm8uanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzddID0gbmV3IFBsYXllcihcIlBvaW50IEd1YXJkXCIsIFwiSnJ1ZSBIb2xpZGF5XCIsIFwiSEVJR0hUOiA2JzMsIFdFSUdIVDogMjA1bGIsIEFHRTogMzAgeWVhcnMsIEV4cGVyaWVuY2U6IDExIFllYXJzXCIsIDMsIFwiSW1hZ2VzL0pydWVIb2xpZGF5LmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs2XSA9IG5ldyBQbGF5ZXIoXCJQb2ludCBHdWFyZFwiLCBcIkx1a2EgRG9uY2ljXCIsIFwiSEVJR0hUOiA2JzcsIFdFSUdIVDogMjMwbGIsIEFHRTogMjIgeWVhcnMsIEV4cGVyaWVuY2U6IDIgWWVhcnNcIiwgNCwgXCJJbWFnZXMvTHVrYURvbmNpYy5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbNV0gPSBuZXcgUGxheWVyKFwiUG9pbnQgR3VhcmRcIiwgXCJSdXNzZWxsIFdlc3Ricm9va1wiLCBcIkhFSUdIVDogNiczLCBXRUlHSFQ6IDIwMGxiLCBBR0U6IDMyIHllYXJzLCBFeHBlcmllbmNlOiAxMiBZZWFyc1wiLCA0LCBcIkltYWdlcy9SdXNzZWxsV2VzdGJyb29rLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs0XSA9IG5ldyBQbGF5ZXIoXCJQb2ludCBHdWFyZFwiLCBcIkJlbiBTaW1tb25zXCIsIFwiSEVJR0hUOiA2JzExLCBXRUlHSFQ6IDI0MGxiLCBBR0U6IDI0IHllYXJzLCBFeHBlcmllbmNlOiAzIFllYXJzXCIsIDQsIFwiSW1hZ2VzL0JlblNpbW1vbnMuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzNdID0gbmV3IFBsYXllcihcIlBvaW50IEd1YXJkXCIsIFwiQ2hyaXMgUGF1bFwiLCBcIkhFSUdIVDogNicwLCBXRUlHSFQ6IDE3NWxiLCBBR0U6IDM1IHllYXJzLCBFeHBlcmllbmNlOiAxNSBZZWFyc1wiLCA0LCBcIkltYWdlcy9DaHJpc1BhdWwuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzJdID0gbmV3IFBsYXllcihcIlBvaW50IEd1YXJkXCIsIFwiRGFtaWFuIExpbGxhcmRcIiwgXCJIRUlHSFQ6IDYnMiwgV0VJR0hUOiAxOTVsYiwgQUdFOiAzMCB5ZWFycywgRXhwZXJpZW5jZTogOCBZZWFyc1wiLCA1LCBcIkltYWdlcy9EYW1pYW5MaWxsYXJkLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFsxXSA9IG5ldyBQbGF5ZXIoXCJQb2ludCBHdWFyZFwiLCBcIlN0ZXBoZW4gQ3VycnlcIiwgXCJIRUlHSFQ6IDYnMywgV0VJR0hUOiAxODVsYiwgQUdFOiAzMyB5ZWFycywgRXhwZXJpZW5jZTogMTEgWWVhcnNcIiwgNSwgXCJJbWFnZXMvU3RlcGhlbkN1cnJ5LmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFswXSA9IG5ldyBQbGF5ZXIoXCJQb2ludCBHdWFyZFwiLCBcIkt5cmllIElydmluZ1wiLCBcIkhFSUdIVDogNicyLCBXRUlHSFQ6IDE5NWxiIEFHRTogMjkgeWVhcnMsIEV4cGVyaWVuY2U6IDkgWWVhcnNcIiwgNSwgXCJJbWFnZXMvS3lyaWVJcnZpbmcuanBnXCIpO1xyXG5cclxuICAgICAgICAgICAgLy9Mb2FkIGFsbCBTaG9vdGluZyBHdWFyZHNcclxuICAgICAgICAgICAgcGxheWVyTGlzdFszMV0gPSBuZXcgUGxheWVyKFwiU2hvb3RpbmcgR3VhcmRcIiwgXCJMb3UgV2lsbGlhbXNcIiwgXCJIRUlHSFQ6IDYnMSwgV0VJR0hUOiAxNzVsYiwgQUdFOiAzNCB5ZWFycywgRXhwZXJpZW5jZTogMTUgWWVhcnNcIiwgMiwgXCJJbWFnZXMvTG91V2lsbGlhbXMuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzMwXSA9IG5ldyBQbGF5ZXIoXCJTaG9vdGluZyBHdWFyZFwiLCBcIkpheWxlbiBCcm93blwiLCBcIkhFSUdIVDogNic2LCBXRUlHSFQ6IDIyM2xiLCBBR0U6IDI0IHllYXJzLCBFeHBlcmllbmNlOiA0IFllYXJzXCIsIDIsIFwiSW1hZ2VzL0pheWxlbkJyb3duLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFsyOV0gPSBuZXcgUGxheWVyKFwiU2hvb3RpbmcgR3VhcmRcIiwgXCJTZXRoIEN1cnJ5XCIsIFwiSEVJR0hUOiA2JzIsIFdFSUdIVDogMTg1bGIsIEFHRTogMzAgeWVhcnMsIEV4cGVyaWVuY2U6IDYgWWVhcnNcIiwgMiwgXCJJbWFnZXMvU2V0aEN1cnJ5LmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFsyOF0gPSBuZXcgUGxheWVyKFwiU2hvb3RpbmcgR3VhcmRcIiwgXCJCdWRkeSBIaWVsZFwiLCBcIkhFSUdIVDogNic0LCBXRUlHSFQ6IDIyMGxiLCBBR0U6IDI4IHllYXJzLCBFeHBlcmllbmNlOiA0IFllYXJzXCIsIDIsIFwiSW1hZ2VzL0J1ZGR5SGllbGQuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzI3XSA9IG5ldyBQbGF5ZXIoXCJTaG9vdGluZyBHdWFyZFwiLCBcIkJyYWRsZXkgQmVhbFwiLCBcIkhFSUdIVDogNiczLCBXRUlHSFQ6IDIwN2xiLCBBR0U6IDI3IHllYXJzLCBFeHBlcmllbmNlOiA4IFllYXJzXCIsIDMsIFwiSW1hZ2VzL0JyYWRsZXlCZWFsLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFsyNl0gPSBuZXcgUGxheWVyKFwiU2hvb3RpbmcgR3VhcmRcIiwgXCJEb25vdmFuIE1pdGNoZWxsXCIsIFwiSEVJR0hUOiA2JzEsIFdFSUdIVDogMjE1bGIsIEFHRTogMjQgeWVhcnMsIEV4cGVyaWVuY2U6IDMgWWVhcnNcIiwgMywgXCJJbWFnZXMvRG9ub3Zhbk1pdGNoZWxsLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFsyNV0gPSBuZXcgUGxheWVyKFwiU2hvb3RpbmcgR3VhcmRcIiwgXCJDSiBNY0NvbGx1bVwiLCBcIkhFSUdIVDogNiczLCBXRUlHSFQ6IDE5MGxiLCBBR0U6IDI5IHllYXJzLCBFeHBlcmllbmNlOiA3IFllYXJzXCIsIDMsIFwiSW1hZ2VzL0NKTWNDb2xsdW0uanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzI0XSA9IG5ldyBQbGF5ZXIoXCJTaG9vdGluZyBHdWFyZFwiLCBcIlphY2ggTGF2aW5lXCIsIFwiSEVJR0hUOiA2JzUsIFdFSUdIVDogMjAwbGIsIEFHRTogMjYgeWVhcnMsIEV4cGVyaWVuY2U6IDYgWWVhcnNcIiwgMywgXCJJbWFnZXMvWmFjaExhdmluZS5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbMjNdID0gbmV3IFBsYXllcihcIlNob290aW5nIEd1YXJkXCIsIFwiRGV2aW4gQm9va2VyXCIsIFwiSEVJR0hUOiA2JzUsIFdFSUdIVDogMjA2bGIsIEFHRTogMjQgeWVhcnMsIEV4cGVyaWVuY2U6IDUgWWVhcnNcIiwgNCwgXCJJbWFnZXMvRGV2aW5Cb29rZXIuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzIyXSA9ICBuZXcgUGxheWVyKFwiU2hvb3RpbmcgR3VhcmRcIiwgXCJTaGFpIEdpbGdlb3VzLUFsZXhhbmRlclwiLCBcIkhFSUdIVDogNic2LCBXRUlHSFQ6IDE4MGxiLCBBR0U6IDIyIHllYXJzLCBFeHBlcmllbmNlOiAyIFllYXJzXCIsIDQsIFwiSW1hZ2VzL1NoYWlHaWxnZW91c0FsZXhhbmRlci5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbMjFdID0gbmV3IFBsYXllcihcIlNob290aW5nIEd1YXJkXCIsIFwiS2xheSBUaG9tcHNvblwiLCBcIkhFSUdIVDogNic2LCBXRUlHSFQ6IDIxNWxiLCBBR0U6IDMxIHllYXJzLCBFeHBlcmllbmNlOiA4IFllYXJzXCIsIDQsIFwiSW1hZ2VzL0tsYXlUaG9tcHNvbi5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbMjBdID0gbmV3IFBsYXllcihcIlNob290aW5nIEd1YXJkXCIsIFwiRGVNYXIgRGVSb3phblwiLCBcIkhFSUdIVDogNic2LCBXRUlHSFQ6IDIyMGxiLCBBR0U6IDMxIHllYXJzLCBFeHBlcmllbmNlOiAxMSBZZWFyc1wiLCA0LCBcIkltYWdlcy9EZU1hckRlUm96YW4uanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzE5XSA9IG5ldyBQbGF5ZXIoXCJTaG9vdGluZyBHdWFyZFwiLCBcIkppbW15IEJ1dGxlclwiLCBcIkhFSUdIVDogNic3LCBXRUlHSFQ6IDIzMGxiLCBBR0U6IDMxIHllYXJzLCBFeHBlcmllbmNlOiA5IFllYXJzXCIsIDQsIFwiSW1hZ2VzL0ppbW15QnV0bGVyLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFsxOF0gPSBuZXcgUGxheWVyKFwiU2hvb3RpbmcgR3VhcmRcIiwgXCJKYW1lcyBIYXJkZW5cIiwgXCJIRUlHSFQ6IDYnNSwgV0VJR0hUOiAyMjBsYiwgQUdFOiAzMSB5ZWFycywgRXhwZXJpZW5jZTogMTEgWWVhcnNcIiwgNSwgXCJJbWFnZXMvSmFtZXNIYXJkZW4uanBnXCIpO1xyXG5cclxuICAgICAgICAgICAgLy9Mb2FkIGFsbCBTbWFsbCBGb3J3YXJkc1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzQyXSA9IG5ldyBQbGF5ZXIoXCJTbWFsbCBGb3J3YXJkXCIsIFwiVEogV2FycmVuXCIsIFwiSEVJR0hUOiA2JzgsIFdFSUdIVDogMjIwbGIsIEFHRTogMjcgeWVhcnMsIEV4cGVyaWVuY2U6IDYgWWVhcnNcIiwgMiwgXCJJbWFnZXMvVEpXYXJyZW4uanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzQxXSA9IG5ldyBQbGF5ZXIoXCJTbWFsbCBGb3J3YXJkXCIsIFwiS2VsbHkgT3VicmUgSnIuXCIsIFwiSEVJR0hUOiA2JzcsIFdFSUdIVDogMjAzbGIsIEFHRTogMjUgeWVhcnMsIEV4cGVyaWVuY2U6IDUgWWVhcnNcIiwgMiwgXCJJbWFnZXMvS2VsbHlPdWJyZS5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbNDBdID0gbmV3IFBsYXllcihcIlNtYWxsIEZvcndhcmRcIiwgXCJHb3Jkb24gSGF5d2FyZFwiLCBcIkhFSUdIVDogNic3LCBXRUlHSFQ6IDIyNWxiLCBBR0U6IDMxIHllYXJzLCBFeHBlcmllbmNlOiAxMCBZZWFyc1wiLCAyLCBcIkltYWdlcy9Hb3Jkb25IYXl3YXJkLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFszOV0gPSBuZXcgUGxheWVyKFwiU21hbGwgRm9yd2FyZFwiLCBcIlRvYmlhcyBIYXJyaXNcIiwgXCJIRUlHSFQ6IDYnOCwgV0VJR0hUOiAyMjZsYiwgQUdFOiAyOCB5ZWFycywgRXhwZXJpZW5jZTogOSBZZWFyc1wiLCAzLCBcIkltYWdlcy9Ub2JpYXNIYXJyaXMuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzM4XSA9IG5ldyBQbGF5ZXIoXCJTbWFsbCBGb3J3YXJkXCIsIFwiQnJhbmRvbiBJbmdyYW1cIiwgXCJIRUlHSFQ6IDYnOCwgV0VJR0hUOiAxOTBsYiwgQUdFOiAyMyB5ZWFycywgRXhwZXJpZW5jZTogNCBZZWFyc1wiLCAzLCBcIkltYWdlcy9CcmFuZG9uSW5ncmFtLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFszN10gPSBuZXcgUGxheWVyKFwiU21hbGwgRm9yd2FyZFwiLCBcIktocmlzIE1pZGRsZXRvblwiLCBcIkhFSUdIVDogNic3LCBXRUlHSFQ6IDIyMmxiLCBBR0U6IDI5IHllYXJzLCBFeHBlcmllbmNlOiA4IFllYXJzXCIsIDMsIFwiSW1hZ2VzL0tocmlzTWlkZGxldG9uLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFszNl0gPSBuZXcgUGxheWVyKFwiU21hbGwgRm9yd2FyZFwiLCBcIlBhdWwgR2VvcmdlXCIsIFwiSEVJR0hUOiA2JzgsIFdFSUdIVDogMjIwbGIsIEFHRTogMzAgeWVhcnMsIEV4cGVyaWVuY2U6IDEwIFllYXJzXCIsIDMsIFwiSW1hZ2VzL1BhdWxHZW9yZ2UuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzM1XSA9IG5ldyBQbGF5ZXIoXCJTbWFsbCBGb3J3YXJkXCIsIFwiSmF5c29uIFRhdHVtXCIsIFwiSEVJR0hUOiA2JzgsIFdFSUdIVDogMjEwbGIsIEFHRTogMjMgeWVhcnMsIEV4cGVyaWVuY2U6IDMgWWVhcnNcIiwgNCwgXCJJbWFnZXMvSmF5c29uVGF0dW0uanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzM0XSA9IG5ldyBQbGF5ZXIoXCJTbWFsbCBGb3J3YXJkXCIsIFwiTGVCcm9uIEphbWVzXCIsIFwiSEVJR0hUOiA2JzksIFdFSUdIVDogMjUwbGIsIEFHRTogMzYgeWVhcnMsIEV4cGVyaWVuY2U6IDE3IFllYXJzXCIsIDUsIFwiSW1hZ2VzL0xlQnJvbkphbWVzLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFszM10gPSBuZXcgUGxheWVyKFwiU21hbGwgRm9yd2FyZFwiLCBcIkthd2hpIExlb25hcmRcIiwgXCJIRUlHSFQ6IDYnNywgV0VJR0hUOiAyMjVsYiwgQUdFOiAyOSB5ZWFycywgRXhwZXJpZW5jZTogOSBZZWFyc1wiLCA1LCBcIkltYWdlcy9LYXdoaUxlb25hcmQuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzMyXSA9IG5ldyBQbGF5ZXIoXCJTbWFsbCBGb3J3YXJkXCIsIFwiS2V2aW4gRHVyYW50XCIsIFwiSEVJR0hUOiA2JzEwLCBXRUlHSFQ6IDI0MGxiLCBBR0U6IDMyIHllYXJzLCBFeHBlcmllbmNlOiAxMiBZZWFyc1wiLCA1LCBcIkltYWdlcy9LZXZpbkR1cmFudC5qcGdcIik7XHJcblxyXG4gICAgICAgICAgICAvL0xvYWQgYWxsIFBvd2VyIEZvcndhcmRzXHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbNTVdID0gbmV3IFBsYXllcihcIlBvd2VyIEZvcndhcmRcIiwgXCJLZXZpbiBMb3ZlXCIsIFwiSEVJR0hUOiA2JzgsIFdFSUdIVDogMjUxbGIsIEFHRTogMzIgeWVhcnMsIEV4cGVyaWVuY2U6IDEyIFllYXJzXCIsIDEsIFwiSW1hZ2VzL0tldmluTG92ZS5qcGdcIik7IFxyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzU0XSA9IG5ldyBQbGF5ZXIoXCJQb3dlciBGb3J3YXJkXCIsIFwiQmxha2UgR3JpZmZpblwiLCBcIkhFSUdIVDogNic5LCBXRUlHSFQ6IDI1MGxiLCBBR0U6IDMyIHllYXJzLCBFeHBlcmllbmNlOiAxMCBZZWFyc1wiLCAyLCBcIkltYWdlcy9CbGFrZUdyaWZmaW4uanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzUzXSA9IG5ldyBQbGF5ZXIoXCJQb3dlciBGb3J3YXJkXCIsIFwiSmFyZW4gSmFja3NvbiBKci5cIiwgXCJIRUlHSFQ6IDYnMTEsIFdFSUdIVDogMjQybGIsIEFHRTogMjEgeWVhcnMsIEV4cGVyaWVuY2U6IDIgWWVhcnNcIiwgMiwgXCJJbWFnZXMvSmFyZW5KYWNrc29uSnIuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzUyXSA9IG5ldyBQbGF5ZXIoXCJQb3dlciBGb3J3YXJkXCIsIFwiQWFyb24gR29yZG9uXCIsIFwiSEVJR0hUOiA2JzgsIFdFSUdIVDogMjM1bGIsIEFHRTogMjUgeWVhcnMsIEV4cGVyaWVuY2U6IDYgWWVhcnNcIiwgMiwgXCJJbWFnZXMvQWFyb25Hb3Jkb24uanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzUxXSA9IG5ldyBQbGF5ZXIoXCJQb3dlciBGb3J3YXJkXCIsIFwiU2VyZ2UgSWJha2FcIiwgXCJIRUlHSFQ6IDYnMTAsIFdFSUdIVDogMjM1bGIsIEFHRTogMzEgeWVhcnMsIEV4cGVyaWVuY2U6IDExIFllYXJzXCIsIDIsIFwiSW1hZ2VzL1NlcmdlSWJha2EuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzUwXSA9IG5ldyBQbGF5ZXIoXCJQb3dlciBGb3J3YXJkXCIsIFwiQWwgSG9yZm9yZFwiLCBcIkhFSUdIVDogNic5LCBXRUlHSFQ6IDI0MGxiLCBBR0U6IDM0IHllYXJzLCBFeHBlcmllbmNlOiAxMyBZZWFyc1wiLCAyLCBcIkltYWdlcy9BbEhvcmZvcmQuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzQ5XSA9IG5ldyBQbGF5ZXIoXCJQb3dlciBGb3J3YXJkXCIsIFwiQ2FybWVsbyBBbnRob255XCIsIFwiSEVJR0hUOiA2JzcsIFdFSUdIVDogMjM4bGIsIEFHRTogMzYgeWVhcnMsIEV4cGVyaWVuY2U6IDE3IFllYXJzXCIsIDIsIFwiSW1hZ2VzL0Nhcm1lbG9BbnRob255LmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs0OF0gPSBuZXcgUGxheWVyKFwiUG93ZXIgRm9yd2FyZFwiLCBcIlBhc2NhbCBTaWFrYW1cIiwgXCJIRUlHSFQ6IDYnOSwgV0VJR0hUOiAyMzBsYiwgQUdFOiAyNyB5ZWFycywgRXhwZXJpZW5jZTogNCBZZWFyc1wiLCAzLCBcIkltYWdlcy9QYXNjYWxTaWFrYW0uanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzQ3XSA9IG5ldyBQbGF5ZXIoXCJQb3dlciBGb3J3YXJkXCIsIFwiTGFNYXJjdXMgQWxkcmlkZ2VcIiwgXCJIRUlHSFQ6IDYnMTEsIFdFSUdIVDogMjUwbGIsIEFHRTogMzUgeWVhcnMsIEV4cGVyaWVuY2U6IDE0IFllYXJzXCIsIDMsIFwiSW1hZ2VzL0xhTWFyY3VzQWxkcmlkZ2UucG5nXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzQ2XSA9IG5ldyBQbGF5ZXIoXCJQb3dlciBGb3J3YXJkXCIsIFwiS3Jpc3RhcHMgUG9yemluZ2lzXCIsIFwiSEVJR0hUOiA3JzMsIFdFSUdIVDogMjQwbGIsIEFHRTogMjUgeWVhcnMsIEV4cGVyaWVuY2U6IDQgWWVhcnNcIiwgMywgXCJJbWFnZXMvS3Jpc3RhcHNQb3J6aW5naXMuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzQ1XSA9IG5ldyBQbGF5ZXIoXCJQb3dlciBGb3J3YXJkXCIsIFwiQW50aG9ueSBEYXZpc1wiLCBcIkhFSUdIVDogNicxMCwgV0VJR0hUOiAyNTNsYiwgQUdFOiAyOCB5ZWFycywgRXhwZXJpZW5jZTogOCBZZWFyc1wiLCA0LCBcIkltYWdlcy9BbnRob255RGF2aXMuanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzQ0XSA9IG5ldyBQbGF5ZXIoXCJQb3dlciBGb3J3YXJkXCIsIFwiWmlvbiBXaWxsaWFtc29uXCIsIFwiSEVJR0hUOiA2JzcsIFdFSUdIVDogMjg0bGIsIEFHRTogMjAgeWVhcnMsIEV4cGVyaWVuY2U6IDEgWWVhcnNcIiwgNCwgXCJJbWFnZXMvWmlvbldpbGxpYW1zb24uanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzQzXSA9IG5ldyBQbGF5ZXIoXCJQb3dlciBGb3J3YXJkXCIsIFwiR2lhbm5pcyBBbnRldG9rb3VubXBvXCIsIFwiSEVJR0hUOiA2JzExLCBXRUlHSFQ6IDI0MmxiLCBBR0U6IDI2IHllYXJzLCBFeHBlcmllbmNlOiA3IFllYXJzXCIsIDUsIFwiSW1hZ2VzL0dpYW5uaXNBbnRldG9rb3VubXBvLmpwZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vTG9hZCBhbGwgQ2VudGVyc1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzcwXSA9IG5ldyBQbGF5ZXIoXCJDZW50ZXJcIiwgXCJKYXJyZXR0IEFsbGVuXCIsIFwiSEVJR0hUOiA2JzExLCBXRUlHSFQ6IDI0M2xiLCBBR0U6IDIyIHllYXJzLCBFeHBlcmllbmNlOiAzIFllYXJzXCIsIDEsIFwiSW1hZ2VzL0phcnJldHRBbGxlbi5qcGdcIik7IFxyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzY5XSA9IG5ldyBQbGF5ZXIoXCJDZW50ZXJcIiwgXCJCcm9vayBMb3BlelwiLCBcIkhFSUdIVDogNycwLCBXRUlHSFQ6IDI4MmxiLCBBR0U6IDMzIHllYXJzLCBFeHBlcmllbmNlOiAxMiBZZWFyc1wiLCAyLCBcIkltYWdlcy9Ccm9va0xvcGV6LmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs2OF0gPSBuZXcgUGxheWVyKFwiQ2VudGVyXCIsIFwiQ2xpbnQgQ2FwZWxhXCIsIFwiSEVJR0hUOiA2JzEwLCBXRTI0MGxiLCBBR0U6IDI2IHllYXJzLCBFeHBlcmllbmNlOiA2IFllYXJzXCIsIDIsIFwiSW1hZ2VzL0NsaW50Q2FwZWxhLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs2N10gPSBuZXcgUGxheWVyKFwiQ2VudGVyXCIsIFwiSGFzc2FuIFdoaXRlc2lkZVwiLCBcIkhFSUdIVDogNycwLCBXRUlHSFQ6IDI2NWxiLCBBR0U6IDMxIHllYXJzLCBFeHBlcmllbmNlOiA4IFllYXJzXCIsIDIsIFwiSW1hZ2VzL0hhc3NhbldoaXRlc2lkZS5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbNjZdID0gbmV3IFBsYXllcihcIkNlbnRlclwiLCBcIkRvbWFudGFzIFNhYm9uaXNcIiwgXCJIRUlHSFQ6IDYnMTEsIFdFSUdIVDogMjQwbGIsIEFHRTogMjQgeWVhcnMsIEV4cGVyaWVuY2U6IDQgWWVhcnNcIiwgMiwgXCJJbWFnZXMvRG9tYW50YXNTYWJvbmlzLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs2NV0gPSBuZXcgUGxheWVyKFwiQ2VudGVyXCIsIFwiTWFyYyBHYXNvbFwiLCBcIkhFSUdIVDogNicxMSwgV0VJR0hUOiAyNTVsYiwgQUdFOiAyMzYgeWVhcnMsIEV4cGVyaWVuY2U6IDEyIFllYXJzXCIsIDIsIFwiSW1hZ2VzL01hcmNHYXNvbC5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbNjRdID0gbmV3IFBsYXllcihcIkNlbnRlclwiLCBcIlN0ZXZlbiBBZGFtc1wiLCBcIkhFSUdIVDogNicxMSwgV0VJR0hUOiAyNjVsYiwgQUdFOiAyNyB5ZWFycywgRXhwZXJpZW5jZTogNyBZZWFyc1wiLCAyLCBcIkltYWdlcy9TdGV2ZW5BZGFtcy5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbNjNdID0gbmV3IFBsYXllcihcIkNlbnRlclwiLCBcIkRlYW5kcmUgQXl0b25cIiwgXCJIRUlHSFQ6IDYnMTEsIFdFSUdIVDogMjUwbGIsIEFHRTogMjIgeWVhcnMsIEV4cGVyaWVuY2U6IDIgWWVhclwiLCAzLCBcIkltYWdlcy9EZWFuZHJlQXl0b24uanBnXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJMaXN0WzYyXSA9IG5ldyBQbGF5ZXIoXCJDZW50ZXJcIiwgXCJOaWtvbGEgVnVjZXZpY1wiLCBcIkhFSUdIVDogNicxMSwgV0VJR0hUOiAyNjBsYiwgQUdFOiAzMCB5ZWFycywgRXhwZXJpZW5jZTogOSBZZWFyc1wiLCAzLCBcIkltYWdlcy9OaWtvbGFWdWNldmljLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs2MV0gPSBuZXcgUGxheWVyKFwiQ2VudGVyXCIsIFwiSm9uYXMgVmFsYW5jaXVuYXNcIiwgXCJIRUlHSFQ6IDYnMTEsIFdFSUdIVDogMjY1bGIsIEFHRTogMjggeWVhcnMsIEV4cGVyaWVuY2U6IDggWWVhcnNcIiwgMywgXCJJbWFnZXMvSm9uYXNWYWxhbmNpdW5hcy5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbNjBdID0gbmV3IFBsYXllcihcIkNlbnRlclwiLCBcIlJ1ZHkgR29iZXJ0XCIsIFwiSEVJR0hUOiA3JzEsIFdFSUdIVDogMjU4bGIsIEFHRTogMjggeWVhcnMsIEV4cGVyaWVuY2U6IDcgWWVhcnNcIiwgMywgXCJJbWFnZXMvUnVkeUdvYmVydC5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbNTldID0gbmV3IFBsYXllcihcIkNlbnRlclwiLCBcIk5pa29sYSBKb2tpY1wiLCBcIkhFSUdIVDogNicxMSwgV0VJR0hUOiAyODRsYiwgQUdFOiAyNiB5ZWFycywgRXhwZXJpZW5jZTogNSBZZWFyc1wiLCA0LCBcIkltYWdlcy9OaWtvbGFKb2tpYy5qcGdcIik7XHJcbiAgICAgICAgICAgIHBsYXllckxpc3RbNThdID0gbmV3IFBsYXllcihcIkNlbnRlclwiLCBcIkthcmwtQW50aG9ueSBUb3duc1wiLCBcIkhFSUdIVDogNicxMSwgV0VJR0hUOiAyNDhsYiwgQUdFOiAyNSB5ZWFycywgRXhwZXJpZW5jZTogNSBZZWFyc1wiLCA0LCBcIkltYWdlcy9LYXJsQW50aG9ueVRvd25zLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs1N10gPSBuZXcgUGxheWVyKFwiQ2VudGVyXCIsIFwiQmFtIEFkZWJheW9cIiwgXCJIRUlHSFQ6IDYnOSwgV0VJR0hUOiAyNTVsYiwgQUdFOiAyMyB5ZWFycywgRXhwZXJpZW5jZTogMyBZZWFyc1wiLCA0LCBcIkltYWdlcy9CYW1BZGViYXlvLmpwZ1wiKTtcclxuICAgICAgICAgICAgcGxheWVyTGlzdFs1Nl0gPSBuZXcgUGxheWVyKFwiQ2VudGVyXCIsIFwiSm9lbCBFbWJpaWRcIiwgXCJIRUlHSFQ6IDcnMCwgV0VJR0hUOiAyODBsYiwgQUdFOiAyNyB5ZWFycywgRXhwZXJpZW5jZTogNCBZZWFyc1wiLCA1LCBcIkltYWdlcy9Kb2VsRW1iaWlkLmpwZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vQ3JlYXRlIGNsaWNrIGV2ZW50IHRvIHRoYXQgZHJvcGRvd25ib3ggc2hvd3Mgb3B0aW9ucyBmb3IgZGlzcGxheWluZ1xyXG4gICAgICAgICAgICB2YXIgZHJvcEJ1dHRvbiA9IERvY3VtZW50LlF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiLmRyb3BCdG5cIik7XHJcbiAgICAgICAgICAgIGRyb3BCdXR0b24uT25DbGljayA9IChldikgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRG9jdW1lbnQuR2V0RWxlbWVudEJ5SWQoXCJteURyb3Bkb3duXCIpLkNsYXNzTGlzdC5Ub2dnbGUoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy9DcmVhdGUgY2xpY2sgZXZlbnRzIHNvIHRoYXQgd2hlbiBuZXcgc2VjdGlvbiBvZiBkcm9wZG93biBib3ggY2xpY2tlZCBkaWZmZXJlbnQgc2VjdGlvbnMgYXJlIGRpc3BsYXllZFxyXG4gICAgICAgICAgICB2YXIgcG9pbnRHdWFyZExpbmsgPSBEb2N1bWVudC5RdWVyeVNlbGVjdG9yPEhUTUxBbmNob3JFbGVtZW50PihcIiNTaG93UG9pbnRHdWFyZFwiKTtcclxuICAgICAgICAgICAgcG9pbnRHdWFyZExpbmsuT25DbGljayA9IChldikgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgU2hvd1Bvc2l0aW9uKFwiUG9pbnQgR3VhcmRcIiwgcGxheWVyTGlzdCwgdGVhbUxpc3QsIHRvdGFsQWxsb3dlZFN0YXJzKTtcclxuICAgICAgICAgICAgICAgIGRyb3BCdXR0b24uQ2xpY2soKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIHNob290aW5nR3VhcmRMaW5rID0gRG9jdW1lbnQuUXVlcnlTZWxlY3RvcjxIVE1MQW5jaG9yRWxlbWVudD4oXCIjU2hvd1Nob290aW5nR3VhcmRcIik7XHJcbiAgICAgICAgICAgIHNob290aW5nR3VhcmRMaW5rLk9uQ2xpY2sgPSAoZXYpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFNob3dQb3NpdGlvbihcIlNob290aW5nIEd1YXJkXCIsIHBsYXllckxpc3QsIHRlYW1MaXN0LCB0b3RhbEFsbG93ZWRTdGFycyk7XHJcbiAgICAgICAgICAgICAgICBkcm9wQnV0dG9uLkNsaWNrKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciBzbWFsbEZvcndhcmRMaW5rID0gRG9jdW1lbnQuUXVlcnlTZWxlY3RvcjxIVE1MQW5jaG9yRWxlbWVudD4oXCIjU2hvd1NtYWxsRm9yd2FyZFwiKTtcclxuICAgICAgICAgICAgc21hbGxGb3J3YXJkTGluay5PbkNsaWNrID0gKGV2KSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBTaG93UG9zaXRpb24oXCJTbWFsbCBGb3J3YXJkXCIsIHBsYXllckxpc3QsIHRlYW1MaXN0LCB0b3RhbEFsbG93ZWRTdGFycyk7XHJcbiAgICAgICAgICAgICAgICBkcm9wQnV0dG9uLkNsaWNrKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciBwb3dlckZvcndhcmRMaW5rID0gRG9jdW1lbnQuUXVlcnlTZWxlY3RvcjxIVE1MQW5jaG9yRWxlbWVudD4oXCIjU2hvd1Bvd2VyRm9yd2FyZFwiKTtcclxuICAgICAgICAgICAgcG93ZXJGb3J3YXJkTGluay5PbkNsaWNrID0gKGV2KSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBTaG93UG9zaXRpb24oXCJQb3dlciBGb3J3YXJkXCIsIHBsYXllckxpc3QsIHRlYW1MaXN0LCB0b3RhbEFsbG93ZWRTdGFycyk7XHJcbiAgICAgICAgICAgICAgICBkcm9wQnV0dG9uLkNsaWNrKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciBjZW50ZXJMaW5rID0gRG9jdW1lbnQuUXVlcnlTZWxlY3RvcjxIVE1MQW5jaG9yRWxlbWVudD4oXCIjU2hvd0NlbnRlclwiKTtcclxuICAgICAgICAgICAgY2VudGVyTGluay5PbkNsaWNrID0gKGV2KSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBTaG93UG9zaXRpb24oXCJDZW50ZXJcIiwgcGxheWVyTGlzdCwgdGVhbUxpc3QsIHRvdGFsQWxsb3dlZFN0YXJzKTtcclxuICAgICAgICAgICAgICAgIGRyb3BCdXR0b24uQ2xpY2soKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vQ3JlYXRlIGNsaWNrIGV2ZW50IGZvciBmaW5hbCBzdWJtaXQgd2hlcmUgaXQgY2hlY2tzIHRvIG1ha2Ugc3VyZSB0ZWFtIGlzIGZpbGxlZCBhbmQgZGlzcGxheXMgdGVhbSBvbiBjb3VydFxyXG4gICAgICAgICAgICB2YXIgdGVhbVN1Ym1pdEJ1dHRvbiA9IERvY3VtZW50LlF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2J0blRlYW1TdWJtaXRcIik7XHJcbiAgICAgICAgICAgIHRlYW1TdWJtaXRCdXR0b24uT25DbGljayA9IChldikgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodGVhbUxpc3RbMF0uTmFtZSA9PSBcIk4xXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29uc29sZS5Xcml0ZUxpbmUoXCJNYWtlIHN1cmUgNSBwbGF5ZXJzIGFyZSBzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlYW1MaXN0WzFdLk5hbWUgPT0gXCJOMlwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbnNvbGUuV3JpdGVMaW5lKFwiTWFrZSBzdXJlIDUgcGxheWVycyBhcmUgc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGVhbUxpc3RbMl0uTmFtZSA9PSBcIk4zXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29uc29sZS5Xcml0ZUxpbmUoXCJNYWtlIHN1cmUgNSBwbGF5ZXJzIGFyZSBzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0ZWFtTGlzdFszXS5OYW1lID09IFwiTjRcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBDb25zb2xlLldyaXRlTGluZShcIk1ha2Ugc3VyZSA1IHBsYXllcnMgYXJlIHNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRlYW1MaXN0WzRdLk5hbWUgPT0gXCJONVwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbnNvbGUuV3JpdGVMaW5lKFwiTWFrZSBzdXJlIDUgcGxheWVycyBhcmUgc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVhbUluZm8uTmFtZSA9IERvY3VtZW50LlF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjdHh0VGVhbU5hbWVcIikuVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVhbUluZm8uU3RhZGl1bSA9IERvY3VtZW50LlF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjdHh0U3RhZGl1bU5hbWVcIikuVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVhbUluZm8uQ2l0eSA9IERvY3VtZW50LlF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjdHh0Q2l0eVwiKS5WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0ZWFtSW5mby5TdGF0ZSA9IERvY3VtZW50LlF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjdHh0U3RhdGVcIikuVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgRG9jdW1lbnQuUXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiN0eHRUZWFtTmFtZVwiKS5WYWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgRG9jdW1lbnQuUXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiN0eHRTdGFkaXVtTmFtZVwiKS5WYWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgRG9jdW1lbnQuUXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiN0eHRDaXR5XCIpLlZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBEb2N1bWVudC5RdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI3R4dFN0YXRlXCIpLlZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsQ291cnQodGVhbUluZm8sIHRlYW1MaXN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vQ3JlYXRlcyB0aGUgdGFibGUgd2hlcmUgcGxheWVycyB3aWxsIGJlIGRpc3BsYXllZFxyXG4gICAgICAgIHN0YXRpYyB2b2lkIENyZWF0ZUhlYWRpbmcoSFRNTFRhYmxlRWxlbWVudCB0YWJsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBoZWFkaW5nID0gRG9jdW1lbnQuQ3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgICAgICB2YXIgaGVhZGluZ18xID0gRG9jdW1lbnQuQ3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgICAgICB2YXIgaGVhZGluZ18yID0gRG9jdW1lbnQuQ3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgICAgICB2YXIgaGVhZGluZ18zID0gRG9jdW1lbnQuQ3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgICAgICB2YXIgaGVhZGluZ180ID0gRG9jdW1lbnQuQ3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgICAgICB2YXIgaGVhZGluZ181ID0gRG9jdW1lbnQuQ3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgICAgICBoZWFkaW5nXzEuSW5uZXJIVE1MID0gXCJJbWFnZVwiO1xyXG4gICAgICAgICAgICBoZWFkaW5nXzIuSW5uZXJIVE1MID0gXCJOYW1lXCI7XHJcbiAgICAgICAgICAgIGhlYWRpbmdfMy5Jbm5lckhUTUwgPSBcIkRlc2NyaXB0aW9uXCI7XHJcbiAgICAgICAgICAgIGhlYWRpbmdfNC5Jbm5lckhUTUwgPSBcIlN0YXJzXCI7XHJcbiAgICAgICAgICAgIGhlYWRpbmdfNS5Jbm5lckhUTUwgPSBcIkFkZCB0byBUZWFtXCI7XHJcbiAgICAgICAgICAgIGhlYWRpbmcuQXBwZW5kQ2hpbGQoaGVhZGluZ18xKTtcclxuICAgICAgICAgICAgaGVhZGluZy5BcHBlbmRDaGlsZChoZWFkaW5nXzIpO1xyXG4gICAgICAgICAgICBoZWFkaW5nLkFwcGVuZENoaWxkKGhlYWRpbmdfMyk7XHJcbiAgICAgICAgICAgIGhlYWRpbmcuQXBwZW5kQ2hpbGQoaGVhZGluZ180KTtcclxuICAgICAgICAgICAgaGVhZGluZy5BcHBlbmRDaGlsZChoZWFkaW5nXzUpO1xyXG4gICAgICAgICAgICB0YWJsZS5BcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vRmlsbHMgdGhlIHRhYmxlIGNyZWF0ZWQgYWJvdmUgd2l0aCBwbGF5ZXJzIGZyb20gZWFjaCBwb3NpdGlvbiBkZXBlbmRpbmcgb24gd2hhdCBwb3NpdGlvbiBpcyBzZWxlY3RlZFxyXG4gICAgICAgIHN0YXRpYyB2b2lkIFNob3dQb3NpdGlvbihzdHJpbmcgcG9zaXRpb24sIFBsYXllcltdIHBsYXllcnMsIFBsYXllcltdIHRlYW0sIGludCB0b3RhbEFsbG93ZWRTdGFycylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB0YWJsZSA9IERvY3VtZW50LlF1ZXJ5U2VsZWN0b3I8SFRNTFRhYmxlRWxlbWVudD4oXCIjaXRlbXNcIik7XHJcbiAgICAgICAgICAgIHRhYmxlLklubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIENyZWF0ZUhlYWRpbmcodGFibGUpO1xyXG5cclxuICAgICAgICAgICAgZm9yZWFjaCAoUGxheWVyIHAgaW4gcGxheWVycylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYocG9zaXRpb24gPT0gXCJQb2ludCBHdWFyZFwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHAuUG9zaXRpb24gPT0gXCJQb2ludCBHdWFyZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnVpbGRMaXN0KHAsIHRlYW0sIHRvdGFsQWxsb3dlZFN0YXJzLCB0YWJsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocG9zaXRpb24gPT0gXCJTaG9vdGluZyBHdWFyZFwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHAuUG9zaXRpb24gPT0gXCJTaG9vdGluZyBHdWFyZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnVpbGRMaXN0KHAsIHRlYW0sIHRvdGFsQWxsb3dlZFN0YXJzLCB0YWJsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09IFwiU21hbGwgRm9yd2FyZFwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwLlBvc2l0aW9uID09IFwiU21hbGwgRm9yd2FyZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnVpbGRMaXN0KHAsIHRlYW0sIHRvdGFsQWxsb3dlZFN0YXJzLCB0YWJsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09IFwiUG93ZXIgRm9yd2FyZFwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwLlBvc2l0aW9uID09IFwiUG93ZXIgRm9yd2FyZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnVpbGRMaXN0KHAsIHRlYW0sIHRvdGFsQWxsb3dlZFN0YXJzLCB0YWJsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09IFwiQ2VudGVyXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAuUG9zaXRpb24gPT0gXCJDZW50ZXJcIilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJ1aWxkTGlzdChwLCB0ZWFtLCB0b3RhbEFsbG93ZWRTdGFycywgdGFibGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9GdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB0byBmaWxsIHRoZSB0YWJsZSBcclxuICAgICAgICBzdGF0aWMgdm9pZCBCdWlsZExpc3QoUGxheWVyIHAsIFBsYXllcltdIHRlYW0sIGludCB0b3RhbEFsbG93ZWRTdGFycywgSFRNTFRhYmxlRWxlbWVudCB0YWJsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB0YWJsZVJvdyA9IERvY3VtZW50LkNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICAgICAgdmFyIHRhYmxlRGF0YUltYWdlID0gRG9jdW1lbnQuQ3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICB2YXIgdGFibGVEYXRhTmFtZSA9IERvY3VtZW50LkNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgdmFyIHRhYmxlRGF0YURlc2NyaXB0aW9uID0gRG9jdW1lbnQuQ3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICB2YXIgdGFibGVEYXRhUHJpY2UgPSBEb2N1bWVudC5DcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHZhciBpbWcgPSBEb2N1bWVudC5DcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICBpbWcuU2V0QXR0cmlidXRlKFwic3JjXCIsIHAuSW1hZ2UpO1xyXG4gICAgICAgICAgICB0YWJsZURhdGFJbWFnZS5BcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgICAgICB0YWJsZURhdGFOYW1lLklubmVySFRNTCA9IHAuTmFtZTtcclxuICAgICAgICAgICAgdGFibGVEYXRhRGVzY3JpcHRpb24uSW5uZXJIVE1MID0gcC5EZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgdGFibGVEYXRhUHJpY2UuSW5uZXJIVE1MID0gcC5QcmljZS5Ub1N0cmluZygpO1xyXG4gICAgICAgICAgICB0YWJsZVJvdy5BcHBlbmRDaGlsZCh0YWJsZURhdGFJbWFnZSk7XHJcbiAgICAgICAgICAgIHRhYmxlUm93LkFwcGVuZENoaWxkKHRhYmxlRGF0YU5hbWUpO1xyXG4gICAgICAgICAgICB0YWJsZVJvdy5BcHBlbmRDaGlsZCh0YWJsZURhdGFEZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIHRhYmxlUm93LkFwcGVuZENoaWxkKHRhYmxlRGF0YVByaWNlKTtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9IERvY3VtZW50LkNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5JZCA9IHAuTmFtZTtcclxuICAgICAgICAgICAgdmFyIHRleHQgPSBEb2N1bWVudC5DcmVhdGVUZXh0Tm9kZShcIkFkZCB0byBUZWFtXCIpO1xyXG4gICAgICAgICAgICBidXR0b24uQXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICAgICAgICAgIC8vQ3JlYXRlcyBjbGljayBldmVudCBmb3IgYWRkIHRvIHRlYW0gYnV0dG9uIHNvIHRoYXQgd2hlbiBwbGF5ZXIgaXMgYWRkZWQgaGUgZ29lcyBpbnRvIHlvdXIgdGVhbVxyXG4gICAgICAgICAgICBidXR0b24uT25DbGljayA9IChldikgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yZWFjaCAoUGxheWVyIHQgaW4gdGVhbSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocC5Qb3NpdGlvbiA9PSB0LlBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHAuTmFtZSAhPSB0Lk5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludCB0ZWFtUHJpY2UgPSBVcGRhdGVUZWFtUHJpY2UocCwgdGVhbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlYW1QcmljZSA8PSB0b3RhbEFsbG93ZWRTdGFycylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lk5hbWUgPSBwLk5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5EZXNjcmlwdGlvbiA9IHAuRGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5QcmljZSA9IHAuUHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5JbWFnZSA9IHAuSW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbERpdihwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25zb2xlLldyaXRlTGluZShcIkNhbiBub3QgZXhjZWVkIDE4IFN0YXJzIGZvciB0aGUgd2hvbGUgdGVhbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnNvbGUuV3JpdGVMaW5lKFwiSGUgaXMgYWxyZWFkeSBpbiB0ZWFtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0YWJsZVJvdy5BcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgICAgICB0YWJsZS5BcHBlbmRDaGlsZCh0YWJsZVJvdyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgaW50IFVwZGF0ZVRlYW1QcmljZShQbGF5ZXIgcCwgUGxheWVyW10gdGVhbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGludCB0ZWFtUHJpY2UgPSAwO1xyXG4gICAgICAgICAgICBmb3JlYWNoIChQbGF5ZXIgdCBpbiB0ZWFtKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihwLlBvc2l0aW9uID09IHQuUG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5QcmljZSA9IHAuUHJpY2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0ZWFtUHJpY2UgKz0gdC5QcmljZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGVhbVByaWNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIHZvaWQgZmlsbERpdihQbGF5ZXIgcClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHAuUG9zaXRpb24gPT0gXCJQb2ludCBHdWFyZFwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGl2ID0gRG9jdW1lbnQuUXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oXCIjcG9pbnRHdWFyZFNwb3RcIik7XHJcbiAgICAgICAgICAgICAgICBkaXYuSW5uZXJIVE1MID0gXCJQb2ludCBHdWFyZDogXCIgKyBwLk5hbWUgKyBcIiBcIiArIHAuUHJpY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihwLlBvc2l0aW9uID09IFwiU2hvb3RpbmcgR3VhcmRcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpdiA9IERvY3VtZW50LlF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KFwiI3Nob290aW5nR3VhcmRTcG90XCIpO1xyXG4gICAgICAgICAgICAgICAgZGl2LklubmVySFRNTCA9IFwiU2hvb3RpbmcgR3VhcmQ6IFwiICsgcC5OYW1lICsgXCIgXCIgKyBwLlByaWNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHAuUG9zaXRpb24gPT0gXCJTbWFsbCBGb3J3YXJkXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBkaXYgPSBEb2N1bWVudC5RdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PihcIiNzbWFsbEZvcndhcmRTcG90XCIpO1xyXG4gICAgICAgICAgICAgICAgZGl2LklubmVySFRNTCA9IFwiU21hbGwgRm9yd2FyZDogXCIgKyBwLk5hbWUgKyBcIiBcIiArIHAuUHJpY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocC5Qb3NpdGlvbiA9PSBcIlBvd2VyIEZvcndhcmRcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpdiA9IERvY3VtZW50LlF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KFwiI3Bvd2VyRm9yd2FyZFNwb3RcIik7XHJcbiAgICAgICAgICAgICAgICBkaXYuSW5uZXJIVE1MID0gXCJQb3dlciBGb3J3YXJkOiBcIiArIHAuTmFtZSArIFwiIFwiICsgcC5QcmljZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChwLlBvc2l0aW9uID09IFwiQ2VudGVyXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBkaXYgPSBEb2N1bWVudC5RdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PihcIiNjZW50ZXJTcG90XCIpO1xyXG4gICAgICAgICAgICAgICAgZGl2LklubmVySFRNTCA9IFwiQ2VudGVyOiBcIiArIHAuTmFtZSArIFwiIFwiICsgcC5QcmljZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIHZvaWQgZmlsbENvdXJ0KHRlYW1JbmZvIHRlYW1JbmZvLCBQbGF5ZXJbXSB0ZWFtTGlzdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB0ZWFtSW5mb05hbWUgPSBEb2N1bWVudC5RdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PihcIiN0ZWFtSW5mb05hbWVcIik7XHJcbiAgICAgICAgICAgIHRlYW1JbmZvTmFtZS5Jbm5lckhUTUwgPSAoXCJUZWFtIE5hbWU6IFwiICsgdGVhbUluZm8uTmFtZSk7XHJcbiAgICAgICAgICAgIHZhciB0ZWFtSW5mb1N0YWRpdW0gPSBEb2N1bWVudC5RdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PihcIiN0ZWFtSW5mb1N0YWRpdW1cIik7XHJcbiAgICAgICAgICAgIHRlYW1JbmZvU3RhZGl1bS5Jbm5lckhUTUwgPSAoXCJUZWFtIFN0YWRpdW06IFwiICsgdGVhbUluZm8uU3RhZGl1bSk7XHJcbiAgICAgICAgICAgIHZhciB0ZWFtSW5mb0NpdHkgPSBEb2N1bWVudC5RdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PihcIiN0ZWFtSW5mb0NpdHlcIik7XHJcbiAgICAgICAgICAgIHRlYW1JbmZvQ2l0eS5Jbm5lckhUTUwgPSAoXCJUZWFtIENpdHk6IFwiICsgdGVhbUluZm8uQ2l0eSk7XHJcbiAgICAgICAgICAgIHZhciB0ZWFtSW5mb1N0YXRlID0gRG9jdW1lbnQuUXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oXCIjdGVhbUluZm9TdGF0ZVwiKTtcclxuICAgICAgICAgICAgdGVhbUluZm9TdGF0ZS5Jbm5lckhUTUwgPSAoXCJUZWFtIFN0YXRlOiBcIiArIHRlYW1JbmZvLlN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgIGZvcmVhY2ggKFBsYXllciB0IGluIHRlYW1MaXN0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0LlBvc2l0aW9uID09IFwiUG9pbnQgR3VhcmRcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcG9pbnRHdWFyZCA9IERvY3VtZW50LlF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KFwiI3BvaW50R3VhcmRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRHdWFyZC5Jbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWcgPSBEb2N1bWVudC5DcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZy5TZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdC5JbWFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRHdWFyZC5BcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodC5Qb3NpdGlvbiA9PSBcIlNob290aW5nIEd1YXJkXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNob290aW5nR3VhcmQgPSBEb2N1bWVudC5RdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PihcIiNzaG9vdGluZ0d1YXJkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNob290aW5nR3VhcmQuSW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gRG9jdW1lbnQuQ3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcuU2V0QXR0cmlidXRlKFwic3JjXCIsIHQuSW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNob290aW5nR3VhcmQuQXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHQuUG9zaXRpb24gPT0gXCJTbWFsbCBGb3J3YXJkXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNtYWxsRm9yd2FyZCA9IERvY3VtZW50LlF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KFwiI3NtYWxsRm9yd2FyZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzbWFsbEZvcndhcmQuSW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gRG9jdW1lbnQuQ3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcuU2V0QXR0cmlidXRlKFwic3JjXCIsIHQuSW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNtYWxsRm9yd2FyZC5BcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodC5Qb3NpdGlvbiA9PSBcIlBvd2VyIEZvcndhcmRcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcG93ZXJGb3J3YXJkID0gRG9jdW1lbnQuUXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oXCIjcG93ZXJGb3J3YXJkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvd2VyRm9yd2FyZC5Jbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWcgPSBEb2N1bWVudC5DcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZy5TZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdC5JbWFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG93ZXJGb3J3YXJkLkFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0LlBvc2l0aW9uID09IFwiQ2VudGVyXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNlbnRlciA9IERvY3VtZW50LlF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KFwiI2NlbnRlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXIuSW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gRG9jdW1lbnQuQ3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcuU2V0QXR0cmlidXRlKFwic3JjXCIsIHQuSW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlci5BcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNsYXNzIFBsYXllclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgUG9zaXRpb24geyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgTmFtZSB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBEZXNjcmlwdGlvbiB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIGludCBQcmljZSB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBJbWFnZSB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBQbGF5ZXIoc3RyaW5nIHBvc2l0aW9uLCBzdHJpbmcgbmFtZSwgc3RyaW5nIGRlc2NyaXB0aW9uLCBpbnQgcHJpY2UsIHN0cmluZyBpbWFnZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgICAgIE5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICBEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICBQcmljZSA9IHByaWNlO1xyXG4gICAgICAgICAgICBJbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyB0ZWFtSW5mb1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgTmFtZSB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBTdGFkaXVtIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIENpdHkgeyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgU3RhdGUgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdGVhbUluZm8oc3RyaW5nIG5hbWUsIHN0cmluZyBzdGFkaXVtLCBzdHJpbmcgY2l0eSwgc3RyaW5nIHN0YXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIFN0YWRpdW0gPSBzdGFkaXVtO1xyXG4gICAgICAgICAgICBDaXR5ID0gY2l0eTtcclxuICAgICAgICAgICAgU3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbn0iXQp9Cg==
