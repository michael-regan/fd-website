let params = (new URL(document.location)).searchParams;
let id = Number(params.get("id"));

var generateDiagram = document.querySelector('.btn');
var currentEvent = id;

// generateDiagram.addEventListener('click', draw);


function resetScreen() {

    var resetDiv = document.querySelectorAll('.svg-diagram');
    for (var i = 0 ; i < resetDiv.length ; i++) {
        resetDiv[i].textContent = '';
    }

    var resetText = document.querySelectorAll('.textbox');
    for (var i = 0 ; i < resetText.length ; i++) {
        resetText[i].textContent = '';
    }   

    //draw();

}

function addSecondDivText (myText, linkToConstructionPage, linkToGeneralNetwork, linkToNetworkTablePage, bold=true, n) {

    if (n%2!==0) {element = "textbox_right"}
        else {element = "textbox_left"}

    var theDiv = document.getElementById(element);
    var h2 = document.createElement("H2");
    var vn_element = document.createElement("vn_element")
    var content = document.createTextNode(myText);
    var currentLocation = window.location.href;

    if (n===6) {
        var cell = document.getElementById("textbox");
        cell.appendChild(content);
    }

    if (bold==true) {
        theDiv.appendChild(h2);
        h2.appendChild(content);
    } else {

        if (n === 0 || n === 1){
            theDiv.appendChild(vn_element);
            vn_element.appendChild(content);
        }

        else if (n === 3) {

            var btn = document.createElement("button");
            btn.innerHTML = myText;
  
            var nextLocation = currentLocation.split("id=")[0] + "id="+ linkToConstructionPage;

            btn.addEventListener("mouseover", function(){
                btn.style.backgroundColor = "#FF00CC";
            });

            btn.addEventListener("mouseout", function(){
                btn.style.backgroundColor = "#BEBEBE";
            });

            btn.addEventListener("click", function(){
                location = nextLocation; // Navigate to new page
            });

            theDiv.appendChild(btn);

        }

        else if (n === 5) {

            var btn = document.createElement("button");

            var generalNetworkName = myText.replace(/([A-Z])/g, ' $1').trim();

            btn.innerHTML = generalNetworkName;
  
            var nextLocation = currentLocation.split("id=")[0] + "id="+ linkToGeneralNetwork;

            btn.addEventListener("mouseover", function(){
                btn.style.backgroundColor = "#FF00CC";
            });

            btn.addEventListener("mouseout", function(){
                btn.style.backgroundColor = "#BEBEBE";
            });

            btn.addEventListener("click", function(){
                location = nextLocation; // Navigate to new page
            });

            theDiv.appendChild(btn);

        }

        else if (n === 7) {

            var btn = document.createElement("button");

            // var parentNetworkTitle = myText.replace(/([A-Z])/g, ' $1').trim();

            // btn.innerHTML = parentNetworkTitle;

            btn.innerHTML = "Construction to verb"
  
            var nextLocation = currentLocation.split("id=")[0] + "id="+ linkToNetworkTablePage;

            btn.addEventListener("mouseover", function(){
                btn.style.backgroundColor = "#FF00CC";
            });

            btn.addEventListener("mouseout", function(){
                btn.style.backgroundColor = "#BEBEBE";
            });


            btn.addEventListener("click", function(){
                location = nextLocation; // Navigate to new page
            });

            theDiv.appendChild(btn);

        }

        else {

        theDiv.appendChild(content);
        
        }

    }

}


function addTableWithLinksToMappingPage (data, n) {

    if (n===0) {element = "text_left_top"}
        else if (n===1) {element = "button_right_top"}
        else if (n===2) {element = "text_left_bottom"}
        else {element = "button_right_bottom"}

    var theDiv = document.getElementById(element);
    var h4 = document.createElement("H4");
    var currentLocation = window.location.href;


    if (n%2!=0) {

            var btn = document.createElement("button");
            btn.innerHTML = data["text"];

            var nextLocation = currentLocation.split("id=")[0] + "id="+ data["id"];

            btn.addEventListener("mouseover", function(){
                btn.style.backgroundColor = "#FF00CC";
            });

            btn.addEventListener("mouseout", function(){
                btn.style.backgroundColor = "#BEBEBE";
            });

            btn.addEventListener("click", function(){
                location = nextLocation; // Navigate to new page
            });

            theDiv.appendChild(btn);

        } else {

            var content = document.createTextNode(data);

            theDiv.appendChild(h4);
            h4.appendChild(content);

        }

    }

// the event representations


var events = {
  "181": [
    "Brian wiped at the counter",
    "wipe_manner-10.4.1",
    "Sbj V at/on/about/of/over Obl",
    "Volitional Attend",
    "DirectedAchievement",
    "",
    "Theme-of(y,e) & Component-of(a,Brian) & Component-of(b,counter) & DirAch(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL(q1) & EXIST(q2) & ATT(a,b)",
    ""
  ],
  "228": [
        "Jackie chased the thief",
        "chase-51.6",
        "Sbj V Obj",
        "Mutual",
        "DirectedActivity",
        "PursuitMotionNetwork",
        "Theme-of(x,e) & Component-of(a,Jackie) & Component-of(b,thief) & DirAct(a,i,j,q1) & InhStPhExt(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
        "10003"
  ],
  "238": [
        "Jackie chased after the thief",
        "chase-51.6",
        "Sbj V PathP",
        "Mutual",
        "DirectedActivity",
        "PursuitMotionNetwork",
        "Theme-of(x,e) & Component-of(a,Jackie) & Component-of(b,thief) & DirAct(a,i,j,q1) & InhStPhExt(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
        "10003"
  ],
  "633": [
        "Jackie accompanied Rose",
        "accompany-51.7",
        "Sbj V Obj PathP",
        "Mutual",
        "IncrementalAccomplishment",
        "PursuitMotionNetwork",
        "Theme-of(y,e) & Component-of(a,Jackie) & Component-of(b,Rose) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & VOL(q1) & MOT(q2) & FRC(a,b)",
        "10003"
  ],
  "726": [
    "The drawer rolled to an open position",
    "roll-51.3.1",
    "Sbj V ResultP",
    "Autonomous COS",
    "IncrementalAccomplishment",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,drawer) & IncrAcc(a,i,j,q1) & COS(q1)",
    "10003"
  ],
  "727": [
    "The drawer rolled open",
    "roll-51.3.1",
    "Sbj V ResultP",
    "Autonomous COS",
    "IncrementalAccomplishment",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,drawer) & IncrAcc(a,i,j,q1) & COS(q1)",
    "10003"
  ],
  "743": [
    "Bill broke the window with a ball",
    "hit-18.1",
    "Sbj V Obj ResultP with Obl",
    "Instrument COS",
    "DirectedAchievement",
    "",
    "Theme-of(z,e) & Component-of(a,Bill) & Component-of(b,ball) & Component-of(c,window) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & DirAch(c,i,l,q3) & VOL(q1) & INTL(q2) & COS(q3) & MNP(a,b) & FRC(b,c)",
    ""
  ],
  "1183": [
    "The dog barked at the cat.",
    "animal_sounds-38",
    "Sbj V at/on/about/of/over Obl",
    "Volitional Attend",
    "UndirectedActivity",
    "",
    "Theme-of(y,e) & Component-of(a,dog) & Component-of(b,cat) & UndAct(a,i,j,q1) & InhStPhExt(b,i,k,q2) & VOL(q1) & EXIST(q2) & ATT(a,b)",
    ""
  ],
  "835": [
    "The employees staffed the store",
    "fill-9.8",
    "Sbj V Obj",
    "Self-volitional Provide",
    "IncrementalAccomplishment",
    "",
    "Theme-of(x,e) & Component-of(a,employees) & Component-of(b,store) & IncrAcc(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/INTL(q1) & +MER(q2) & PTH(a,b)",
    ""
  ],
  "834": [
    "The eggs mixed with the cream",
    "mix-22.1-1",
    "Sbj V with Obl",
    "Autonomous Provide",
    "IncrementalAccomplishment",
    "",
    "Theme-of(x,e) & Component-of(a,eggs) & Component-of(b,cream) & IncrAcc(a,i,j,q1) & InhStPh(b,i,k,q2) & INTL(q1) & +MER(q2) & PTH(a,b)",
    ""
  ],
  "978": [
    "The child and her mother clung together",
    "cling-22.5",
    "Sbj V",
    "Self-volitional Internal",
    "TransitoryState",
    "",
    "Theme-of(x,e) & Component-of(a,child and mother) & TranStPh(a,i,j,q1) & VOL/INTL(q1)",
    ""
  ],
  "953": [
    "The eggs mixed well",
    "mix-22.1-1",
    "Sbj V",
    "Autonomous Internal",
    "IncrementalAccomplishment",
    "",
    "Theme-of(x,e) & Component-of(a,eggs) & IncrAcc(a,i,j,q1) & INTL(q1)",
    ""
  ],
  "954": [
    "The eggs and cream mixed well together",
    "mix-22.1-1",
    "Sbj V",
    "Autonomous Internal",
    "IncrementalAccomplishment",
    "",
    "Theme-of(x,e) & Component-of(a,eggs and cream) & IncrAcc(a,i,j,q1) & INTL(q1)",
    ""
  ],
  "965": [
    "The yolk and the white separated",
    "separate-23.1",
    "Sbj V",
    "Autonomous Internal",
    "DirectedAchievement",
    "",
    "Theme-of(x,e) & Component-of(a,yolk and white) & DirAch(a,i,j,q1) & INTL(q1)",
    ""
  ],
  "992": [
    "Herman mixed the eggs",
    "mix-22.1-1",
    "Sbj V Obj",
    "Volitional Internal",
    "DirectedAchievement",
    "CarryMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Herman) & Component-of(b,eggs) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & INTL(q2) & FRC(a,b)",
    "10005"
  ],
  "993": [
    "Herman mixed the eggs and the cream together",
    "mix-22.1-1",
    "Sbj V Obj",
    "Volitional Internal",
    "IncrementalAccomplishment",
    "CarryMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Herman) & Component-of(b,eggs and the cream) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & VOL(q1) & INTL(q2) & FRC(a,b)",
    "10005"
  ],
  "997": [
    "I separated the yolk and the white",
    "separate-23.1",
    "Sbj V Obj",
    "Volitional Internal",
    "DirectedAchievement",
    "CarryMotionNetwork",
    "Theme-of(y,e) & Component-of(a,I) & Component-of(b,yolk and white) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & INTL(q2) & FRC(a,b)",
    "10005"
  ],
  "1130": [
    "Clouds cleared from the sky.",
    "clear-10.3-1",
    "Sbj V PathP",
    "Autonomous Remove",
    "IncrementalAccomplishment",
    "",
    "Theme-of(x,e) & Component-of(a,Clouds) & Component-of(b,sky) & IncrAcc(a,i,j,q1) & InhStPh(b,i,k,q2) & -MER(q1) & EXIST(q2) & PTH(a,b)",
    ""
  ],
  "1133": [
    "The twig broke off the branch",
    "split-23.2",
    "Sbj V PathP",
    "Autonomous Remove",
    "DirectedAchievement",
    "",
    "Theme-of(x,e) & Component-of(a,twig) & Component-of(b,branch) & DirAch(a,i,j,q1) & InhStPh(b,i,k,q2) & -MER(q1) & EXIST(q2) & PTH(a,b)",
    ""
  ],
  "1134": [
    "The twigs broke off of those branches easily",
    "split-23.2",
    "Sbj V PathP",
    "Autonomous Remove",
    "IncrementalAccomplishment",
    "",
    "Theme-of(x,e) & Component-of(a,twigs) & Component-of(b,branches) & IncrAcc(a,i,j,q1) & InhStPh(b,i,k,q2) & -MER(q1) & EXIST(q2) & PTH(a,b)",
    ""
  ],
  "1136": [
    "Doug cleaned the dishes from the table",
    "clear-10.3",
    "Sbj V Obj PathP",
    "Volitional Remove",
    "IncrementalAccomplishment",
    "",
    "Theme-of(y,e) & Component-of(a,Doug) & Component-of(b,dishes) & Component-of(c,table) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & -MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    ""
  ],
  "1137": [
    "Sympathetic fans clipped copies of Ms. Shere's recipes from magazines",
    "cut-21.1",
    "Sbj V Obj PathP",
    "Volitional Remove",
    "IncrementalAccomplishment",
    "",
    "Theme-of(y,e) & Component-of(a,fans) & Component-of(b,copies) & Component-of(c,magazines) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & -MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    ""
  ],
  "1138": [
    "I unscrewed the handle",
    "disassemble-23.3",
    "Sbj V Obj",
    "Volitional Remove",
    "IncrementalAccomplishment",
    "",
    "Theme-of(y,e) & Component-of(a,I) & Component-of(b,handle) & Component-of(c,NI) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & -MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    ""
  ],
  "1148": [
    "Brian wiped the fingerprints from the counter",
    "wipe_manner-10.4.1",
    "Sbj V Obj PathP",
    "Volitional Remove",
    "IncrementalAccomplishment",
    "",
    "Theme-of(y,e) & Component-of(a,Brian) & Component-of(b,fingerprints) & Component-of(c,counter) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & -MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    ""
  ],
  "1157": [
    "The sky cleared",
    "clear-10.3-1",
    "Sbj V",
    "Autonomous Deprive",
    "IncrementalAccomplishment",
    "",
    "Theme-of(y,e) & Component-of(a,NI) & Component-of(b,sky) & IncrAcc(a,i,j,q1) & InhStPh(b,i,k,q2) & INTL(q1) & -MER(q2) & PTH(a,b)",
    ""
  ],
  "1158": [
    "Carla was vacuuming",
    "wipe_instr-10.4.2",
    "Sbj V",
    "Volitional Deprive",
    "UndirectedActivity",
    "",
    "Theme-of(z,e) & Component-of(a,Carla) & Component-of(b,NI) & Component-of(c,NI) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & UndAct(c,i,l,q3) & VOL(q1) & INTL(q2) & -MER(q3) & FRC(a,b) & PTH(b,c)",
    ""
  ],
  "1161": [
    "The cook boned the fish",
    "pit-10.7",
    "Sbj V Obj",
    "Volitional Deprive",
    "IncrementalAccomplishment",
    "",
    "Theme-of(z,e) & Component-of(a,cook) & Component-of(b,NI) & Component-of(c,fish) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & INTL(q2) & -MER(q3) & FRC(a,b) & PTH(b,c)",
    ""
  ],
  "1162": [
    "I bled him",
    "substance_emission-43.4-1-1",
    "Sbj V Obj",
    "Volitional Deprive",
    "IncrementalAccomplishment",
    "",
    "Theme-of(z,e) & Component-of(a,I) & Component-of(b,NI) & Component-of(c,him) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & INTL(q2) & -MER(q3) & FRC(a,b) & PTH(b,c)",
    ""
  ],
  "1163": [
    "Carla shoveled the walk",
    "wipe_instr-10.4.2",
    "Sbj V Obj",
    "Volitional Deprive",
    "IncrementalAccomplishment",
    "",
    "Theme-of(z,e) & Component-of(a,Carla) & Component-of(b,NI) & Component-of(c,walk) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & INTL(q2) & -MER(q3) & FRC(a,b) & PTH(b,c)",
    ""
  ],
  "755": [
    "The strong winds cleared the sky.",
    "clear-10.3",
    "Sbj V Obj",
    "Physical Deprive",
    "IncrementalAccomplishment",
    "",
    "Theme-of(y,e) & Component-of(a,winds) & Component-of(b,NI) & Component-of(c,sky) & UndAct(a,i,j,q1) & UndAct(b,i,j,q2) & IncrAcc(c,i,k,q3) & INTL(q1) & INTL(q2) & -MER(q3) & FRC(a,b) & PTH(b,c)",
    ""
  ],
  "682": [
    "Cora coiled the rope around the post",
    "coil-9.6",
    "Sbj V Obj PathP",
    "Volitional Place",
    "IncrementalAccomplishment",
    "",
    "Theme-of(y,e) & Component-of(a,Cora) & Component-of(b,rope) & Component-of(c,post) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & +MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    ""
  ],
  "187": [
    "Jessica squirted water at me",
    "spray-9.7",
    "Sbj V Obj PathP",
    "Volitional Place",
    "IncrementalAccomplishment",
    "",
    "Theme-of(y,e) & Component-of(a,Jessica) & Component-of(b,water) & Component-of(c,me) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & +MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    ""
  ],
  "247": [
    "Frances hid the presents behind the books in the drawer",
    "concealment-16",
    "Sbj V Obj PathP",
    "Volitional Place",
    "IncrementalAccomplishment",
    "",
    "Theme-of(y,e) & Component-of(a,Frances) & Component-of(b,presents) & Component-of(c,books) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & +MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    ""
  ],
  "683": [
    "I spooned the sauce there",
    "funnel-9.3",
    "Sbj V Obj PathP",
    "Volitional Place",
    "IncrementalAccomplishment",
    "",
    "Theme-of(y,e) & Component-of(a,I) & Component-of(b,sauce) & Component-of(c,there) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & +MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    ""
  ],
  "679": [
    "The child clung to her mother",
    "cling-22.5",
    "Sbj V PathP",
    "Self-Volitional Place",
    "TransitoryState",
    "",
    "Theme-of(x,e) & Component-of(a,child) & Component-of(b,mother) & TranStPh(a,i,j,q1) & InhStPhExtShort(b,i,k,q2) & VOL/+MER(q1) & EXIST(q2) & PTH(a,b)",
    ""
  ],
  "132": [
    "The children hid",
    "concealment-16",
    "Sbj V",
    "Self-Volitional Place",
    "IncrementalAccomplishment",
    "",
    "Theme-of(x,e) & Component-of(a,children) & Component-of(b,NI) & IncrAcc(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/+MER(q1) & EXIST(q2) & PTH(a,b)",
    ""
  ],
  "248": [
    "The children hid in the chimney",
    "concealment-16",
    "Sbj V PathP",
    "Self-Volitional Place",
    "IncrementalAccomplishment",
    "",
    "Theme-of(x,e) & Component-of(a,children) & Component-of(b,chimney) & IncrAcc(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/+MER(q1) & EXIST(q2) & PTH(a,b)",
    ""
  ],
  "814": [
    "Bill rolled the drawer open",
    "roll-51.3.1",
    "Sbj V Obj ResultP",
    "Volitional COS",
    "IncrementalAccomplishment",
    "GeneralMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Bill) & Component-of(b,drawer) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
    "10003"
  ],
  "815": [
    "Bill rolled the drawer to an open position",
    "roll-51.3.1",
    "Sbj V Obj ResultP",
    "Volitional COS",
    "IncrementalAccomplishment",
    "GeneralMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Bill) & Component-of(b,drawer) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
    "10003"
  ],
  "816": [
    "Tom walked the dog to exhaustion",
    "run-51.3.2-2",
    "Sbj V Obj ResultP",
    "Volitional COS",
    "NonincrementalAccomplishment",
    "GeneralMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Tom) & Component-of(b,dog) & UndAct(a,i,j,q1) & NonIncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
    "10003"
  ],
  "832": [
    "He waltzed her to exhaustion",
    "waltz-51.5",
    "Sbj V Obj ResultP",
    "Volitional COS",
    "NonincrementalAccomplishment",
    "GeneralMotionNetwork",
    "Theme-of(y,e) & Component-of(a,He) & Component-of(b,her) & UndAct(a,i,j,q1) & NonIncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
    "10003"
  ],
  "833": [
    "He waltzed her dizzy",
    "waltz-51.5",
    "Sbj V Obj ResultP",
    "Volitional COS",
    "NonincrementalAccomplishment",
    "GeneralMotionNetwork",
    "Theme-of(y,e) & Component-of(a,He) & Component-of(b,her) & UndAct(a,i,j,q1) & NonIncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
    "10003"
  ],
  "845": [
    "Lora buttered the toast with unsalted butter",
    "butter-9.9",
    "Sbj V Obj in/with Obl",
    "Volitional Provide",
    "IncrementalAccomplishment",
    "",
    "Theme-of(y,e) & Component-of(a,Lora) & Component-of(b,butter) & Component-of(c,toast) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & INTL(q2) & +MER(q3) & FRC(a,b) & PTH(b,c)",
    ""
  ],
  "839": [
    "Lora buttered the toast",
    "butter-9.9",
    "Sbj V Obj",
    "Volitional Provide",
    "IncrementalAccomplishment",
    "",
    "Theme-of(y,e) & Component-of(a,Lora) & Component-of(b,NI) & Component-of(c,toast) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & INTL(q2) & +MER(q3) & FRC(a,b) & PTH(b,c)",
    ""
  ],
  "840": [
    "Marlene dressed the baby",
    "dress-41.1.1",
    "Sbj V Obj",
    "Volitional Provide",
    "IncrementalAccomplishment",
    "",
    "Theme-of(y,e) & Component-of(a,Marlene) & Component-of(b,NI) & Component-of(c,baby) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & INTL(q2) & +MER(q3) & FRC(a,b) & PTH(b,c)",
    ""
  ],
  "841": [
    "Leslie covered the bed.",
    "fill-9.8",
    "Sbj V Obj",
    "Volitional Provide",
    "IncrementalAccomplishment",
    "",
    "Theme-of(y,e) & Component-of(a,Leslie) & Component-of(b,NI) & Component-of(c,bed) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & INTL(q2) & +MER(q3) & FRC(a,b) & PTH(b,c)",
    ""
  ],
  "842": [
    "The jeweler decorated the ring",
    "illustrate-25.3",
    "Sbj V Obj",
    "Volitional Provide",
    "IncrementalAccomplishment",
    "",
    "Theme-of(y,e) & Component-of(a,jeweler) & Component-of(b,NI) & Component-of(c,ring) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & INTL(q2) & +MER(q3) & FRC(a,b) & PTH(b,c)",
    ""
  ],
  "1035": [
    "The ball rolled",
    "roll-51.3.1",
    "Sbj V",
    "Autonomous Motion",
    "UndirectedActivity",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,ball) & Component-of(b,NI) & UndAct(a,i,j,q1) & InhStPh(b,i,k,q2) & MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1036": [
    "The book slid",
    "slide-11.2",
    "Sbj V",
    "Autonomous Motion",
    "DirectedActivity",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,book) & Component-of(b,NI) & DirAct(a,i,j,q1) & InhStPh(b,i,k,q2) & MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1039": [
    "The ball rolled down the hill",
    "roll-51.3.1",
    "Sbj V PathP",
    "Autonomous Motion",
    "DirectedActivity",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,ball) & Component-of(b,hill) & DirAct(a,i,j,q1) & InhStPh(b,i,k,q2) & MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1040": [
    "The book slid from the table",
    "slide-11.2",
    "Sbj V PathP",
    "Autonomous Motion",
    "DirectedActivity",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,book) & Component-of(b,table) & DirAct(a,i,j,q1) & InhStPh(b,i,k,q2) & MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1041": [
    "The book slid from the table to the floor",
    "slide-11.2",
    "Sbj V PathP",
    "Autonomous Motion",
    "IncrementalAccomplishment",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,books) & Component-of(b,table-floor) & IncrAcc(a,i,j,q1) & InhStPh(b,i,k,q2) & MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1042": [
    "The books slid to the floor",
    "slide-11.2",
    "Sbj V PathP",
    "Autonomous Motion",
    "IncrementalAccomplishment",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,books) & Component-of(b,floor) & IncrAcc(a,i,j,q1) & InhStPh(b,i,k,q2) & MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1048": [
        "The train brought us here",
        "bring-11.3",
        "Sbj V Obj PathP",
        "Physical Motion",
        "DirectedAchievement",
        "CarryMotionNetwork",
        "Theme-of(y,e) & Component-of(a,train) & Component-of(b,us) & Component-of(c,here) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & InhStPh(c,i,l,q3) & INTL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
        "10003"
  ],
  "1053": [
    "He came from France to Colorado",
    "escape-51.1",
    "Sbj V PathP",
    "Self-volitional Motion",
    "DirectedAchievement",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,He) & Component-of(b,Colorado) & DirAch(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1054": [
    "He came through the door",
    "escape-51.1",
    "Sbj V PathP",
    "Self-volitional Motion",
    "DirectedAchievement",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,He) & Component-of(b,door) & DirAch(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1055": [
    "He came to Colorado",
    "escape-51.1",
    "Sbj V PathP",
    "Self-volitional Motion",
    "DirectedAchievement",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,He) & Component-of(b,Colorado) & DirAch(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1056": [
    "The prisoners advanced",
    "escape-51.1-1",
    "Sbj V",
    "Self-volitional Motion",
    "DirectedAchievement",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,prisoners) & Component-of(b,NI) & DirAch(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1057": [
    "He came from France",
    "escape-51.1-1",
    "Sbj V PathP",
    "Self-volitional Motion",
    "DirectedAchievement",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,He) & Component-of(b,France) & DirAch(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1058": [
    "The convict escaped the prison",
    "escape-51.1-1-1",
    "Sbj V Obj",
    "Self-volitional Motion",
    "DirectedAchievement",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,convict) & Component-of(b,prison) & DirAch(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1059": [
    "He entered the room",
    "escape-51.1-1-2",
    "Sbj V Obj",
    "Self-volitional Motion",
    "DirectedAchievement",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,He) & Component-of(b,room) & DirAch(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1060": [
    "He climbed the mountain",
    "escape-51.1-1-3",
    "Sbj V Obj",
    "Self-volitional Motion",
    "DirectedActivity",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,He) & Component-of(b,mountain) & DirAct(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1062": [
    "The crowd left",
    "leave-51.2-1",
    "Sbj V",
    "Self-volitional Motion",
    "DirectedAchievement",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,crowd) & Component-of(b,NI) & DirAch(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1063": [
    "They rowed the canals of Venice",
    "nonvehicle-51.4.2",
    "Sbj V Obj",
    "Self-volitional Motion",
    "UndirectedActivity",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,They) & Component-of(b,canals) & UndAct(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1064": [
    "They rowed along the canal",
    "nonvehicle-51.4.2",
    "Sbj V PathP",
    "Self-volitional Motion",
    "DirectedActivity",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,They) & Component-of(b,canal) & DirAct(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1065": [
    "I landed there",
    "pocket-9.10-1",
    "Sbj V PathP",
    "Self-volitional Motion",
    "DirectedAchievement",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,I) & Component-of(b,there) & DirAch(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1066": [
    "I landed in Russia",
    "pocket-9.10-1",
    "Sbj V PathP",
    "Self-volitional Motion",
    "DirectedAchievement",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,I) & Component-of(b,Russia) & DirAch(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1067": [
    "They reached the hill",
    "reach-51.8",
    "Sbj V Obj",
    "Self-volitional Motion",
    "DirectedAchievement",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,They) & Component-of(b,hill) & DirAch(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1068": [
    "There jumped out of the box a little white rabbit",
    "run-51.3.2",
    "Sbj V PathP",
    "Self-volitional Motion",
    "IncrementalAccomplishment",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,rabbit) & Component-of(b,box) & IncrAcc(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1069": [
    "Out of the box jumped a little white rabbit",
    "run-51.3.2",
    "Sbj V PathP",
    "Self-volitional Motion",
    "IncrementalAccomplishment",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,rabbit) & Component-of(b,box) & IncrAcc(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1070": [
    "The horse jumped over the fence",
    "run-51.3.2",
    "Sbj V PathP",
    "Self-volitional Motion",
    "IncrementalAccomplishment",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,horse) & Component-of(b,fence) & IncrAcc(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1071": [
    "There jumped a little white rabbit out of the box",
    "run-51.3.2",
    "Sbj V PathP",
    "Self-volitional Motion",
    "IncrementalAccomplishment",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,rabbit) & Component-of(b,box) & IncrAcc(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1072": [
    "The horse traveled the stream",
    "run-51.3.2-1",
    "Sbj V Obj",
    "Self-volitional Motion",
    "DirectedActivity",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,horse) & Component-of(b,stream) & DirAct(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1073": [
    "The horse jumped the stream",
    "run-51.3.2-2-1",
    "Sbj V Obj",
    "Self-volitional Motion",
    "IncrementalAccomplishment",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,horse) & Component-of(b,stream) & IncrAcc(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1074": [
    "Gordo took an unknown route from Topeka",
    "vehicle_path-51.4.3",
    "Sbj V PathP",
    "Self-volitional Motion",
    "DirectedActivity",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,Gordo) & Component-of(b,Topeka) & DirAct(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1075": [
    "Martha took the back way to Nederland",
    "vehicle_path-51.4.3",
    "Sbj V PathP",
    "Self-volitional Motion",
    "DirectedActivity",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,Martha) & Component-of(b,Nederland) & DirAct(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1076": [
    "Kevin took the freeway",
    "vehicle_path-51.4.3",
    "Sbj V PathP",
    "Self-volitional Motion",
    "DirectedActivity",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,Kevin) & Component-of(b,freeway) & DirAct(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1077": [
    "Claire skated along the canal",
    "vehicle-51.4.1",
    "Sbj V PathP",
    "Self-volitional Motion",
    "DirectedActivity",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,Claire) & Component-of(b,canal) & DirAct(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1078": [
    "Claire skated the canals",
    "vehicle-51.4.1-1",
    "Sbj V Obj",
    "Self-volitional Motion",
    "UndirectedActivity",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,Claire) & Component-of(b,canals) & UndAct(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
    "10003"
  ],
  "1080": [
    "Bill rolled the ball",
    "roll-51.3.1",
    "Sbj V Obj",
    "Volitional Motion",
    "UndirectedActivity",
    "GeneralMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Bill) & Component-of(b,ball) & Component-of(c,NI) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10003"
  ],
  "1083": [
    "Nora brought the book",
    "bring-11.3",
    "Sbj V Obj",
    "Volitional Motion",
    "DirectedAchievement",
    "CarryMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Nora) & Component-of(b,book) & Component-of(c,NI) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10003"
  ],
  "1084": [
    "Nora brought the book from home to the meeting",
    "bring-11.3",
    "Sbj V Obj PathP",
    "Volitional Motion",
    "DirectedAchievement",
    "CarryMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Nora) & Component-of(b,book) & Component-of(c,meeting) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10003"
  ],
  "1085": [
    "Nora brought the book to the meeting",
    "bring-11.3",
    "Sbj V Obj PathP",
    "Volitional Motion",
    "DirectedAchievement",
    "CarryMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Nora) & Component-of(b,book) & Component-of(c,meeting) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10003"
  ],
  "1086": [
    "Nora brought the book from home",
    "bring-11.3",
    "Sbj V Obj PathP",
    "Volitional Motion",
    "DirectedAchievement",
    "CarryMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Nora) & Component-of(b,book) & Component-of(c,home) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10003"
  ],
  "1087": [
    "Nora brought to lunch the book",
    "bring-11.3",
    "Sbj V Obj PathP",
    "Volitional Motion",
    "DirectedAchievement",
    "CarryMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Nora) & Component-of(b,book) & Component-of(c,lunch) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10003"
  ],
  "1088": [
    "Amanda carried the package",
    "carry-11.4",
    "Sbj V Obj",
    "Volitional Motion",
    "UndirectedActivity",
    "CarryMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Amanda) & Component-of(b,package) & Component-of(c,NI) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10003"
  ],
  "1089": [
    "Amanda carried the package from home",
    "carry-11.4",
    "Sbj V Obj PathP",
    "Volitional Motion",
    "IncrementalAccomplishment",
    "CarryMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Amanda) & Component-of(b,package) & Component-of(c,home) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10003"
  ],
  "1090": [
    "Amanda carried the package to New York",
    "carry-11.4",
    "Sbj V Obj PathP",
    "Volitional Motion",
    "IncrementalAccomplishment",
    "CarryMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Amanda) & Component-of(b,package) & Component-of(c,New York) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10003"
  ],
  "1091": [
    "Amanda carried the package from home to New York",
    "carry-11.4",
    "Sbj V Obj PathP",
    "Volitional Motion",
    "IncrementalAccomplishment",
    "CarryMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Amanda) & Component-of(b,package) & Component-of(c,New York) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10003"
  ],
  "1092": [
    "Amanda carried the package to New York from home",
    "carry-11.4",
    "Sbj V Obj PathP",
    "Volitional Motion",
    "IncrementalAccomplishment",
    "CarryMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Amanda) & Component-of(b,package) & Component-of(c,home) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10003"
  ],
  "1093": [
    "Amanda shoved the box",
    "carry-11.4-1",
    "Sbj V Obj",
    "Volitional Motion",
    "IncrementalAccomplishment",
    "CarryMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Amanda) & Component-of(b,box) & Component-of(c,NI) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10003"
  ],
  "1094": [
    "Amanda shoved the box from the corner",
    "carry-11.4-1",
    "Sbj V Obj PathP",
    "Volitional Motion",
    "IncrementalAccomplishment",
    "CarryMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Amanda) & Component-of(b,box) & Component-of(c,corner) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10003"
  ],
  "1095": [
        "Jackie chased the thief down the street",
        "chase-51.6",
        "Sbj V Obj PathP",
        "Mutual Motion",
        "IncrementalAccomplishment",
        "PursuitMotionNetwork",
        "Theme-of(y,e) & Component-of(a,Jackie) & Component-of(b,thief) & Component-of(c,street) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
        "10003"
  ],
  "1081": [
        "Jackie accompanied Rose to the store",
        "accompany-51.7",
        "Sbj V Obj PathP",
        "Mutual Motion",
        "IncrementalAccomplishment",
        "PursuitMotionNetwork",
        "Theme-of(y,e) & Component-of(a,Jackie) & Component-of(b,Rose) & Component-of(c,store) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
        "10003"
  ],
  "1108": [
    "Bill rolled the ball down the hill",
    "roll-51.3.1",
    "Sbj V Obj PathP",
    "Volitional Motion",
    "DirectedActivity",
    "GeneralMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Bill) & Component-of(b,ball) & Component-of(c,hill) & UndAct(a,i,j,q1) & DirAct(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10003"
  ],
  "1110": [
    "Tom jumped the horse over the fence",
    "run-51.3.2-2",
    "Sbj V Obj PathP",
    "Volitional Motion",
    "IncrementalAccomplishment",
    "GeneralMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Tom) & Component-of(b,horse) & Component-of(c,fence) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10003"
  ],
  "1111": [
    "The lion tamer jumped the lions",
    "run-51.3.2-2",
    "Sbj V Obj",
    "Volitional Motion",
    "IncrementalAccomplishment",
    "GeneralMotionNetwork",
    "Theme-of(y,e) & Component-of(a,lion tamer) & Component-of(b,lions) & Component-of(c,NI) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10003"
  ],
  "1112": [
    "The lion tamer jumped the lions through the loop",
    "run-51.3.2-2",
    "Sbj V Obj PathP",
    "Volitional Motion",
    "IncrementalAccomplishment",
    "GeneralMotionNetwork",
    "Theme-of(y,e) & Component-of(a,lion tamer) & Component-of(b,lions) & Component-of(c,loop) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10003"
  ],
  "1113": [
    "Nora sent the book",
    "send-11.1",
    "Sbj V Obj",
    "Volitional Motion",
    "DirectedAchievement",
    "SendMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Nora) & Component-of(b,book) & Component-of(c,NI) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10003"
  ],
  "1114": [
    "Nora sent the book from Paris",
    "send-11.1",
    "Sbj V Obj PathP",
    "Volitional Motion",
    "DirectedAchievement",
    "SendMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Nora) & Component-of(b,book) & Component-of(c,Paris) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10003"
  ],
  "1115": [
    "Nora sent the book to London",
    "send-11.1",
    "Sbj V Obj PathP",
    "Volitional Motion",
    "DirectedAchievement",
    "SendMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Nora) & Component-of(b,book) & Component-of(c,London) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10003"
  ],
  "1116": [
    "Nora sent the book from Paris to London",
    "send-11.1",
    "Sbj V Obj PathP",
    "Volitional Motion",
    "DirectedAchievement",
    "SendMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Nora) & Component-of(b,book) & Component-of(c,London) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10003"
  ],
    "1122": [
        "Steve tossed the ball",
        "throw-17.1",
        "Sbj V Obj",
        "Volitional Motion",
        "DirectedAchievement",
        "ThrowMotionNetwork",
        "Theme-of(y,e) & Component-of(a,Steve) & Component-of(b,ball) & Component-of(c,NI) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
        "10003"
    ],
    "1123": [
        "I threw the package away",
        "throw-17.1",
        "Sbj V Obj",
        "Volitional Motion",
        "DirectedAchievement",
        "ThrowMotionNetwork",
        "Theme-of(y,e) & Component-of(a,I) & Component-of(b,package) & Component-of(c,NI) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
        "10003"
    ],
    "1124": [
        "Steve tossed the ball from the corner to the garden",
        "throw-17.1",
        "Sbj V Obj PathP",
        "Volitional Motion",
        "DirectedAchievement",
        "ThrowMotionNetwork",
        "Theme-of(y,e) & Component-of(a,Steve) & Component-of(b,ball) & Component-of(c,garden) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
        "10003"
    ],
    "1125": [
        "Steve tossed the ball to the garden",
        "throw-17.1",
        "Sbj V Obj PathP",
        "Volitional Motion",
        "DirectedAchievement",
        "ThrowMotionNetwork",
        "Theme-of(y,e) & Component-of(a,Steve) & Component-of(b,ball) & Component-of(c,garden) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
        "10003"
    ],
    "1126": [
        "Steve tossed the ball from the corner",
        "throw-17.1",
        "Sbj V Obj PathP",
        "Volitional Motion",
        "DirectedAchievement",
        "ThrowMotionNetwork",
        "Theme-of(y,e) & Component-of(a,Steve) & Component-of(b,ball) & Component-of(c,corner) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
        "10003"
    ],
    "10001": ["RemoveDepriveNetwork"],
    "10002": ["ProvidePlaceNetwork"],
    "10003": ["GeneralMotionNetwork", "ThrowMotionNetwork", "SendMotionNetwork", "CarryMotionNetwork", "PursuitMotionNetwork"],
    "10004": ["GeneralMotionNetwork"],
    "10005": ["CarryMotionNetwork"],
    "10006": ["PursuitMotionNetwork"],
    "11001": ["Autonomous Motion", "GeneralMotionNetwork"],
    "11002": ["Self-volitional Motion", "GeneralMotionNetwork"],
    "11003": ["Volitional Motion", "GeneralMotionNetwork"],
    //"11005": ["Volitional COS", "GeneralMotionNetwork"],
    "11006": ["Volitional Motion", "SendMotionNetwork"],
    "11007": ["Volitional Motion", "CarryMotionNetwork"],
    "11008": ["Volitional Internal", "CarryMotionNetwork"],
    "11009": ["Volitional Motion", "ThrowMotionNetwork"],
    "11010": ["Physical Motion", "CarryMotionNetwork"],
    "11011": ["Mutual Motion", "PursuitMotionNetwork"],
    "11012": ["Mutual", "PursuitMotionNetwork"],
    "12003": { "child": "Volitional Motion", "parentNetwork": "10003", "generalNetwork": "10003"},
    "12004": { "child": "Autonomous Motion", "parentNetwork": "10004", "generalNetwork": "10003"},
    "12005": { "child": "Self-volitional Motion", "parentNetwork": "10004", "generalNetwork": "10003"},
    "12006": { "child": "Physical Motion", "parentNetwork": "10005", "generalNetwork": "10003"},
    "12007": { "child": "Mutual Motion", "parentNetwork": "10006", "generalNetwork": "10003"},
    "12008": { "child": "Mutual", "parentNetwork": "10006", "generalNetwork": "10003"},
    //"12006": { "child": "Autonomous COS", "parent": "10004"},
    //"12007": { "child": "Volitional COS", "parent": "10004"},
    //"12008": { "child": "Volitional Internal", "parentNetwork": "10003", "generalNetwork": "10003"}
}


function getNetwork (FDCategory, nameGeneralNetwork) {


     var NetworkAutonomousRemove = {        

                                "solid1":    [   { "x": 50,  "y": 30}, 
                                                { "x": 100,  "y": 30} ],

                                "solid2":    [   { "x": 50,  "y": 90}, 
                                                { "x": 100,  "y": 90} ],

                                "dottedLeft":    [   { "x": 25,  "y": 40}, 
                                                { "x": 25,  "y": 70} ],

                                "dottedRight":    [   { "x": 125,  "y": 40}, 
                                                { "x": 125,  "y": 70} ],

                                'textToAdd' : [
                                        { "x": 45,  "y": 35, "text": "A0"},
                                        { "x": -25,  "y": 90, "text": "MovedEntity"},  
                                        { "x": 90,  "y": 35, "text": "A1"},
                                        { "x": 100,  "y": 90, "text": "Ground"},
                                        { "x": 10,  "y": 25, "text": "-MER"},
                                        { "x": 10,  "y": 80, "text": "-MER"},
                                        { "x": 105,  "y": 25, "text": "EXIST"},
                                        { "x": 105,  "y": 80, "text": "EXIST"},
                                        { "x": 65,  "y": 45, "text": "PTH"},
                                        { "x": 65,  "y": 105, "text": "PTH"}
                                    ],

                                "name" : "NetAutoRem" 
                            };

     var NetworkVolitionalRemove = {        

                                "solid1":    [   { "x": 50,  "y": 30}, 
                                                { "x": 100,  "y": 30} ],

                                "solid2":    [   { "x": 50,  "y": 90}, 
                                                { "x": 100,  "y": 90} ],

                                "dottedLeft":    [   { "x": 25,  "y": 40}, 
                                                { "x": 25,  "y": 70} ],

                                "dottedRight":    [   { "x": 125,  "y": 40}, 
                                                { "x": 125,  "y": 70} ],

                                "arrow":    [   { "x": -50,  "y": 30}, 
                                                { "x": -20,  "y": 30} ],

                                'textToAdd' : [
                                        { "x": -40,  "y": 35, "text": "A0"},
                                        { "x": -10,  "y": 35, "text": "A1"},
                                        { "x": -15,  "y": 90, "text": "MovedEntity"},  
                                        { "x": 100,  "y": 35, "text": "A2"},
                                        { "x": 105,  "y": 90, "text": "Ground"},
                                        { "x": -80,  "y": 25, "text": "VOL"},
                                        { "x": -45,  "y": 45, "text": "FRC"},
                                        { "x": -15,  "y": 25, "text": "EXIST | -MER"},
                                        { "x": 0,  "y": 80, "text": "-MER"},
                                        { "x": 105,  "y": 25, "text": "EXIST"},
                                        { "x": 105,  "y": 80, "text": "EXIST"},
                                        { "x": 65,  "y": 45, "text": "PTH"},
                                        { "x": 65,  "y": 105, "text": "PTH"}
                                    ],

                                "name" : "NetVolRem" 
                            };

     var NetworkVolitionalPlace = {        

                                "solid1":    [   { "x": 50,  "y": 30}, 
                                                { "x": 100,  "y": 30} ],

                                "solid2":    [   { "x": 50,  "y": 90}, 
                                                { "x": 100,  "y": 90} ],

                                "dottedLeft":    [   { "x": 25,  "y": 40}, 
                                                { "x": 25,  "y": 70} ],

                                "dottedRight":    [   { "x": 125,  "y": 40}, 
                                                { "x": 125,  "y": 70} ],

                                "arrow":    [   { "x": -50,  "y": 30}, 
                                                { "x": -20,  "y": 30} ],

                                'textToAdd' : [
                                        { "x": -40,  "y": 35, "text": "A0"},
                                        { "x": -10,  "y": 35, "text": "A1"},
                                        { "x": -15,  "y": 90, "text": "MovedEntity"},  
                                        { "x": 90,  "y": 35, "text": "A2"},
                                        { "x": 105,  "y": 90, "text": "Ground"},
                                        { "x": -80,  "y": 25, "text": "VOL"},
                                        { "x": -45,  "y": 45, "text": "FRC"},
                                        { "x": -15,  "y": 25, "text": "EXIST | +MER"},
                                        { "x": 0,  "y": 80, "text": "+MER"},
                                        { "x": 105,  "y": 25, "text": "EXIST"},
                                        { "x": 105,  "y": 80, "text": "EXIST"},
                                        { "x": 65,  "y": 45, "text": "PTH"},
                                        { "x": 65,  "y": 105, "text": "PTH"}
                                    ],

                                "name" : "NetVolPlace" 
                            };


     var NetworkSelfVolitionalPlace = {        

                                "solid1":    [   { "x": 50,  "y": 30}, 
                                                { "x": 100,  "y": 30} ],

                                "solid2":    [   { "x": 50,  "y": 90}, 
                                                { "x": 100,  "y": 90} ],

                                "dottedLeft":    [   { "x": 25,  "y": 40}, 
                                                { "x": 25,  "y": 70} ],

                                "dottedRight":    [   { "x": 125,  "y": 40}, 
                                                { "x": 125,  "y": 70} ],

                                'textToAdd' : [
                                        { "x": 50,  "y": 35, "text": "A0"},
                                        { "x": -15,  "y": 90, "text": "MovedEntity"},  
                                        { "x": 90,  "y": 35, "text": "A1"},
                                        { "x": 105,  "y": 90, "text": "Ground"},
                                        { "x": -15,  "y": 25, "text": "VOL | +MER"},
                                        { "x": -15,  "y": 80, "text": "VOL | +MER"},
                                        { "x": 105,  "y": 25, "text": "EXIST"},
                                        { "x": 105,  "y": 80, "text": "EXIST"},
                                        { "x": 65,  "y": 45, "text": "PTH"},
                                        { "x": 65,  "y": 105, "text": "PTH"}
                                    ],

                                "name" : "NetSelfVolPlace" 
                            };


     var NetworkVolitionalAttend = {        

                                "solid2":    [   { "x": 55,  "y": 90}, 
                                                { "x": 95,  "y": 90} ],

                                "dottedRight":    [   { "x": 125,  "y": 40}, 
                                                { "x": 125,  "y": 70} ],

                                "arrow":    [   { "x": 55,  "y": 30}, 
                                                { "x": 95,  "y": 30} ],

                                'textToAdd' : [
                                        { "x": 55,  "y": 35, "text": "A0"},
                                        { "x": -10,  "y": 90, "text": "MovedEntity"},  
                                        { "x": 90,  "y": 35, "text": "A1"},
                                        { "x": 105,  "y": 90, "text": "Ground"},
                                        { "x": 20,  "y": 25, "text": "VOL"},
                                        { "x": 0,  "y": 80, "text": "-MER"},
                                        { "x": 105,  "y": 25, "text": "EXIST"},
                                        { "x": 105,  "y": 80, "text": "EXIST"},
                                        { "x": 50,  "y": 45, "text": "Attend"},
                                        { "x": 65,  "y": 105, "text": "PTH"}
                                    ],

                                "name" : "NetVolAtt" 
                            };


     var NetworkAutonomousInternal = {        

                                "solid1":    [   { "x": 55,  "y": 85}, 
                                                { "x": 85,  "y": 85} ],

                                "dottedLeft":    [   { "x": 25,  "y": 75}, 
                                                { "x": 70,  "y": 40} ],

                                "dottedRight":    [   { "x": 115,  "y": 65},
                                                      { "x": 70,  "y": 40}
                                                ],

                                'textToAdd' : [
                                        { "x": 100,  "y": 35, "text": "A0"},
                                        { "x": -10,  "y": 90, "text": "MovedEntity"},  
                                        { "x": 90,  "y": 90, "text": "Ground"},
                                        { "x": 55,  "y": 25, "text": "INTL"},
                                        { "x": 10,  "y": 80, "text": "INTL"},
                                        { "x": 95,  "y": 80, "text": "-MER"},
                                        { "x": 60,  "y": 95, "text": "PTH"}
                                    ],

                                "name" : "NetAutoIntl" 
                            };

     var NetworkVolitionalInternal = {        

                                "solid2":    [   { "x": 50,  "y": 85}, 
                                                { "x": 90,  "y": 85} ],

                                "dottedLeft":    [   { "x": 25,  "y": 65}, 
                                                { "x": 70,  "y": 40} ],

                                "dottedRight":    [   { "x": 115,  "y": 65},
                                                      { "x": 70,  "y": 40}
                                                ],

                                "arrow":    [   { "x": -10,  "y": 30}, 
                                                { "x": 30,  "y": 30} ],

                                'textToAdd' : [
                                        { "x": -20,  "y": 35, "text": "A0"},
                                        { "x": 40,  "y": 35, "text": "A1"},
                                        { "x": -20,  "y": 90, "text": "MovedEntity"},  
                                        { "x": 95,  "y": 90, "text": "Ground"},
                                        { "x": -40,  "y": 25, "text": "VOL"},
                                        { "x": 60,  "y": 25, "text": "INTL"},
                                        { "x": -20,  "y": 80, "text": "INTL / +MER"},
                                        { "x": 95,  "y": 80, "text": "EXIST / +MER"},
                                        { "x": 60,  "y": 95, "text": "PTH"},
                                        { "x": 0,  "y": 45, "text": "FRC"},
                                    ],

                                "argTextToAdd": ["Agent", "Theme"],

                                "name" : "NetVolIntl" 
                            };


     var NetworkAutonomousDeprive = {        

                                "solid1":    [   { "x": 50,  "y": 30}, 
                                                { "x": 100,  "y": 30} ],

                                "solid2":    [   { "x": 50,  "y": 90}, 
                                                { "x": 100,  "y": 90}],

                                "dottedLeft":    [   { "x": 25,  "y": 40}, 
                                                { "x": 25,  "y": 70} ],

                                "dottedRight":    [   { "x": 125,  "y": 40}, 
                                                { "x": 125,  "y": 70} ],

                                'textToAdd' : [
                                        { "x": 40,  "y": 35, "text": "A0"},
                                        { "x": -20,  "y": 90, "text": "MovedEntity"},  
                                        { "x": 90,  "y": 35, "text": "A1"},
                                        { "x": 105,  "y": 90, "text": "Ground"},
                                        { "x": 5,  "y": 25, "text": "INTL"},
                                        { "x": 5,  "y": 80, "text": "INTL"},
                                        { "x": 105,  "y": 25, "text": "-MER"},
                                        { "x": 105,  "y": 80, "text": "-MER"},
                                        { "x": 65,  "y": 45, "text": "PTH"},
                                        { "x": 65,  "y": 105, "text": "PTH"}
                                    ],

                                "name" : "NetAutoUnc" 
                            };


     var NetworkVolitionalDeprive = {        

                                "solid1":    [   { "x": 50,  "y": 30}, 
                                                { "x": 100,  "y": 30} ],

                                "solid2":    [   { "x": 50,  "y": 90}, 
                                                { "x": 100,  "y": 90} ],

                                "dottedLeft":    [   { "x": 25,  "y": 40}, 
                                                { "x": 25,  "y": 70} ],

                                "dottedRight":    [   { "x": 125,  "y": 40}, 
                                                { "x": 125,  "y": 70} ],

                                "arrow":    [   { "x": -50,  "y": 30}, 
                                                { "x": -20,  "y": 30} ],

                                'textToAdd' : [
                                        { "x": -50,  "y": 35, "text": "A0"},
                                        { "x": -15,  "y": 35, "text": "A1"},
                                        { "x": -15,  "y": 90, "text": "MovedEntity"}, 
                                        { "x": -80,  "y": 25, "text": "VOL"},
                                        { "x": -45,  "y": 45, "text": "FRC"}, 
                                        { "x": 100,  "y": 35, "text": "A2"},
                                        { "x": 100,  "y": 90, "text": "Ground"},
                                        { "x": -10,  "y": 25, "text": "EXIST|INTL"},
                                        { "x": 0,  "y": 80, "text": "INTL"},
                                        { "x": 105,  "y": 25, "text": "-MER"},
                                        { "x": 105,  "y": 80, "text": "-MER"},
                                        { "x": 65,  "y": 45, "text": "PTH"},
                                        { "x": 65,  "y": 105, "text": "PTH"}
                                    ],

                                "name" : "NetAutoUnc" 
                            };

     var NetworkPhysicalDeprive = {        

                                "solid1":    [   { "x": 50,  "y": 30}, 
                                                { "x": 100,  "y": 30} ],

                                "solid2":    [   { "x": 50,  "y": 90}, 
                                                { "x": 100,  "y": 90} ],

                                "dottedLeft":    [   { "x": 25,  "y": 40}, 
                                                { "x": 25,  "y": 70} ],

                                "dottedRight":    [   { "x": 125,  "y": 40}, 
                                                { "x": 125,  "y": 70} ],

                                "arrow":    [   { "x": -50,  "y": 30}, 
                                                { "x": -20,  "y": 30} ],

                                'textToAdd' : [
                                        { "x": -45,  "y": 35, "text": "A0"},
                                        { "x": -10,  "y": 35, "text": "A1"},
                                        { "x": -15,  "y": 90, "text": "MovedEntity"},
                                        { "x": -80,  "y": 25, "text": "INTL"}, 
                                        { "x": -45,  "y": 45, "text": "FRC"}, 
                                        { "x": 90,  "y": 35, "text": "A2"},
                                        { "x": 105,  "y": 90, "text": "Ground"},
                                        { "x": -10,  "y": 25, "text": "EXIST|INTL"},
                                        { "x": 0,  "y": 80, "text": "INTL"},
                                        { "x": 105,  "y": 25, "text": "-MER"},
                                        { "x": 105,  "y": 80, "text": "-MER"},
                                        { "x": 65,  "y": 45, "text": "PTH"},
                                        { "x": 65,  "y": 105, "text": "PTH"}
                                    ],

                                "name" : "NetAutoUnc" 
                            };


     var NetworkAutonomousProvide = {        

                                "solid1":    [   { "x": 50,  "y": 30}, 
                                                { "x": 100,  "y": 30} ],

                                "solid2":    [   { "x": 50,  "y": 90}, 
                                                { "x": 100,  "y": 90} ],

                                "dottedLeft":    [   { "x": 25,  "y": 40}, 
                                                { "x": 25,  "y": 70} ],

                                "dottedRight":    [   { "x": 125,  "y": 40}, 
                                                { "x": 125,  "y": 70} ],

                                'textToAdd' : [
                                        { "x": 40,  "y": 35, "text": "A0"},
                                        { "x": -15,  "y": 90, "text": "MovedEntity"},  
                                        { "x": 90,  "y": 35, "text": "A1"},
                                        { "x": 105,  "y": 90, "text": "Ground"},
                                        { "x": 5,  "y": 25, "text": "INTL"},
                                        { "x": 5,  "y": 80, "text": "INTL"},
                                        { "x": 105,  "y": 25, "text": "+MER"},
                                        { "x": 105,  "y": 80, "text": "+MER"},
                                        { "x": 65,  "y": 45, "text": "PTH"},
                                        { "x": 65,  "y": 105, "text": "PTH"}
                                    ],

                                "name" : "NetAutoProv" 
                            };


     var NetworkVolitionalProvide = {        

                                "solid1":    [   { "x": 50,  "y": 30}, 
                                                { "x": 100,  "y": 30} ],

                                "solid2":    [   { "x": 50,  "y": 90}, 
                                                { "x": 100,  "y": 90} ],

                                "dottedLeft":    [   { "x": 25,  "y": 40}, 
                                                { "x": 25,  "y": 70} ],

                                "dottedRight":    [   { "x": 125,  "y": 40}, 
                                                { "x": 125,  "y": 70} ],

                                "arrow":    [   { "x": -50,  "y": 30}, 
                                                { "x": -20,  "y": 30} ],

                                'textToAdd' : [
                                        { "x": -40,  "y": 35, "text": "A0"},
                                        { "x": -10,  "y": 35, "text": "A1"},
                                        { "x": -10,  "y": 90, "text": "MovedEntity"},  
                                        { "x": 90,  "y": 35, "text": "A2"},
                                        { "x": 105,  "y": 90, "text": "Ground"},
                                        { "x": -80,  "y": 25, "text": "VOL"},
                                        { "x": -45,  "y": 45, "text": "FRC"},
                                        { "x": -15,  "y": 25, "text": "EXIST | INTL"},
                                        { "x": 10,  "y": 80, "text": "INTL"},
                                        { "x": 105,  "y": 25, "text": "+MER"},
                                        { "x": 105,  "y": 80, "text": "+MER"},
                                        { "x": 65,  "y": 45, "text": "PTH"},
                                        { "x": 65,  "y": 105, "text": "PTH"}
                                    ],

                                "name" : "NetVolProvide" 
                            };


     var NetworkAutonomousMotion = {        

                                "solid1":    [   { "x": 45,  "y": 30}, 
                                                { "x": 75,  "y": 30} ],

                                "solid2":    [   { "x": 45,  "y": 85}, 
                                                { "x": 75,  "y": 85} ],

                                "dottedLeft":    [   { "x": 15,  "y": 40}, 
                                                { "x": 15,  "y": 70} ],

                                "dottedRight":    [   { "x": 115,  "y": 40}, 
                                                { "x": 115,  "y": 70} ],

                                "textToAdd" : [
                                        { "x": 30,  "y": 35, "text": "A0"},
                                        { "x": -10,  "y": 90, "text": "Theme"},  
                                        { "x": 75,  "y": 35, "text": "A1"},
                                        { "x": 95,  "y": 90, "text": "Ground"},
                                        { "x": -5,  "y": 25, "text": "MOT"},
                                        { "x": -5,  "y": 80, "text": "MOT"},
                                        { "x": 95,  "y": 25, "text": "EXIST"},
                                        { "x": 95,  "y": 80, "text": "EXIST"},
                                        { "x": 50,  "y": 45, "text": "PTH"},
                                        { "x": 50,  "y": 100, "text": "PTH"}
                                    ],

                                "argTextToAdd": ["Theme", "Ground"],

                                "name" : "NetAutoMot" 
                            };


     var NetworkSelfVolitionalMotion = {        

                                "solid1":    [   { "x": 45,  "y": 30}, 
                                                { "x": 75,  "y": 30} ],

                                "solid2":    [   { "x": 45,  "y": 85}, 
                                                { "x": 75,  "y": 85} ],

                                "dottedLeft":    [   { "x": 15,  "y": 40}, 
                                                { "x": 15,  "y": 70} ],

                                "dottedRight":    [   { "x": 115,  "y": 40}, 
                                                { "x": 115,  "y": 70} ],

                                'textToAdd' : [
                                        { "x": 30,  "y": 35, "text": "A0"},
                                        { "x": -10,  "y": 90, "text": "Theme"},  
                                        { "x": 75,  "y": 35, "text": "A1"},
                                        { "x": 95,  "y": 90, "text": "Ground"},
                                        { "x": -15,  "y": 25, "text": "VOL/MOT"},
                                        { "x": -10,  "y": 80, "text": "MOT"},
                                        // { "x": 95,  "y": 25, "text": "EXIST"},
                                        { "x": 95,  "y": 80, "text": "EXIST"},
                                        { "x": 50,  "y": 45, "text": "PTH"},
                                        { "x": 50,  "y": 100, "text": "PTH"}
                                    ],

                                "argTextToAdd": ["Theme", "Ground"],

                                "name" : "NetSelfVolMotion" 
                            };


     var NetworkGeneralVolitionalMotion = {        

                                "solid1":    [   { "x": 60,  "y": 30}, 
                                                { "x": 90,  "y": 30} ],

                                "solid2":    [   { "x": 60,  "y": 85}, 
                                                { "x": 90,  "y": 85} ],

                                "dottedLeft":    [   { "x": 35,  "y": 40}, 
                                                { "x": 35,  "y": 70} ],

                                "dottedRight":    [   { "x": 135,  "y": 40}, 
                                                { "x": 135,  "y": 70} ],

                                "arrow":    [   { "x": -30,  "y": 30}, 
                                                { "x": 0,  "y": 30} ],

                                'textToAdd' : [
                                        { "x": -30,  "y": 35, "text": "A0"},
                                        { "x": -5,  "y": 35, "text": "A1"},
                                        { "x": -70,  "y": 25, "text": "VOL"},
                                        { "x": -30,  "y": 45, "text": "FRC"}, 
                                        { "x": 15,  "y": 90, "text": "Theme"},  
                                        { "x": 90,  "y": 35, "text": "A2"},
                                        { "x": 110,  "y": 90, "text": "Ground"},
                                        { "x": 15,  "y": 25, "text": "MOT"},
                                        { "x": 15,  "y": 80, "text": "MOT"},
                                        // { "x": 95,  "y": 25, "text": "EXIST"},
                                        { "x": 115,  "y": 80, "text": "EXIST"},
                                        { "x": 60,  "y": 45, "text": "PTH"},
                                        { "x": 60,  "y": 100, "text": "PTH"}
                                    ],

                                "argTextToAdd": ["Agent", "Theme", "Ground"],

                                "name" : "NetGeneralVolMotion" 
                            };

    var NetworkSendVolitionalMotion = {        

                                "arrow1":    [   { "x": -115,  "y": 75}, 
                                                { "x": -85,  "y": 75} ],

                                "arrow2":    [   { "x": 15,  "y": 75}, 
                                                { "x": 45,  "y": 75} ],

                                "dotted1":    [   { "x": 15,  "y": 70}, 
                                                { "x": 45,  "y": 70} ],

                                "solid1":    [   { "x": 110,  "y": 30}, 
                                                { "x": 140,  "y": 30} ],

                                "solid2":    [   { "x": 110,  "y": 75}, 
                                                { "x": 140,  "y": 75} ],

                                "solid3":    [   { "x": 210,  "y": 75}, 
                                                { "x": 240,  "y": 75} ],

                                "dottedFarLeft":    [   { "x": -5,  "y": 40}, 
                                                { "x": -135,  "y": 60} ],

                                "dottedLeft":    [   { "x": 75,  "y": 40}, 
                                                { "x": 75,  "y": 60} ],

                                "dottedRight":    [   { "x": 175,  "y": 40}, 
                                                { "x": 175,  "y": 60} ],

                                "arrow":    [   { "x": 20,  "y": 30}, 
                                                { "x": 50,  "y": 30} ],

                                // "rectangle": {
                                //               "x":-80, 
                                //               "y":50,
                                //               "width": 195,
                                //               "height": 50
                                // },


                                'textToAdd' : [
                                        { "x": 20,  "y": 35, "text": "A0"},
                                        { "x": 40,  "y": 35, "text": "A1"},
                                        { "x": -20,  "y": 25, "text": "VOL"},
                                        { "x": 20,  "y": 45, "text": "FRC"}, 
                                        { "x": 140,  "y": 35, "text": "A2"},
                                        { "x": 60,  "y": 25, "text": "MOT"},
                                        { "x": 115,  "y": 45, "text": "PTH"},
                                        // { "x": 160,  "y": 25, "text": "EXIST"},
                                        { "x": -150,  "y": 80, "text": "Agent"},
                                        { "x": -150,  "y": 70, "text": "VOL"},
                                        { "x": -115,  "y": 90, "text": "FRC"}, 
                                        { "x": -75,  "y": 80, "text": "Transport_means"},
                                        { "x": -75,  "y": 70, "text": "INTL"},
                                        { "x": 0,  "y": 65, "text": "Co-location"},
                                        { "x": 15,  "y": 90, "text": "FRC"},
                                        { "x": 60,  "y": 80, "text": "Theme"},
                                        { "x": 60,  "y": 70, "text": "MOT"},
                                        { "x": 115,  "y": 90, "text": "PTH"},
                                        { "x": 160,  "y": 80, "text": "Ground"}, 
                                        { "x": 160,  "y": 70, "text": "EXIST"},
                                        { "x": 215,  "y": 90, "text": "AFF"},
                                        { "x": 250,  "y": 80, "text": "Recipient"},
                                        { "x": 250,  "y": 70, "text": "PROP"},
                                        
                                    ],

                            "argTextToAdd": ["Agent", "Theme", "Ground"],

                            "name" : "NetSendVolMotion" 
                        };


    var NetworkCarryVolitionalMotion = {        

                                "dotted1":    [   { "x": -15,  "y": 70}, 
                                                { "x": 15,  "y": 70} ],

                                "arrow2":    [   { "x": -15,  "y": 75}, 
                                                { "x": 15,  "y": 75} ],

                                "solid1":    [   { "x": 80,  "y": 30}, 
                                                { "x": 110,  "y": 30} ],

                                "solid2":    [   { "x": 80,  "y": 75}, 
                                                { "x": 110,  "y": 75} ],

                                "dottedFarLeft":    [   { "x": -35,  "y": 40}, 
                                                { "x": -35,  "y": 60} ],

                                "dottedLeft":    [   { "x": 50,  "y": 40}, 
                                                { "x": 50,  "y": 60} ],

                                "dottedRight":    [   { "x": 145,  "y": 40}, 
                                                { "x": 145,  "y": 60} ],

                                "arrow":    [   { "x": -15,  "y": 30}, 
                                                { "x": 15,  "y": 30} ],

                                // "rectangle": {
                                //               "x":-65, 
                                //               "y":50,
                                //               "width": 155,
                                //               "height": 50
                                // },


                                'textToAdd' : [
                                        { "x": -30,  "y": 35, "text": "A0"},
                                        { "x": 15,  "y": 35, "text": "A1"},
                                        { "x": -50,  "y": 25, "text": "VOL"},
                                        { "x": -10,  "y": 45, "text": "FRC"}, 
                                        { "x": 110,  "y": 35, "text": "A2"},
                                        { "x": 35,  "y": 25, "text": "MOT"},
                                        // { "x": 130,  "y": 25, "text": "EXIST"},
                                        { "x": 85,  "y": 45, "text": "PTH"},
                                        { "x": -90,  "y": 80, "text": "Physical_entity"},
                                        { "x": -50,  "y": 70, "text": "VOL"},
                                        { "x": -10,  "y": 90, "text": "FRC"},
                                        { "x": -25,  "y": 65, "text": "Co-location"}, 
                                        { "x": 35,  "y": 80, "text": "Theme"},
                                        { "x": 35,  "y": 70, "text": "MOT"},
                                        { "x": 85,  "y": 90, "text": "PTH"},
                                        { "x": 130,  "y": 80, "text": "Ground"}, 
                                        { "x": 130,  "y": 70, "text": "EXIST"}
                                        
                                    ],

                            "argTextToAdd": ["Physical_entity", "Theme", "Ground"],

                            "name" : "NetCarryVolMotion" 
                        };



    var NetworkCarryPhysicalMotion = {        

                                "dotted1":    [   { "x": -15,  "y": 70}, 
                                                { "x": 15,  "y": 70} ],

                                "arrow":    [   { "x": -15,  "y": 30}, 
                                                { "x": 15,  "y": 30} ],

                                "arrow2":    [   { "x": -15,  "y": 75}, 
                                                { "x": 15,  "y": 75} ],

                                "solid1":    [   { "x": 80,  "y": 30}, 
                                                { "x": 110,  "y": 30} ],

                                "solid2":    [   { "x": 80,  "y": 75}, 
                                                { "x": 110,  "y": 75} ],

                                "dottedFarLeft":    [   { "x": -35,  "y": 40}, 
                                                { "x": -35,  "y": 60} ],

                                "dottedLeft":    [   { "x": 50,  "y": 40}, 
                                                { "x": 50,  "y": 60} ],

                                "dottedRight":    [   { "x": 145,  "y": 40}, 
                                                { "x": 145,  "y": 60} ],

                                'textToAdd' : [
                                        { "x": -40,  "y": 35, "text": "A0"},
                                        { "x": 15,  "y": 35, "text": "A1"},
                                        { "x": -50,  "y": 25, "text": "VOL"},
                                        { "x": -10,  "y": 45, "text": "FRC"}, 
                                        { "x": 110,  "y": 35, "text": "A2"},
                                        { "x": 35,  "y": 25, "text": "MOT"},
                                        // { "x": 130,  "y": 25, "text": "EXIST"},
                                        { "x": 85,  "y": 45, "text": "PTH"},
                                        { "x": -100,  "y": 80, "text": "Physical_entity"},
                                        { "x": -50,  "y": 70, "text": "VOL"},
                                        { "x": -10,  "y": 90, "text": "FRC"},
                                        { "x": -25,  "y": 65, "text": "Co-location"}, 
                                        { "x": 35,  "y": 80, "text": "Theme"},
                                        { "x": 35,  "y": 70, "text": "MOT"},
                                        { "x": 85,  "y": 90, "text": "PTH"},
                                        { "x": 130,  "y": 80, "text": "Ground"}, 
                                        { "x": 130,  "y": 70, "text": "EXIST"}
                                        
                                    ],

                            "argTextToAdd": ["Physical_entity", "Theme", "Ground"],

                            "name" : "NetCarryPhysMotion" 
                        };


    var NetworkMutualMotion = {        

                                "dotted1":    [   { "x": -10,  "y": 70}, 
                                                { "x": 20,  "y": 70} ],

                                "solid0":    [   { "x": -10,  "y": 30}, 
                                                { "x": 20,  "y": 30} ],

                                "solid4":    [   { "x": -10,  "y": 75}, 
                                                { "x": 20,  "y": 75} ],

                                "solid1":    [   { "x": 85,  "y": 30}, 
                                                { "x": 115,  "y": 30} ],

                                "solid2":    [   { "x": 85,  "y": 75}, 
                                                { "x": 115,  "y": 75} ],

                                "dottedFarLeft":    [   { "x": -35,  "y": 40}, 
                                                { "x": -35,  "y": 60} ],

                                "dottedLeft":    [   { "x": 50,  "y": 40}, 
                                                { "x": 50,  "y": 60} ],

                                "dottedRight":    [   { "x": 145,  "y": 40}, 
                                                { "x": 145,  "y": 60} ],

                                'textToAdd' : [
                                        { "x": -10,  "y": 35, "text": "A0"},
                                        { "x": 20,  "y": 35, "text": "A1"},
                                        { "x": -50,  "y": 25, "text": "VOL"},
                                        { "x": -10,  "y": 45, "text": "Mutual"}, 
                                        { "x": 110,  "y": 35, "text": "A2"},
                                        { "x": 35,  "y": 25, "text": "MOT"},
                                        { "x": 130,  "y": 25, "text": "EXIST"},
                                        { "x": 90,  "y": 45, "text": "PTH"},
                                        { "x": -50,  "y": 80, "text": "Theme"},
                                        { "x": -50,  "y": 70, "text": "VOL"},
                                        { "x": -10,  "y": 90, "text": "Mutual"},
                                        { "x": -25,  "y": 65, "text": "Co-location"}, 
                                        { "x": 35,  "y": 80, "text": "Co-theme"},
                                        { "x": 35,  "y": 70, "text": "MOT"},
                                        { "x": 90,  "y": 90, "text": "PTH"},
                                        { "x": 130,  "y": 80, "text": "Ground"}, 
                                        { "x": 130,  "y": 70, "text": "EXIST"}
                                        
                                    ],

                            "argTextToAdd": ["Theme", "Co-theme", "Ground"],

                            "name" : "NetMutMotion" 
                        };


    var NetworkMutual = {        

                                "dotted1":    [   { "x": -10,  "y": 70}, 
                                                { "x": 20,  "y": 70} ],

                                "solid1":    [   { "x": -10,  "y": 30}, 
                                                { "x": 20,  "y": 30} ],

                                "solid4":    [   { "x": -10,  "y": 75}, 
                                                { "x": 20,  "y": 75} ],

                                "solid2":    [   { "x": 85,  "y": 75}, 
                                                { "x": 115,  "y": 75} ],

                                "dottedFarLeft":    [   { "x": -35,  "y": 40}, 
                                                { "x": -35,  "y": 60} ],

                                "dottedLeft":    [   { "x": 50,  "y": 40}, 
                                                { "x": 50,  "y": 60} ],

                                'textToAdd' : [
                                        { "x": -10,  "y": 35, "text": "A0"},
                                        { "x": 15,  "y": 35, "text": "A1"},
                                        { "x": -50,  "y": 25, "text": "VOL"},
                                        { "x": -10,  "y": 45, "text": "Mutual"}, 
                                        //{ "x": 35,  "y": 25, "text": "MOT"},
                                        { "x": -50,  "y": 80, "text": "Theme"},
                                        { "x": -50,  "y": 70, "text": "VOL"},
                                        { "x": -10,  "y": 90, "text": "Mutual"},
                                        { "x": -25,  "y": 65, "text": "Co-location"}, 
                                        { "x": 35,  "y": 80, "text": "Co-theme"},
                                        { "x": 35,  "y": 70, "text": "MOT"},
                                        { "x": 90,  "y": 90, "text": "PTH"},
                                        { "x": 130,  "y": 80, "text": "Ground"}, 
                                        { "x": 130,  "y": 70, "text": "EXIST"}
                                        
                                    ],

                            "argTextToAdd": ["Agent", "Theme", "Ground"],

                            "name" : "NetMutual" 
                        };


    var NetworkThrowVolitionalMotion = {        

                                // "dotted1":    [   { "x": -15,  "y": 70}, 
                                //                 { "x": 15,  "y": 70} ],

                                "arrow2":    [   { "x": -15,  "y": 75}, 
                                                { "x": 15,  "y": 75} ],

                                "solid1":    [   { "x": 80,  "y": 30}, 
                                                { "x": 110,  "y": 30} ],

                                "solid2":    [   { "x": 80,  "y": 75}, 
                                                { "x": 110,  "y": 75} ],

                                "dottedFarLeft":    [   { "x": -35,  "y": 40}, 
                                                { "x": -35,  "y": 60} ],

                                "dottedLeft":    [   { "x": 50,  "y": 40}, 
                                                { "x": 50,  "y": 60} ],

                                "dottedRight":    [   { "x": 145,  "y": 40}, 
                                                { "x": 145,  "y": 60} ],

                                "arrow":    [   { "x": -15,  "y": 30}, 
                                                { "x": 15,  "y": 30} ],

                                // "rectangle": {
                                //               "x":-65, 
                                //               "y":50,
                                //               "width": 155,
                                //               "height": 50
                                // },


                                'textToAdd' : [
                                        { "x": -10,  "y": 35, "text": "A0"},
                                        { "x": 15,  "y": 35, "text": "A1"},
                                        { "x": -50,  "y": 25, "text": "VOL"},
                                        { "x": -10,  "y": 45, "text": "FRC"}, 
                                        { "x": 110,  "y": 35, "text": "A2"},
                                        { "x": 35,  "y": 25, "text": "MOT"},
                                        // { "x": 130,  "y": 25, "text": "EXIST"},
                                        { "x": 85,  "y": 45, "text": "PTH"},
                                        { "x": -50,  "y": 80, "text": "Agent"},
                                        { "x": -50,  "y": 70, "text": "VOL"},
                                        { "x": -10,  "y": 90, "text": "FRC"},
                                        //{ "x": -25,  "y": 65, "text": "Co-location"}, 
                                        { "x": 35,  "y": 80, "text": "Theme"},
                                        { "x": 35,  "y": 70, "text": "MOT"},
                                        { "x": 85,  "y": 90, "text": "PTH"},
                                        { "x": 130,  "y": 80, "text": "Ground"}, 
                                        { "x": 130,  "y": 70, "text": "EXIST"}
                                        
                                    ],

                            "argTextToAdd": ["Agent", "Theme", "Ground"],

                            "name" : "NetThrowVolMotion" 
                        };


     var NetworkAutonomousCOS = {        

                                "solid2":    [   { "x": 45,  "y": 85}, 
                                                { "x": 75,  "y": 85} ],

                                "dottedLeft":    [   { "x": 15,  "y": 40}, 
                                                { "x": 15,  "y": 70} ],

                                'textToAdd' : [
                                        { "x": 40,  "y": 35, "text": "A0"},
                                        { "x": 0,  "y": 90, "text": "Theme"},  
                                        { "x": 95,  "y": 90, "text": "Ground"},
                                        { "x": 0,  "y": 25, "text": "PROP"},
                                        { "x": 0,  "y": 80, "text": "MOT"},
                                        { "x": 95,  "y": 80, "text": "EXIST"},
                                        { "x": 50,  "y": 100, "text": "PTH"}
                                    ],

                                "argTextToAdd": ["Theme", "Theme", "Ground"],

                                "name" : "NetAutoCOS" 
                            };


     var NetworkVolitionalCOS = {        

                                "solid2":    [   { "x": 45,  "y": 85}, 
                                                { "x": 75,  "y": 85} ],

                                "dottedLeft":    [   { "x": 15,  "y": 40}, 
                                                { "x": 15,  "y": 70} ],

                                "arrow":    [   { "x": -45,  "y": 30}, 
                                                { "x": -15,  "y": 30} ],

                                'textToAdd' : [
                                        { "x": -40,  "y": 35, "text": "A0"},
                                        { "x": -80,  "y": 25, "text": "VOL"},
                                        { "x": -20,  "y": 35, "text": "A1"},
                                        { "x": -40,  "y": 45, "text": "FRC"}, 
                                        { "x": 0,  "y": 90, "text": "Theme"},  
                                        { "x": 95,  "y": 90, "text": "Ground"},
                                        { "x": 0,  "y": 25, "text": "PROP"},
                                        { "x": 0,  "y": 80, "text": "MOT"},
                                        { "x": 95,  "y": 80, "text": "EXIST"},
                                        { "x": 50,  "y": 100, "text": "PTH"}
                                    ],

                                "argTextToAdd": ["Agent", "Theme", "Ground"],

                                "name" : "NetVolCOS" 
                            };



    if (FDCategory === 'Autonomous Remove') { return NetworkAutonomousRemove; }

    else if (FDCategory === 'Volitional Remove') { return NetworkVolitionalRemove; }

    else if (FDCategory === 'Volitional Place') { return NetworkVolitionalPlace; }

    else if (FDCategory === 'Self-Volitional Place') { return NetworkSelfVolitionalPlace; }

    else if (FDCategory === 'Volitional Attend') { return NetworkVolitionalAttend; }

    else if (FDCategory === 'Autonomous Internal') { return NetworkAutonomousInternal; }

    else if (FDCategory === 'Volitional Internal') { return NetworkVolitionalInternal; }

    else if (FDCategory === 'Autonomous Deprive') { return NetworkAutonomousDeprive; }

    else if (FDCategory === 'Volitional Deprive') { return NetworkVolitionalDeprive; }

    else if (FDCategory === 'Physical Deprive') { return NetworkPhysicalDeprive; }

    else if (FDCategory === 'Autonomous Provide') { return NetworkAutonomousProvide; }

    else if (FDCategory === 'Volitional Provide') { return NetworkVolitionalProvide; }

    else if (FDCategory === 'Autonomous Motion') { return NetworkAutonomousMotion; }

    else if (FDCategory === 'Self-volitional Motion') { return NetworkSelfVolitionalMotion; }

    else if (FDCategory === 'Volitional Motion') { 

        if (nameGeneralNetwork === 'GeneralMotionNetwork') {
            return NetworkGeneralVolitionalMotion; 
        }
        else if (nameGeneralNetwork === 'SendMotionNetwork') {
            return NetworkSendVolitionalMotion;
        }
        else if (nameGeneralNetwork === 'CarryMotionNetwork') {
            return NetworkCarryVolitionalMotion;
        }
        else if (nameGeneralNetwork === 'ThrowMotionNetwork') {
            return NetworkThrowVolitionalMotion;
        }
    }

    else if (FDCategory === 'Physical Motion') { return NetworkCarryPhysicalMotion; }

    else if (FDCategory === 'Mutual Motion') { return NetworkMutualMotion; }

    else if (FDCategory === 'Mutual') { return NetworkMutual; }

    else if (FDCategory === 'Autonomous COS') { return NetworkAutonomousCOS; }

    else if (FDCategory === 'Volitional COS') { return NetworkVolitionalCOS; }

}



function getMultipleNetworkPage (NetworkType) {

    var RemoveDepriveNetwork = {        

                            "solid2":    [  { "x": 55,  "y": 55}, 
                                            { "x": 95,  "y": 55} ],

                            "textToAdd" : [
                                    { "x": -20,  "y": 60, "text": "MovedEntity"},  
                                    { "x": 110,  "y": 60, "text": "Ground"},
                                    { "x": -40,  "y": 45, "text": "VOL | INTL | -MER"},
                                    { "x": 95,  "y": 45, "text": "EXIST | -MER"},
                                    { "x": 65,  "y": 70, "text": "PTH"},
                                ],

                            "caption": "ASC causal chains used with Remove/Deprive network",

                            "chains": [{"network": "Autonomous Remove", "parent": ""},
                                       {"network": "Volitional Remove", "parent": ""},
                                       {"network": "Autonomous Deprive", "parent": ""},
                                       {"network": "Physical Deprive", "parent": ""},
                                       {"network": "Volitional Deprive", "parent": ""},
                                       {"network": "Autonomous Internal", "parent": ""},
                                       {"network": "Volitional Internal", "parent": ""},
                                       {"network": "Volitional Attend", "parent": ""},
                                    ],

                            "name" : "Remove/Deprive network" 
                        };


    var ProvidePlaceNetwork = {        

                                "solid2":    [   { "x": 50,  "y": 55}, 
                                                { "x": 100,  "y": 55} ],

                                'textToAdd' : [
                                        { "x": -20,  "y": 60, "text": "MovedEntity"}, 
                                        { "x": 110,  "y": 60, "text": "Ground"},
                                        { "x": -40,  "y": 45, "text": "VOL/+MER/EXIST"},
                                        { "x": 95,  "y": 45, "text": "+MER/EXIST"},
                                        { "x": 65,  "y": 70, "text": "PTH"}
                                    ],

                            "caption": "ASC causal chains used with Provide/Place network",

                            "chains": [{"network": "Autonomous Place", "parent": ""},
                                       {"network": "Volitional Place", "parent": ""},
                                       {"network": "Self-volitional Place", "parent": ""},
                                       {"network": "Autonomous Provide", "parent": ""},
                                       {"network": "Volitional Provide", "parent": ""},
                                       {"network": "Self-volitional Provide", "parent": ""},
                                       {"network": "Autonomous Internal", "parent": ""},
                                       {"network": "Volitional Internal", "parent": ""},
                                       {"network": "Self-volitional Internal", "parent": ""},
                                       {"network": "Volitional Motion", "parent": ""},
                                    ],

                            "name" : "Provide/Place network" 
                        };


    var GeneralMotionNetwork = {        

                                "solid2":    [   { "x": 50,  "y": 65}, 
                                                { "x": 80,  "y": 65} ],

                                'textToAdd' : [
                                        { "x": -5,  "y": 70, "text": "Theme"}, 
                                        { "x": 100,  "y": 70, "text": "Ground"},
                                        { "x": 0,  "y": 55, "text": "MOT"},
                                        { "x": 105,  "y": 55, "text": "EXIST"},
                                        { "x": 55,  "y": 80, "text": "PTH"}
                                    ],

                            "caption": "ASC causal chains used with general motion network",

                            "chains": [
                                       {"network": "Autonomous Motion", "parent": "GeneralMotionNetwork"},
                                       {"network": "Self-volitional Motion", "parent": "GeneralMotionNetwork"},
                                       {"network": "Volitional Motion", "parent": "GeneralMotionNetwork"},
                                       //{"network": "Autonomous COS", "parent": "GeneralMotionNetwork"},
                                       //{"network": "Volitional COS", "parent": "GeneralMotionNetwork"},
                                    ],

                            "name" : "General motion network" 
                        };

    var ThrowMotionNetwork = {        

                                "solid2":    [   { "x": 80,  "y": 65}, 
                                                { "x": 110,  "y": 65} ],

                                "arrow":    [   { "x": -20,  "y": 65}, 
                                                { "x": 10,  "y": 65} ],

                                'textToAdd' : [
                                        { "x": -55,  "y": 70, "text": "Agent"},
                                        { "x": -55,  "y": 55, "text": "VOL"},
                                        { "x": -15,  "y": 80, "text": "FRC"}, 
                                        { "x": 25,  "y": 70, "text": "Theme"}, 
                                        { "x": 125,  "y": 70, "text": "Ground"},
                                        { "x": 25,  "y": 55, "text": "MOT"},
                                        { "x": 125,  "y": 55, "text": "EXIST"},
                                        { "x": 85,  "y": 80, "text": "PTH"}
                                    ],

                            "caption": "ASC causal chains used with throw network",

                            "chains": [
                                       {"network": "Volitional Motion", "parent": "ThrowMotionNetwork"},
                                    ],

                            "name" : "Throw network" 
                        };


    var SendMotionNetwork = {        

                                "arrow1":    [   { "x": -115,  "y": 75}, 
                                                { "x": -85,  "y": 75} ],

                                "arrow2":    [   { "x": 20,  "y": 75}, 
                                                { "x": 50,  "y": 75} ],

                                "dotted1":    [   { "x": 20,  "y": 70}, 
                                                { "x": 50,  "y": 70} ],

                                "solid2":    [   { "x": 120,  "y": 75}, 
                                                { "x": 150,  "y": 75} ],

                                "solid3":    [   { "x": 210,  "y": 75}, 
                                                { "x": 240,  "y": 75} ],

                                // "rectangle": {
                                //               "x":-80, 
                                //               "y":50,
                                //               "width": 195,
                                //               "height": 50
                                // },


                                'textToAdd' : [
                                        { "x": -150,  "y": 80, "text": "Agent"},
                                        { "x": -150,  "y": 65, "text": "VOL"},
                                        { "x": -115,  "y": 90, "text": "FRC"}, 
                                        { "x": -75,  "y": 80, "text": "Transport_means"},
                                        { "x": -75,  "y": 65, "text": "INTL"},
                                        { "x": 10,  "y": 65, "text": "Co-location"},
                                        { "x": 20,  "y": 90, "text": "FRC"},
                                        { "x": 70,  "y": 80, "text": "Theme"},
                                        { "x": 70,  "y": 65, "text": "MOT"},
                                        { "x": 125,  "y": 90, "text": "PTH"},
                                        { "x": 160,  "y": 80, "text": "Ground"}, 
                                        { "x": 160,  "y": 65, "text": "EXIST"},
                                        { "x": 215,  "y": 90, "text": "AFF"},
                                        { "x": 250,  "y": 80, "text": "Recipient"},
                                        { "x": 250,  "y": 65, "text": "PROP"},
                                        
                                    ],

                            "caption": "ASC causal chains used with send motion network",

                            "chains": [
                                       {"network": "Volitional Motion", "parent": "SendMotionNetwork"},
                                    ],

                            "name" : "Send network" 
                        };


    var CarryMotionNetwork = {        

                                "arrow2":    [   { "x": -10,  "y": 70}, 
                                                { "x": 20,  "y": 70} ],

                                "dotted1":    [   { "x": -10,  "y": 65}, 
                                                { "x": 20,  "y": 65} ],

                                "solid2":    [   { "x": 95,  "y": 70}, 
                                                { "x": 125,  "y": 70} ],


                                'textToAdd' : [
                                        { "x": -90,  "y": 75, "text": "Physical_entity"},
                                        { "x": -55,  "y": 60, "text": "VOL"},
                                        { "x": -20,  "y": 60, "text": "Co-location"},
                                        { "x": -10,  "y": 85, "text": "FRC"},
                                        { "x": 45,  "y": 75, "text": "Theme"},
                                        { "x": 45,  "y": 60, "text": "MOT"},
                                        { "x": 100,  "y": 85, "text": "PTH"},
                                        { "x": 140,  "y": 75, "text": "Ground"}, 
                                        { "x": 140,  "y": 60, "text": "EXIST"}
                                    ],

                            "caption": "ASC causal chains used with carry motion network",

                            "chains": [
                                       {"network": "Volitional Motion", "parent": "CarryMotionNetwork"},
                                       {"network": "Physical Motion", "parent": "CarryMotionNetwork"}
                                    ],

                            "name" : "Carry network" 
                        };


    var PursuitMotionNetwork = {        

                                "solid3":    [   { "x": -10,  "y": 70}, 
                                                { "x": 20,  "y": 70} ],

                                "dotted1":    [   { "x": -10,  "y": 65}, 
                                                { "x": 20,  "y": 65} ],

                                "solid2":    [   { "x": 95,  "y": 70}, 
                                                { "x": 125,  "y": 70} ],


                                'textToAdd' : [
                                        { "x": -60,  "y": 75, "text": "Theme"},
                                        { "x": -55,  "y": 60, "text": "VOL"},
                                        { "x": -20,  "y": 60, "text": "Co-location"},
                                        { "x": -10,  "y": 85, "text": "Mutual"},
                                        { "x": 45,  "y": 75, "text": "Co-theme"},
                                        { "x": 45,  "y": 60, "text": "MOT"},
                                        { "x": 100,  "y": 85, "text": "PTH"},
                                        { "x": 140,  "y": 75, "text": "Ground"}, 
                                        { "x": 140,  "y": 60, "text": "EXIST"}
                                    ],

                            "caption": "ASC causal chains used with pursuit motion network",

                            "chains": [
                                       {"network": "Mutual Motion", "parent": "PursuitMotionNetwork"},
                                       {"network": "Mutual", "parent": "PursuitMotionNetwork"}
                                    ],

                            "name" : "Pursuit network" 
                        };


    if (NetworkType === "RemoveDepriveNetwork") {
        return RemoveDepriveNetwork;
    }

    if (NetworkType === "ProvidePlaceNetwork") {
        return ProvidePlaceNetwork;
    }

    if (NetworkType === "GeneralMotionNetwork") {
        return GeneralMotionNetwork;
    }

    if (NetworkType === "ThrowMotionNetwork") {
        return ThrowMotionNetwork;
    }

    if (NetworkType === "SendMotionNetwork") {
        return SendMotionNetwork;
    }

    if (NetworkType === "CarryMotionNetwork") {
        return CarryMotionNetwork;
    }

    if (NetworkType === "PursuitMotionNetwork") {
        return PursuitMotionNetwork;
    }

}



// console.log(events[0]);



// the aspect objects
function getObjects (height) {

    var IncrementalAccomplishment = {   "solid": [  { "x": 20,  "y": height-20},
                                                    { "x": 20,  "y": height-40}, 
                                                    { "x": 100,  "y": height-80},
                                                    { "x": 100,  "y": height-100} ],

                                    "dotted-beg": [ {"x":0, "y":height-20},
                                                    {"x":20, "y":height-20} ], 

                                    "dotted-end": [ {"x":100, "y":height-100},
                                                    {"x":120, "y":height-100} ],

                                    "bcr-labels" : {"b" : [{"x":0, "y":height-20}, {"x":-5, "y":height-20}], 
                                                    "c" : [{"x":-1, "y":height-40}, {"x":-1, "y": height-80}],
                                                    "r" : [{"x":0,  "y": height-100}, {"x":-5,  "y": height-100}]},

                                    "fd1" : {"when-first": {"x":20, "y":height-40}, "when-second": {"x":20, "y":height-20}},

                                    "fd2" : {"when-first": {"x":100, "y":height-100}, "when-second": {"x":100, "y":height-80}},

                                    "name" : "IncrAcc" 
                                };


    var NonincrementalAccomplishment = {  "solid": [    { "x": 20,  "y": height-20},
                                                        { "x": 20,  "y": height-40},
                                                        { "x": 40,  "y": height-80}, 
                                                        { "x": 60,  "y": height-40},
                                                        { "x": 80,  "y": height-80},  
                                                        { "x": 100, "y": height-40},
                                                        { "x": 100,  "y": height-100} ],

                                            "dotted-beg": [ {"x":0, "y":height-20},
                                                            {"x":20, "y":height-20} ], 

                                            "dotted-end": [ {"x":100, "y":height-100},
                                                            {"x":120, "y":height-100} ],

                                            "bcr-labels" : {"b" : [{"x":0, "y":height-20}, {"x":-5, "y":height-20}], 
                                                            "c" : [{"x":-1, "y":height-40}, {"x":-1, "y": height-80}],
                                                            "r" : [{"x":0,  "y": height-100}, {"x":-5,  "y": height-100}]},

                                            "fd1" : {"when-first": {"x":20, "y":height-40}, "when-second": {"x":20, "y":height-20}},

                                            "fd2" : {"when-first": {"x":100, "y":height-100}, "when-second": {"x":100, "y":height-40}},

                                            "name" : "NonIncrAcc"

                                        }; 

    var UndirectedEndeavor = {  "solid": [  { "x": 20,  "y": height-10},
                                            { "x": 20,  "y": height-30},
                                            { "x": 40,  "y": height-70}, 
                                            { "x": 60,  "y": height-30},
                                            { "x": 80,  "y": height-70},  
                                            { "x": 100, "y": height-30}, 
                                            { "x": 100, "y": height-10} ],

                                "dotted-beg": [ {"x":0, "y":height-10},
                                                {"x":20, "y":height-10} ], 

                                "dotted-end": [ {"x":100, "y":height-10},
                                                {"x":120, "y":height-10} ],

                                "bcr-labels" : {"b" : [{"x":0, "y":height-10}, {"x":-5, "y":height-10}], 
                                                "c" : [{"x":-1, "y":height-30}, {"x":-1, "y": height-70}],
                                                "r" : ["None"]},

                                "fd1" : {"when-first": {"x":20, "y":height-30}, "when-second": {"x":20, "y":height-10}},

                                "fd2" : {"when-first": {"x":100, "y":height-30}, "when-second": {"x":100, "y":height-10}},

                                "name" : "UndAct"

                            };

    var UndirectedActivity = {  "solid": [  { "x": 20,  "y": height-20},
                                            { "x": 40,  "y": height-60}, 
                                            { "x": 60,  "y": height-20},
                                            { "x": 80,  "y": height-60},  
                                            { "x": 100, "y": height-20} ],

                                "dotted-beg": [ {"x":0, "y":height-10},
                                                {"x":20, "y":height-10},
                                                {"x":20, "y":height-20} ], 

                                "dotted-end": [ {"x":100, "y":height-20},
                                                {"x":100, "y":height-10},
                                                {"x":120, "y":height-10} ],

                                "bcr-labels" : {"b" : [{"x":0, "y":height-10}, {"x":-5, "y":height-10}], 
                                                "c" : [{"x":-1, "y":height-20}, {"x":-1, "y": height-60}],
                                                "r" : ["None"]},

                                "fd1" : {"when-first": {"x":20, "y":height-20}, "when-second": {"x":20, "y":height-10}},

                                "fd2" : {"when-first": {"x":100, "y":height-20}, "when-second": {"x":100, "y":height-10}},

                                "name" : "UndAct"

                            }; 


    var UndirectedActivityShort = {  "solid": [  { "x": 47,  "y": height-20},
                                            { "x": 60,  "y": height-60}, 
                                            { "x": 75,  "y": height-20},
                                            { "x": 90,  "y": height-60},  
                                            { "x": 100, "y": height-20} ],

                                "dotted-beg": [ {"x":0, "y":height-10},
                                                {"x":47, "y":height-10},
                                                {"x":47, "y":height-20} ], 

                                "dotted-end": [ {"x":100, "y":height-20},
                                                {"x":100, "y":height-10},
                                                {"x":120, "y":height-10} ],

                                "bcr-labels" : {"b" : [{"x":0, "y":height-10}, {"x":-5, "y":height-10}], 
                                                "c" : [{"x":-1, "y":height-20}, {"x":-1, "y": height-60}],
                                                "r" : ["None"]},

                                "fd1" : {"when-first": {"x":47, "y":height-20}, "when-second": {"x":20, "y":height-10}},

                                "fd2" : {"when-first": {"x":100, "y":height-20}, "when-second": {"x":100, "y":height-10}},

                                "name" : "UndActShort"

                            }; 


    var DirectedActivity = {   		"solid": [		{ "x": 20,  "y": height-40}, 
                                                    { "x": 100,  "y": height-80} ],

                                    "dotted-beg": [ {"x":0, "y":height-20},
                                                    {"x":20, "y":height-20},
                                                    { "x": 20,  "y": height-40} ], 

                                    "dotted-end": [ {"x":100, "y":height-80} ],

                                    "bcr-labels" : {"b" : [{"x":0, "y":height-20}, {"x":-5, "y":height-20}], 
                                                    "c" : [{"x":-1, "y":height-40}, {"x":-1, "y": height-80}],
                                                    "r" : ["None"]},

                                    "fd1" : {"when-first": {"x":20, "y":height-40}, "when-second": {"x":20, "y":height-20}},

                                    "fd2" : {"when-first": {"x":100, "y":height-80}, "when-second": {"x":100, "y":height-80}},

                                    "name" : "DirAct"
                            };


    var CyclicAchievement = {   	"solid": 	[	{ "x": 47,  "y": height-20}, 
                                                    { "x": 47,  "y": height-60},
                                                    { "x": 50,  "y": height-60},
                                                    { "x": 50,  "y": height-20} ],

                                    "dotted-beg": [ {"x":0, "y":height-20},
                                                    {"x":47, "y":height-20} ], 

                                    "dotted-end": [ { "x": 50,  "y": height-20},
                                    				{ "x": 100,  "y": height-20} ],

                                    "bcr-labels" : {"b" : [{"x":0, "y":height-20}, {"x":-5, "y":height-20}], 
                                                    "c" : [{"x":-1, "y":height-20}, {"x":-1, "y": height-60}],
                                                    "r" : [{"x":0,  "y": height-60}, {"x":-5,  "y": height-60}]},

                                    "fd1" : {"when-first": {"x":47, "y":height-60}, "when-second": {"x":47, "y":height-20}},

                                    "fd2" : {"when-first": {"x":47, "y":height-60}, "when-second": {"x":47, "y":height-20}},

                                    "name" : "CycAch"
                            };


    var DirectedAchievement = {   	"solid": 	[	{ "x": 47,  "y": height-20}, 
                                                    { "x": 47,  "y": height-60} ],

                                    "dotted-beg": [ {"x":0, "y":height-20},
                                                    {"x":47, "y":height-20} ], 

                                    "dotted-end": [ { "x": 47,  "y": height-60},
                                    				{ "x": 100,  "y": height-60} ],

                                    "bcr-labels" : {"b" : [{"x":0, "y":height-20}, {"x":-5, "y":height-20}], 
                                                    "c" : [{"x":-1, "y":height-20}, {"x":-1, "y": height-60}],
                                                    "r" : [{"x":0,  "y": height-60}, {"x":-5,  "y": height-60}]},

                                    "fd1" : {"when-first": {"x":47, "y":height-60}, "when-second": {"x":47, "y":height-20}},

                                    "fd2" : {"when-first": {"x":47, "y":height-60}, "when-second": {"x":47, "y":height-20}},

                                    "name" : "DirAch" 
                            };

    //InherentState is a little trickier: it takes into account the preceding event (where profiled and points of FDs)
    //so, has two values: "extended" and "punctual"
    var InherentStateExtended = {        

                                    "solid":    [   { "x": 20,  "y": height-50}, 
                                                    { "x": 100,  "y": height-50} ],

                                    "dotted-beg": [ {"x":0, "y":height-50},
                                                    {"x":20, "y":height-50} ], 

                                    "dotted-end": [ { "x": 100,  "y": height-50},
                                                    { "x": 120,  "y": height-50} ],

                                    "bcr-labels" : {"b" : ["None"], 
                                                    "c" : ["None"],
                                                    "r" : [{"x":0,  "y": height-50}, {"x":-5,  "y": height-50}]},

                                    "fd1" : {"when-first": {"x":20, "y":height-50}, "when-second": {"x":20, "y":height-50}},

                                    "fd2" : {"when-first": {"x":100, "y":height-50}, "when-second": {"x":100, "y":height-50}},

                                    "name" : "InhStPhExt" 
                    
                                };


    var InherentStateExtendedShort = {        

                                    "solid":    [   { "x": 47,  "y": height-60}, 
                                                    { "x": 100,  "y": height-60} ],

                                    "dotted-beg": [ {"x":0, "y":height-60},
                                                    {"x":47, "y":height-60} ], 

                                    "dotted-end": [ { "x": 100,  "y": height-60},
                                                    { "x": 120,  "y": height-60} ],

                                    "bcr-labels" : {"b" : ["None"], 
                                                    "c" : ["None"],
                                                    "r" : [{"x":0,  "y": height-60}, {"x":-5,  "y": height-60}]},

                                    "fd1" : {"when-first": {"x":48, "y":height-60}, "when-second": {"x":47, "y":height-60}},

                                    "fd2" : {"when-first": {"x":100, "y":height-60}, "when-second": {"x":100, "y":height-60}},

                                    "name" : "InhStPhExtShort" 
                    
                                };

    var InherentStateExtendedInit = {        

                                    "solid":    [   { "x": 20,  "y": height-40}, 
                                                    { "x": 100,  "y": height-40} ],

                                    "dotted-beg": [ {"x":0, "y":height-40},
                                                    {"x":20, "y":height-40} ], 

                                    "dotted-end": [ { "x": 100,  "y": height-40},
                                                    { "x": 120,  "y": height-40} ],

                                    "bcr-labels" : {"b" : ["None"], 
                                                    "c" : ["None"],
                                                    "r" : [{"x":0,  "y": height-40}, {"x":-5,  "y": height-40}]},

                                    "fd1" : {"when-first": {"x":20, "y":height-40}, "when-second": {"x":20, "y":height-40}},

                                    "fd2" : {"when-first": {"x":100, "y":height-40}, "when-second": {"x":100, "y":height-40}},

                                    "name" : "InhStPhExtInit" 

                    
                                };


    var InherentStatePunctual =  {        

                                    "solid":    [   { "x": 46,  "y": height-40}, 
                                                    { "x": 48,  "y": height-40} ],

                                    "dotted-beg": [ {"x":0, "y":height-40},
                                                    {"x":46, "y":height-40} ], 

                                    "dotted-end": [ { "x": 48,  "y": height-40},
                                                    { "x": 120,  "y": height-40} ],

                                    "bcr-labels" : {"b" : ["None"], 
                                                    "c" : ["None"],
                                                    "r" : [{"x":0,  "y": height-40}, {"x":-5,  "y": height-40}]},

                                    "fd1" : {"when-first": {"x":47, "y":height-20}, "when-second": {"x":47, "y":height-40}},

                                    "fd2" : {"when-first": {"x":47, "y":height-20}, "when-second": {"x":47, "y":height-40}},

                                    "name" : "InhStPhPunct"

                                };


    var InherentStatePunctualInit =  {        

                                    "solid":    [   { "x": 46,  "y": height-40}, 
                                                    { "x": 48,  "y": height-40} ],

                                    "dotted-beg": [ {"x":0, "y":height-40},
                                                    {"x":46, "y":height-40} ], 

                                    "dotted-end": [ { "x": 48,  "y": height-40},
                                                    { "x": 120,  "y": height-40} ],

                                    "bcr-labels" : {"b" : ["None"], 
                                                    "c" : ["None"],
                                                    "r" : [{"x":0,  "y": height-40}, {"x":-5,  "y": height-40}]},

                                    "fd1" : {"when-first": {"x":47, "y":height-40}, "when-second": {"x":47, "y":height-60}},

                                    "fd2" : {"when-first": {"x":47, "y":height-40}, "when-second": {"x":47, "y":height-60}},

                                    "name" : "InhStPhPunctInit"

                                };



    var TransitoryState =   {       "solid":    [   { "x": 47,  "y": height-60}, 
                                                    { "x": 100,  "y": height-60} ],

                                    "dotted-beg": [ {"x":0, "y":height-20},
                                                    {"x":47, "y":height-20},
                                                    {"x":47, "y":height-60} ], 

                                    "dotted-end": [ { "x": 47,  "y": height-60} ],

                                    "bcr-labels" : {"b" : [{"x":0, "y":height-20}, {"x":-5, "y":height-20}], 
                                                    "c" : ["None"],
                                                    "r" : [{"x":0,  "y": height-60}, {"x":-5,  "y": height-60}]},

                                    "fd1" : {"when-first": {"x":47, "y":height-60}, "when-second": {"x":48, "y":height-60}},

                                    "fd2" : {"when-first": {"x":100, "y":height-60}, "when-second": {"x":100, "y":height-60}},

                                    "name" : "TranStPh" 
                            };


    var TransitoryStatePunctualInit =   {"solid":    [  ],

                                    "dotted-beg": [ {"x":0, "y":height-20},
                                                    {"x":47, "y":height-20},
                                                    {"x":47, "y":height-60},
                                                    { "x": 47,  "y": height-60},
                                                    { "x": 100,  "y": height-60}], 

                                    "dotted-end": [ { "x": 47,  "y": height-60} ],

                                    "bcr-labels" : {"b" : [{"x":0, "y":height-20}, {"x":-5, "y":height-20}], 
                                                    "c" : ["None"],
                                                    "r" : [{"x":0,  "y": height-60}, {"x":-5,  "y": height-60}]},

                                    "fd1" : {"when-first": {"x":47, "y":height-60}, "when-second": {"x":48, "y":height-60}},

                                    "fd2" : {"when-first": {"x":47, "y":height-60}, "when-second": {"x":100, "y":height-60}},

                                    "name" : "TranStPhPunctInit" 
                            };


    var InherentStateExist = {        

                                    "solid":    [   { "x": 20,  "y": height-60}, 
                                                    { "x": 100,  "y": height-60} ],

                                    "dotted-beg": [ {"x":0, "y":height-60},
                                                    {"x":20, "y":height-60} ], 

                                    "dotted-end": [ { "x": 100,  "y": height-60},
                                                    { "x": 120,  "y": height-60} ],

                                    "bcr-labels" : {"b" : ["None"], 
                                                    "c" : ["None"],
                                                    "r" : [{"x":0,  "y": height-60}, {"x":-5,  "y": height-60}]},

                                    "fd1" : {"when-first": {"x":20, "y":height-20}, "when-second": {"x":47, "y":height-60}},

                                    "fd2" : {"when-first": {"x":100, "y":height-20}, "when-second": {"x":100, "y":height-60}},

                                    "name" : "InhStExist" 
    
                                };



    return  {   IncrAcc: IncrementalAccomplishment, 
                NonIncrAcc: NonincrementalAccomplishment, 
                UndEnd: UndirectedEndeavor,
                UndAct: UndirectedActivity,
                UndActShort: UndirectedActivityShort,
                DirAct: DirectedActivity,
                CycAch: CyclicAchievement,
                DirAch: DirectedAchievement,
                TranStPh: TransitoryState,
                TranStPhPunctInit: TransitoryStatePunctualInit,
                InhStPhExt: InherentStateExtended,
                InhStPhExtInit: InherentStateExtendedInit,
                InhStPhPunct: InherentStatePunctual,
                InhStPhPunctInit: InherentStatePunctualInit,
                InhStExist: InherentStateExist,
                InhStPhExtShort: InherentStateExtendedShort
            };

}




//This is the accessor function 
var lineFunction = d3.line()
                          .x(function(d) { return d.x; })
                          .y(function(d) { return d.y; });


function createDiagram (svgContainer, myAspectObject) {

    var solidLine = myAspectObject["solid"];
    var dottedBeg = myAspectObject["dotted-beg"];
    var dottedEnd = myAspectObject["dotted-end"];
    var b = myAspectObject["bcr-labels"]["b"];
    var c = myAspectObject["bcr-labels"]["c"];
    var r = myAspectObject["bcr-labels"]["r"];

    var aspectName = myAspectObject["name"];

    var lineGraph = svgContainer.append("path")
                                .attr("d", lineFunction(solidLine))
                                .attr("stroke", "blue")
                                .attr("stroke-width", 2)
                                .attr("fill", "none");

    var dLinesBeg = svgContainer.append("path")
                                .attr("d", lineFunction(dottedBeg))
                                .attr("stroke", "black")
                                .style("stroke-dasharray", ("2, 2"))
                                .attr("fill", "none");

    var dLinesEnd = svgContainer.append("path")
                                .attr("d", lineFunction(dottedEnd))
                                .attr("stroke", "black")
                                .style("stroke-dasharray", ("2, 2"))
                                .attr("fill", "none");

    if (b[0]!='None') {

        var addB = svgContainer.append("path")
                            .attr("d", lineFunction(b))
                            .attr("stroke", "black")
                            .attr("stroke-width", 1)
                            .attr("fill", "none");

        var addBText = svgContainer.append("text")
                            .attr("x", b[1]["x"]-11)
                            .attr("y", b[1]["y"]+3)
                            .text('b');

        }

    if (c[0]!='None' && aspectName.indexOf("Ach")==-1) {

        var addC = svgContainer.append("path")
                            .attr("d", lineFunction(c))
                            .attr("stroke", "black")
                            .attr("stroke-width", 4)
                            .attr("fill", "none");

        var addCText = svgContainer.append("text")
                            .attr("x", c[1]["x"]-15)
                            .attr("y", (1/2)*(c[0]["y"]+c[1]["y"])+3)
                            .text('c');

        }

    if (r[0]!="None") {

        var addR = svgContainer.append("path")
                    .attr("d", lineFunction(r))
                    .attr("stroke", "black")
                    .attr("stroke-width", 1)
                    .attr("fill", "none");

        var addRText = svgContainer.append("text")
                            .attr("x", r[1]["x"]-11)
                            .attr("y", r[1]["y"]+3)
                            .text('r');
        }

}


function drawFDlines (svgContainer, myEventObject1, myEventObject2) {

    var fd1 = [myEventObject1["fd1"]["when-first"]];

    fd1.push(myEventObject2["fd1"]["when-second"]);

    var fdline1 = svgContainer.append("path")
                        .attr("d", lineFunction(fd1))
                        .attr("stroke", "red")
                        .attr("stroke-width", 1)
                        .attr("fill", "none");        


    var fd2 = [myEventObject1["fd2"]["when-first"]];

    fd2.push(myEventObject2["fd2"]["when-second"]);

    var fdline2 = svgContainer.append("path")
                        .attr("d", lineFunction(fd2))
                        .attr("stroke", "red")
                        .attr("stroke-width", 1)
                        .attr("fill", "none"); 
}


function drawPathArrows (svgContainer, myObject) {

	// here pass the second object in the causal chain to align the triangle(s)

	var x1 = myObject["fd1"]["when-second"].x;
	var y1 = myObject["fd1"]["when-second"].y;

	svgContainer.append('path')
	      .attr('d', function(d) { 
	        return 'M ' + x1 +' '+ y1 + ' l 5 5 l -10 0 z';
	      })
	      .attr("fill", "red");


	var x2 = myObject["fd2"]["when-second"].x;
	var y2 = myObject["fd2"]["when-second"].y;

	svgContainer.append('path')
	      .attr('d', function(d) { 
	        return 'M ' + x2 +' '+ y2 + ' l 5 5 l -10 0 z';
	      })
	      .attr("fill", "red");
}


function addPathForceLabels(svgContainer, subEvent1, subEvent2, prevSubEvent) {

    var x = subEvent1["fd2"]["when-first"]["x"];
    var y = (subEvent1["fd2"]["when-first"]["y"] + subEvent2["fd2"]["when-second"]["y"]) / 2;

    var linelabels = ['PTH', 'FRC', 'EXP', 'EXP*', 'ATT', 'AFF', 'JDG', 'INT', 'CAUSE', 'LOC', 'MNP', 'XPR'];

    if (linelabels.includes(prevSubEvent[2])) {

        var thisText = prevSubEvent[2];

        var addPthFrcText = svgContainer.append("text")
                                .attr("x", x+5)
                                .attr("y", y+5)
                                .style("fill", "red")
                                .text(thisText);

    } else if (linelabels.includes(prevSubEvent[3])) {

        var thisText = prevSubEvent[3];

        var addPthFrcText = svgContainer.append("text")
                                .attr("x", x+5)
                                .attr("y", y+10)
                                .style("fill", "red")
                                .text(thisText);
    }

    else if (linelabels.includes(prevSubEvent[4])) {

        var thisText = prevSubEvent[4];

        var addPthFrcText = svgContainer.append("text")
                                .attr("x", x+5)
                                .attr("y", y+5)
                                .style("fill", "red")
                                .text(thisText);
    }

}


function drawAxes (svgContainer, height, aspectHeight, includeXaxis) {


    //hacky height is the upper part of the y-axis, while height adjusts the bottom part
    if (aspectHeight == 80) {

        var hackyHeight = height-aspectHeight+10;
        height = height;

    } else if (aspectHeight == 100) {

        var hackyHeight = height-aspectHeight-10;
        height = height-10;

    } else if (aspectHeight == 60) {

        var hackyHeight = height-aspectHeight-20;
        height = height-20;
        
    }

    if (includeXaxis) {

        var xAxis = [   {"x": 0, "y":height},
                        {"x": 120, "y":height}];

        var xline = svgContainer.append("path")
                .attr("d", lineFunction(xAxis))
                .attr("stroke", "black")
                .attr("stroke-width", 1)
                .attr("fill", "none");
    };


    var yAxis = [   {"x": 0, "y":hackyHeight},
                    {"x": 0, "y":height}];

    var yline = svgContainer.append("path")
                        .attr("d", lineFunction(yAxis))
                        .attr("stroke", "black")
                        .attr("stroke-width", 1)
                        .attr("fill", "none");
}



function addText (svgContainer, myAspectObject, subeventArray) {

    var participant = subeventArray[0];

    var strLen = participant.length*2.5;

    var theme = subeventArray[2];

    if (theme){
        if (theme.length<6){
            var themeLen = theme.length*2.5;
        } else {
            var themeLen = theme.length*4.5;
        }
        
    }
    

    var c = myAspectObject["bcr-labels"]["c"];

    var r = myAspectObject["bcr-labels"]["r"];


    if (c[0]!='None') {

        var addParticipantText = svgContainer.append("text")
                                    .attr("x", c[1]["x"]-55-strLen)
                                    .attr("y", (1/2)*(c[0]["y"]+c[1]["y"])+3)
                                    .text(participant);

    } else if (r[0]!="None") {

        var addParticipantText = svgContainer.append("text")
                                    .attr("x", r[1]["x"]-50-strLen)
                                    .attr("y", r[1]["y"]+3)
                                    .text(participant);
    }


    if (theme!==undefined && theme != 'FRC' && theme != 'PTH' && theme != 'LOC' && theme != 'CAUSE') {

        if (r[0]!="None") {

            var addTheme = svgContainer.append("text")
                                        .attr("x", r[1]["x"]-35-themeLen)
                                        .attr("y", r[1]["y"]-8)
                                        .text(theme);
        } else {

            var addTheme = svgContainer.append("text")
                                        .attr("x", c[1]["x"]-35-themeLen)
                                        .attr("y", (1/2)*(c[0]["y"]+c[1]["y"])-10)
                                        .text(theme);
        }

    }

}


function getHeight(allAspects) {

    // determines the height of each subevent: 60, 80, 100

    var subeventHeights = [];

    for (i in allAspects) {
        if (allAspects[i]==='IncrAcc' || allAspects[i]==='NonIncrAcc') {
            subeventHeights.push(100);
        } else if (allAspects[i]==='InhStPh') {
            subeventHeights.push(60);
        } else {
            subeventHeights.push(80);
        }
    }

    return subeventHeights;
}


function parsePredCalc (myPredCalc) {

    // form ("None" if none): [[q1PartAspectThemeFD], [q2PartAspectThemeFD], [q3PartAspectThemeFD], [q4PartAspectThemeFD], [aspectSummary]]
    var eventInfo = []

    var string_split = myPredCalc.split('&');
    var string_trim = [];

    //string_trim is the main array to iterate over
    for (i in string_split) {
        string_trim.push(string_split[i].trim());
    }

    //push q1Aspect
    var q1AspectTheme = [];
    for (i in string_trim) {

        if (string_trim[i].indexOf('Component-of(a,') !== -1) {
            var part1 = string_trim[i].split(',')[1].slice(0, -1);
            q1AspectTheme.push(part1);
        } else if (string_trim[i].indexOf('q1') !== -1) {
            var q1Instance = string_trim[i].split('(')[0];
            q1AspectTheme.push(q1Instance)
        } else if (string_trim[i].indexOf('(a,b)') !== -1) {
            var fd1Instance = string_trim[i].split('(')[0];
            q1AspectTheme.push(fd1Instance)
        }
    }
    eventInfo.push(q1AspectTheme);

    //push q2Aspect
    var q2Exists = false;
    var q2AspectTheme = [];
    for (i in string_trim) {

        if (string_trim[i].indexOf('Component-of(b,') !== -1) {
            var part2 = string_trim[i].split(',')[1].slice(0, -1);
            q2AspectTheme.push(part2);
        } else if (string_trim[i].indexOf('q2') !== -1) {
            var q2Instance = string_trim[i].split('(')[0];
            q2Exists = true;
            q2AspectTheme.push(q2Instance)
        } else if (string_trim[i].indexOf('(b,c)') !== -1) {
            var fd2Instance = string_trim[i].split('(')[0];
            q2AspectTheme.push(fd2Instance)
        }
    }
    
    if (q2Exists===false) {
        eventInfo.push("None");
    } else {
        eventInfo.push(q2AspectTheme);
    }

    //push q3aspect
    var q3Exists = false;
    var q3AspectTheme = [];
    for (i in string_trim) {

        if (string_trim[i].indexOf('Component-of(c,') !== -1) {
            var part3 = string_trim[i].split(',')[1].slice(0, -1);
            q3AspectTheme.push(part3);
        } else if (string_trim[i].indexOf('q3') !== -1) {
            var q3Instance = string_trim[i].split('(')[0];
            q3Exists = true;
            q3AspectTheme.push(q3Instance)
        } else if (string_trim[i].indexOf('(c,d)') !== -1) {
            var fd3Instance = string_trim[i].split('(')[0];
            q3AspectTheme.push(fd3Instance)
        }
    }
    
    if (q3Exists===false) {
        eventInfo.push("None");
    } else {
        eventInfo.push(q3AspectTheme);
    }


    //push q4Aspect
    var q4Exists = false;
    var q4AspectTheme = [];
    for (i in string_trim) {

        if (string_trim[i].indexOf('Component-of(d,') !== -1) {
            var part4 = string_trim[i].split(',')[1].slice(0, -1);
            q4AspectTheme.push(part4);
        } else if (string_trim[i].indexOf('q4') !== -1) {
            var q4Instance = string_trim[i].split('(')[0];
            q4Exists = true;
            q4AspectTheme.push(q4Instance)
        }
    }
    
    if (q4Exists===false) {
        eventInfo.push("None");
    } else {
        eventInfo.push(q4AspectTheme);
    }

    // form: [all aspectual types]
    // will be used to determine height of svg
    // length: number of subevents
    var aspectSummary = [];

    for (i in eventInfo) {
        if (eventInfo[i]!="None") {
            aspectSummary.push(eventInfo[i][1]);
        }
    }

    eventInfo.push(aspectSummary);

    return eventInfo;

}




function createNetworkDiagram(svgContainer, currentNetwork, argTextToAdd, examplePage=false) {


    // function to not include certain elements of diagram for example page
    function makeCurrentNetworkForExamplePage (currentNetwork) {

        var newCurrentNetwork = {};

        Object.keys(currentNetwork).forEach(function(key) {

            var value = currentNetwork[key];

            if (key === "textToAdd") {

                var newTextToAdd = [];

                for (i=0; i<value.length; i++) {

                    if (value[i]["y"] < 55) {
                        var newText = value[i];
                        newTextToAdd.push(newText);
                    }

                newCurrentNetwork["textToAdd"] = newTextToAdd;
      
                }
            } else if (key === "name") {
                newCurrentNetwork["name"] = value;
            } else if (value[0]["y"] < 35) {
                newCurrentNetwork[key] = value;
            }
        });

        return newCurrentNetwork

    }

    if (examplePage === true) {

        var currentNetwork = makeCurrentNetworkForExamplePage(currentNetwork);

    }


    function addNetworkText (obj){

        var addThisText = svgContainer.append("text")
                                    .attr("x", obj["x"])
                                    .attr("y", obj["y"])
                                    .attr("fill", function (d) { if (['PTH', 'FRC', 'Mutual'].includes(obj["text"]) && obj["y"] < 46) {return "red"} 
                                                                else if (obj["y"] < 46) {return "black"} 
                                                                else {return "green"}; })
                                    .text(obj["text"]);
    }

    var solidLine0 = currentNetwork["solid0"];
    var solidLine1 = currentNetwork["solid1"];
    var solidLine2 = currentNetwork["solid2"];
    var solidLine3 = currentNetwork["solid3"];
    var solidLine4 = currentNetwork["solid4"];
    var dottedLeft = currentNetwork["dottedLeft"];
    var dottedFarLeft = currentNetwork["dottedFarLeft"];
    var dottedRight = currentNetwork["dottedRight"];
    var forceArrowX = currentNetwork["arrow"];
    var dotted1 = currentNetwork["dotted1"];
    var forceArrow1 = currentNetwork["arrow1"];  
    var forceArrow2 = currentNetwork["arrow2"];
    var rectangle = currentNetwork["rectangle"];

    svgContainer.append("svg:defs").append("svg:marker")
        .attr("id", "triangle")
        .attr("refX", 8)
        .attr("refY", 6)
        .attr("markerWidth", 30)
        .attr("markerHeight", 30)
        .attr("markerUnits","userSpaceOnUse")
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M 0 0 12 6 0 12 3 6")
        .style("fill", "black");

    var solidLinesForRed = [solidLine0, solidLine1];

    for (i=0; i<2; i++) {

        var sLineRed = solidLinesForRed[i];

        if (sLineRed) {
            var lineGraph1 = svgContainer.append("path")
                                        .attr("d", lineFunction(sLineRed))
                                        .attr("stroke", "red")
                                        .attr("stroke-width", 1)
                                        .attr("fill", "none");
        }
    }


    var solidLines = [solidLine2, solidLine3, solidLine4];

    for (i=0; i<3; i++) {

        var sLine = solidLines[i];

        if (sLine) {
            var lineGraph2 = svgContainer.append("path")
                                        .attr("d", lineFunction(sLine))
                                        .attr("stroke", "green")
                                        .attr("stroke-width", 1)
                                        .attr("fill", "none");
        }
    }

    if (dotted1) {
        var dottedLine = svgContainer.append("path")
                                    .attr("d", lineFunction(dotted1))
                                    .attr("stroke", "green")
                                    .attr("stroke-dasharray", ("2, 2"))
                                    .attr("fill", "none");
    }

    if (dottedLeft) {
        var dLinesLeft = svgContainer.append("path")
                                    .attr("d", lineFunction(dottedLeft))
                                    .attr("stroke", "black")
                                    .style("stroke-dasharray", ("2, 2"))
                                    .attr("fill", "none");
    }

    if (dottedFarLeft) {
        var dLinesLeft = svgContainer.append("path")
                                    .attr("d", lineFunction(dottedFarLeft))
                                    .attr("stroke", "black")
                                    .style("stroke-dasharray", ("2, 2"))
                                    .attr("fill", "none");
    }

    if (dottedRight) {
    var dLinesRight = svgContainer.append("path")
                                .attr("d", lineFunction(dottedRight))
                                .attr("stroke", "black")
                                .style("stroke-dasharray", ("2, 2"))
                                .attr("fill", "none");
    }

    var arrayArrows = [forceArrowX, forceArrow1, forceArrow2];

    for (i=0; i<3; i++) {

        var arrow = arrayArrows[i];

        if (arrow){

            if (arrow[0]["y"] > 40) {
                color = "green";
            } else {
                color = "red";
            }

            x1 = arrow[1]["x"];
            y1 = arrow[1]["y"]+5;


            var agentArrow = svgContainer.append('path')
                  .attr('d', function(d) { 
                    return 'M ' + x1 +' '+ y1 + ' l 0 -10 l 5 5 z';
                  })
                  .attr("fill", color);

            var agentArrow = svgContainer.append("path")
                                .attr("d", lineFunction(arrow))
                                .attr("stroke", color)
                                .style("stroke-width", 2)
                                //.attr("marker-end", "url(#triangle)")
                                .attr("fill", "none");
        }
    }

    if (rectangle) {

        var x = rectangle["x"];
        var y = rectangle["y"];
        var width = rectangle["width"];
        var height = rectangle["height"];

        rect = svgContainer.append("rect")
            .attr("x", x)
            .attr("y", y)
            .attr("rx", 4)
            .attr("height", height)
            .attr("width", width);
    }


    for (obj in currentNetwork['textToAdd']){

        var newObj = { "x": currentNetwork['textToAdd'][obj]['x'],  
                   "y": currentNetwork['textToAdd'][obj]['y'], 
                   "text": currentNetwork['textToAdd'][obj]['text']};

        if (newObj['text'] === "A0") {
            var participant = argTextToAdd[0];
            var strLen = participant.length*2;
            newObj['text'] = participant;
            newObj['x'] -= strLen+30;
        } else if (newObj['text'] === "A1"){
            var participant = argTextToAdd[1];
            var strLen = participant.length*2;
            newObj['text'] = participant;
            newObj['x'] -= strLen - 30 ;
        } else if (newObj['text'] === "A2"){
            var participant = argTextToAdd[2];
            var strLen = participant.length*2;
            newObj['text'] = participant;
            newObj['x'] -= strLen - 30 ;
        } else if (newObj['text'] === "A3"){
            var participant = argTextToAdd[2];
            var strLen = participant.length*2;
            newObj['text'] = participant;
            newObj['x'] -= strLen - 30 ;
        } else if (newObj['text'] === "A4"){
            var participant = argTextToAdd[2];
            var strLen = participant.length*2;
            newObj['text'] = participant;
            newObj['x'] -= strLen - 30 ;
        }

        addNetworkText(newObj); 
    }
       
}


function draw() {

    // var inputPredCalc = USERINPUT;

    var predcalc = events[currentEvent][6];
    
    var eventComponents = parsePredCalc(predcalc);

    // returns an array of all subevent aspect types, ex: ["UndAct", "UndAct", "IncrAcc"]
    var allAspects = eventComponents[4];

    // console.log(eventComponents);

    // this returns a 1xN array when N=number of subevents and each element is the height of the subevent, ex: [80,80,100]
    var allHeights = getHeight(allAspects);

    var svgHeight = allHeights.reduce(function(acc, val) {
        return acc + val;
    }, 0);


    //The SVG Container
    var svgContainer = d3.select("#svg-container").append("svg")
                                        .attr("width", 200)
                                        .attr("height", svgHeight);

    svgContainer.append("text")
                .attr("x", 55)             
                .attr("y", 0)
                .attr("text-anchor", "middle")  
                .style("font-size", "16px") 
                .style("text-decoration", "underline")  
                .text("Example sentence event structure");


    // recordObjects keeps a history of the objects for drawing of FD lines
    var recordObjects = [];


    //Start composing subevents
    for (i in allAspects) {

        var thisAspect = allAspects[i];

        // checking for extended or punctual Inherent State
        if (thisAspect === 'InhStPh') {
            if (allAspects[i-1] === 'CycAch' || allAspects[i-1] === 'DirAch') {
                thisAspect = 'InhStPhPunct';
            } else {
                thisAspect = 'InhStPhExt';
            }
        }

        // svgHeight is updated at end of for loop
        var thisHeight = svgHeight+40;

        var thisAspectHeight = allHeights[i];

        var objects = getObjects(thisHeight);

        recordObjects.push(objects)

        var thisSubevent = objects[thisAspect];


        if (i == 0) {
            var thisAxis = drawAxes(svgContainer, thisHeight, thisAspectHeight, true);
        } else {
            var secondAxis = drawAxes(svgContainer, thisHeight, thisAspectHeight, false);
        }

        var drawThisSubevent = createDiagram(svgContainer, thisSubevent);

        var subeventArray = eventComponents[i];

        var addingText = addText(svgContainer, thisSubevent, subeventArray);


        // only draw FD lines after the second subevent has been drawn
        if (i > 0) {

            var subEvent1 = recordObjects[i-1][allAspects[i-1]];


            if (allAspects[i] === 'InhStPh') {
                if (allAspects[i-1] === 'CycAch' || allAspects[i-1] === 'DirAch') {
                    var subEvent2 = objects['InhStPhPunct'];
                } else {
                    var subEvent2 = objects['InhStPhExt'];
                }
            } else {
                var subEvent2 = objects[allAspects[i]];
            }

            
            var drawForceDynamicLines = drawFDlines(svgContainer, subEvent1, subEvent2);

            // checking for PTH and drawing arrows
            var prevSubEvent = eventComponents[i-1];
            for (i in prevSubEvent) {
                if (prevSubEvent[i]==='FRC' || prevSubEvent[i]==='ATT' || prevSubEvent[i]==='AFF' || prevSubEvent[i]==='CAUSE' || prevSubEvent[i]==='INT') {
                    var drawArrows = drawPathArrows(svgContainer, subEvent2);
                }
            }

            var addPthFrcLabels = addPathForceLabels(svgContainer, subEvent1, subEvent2, prevSubEvent);
            
        }

        svgHeight = svgHeight - thisAspectHeight;
    }

    // generateDiagram.addEventListener('click', resetScreen);
    // generateDiagram.removeEventListener('click', draw);

    // var sentence = events[currentEvent][0];
    // var themeType = events[currentEvent][3];
    var FDCategory = events[currentEvent][3];
    // var syntax = events[currentEvent][2];
    // var predicate = events[currentEvent][6];
    var nameGeneralNetwork = events[currentEvent][5];
    var linkToGeneralNetwork = events[currentEvent][7]
    
    //The fd-network SVG Container (added 2019.12)
    var svgNetworkContainer = d3.select("#svg-network").append("svg")
                                        .attr("width", 200)
                                        .attr("height", 30);

    var currentNetwork = getNetwork(FDCategory, nameGeneralNetwork);

    // console.log(currentNetwork);

    // console.log(FDCategory, currentEvent, linkToGeneralNetwork)

    //console.log(eventComponents);

    var argTextToAdd = [];

    for (n=0; n<4; n++) {
        if (eventComponents[n].constructor === Array) {
            argTextToAdd.push(eventComponents[n][0]);
        }
    }

    // console.log(argTextToAdd);

    svgNetworkContainer.append("text")
                .attr("x", 60)             
                .attr("y", -20)
                .attr("text-anchor", "middle")  
                .style("font-size", "16px") 
                .style("text-decoration", "underline")  
                .text("Example sentence force dynamics");

    var linkToNetworkTablePage = getSpecificNetworkTableIdentifierForURL(FDCategory, nameGeneralNetwork)[0];

    // console.log(linkToNetworkTablePage);

    var linkToConstructionPage = getSpecificNetworkTableIdentifierForURL(FDCategory, nameGeneralNetwork)[1];

    // addSpecificNetworkTitleAbove(svgNetworkContainer, FDCategory, linkToNetworkTablePage)

    // var parentNetworkTitle = nameGeneralNetwork.replace(/([A-Z])/g, ' $1').trim();

    // addGeneralNetworkTitleBelow(svgNetworkContainer, parentNetworkTitle, linkToGeneralNetwork);

    var drawNetwork = createNetworkDiagram(svgNetworkContainer, currentNetwork, argTextToAdd, examplePage=true);



    for (n=0; n<8; n++) {

        // var labels = ['Example: ', 'VerbNet class: ', 'Argument Structure: ', 'VerbNet case frame: ', 'Construction force dynamics: ', 'Verb force dynamics: ', 'Predicate calculus:', 'Aspect: '];

        var labels = ['Example: ', 'VerbNet class: ', 'Argument Structure: ', 'Construction force dynamics: ', 'Aspect: ', 'Verb force dynamics: ', 'Predicate calculus:', 'Force-dynamic mapping: '];

        console.log(linkToGeneralNetwork);

        var addedHeader = addSecondDivText(labels[n], linkToConstructionPage, linkToGeneralNetwork, linkToNetworkTablePage, true, n);
        var addedSentence = addSecondDivText(events[currentEvent][n], linkToConstructionPage, linkToGeneralNetwork, linkToNetworkTablePage, false, n);
        // var addedBlank = addSecondDivText('', false, n);

    }

}

function removeElement(elementId) {
        // Removes an element from the document
        var element = document.getElementById(elementId);
        element.parentNode.removeChild(element);
    }



function makeTable (data) {

    var currentLocation = window.location.href;
   
    function tabulate(data, columns) {
        var table = d3.select('#svg-network-table').append('table')
        var thead = table.append('thead')
        var tbody = table.append('tbody');

        // append the header row
        thead.append('tr')
          .selectAll('th')
          .data(columns).enter()
          .append('th')
            .text(function (column) { return column; });

        // create a row for each object in the data
        var rows = tbody.selectAll('tr')
          .data(data)
          .enter()
          .append('tr')
          .on("mouseover", function(){
             d3.select(this).style("background-color", "lightblue");})
          .on("mouseout", function(){
             d3.select(this).style("background-color", function(d) {
                return "#fff";
            })})
          .on("click", function(d) { 
            var nextLocation = currentLocation.split("id=")[0] + "id="+ d["id"];
            window.open(nextLocation, "_self"); 
        });

        // create a cell in each row for each column
        var cells = rows.selectAll('td')
          .data(function (row) {
            return columns.map(function (column) {
              return {column: column, value: row[column]};
            });
          })
          .enter()
          .append('td')
            .text(function (d) { return d.value; });

      return table;
    }

    // render the table(s)
    tabulate(data, ['ASC', 'VNClass', 'Sentence']); // 2 column table

}


function makeTableForMappingPage (data) {

    var currentLocation = window.location.href;
   
    function tabulate(data, columns) {
        var table = d3.select('#svg-container').append('table');
        var thead = table.append('thead');
        var tbody = table.append('tbody');

        // create a row for each object in the data
        var rows = tbody.selectAll('tr')
          .data(data)
          .enter()
          .append('tr')
          .on("mouseover", function(){
             d3.select(this).style("background-color", "lightblue");})
          .on("mouseout", function(){
             d3.select(this).style("background-color", function(d) {
                return "#fff";
            })})
          .on("click", function(d) { 
            var nextLocation = currentLocation.split("id=")[0] + "id="+ d["id"];
            window.open(nextLocation, "_self"); 
        });

        // create a cell in each row for each column
        var cells = rows.selectAll('td')
          .data(function (row) {
            return columns.map(function (column) {
              return {column: column, value: row[column]};
            });
          })
          .enter()
          .append('td')
            .style("font-size", "20px")
            .style("font-weight", function(d,i){ if(i === 0) return (1000);})
            .style("font-style", function(d, i) { if(i === 0) return "italic";})
            .text(function (d) { return d.value; });

      return table;
    }

    // render the table(s)
    tabulate(data, ['col1', 'col2']); // 2 column table

}



function addTitleToTop(svgContainer, thisText) {

    svgContainer.append("text")
                .attr("x", 60)             
                .attr("y", -20)
                .attr("text-anchor", "middle")  
                .style("font-size", "16px") 
                .style("text-decoration", "underline")  
                .text(thisText);

}


function addSpecificNetworkTitleAbove(svgContainer, thisText, linkToSpecificNetwork) {

    if (linkToSpecificNetwork === 'None') {

        svgContainer.append("text")
                .attr("x", 60)             
                .attr("y", -0)
                .attr("text-anchor", "middle")  
                .style("font-size", "14px") 
                .style("text-decoration", "underline")
                .text("Constructional semantics: " + thisText);

    } else {

        svgContainer.append("rect")
            .attr("x", -15)
            .attr("y", -15)
            .attr("height", 20)
            .attr("width", 150)
            .attr("stroke", "blue")
            .attr("stroke-width", 2)
            .style("fill", "grey")
            .attr("rx", 10)
            .attr("ry", 10);

        svgContainer.append("text")
                .attr("x", 60)             
                .attr("y", -0)
                .attr("text-anchor", "middle")  
                .style("font-size", "14px") 
                .text(thisText)
                .on("mouseover", function(){
                     d3.select(this).style("fill", "orange");})
                .on("mouseout", function(){
                     d3.select(this).style("fill", "black");})
                .on("click", function(d) { 

                    let currentLocation = window.location.href;

                    var nextLocation = currentLocation.split("id=")[0] + "id="+ linkToSpecificNetwork;
                    window.open(nextLocation, "_self"); 
                });
        }

}


function addGeneralNetworkTitleBelow(svgContainer, thisText, linkToGeneralNetwork) {

    var currentLocation = window.location.href;

    svgContainer.append("text")
            .attr("x", -20)             
            .attr("y", 135)
            .attr("text-anchor", "middle")  
            .style("font-size", "14px") 
            .style("text-decoration", "underline")
            .text("Verbal semantics: ")

    svgContainer.append("rect")
            .attr("x", 35)
            .attr("y", 120)
            .attr("height", 20)
            .attr("width", 150)
            .attr("stroke", "blue")
            .attr("stroke-width", 2)
            .style("fill", "grey")
            .attr("rx", 10)
            .attr("ry", 10);

    svgContainer.append("text")
            .attr("x", 110)             
            .attr("y", 135)
            .attr("text-anchor", "middle")  
            .style("font-size", "14px") 
            .text(thisText)
            .on("mouseover", function(){
                 d3.select(this).style("fill", "orange");})
            .on("mouseout", function(){
                 d3.select(this).style("fill", "black");})
            .on("click", function(d) { 
                var nextLocation = currentLocation.split("id=")[0] + "id="+ linkToGeneralNetwork;
                window.open(nextLocation, "_self"); 
            });

}


function createSpecificFDNetworkWithTable(svgContainer, d, arrayNetworkElements) {


    var currentLocation = window.location.href;

    var thisSpecificNetwork = getNetwork(d["network"], d["parent"]);

    //console.log(thisSpecificNetwork);

    // console.log(d["network"]); // e.g., Volitional Motion

    var linkToGeneralNetwork = arrayNetworkElements[0]["link"]; // e.g., 10003

    var parentNetworkTitle = d["parent"].replace(/([A-Z])/g, ' $1').trim();

    var linkToConstructionPage = getSpecificNetworkTableIdentifierForURL(d["network"], d["parent"])[1];

    //addSpecificNetworkTitleAbove(svgContainer, d["network"], linkToGeneralNetwork);

    // Previous version including buttons on the mapping page (05/2020)

    // var data = ["Mapping from", 
    //             {"text": "Construction page", "id": linkToConstructionPage},
    //            "to", 
    //            {"text": parentNetworkTitle, "id": linkToGeneralNetwork}]

    // for (n=0; n<data.length; n++) {
    //     addTableWithLinksToMappingPage(data[n], n);
    // }

    var data = [{"col1": "Mapping from", "col2": d["network"], "id": linkToConstructionPage},
                {"col1": "to", "col2": parentNetworkTitle, "id": linkToGeneralNetwork}]

    makeTableForMappingPage(data);

    // console.log(d["parent"]);

    // addTitleToTop(svgContainer, parentNetworkTitle);

    var networkTextToAdd = thisSpecificNetwork["argTextToAdd"];

    createNetworkDiagram(svgContainer, thisSpecificNetwork, networkTextToAdd); 

    // addGeneralNetworkTitleBelow(svgContainer, parentNetworkTitle, linkToGeneralNetwork);

    makeTable(arrayNetworkElements);

}



function getArrayForMappingPage(linkToConstructionPage, linkToGeneralNetwork) {

    var arrayMappingValues = [];





}



function getArrayNetworkElementsForTablePage (d) {

    var arrayNetworkElements = [];

    //console.log(d);

    for (var identifier in events) {

        if ( events[identifier].length>6 ) {

            if ( events[identifier][5] === d["parent"] && events[identifier][3] === d["network"] ) {

                var sentence = events[identifier][0];
                var vnclass = events[identifier][1];
                var asc = events[identifier][2];
                var generalNetworkLink = events[identifier][7];

                // var specificNetworkTableLink = getSpecificNetworkTableIdentifierForURL(d["network"], d["parent"])[0];

                var thisElement = {"ASC":asc, 
                                    "VNClass":vnclass, 
                                    "Sentence":sentence, 
                                    "id":identifier, 
                                    "link": generalNetworkLink};

                arrayNetworkElements.push(thisElement); 

            } 
        }
        
    }

    return arrayNetworkElements;

}


function getSpecificNetworkTableIdentifierForURL (FDCategory, generalNetworkName) {

    if (FDCategory === "Autonomous Motion" && generalNetworkName == "GeneralMotionNetwork") {
        var identifierToMappingURL = "11001";
        var identifierToConstructionURL = "12004";
    } else if (FDCategory === "Self-volitional Motion" && generalNetworkName == "GeneralMotionNetwork") {
        var identifierToMappingURL = "11002";
        var identifierToConstructionURL = "12005";
    } else if (FDCategory === "Volitional Motion" && generalNetworkName == "GeneralMotionNetwork") {
        var identifierToMappingURL = "11003";
        var identifierToConstructionURL = "12003";
    } else if (FDCategory === "Autonomous COS" && generalNetworkName == "GeneralMotionNetwork") {
        var identifierToMappingURL = "11004";
        var identifierToConstructionURL = "12006";
    } else if (FDCategory === "Volitional COS" && generalNetworkName == "GeneralMotionNetwork") {
        var identifierToMappingURL = "11005";
        var identifierToConstructionURL = "12007";
    } else if (FDCategory === "Volitional Motion" && generalNetworkName == "SendMotionNetwork") {
        var identifierToMappingURL = "11006";
        var identifierToConstructionURL = "12003";
    } else if (FDCategory === "Volitional Motion" && generalNetworkName == "CarryMotionNetwork") {
        var identifierToMappingURL = "11007";
        var identifierToConstructionURL = "12003";
    } else if (FDCategory === "Volitional Internal" && generalNetworkName == "CarryMotionNetwork") {
        var identifierToMappingURL = "11008";
        var identifierToConstructionURL = "12008";
    } else if (FDCategory === "Volitional Motion" && generalNetworkName == "ThrowMotionNetwork") {
        var identifierToMappingURL = "11009";
        var identifierToConstructionURL = "12003";
    } else if (FDCategory === "Physical Motion" && generalNetworkName == "CarryMotionNetwork") {
        var identifierToMappingURL = "11010";
        var identifierToConstructionURL = "12006";
    } else if (FDCategory === "Mutual Motion" && generalNetworkName == "PursuitMotionNetwork") {
        var identifierToMappingURL = "11011";
        var identifierToConstructionURL = "12007";
    } else if (FDCategory === "Mutual" && generalNetworkName == "PursuitMotionNetwork") {
        var identifierToMappingURL = "11012";
        var identifierToConstructionURL = "12008";
    } 

    return [identifierToMappingURL, identifierToConstructionURL]

}


function renderTablePage (id) {

    var svgContainer = d3.select('#svg-network-examples').append("svg")
                      .attr("width", 100)
                      .attr("height", 100);


    svgContainer.append("text")
        .attr("x", 70)             
        .attr("y", -110)
        .attr("text-anchor", "middle")  
        .style("font-size", "24px") 
        .style("text-decoration", "underline")
        .text("Force-dynamic mapping from construction to verb")

    var d = {"network": events[id][0], "parent": events[id][1]};

    var arrayNetworkElements = getArrayNetworkElementsForTablePage(d);

    createSpecificFDNetworkWithTable(svgContainer, d, arrayNetworkElements);

}



function makeNetworkPage () {

    var svgContainer = d3.select("#network-title").append("svg")
                                                  .attr("width", 200)
                                                  .attr("height", 10);

    svgContainer.append("text")
            .attr("x", -120)             
            .attr("y", 25)
            .attr("text-anchor", "middle")  
            .style("font-size", "24px") 
            .text("Verbal force dynamics:")


    svgContainer.append("text")
            .attr("x", -120)             
            .attr("y", 50)
            .attr("text-anchor", "middle")  
            .style("font-size", "24px") 
            .text("Motion" + " network")

    svgContainer.append("text")
            .attr("x", 350)             
            .attr("y", 25)
            .attr("text-anchor", "middle")  
            .style("font-size", "24px") 
            .text("Construction force-dynamic")

    svgContainer.append("text")
            .attr("x", 350)             
            .attr("y", 50)
            .attr("text-anchor", "middle")  
            .style("font-size", "24px") 
            .text("mappings to the network")

    // svgContainer.append("text")
    //         .attr("x", 60)             
    //         .attr("y", 20)
    //         .attr("text-anchor", "middle")  
    //         .style("font-size", "20px") 
    //         .text()


    var myColor = d3.scaleLinear().domain([1,4])
        .range(["orange", "blue"])

    for (j=0; j<events[currentEvent].length; j++){

            var thisNetwork = events[currentEvent][j];

            //console.log(thisNetwork);

            var currentNetwork = getMultipleNetworkPage(thisNetwork);

            var heightMultiplier = currentNetwork["chains"].length;

            if (heightMultiplier < 8) {
                var height = 150;
            } else {
                var height = 250;
            }


            var svgContainer = d3.select("#network-container").append("svg")
                                                          .attr("width", 400)
                                                          .attr("height", height);


            var svgLabel = d3.select("#network-label").append("svg")
                                                          .attr("width", 400)
                                                          .attr("height", height);


            svgContainer.append("text")
                        .classed("svg-container", true)
                        .attr("x", 60)             
                        .attr("y", 30)
                        .attr("text-anchor", "middle")  
                        .style("font-size", "16px") 
                        .style("text-decoration", "underline")  
                        .text(currentNetwork["name"]);

            var argTextToAdd = "";

            // svgContainer.append('line')
            //         .style("stroke", "black")
            //         .style("stroke-width", 1)
            //         .attr("x1", -150)
            //         .attr("y1", 0)
            //         .attr("x2", 600)
            //         .attr("y2", 0); 


            // console.log(currentNetwork)

            createNetworkDiagram(svgContainer, currentNetwork, argTextToAdd) 

            // svgLabel.append("text")
            //         .attr("x", 70)             
            //         .attr("y", 100)
            //         .attr("text-anchor", "middle")  
            //         .style("font-size", "16px") 
            //         .style("text-decoration", "underline")  
            //         .text(currentNetwork["caption"]);

            var chains = currentNetwork["chains"];


            for (i=0; i < chains.length; i++) {

                function tabulate(data, columns) {
                  var table = div.append("table"),
                      thead = table.append("thead"),
                      tbody = table.append("tbody");

                  // append the header row
                  thead.append("tr")
                      .selectAll("th")
                      .data(columns)
                      .enter()
                      .append("th")
                          .text(function(column) { return column; });

                  // create a row for each object in the data
                  var rows = tbody.selectAll("tr")
                      .data(data)
                      .enter()
                      .append("tr");

                  // create a cell in each row for each column
                  var cells = rows.selectAll("td")
                      .data(function(row) {
                          return columns.map(function(column) {
                              return {column: column, value: row[column]};
                          });
                      })
                      .enter()
                      .append("td")
                          .text(function(d) { return d.value; });

                  return table;
              }

                var ascs = chains[i];

                // console.log(j);
                // console.log(myColor(j));

                svgLabel.append("rect")
                    .attr("x", 15)
                    .attr("y", i*23+35)
                    .attr("height", 20)
                    .attr("width", 150)
                    .attr("stroke", "blue")
                    .attr("stroke-width", 2)
                    //.style("fill", "grey")
                    .style("fill", myColor(j))
                    .attr("rx", 10)
                    .attr("ry", 10);

            
                svgLabel.append("text")
                    .attr("x", 90)             
                    .attr("y", (i*23+50))
                    .attr("text-anchor", "middle")  
                    .style("font-size", "14px") 
                    .text(chains[i]["network"])
                    .datum(chains[i])
                    .on("mouseover", function(){
                         d3.select(this).style("fill", "orange");})
                    .on("mouseout", function(){
                         d3.select(this).style("fill", "black");})
                    .on("click", function(d) { 

                        // console.log(d);

                        var currentLocation = window.location.href;

                        var specificNetworkTableLink = getSpecificNetworkTableIdentifierForURL(d["network"], d["parent"])[0];

                        var nextLocation = currentLocation.split("id=")[0] + "id="+ specificNetworkTableLink;
                        window.open(nextLocation, "_self"); 

                    });
                    //.on("click", function(d) { window.open("https://en.wikipedia.org/wiki/"+d["network"]); });


                }


        }
    }


function makeConstructionFDPage () {

    // added 05/2020 after discussion to add fourth page: Construction FD page

    var FDCategory = events[id]["child"];
    var parentNetworksLink = events[id]["parentNetwork"];
    var generalNetworkLink = events[id]["generalNetwork"];
    var parentNetworks = events[parentNetworksLink];

    var currentNetwork = getNetwork(FDCategory, parentNetworks[0]);

    var argTextToAdd = currentNetwork["argTextToAdd"];

    //The SVG Container
    var svgContainer = d3.select("#svg-container").append("svg")
                                        .attr("width", 200)
                                        .attr("height", 20);


    svgContainer.append("text")
                .attr("x", 40)             
                .attr("y", "0em")
                .attr("text-anchor", "middle")  
                .style("font-size", "24px") 
                .text("Construction Force Dynamics:");

    svgContainer.append("text")
                .attr("x", 40)             
                .attr("y", "1.5em")
                .attr("text-anchor", "middle")  
                .style("font-size", "24px") 
                .text(FDCategory);


    var svgNetworkContainer = d3.select("#svg-network-examples").append("svg")
                                        .attr("width", 200)
                                        .attr("height", 300);

    var drawNetwork = createNetworkDiagram(svgNetworkContainer, currentNetwork, argTextToAdd, examplePage=true);


    svgNetworkContainer.append("text")
                .attr("x", -70)             
                .attr("y", "6em")
                .attr("text-anchor", "middle")  
                .style("font-size", "16px") 
                .text(FDCategory + " maps onto:");

    for (j=0; j<parentNetworks.length; j++) {

        var parentNetworkTitle = parentNetworks[j].replace(/([A-Z])/g, ' $1').trim();
        var currentLocation = window.location.href;

        
        svgNetworkContainer.append("rect")
                .attr("x", -155)
                .attr("y", 125+40*j)
                .attr("height", 20)
                .attr("width", 170)
                .attr("stroke", "blue")
                .attr("stroke-width", 2)
                .style("fill", "grey")
                .attr("rx", 10)
                .attr("ry", 10);

        svgNetworkContainer.append("text")
                    .attr("x", -70)             
                    .attr("y", 140+40*j)
                    .attr("text-anchor", "middle")  
                    .style("font-size", "16px") 
                    .text(parentNetworkTitle)
                    .on("mouseover", function(){
                         d3.select(this).style("fill", "orange");})
                    .on("mouseout", function(){
                         d3.select(this).style("fill", "black");})
                    .on("click", function(d) { 
                        var nextLocation = currentLocation.split("id=")[0] + "id="+ generalNetworkLink;
                        window.open(nextLocation, "_self"); 
                    });

        svgNetworkContainer.append("rect")
                .attr("x", 90)
                .attr("y", 125+40*j)
                .attr("height", 20)
                .attr("width", 170)
                .attr("stroke", "blue")
                .attr("stroke-width", 2)
                .style("fill", "steelblue")
                .attr("rx", 10)
                .attr("ry", 10);

        svgNetworkContainer.append("text")
                    .attr("x", 175)             
                    .attr("y", 140+40*j)
                    .attr("text-anchor", "middle")  
                    .style("font-size", "16px") 
                    .text("Mapping and examples")
                    .datum(parentNetworks[j])
                    .on("mouseover", function(){
                         d3.select(this).style("fill", "orange");})
                    .on("mouseout", function(){
                         d3.select(this).style("fill", "black");})
                    .on("click", function(d) { 
                        var linkToNetworkTablePage = getSpecificNetworkTableIdentifierForURL(FDCategory, d)[0];
                        var nextLocation = currentLocation.split("id=")[0] + "id="+ linkToNetworkTablePage;
                        window.open(nextLocation, "_self");
                    }); 


    }




}



if (typeof events[currentEvent] === 'undefined') {
    // does not exist

    var div = document.getElementById('textbox');

    div.innerHTML += '<h2>Representations for mental and social events coming soon!</h2>';   

} else if (id > 12000) {

    makeConstructionFDPage()

} else if (id > 11000) {

    renderTablePage(id)

} else if (id > 10000){

    makeNetworkPage()

} else {
    // does exist

    // this removes the lines created by the divs network-container which have a border

    removeElement("network-container");

    draw()
}