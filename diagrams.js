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

            var generalNetworkName = myText.replace(/([a-z])([A-Z])/g, '$1 $2').trim();

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
  "161": [
    "Paul breathed on Mary",
    "breathe-40.1.2",
    "Sbj V at/on/about/of/over Obl",
    "Volitional Place",
    "DirectedAchievement",
    "EmissionNetwork",
    "Theme-of(y,e) & Component-of(a,Paul) & Component-of(b,NI) & Component-of(c,Mary) & DirAch(a,i,j,q1) & DirAch(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & +MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10007"
],
    "174": [
        "Paul hit at the window",
        "hit-18.1",
        "Sbj V at/on/about/of/over Obl",
        "Volitional Attend",
        "DirectedAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Paul) & Component-of(b,window) & DirAch(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL(q1) & EXIST(q2) & ATT(a,b)",
        "10012"
    ],
    "178": [
        "Allison poked at the cloth",
        "poke-19",
        "Sbj V at/on/about/of/over Obl",
        "Volitional Attend",
        "DirectedAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Allison) & Component-of(b,cloth) & DirAch(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL(q1) & EXIST(q2) & ATT(a,b)",
        "10012"
    ],
    "179": [
        "Paula swatted at the fly",
        "swat-18.2",
        "Sbj V at/on/about/of/over Obl",
        "Volitional Attend",
        "DirectedAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Paula) & Component-of(b,fly) & DirAch(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL(q1) & EXIST(q2) & ATT(a,b)",
        "10012"
    ],
    "182": [
        "Carol cut at the bread with a knife",
        "cut-21.1",
        "Sbj V at/on/about/of/over Obl with Obl",
        "Instrument Attend",
        "DirectedAchievement",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,Carol) & Component-of(b,knife) & Component-of(c,bread) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & DirAch(c,i,l,q3) & VOL(q1) & EXIST(q2) & EXIST(q3) & FRC(a,b) & ATT(b,c)",
        "10015"
    ],
    "183": [
        "Allison poked at the cloth with the needle",
        "poke-19",
        "Sbj V at/on/about/of/over Obl with Obl",
        "Instrument Attend",
        "DirectedAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Allison) & Component-of(b,needle) & Component-of(c,cloth) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & DirAch(c,i,l,q3) & VOL(q1) & EXIST(q2) & EXIST(q3) & FRC(a,b) & ATT(b,c)",
        "10012"
    ],
    "184": [
        "Paul hit at the window with an open hand",
        "hit-18.1",
        "Sbj V at/on/about/of/over Obl with Obl",
        "Instrument Attend",
        "DirectedAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Paul) & Component-of(b,open hand) & Component-of(c,window) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & DirAch(c,i,l,q3) & VOL(q1) & EXIST(q2) & EXIST(q3) & FRC(a,b) & ATT(b,c)",
        "10012"
    ],
    "185": [
        "Paula swatted at the fly with a dishcloth",
        "swat-18.2",
        "Sbj V at/on/about/of/over Obl with Obl",
        "Instrument Attend",
        "DirectedAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Paula) & Component-of(b,dishcloth) & Component-of(c,fly) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & DirAch(c,i,l,q3) & VOL(q1) & EXIST(q2) & EXIST(q3) & FRC(a,b) & ATT(b,c)",
        "10012"
    ],
    "1502": [
        "Nora heaved the chair.",
        "push-12",
        "Sbj V Obj",
        "Volitional Motion",
        "IncrementalAccomplishment",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Nora) & Component-of(b,chair) & Component-of(c,NI) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
        "10012"
    ],
    "1503": [
        "Nora jerked at the wall.",
        "push-12-1",
        "Sbj V at/on/about/of/over Obl",
        "Volitional Attend",
        "DirectedAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Nora) & Component-of(b,wall) & DirAch(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL(q1) & EXIST(q2) & ATT(a,b)",
        "10012"
    ],
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
"199": [
    "The dragon breathed fire on Mary",
    "breathe-40.1.2",
    "Sbj V Obj PathP",
    "Physical Place",
    "IncrementalAccomplishment",
    "EmissionNetwork",
    "Theme-of(y,e) & Component-of(a,dragon) & Component-of(b,fire) & Component-of(c,Mary) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & +MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10007"
],
  "228": [
        "Jackie chased the thief",
        "chase-51.6",
        "Sbj V Obj",
        "Mutual",
        "DirectedActivity",
        "PursuitMotionNetwork",
        "Theme-of(x,e) & Component-of(a,Jackie) & Component-of(b,thief) & DirAct(a,i,j,q1) & InhStPhExt(b,i,k,q2) & VOL/MOT(q1) & MOT(q2) & PTH(a,b)",
        "10003"
  ],
  "238": [
        "Jackie chased after the thief",
        "chase-51.6",
        "Sbj V PathP",
        "Mutual",
        "DirectedActivity",
        "PursuitMotionNetwork",
        "Theme-of(x,e) & Component-of(a,Jackie) & Component-of(b,thief) & DirAct(a,i,j,q1) & InhStPhExt(b,i,k,q2) & VOL/MOT(q1) & MOT(q2) & PTH(a,b)",
        "10003"
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
    "686": [
        "Paula hit the stick against/on the fence",
        "hit-18.1",
        "Sbj V Obj PathP",
        "Manipulate Force",
        "CyclicAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Paula) & Component-of(b,stick) & Component-of(c,fence) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & +MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
        "10012"
    ],
    "690": [
        "Allison poked the needle through the cloth",
        "poke-19",
        "Sbj V Obj PathP",
        "Volitional Place",
        "DirectedAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Allison) & Component-of(b,needle) & Component-of(c,cloth) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & +MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
        "10012"
    ],
    "709": [
        "She wore the purple dress",
        "simple_dressing-41.3.1",
        "Sbj V Obj",
        "Volitional Force",
        "UndirectedActivity",
        "ConstrainNetwork",
        "Theme-of(y,e) & Component-of(a,She) & Component-of(b,dress) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & VOL(q1) & EXIST(q2) & FRC(a,b)",
        "10013"
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
    "733": [
        "Tony bent the rod into a U with pliers",
        "bend-45.2",
        "Sbj V Obj ResultP with Obl",
        "Instrument COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(z,e) & Component-of(a,Tony) & Component-of(b,pliers) & Component-of(c,rod) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & DirAch(c,i,l,q3) & VOL(q1) & INTL(q2) & COS(q3) & FRC(a,b) & FRC(b,c)",
        "10015"
    ],
    "734": [
        "Tony bent the rod with pliers",
        "bend-45.2",
        "Sbj V Obj with Obl",
        "Instrument COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(z,e) & Component-of(a,Tony) & Component-of(b,pliers) & Component-of(c,rod) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & DirAch(c,i,l,q3) & VOL(q1) & COS(q3) & FRC(a,b) & FRC(b,c)",
        "10015"
    ],
    "735": [
        "Tony broke the glass to pieces with a hammer",
        "break-45.1",
        "Sbj V Obj ResultP with Obl",
        "Instrument COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(z,e) & Component-of(a,Tony) & Component-of(b,hammer) & Component-of(c,glass) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & DirAch(c,i,l,q3) & VOL(q1) & INTL(q2) & COS(q3) & FRC(a,b) & FRC(b,c)",
        "10015"
    ],
    "736": [
        "Tony broke the piggy bank open with a hammer",
        "break-45.1",
        "Sbj V Obj ResultP with Obl",
        "Instrument COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(z,e) & Component-of(a,Tony) & Component-of(b,hammer) & Component-of(c,bank) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & DirAch(c,i,l,q3) & VOL(q1) & INTL(q2) & COS(q3) & FRC(a,b) & FRC(b,c)",
        "10015"
    ],
    "737": [
        "Tony broke the window with a hammer",
        "break-45.1",
        "Sbj V Obj with Obl",
        "Instrument COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(z,e) & Component-of(a,Tony) & Component-of(b,hammer) & Component-of(c,window) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & DirAch(c,i,l,q3) & VOL(q1) & INTL(q2) & COS(q3) & FRC(a,b) & FRC(b,c)",
        "10015"
    ],
    "738": [
        "Carol cut the envelope open with the knife",
        "cut-21.1",
        "Sbj V Obj ResultP with Obl",
        "Instrument COS",
        "DirectedAchievement",
        "CausativeCOSNetwork",
        "Theme-of(z,e) & Component-of(a,Carol) & Component-of(b,knife) & Component-of(c,envelope) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & DirAch(c,i,l,q3) & VOL(q1) & INTL(q2) & COS(q3) & FRC(a,b) & FRC(b,c)",
        "10015"
    ],
    "739": [
        "Carol cut the envelope into pieces with a knife",
        "cut-21.1",
        "Sbj V Obj ResultP with Obl",
        "Instrument COS",
        "NonincrementalAccomplishment",
        "CausativeCOSNetwork",
        "Theme-of(z,e) & Component-of(a,Carol) & Component-of(b,knife) & Component-of(c,envelope) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & NonIncrAcc(c,i,l,q3) & VOL(q1) & INTL(q2) & COS(q3) & FRC(a,b) & FRC(b,c)",
        "10015"
    ],
    "740": [
        "Carol cut the bread with a knife",
        "cut-21.1",
        "Sbj V Obj with Obl",
        "Instrument COS",
        "DirectedAchievement",
        "CausativeCOSNetwork",
        "Theme-of(z,e) & Component-of(a,Carol) & Component-of(b,knife) & Component-of(c,bread) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & DirAch(c,i,l,q3) & VOL(q1) & INTL(q2) & COS(q3) & FRC(a,b) & FRC(b,c)",
        "10015"
    ],
    "741": [
        "The builders destroyed the warehouse with explosives",
        "destroy-44",
        "Sbj V Obj with Obl",
        "Instrument COS",
        "DirectedAchievement",
        "CausativeCOSNetwork",
        "Theme-of(z,e) & Component-of(a,builders) & Component-of(b,explosives) & Component-of(c,warehouse) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & DirAch(c,i,l,q3) & VOL(q1) & INTL(q2) & COS(q3) & FRC(a,b) & FRC(b,c)",
        "10015"
    ],
    "742": [
        "She flossed her teeth with floss",
        "floss-41.2.1",
        "Sbj V Obj with Obl",
        "Instrument COS",
        "IncrementalAccomplishment",
        "CausativeCOSNetwork",
        "Theme-of(z,e) & Component-of(a,She) & Component-of(b,teeth) & Component-of(c,floss) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & INTL(q2) & COS(q3) & FRC(a,b) & FRC(b,c)",
        "10015"
    ],
    "745": [
        "Caesar killed Brutus with a knife",
        "murder-42.1",
        "Sbj V Obj with Obl",
        "Instrument COS",
        "DirectedAchievement",
        "CausativeCOSNetwork",
        "Theme-of(z,e) & Component-of(a,Caesar) & Component-of(b,knife) & Component-of(c,Brutus) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & DirAch(c,i,l,q3) & VOL(q1) & INTL(q2) & COS(q3) & FRC(a,b) & FRC(b,c)",
        "10015"
    ],
    "747": [
        "The queen poisoned Snow White with an apple",
        "poison-42.2",
        "Sbj V Obj with Obl",
        "Instrument COS",
        "DirectedAchievement",
        "CausativeCOSNetwork",
        "Theme-of(z,e) & Component-of(a,queen) & Component-of(b,apple) & Component-of(c,Snow White) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & DirAch(c,i,l,q3) & VOL(q1) & INTL(q2) & COS(q3) & FRC(a,b) & FRC(b,c)",
        "10015"
    ],
    "752": [
        "She brushed with a toothbrush",
        "floss-41.2.1",
        "Sbj V with Obl",
        "Instrument COS",
        "UndirectedActivity",
        "CausativeCOSNetwork",
        "Theme-of(z,e) & Component-of(a,She) & Component-of(b,toothbrush) & Component-of(c,NI) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & UndAct(c,i,l,q3) & VOL(q1) & INTL(q2) & COS(q3) & FRC(a,b) & FRC(b,c)",
        "10015"
    ],
    "746": [
        "Bill dried the clothes with a hairdryer",
        "other_cos-45.4",
        "Sbj V Obj with Obl",
        "Instrument COS",
        "IncrementalAccomplishment",
        "COSNetwork",
        "Theme-of(z,e) & Component-of(a,Bill) & Component-of(b,hairdryer) & Component-of(c,clothes) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & INTL(q2) & COS(q3) & FRC(a,b) & FRC(b,c)",
        "10015"
    ],
    "748": [
        "Bill repaired the tractor with duct tape",
        "remedy-45.7",
        "Sbj V Obj with Obl",
        "Instrument COS",
        "NonincrementalAccomplishment",
        "COSNetwork",
        "Theme-of(z,e) & Component-of(a,Bill) & Component-of(b,tape) & Component-of(c,tractor) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & NonIncrAcc(c,i,l,q3) & VOL(q1) & INTL(q2) & COS(q3) & FRC(a,b) & FRC(b,c)",
        "10015"
    ],
    "756": [
        "The knife cut the envelope open",
        "cut-21.1",
        "Sbj V Obj ResultP",
        "Physical COS",
        "DirectedAchievement",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,knife) & Component-of(b,envelope) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & INTL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "757": [
        "The knife cut the envelope into pieces",
        "cut-21.1",
        "Sbj V Obj ResultP",
        "Physical COS",
        "NonincrementalAccomplishment",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,knife) & Component-of(b,envelope) & UndAct(a,i,j,q1) & NonIncrAcc(b,i,k,q2) & INTL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "758": [
        "The knife cut the bread",
        "cut-21.1",
        "Sbj V Obj",
        "Physical COS",
        "DirectedAchievement",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,knife) & Component-of(b,bread) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & INTL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "759": [
        "The explosives destroyed the warehouse",
        "destroy-44",
        "Sbj V Obj",
        "Physical COS",
        "DirectedAchievement",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,explosives) & Component-of(b,warehouse) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & INTL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "762": [
        "The DDT killed the insects",
        "murder-42.1-1",
        "Sbj V Obj",
        "Physical COS",
        "IncrementalAccomplishment",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,DDT) & Component-of(b,insects) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & INTL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "772": [
        "I flossed",
        "floss-41.2.1",
        "Sbj V",
        "Volitional COS",
        "UndirectedActivity",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,I) & Component-of(b,NI) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "776": [
        "Celia brushed the baby's hair",
        "braid-41.2.2",
        "Sbj V Obj",
        "Volitional COS",
        "IncrementalAccomplishment",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,Celia) & Component-of(b,the baby's hair) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "783": [
        "Claire painted the wall into a splotchy mess",
        "coloring-24",
        "Sbj V Obj ResultP",
        "Volitional COS",
        "NonincrementalAccomplishment",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,Claire) & Component-of(b,wall) & UndAct(a,i,j,q1) & NonIncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "784": [
        "Claire painted the wall",
        "coloring-24",
        "Sbj V Obj",
        "Volitional COS",
        "DirectedActivity",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,Claire) & Component-of(b,wall) & UndAct(a,i,j,q1) & DirAct(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "785": [
        "Claire painted the wall red",
        "coloring-24",
        "Sbj V Obj ResultP",
        "Volitional COS",
        "DirectedActivity",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,Claire) & Component-of(b,wall) & UndAct(a,i,j,q1) & DirAct(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "786": [
        "Carol cut the envelop open",
        "cut-21.1",
        "Sbj V Obj ResultP",
        "Volitional COS",
        "DirectedAchievement",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,Carol) & Component-of(b,envelop) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "787": [
        "Carol cut the envelope into pieces",
        "cut-21.1",
        "Sbj V Obj ResultP",
        "Volitional COS",
        "NonincrementalAccomplishment",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,Carol) & Component-of(b,envelope) & UndAct(a,i,j,q1) & NonIncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "788": [
        "Carol cut through the bread",
        "cut-21.1",
        "Sbj V ResultP Obj",
        "Volitional COS",
        "DirectedAchievement",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,Carol) & Component-of(b,y) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "789": [
        "Carol cut the bread",
        "cut-21.1",
        "Sbj V Obj",
        "Volitional COS",
        "DirectedAchievement",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,Carol) & Component-of(b,bread) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "790": [
        "Carol cut her finger",
        "cut-21.1-1",
        "Sbj V Obj",
        "Volitional COS",
        "DirectedAchievement",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,Carol) & Component-of(b,finger) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "791": [
        "The Romans destroyed the city",
        "destroy-44",
        "Sbj V Obj",
        "Volitional COS",
        "DirectedAchievement",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,Romans) & Component-of(b,city) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "792": [
        "Cynthia devoured the pizza",
        "devour-39.4",
        "Sbj V Obj",
        "Volitional COS",
        "IncrementalAccomplishment",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,Cynthia) & Component-of(b,pizza) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "796": [
        "Paul inhaled water",
        "exhale-40.1.3-2",
        "Sbj V Obj",
        "Volitional COS",
        "DirectedAchievement",
        "AbsorbNetwork",
        "Theme-of(y,e) & Component-of(a,Paul) & Component-of(b,water) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "797": [
        "The hygienist flossed my teeth",
        "floss-41.2.1",
        "Sbj V Obj",
        "Volitional COS",
        "IncrementalAccomplishment",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,hygienist) & Component-of(b,teeth) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "803": [
        "Sheila groomed the horse",
        "groom-41.1.2",
        "Sbj V Obj",
        "Volitional COS",
        "IncrementalAccomplishment",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,Sheila) & Component-of(b,horse) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "808": [
        "Brutus murdered Julius Caesar",
        "murder-42.1",
        "Sbj V Obj",
        "Volitional COS",
        "DirectedAchievement",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,Brutus) & Component-of(b,Caesar) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
   "810": [
        "The witch poisoned Snow White",
        "poison-42.2",
        "Sbj V Obj",
        "Volitional COS",
        "DirectedAchievement",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,witch) & Component-of(b,Snow White) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "811": [
        "The Boston Strangler strangled his victims to death",
        "poison-42.2",
        "Sbj V Obj ResultP",
        "Volitional COS",
        "NonincrementalAccomplishment",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,Strangler) & Component-of(b,victims) & UndAct(a,i,j,q1) & NonIncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "812": [
        "The Boston Strangler strangled his victims dead",
        "poison-42.2",
        "Sbj V Obj ResultP",
        "Volitional COS",
        "NonincrementalAccomplishment",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,Boston Strangler) & Component-of(b,victims) & UndAct(a,i,j,q1) & NonIncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
   "817": [
        "Herman whipped cream",
        "shake-22.3-1-1",
        "Sbj V Obj",
        "Volitional COS",
        "IncrementalAccomplishment",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,Herman) & Component-of(b,cream) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "818": [
        "Herman gathered the students into a group",
        "shake-22.3-2",
        "Sbj V Obj ResultP",
        "Volitional COS",
        "IncrementalAccomplishment",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,Herman) & Component-of(b,students) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "1325": [
        "Jennifer baked the potatoes to a crisp.",
        "cooking-45.3",
        "Sbj V Obj ResultP",
        "Volitional COS",
        "IncrementalAccomplishment",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,Jennifer) & Component-of(b,potatoes) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "1326": [
        "Jennifer baked the potatoes.",
        "cooking-45.3",
        "Sbj V Obj",
        "Volitional COS",
        "IncrementalAccomplishment",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,Jennifer) & Component-of(b,potatoes) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "1507": [
        "John took the radio apart.",
        "render-29.90",
        "Sbj V Obj ResultP",
        "Volitional COS",
        "NonincrementalAccomplishment",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,John) & Component-of(b,radio) & UndAct(a,i,j,q1) & NonIncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "1331": [
        "This oven baked the potatoes.",
        "cooking-45.3",
        "Sbj V Obj",
        "Physical COS",
        "IncrementalAccomplishment",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,oven) & Component-of(b,potatoes) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & INTL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
  "1183": [
    "The dog barked at the cat.",
    "animal_sounds-38",
    "Sbj V at/on/about/of/over Obl",
    "Volitional Attend",
    "UndirectedActivity",
    "EmissionNetwork",
    "Theme-of(y,e) & Component-of(a,dog) & Component-of(b,cat) & UndAct(a,i,j,q1) & InhStPhExt(b,i,k,q2) & VOL(q1) & EXIST(q2) & ATT(a,b)",
    "10007"
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
    "854": [
        "That chisel carved the statue",
        "carve-21.2-2",
        "Sbj V Obj",
        "Physical Create",
        "NonincrementalAccomplishment",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,chisel) & Component-of(b,statue) & UndAct(a,i,j,q1) & NonIncrAcc(b,i,k,q2) & INTL(q1) & DES(q2) & FRC(a,b)",
        "10012"
    ],
    "892": [
        "Carol crushed the ice with a hammer",
        "carve-21.2-1",
        "Sbj V Obj with Obl",
        "Instrument Force",
        "DirectedAchievement",
        "ForceNetwork",
        "Theme-of(z,e) & Component-of(a,Carol) & Component-of(b,hammer) & Component-of(c,ice) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & DirAch(c,i,l,q3) & VOL(q1) & INTL(q2) & EXIST(q3) & FRC(a,b) & FRC(b,c)",
        "10012"
    ],
    "893": [
        "Carol carved the stone with a chisel",
        "carve-21.2-2",
        "Sbj V Obj with Obl",
        "Instrument Force",
        "UndirectedActivity",
        "ForceNetwork",
        "Theme-of(z,e) & Component-of(a,Carol) & Component-of(b,chisel) & Component-of(c,stone) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & UndAct(c,i,l,q3) & VOL(q1) & INTL(q2) & EXIST(q3) & FRC(a,b) & FRC(b,c)",
        "10012"
    ],
    "894": [
        "Paula hit the ball with a stick",
        "hit-18.1",
        "Sbj V Obj with Obl",
        "Instrument Force",
        "CyclicAchievement",
        "ForceNetwork",
        "Theme-of(z,e) & Component-of(a,Paula) & Component-of(b,stick) & Component-of(c,ball) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & CycAch(c,i,l,q3) & VOL(q1) & INTL(q2) & EXIST(q3) & FRC(a,b) & FRC(b,c)",
        "10012"
    ],
    "895": [
        "Steve pelted Anna with acorns",
        "pelt-17.2",
        "Sbj V Obj with Obl",
        "Instrument Force",
        "UndirectedActivity",
        "ForceNetwork",
        "Theme-of(z,e) & Component-of(a,Steve) & Component-of(b,acorns) & Component-of(c,Anna) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & UndAct(c,i,l,q3) & VOL(q1) & INTL(q2) & EXIST(q3) & FRC(a,b) & FRC(b,c)",
        "10012"
    ],
    "896": [
        "Allison poked the cloth with the needle",
        "poke-19",
        "Sbj V Obj with Obl",
        "Instrument Force",
        "CyclicAchievement",
        "ForceNetwork",
        "Theme-of(z,e) & Component-of(a,Allison) & Component-of(b,needle) & Component-of(c,cloth) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & CycAch(c,i,l,q3) & VOL(q1) & INTL(q2) & EXIST(q3) & FRC(a,b) & FRC(b,c)",
        "10012"
    ],
    "897": [
        "Paula spanked the child with her right hand",
        "spank-18.3",
        "Sbj V Obj with Obl",
        "Instrument Force",
        "UndirectedActivity",
        "ForceNetwork",
        "Theme-of(z,e) & Component-of(a,Paula) & Component-of(b,hand) & Component-of(c,child) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & UndAct(c,i,l,q3) & VOL(q1) & INTL(q2) & EXIST(q3) & FRC(a,b) & FRC(b,c)",
        "10012"
    ],
    "898": [
        "Paula swatted the fly with a dishcloth",
        "swat-18.2",
        "Sbj V Obj with Obl",
        "Instrument Force",
        "CyclicAchievement",
        "ForceNetwork",
        "Theme-of(z,e) & Component-of(a,Paula) & Component-of(b,dishcloth) & Component-of(c,fly) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & CycAch(c,i,l,q3) & VOL(q1) & INTL(q2) & EXIST(q3) & FRC(a,b) & FRC(b,c)",
        "10012"
    ],
    "899": [
        "Carrie touched the cat with the stick",
        "touch-20",
        "Sbj V Obj with Obl",
        "Instrument Force",
        "CyclicAchievement",
        "ForceNetwork",
        "Theme-of(z,e) & Component-of(a,Carrie) & Component-of(b,stick) & Component-of(c,cat) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & CycAch(c,i,l,q3) & VOL(q1) & INTL(q2) & EXIST(q3) & FRC(a,b) & FRC(b,c)",
        "10012"
    ],
    "900": [
        "Carrie touched his shoulder with the stick",
        "touch-20-1",
        "Sbj V Obj with Obl",
        "Instrument Force",
        "CyclicAchievement",
        "ForceNetwork",
        "Theme-of(z,e) & Component-of(a,Carrie) & Component-of(b,stick) & Component-of(c,shoulder) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & CycAch(c,i,l,q3) & VOL(q1) & INTL(q2) & EXIST(q3) & FRC(a,b) & FRC(b,c)",
        "10012"
    ],
    "942": [
        "This knife cuts well",
        "cut-21.1",
        "Sbj V",
        "Autonomous Internal",
        "InherentState",
        "CausativeCOSNetwork",
        "Theme-of(x,e) & Component-of(a,knife) & InhStPh(a,i,j,q1) & INTL(q1)",
        "10015"
    ],
    "943": [
        "The bread cut easily",
        "cut-21.1",
        "Sbj V",
        "Autonomous Internal",
        "IncrementalAccomplishment",
        "CausativeCOSNetwork",
        "Theme-of(x,e) & Component-of(a,bread) & IncrAcc(a,i,j,q1) & INTL(q1)",
        "10015"
    ],
    "948": [
        "Paul inhaled",
        "exhale-40.1.3-2",
        "Sbj V",
        "Autonomous Internal",
        "DirectedAchievement",
        "AbsorbNetwork",
        "Theme-of(x,e) & Component-of(a,Paul) & DirAch(a,i,j,q1) & INTL(q1)",
        "10015"
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
    "991": [
        "Paula hit the sticks together",
        "hit-18.1",
        "Sbj V Obj",
        "Volitional Internal",
        "CyclicAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Paula) & Component-of(b,sticks) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & VOL(q1) & INTL(q2) & FRC(a,b)",
        "10012"
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
    "CausativeCOSNetwork",
    "Theme-of(y,e) & Component-of(a,fans) & Component-of(b,copies) & Component-of(c,magazines) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & -MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10015"
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
    "EmissionNetwork",
    "Theme-of(z,e) & Component-of(a,I) & Component-of(b,NI) & Component-of(c,him) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & INTL(q2) & -MER(q3) & FRC(a,b) & PTH(b,c)",
    "10007"
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
    "1169": [
        "The cow took in nutrients from her feed.",
        "absorb-39.8",
        "Sbj V Obj PathP",
        "Physical Remove",
        "IncrementalAccomplishment",
        "AbsorbNetwork",
        "Theme-of(z,e) & Component-of(a,cow) & Component-of(b,nutrients) & Component-of(c,feed) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & -MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
        "10015"
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
    "MereologicalNetwork",
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
  "683": [
    "I spooned the sauce there",
    "funnel-9.3",
    "Sbj V Obj PathP",
    "Volitional Place",
    "IncrementalAccomplishment",
    "MereologicalNetwork",
    "Theme-of(y,e) & Component-of(a,I) & Component-of(b,sauce) & Component-of(c,there) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & +MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    ""
  ],
    "687": [
        "Smith inscribed his name on the ring",
        "image_impression-25.1",
        "Sbj V Obj PathP",
        "Volitional Place",
        "IncrementalAccomplishment",
        "IllustrationNetwork",
        "Theme-of(y,e) & Component-of(a,Smith) & Component-of(b,name) & Component-of(c,ring) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & +MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
        "10007"
    ],
    "701": [
        "Saul jotted down readings on a notepad",
        "scribble-25.2",
        "Sbj V Obj PathP",
        "Volitional Place",
        "DirectedActivity",
        "IllustrationNetwork",
        "Theme-of(y,e) & Component-of(a,Saul) & Component-of(b,readings) & Component-of(c,notepad) & UndAct(a,i,j,q1) & DirAct(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & +MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
        "10007"
    ],
    "705": [
        "The secretary transcribed the speech into the record",
        "transcribe-25.4",
        "Sbj V Obj PathP",
        "Volitional Place",
        "IncrementalAccomplishment",
        "IllustrationNetwork",
        "Theme-of(y,e) & Component-of(a,secretary) & Component-of(b,speech) & Component-of(c,record) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & +MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
        "10007"
    ],
    "710": [
        "The rod bent",
        "bend-45.2",
        "Sbj V",
        "Autonomous COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(x,e) & Component-of(a,rod) & DirAch(a,i,j,q1) & COS(q1)",
        "10015"
    ],
    "711": [
        "The copper rods bent easily",
        "bend-45.2",
        "Sbj V",
        "Autonomous COS",
        "IncrementalAccomplishment",
        "COSNetwork",
        "Theme-of(x,e) & Component-of(a,rods) & IncrAcc(a,i,j,q1) & COS(q1)",
        "10015"
    ],
    "712": [
        "The bridge gave way",
        "break_down-45.8",
        "Sbj V",
        "Autonomous COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(x,e) & Component-of(a,bridge) & DirAch(a,i,j,q1) & COS(q1)",
        "10015"
    ],
    "713": [
        "The window broke",
        "break-45.1",
        "Sbj V",
        "Autonomous COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(x,e) & Component-of(a,window) & DirAch(a,i,j,q1) & COS(q1)",
        "10015"
    ],
    "714": [
        "The glass broke into a thousand pieces",
        "break-45.1",
        "Sbj V ResultP",
        "Autonomous COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(x,e) & Component-of(a,glass) & DirAch(a,i,j,q1) & COS(q1)",
        "10015"
    ],
    "715": [
        "The crystal vases broke easily",
        "break-45.1",
        "Sbj V",
        "Autonomous COS",
        "IncrementalAccomplishment",
        "COSNetwork",
        "Theme-of(x,e) & Component-of(a,vases) & IncrAcc(a,i,j,q1) & COS(q1)",
        "10015"
    ],
   "717": [
        "The balloon rose slowly",
        "calibrate_cos-45.6",
        "Sbj V",
        "Autonomous COS",
        "IncrementalAccomplishment",
        "COSNetwork",
        "Theme-of(x,e) & Component-of(a,balloon) & DirAch(a,i,j,q1) & COS(q1)",
        "10015"
    ],
   "718": [
        "He died",
        "die-42.4",
        "Sbj V",
        "Autonomous COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(x,e) & Component-of(a,He) & DirAch(a,i,j,q1) & COS(q1)",
        "10015"
    ],
    "719": [
        "The roses bloomed",
        "entity_specific_cos-45.5",
        "Sbj V",
        "Autonomous COS",
        "IncrementalAccomplishment",
        "COSNetwork",
        "Theme-of(x,e) & Component-of(a,roses) & IncrAcc(a,i,j,q1) & COS(q1)",
        "10015"
    ],
    "721": [
        "The dough twirled into a pretzel",
        "knead-26.5",
        "Sbj V ResultP",
        "Autonomous COS",
        "NonincrementalAccomplishment",
        "COSNetwork",
        "Theme-of(x,e) & Component-of(a,dough) & NonIncrAcc(a,i,j,q1) & COS(q1)",
        "10015"
    ],
    "722": [
        "The cotton clothes dried easily",
        "other_cos-45.4",
        "Sbj V",
        "Autonomous COS",
        "IncrementalAccomplishment",
        "COSNetwork",
        "Theme-of(x,e) & Component-of(a,clothes) & IncrAcc(a,i,j,q1) & COS(q1)",
        "10015"
    ],
    "723": [
        "The clothes dried",
        "other_cos-45.4",
        "Sbj V",
        "Autonomous COS",
        "IncrementalAccomplishment",
        "COSNetwork",
        "Theme-of(x,e) & Component-of(a,clothes) & IncrAcc(a,i,j,q1) & COS(q1)",
        "10015"
    ],
    "724": [
        "The clothes dried wrinkled",
        "other_cos-45.4-1",
        "Sbj V ResultP",
        "Autonomous COS",
        "IncrementalAccomplishment",
        "COSNetwork",
        "Theme-of(x,e) & Component-of(a,clothes) & IncrAcc(a,i,j,q1) & COS(q1)",
        "10015"
    ],
    "725": [
        "The new tractors repaired easily",
        "remedy-45.7-1",
        "Sbj V",
        "Autonomous COS",
        "NonincrementalAccomplishment",
        "COSNetwork",
        "Theme-of(x,e) & Component-of(a,tractors) & NonIncrAcc(a,i,j,q1) & COS(q1)",
        "10015"
    ],
    "729": [
        "The sailor drowned",
        "suffocate-40.7",
        "Sbj V",
        "Autonomous COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(x,e) & Component-of(a,sailor) & DirAch(a,i,j,q1) & COS(q1)",
        "10015"
    ],
    "730": [
        "He choked/suffocated to death",
        "suffocate-40.7",
        "Sbj V ResultP",
        "Autonomous COS",
        "NonincrementalAccomplishment",
        "COSNetwork",
        "Theme-of(x,e) & Component-of(a,He) & NonIncrAcc(a,i,j,q1) & COS(q1)",
        "10015"
    ],
    "731": [
        "He turned from a prince into a frog",
        "turn-26.6.1",
        "Sbj V ResultP",
        "Autonomous COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(x,e) & Component-of(a,He) & DirAch(a,i,j,q1) & COS(q1)",
        "10015"
    ],
    "732": [
        "He turned into a frog",
        "turn-26.6.1",
        "Sbj V ResultP",
        "Autonomous COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(x,e) & Component-of(a,He) & DirAch(a,i,j,q1) & COS(q1)",
        "10015"
    ],
    "1239": [
        "Sharon fainted from hunger.",
        "change_bodily_state-40.8.4",
        "Sbj V from/by Obl",
        "Cause COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(y,e) & Component-of(a,hunger) & Component-of(b,Sharon) & TranStPhPunctInit(a,i,j,q1) & DirAch(b,i,k,q2) & EXIST(q1) & COS(q2) & CAUSE(a,b)",
        "10015"
    ],
    "1240": [
        "Sharon fainted.",
        "change_bodily_state-40.8.4",
        "Sbj V",
        "Autonomous COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(x,e) & Component-of(a,Sharon) & DirAch(a,i,j,q1) & COS(q1)",
        "10015"
    ],
    "743": [
        "Paul hit the window to pieces with a hammer",
        "hit-18.1",
        "Sbj V Obj ResultP with Obl",
        "Instrument COS",
        "DirectedAchievement",
        "ForceNetwork",
        "Theme-of(z,e) & Component-of(a,Paul) & Component-of(b,hammer) & Component-of(c,window) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & DirAch(c,i,l,q3) & VOL(q1) & INTL(q2) & COS(q3) & FRC(a,b) & FRC(b,c)",
        "10012"
    ],
    "744": [
        "Paul hit the door open with his foot",
        "hit-18.1",
        "Sbj V Obj ResultP with Obl",
        "Instrument COS",
        "DirectedAchievement",
        "ForceNetwork",
        "Theme-of(z,e) & Component-of(a,Paul) & Component-of(b,foot) & Component-of(c,door) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & DirAch(c,i,l,q3) & VOL(q1) & INTL(q2) & COS(q3) & FRC(a,b) & FRC(b,c)",
        "10012"
    ],
    "749": [
        "They spanked him to death with a bat",
        "spank-18.3",
        "Sbj V Obj ResultP with Obl",
        "Instrument COS",
        "NonincrementalAccomplishment",
        "ForceNetwork",
        "Theme-of(z,e) & Component-of(a,They) & Component-of(b,bat) & Component-of(c,him) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & NonIncrAcc(c,i,l,q3) & VOL(q1) & INTL(q2) & COS(q3) & FRC(a,b) & FRC(b,c)",
        "10012"
    ],
    "750": [
        "The cat clawed the couch to pieces with her sharp nails",
        "swat-18.2",
        "Sbj V Obj ResultP with Obl",
        "Instrument COS",
        "NonincrementalAccomplishment",
        "ForceNetwork",
        "Theme-of(z,e) & Component-of(a,cat) & Component-of(b,nails) & Component-of(c,couch) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & NonIncrAcc(c,i,l,q3) & VOL(q1) & INTL(q2) & COS(q3) & FRC(a,b) & FRC(b,c)",
        "10012"
    ],
    "751": [
        "Paula swatted the fly dead with a dishcloth",
        "swat-18.2",
        "Sbj V Obj ResultP with Obl",
        "Instrument COS",
        "DirectedAchievement",
        "ForceNetwork",
        "Theme-of(z,e) & Component-of(a,Paula) & Component-of(b,dishcloth) & Component-of(c,fly) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & DirAch(c,i,l,q3) & VOL(q1) & INTL(q2) & COS(q3) & FRC(a,b) & FRC(b,c)",
        "10012"
    ],
    "753": [
        "The pliers bent the rod",
        "bend-45.2",
        "Sbj V Obj",
        "Physical COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(y,e) & Component-of(a,pliers) & Component-of(b,rod) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & INTL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "754": [
        "The hammer broke the window",
        "break-45.1",
        "Sbj V Obj",
        "Physical COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(y,e) & Component-of(a,hammer) & Component-of(b,window) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & INTL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "763": [
        "The hairdryer dried the clothes",
        "other_cos-45.4",
        "Sbj V Obj",
        "Physical COS",
        "IncrementalAccomplishment",
        "COSNetwork",
        "Theme-of(y,e) & Component-of(a,hairdryer) & Component-of(b,clothes) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & INTL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "760": [
        "The stick hit the door open",
        "hit-18.1",
        "Sbj V Obj ResultP",
        "Physical COS",
        "DirectedAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,stick) & Component-of(b,door) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & INTL(q1) & COS(q2) & FRC(a,b)",
        "10012"
    ],
    "761": [
        "The hammer hit the window to pieces",
        "hit-18.1",
        "Sbj V Obj ResultP",
        "Physical COS",
        "DirectedAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,hammer) & Component-of(b,window) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & INTL(q1) & COS(q2) & FRC(a,b)",
        "10012"
    ],
    "773": [
        "Tony bent the rod",
        "bend-45.2",
        "Sbj V Obj",
        "Volitional COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(y,e) & Component-of(a,Tony) & Component-of(b,rod) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "774": [
        "Tony bent the rod into a U",
        "bend-45.2",
        "Sbj V Obj ResultP",
        "Volitional COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(y,e) & Component-of(a,Tony) & Component-of(b,rod) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "775": [
        "Tony folded the flaps open",
        "bend-45.2",
        "NP V NP ADJ",
        "Volitional COS",
        "IncrementalAccomplishment",
        "COSNetwork",
        "Theme-of(y,e) & Component-of(a,Tony) & Component-of(b,flaps) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "777": [
        "Tony broke the window",
        "break-45.1",
        "Sbj V Obj",
        "Volitional COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(y,e) & Component-of(a,Tony) & Component-of(b,window) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "778": [
        "Tony broke the piggy bank open",
        "break-45.1",
        "Sbj V Obj ResultP",
        "Volitional COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(y,e) & Component-of(a,Tony) & Component-of(b,bank) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "779": [
        "Tony broke the glass to pieces",
        "break-45.1",
        "Sbj V Obj ResultP",
        "Volitional COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(y,e) & Component-of(a,Tony) & Component-of(b,glass) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "807": [
        "I kneaded the dough into a loaf",
        "knead-26.5",
        "Sbj V Obj ResultP",
        "Volitional COS",
        "NonincrementalAccomplishment",
        "COSNetwork",
        "Theme-of(y,e) & Component-of(a,I) & Component-of(b,dough) & UndAct(a,i,j,q1) & NonIncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "809": [
        "Bill dried the clothes",
        "other_cos-45.4",
        "Sbj V Obj",
        "Volitional COS",
        "IncrementalAccomplishment",
        "COSNetwork",
        "Theme-of(y,e) & Component-of(a,Bill) & Component-of(b,clothes) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "813": [
        "Bill repaired the tractor",
        "remedy-45.7",
        "Sbj V Obj",
        "Volitional COS",
        "NonincrementalAccomplishment",
        "COSNetwork",
        "Theme-of(y,e) & Component-of(a,Bill) & Component-of(b,tractor) & UndAct(a,i,j,q1) & NonIncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "822": [
        "The pirates drowned the sailor",
        "suffocate-40.7",
        "Sbj V Obj",
        "Volitional COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(y,e) & Component-of(a,pirates) & Component-of(b,sailor) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "823": [
        "The pirate choked the sailor to death",
        "suffocate-40.7",
        "Sbj V Obj ResultP",
        "Volitional COS",
        "NonincrementalAccomplishment",
        "COSNetwork",
        "Theme-of(y,e) & Component-of(a,pirate) & Component-of(b,sailor) & UndAct(a,i,j,q1) & NonIncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "828": [
        "The witch turned him from a prince into a frog",
        "turn-26.6.1",
        "Sbj V Obj ResultP",
        "Volitional COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(y,e) & Component-of(a,witch) & Component-of(b,him) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "829": [
        "The witch turned him into a frog",
        "turn-26.6.1",
        "Sbj V Obj ResultP",
        "Volitional COS",
        "DirectedAchievement",
        "COSNetwork",
        "Theme-of(y,e) & Component-of(a,witch) & Component-of(b,him) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "909": [
        "I kneaded the dough",
        "knead-26.5",
        "Sbj V Obj",
        "Volitional Force",
        "UndirectedActivity",
        "COSNetwork",
        "Theme-of(y,e) & Component-of(a,I) & Component-of(b,dough) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & VOL(q1) & FRC(a,b)",
        "10015"
    ],
    "805": [
        "Paul kicked the door open",
        "hit-18.1",
        "Sbj V Obj ResultP",
        "Volitional COS",
        "DirectedAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Paul) & Component-of(b,door) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10012"
    ],
    "806": [
        "Paul hit the window to pieces",
        "hit-18.1",
        "Sbj V Obj ResultP",
        "Volitional COS",
        "DirectedAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Paul) & Component-of(b,window) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10012"
    ],
    "819": [
        "They spanked him dead",
        "spank-18.3",
        "Sbj V Obj ResultP",
        "Volitional COS",
        "NonincrementalAccomplishment",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,They) & Component-of(b,him) & UndAct(a,i,j,q1) & NonIncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10012"
    ],
    "820": [
        "They spanked him to death",
        "spank-18.3",
        "Sbj V Obj ResultP",
        "Volitional COS",
        "NonincrementalAccomplishment",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,They) & Component-of(b,him) & UndAct(a,i,j,q1) & NonIncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10012"
    ],
    "824": [
        "Paula sliced the bag open",
        "swat-18.2",
        "Sbj V Obj ResultP",
        "Volitional COS",
        "DirectedAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Paula) & Component-of(b,bag) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10012"
    ],
    "825": [
        "The cat clawed the couch to pieces",
        "swat-18.2",
        "Sbj V Obj ResultP",
        "Volitional COS",
        "NonincrementalAccomplishment",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,cat) & Component-of(b,couch) & UndAct(a,i,j,q1) & NonIncrAcc(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10012"
    ],
    "1504": [
        "Nora yanked the button loose",
        "push-12-1",
        "Sbj V Obj ResultP",
        "Volitional COS",
        "DirectedAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Nora) & Component-of(b,button) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & COS(q2) & FRC(a,b)",
        "10012"
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
  "843": [
    "Smith was inscribing the rings",
    "image_impression-25.1",
    "Sbj V Obj",
    "Volitional Provide",
    "DirectedActivity",
    "IllustrationNetwork",
    "Theme-of(y,e) & Component-of(a,Smith) & Component-of(b,NI) & Component-of(c,rings) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & UndAct(c,i,l,q3) & VOL(q1) & INTL(q2) & +MER(q3) & FRC(a,b) & PTH(b,c)",
    "10007"
  ],
  "849": [
    "Smith inscribed the ring with his name",
    "image_impression-25.1",
    "Sbj V Obj in/with Obl",
    "Volitional Provide",
    "IncrementalAccomplishment",
    "IllustrationNetwork",
    "Theme-of(y,e) & Component-of(a,Smith) & Component-of(b,name) & Component-of(c,ring) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & INTL(q2) & +MER(q3) & FRC(a,b) & PTH(b,c)",
    "10007"
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
  "853": [
        "The fountain gushed",
        "substance_emission-43.4-1",
        "Sbj V",
        "Physical Create",
        "UndirectedActivity",
        "EmissionNetwork",
        "Theme-of(y,e) & Component-of(a,fountain) & Component-of(b,NI) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & INTL(q1) & DES(q2) & FRC(a,b)",
        "10007"
  ],
  "855": [
        "The well gushed oil",
        "substance_emission-43.4",
        "Sbj V Obj",
        "Physical Create",
        "UndirectedActivity",
        "EmissionNetwork",
        "Theme-of(y,e) & Component-of(a,well) & Component-of(b,oil) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & INTL(q1) & DES(q2) & FRC(a,b)",
        "10007"
  ],
  "857": [
        "David dug a hole for me",
        "create-26.4",
        "Sbj V Obj for Obl",
        "Volitional Create Affect",
        "IncrementalAccomplishment",
        "CreationNetwork",
        "Theme-of(y,e) & Component-of(a,David) & Component-of(b,hole) & Component-of(c,me) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & DES(q2) & MPROP(q3) & FRC(a,b) & AFF(b,c)",
        "10007"
    ],
  "858": [
        "David dug me a hole",
        "create-26.4-1",
        "Sbj V Obj Obj",
        "Volitional Create Affect",
        "IncrementalAccomplishment",
        "CreationNetwork",
        "Theme-of(y,e) & Component-of(a,David) & Component-of(b,hole) & Component-of(c,me) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & DES(q2) & MPROP(q3) & FRC(a,b) & AFF(b,c)",
        "10007"
    ],
  "859": [
        "Claire drew a picture for me",
        "performance-26.7-1",
        "Sbj V Obj for Obl",
        "Volitional Create Affect",
        "IncrementalAccomplishment",
        "CreationNetwork",
        "Theme-of(y,e) & Component-of(a,Claire) & Component-of(b,picture) & Component-of(c,me) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & DES(q2) & MPROP(q3) & FRC(a,b) & AFF(b,c)",
        "10007"
    ],
  "860": [
        "Claire drew me a picture",
        "performance-26.7-1",
        "Sbj V Obj Obj",
        "Volitional Create Affect",
        "IncrementalAccomplishment",
        "CreationNetwork",
        "Theme-of(y,e) & Component-of(a,Claire) & Component-of(b,picture) & Component-of(c,me) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & DES(q2) & MPROP(q3) & FRC(a,b) & AFF(b,c)",
        "10007"
   ],
   "1149": [
        "Sandy sang a song for me",
        "performance-26.7-1",
        "Sbj V Obj for Obl",
        "Volitional Create Affect",
        "IncrementalAccomplishment",
        "CreationNetwork",
        "Theme-of(y,e) & Component-of(a,Sandy) & Component-of(b,song) & Component-of(c,me) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & DES(q2) & MPROP(q3) & FRC(a,b) & AFF(b,c)",
        "10007"
    ],
   "1150": [
        "Sandy sang me a song",
        "performance-26.7-1",
        "Sbj V Obj Obj",
        "Volitional Create Affect",
        "IncrementalAccomplishment",
        "CreationNetwork",
        "Theme-of(y,e) & Component-of(a,Sandy) & Component-of(b,song) & Component-of(c,me) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & DES(q2) & MPROP(q3) & FRC(a,b) & AFF(b,c)",
        "10007"
  ],
    "884": [
        "The crown sparkled with jewels",
        "light_emission-43.1",
        "Sbj V with/of Obl",
        "Autonomous Dynamic Texture",
        "UndirectedActivity",
        "EmissionNetwork",
        "Theme-of(x,e) & Component-of(a,jewels) & Component-of(b,crown) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & INTL(q1) & INTL(q2) & PTH(a,b)",
        "10007"
    ],
    "885": [
        "The room reeked of onions",
        "smell_emission-43.3",
        "Sbj V with/of Obl",
        "Autonomous Dynamic Texture",
        "UndirectedActivity",
        "EmissionNetwork",
        "Theme-of(x,e) & Component-of(a,onions) & Component-of(b,room) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & INTL(q1) & INTL(q2) & PTH(a,b)",
        "10007"
    ],
    "886": [
        "The street sang with horns",
        "sound_emission-43.2",
        "Sbj V with/of Obl",
        "Autonomous Dynamic Texture",
        "UndirectedActivity",
        "EmissionNetwork",
        "Theme-of(x,e) & Component-of(a,horns) & Component-of(b,street) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & INTL(q1) & INTL(q2) & PTH(a,b)",
        "10007"
    ],
    "1185": [
        "The tree sang with birds.",
        "animal_sounds-38",
        "Sbj V with/of Obl",
        "Autonomous Dynamic Texture",
        "UndirectedActivity",
        "EmissionNetwork",
        "Theme-of(x,e) & Component-of(a,birds) & Component-of(b,tree) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & INTL(q1) & INTL(q2) & PTH(a,b)",
        "10007"
    ],
  "866": [
    "Smith was inscribing",
    "image_impression-25.1",
    "Sbj V",
    "Volitional Create",
    "UndirectedActivity",
    "IllustrationNetwork",
    "Theme-of(y,e) & Component-of(a,Smith) & Component-of(b,NI) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & VOL(q1) & DES(q2) & FRC(a,b)",
    "10007"
    ],
  "867": [
    "Claire drew",
    "create-26.4-1",
    "Sbj V",
    "Volitional Create",
    "UndirectedActivity",
    "CreationNetwork",
    "Theme-of(y,e) & Component-of(a,Claire) & Component-of(b,NI) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & VOL(q1) & DES(q2) & FRC(a,b)",
    "10007"
    ],
  "868": [
    "Smith was scribbling",
    "scribble-25.2-1",
    "Sbj V",
    "Volitional Create",
    "UndirectedActivity",
    "IllustrationNetwork",
    "Theme-of(y,e) & Component-of(a,Smith) & Component-of(b,NI) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & VOL(q1) & DES(q2) & FRC(a,b)",
    "10007"
    ],
  "869": [
        "My wife had twins",
        "birth-28.2-1",
        "Sbj V Obj",
        "Volitional Create",
        "DirectedAchievement",
        "CreationNetwork",
        "Theme-of(y,e) & Component-of(a,wife) & Component-of(b,twins) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & DES(q2) & FRC(a,b)",
        "10007",
  ],
    "870": [
        "The dragon breathed fire",
        "breathe-40.1.2",
        "Sbj V Obj",
        "Volitional Create",
        "DirectedAchievement",
        "EmissionNetwork",
        "Theme-of(y,e) & Component-of(a,dragon) & Component-of(b,fire) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & DES(q2) & FRC(a,b)",
        "10007"
    ],
    "873": [
        "Paul exhaled a breath",
        "exhale-40.1.3-1",
        "Sbj V Obj",
        "Volitional Create",
        "DirectedAchievement",
        "EmissionNetwork",
        "Theme-of(y,e) & Component-of(a,Paul) & Component-of(b,breath) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & DES(q2) & FRC(a,b)",
        "10007"
    ],
    // "664": [
    //     "The grocery cart hit against the wall",
    //     "bump-18.4",
    //     "Sbj V PathP",
    //     "Autonomous Place",
    //     "CyclicAchievement",
    //     "Theme-of(x,e) & Component-of(a,cart) & Component-of(b,wall) & CycAch(a,i,j,q1) & InhStPh(b,i,k,q2) & +MER(q1) & EXIST(q2) & PTH(a,b)"
    // ],
    "901": [
        "The hammer crushed the marble",
        "carve-21.2-1",
        "Sbj V Obj",
        "Physical Force",
        "DirectedAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,hammer) & Component-of(b,marble) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & INTL(q1) & INTL(q2) & FRC(a,b)",
        "10012"
    ],
    "902": [
        "The stick hit the fence",
        "hit-18.1",
        "Sbj V Obj",
        "Physical Force",
        "CyclicAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,stick) & Component-of(b,fence) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & INTL(q1) & EXIST(q2) & FRC(a,b)",
        "10012"
    ],
    "903": [
        "The needle poked the cloth",
        "poke-19",
        "Sbj V Obj",
        "Physical Force",
        "CyclicAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,needle) & Component-of(b,cloth) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & INTL(q1) & EXIST(q2) & FRC(a,b)",
        "10012"
    ],
    "932": [
        "Paul breathed",
        "breathe-40.1.2",
        "Sbj V",
        "Volitional Create",
        "UndirectedActivity",
        "EmissionNetwork",
        "Theme-of(x,e) & Component-of(a,Paul) & UndAct(a,i,j,q1) & INTL(q1)",
        "10007"
    ],
    "933": [
        "Paul breathed a deep breath",
        "breathe-40.1.2-1",
        "Sbj V CogObj",
        "Volitional Create",
        "DirectedAchievement",
        "EmissionNetwork",
        "Theme-of(x,e) & Component-of(a,Paul) & DirAch(a,i,j,q1) & INTL(q1)",
        "10007"
    ],
    "935": [
        "The grocery carts thudded together",
        "bump-18.4-1",
        "Sbj V",
        "Autonomous Internal",
        "CyclicAchievement",
        "ForceNetwork",
        "Theme-of(x,e) & Component-of(a,carts) & CycAch(a,i,j,q1) & INTL(q1)",
        "10012"
    ],
  "872": [
        "David constructed a house",
        "create-26.4",
        "Sbj V Obj",
        "Volitional Create",
        "IncrementalAccomplishment",
        "CreationNetwork",
        "Theme-of(y,e) & Component-of(a,David) & Component-of(b,house) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & VOL(q1) & DES(q2) & FRC(a,b)",
        "10007"
  ],
  // "873": [
  //       "Paul exhaled a breath",
  //       "exhale-40.1.3-1",
  //       "Sbj V Obj",
  //       "Volitional Create",
  //       "DirectedAchievement",
  //       "CreationNetwork",
  //       "Theme-of(y,e) & Component-of(a,Paul) & Component-of(b,breath) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & DES(q2) & FRC(a,b)",
  //       "10007"
  // ],
  "875": [
        "Claire drew a picture",
        "performance-26.7-1",
        "Sbj V Obj",
        "Volitional Create",
        "DirectedAchievement",
        "CreationNetwork",
        "Theme-of(y,e) & Component-of(a,Claire) & Component-of(b,picture) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & DES(q2) & FRC(a,b)",
        "10007"
  ],
    "1151": [
        "Sandy sang",
        "performance-26.7-1",
        "Sbj V",
        "Volitional Create",
        "UndirectedActivity",
        "CreationNetwork",
        "Theme-of(y,e) & Component-of(a,Sandy) & Component-of(b,NI) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & VOL(q1) & DES(q2) & FRC(a,b)",
        "10007"
    ],
    "1152": [
        "He rehearsed",
        "rehearse-26.8-1",
        "Sbj V",
        "Volitional Create",
        "UndirectedActivity",
        "CreationNetwork",
        "Theme-of(y,e) & Component-of(a,He) & Component-of(b,NI) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & VOL(q1) & DES(q2) & FRC(a,b)",
        "10007"
    ],
    "1153": [
        "Sandy sang a song",
        "performance-26.7-1",
        "Sbj V Obj",
        "Volitional Create",
        "IncrementalAccomplishment",
        "CreationNetwork",
        "Theme-of(y,e) & Component-of(a,Sandy) & Component-of(b,song) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & VOL(q1) & DES(q2) & FRC(a,b)",
        "10007"
    ],
    "1154": [
        "He rehearsed the song",
        "rehearse-26.8",
        "Sbj V Obj",
        "Volitional Create",
        "IncrementalAccomplishment",
        "CreationNetwork",
        "Theme-of(y,e) & Component-of(a,He) & Component-of(b,song) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & VOL(q1) & DES(q2) & FRC(a,b)",
        "10007"
    ],
    "1155": [
        "He rehearsed singing the song",
        "rehearse-26.8",
        "Sbj V Obj",
        "Volitional Create",
        "IncrementalAccomplishment",
        "CreationNetwork",
        "Theme-of(y,e) & Component-of(a,He) & Component-of(b,song) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & VOL(q1) & DES(q2) & FRC(a,b)",
        "10007"
    ],
  "879": [
    "Roberto took notes",
    "scribble-25.2",
    "Sbj V Obj",
    "Volitional Create",
    "DirectedActivity",
    "IllustrationNetwork",
    "Theme-of(y,e) & Component-of(a,Roberto) & Component-of(b,notes) & UndAct(a,i,j,q1) & DirAct(b,i,k,q2) & VOL(q1) & DES(q2) & FRC(a,b)",
    "10007"
    ],
    "880": [
        "The stagehand flashed the lights",
        "light_emission-43.1",
        "Sbj V Obj",
        "Volitional Internal",
        "CyclicAchievement",
        "EmissionNetwork",
        "Theme-of(y,e) & Component-of(a,stagehand) & Component-of(b,lights) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & VOL(q1) & INTL(q2) & FRC(a,b)",
        "10007"
    ],
    "881": [
        "I buzzed the bell",
        "sound_emission-43.2",
        "Sbj V Obj",
        "Volitional Internal",
        "CyclicAchievement",
        "EmissionNetwork",
        "Theme-of(y,e) & Component-of(a,I) & Component-of(b,bell) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & VOL(q1) & INTL(q2) & FRC(a,b)",
        "10007"
    ],
    "891": [
        "Paula spanked the naughty child on the back with a paddle",
        "spank-18.3",
        "Sbj V Obj LocP with Obl",
        "Instrument Force XPR",
        "UndirectedActivity",
        "ForceNetwork",
        "Theme-of(z,e) & Component-of(a,Paula) & Component-of(b,paddle) & Component-of(c,child) & Component-of(d,back) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & UndAct(c,i,l,q3) & UndAct(d,i,m,q4) & VOL(q1) & INTL(q2) & EXIST(q3) & EXIST(q4) & FRC(a,b) & FRC(b,c) & XPR(c,d)",
        "10012"
    ],
    "904": [
        "Paula spanked the naughty child on the back",
        "spank-18.3",
        "Sbj V Obj LocP",
        "Volitional Force XPR",
        "UndirectedActivity",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Paula) & Component-of(b,child) & Component-of(c,back) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & UndAct(c,i,l,q3) & VOL(q1) & EXIST(q2) & EXIST(q3) & FRC(a,b) & XPR(c,d)",
        "10012"
    ],
    "905": [
        "Paula swatted Deirdre on the back",
        "swat-18.2",
        "Sbj V Obj LocP",
        "Volitional Force XPR",
        "CyclicAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Paula) & Component-of(b,Deirdre) & Component-of(c,back) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & CycAch(c,i,l,q3) & VOL(q1) & EXIST(q2) & EXIST(q3) & FRC(a,b) & XPR(c,d)",
        "10012"
    ],
    "906": [
        "Carol crushed the ice",
        "carve-21.2-1",
        "Sbj V Obj",
        "Volitional Force",
        "DirectedAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Carol) & Component-of(b,ice) & CycAch(a,i,j,q1) & CycAch(b,i,k,q2) & VOL(q1) & FRC(a,b)",
        "10012"
    ],
    "907": [
        "Carol carved the stone",
        "carve-21.2-2",
        "Sbj V Obj",
        "Volitional Force",
        "UndirectedActivity",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Carol) & Component-of(b,stone) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & VOL(q1) & FRC(a,b)",
        "10012"
    ],
    "908": [
        "Paula hit the ball",
        "hit-18.1",
        "Sbj V Obj",
        "Volitional Force",
        "CyclicAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Paula) & Component-of(b,ball) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & VOL(q1) & FRC(a,b)",
        "10012"
    ],
    "911": [
        "Steve pelted Anna",
        "pelt-17.2",
        "Sbj V Obj",
        "Volitional Force",
        "UndirectedActivity",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Steve) & Component-of(b,Anna) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & VOL(q1) & FRC(a,b)",
        "10012"
    ],
    "912": [
        "Allison poked the cloth",
        "poke-19",
        "Sbj V Obj",
        "Volitional Force",
        "CyclicAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Allison) & Component-of(b,cloth) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & VOL(q1) & FRC(a,b)",
        "10012"
    ],
    "913": [
        "Paula spanked the child",
        "spank-18.3",
        "Sbj V Obj",
        "Volitional Force",
        "UndirectedActivity",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Paula) & Component-of(b,child) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & VOL(q1) & FRC(a,b)",
        "10012"
    ],
    "915": [
        "Paula swatted the fly",
        "swat-18.2",
        "Sbj V Obj",
        "Volitional Force",
        "CyclicAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Paula) & Component-of(b,fly) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & VOL(q1) & FRC(a,b)",
        "10012"
    ],
    "916": [
        "Carrie touched the cat",
        "touch-20",
        "Sbj V Obj",
        "Volitional Force",
        "CyclicAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Carrie) & Component-of(b,cat) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & VOL(q1) & FRC(a,b)",
        "10012"
    ],
    "917": [
        "Carrie touched his shoulder",
        "touch-20-1",
        "Sbj V Obj",
        "Volitional Force",
        "CyclicAchievement",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,Carrie) & Component-of(b,shoulder) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & VOL(q1) & FRC(a,b)",
        "10012"
    ],
    "924": [
        "The jewel sparkled",
        "light_emission-43.1",
        "Sbj V",
        "Autonomous Internal",
        "UndirectedActivity",
        "EmissionNetwork",
        "ForceNetwork",
        "Theme-of(x,e) & Component-of(a,jewel) & UndAct(a,i,j,q1) & INTL(q1)",
        "10007"
    ],
    "925": [
        "The onions reeked",
        "smell_emission-43.3",
        "Sbj V",
        "Autonomous Internal",
        "UndirectedActivity",
        "EmissionNetwork",
        "Theme-of(x,e) & Component-of(a,onions) & UndAct(a,i,j,q1) & INTL(q1)",
        "10007"
    ],
    "926": [
        "The room reeked",
        "smell_emission-43.3",
        "Sbj V",
        "Autonomous Internal",
        "UndirectedActivity",
        "EmissionNetwork",
        "Theme-of(x,e) & Component-of(a,room) & UndAct(a,i,j,q1) & INTL(q1)",
        "10007"
    ],
    "927": [
        "The door hinges squeaked",
        "sound_emission-43.2",
        "Sbj V",
        "Autonomous Internal",
        "UndirectedActivity",
        "EmissionNetwork",
        "Theme-of(x,e) & Component-of(a,door hinges) & UndAct(a,i,j,q1) & INTL(q1)",
        "10007"
    ],
    "1184": [
        "The dog barked",
        "animal_sounds-38",
        "Sbj V",
        "Autonomous Internal",
        "UndirectedActivity",
        "EmissionNetwork",
        "Theme-of(x,e) & Component-of(a,dog) & UndAct(a,i,j,q1) & INTL(q1)",
        "10007"
    ],
  "936": [
        "The cat kittened",
        "calve-28.1",
        "Sbj V",
        "Autonomous Internal",
        "DirectedAchievement",
        "CreationNetwork",
        "Theme-of(x,e) & Component-of(a,cat) & DirAch(a,i,j,q1) & INTL(q1)",
        "10007"
  ],
  "947": [
        "Paul exhaled",
        "exhale-40.1.3-1",
        "Sbj V",
        "Autonomous Internal",
        "DirectedAchievement",
        "CreationNetwork",
        "Theme-of(x,e) & Component-of(a,Paul) & DirAch(a,i,j,q1) & INTL(q1)",
        "10007"
  ],
  "976": [
        "They multiplied",
        "birth-28.2",
        "Sbj V",
        "Autonomous Internal",
        "DirectedActivity",
        "CreationNetwork",
        "Theme-of(x,e) & Component-of(a,They) & DirAct(a,i,j,q1) & VOL/INTL(q1)",
        "10007"
  ],
    "1007": [
        "There sparkled a magnificent diamond on his finger",
        "light_emission-43.1",
        "Sbj V LocP",
        "Autonomous Location",
        "UndirectedActivity",
        "EmissionNetwork",
        "Theme-of(x,e) & Component-of(a,diamond) & Component-of(b,finger) & UndAct(a,i,j,q1) & InhStPh(b,i,k,q2) & INTL(q1) & EXIST(q2) & PTH(a,b)",
        "10007"
    ],
    "1008": [
        "Jewels sparkled on the crown",
        "light_emission-43.1",
        "Sbj V LocP",
        "Autonomous Location",
        "UndirectedActivity",
        "EmissionNetwork",
        "Theme-of(x,e) & Component-of(a,Jewels) & Component-of(b,crown) & UndAct(a,i,j,q1) & InhStPh(b,i,k,q2) & INTL(q1) & EXIST(q2) & PTH(a,b)",
        "10007"
    ],
    "1009": [
        "On his finger there sparkled a magnificent diamond",
        "light_emission-43.1",
        "Sbj V LocP",
        "Autonomous Location",
        "UndirectedActivity",
        "EmissionNetwork",
        "Theme-of(x,e) & Component-of(a,diamond) & Component-of(b,finger) & UndAct(a,i,j,q1) & InhStPh(b,i,k,q2) & INTL(q1) & EXIST(q2) & PTH(a,b)",
        "10007"
    ],
    "1016": [
        "In the hallway ticked a grandfather clock",
        "sound_emission-43.2",
        "Sbj V LocP",
        "Autonomous Location",
        "CyclicAchievement",
        "EmissionNetwork",
        "Theme-of(x,e) & Component-of(a,clock) & Component-of(b,hallway) & CycAch(a,i,j,q1) & InhStPh(b,i,k,q2) & INTL(q1) & EXIST(q2) & PTH(a,b)",
        "10007"
    ],
    "1017": [
        "There ticked a grandfather clock in the hallway",
        "sound_emission-43.2",
        "Sbj V LocP",
        "Autonomous Location",
        "CyclicAchievement",
        "EmissionNetwork",
        "Theme-of(x,e) & Component-of(a,clock) & Component-of(b,hallway) & CycAch(a,i,j,q1) & InhStPh(b,i,k,q2) & INTL(q1) & EXIST(q2) & PTH(a,b)",
        "10007"
    ],
    "1018": [
        "Horns beeped in the street",
        "sound_emission-43.2",
        "Sbj V LocP",
        "Autonomous Location",
        "UndirectedActivity",
        "EmissionNetwork",
        "Theme-of(x,e) & Component-of(a,Horns) & Component-of(b,street) & UndAct(a,i,j,q1) & InhStPh(b,i,k,q2) & INTL(q1) & EXIST(q2) & PTH(a,b)",
        "10007"
    ],
    "1025": [
        "There bubbled a fragrant stew over the fire",
        "substance_emission-43.4-1",
        "Sbj V LocP",
        "Autonomous Location",
        "UndirectedActivity",
        "EmissionNetwork",
        "Theme-of(x,e) & Component-of(a,stew) & Component-of(b,fire) & UndAct(a,i,j,q1) & InhStPh(b,i,k,q2) & INTL(q1) & EXIST(q2) & PTH(a,b)",
        "10007"
    ],
    "1026": [
        "Over the fire bubbled a fragrant stew",
        "substance_emission-43.4-1",
        "Sbj V LocP",
        "Autonomous Location",
        "UndirectedActivity",
        "EmissionNetwork",
        "Theme-of(x,e) & Component-of(a,stew) & Component-of(b,fire) & UndAct(a,i,j,q1) & InhStPh(b,i,k,q2) & INTL(q1) & EXIST(q2) & PTH(a,b)",
        "10007"
    ],
  "1156": [
    "The secretary transcribed the speech",
    "transcribe-25.4",
    "Sbj V Obj",
    "Volitional Create",
    "IncrementalAccomplishment",
    "IllustrationNetwork",
    "Theme-of(y,e) & Component-of(a,secretary) & Component-of(b,speech) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & VOL(q1) & DES(q2) & FRC(a,b)",
    "10007"
    ],
    "1181": [
        "Birds sang in the trees",
        "animal_sounds-38",
        "Sbj V LocP",
        "Autonomous Location",
        "UndirectedActivity",
        "EmissionNetwork",
        "Theme-of(x,e) & Component-of(a,birds) & Component-of(b,trees) & UndAct(a,i,j,q1) & InhStPh(b,i,k,q2) & INTL(q1) & EXIST(q2) & PTH(a,b)",
        "10007"
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
    "Theme-of(x,e) & Component-of(a,books) & Component-of(b,table+floor) & IncrAcc(a,i,j,q1) & InhStPh(b,i,k,q2) & MOT(q1) & EXIST(q2) & PTH(a,b)",
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
    "1043": [
        "Water gushed through the streets",
        "substance_emission-43.4-1",
        "Sbj V PathP",
        "Autonomous Motion",
        "UndirectedActivity",
        "EmissionNetwork",
        "Theme-of(x,e) & Component-of(a,Water) & Component-of(b,streets) & UndAct(a,i,j,q1) & InhStPh(b,i,k,q2) & MOT(q1) & EXIST(q2) & PTH(a,b)",
        "10007"
    ],
    "1044": [
        "The water seeped out",
        "substance_emission-43.4-1",
        "Sbj V PathP",
        "Autonomous Remove",
        "DirectedActivity",
        "EmissionNetwork",
        "Theme-of(x,e) & Component-of(a,water) & Component-of(b,out) & DirAct(a,i,j,q1) & InhStPh(b,i,k,q2) & MOT(q1) & EXIST(q2) & PTH(a,b)",
        "10007"
    ],
    "1045": [
        "Oil gushed from the well",
        "substance_emission-43.4-1",
        "Sbj V PathP",
        "Autonomous Remove",
        "DirectedActivity",
        "EmissionNetwork",
        "Theme-of(x,e) & Component-of(a,Oil) & Component-of(b,well) & DirAct(a,i,j,q1) & InhStPh(b,i,k,q2) & MOT(q1) & EXIST(q2) & PTH(a,b)",
        "10007"
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
    "Theme-of(x,e) & Component-of(a,He) & Component-of(b,France+Colorado) & DirAch(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
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
  "1079": [
    "They waltzed across the room and into the hallway",
    "waltz-51.5",
    "Sbj V PathP",
    "Self-volitional Motion",
    "IncrementalAccomplishment",
    "GeneralMotionNetwork",
    "Theme-of(x,e) & Component-of(a,They) & Component-of(b,room+hallway) & IncrAcc(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/MOT(q1) & EXIST(q2) & PTH(a,b)",
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
    "Theme-of(y,e) & Component-of(a,Nora) & Component-of(b,book) & Component-of(c,home+meeting) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & InhStPhPunct(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
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
    "Theme-of(y,e) & Component-of(a,Amanda) & Component-of(b,package) & Component-of(c,home+New York) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10003"
  ],
  "1092": [
    "Amanda carried the package to New York from home",
    "carry-11.4",
    "Sbj V Obj PathP",
    "Volitional Motion",
    "IncrementalAccomplishment",
    "CarryMotionNetwork",
    "Theme-of(y,e) & Component-of(a,Amanda) & Component-of(b,package) & Component-of(c,home+New York) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
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
  // "1099": [
  //   "Amanda drove Penny to New York from home",
  //   "drive-11.5",
  //   "Sbj V Obj PathP",
  //   "Volitional Motion",
  //   "IncrementalAccomplishment",
  //   "VehicularMotionNetwork",
  //   "Theme-of(y,e) & Component-of(a,Amanda) & Component-of(b,Penny) & Component-of(c,home+New York) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
  //   "10003"
  //  ],
  // "1100": [
  //   "Amanda drove the package from home to New York",
  //   "drive-11.5",
  //   "Sbj V Obj PathP",
  //   "Volitional Motion",
  //   "IncrementalAccomplishment",
  //   "VehicularMotionNetwork",
  //   "Theme-of(y,e) & Component-of(a,Amanda) & Component-of(b,package) & Component-of(c,home+New York) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
  //   "10003"
  //  ],
  //  "1104": [
  //       "Amanda trucked the package from Philadelphia to her mother's house",
  //       "drive-11.5-1",
  //       "Sbj V Obj PathP",
  //       "Volitional Motion",
  //       "IncrementalAccomplishment",
  //       "VehicularMotionNetwork",
  //       "Theme-of(y,e) & Component-of(a,Amanda) & Component-of(b,package) & Component-of(c,Philadelphia+house) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
  //       "10003"
  //  ],
  //  "1105": [
  //       "Amanda trucked the package to her mother's house from Philadelphia",
  //       "drive-11.5-1",
  //       "Sbj V Obj PathP",
  //       "Volitional Motion",
  //       "IncrementalAccomplishment",
  //       "VehicularMotionNetwork",
  //       "Theme-of(y,e) & Component-of(a,Amanda) & Component-of(b,package) & Component-of(c,Philadelphia+house) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
  //       "10003"
  //  ],
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
    "Theme-of(y,e) & Component-of(a,Nora) & Component-of(b,book) & Component-of(c,Paris+London) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & InhStPhPunct(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    "10003"
  ],
  "1117": [
        "Carla slid the books",
        "slide-11.2",
        "Sbj V Obj",
        "Volitional Motion",
        "IncrementalAccomplishment",
        "GeneralMotionNetwork",
        "Theme-of(y,e) & Component-of(a,Carla) & Component-of(b,books) & Component-of(c,NI) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
        "10003"
  ],
  "1118": [
        "Carla slid the books across the table",
        "slide-11.2",
        "Sbj V Obj PathP",
        "Volitional Motion",
        "IncrementalAccomplishment",
        "GeneralMotionNetwork",
        "Theme-of(y,e) & Component-of(a,Carla) & Component-of(b,books) & Component-of(c,table) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
        "10003"
   ],
  "1119": [
        "Carla slid the books from one end of the table to the other",
        "slide-11.2",
        "Sbj V Obj PathP",
        "Volitional Motion",
        "IncrementalAccomplishment",
        "GeneralMotionNetwork",
        "Theme-of(y,e) & Component-of(a,Carla) & Component-of(b,books) & Component-of(c,end+other) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
        "10003"
   ],
  "1120": [
        "Carla slid the books to the floor",
        "slide-11.2",
        "Sbj V Obj PathP",
        "Volitional Motion",
        "IncrementalAccomplishment",
        "GeneralMotionNetwork",
        "Theme-of(y,e) & Component-of(a,Carla) & Component-of(b,books) & Component-of(c,floor) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
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
    // "1123": [
    //     "I threw the package away",
    //     "throw-17.1",
    //     "Sbj V Obj",
    //     "Volitional Motion",
    //     "DirectedAchievement",
    //     "ThrowMotionNetwork",
    //     "Theme-of(y,e) & Component-of(a,I) & Component-of(b,package) & Component-of(c,NI) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
    //     "10003"
    // ],
    "1124": [
        "Steve tossed the ball from the corner to the garden",
        "throw-17.1",
        "Sbj V Obj PathP",
        "Volitional Motion",
        "DirectedAchievement",
        "ThrowMotionNetwork",
        "Theme-of(y,e) & Component-of(a,Steve) & Component-of(b,ball) & Component-of(c,corner+garden) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & InhStPhPunct(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
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
    "1129": [
        "He waltzed her across the floor",
        "waltz-51.5",
        "Sbj V Obj PathP",
        "Volitional Motion",
        "IncrementalAccomplishment",
        "GeneralMotionNetwork",
        "Theme-of(y,e) & Component-of(a,He) & Component-of(b,her) & Component-of(c,floor) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & MOT(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
        "10003"
    ],
    "1135": [
        "Susan cut the recipes from the magazine with a sharp knife",
        "cut-21.1",
        "Sbj V Obj PathP with Obl",
        "Instrument Remove",
        "IncrementalAccomplishment",
        "CausativeCOSNetwork",
        "Theme-of(z,e) & Component-of(a,Susan) & Component-of(b,knife) & Component-of(c,recipes) & Component-of(d,magazine) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & IncrAcc(c,i,l,q3) & InhStPh(d,i,m,q4) & VOL(q1) & -MER(q3) & FRC(a,b) & FRC(b,c) & PTH(c,d)",
        "10015"
    ],
    "1170": [
        "The cotton absorbed the water.",
        "absorb-39.8",
        "Sbj V Obj",
        "Physical COS",
        "IncrementalAccomplishment",
        "AbsorbNetwork",
        "Theme-of(y,e) & Component-of(a,cotton) & Component-of(b,water) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & INTL(q1) & COS(q2) & FRC(a,b)",
        "10015"
    ],
    "1328": [
        "The potatoes baked to a crisp",
        "cooking-45.3",
        "Sbj V ResultP",
        "Autonomous COS",
        "IncrementalAccomplishment",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,potatoes) & IncrAcc(a,i,j,q1) & COS(q1)",
        "10015"
    ],
    "1329": [
        "The Idaho potatoes baked beautifully",
        "cooking-45.3",
        "Sbj V",
        "Autonomous COS",
        "IncrementalAccomplishment",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,potatoes) & IncrAcc(a,i,j,q1) & COS(q1)",
        "10015"
    ],
    "1330": [
        "The potatoes baked",
        "cooking-45.3",
        "Sbj V",
        "Autonomous COS",
        "IncrementalAccomplishment",
        "CausativeCOSNetwork",
        "Theme-of(y,e) & Component-of(a,potatoes) & IncrAcc(a,i,j,q1) & COS(q1)",
        "10015"
    ],
    "1506": [
        "She squeezed the toothpaste out.",
        "push-12-1-1",
        "Sbj V Obj",
        "Volitional Remove",
        "IncrementalAccomplishment",
        "ForceNetwork",
        "Theme-of(y,e) & Component-of(a,she) & Component-of(b,toothpaste) & Component-of(c,NI) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & -MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)",
        "10012"
    ],
    "10001": {"networks": ["RemoveDepriveNetwork"], "name": "Remove/Deprive"},
    "10002": {"networks": ["ProvidePlaceNetwork"], "name": "Provide/Place"},
    "10003": {"networks": ["GeneralMotionNetwork", "ThrowMotionNetwork", "SendMotionNetwork", "CarryMotionNetwork", "PursuitMotionNetwork"], "name": "Motion"},
    "10004": {"networks": ["GeneralMotionNetwork"], "name": "Motion"},
    "10005": {"networks": ["CarryMotionNetwork"], "name": "Carry motion"},
    "10006": {"networks": ["PursuitMotionNetwork"], "name": "Pursuit motion"},
    "10007": {"networks": ["IllustrationNetwork", "CreationNetwork", "EmissionNetwork", "FormNetwork"], "name": "Illustration"},
    "10008": {"networks": ["IllustrationNetwork", "CreationNetwork", "EmissionNetwork"], "name": "Illustration+Creation+Emission"},
    "10009": {"networks": ["CreationNetwork"], "name": "Creation"},
    "10010": {"networks": ["CreationNetwork", "EmissionNetwork"], "name": "Creation+Emission"},
    "10011": {"networks": ["EmissionNetwork"], "name": "Emission"},
    "10012": {"networks": ["ForceNetwork", "ConstrainNetwork"], "name": "Force+Constrain"},
    "10013": {"networks": ["ForceNetwork"], "name": "Force"},
    "10014": {"networks": ["ConstrainNetwork"], "name": "Constrain"},
    "10015": {"networks": ["COSNetwork", "CausativeCOSNetwork", "AbsorbNetwork", "IngestionNetwork", "FeedingNetwork", "HurtNetwork"], "name": "COS"},
    "10016": {"networks": ["COSNetwork", "CausativeCOSNetwork"], "name": "COS+CausativeCOS"},
    "10017": {"networks": ["COSNetwork"], "name": "COS"},
    "10018": {"networks": ["COSNetwork", "CausativeCOSNetwork", "AbsorbNetwork"], "name": "COS+CausativeCOS+Absorb"},
    "10019": {"networks": ["COSNetwork", "CausativeCOSNetwork", "AbsorbNetwork", "IngestionNetwork"], "name": "COS+CausativeCOS+Absorb+Ingest"},
    "10020": {"networks": ["CausativeCOSNetwork", "AbsorbNetwork"], "name": "CausativeCOS+Absorb"},
    "10021": {"networks": ["CausativeCOSNetwork"], "name": "CausativeCOS"},
    "10022": {"networks": ["CausativeCOSNetwork", "IngestionNetwork"], "name": "CausativeCOS+Ingest"},
    "10023": {"networks": ["AbsorbNetwork"], "name": "Absorb"},
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
    "11013": ["Volitional Place", "IllustrationNetwork"],
    "11014": ["Volitional Create", "IllustrationNetwork"],
    "11015": ["Volitional Provide", "IllustrationNetwork"],
    "11016": ["Volitional Create", "CreationNetwork"],
    "11017": ["Volitional Create Affect", "CreationNetwork"],
    "11018": ["Autonomous Internal", "CreationNetwork"],
    "11019": ["Physical Create", "EmissionNetwork"],
    "11020": ["Volitional Create", "EmissionNetwork"],
    "11021": ["Autonomous Dynamic Texture", "EmissionNetwork"],
    "11022": ["Autonomous Internal", "EmissionNetwork"],
    "11023": ["Autonomous Location", "EmissionNetwork"],
    "11024": ["Volitional Internal", "EmissionNetwork"],
    "11025": ["Autonomous Motion", "EmissionNetwork"],
    "11026": ["Autonomous Remove", "EmissionNetwork"],
    "11027": ["Volitional Deprive", "EmissionNetwork"],
    "11028": ["Volitional Place", "EmissionNetwork"],
    "11029": ["Physical Place", "EmissionNetwork"],
    "11030": ["Volitional Attend", "EmissionNetwork"],
    "11031": ["Volitional Force", "ForceNetwork"],
    "11032": ["Volitional Force XPR", "ForceNetwork"],
    "11033": ["Instrument Force", "ForceNetwork"],
    "11034": ["Instrument Force XPR", "ForceNetwork"],
    "11035": ["Physical Force", "ForceNetwork"],
    "11036": ["Manipulate Force", "ForceNetwork"],
    "11037": ["Volitional COS", "ForceNetwork"],
    "11038": ["Instrument COS", "ForceNetwork"],
    "11039": ["Physical COS", "ForceNetwork"],
    "11040": ["Volitional Place", "ForceNetwork"],
    "11041": ["Volitional Remove", "ForceNetwork"],
    "11042": ["Volitional Attend", "ForceNetwork"],
    "11043": ["Instrument Attend", "ForceNetwork"],
    "11044": ["Volitional Internal", "ForceNetwork"],
    "11045": ["Autonomous Internal", "ForceNetwork"],
    "11046": ["Physical Create", "ForceNetwork"],
    "11047": ["Volitional Motion", "ForceNetwork"],
    "11048": ["Volitional Force", "ConstrainNetwork"],
    "11049": ["Autonomous COS", "COSNetwork"],
    "11050": ["Cause COS", "COSNetwork"],
    "11051": ["Physical COS", "COSNetwork"],
    "11052": ["Volitional COS", "COSNetwork"],
    "11053": ["Instrument COS", "COSNetwork"],
    "11054": ["Autonomous COS", "CausativeCOSNetwork"],
    "11055": ["Physical COS", "CausativeCOSNetwork"],
    "11056": ["Instrument COS", "CausativeCOSNetwork"],
    "11057": ["Volitional COS", "CausativeCOSNetwork"],
    "11058": ["Autonomous Internal", "CausativeCOSNetwork"],
    "11059": ["Instrument Remove", "CausativeCOSNetwork"],
    "11060": ["Volitional Remove", "CausativeCOSNetwork"],
    "11061": ["Instrument Attend", "CausativeCOSNetwork"],
    "11062": ["Physical COS", "AbsorbNetwork"],
    "11063": ["Physical Remove", "AbsorbNetwork"],
    "11064": ["Autonomous Internal", "AbsorbNetwork"],
    "11065": ["Volitional COS", "AbsorbNetwork"],
    "12003": { "child": "Volitional Motion", "parentNetwork": "10003", "generalNetwork": "10003"},
    "12004": { "child": "Autonomous Motion", "parentNetwork": "10004", "generalNetwork": "10003"},
    "12005": { "child": "Self-volitional Motion", "parentNetwork": "10004", "generalNetwork": "10003"},
    "12006": { "child": "Physical Motion", "parentNetwork": "10005", "generalNetwork": "10003"},
    "12007": { "child": "Mutual Motion", "parentNetwork": "10006", "generalNetwork": "10003"},
    "12008": { "child": "Mutual", "parentNetwork": "10006", "generalNetwork": "10003"},
    "12009": { "child": "Volitional Place", "parentNetwork": "10007", "generalNetwork": "10007"},
    "12010": { "child": "Volitional Create", "parentNetwork": "10008", "generalNetwork": "10007"},
    "12011": { "child": "Volitional Provide", "parentNetwork": "10007", "generalNetwork": "10007"},
    "12012": { "child": "Volitional Create Affect", "parentNetwork": "10009", "generalNetwork": "10007"},
    "12013": { "child": "Autonomous Internal", "parentNetwork": "10010", "generalNetwork": "10007"},
    "12014": { "child": "Physical Create", "parentNetwork": "10011", "generalNetwork": "10007"},
    "12015": { "child": "Autonomous Dynamic Texture", "parentNetwork": "10011", "generalNetwork": "10007"},
    "12016": { "child": "Autonomous Location", "parentNetwork": "10011", "generalNetwork": "10007"},
    "12017": { "child": "Volitional Internal", "parentNetwork": "10011", "generalNetwork": "10007"},
    "12018": { "child": "Autonomous Motion", "parentNetwork": "10011", "generalNetwork": "10007"},
    "12019": { "child": "Autonomous Remove", "parentNetwork": "10011", "generalNetwork": "10007"},
    "12020": { "child": "Volitional Deprive", "parentNetwork": "10011", "generalNetwork": "10007"},
    "12021": { "child": "Volitional Place", "parentNetwork": "10011", "generalNetwork": "10007"},
    "12022": { "child": "Physical Place", "parentNetwork": "10011", "generalNetwork": "10007"},
    "12023": { "child": "Volitional Attend", "parentNetwork": "10011", "generalNetwork": "10007"},
    "12024": { "child": "Volitional Force", "parentNetwork": "10012", "generalNetwork": "10012"},
    "12025": { "child": "Volitional Force XPR", "parentNetwork": "10013", "generalNetwork": "10012"},
    "12026": { "child": "Instrument Force", "parentNetwork": "10013", "generalNetwork": "10012"},
    "12027": { "child": "Instrument Force XPR", "parentNetwork": "10013", "generalNetwork": "10012"},
    "12028": { "child": "Physical Force", "parentNetwork": "10013", "generalNetwork": "10012"},
    "12029": { "child": "Manipulate Force", "parentNetwork": "10013", "generalNetwork": "10012"},
    "12030": { "child": "Volitional COS", "parentNetwork": "10013", "generalNetwork": "10012"},
    "12031": { "child": "Instrument COS", "parentNetwork": "10013", "generalNetwork": "10012"},
    "12032": { "child": "Physical COS", "parentNetwork": "10013", "generalNetwork": "10012"},
    "12033": { "child": "Volitional Place", "parentNetwork": "10013", "generalNetwork": "10012"},
    "12034": { "child": "Volitional Remove", "parentNetwork": "10013", "generalNetwork": "10012"},
    "12035": { "child": "Volitional Attend", "parentNetwork": "10013", "generalNetwork": "10012"},
    "12036": { "child": "Instrument Attend", "parentNetwork": "10013", "generalNetwork": "10012"},
    "12037": { "child": "Volitional Internal", "parentNetwork": "10013", "generalNetwork": "10012"},
    "12038": { "child": "Autonomous Internal", "parentNetwork": "10013", "generalNetwork": "10012"},
    "12039": { "child": "Physical Create", "parentNetwork": "10013", "generalNetwork": "10012"},
    "12040": { "child": "Volitional Motion", "parentNetwork": "10013", "generalNetwork": "10012"},
    "12041": { "child": "Volitional Force", "parentNetwork": "10014", "generalNetwork": "10012"},
    "12042": { "child": "Autonomous COS", "parentNetwork": "10016", "generalNetwork": "10015"},
    "12043": { "child": "Cause COS", "parentNetwork": "10017", "generalNetwork": "10015"},
    "12044": { "child": "Physical COS", "parentNetwork": "10018", "generalNetwork": "10015"},
    "12045": { "child": "Volitional COS", "parentNetwork": "10019", "generalNetwork": "10015"},
    "12046": { "child": "Instrument COS", "parentNetwork": "10016", "generalNetwork": "10015"},
    "12047": { "child": "Autonomous Internal", "parentNetwork": "10020", "generalNetwork": "10015"},
    "12048": { "child": "Instrument Remove", "parentNetwork": "10021", "generalNetwork": "10015"},
    "12049": { "child": "Volitional Remove", "parentNetwork": "10022", "generalNetwork": "10015"},
    "12050": { "child": "Instrument Attend", "parentNetwork": "10021", "generalNetwork": "10015"},
    "12051": { "child": "Physical Remove", "parentNetwork": "10023", "generalNetwork": "10015"},
    //"12047": { "child": "Autonomous COS", "parentNetwork": "10016", "generalNetwork": "10015"},
    //"12006": { "child": "Autonomous COS", "parent": "10004"},
    //"12007": { "child": "Volitional COS", "parent": "10004"},
    //"12008": { "child": "Volitional Internal", "parentNetwork": "10003", "generalNetwork": "10003"}
}

/*

Steps to add diagrams
(1) Add sentences to events data structure
(2) Modify features of sentences (last feature is id of parent network graph)
(3) Create parent network graph in list at end of events (10000s) (if not already present)
(3.5) If a FD schema has multiple parents (e.g. Volitional Motion, Volitional Create), the parent network graph includes only those (like 10008)
(4) Add child-parent relation to events (11000s)
(5) Add mapping to events (12000s)
(6) Add mapping to getSpecificNetworkTableIdentifierForURL
(7) Add diagram to function getNetwork
(8) Add argument to diagram in getNetwork: argTextToAdd
(9) Add call to return diagram at end of getNetwork
(10) If general network is not created, add abbreviated diagrams to getMultipleNetworkPage
(11) Add parents to networks in getMultipleNetworkPage
(12) Check

Steps for new network
(1) add full network (or partial) in 10000s
(2) Add individual networks to getMultipleNetworkPage

*/

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
    } else if (FDCategory === "Volitional Place" && generalNetworkName == "IllustrationNetwork") {
        var identifierToMappingURL = "11013";
        var identifierToConstructionURL = "12009";
    } else if (FDCategory === "Volitional Create" && generalNetworkName == "IllustrationNetwork") {
        var identifierToMappingURL = "11014";
        var identifierToConstructionURL = "12010";
    } else if (FDCategory === "Volitional Provide" && generalNetworkName == "IllustrationNetwork") {
        var identifierToMappingURL = "11015";
        var identifierToConstructionURL = "12011";
    } else if (FDCategory === "Volitional Create" && generalNetworkName == "CreationNetwork") {
        var identifierToMappingURL = "11016";
        var identifierToConstructionURL = "12010";
    } else if (FDCategory === "Volitional Create Affect" && generalNetworkName == "CreationNetwork") {
        var identifierToMappingURL = "11017";
        var identifierToConstructionURL = "12012";
    } else if (FDCategory === "Autonomous Internal" && generalNetworkName == "CreationNetwork") {
        var identifierToMappingURL = "11018";
        var identifierToConstructionURL = "12013";
    } else if (FDCategory === "Physical Create" && generalNetworkName == "EmissionNetwork") {
        var identifierToMappingURL = "11019";
        var identifierToConstructionURL = "12014";
    } else if (FDCategory === "Volitional Create" && generalNetworkName == "EmissionNetwork") {
        var identifierToMappingURL = "11020";
        var identifierToConstructionURL = "12010";
    } else if (FDCategory === "Autonomous Dynamic Texture" && generalNetworkName == "EmissionNetwork") {
        var identifierToMappingURL = "11021";
        var identifierToConstructionURL = "12015";
    } else if (FDCategory === "Autonomous Internal" && generalNetworkName == "EmissionNetwork") {
        var identifierToMappingURL = "11022";
        var identifierToConstructionURL = "12013";
    } else if (FDCategory === "Autonomous Location" && generalNetworkName == "EmissionNetwork") {
        var identifierToMappingURL = "11023";
        var identifierToConstructionURL = "12016";
    } else if (FDCategory === "Volitional Internal" && generalNetworkName == "EmissionNetwork") {
        var identifierToMappingURL = "11024";
        var identifierToConstructionURL = "12017";
    } else if (FDCategory === "Autonomous Motion" && generalNetworkName == "EmissionNetwork") {
        var identifierToMappingURL = "11025";
        var identifierToConstructionURL = "12018";
    } else if (FDCategory === "Autonomous Remove" && generalNetworkName == "EmissionNetwork") {
        var identifierToMappingURL = "11026";
        var identifierToConstructionURL = "12019";
    } else if (FDCategory === "Volitional Deprive" && generalNetworkName == "EmissionNetwork") {
        var identifierToMappingURL = "11027";
        var identifierToConstructionURL = "12020";
    } else if (FDCategory === "Volitional Place" && generalNetworkName == "EmissionNetwork") {
        var identifierToMappingURL = "11028";
        var identifierToConstructionURL = "12021";
    } else if (FDCategory === "Physical Place" && generalNetworkName == "EmissionNetwork") {
        var identifierToMappingURL = "11029";
        var identifierToConstructionURL = "12022";
    } else if (FDCategory === "Volitional Attend" && generalNetworkName == "EmissionNetwork") {
        var identifierToMappingURL = "11030";
        var identifierToConstructionURL = "12023";
    } else if (FDCategory === "Volitional Force" && generalNetworkName == "ForceNetwork") {
        var identifierToMappingURL = "11031";
        var identifierToConstructionURL = "12024";
    } else if (FDCategory === "Volitional Force XPR" && generalNetworkName == "ForceNetwork") {
        var identifierToMappingURL = "11032";
        var identifierToConstructionURL = "12025";
    } else if (FDCategory === "Instrument Force" && generalNetworkName == "ForceNetwork") {
        var identifierToMappingURL = "11033";
        var identifierToConstructionURL = "12026";
    } else if (FDCategory === "Instrument Force XPR" && generalNetworkName == "ForceNetwork") {
        var identifierToMappingURL = "11034";
        var identifierToConstructionURL = "12027";
    } else if (FDCategory === "Physical Force" && generalNetworkName == "ForceNetwork") {
        var identifierToMappingURL = "11035";
        var identifierToConstructionURL = "12028";
    } else if (FDCategory === "Manipulate Force" && generalNetworkName == "ForceNetwork") {
        var identifierToMappingURL = "11036";
        var identifierToConstructionURL = "12029";
    } else if (FDCategory === "Volitional COS" && generalNetworkName == "ForceNetwork") {
        var identifierToMappingURL = "11037";
        var identifierToConstructionURL = "12030";
    } else if (FDCategory === "Instrument COS" && generalNetworkName == "ForceNetwork") {
        var identifierToMappingURL = "11038";
        var identifierToConstructionURL = "12031";
    } else if (FDCategory === "Physical COS" && generalNetworkName == "ForceNetwork") {
        var identifierToMappingURL = "11039";
        var identifierToConstructionURL = "12032";
    } else if (FDCategory === "Volitional Place" && generalNetworkName == "ForceNetwork") {
        var identifierToMappingURL = "11040";
        var identifierToConstructionURL = "12033";
    } else if (FDCategory === "Volitional Remove" && generalNetworkName == "ForceNetwork") {
        var identifierToMappingURL = "11041";
        var identifierToConstructionURL = "12034";
    } else if (FDCategory === "Volitional Attend" && generalNetworkName == "ForceNetwork") {
        var identifierToMappingURL = "11042";
        var identifierToConstructionURL = "12035";
    } else if (FDCategory === "Instrument Attend" && generalNetworkName == "ForceNetwork") {
        var identifierToMappingURL = "11043";
        var identifierToConstructionURL = "12036";
    } else if (FDCategory === "Volitional Internal" && generalNetworkName == "ForceNetwork") {
        var identifierToMappingURL = "11044";
        var identifierToConstructionURL = "12037";
    } else if (FDCategory === "Autonomous Internal" && generalNetworkName == "ForceNetwork") {
        var identifierToMappingURL = "11045";
        var identifierToConstructionURL = "12038";
    } else if (FDCategory === "Physical Create" && generalNetworkName == "ForceNetwork") {
        var identifierToMappingURL = "11046";
        var identifierToConstructionURL = "12039";
    } else if (FDCategory === "Volitional Motion" && generalNetworkName == "ForceNetwork") {
        var identifierToMappingURL = "11047";
        var identifierToConstructionURL = "12040";
    } else if (FDCategory === "Volitional Force" && generalNetworkName == "ConstrainNetwork") {
        var identifierToMappingURL = "11048";
        var identifierToConstructionURL = "12041";
    } else if (FDCategory === "Autonomous COS" && generalNetworkName == "COSNetwork") {
        var identifierToMappingURL = "11049";
        var identifierToConstructionURL = "12042";
    } else if (FDCategory === "Cause COS" && generalNetworkName == "COSNetwork") {
        var identifierToMappingURL = "11050";
        var identifierToConstructionURL = "12043";
    } else if (FDCategory === "Physical COS" && generalNetworkName == "COSNetwork") {
        var identifierToMappingURL = "11051";
        var identifierToConstructionURL = "12044";
    } else if (FDCategory === "Volitional COS" && generalNetworkName == "COSNetwork") {
        var identifierToMappingURL = "11052";
        var identifierToConstructionURL = "12045";
    } else if (FDCategory === "Instrument COS" && generalNetworkName == "COSNetwork") {
        var identifierToMappingURL = "11053";
        var identifierToConstructionURL = "12046";
    } else if (FDCategory === "Autonomous COS" && generalNetworkName == "CausativeCOSNetwork") {
        var identifierToMappingURL = "11054";
        var identifierToConstructionURL = "12042";
    } else if (FDCategory === "Physical COS" && generalNetworkName == "CausativeCOSNetwork") {
        var identifierToMappingURL = "11055";
        var identifierToConstructionURL = "12044";
    } else if (FDCategory === "Instrument COS" && generalNetworkName == "CausativeCOSNetwork") {
        var identifierToMappingURL = "11056";
        var identifierToConstructionURL = "12046";
    } else if (FDCategory === "Volitional COS" && generalNetworkName == "CausativeCOSNetwork") {
        var identifierToMappingURL = "11057";
        var identifierToConstructionURL = "12045";
    } else if (FDCategory === "Autonomous Internal" && generalNetworkName == "CausativeCOSNetwork") {
        var identifierToMappingURL = "11058";
        var identifierToConstructionURL = "12047";
    } else if (FDCategory === "Instrument Remove" && generalNetworkName == "CausativeCOSNetwork") {
        var identifierToMappingURL = "11059";
        var identifierToConstructionURL = "12048";
    } else if (FDCategory === "Volitional Remove" && generalNetworkName == "CausativeCOSNetwork") {
        var identifierToMappingURL = "11060";
        var identifierToConstructionURL = "12049";
    } else if (FDCategory === "Instrument Attend" && generalNetworkName == "CausativeCOSNetwork") {
        var identifierToMappingURL = "11061";
        var identifierToConstructionURL = "12050";
    } else if (FDCategory === "Physical COS" && generalNetworkName == "AbsorbNetwork") {
        var identifierToMappingURL = "11062";
        var identifierToConstructionURL = "12044";
    } else if (FDCategory === "Physical Remove" && generalNetworkName == "AbsorbNetwork") {
        var identifierToMappingURL = "11063";
        var identifierToConstructionURL = "12051";
    } else if (FDCategory === "Autonomous Internal" && generalNetworkName == "AbsorbNetwork") {
        var identifierToMappingURL = "11064";
        var identifierToConstructionURL = "12047";
    } else if (FDCategory === "Volitional COS" && generalNetworkName == "AbsorbNetwork") {
        var identifierToMappingURL = "11065";
        var identifierToConstructionURL = "12045";
    }


    return [identifierToMappingURL, identifierToConstructionURL]

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

     var NetworkMereologicalVolitionalPlace = {        

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

                                "name" : "NetMerVolPlace" 
                            };


     var NetworkIllustrationVolitionalPlace = {        

                                "solid1":    [   { "x": 60,  "y": 30}, 
                                                { "x": 90,  "y": 30} ],

                                "solid2":    [   { "x": 60,  "y": 85}, 
                                                { "x": 90,  "y": 85} ],

                                "dottedLeft":    [   { "x": 25,  "y": 40}, 
                                                { "x": 25,  "y": 70} ],

                                "dottedFarLeft":    [   { "x": -65,  "y": 40}, 
                                                { "x": -65,  "y": 70} ],

                                "dottedRight":    [   { "x": 125,  "y": 40}, 
                                                { "x": 125,  "y": 70} ],

                                "arrow":    [   { "x": -40,  "y": 30}, 
                                                { "x": -10,  "y": 30} ],

                                "arrow2":    [   { "x": -40,  "y": 85}, 
                                                { "x": -10,  "y": 85} ],


                                'textToAdd' : [
                                        { "x": -40,  "y": 35, "text": "A0"},
                                        { "x": -10,  "y": 35, "text": "A1"},  
                                        { "x": 85,  "y": 35, "text": "A2"},
                                        { "x": -120,  "y": 90, "text": "Physical_entity"}, 
                                        { "x": 5,  "y": 90, "text": "Creation"}, 
                                        { "x": 105,  "y": 90, "text": "Medium"},
                                        { "x": -80,  "y": 25, "text": "VOL"},
                                        { "x": -40,  "y": 45, "text": "FRC"},
                                        { "x": -40,  "y": 100, "text": "FRC"},
                                        { "x": 5,  "y": 25, "text": "+MER"},
                                        { "x": 5,  "y": 80, "text": "DES|MER"},
                                        { "x": 105,  "y": 25, "text": "EXIST"},
                                        { "x": 105,  "y": 80, "text": "MER"},
                                        { "x": 65,  "y": 45, "text": "PTH"},
                                        { "x": 65,  "y": 100, "text": "PTH"}
                                    ],

                                "argTextToAdd": ["Agent", "Creation", "Medium"],

                                "name" : "NetIllVolPlace" 
                            };

     var NetworkIllustrationVolitionalCreate = {        

                                "solid2":    [   { "x": 60,  "y": 85}, 
                                                { "x": 90,  "y": 85} ],

                                "dottedLeft":    [   { "x": 25,  "y": 40}, 
                                                { "x": 25,  "y": 70} ],

                                "dottedFarLeft":    [   { "x": -65,  "y": 40}, 
                                                { "x": -65,  "y": 70} ],


                                "arrow":    [   { "x": -40,  "y": 30}, 
                                                { "x": -10,  "y": 30} ],

                                "arrow2":    [   { "x": -40,  "y": 85}, 
                                                { "x": -10,  "y": 85} ],


                                'textToAdd' : [
                                        { "x": -40,  "y": 35, "text": "A0"},
                                        { "x": -10,  "y": 35, "text": "A1"},  
                                        { "x": -120,  "y": 90, "text": "Physical_entity"}, 
                                        { "x": 5,  "y": 90, "text": "Creation"}, 
                                        { "x": 105,  "y": 90, "text": "Medium"},
                                        { "x": -80,  "y": 25, "text": "VOL"},
                                        { "x": -40,  "y": 45, "text": "FRC"},
                                        { "x": -40,  "y": 100, "text": "FRC"},
                                        { "x": 5,  "y": 25, "text": "DES"},
                                        { "x": 5,  "y": 80, "text": "DES|MER"},
                                        { "x": 105,  "y": 80, "text": "MER"},
                                        { "x": 65,  "y": 100, "text": "PTH"}
                                    ],

                                "argTextToAdd": ["Agent", "Creation", "Medium"],

                                "name" : "NetIllVolCreate" 
                            };

     var NetworkIllustrationVolitionalProvide = {        

                                "solid1":    [   { "x": 60,  "y": 30}, 
                                                { "x": 90,  "y": 30} ],

                                "solid2":    [   { "x": 60,  "y": 85}, 
                                                { "x": 90,  "y": 85} ],

                                "dottedLeft":    [   { "x": 25,  "y": 40}, 
                                                { "x": 25,  "y": 70} ],

                                "dottedFarLeft":    [   { "x": -65,  "y": 40}, 
                                                { "x": -65,  "y": 70} ],

                                "dottedRight":    [   { "x": 125,  "y": 40}, 
                                                { "x": 125,  "y": 70} ],

                                "arrow":    [   { "x": -40,  "y": 30}, 
                                                { "x": -10,  "y": 30} ],

                                "arrow2":    [   { "x": -40,  "y": 85}, 
                                                { "x": -10,  "y": 85} ],


                                'textToAdd' : [
                                        { "x": -40,  "y": 35, "text": "A0"},
                                        { "x": -10,  "y": 35, "text": "A1"},  
                                        { "x": 85,  "y": 35, "text": "A2"},
                                        { "x": -120,  "y": 90, "text": "Physical_entity"}, 
                                        { "x": 5,  "y": 90, "text": "Creation"}, 
                                        { "x": 105,  "y": 90, "text": "Medium"},
                                        { "x": -80,  "y": 25, "text": "VOL"},
                                        { "x": -40,  "y": 45, "text": "FRC"},
                                        { "x": -40,  "y": 100, "text": "FRC"},
                                        { "x": 5,  "y": 25, "text": "INTL"},
                                        { "x": 5,  "y": 80, "text": "DES|MER"},
                                        { "x": 105,  "y": 25, "text": "+MER"},
                                        { "x": 105,  "y": 80, "text": "MER"},
                                        { "x": 65,  "y": 45, "text": "PTH"},
                                        { "x": 65,  "y": 100, "text": "PTH"}
                                    ],

                                "argTextToAdd": ["Agent", "Creation", "Medium"],

                                "name" : "NetIllVolProvide" 
                            };

     var NetworkCreationVolitionalCreate = {        


                                "dottedLeft":    [   { "x": 65,  "y": 40}, 
                                                { "x": 65,  "y": 70} ],

                                "dottedFarLeft":    [   { "x": -25,  "y": 40}, 
                                                { "x": -25,  "y": 70} ],


                                "arrow":    [   { "x": 0,  "y": 30}, 
                                                { "x": 30,  "y": 30} ],

                                "arrow2":    [   { "x": 0,  "y": 85}, 
                                                { "x": 30,  "y": 85} ],


                                'textToAdd' : [
                                        { "x": 0,  "y": 35, "text": "A0"},
                                        { "x": 30,  "y": 35, "text": "A1"},  
                                        { "x": -80,  "y": 90, "text": "Physical_entity"}, 
                                        { "x": 45,  "y": 90, "text": "Creation"}, 
                                        { "x": -40,  "y": 25, "text": "VOL"},
                                        { "x": 0,  "y": 45, "text": "FRC"},
                                        { "x": 0,  "y": 100, "text": "FRC"},
                                        { "x": 45,  "y": 25, "text": "DES"},
                                        { "x": 45,  "y": 80, "text": "DES"},
                                    ],

                                "argTextToAdd": ["Agent", "Creation"],

                                "name" : "NetCreationVolCreate" 
                            };


     var NetworkCreationVolitionalCreateAffect = {   


     							"solid1":    [   { "x": 100,  "y": 30}, 
                                                 { "x": 130,  "y": 30} ],     

                                "dottedLeft":    [   { "x": 65,  "y": 40}, 
                                                { "x": 65,  "y": 70} ],

                                "dottedFarLeft":    [   { "x": -25,  "y": 40}, 
                                                { "x": -25,  "y": 70} ],


                                "arrow":    [   { "x": 0,  "y": 30}, 
                                                { "x": 30,  "y": 30} ],

                                "arrow2":    [   { "x": 0,  "y": 85}, 
                                                { "x": 30,  "y": 85} ],


                                'textToAdd' : [
                                        { "x": 0,  "y": 35, "text": "A0"},
                                        { "x": 30,  "y": 35, "text": "A1"},  
                                        { "x": 130,  "y": 35, "text": "A2"},
                                        { "x": -80,  "y": 90, "text": "Physical_entity"}, 
                                        { "x": 45,  "y": 90, "text": "Creation"}, 
                                        { "x": -40,  "y": 25, "text": "VOL"},
                                        { "x": 0,  "y": 45, "text": "FRC"},
                                        { "x": 0,  "y": 100, "text": "FRC"},
                                        { "x": 45,  "y": 25, "text": "DES"},
                                        { "x": 45,  "y": 80, "text": "DES"},
                                        { "x": 140,  "y": 25, "text": "MPROP"},
                                        { "x": 100,  "y": 45, "text": "AFF"},
                                    ],

                                "argTextToAdd": ["Agent", "Creation", "Beneficiary"],

                                "name" : "NetCreationVolCreateAff" 
                            };


     var NetworkCreationAutonomousInternal = {        

                                "dottedFarLeft":    [   { "x": -25,  "y": 40}, 
                                                { "x": -25,  "y": 70} ],


                                "arrow2":    [   { "x": 0,  "y": 85}, 
                                                { "x": 30,  "y": 85} ],


                                'textToAdd' : [
                                        { "x": 0,  "y": 35, "text": "A0"},
                                        { "x": -80,  "y": 90, "text": "Physical_entity"}, 
                                        { "x": 45,  "y": 90, "text": "Creation"}, 
                                        { "x": -40,  "y": 25, "text": "INTL"},
                                        { "x": 0,  "y": 100, "text": "FRC"},
                                        { "x": 45,  "y": 80, "text": "DES"},
                                    ],

                                "argTextToAdd": ["Agent"],

                                "name" : "NetCreationAutoIntl" 
                            };


     var NetworkEmissionPhysicalCreate = {   

                                "solid1":    [   { "x": 100,  "y": 85}, 
                                                 { "x": 130,  "y": 85} ],     

                                "dottedLeft":    [   { "x": 65,  "y": 40}, 
                                                { "x": 65,  "y": 70} ],

                                "dottedFarLeft":    [   { "x": -25,  "y": 40}, 
                                                { "x": -25,  "y": 70} ],


                                "arrow":    [   { "x": 0,  "y": 30}, 
                                                { "x": 30,  "y": 30} ],

                                "arrow2":    [   { "x": 0,  "y": 85}, 
                                                { "x": 30,  "y": 85} ],


                                'textToAdd' : [
                                        { "x": 0,  "y": 35, "text": "A0"},
                                        { "x": 30,  "y": 35, "text": "A1"},  
                                        { "x": -40,  "y": 90, "text": "Source"}, 
                                        { "x": 45,  "y": 90, "text": "Creation"}, 
                                        { "x": 140,  "y": 90, "text": "Source"}, 
                                        { "x": -40,  "y": 25, "text": "INTL"},
                                        { "x": 0,  "y": 45, "text": "FRC"},
                                        { "x": 0,  "y": 100, "text": "FRC"},
                                        { "x": 45,  "y": 25, "text": "DES"},
                                        { "x": 45,  "y": 80, "text": "DES|MER"},
                                        { "x": 140,  "y": 80, "text": "MER"},
                                        { "x": 100,  "y": 100, "text": "PTH"},
                                    ],

                                "argTextToAdd": ["Source", "Creation"],

                                "name" : "NetEmissionPhysCreate" 
                            };


     var NetworkEmissionVolitionalCreate = {        

                                "solid2":    [   { "x": 60,  "y": 85}, 
                                                { "x": 90,  "y": 85} ],

                                "dottedLeft":    [   { "x": 25,  "y": 40}, 
                                                { "x": 25,  "y": 70} ],

                                "dottedFarLeft":    [   { "x": -65,  "y": 40}, 
                                                { "x": -65,  "y": 70} ],


                                "arrow":    [   { "x": -40,  "y": 30}, 
                                                { "x": -10,  "y": 30} ],

                                "arrow2":    [   { "x": -40,  "y": 85}, 
                                                { "x": -10,  "y": 85} ],


                                'textToAdd' : [
                                        { "x": -40,  "y": 35, "text": "A0"},
                                        { "x": -10,  "y": 35, "text": "A1"},  
                                        { "x": -80,  "y": 90, "text": "Source"}, 
                                        { "x": 5,  "y": 90, "text": "Creation"}, 
                                        { "x": 105,  "y": 90, "text": "Source"},
                                        { "x": -80,  "y": 25, "text": "VOL"},
                                        { "x": -40,  "y": 45, "text": "FRC"},
                                        { "x": -40,  "y": 100, "text": "FRC"},
                                        { "x": 5,  "y": 25, "text": "DES"},
                                        { "x": 5,  "y": 80, "text": "DES|MER"},
                                        { "x": 105,  "y": 80, "text": "MER"},
                                        { "x": 65,  "y": 100, "text": "PTH"}
                                    ],

                                "argTextToAdd": ["Source", "Creation"],

                                "name" : "NetEmissionVolCreate" 
                            };


     var NetworkEmissionAutonomousDynamicTexture = { 


                                "solid1":    [   { "x": -35,  "y": 30}, 
                                                { "x": -5,  "y": 30} ],       

                                "solid2":    [   { "x": 150,  "y": 85}, 
                                                { "x": 180,  "y": 85} ],


                                "dottedFarLeft":    [   { "x": 25,  "y": 40}, 
                                                { "x": 25,  "y": 70} ],


                                "arrow2":    [   { "x": 50,  "y": 85}, 
                                                { "x": 80,  "y": 85} ],


                                'textToAdd' : [
                                        { "x": -40,  "y": 35, "text": "A0"},
                                        { "x": -10,  "y": 35, "text": "A1"},  
                                        { "x": 10,  "y": 90, "text": "Source"}, 
                                        { "x": 95,  "y": 90, "text": "Creation"}, 
                                        { "x": 195,  "y": 90, "text": "Source"},
                                        { "x": -85,  "y": 25, "text": "INTL"},
                                        { "x": -35,  "y": 45, "text": "PTH"},
                                        { "x": 50,  "y": 100, "text": "FRC"},
                                        { "x": 10,  "y": 25, "text": "INTL"},
                                        { "x": 95,  "y": 80, "text": "DES|MER"},
                                        { "x": 195,  "y": 80, "text": "MER"},
                                        { "x": 155,  "y": 100, "text": "PTH"}
                                    ],

                                "argTextToAdd": ["Location", "Source"],

                                "name" : "NetEmissionAutoDynamicTexture" 
                            };


     var NetworkEmissionAutonomousInternal = { 
    

                                "solid2":    [   { "x": 110,  "y": 85}, 
                                                { "x": 140,  "y": 85} ],


                                "dottedFarLeft":    [   
                                                { "x": -15,  "y": 40}, 
                                                { "x": -15,  "y": 70} ],


                                "arrow2":    [   { "x": 10,  "y": 85}, 
                                                { "x": 40,  "y": 85} ],


                                'textToAdd' : [
                                        { "x": 10,  "y": 35, "text": "A0"},  
                                        { "x": -30,  "y": 90, "text": "Source"}, 
                                        { "x": 55,  "y": 90, "text": "Creation"}, 
                                        { "x": 155,  "y": 90, "text": "Source"},
                                        { "x": 10,  "y": 100, "text": "FRC"},
                                        { "x": -30,  "y": 25, "text": "INTL"},
                                        { "x": 55,  "y": 80, "text": "DES|MER"},
                                        { "x": 155,  "y": 80, "text": "MER"},
                                        { "x": 115,  "y": 100, "text": "PTH"}
                                    ],

                                "argTextToAdd": ["Source"],

                                "name" : "NetEmissionAutoInternal" 
                            };


     var NetworkEmissionAutonomousLocation = { 

                                "solid1":    [   { "x": 10,  "y": 30}, 
                                                { "x": 40,  "y": 30} ],   

                                "solid2":    [   { "x": 110,  "y": 85}, 
                                                { "x": 140,  "y": 85} ],


                                "dottedFarLeft":    [   
                                                { "x": -15,  "y": 40}, 
                                                { "x": -15,  "y": 70} ],


                                "arrow2":    [   { "x": 10,  "y": 85}, 
                                                { "x": 40,  "y": 85} ],


                                'textToAdd' : [
                                        { "x": 10,  "y": 35, "text": "A0"},  
                                        { "x": 35,  "y": 35, "text": "A1"},
                                        { "x": -30,  "y": 90, "text": "Source"}, 
                                        { "x": 55,  "y": 90, "text": "Creation"}, 
                                        { "x": 155,  "y": 90, "text": "Source"},
                                        { "x": -30,  "y": 25, "text": "INTL"},
                                        { "x": 55,  "y": 25, "text": "EXIST"},
                                        { "x": 10,  "y": 45, "text": "PTH"},
                                        { "x": 10,  "y": 100, "text": "FRC"},
                                        { "x": 55,  "y": 80, "text": "DES|MER"},
                                        { "x": 155,  "y": 80, "text": "MER"},
                                        { "x": 115,  "y": 100, "text": "PTH"}
                                    ],

                                "argTextToAdd": ["Source", "Ground"],

                                "name" : "NetEmissionAutoLocation" 
                            };

     var NetworkEmissionVolitionalInternal = { 


                                "solid2":    [   { "x": 130,  "y": 85}, 
                                                { "x": 160,  "y": 85} ],


                                "dottedFarLeft":    [   
                                                { "x": -5,  "y": 40}, 
                                                { "x": -5,  "y": 70} ],

                                "arrow":    [   { "x": -55,  "y": 30}, 
                                                { "x": -25,  "y": 30} ],


                                "arrow2":    [   { "x": 30,  "y": 85}, 
                                                { "x": 60,  "y": 85} ],


                                'textToAdd' : [
                                        { "x": -50,  "y": 35, "text": "A0"},  
                                        { "x": -30,  "y": 35, "text": "A1"},
                                        { "x": -10,  "y": 90, "text": "Source"}, 
                                        { "x": 75,  "y": 90, "text": "Creation"}, 
                                        { "x": 175,  "y": 90, "text": "Source"},
                                        { "x": -90,  "y": 25, "text": "VOL"},
                                        { "x": -10,  "y": 25, "text": "INTL"},
                                        { "x": -45,  "y": 45, "text": "FRC"},
                                        { "x": 40,  "y": 100, "text": "FRC"},
                                        { "x": 75,  "y": 80, "text": "DES|MER"},
                                        { "x": 175,  "y": 80, "text": "MER"},
                                        { "x": 135,  "y": 100, "text": "PTH"}
                                    ],

                                "argTextToAdd": ["Agent", "Source"],

                                "name" : "NetEmissionVolInternal" 
                            };


     var NetworkEmissionAutonomousMotion = { 


                                "solid1":    [   { "x": 90,  "y": 30}, 
                                                { "x": 120,  "y": 30} ],       

                                "solid2":    [   { "x": 90,  "y": 85}, 
                                                { "x": 120,  "y": 85} ],


                                "dottedFarLeft":    [   { "x": 60,  "y": 40}, 
                                                { "x": 60,  "y": 70} ],


                                "arrow2":    [   { "x": -10,  "y": 85}, 
                                                { "x": 20,  "y": 85} ],


                                'textToAdd' : [
                                        { "x": 80,  "y": 35, "text": "A0"},
                                        { "x": 115,  "y": 35, "text": "A1"},  
                                        { "x": -50,  "y": 90, "text": "Source"}, 
                                        { "x": 35,  "y": 90, "text": "Creation"}, 
                                        { "x": 135,  "y": 90, "text": "Source"},
                                        { "x": 35,  "y": 25, "text": "MOT"},
                                        { "x": 90,  "y": 45, "text": "PTH"},
                                        { "x": -10,  "y": 100, "text": "FRC"},
                                        { "x": 135,  "y": 25, "text": "EXIST"},
                                        { "x": 35,  "y": 80, "text": "DES|MER"},
                                        { "x": 135,  "y": 80, "text": "MER"},
                                        { "x": 95,  "y": 100, "text": "PTH"}
                                    ],

                                "argTextToAdd": ["Creation", "Ground"],

                                "name" : "NetEmissionAutoMotion" 
                            };


     var NetworkEmissionAutonomousRemove = { 


                                "solid1":    [   { "x": 90,  "y": 30}, 
                                                { "x": 120,  "y": 30} ],       

                                "solid2":    [   { "x": 90,  "y": 85}, 
                                                { "x": 120,  "y": 85} ],


                                "dottedFarLeft":    [   { "x": 60,  "y": 40}, 
                                                { "x": 60,  "y": 70} ],


                                "dottedLeft":    [   { "x": 150,  "y": 40}, 
                                                { "x": 150,  "y": 70} ],


                                "arrow2":    [   { "x": -10,  "y": 85}, 
                                                { "x": 20,  "y": 85} ],


                                'textToAdd' : [
                                        { "x": 80,  "y": 35, "text": "A0"},
                                        { "x": 115,  "y": 35, "text": "A1"},  
                                        { "x": -50,  "y": 90, "text": "Source"}, 
                                        { "x": 35,  "y": 90, "text": "Creation"}, 
                                        { "x": 135,  "y": 90, "text": "Source"},
                                        { "x": 35,  "y": 25, "text": "-MER"},
                                        { "x": 90,  "y": 45, "text": "PTH"},
                                        { "x": -10,  "y": 100, "text": "FRC"},
                                        { "x": 135,  "y": 25, "text": "EXIST"},
                                        { "x": 35,  "y": 80, "text": "DES|MER"},
                                        { "x": 135,  "y": 80, "text": "MER"},
                                        { "x": 95,  "y": 100, "text": "PTH"}
                                    ],

                                "argTextToAdd": ["Creation", "Source"],

                                "name" : "NetEmissionAutoRemove" 
                            };


     var NetworkEmissionVolitionalDeprive = { 


                                "solid1":    [   { "x": 90,  "y": 30}, 
                                                { "x": 120,  "y": 30} ],       

                                "solid2":    [   { "x": 90,  "y": 85}, 
                                                { "x": 120,  "y": 85} ],


                                "dottedFarLeft":    [   { "x": 60,  "y": 40}, 
                                                { "x": 60,  "y": 70} ],


                                "dottedLeft":    [   { "x": 150,  "y": 40}, 
                                                { "x": 150,  "y": 70} ],

                                "arrow1":    [   { "x": -10,  "y": 30}, 
                                                { "x": 20,  "y": 30} ],


                                "arrow2":    [   { "x": -10,  "y": 85}, 
                                                { "x": 20,  "y": 85} ],


                                'textToAdd' : [
                                        { "x": -10,  "y": 35, "text": "A0"},
                                        { "x": 20,  "y": 35, "text": "A1"},  
                                        { "x": 115,  "y": 35, "text": "A2"},  
                                        { "x": -50,  "y": 90, "text": "Source"}, 
                                        { "x": 35,  "y": 90, "text": "Creation"}, 
                                        { "x": 135,  "y": 90, "text": "Source"},
                                        { "x": -50,  "y": 25, "text": "VOL"},
                                        { "x": 35,  "y": 25, "text": "-MER"},
                                        { "x": -10,  "y": 45, "text": "FRC"},
                                        { "x": 90,  "y": 45, "text": "PTH"},
                                        { "x": -10,  "y": 100, "text": "FRC"},
                                        { "x": 135,  "y": 25, "text": "EXIST"},
                                        { "x": 35,  "y": 80, "text": "DES|MER"},
                                        { "x": 135,  "y": 80, "text": "MER"},
                                        { "x": 95,  "y": 100, "text": "PTH"}
                                    ],

                                "argTextToAdd": ["Agent", "Creation (NI)", "Source"],

                                "name" : "NetEmissionVolDeprive" 
                            };


     var NetworkEmissionVolitionalPlace = { 


                                "solid1":    [   { "x": 90,  "y": 30}, 
                                                { "x": 120,  "y": 30} ],       

                                "solid2":    [   { "x": 90,  "y": 85}, 
                                                { "x": 120,  "y": 85} ],


                                "dottedFarLeft":    [   { "x": -30,  "y": 40}, 
                                                { "x": -30,  "y": 70} ],


                                "dottedLeft":    [   { "x": 60,  "y": 40}, 
                                                { "x": 60,  "y": 70} ],

                                "arrow1":    [   { "x": -10,  "y": 30}, 
                                                { "x": 20,  "y": 30} ],


                                "arrow2":    [   { "x": -10,  "y": 85}, 
                                                { "x": 20,  "y": 85} ],


                                'textToAdd' : [
                                        { "x": -10,  "y": 35, "text": "A0"},
                                        { "x": 20,  "y": 35, "text": "A1"},  
                                        { "x": 115,  "y": 35, "text": "A2"},  
                                        { "x": -50,  "y": 90, "text": "Source"}, 
                                        { "x": 35,  "y": 90, "text": "Creation"}, 
                                        { "x": 135,  "y": 90, "text": "Source"},
                                        { "x": -50,  "y": 25, "text": "VOL"},
                                        { "x": 35,  "y": 25, "text": "+MER"},
                                        { "x": -10,  "y": 45, "text": "FRC"},
                                        { "x": 90,  "y": 45, "text": "PTH"},
                                        { "x": -10,  "y": 100, "text": "FRC"},
                                        { "x": 135,  "y": 25, "text": "EXIST"},
                                        { "x": 35,  "y": 80, "text": "DES|MER"},
                                        { "x": 135,  "y": 80, "text": "MER"},
                                        { "x": 95,  "y": 100, "text": "PTH"}
                                    ],

                                "argTextToAdd": ["Agent", "Creation (NI)", "Ground"],

                                "name" : "NetEmissionVolPlace" 
                            };


     var NetworkEmissionPhysicalPlace = { 


                                "solid1":    [   { "x": 90,  "y": 30}, 
                                                { "x": 120,  "y": 30} ],       

                                "solid2":    [   { "x": 90,  "y": 85}, 
                                                { "x": 120,  "y": 85} ],


                                "dottedFarLeft":    [   { "x": -30,  "y": 40}, 
                                                { "x": -30,  "y": 70} ],


                                "dottedLeft":    [   { "x": 60,  "y": 40}, 
                                                { "x": 60,  "y": 70} ],

                                "arrow1":    [   { "x": -10,  "y": 30}, 
                                                { "x": 20,  "y": 30} ],


                                "arrow2":    [   { "x": -10,  "y": 85}, 
                                                { "x": 20,  "y": 85} ],


                                'textToAdd' : [
                                        { "x": -10,  "y": 35, "text": "A0"},
                                        { "x": 20,  "y": 35, "text": "A1"},  
                                        { "x": 115,  "y": 35, "text": "A2"},  
                                        { "x": -50,  "y": 90, "text": "Source"}, 
                                        { "x": 35,  "y": 90, "text": "Creation"}, 
                                        { "x": 135,  "y": 90, "text": "Source"},
                                        { "x": -50,  "y": 25, "text": "INTL"},
                                        { "x": 35,  "y": 25, "text": "+MER"},
                                        { "x": -10,  "y": 45, "text": "FRC"},
                                        { "x": 90,  "y": 45, "text": "PTH"},
                                        { "x": -10,  "y": 100, "text": "FRC"},
                                        { "x": 135,  "y": 25, "text": "EXIST"},
                                        { "x": 35,  "y": 80, "text": "DES|MER"},
                                        { "x": 135,  "y": 80, "text": "MER"},
                                        { "x": 95,  "y": 100, "text": "PTH"}
                                    ],

                                "argTextToAdd": ["Source", "Creation", "Ground"],

                                "name" : "NetEmissionPhysPlace" 
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


     var NetworkEmissionVolitionalAttend = {        

                                "solid2":    [   { "x": 60,  "y": 85}, 
                                                { "x": 90,  "y": 85} ],

                                "dottedLeft":    [   { "x": 25,  "y": 40}, 
                                                { "x": 25,  "y": 70} ],

                                "dottedFarLeft":    [   { "x": -65,  "y": 40}, 
                                                { "x": -65,  "y": 70} ],


                                "arrow":    [   { "x": -40,  "y": 30}, 
                                                { "x": -10,  "y": 30} ],

                                "arrow2":    [   { "x": -40,  "y": 85}, 
                                                { "x": -10,  "y": 85} ],


                                'textToAdd' : [
                                        { "x": -40,  "y": 35, "text": "A0"},
                                        { "x": -10,  "y": 35, "text": "A1"},  
                                        { "x": -80,  "y": 90, "text": "Source"}, 
                                        { "x": 5,  "y": 90, "text": "Creation"}, 
                                        { "x": 105,  "y": 90, "text": "Source"},
                                        { "x": -80,  "y": 25, "text": "INTL"},
                                        { "x": -40,  "y": 45, "text": "ATT"},
                                        { "x": -40,  "y": 100, "text": "FRC"},
                                        { "x": 5,  "y": 80, "text": "DES|MER"},
                                        { "x": 105,  "y": 80, "text": "MER"},
                                        { "x": 65,  "y": 100, "text": "PTH"}
                                    ],

                                "argTextToAdd": ["Source", "Target"],

                                "name" : "NetEmissionVolAttend" 
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
                                        { "x": 95,  "y": 25, "text": "EXIST"},
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
                                        { "x": 115,  "y": 25, "text": "EXIST"},
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
                                        { "x": 160,  "y": 25, "text": "EXIST"},
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
                                        { "x": 130,  "y": 25, "text": "EXIST"},
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
                                        { "x": 130,  "y": 25, "text": "EXIST"},
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
                                        { "x": 130,  "y": 25, "text": "EXIST"},
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


     var NetworkForceVolitionalForce = {        

                                "arrow":    [   { "x": 60,  "y": 30}, 
                                                { "x": 90,  "y": 30} ],

                                "arrow2":    [   { "x": 60,  "y": 85}, 
                                                { "x": 90,  "y": 85} ],

                                "dottedLeft":    [   { "x": 35,  "y": 40}, 
                                                { "x": 35,  "y": 70} ],

                                "dottedRight":    [   { "x": 135,  "y": 40}, 
                                                { "x": 135,  "y": 70} ],

                                'textToAdd' : [
                                        { "x": 55,  "y": 35, "text": "A0"},
                                        { "x": 95,  "y": 35, "text": "A1"},
                                        { "x": -15,  "y": 90, "text": "Physical_entity"},  
                                        { "x": 120,  "y": 90, "text": "Theme"},
                                        { "x": 15,  "y": 25, "text": "VOL"},
                                        { "x": 60,  "y": 45, "text": "FRC"},
                                        { "x": 60,  "y": 100, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Causer", "Theme"],

                                "name" : "NetForceVolForce" 
                            };


     var NetworkForceVolitionalForceXPR = {        

                                "arrow":    [   { "x": 10,  "y": 30}, 
                                                { "x": 40,  "y": 30} ],

                                "arrow2":    [   { "x": 10,  "y": 85}, 
                                                { "x": 40,  "y": 85} ],

                                "solid2":    [   { "x": 110,  "y": 30}, 
                                                { "x": 140,  "y": 30} ],

                                "dottedLeft":    [   { "x": -15,  "y": 40}, 
                                                { "x": -15,  "y": 70} ],

                                "dottedRight":    [   { "x": 85,  "y": 40}, 
                                                { "x": 85,  "y": 70} ],

                                'textToAdd' : [
                                        { "x": 5,  "y": 35, "text": "A0"},
                                        { "x": 45,  "y": 35, "text": "A1"},
                                        { "x": 135,  "y": 35, "text": "A2"},
                                        { "x": -65,  "y": 90, "text": "Physical_entity"},  
                                        { "x": 70,  "y": 90, "text": "Theme"},
                                        { "x": -35,  "y": 25, "text": "VOL"},
                                        { "x": 10,  "y": 45, "text": "FRC"},
                                        { "x": 10,  "y": 100, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Causer", "Theme", "Location"],

                                "name" : "NetForceVolForceXPR" 
                            };

     var NetworkForceInstrumentForce = {        

                                "arrow":    [   { "x": 10,  "y": 30}, 
                                                { "x": 40,  "y": 30} ],

                                "arrow1":    [   { "x": 115,  "y": 30}, 
                                                { "x": 145,  "y": 30} ],

                                "arrow2":    [   { "x": 10,  "y": 85}, 
                                                { "x": 40,  "y": 85} ],

                                "dottedFarLeft":    [   { "x": -25,  "y": 40}, 
                                                { "x": -25,  "y": 75} ],

                                "dottedLeft":    [   { "x": 65,  "y": 40}, 
                                                { "x": -15,  "y": 75} ],

                                "dottedRight":    [   { "x": 165,  "y": 40}, 
                                                { "x": 95,  "y": 75} ],

                                'textToAdd' : [
                                        { "x": 5,  "y": 35, "text": "A0"},
                                        { "x": 45,  "y": 35, "text": "A1"},
                                        { "x": 135,  "y": 35, "text": "A2"},
                                        { "x": -65,  "y": 90, "text": "Physical_entity"},  
                                        { "x": 70,  "y": 90, "text": "Theme"},
                                        { "x": -35,  "y": 25, "text": "VOL"},
                                        { "x": 55,  "y": 25, "text": "INTL"},
                                        { "x": 10,  "y": 45, "text": "FRC"},
                                        { "x": 115,  "y": 45, "text": "FRC"},
                                        { "x": 10,  "y": 100, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Causer", "Instrument", "Theme"],

                                "name" : "NetForceInstForce" 
                            };


     var NetworkForceInstrumentForceXPR = {        

                                "arrow":    [   { "x": -40,  "y": 30}, 
                                                { "x": -10,  "y": 30} ],

                                "arrow1":    [   { "x": 65,  "y": 30}, 
                                                { "x": 95,  "y": 30} ],

                                "arrow2":    [   { "x": -40,  "y": 85}, 
                                                { "x": -10,  "y": 85} ],

                                "solid2":    [   { "x": 150,  "y": 30}, 
                                                { "x": 180,  "y": 30} ],

                                "dottedFarLeft":    [   { "x": -75,  "y": 40}, 
                                                { "x": -75,  "y": 75} ],

                                "dottedLeft":    [   { "x": 15,  "y": 40}, 
                                                { "x": -65,  "y": 75} ],

                                "dottedRight":    [   { "x": 115,  "y": 40}, 
                                                { "x": 45,  "y": 75} ],

                                'textToAdd' : [
                                        { "x": -45,  "y": 35, "text": "A0"},
                                        { "x": -5,  "y": 35, "text": "A1"},
                                        { "x": 85,  "y": 35, "text": "A2"},
                                        { "x": 170,  "y": 35, "text": "A3"},
                                        { "x": -115,  "y": 90, "text": "Physical_entity"},  
                                        { "x": 20,  "y": 90, "text": "Theme"},
                                        { "x": -85,  "y": 25, "text": "VOL"},
                                        { "x": 5,  "y": 25, "text": "INTL"},
                                        { "x": -40,  "y": 45, "text": "FRC"},
                                        { "x": 65,  "y": 45, "text": "FRC"},
                                        { "x": 150,  "y": 45, "text": "XPR"},
                                        { "x": -40,  "y": 100, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Causer", "Instrument", "Theme", "Location"],

                                "name" : "NetForceInstForceXPR" 
                            };


     var NetworkForcePhysicalForce = {        

                                "arrow":    [   { "x": 60,  "y": 30}, 
                                                { "x": 90,  "y": 30} ],

                                "arrow2":    [   { "x": 60,  "y": 85}, 
                                                { "x": 90,  "y": 85} ],

                                "dottedLeft":    [   { "x": 35,  "y": 40}, 
                                                { "x": 35,  "y": 70} ],

                                "dottedRight":    [   { "x": 135,  "y": 40}, 
                                                { "x": 135,  "y": 70} ],

                                'textToAdd' : [
                                        { "x": 45,  "y": 35, "text": "A0"},
                                        { "x": 95,  "y": 35, "text": "A1"},
                                        { "x": -15,  "y": 90, "text": "Physical_entity"},  
                                        { "x": 120,  "y": 90, "text": "Theme"},
                                        { "x": 0,  "y": 25, "text": "INTL"},
                                        { "x": 60,  "y": 45, "text": "FRC"},
                                        { "x": 60,  "y": 100, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Physical_entity", "Theme"],

                                "name" : "NetForceVolForce" 
                            };


     var NetworkForceManipulateForce = {        

                                "arrow":    [   { "x": -20,  "y": 30}, 
                                                { "x": 10,  "y": 30} ],

                                "arrow1":    [   { "x": 85,  "y": 30}, 
                                                { "x": 115,  "y": 30} ],

                                "arrow2":    [   { "x": -20,  "y": 85}, 
                                                { "x": 10,  "y": 85} ],

                                "dottedFarLeft":    [   { "x": -55,  "y": 40}, 
                                                { "x": -55,  "y": 75} ],

                                "dottedLeft":    [   { "x": 35,  "y": 40}, 
                                                { "x": -45,  "y": 75} ],

                                "dottedRight":    [   { "x": 135,  "y": 40}, 
                                                { "x": 65,  "y": 75} ],

                                'textToAdd' : [
                                        { "x": -25,  "y": 35, "text": "A0"},
                                        { "x": 15,  "y": 35, "text": "A1"},
                                        { "x": 105,  "y": 35, "text": "A2"},
                                        { "x": -95,  "y": 90, "text": "Physical_entity"},  
                                        { "x": 40,  "y": 90, "text": "Theme"},
                                        { "x": -65,  "y": 25, "text": "VOL"},
                                        { "x": 25,  "y": 25, "text": "INTL"},
                                        { "x": -20,  "y": 45, "text": "FRC"},
                                        { "x": 85,  "y": 45, "text": "FRC"},
                                        { "x": -20,  "y": 100, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Causer", "Instrument", "Theme"],

                                "name" : "NetForceManForce" 
                            };


     var NetworkForceVolitionalCOS = {        

                                "arrow":    [   { "x": 60,  "y": 30}, 
                                                { "x": 90,  "y": 30} ],

                                "arrow2":    [   { "x": 60,  "y": 85}, 
                                                { "x": 90,  "y": 85} ],

                                "dottedLeft":    [   { "x": 35,  "y": 40}, 
                                                { "x": 35,  "y": 70} ],

                                "dottedRight":    [   { "x": 135,  "y": 40}, 
                                                { "x": 135,  "y": 70} ],

                                'textToAdd' : [
                                        { "x": 45,  "y": 35, "text": "A0"},
                                        { "x": 95,  "y": 35, "text": "A1"},
                                        { "x": -15,  "y": 90, "text": "Physical_entity"},  
                                        { "x": 120,  "y": 90, "text": "Theme"},
                                        { "x": 5,  "y": 25, "text": "VOL"},
                                        { "x": 115,  "y": 25, "text": "COS"},
                                        { "x": 60,  "y": 45, "text": "FRC"},
                                        { "x": 60,  "y": 100, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Agent", "Theme"],

                                "name" : "NetForceVolCOS" 
                            };

     var NetworkForceInstrumentCOS = {        

                                "arrow":    [   { "x": -20,  "y": 30}, 
                                                { "x": 10,  "y": 30} ],

                                "arrow1":    [   { "x": 85,  "y": 30}, 
                                                { "x": 115,  "y": 30} ],

                                "arrow2":    [   { "x": -20,  "y": 85}, 
                                                { "x": 10,  "y": 85} ],

                                "dottedFarLeft":    [   { "x": -55,  "y": 40}, 
                                                { "x": -55,  "y": 75} ],

                                "dottedLeft":    [   { "x": 35,  "y": 40}, 
                                                { "x": -45,  "y": 75} ],

                                "dottedRight":    [   { "x": 135,  "y": 40}, 
                                                { "x": 65,  "y": 75} ],

                                'textToAdd' : [
                                        { "x": -25,  "y": 35, "text": "A0"},
                                        { "x": 15,  "y": 35, "text": "A1"},
                                        { "x": 105,  "y": 35, "text": "A2"},
                                        { "x": -95,  "y": 90, "text": "Physical_entity"},  
                                        { "x": 40,  "y": 90, "text": "Theme"},
                                        { "x": -65,  "y": 25, "text": "VOL"},
                                        { "x": 25,  "y": 25, "text": "INTL"},
                                        { "x": -20,  "y": 45, "text": "FRC"},
                                        { "x": 85,  "y": 45, "text": "FRC"},
                                        { "x": -20,  "y": 100, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Agent", "Instrument", "Theme"],

                                "name" : "NetForceInstCOS" 
                            };


     var NetworkForcePhysicalCOS = {        

                                "arrow":    [   { "x": 60,  "y": 30}, 
                                                { "x": 90,  "y": 30} ],

                                "arrow2":    [   { "x": 60,  "y": 85}, 
                                                { "x": 90,  "y": 85} ],

                                "dottedLeft":    [   { "x": 35,  "y": 40}, 
                                                { "x": 35,  "y": 70} ],

                                "dottedRight":    [   { "x": 135,  "y": 40}, 
                                                { "x": 135,  "y": 70} ],

                                'textToAdd' : [
                                        { "x": 45,  "y": 35, "text": "A0"},
                                        { "x": 95,  "y": 35, "text": "A1"},
                                        { "x": -15,  "y": 90, "text": "Physical_entity"},  
                                        { "x": 120,  "y": 90, "text": "Theme"},
                                        { "x": -15,  "y": 25, "text": "INTL"},
                                        { "x": 115,  "y": 25, "text": "COS"},
                                        { "x": 60,  "y": 45, "text": "FRC"},
                                        { "x": 60,  "y": 100, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Physical_entity", "Theme"],

                                "name" : "NetForcePhysCOS" 
                            };


     var NetworkForceVolitionalPlace = {        

                                "arrow":    [   { "x": -20,  "y": 30}, 
                                                { "x": 10,  "y": 30} ],

                                "solid2":    [   { "x": 85,  "y": 30}, 
                                                { "x": 115,  "y": 30} ],

                                "arrow2":    [   { "x": -20,  "y": 85}, 
                                                { "x": 10,  "y": 85} ],

                                "dottedFarLeft":    [   { "x": -55,  "y": 40}, 
                                                { "x": -55,  "y": 75} ],

                                "dottedLeft":    [   { "x": 35,  "y": 40}, 
                                                { "x": -45,  "y": 75} ],

                                "dottedRight":    [   { "x": 135,  "y": 40}, 
                                                { "x": 65,  "y": 75} ],

                                'textToAdd' : [
                                        { "x": -25,  "y": 35, "text": "A0"},
                                        { "x": 10,  "y": 35, "text": "A1"},
                                        { "x": 105,  "y": 35, "text": "A2"},
                                        { "x": -95,  "y": 90, "text": "Physical_entity"},  
                                        { "x": 40,  "y": 90, "text": "Theme"},
                                        { "x": -65,  "y": 25, "text": "VOL"},
                                        { "x": 20,  "y": 25, "text": "+MER"},
                                        { "x": 125,  "y": 25, "text": "EXIST"},
                                        { "x": -20,  "y": 45, "text": "FRC"},
                                        { "x": 85,  "y": 45, "text": "PTH"},
                                        { "x": -20,  "y": 100, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Agent", "MovedEntity", "Ground"],

                                "name" : "NetForceVolPlace" 
                            };


     var NetworkForceVolitionalRemove = {        

                                "arrow":    [   { "x": -20,  "y": 30}, 
                                                { "x": 10,  "y": 30} ],

                                "solid2":    [   { "x": 85,  "y": 30}, 
                                                { "x": 115,  "y": 30} ],

                                "arrow2":    [   { "x": -20,  "y": 85}, 
                                                { "x": 10,  "y": 85} ],

                                "dottedFarLeft":    [   { "x": -55,  "y": 40}, 
                                                { "x": -55,  "y": 75} ],

                                "dottedLeft":    [   { "x": 35,  "y": 40}, 
                                                { "x": -45,  "y": 75} ],

                                "dottedRight":    [   { "x": 135,  "y": 40}, 
                                                { "x": 65,  "y": 75} ],

                                'textToAdd' : [
                                        { "x": -25,  "y": 35, "text": "A0"},
                                        { "x": 10,  "y": 35, "text": "A1"},
                                        { "x": 105,  "y": 35, "text": "A2"},
                                        { "x": -95,  "y": 90, "text": "Physical_entity"},  
                                        { "x": 40,  "y": 90, "text": "Theme"},
                                        { "x": -65,  "y": 25, "text": "VOL"},
                                        { "x": 20,  "y": 25, "text": "-MER"},
                                        { "x": 125,  "y": 25, "text": "EXIST"},
                                        { "x": -20,  "y": 45, "text": "FRC"},
                                        { "x": 85,  "y": 45, "text": "PTH"},
                                        { "x": -20,  "y": 100, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Agent", "MovedEntity", "Ground"],

                                "name" : "NetForceVolRemove" 
                            };


     var NetworkForceVolitionalAttend = {        

                                "arrow":    [   { "x": 60,  "y": 30}, 
                                                { "x": 90,  "y": 30} ],

                                "arrow2":    [   { "x": 60,  "y": 85}, 
                                                { "x": 90,  "y": 85} ],

                                "dottedLeft":    [   { "x": 35,  "y": 40}, 
                                                { "x": 35,  "y": 70} ],

                                "dottedRight":    [   { "x": 135,  "y": 40}, 
                                                { "x": 135,  "y": 70} ],

                                'textToAdd' : [
                                        { "x": 45,  "y": 35, "text": "A0"},
                                        { "x": 95,  "y": 35, "text": "A1"},
                                        { "x": -15,  "y": 90, "text": "Physical_entity"},  
                                        { "x": 120,  "y": 90, "text": "Theme"},
                                        { "x": 5,  "y": 25, "text": "VOL"},
                                        { "x": 60,  "y": 45, "text": "ATT"},
                                        { "x": 60,  "y": 100, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Agent", "Target"],

                                "name" : "NetForceVolAttend" 
                            };


     var NetworkForceInstrumentAttend = {        

                                "arrow":    [   { "x": -20,  "y": 30}, 
                                                { "x": 10,  "y": 30} ],

                                "arrow1":    [   { "x": 85,  "y": 30}, 
                                                { "x": 115,  "y": 30} ],

                                "arrow2":    [   { "x": -20,  "y": 85}, 
                                                { "x": 10,  "y": 85} ],

                                "dottedFarLeft":    [   { "x": -55,  "y": 40}, 
                                                { "x": -55,  "y": 75} ],

                                "dottedLeft":    [   { "x": 35,  "y": 40}, 
                                                { "x": -45,  "y": 75} ],

                                "dottedRight":    [   { "x": 135,  "y": 40}, 
                                                { "x": 65,  "y": 75} ],

                                'textToAdd' : [
                                        { "x": -25,  "y": 35, "text": "A0"},
                                        { "x": 10,  "y": 35, "text": "A1"},
                                        { "x": 105,  "y": 35, "text": "A2"},
                                        { "x": -95,  "y": 90, "text": "Physical_entity"},  
                                        { "x": 40,  "y": 90, "text": "Theme"},
                                        { "x": -65,  "y": 25, "text": "VOL"},
                                        { "x": 20,  "y": 25, "text": "INTL"},
                                        { "x": -20,  "y": 45, "text": "FRC"},
                                        { "x": 85,  "y": 45, "text": "ATT"},
                                        { "x": -20,  "y": 100, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Agent", "Instrument", "Target"],

                                "name" : "NetForceInstAttend" 
                            };


     var NetworkForceVolitionalInternal = {        

                                "arrow":    [   { "x": 60,  "y": 30}, 
                                                { "x": 90,  "y": 30} ],

                                "arrow2":    [   { "x": 60,  "y": 85}, 
                                                { "x": 90,  "y": 85} ],

                                "dottedLeft":    [   { "x": 35,  "y": 40}, 
                                                { "x": 35,  "y": 70} ],

                                "dottedRight":    [   { "x": 135,  "y": 40}, 
                                                { "x": 135,  "y": 70} ],

                                'textToAdd' : [
                                        { "x": 45,  "y": 35, "text": "A0"},
                                        { "x": 115,  "y": 35, "text": "A1"},
                                        { "x": -15,  "y": 90, "text": "Physical_entity"},  
                                        { "x": 120,  "y": 90, "text": "Theme"},
                                        { "x": 5,  "y": 25, "text": "VOL"},
                                        { "x": 115,  "y": 25, "text": "INTL"},
                                        { "x": 60,  "y": 45, "text": "FRC"},
                                        { "x": 60,  "y": 100, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Agent", "Theme (together)"],

                                "name" : "NetForceVolInternal" 
                            };


     var NetworkForceAutonomousInternal = {        

                                "dottedLeft":    [   { "x": 45,  "y": 40}, 
                                                { "x": 5,  "y": 70} ],

                                "dottedRight":    [   { "x": 45,  "y": 40}, 
                                                { "x": 80,  "y": 70} ],


                                "arrow2":    [   { "x": 30,  "y": 85}, 
                                                { "x": 60,  "y": 85} ],


                                'textToAdd' : [
                                        { "x": 70,  "y": 35, "text": "A0"},
                                        { "x": -50,  "y": 90, "text": "Physical_entity"}, 
                                        { "x": 75,  "y": 90, "text": "Theme"}, 
                                        { "x": 10,  "y": 25, "text": "INTL"},
                                        { "x": 30,  "y": 100, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Theme (together)"],

                                "name" : "NetForceAutoIntl" 
                            };


     var NetworkForcePhysicalCreate = {        

                                "arrow":    [   { "x": 60,  "y": 30}, 
                                                { "x": 90,  "y": 30} ],

                                "arrow2":    [   { "x": 60,  "y": 85}, 
                                                { "x": 90,  "y": 85} ],

                                "dottedLeft":    [   { "x": 35,  "y": 40}, 
                                                { "x": 35,  "y": 70} ],

                                "dottedRight":    [   { "x": 135,  "y": 40}, 
                                                { "x": 135,  "y": 70} ],

                                'textToAdd' : [
                                        { "x": 45,  "y": 35, "text": "A0"},
                                        { "x": 100,  "y": 35, "text": "A1"},
                                        { "x": -15,  "y": 90, "text": "Physical_entity"},  
                                        { "x": 120,  "y": 90, "text": "Theme"},
                                        { "x": -15,  "y": 25, "text": "INTL"},
                                        { "x": 120,  "y": 25, "text": "DES"},
                                        { "x": 60,  "y": 45, "text": "FRC"},
                                        { "x": 60,  "y": 100, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Physical_entity", "Theme"],

                                "name" : "NetForcePhysCreate" 
                            };

     var NetworkForceVolitionalMotion = {        

                                "arrow":    [   { "x": -20,  "y": 30}, 
                                                { "x": 10,  "y": 30} ],

                                "solid2":    [   { "x": 85,  "y": 30}, 
                                                { "x": 115,  "y": 30} ],

                                "arrow2":    [   { "x": 85,  "y": 85}, 
                                                { "x": 115,  "y": 85} ],

                                "dottedLeft":    [   { "x": 35,  "y": 40}, 
                                                { "x": 35,  "y": 75} ],

                                "dottedRight":    [   { "x": 135,  "y": 40}, 
                                                { "x": 135,  "y": 75} ],

                                'textToAdd' : [
                                        { "x": -25,  "y": 35, "text": "A0"},
                                        { "x": 10,  "y": 35, "text": "A1"},
                                        { "x": 105,  "y": 35, "text": "A2"},
                                        { "x": 10,  "y": 90, "text": "Physical_entity"},  
                                        { "x": 125,  "y": 90, "text": "Theme"},
                                        { "x": -65,  "y": 25, "text": "VOL"},
                                        { "x": 25,  "y": 25, "text": "MOT"},
                                        { "x": 125,  "y": 25, "text": "EXIST"},
                                        { "x": -20,  "y": 45, "text": "FRC"},
                                        { "x": 85,  "y": 45, "text": "PTH"},
                                        { "x": 80,  "y": 100, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Agent", "Figure", "Ground"],

                                "name" : "NetForceVolMotion" 
                            };

     var NetworkConstrainVolitionalForce = {        

                                "arrow":    [   { "x": 60,  "y": 30}, 
                                                { "x": 90,  "y": 30} ],

                                "arrow2":    [   { "x": 60,  "y": 85}, 
                                                { "x": 90,  "y": 85} ],

                                "dottedLeft":    [   { "x": 35,  "y": 40}, 
                                                { "x": 35,  "y": 70} ],

                                "dottedRight":    [   { "x": 135,  "y": 40}, 
                                                { "x": 135,  "y": 70} ],

                                'textToAdd' : [
                                        { "x": 45,  "y": 35, "text": "A0"},
                                        { "x": 100,  "y": 35, "text": "A1"},
                                        { "x": -15,  "y": 90, "text": "Physical_entity"},  
                                        { "x": 120,  "y": 90, "text": "Theme"},
                                        { "x": -15,  "y": 25, "text": "VOL"},
                                        { "x": 120,  "y": 80, "text": "EXIST"},
                                        { "x": 60,  "y": 45, "text": "FRC"},
                                        { "x": 60,  "y": 100, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Physical_entity", "Theme"],

                                "name" : "NetConstrainVolForce" 
                            };

     var NetworkCOSAutonomousCOS = {        


                                "dottedLeft":    [   { "x": 35,  "y": 40}, 
                                                { "x": 35,  "y": 70} ],

                                'textToAdd' : [
                                        { "x": 65,  "y": 35, "text": "A0"},
                                        { "x": 20,  "y": 90, "text": "Patient"},  
                                        { "x": 20,  "y": 25, "text": "PROP"},
                                        { "x": 20,  "y": 80, "text": "PROP"},
                                    ],

                                "argTextToAdd": ["Patient"],

                                "name" : "NetCOSAutoCOS" 
                            };

     var NetworkCOSCauseCOS = {     

                                "arrow":    [   { "x": 10,  "y": 30}, 
                                                { "x": 40,  "y": 30} ],   

                                "dottedLeft":    [   { "x": 65,  "y": 40}, 
                                                    { "x": 65,  "y": 70} ],

                                'textToAdd' : [
                                        { "x": 15,  "y": 35, "text": "A0"},
                                        { "x": 35,  "y": 35, "text": "A1"},
                                        { "x": 50,  "y": 90, "text": "Patient"},  
                                        { "x": -25,  "y": 25, "text": "EXIST"},
                                        { "x": 50,  "y": 25, "text": "PROP"},
                                        { "x": 50,  "y": 80, "text": "PROP"},
                                        { "x": 10,  "y": 45, "text": "CAUSE"}
                                    ],

                                "argTextToAdd": ["Event", "Patient"],

                                "name" : "NetCOSCauseCOS" 
                            };

     var NetworkCOSPhysicalCOS = {     

                                "arrow":    [   { "x": 30,  "y": 30}, 
                                                { "x": 60,  "y": 30} ],   

                                "dottedLeft":    [   { "x": 85,  "y": 40}, 
                                                    { "x": 85,  "y": 70} ],

                                'textToAdd' : [
                                        { "x": 15,  "y": 35, "text": "A0"},
                                        { "x": 55,  "y": 35, "text": "A1"},
                                        { "x": 70,  "y": 90, "text": "Patient"},  
                                        { "x": 70,  "y": 25, "text": "PROP"},
                                        { "x": 70,  "y": 80, "text": "PROP"},
                                        { "x": 30,  "y": 45, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Physical_entity", "Patient"],

                                "name" : "NetCOSPhysCOS" 
                            };


     var NetworkCOSVolitionalCOS = {     

                                "arrow":    [   { "x": 30,  "y": 30}, 
                                                { "x": 60,  "y": 30} ],   

                                "dottedLeft":    [   { "x": 85,  "y": 40}, 
                                                    { "x": 85,  "y": 70} ],

                                'textToAdd' : [
                                        { "x": 25,  "y": 35, "text": "A0"},
                                        { "x": 55,  "y": 35, "text": "A1"},
                                        { "x": 70,  "y": 90, "text": "Patient"}, 
                                        { "x": -15,  "y": 25, "text": "VOL"}, 
                                        { "x": 70,  "y": 25, "text": "PROP"},
                                        { "x": 70,  "y": 80, "text": "PROP"},
                                        { "x": 30,  "y": 45, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Agent", "Patient"],

                                "name" : "NetCOSVolCOS" 
                            };

     var NetworkCOSInstrumentCOS = {     

                                "arrow":    [   { "x": 90,  "y": 30}, 
                                                { "x": 120,  "y": 30} ],   

                                "arrow2":    [   { "x": -25,  "y": 30}, 
                                                { "x": 5,  "y": 30} ],

                                "dottedLeft":    [   { "x": 145,  "y": 40}, 
                                                    { "x": 145,  "y": 70} ],

                                'textToAdd' : [
                                        { "x": -25,  "y": 35, "text": "A0"},
                                        { "x": 15,  "y": 35, "text": "A1"},
                                        { "x": 115,  "y": 35, "text": "A2"},
                                        { "x": 130,  "y": 90, "text": "Patient"},  
                                        { "x": 15,  "y": 25, "text": "INTL"},
                                        { "x": 130,  "y": 25, "text": "PROP"},
                                        { "x": 130,  "y": 80, "text": "PROP"},
                                        { "x": -25,  "y": 45, "text": "FRC"},
                                        { "x": 90,  "y": 45, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Agent", "Physical_entity", "Patient"],

                                "name" : "NetCOSInstCOS" 
                            };

     var NetworkCausativeCOSAutonomousCOS = {     

                                "arrow":    [   { "x": 10,  "y": 85}, 
                                                { "x": 40,  "y": 85} ],   

                                "dottedLeft":    [   { "x": 65,  "y": 40}, 
                                                    { "x": 65,  "y": 70} ],

                                'textToAdd' : [
                                        { "x": 90,  "y": 35, "text": "A0"},
                                        { "x": 50,  "y": 90, "text": "Patient"}, 
                                        { "x": -70,  "y": 90, "text": "Physical_entity"},  
                                        { "x": 50,  "y": 25, "text": "PROP"},
                                        { "x": 50,  "y": 80, "text": "PROP"},
                                        { "x": 10,  "y": 100, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Patient"],

                                "name" : "NetCausativeCOSAutoCOS" 
                            };

     var NetworkCausativeCOSPhysicalCOS = {     

                                "arrow":    [   { "x": 30,  "y": 30}, 
                                                { "x": 60,  "y": 30} ],   

                                "arrow2":    [   { "x": 30,  "y": 85}, 
                                                { "x": 60,  "y": 85} ],  

                                "dottedLeft":    [   { "x": 85,  "y": 40}, 
                                                    { "x": 85,  "y": 70} ],

                                "dottedFarLeft":    [   { "x": -5,  "y": 40}, 
                                                    { "x": -5,  "y": 70} ],
                                'textToAdd' : [
                                        { "x": 15,  "y": 35, "text": "A0"},
                                        { "x": 55,  "y": 35, "text": "A1"},
                                        { "x": -45,  "y": 90, "text": "Physical_entity"}, 
                                        { "x": 70,  "y": 90, "text": "Patient"}, 
                                        { "x": -45,  "y": 25, "text": "INTL"}, 
                                        { "x": 70,  "y": 25, "text": "PROP"},
                                        { "x": 70,  "y": 80, "text": "PROP"},
                                        { "x": 30,  "y": 45, "text": "FRC"},
                                        { "x": 30,  "y": 100, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Physical_entity", "Patient"],

                                "name" : "NetCausativeCOSPhysCOS" 
                            };

     var NetworkCausativeCOSInstrumentCOS = {     

                                "arrow":    [   { "x": 90,  "y": 30}, 
                                                { "x": 120,  "y": 30} ],   

                                "arrow1":    [   { "x": 90,  "y": 85}, 
                                                { "x": 120,  "y": 85} ],

                                "arrow2":    [   { "x": -25,  "y": 30}, 
                                                { "x": 5,  "y": 30} ],

                                "dottedLeft":    [   { "x": 145,  "y": 40}, 
                                                    { "x": 145,  "y": 70} ],

                                "dottedFarLeft":    [   { "x": -45,  "y": 40}, 
                                                    { "x": 45,  "y": 75} ],

                                'textToAdd' : [
                                        { "x": -25,  "y": 35, "text": "A0"},
                                        { "x": 15,  "y": 35, "text": "A1"},
                                        { "x": 115,  "y": 35, "text": "A2"},
                                        { "x": 130,  "y": 90, "text": "Patient"},  
                                        { "x": 15,  "y": 90, "text": "Physical_entity"},  
                                        { "x": -65,  "y": 25, "text": "VOL"},
                                        { "x": 15,  "y": 25, "text": "INTL"},
                                        { "x": 130,  "y": 25, "text": "PROP"},
                                        { "x": 130,  "y": 80, "text": "PROP"},
                                        { "x": -25,  "y": 45, "text": "FRC"},
                                        { "x": 90,  "y": 45, "text": "FRC"},
                                        { "x": 90,  "y": 100, "text": "FRC"},
                                    ],

                                "argTextToAdd": ["Agent", "Physical_entity", "Patient"],

                                "name" : "NetCausativeCOSInstCOS" 
                            };

     var NetworkCausativeCOSVolitionalCOS = {     

                                "arrow":    [   { "x": 30,  "y": 30}, 
                                                { "x": 60,  "y": 30} ],   

                                "arrow2":    [   { "x": 30,  "y": 85}, 
                                                { "x": 60,  "y": 85} ],  

                                "dottedLeft":    [   { "x": 85,  "y": 40}, 
                                                    { "x": 85,  "y": 70} ],

                                'textToAdd' : [
                                        { "x": 25,  "y": 35, "text": "A0"},
                                        { "x": 55,  "y": 35, "text": "A1"},
                                        { "x": -45,  "y": 90, "text": "Physical_entity"}, 
                                        { "x": 70,  "y": 90, "text": "Patient"}, 
                                        { "x": -15,  "y": 25, "text": "VOL"}, 
                                        { "x": 70,  "y": 25, "text": "PROP"},
                                        { "x": 70,  "y": 80, "text": "PROP"},
                                        { "x": 30,  "y": 45, "text": "FRC"},
                                        { "x": 30,  "y": 100, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Agent", "Patient"],

                                "name" : "NetCausativeCOSVolCOS" 
                            };

     var NetworkCausativeCOSAutonomousInternal = {        
 
                                "arrow2":    [   { "x": 30,  "y": 85}, 
                                                { "x": 60,  "y": 85} ],  

                                "dottedLeft":    [   { "x": -10,  "y": 40}, 
                                                    { "x": -10,  "y": 70} ],

                                'textToAdd' : [
                                        { "x": 15,  "y": 35, "text": "A0"},
                                        { "x": -45,  "y": 90, "text": "Physical_entity"}, 
                                        { "x": 70,  "y": 90, "text": "Patient"}, 
                                        { "x": -45,  "y": 25, "text": "INTL"},
                                        { "x": 70,  "y": 80, "text": "PROP"},
                                        { "x": 30,  "y": 100, "text": "FRC"}
                                    ],

                                "argTextToAdd": ["Physical_entity"],

                                "name" : "NetCausativeCOSAutoInt" 
                            };


     var NetworkCausativeCOSInstrumentRemove = {     

                                "arrow":    [   { "x": 90,  "y": 30}, 
                                                { "x": 120,  "y": 30} ],   

                                "arrow1":    [   { "x": 90,  "y": 85}, 
                                                { "x": 120,  "y": 85} ],

                                "arrow2":    [   { "x": -25,  "y": 30}, 
                                                { "x": 5,  "y": 30} ],

                                "solid1":    [   { "x": 170,  "y": 30}, 
                                                { "x": 200,  "y": 30} ],

                                "dottedLeft":    [   { "x": 145,  "y": 40}, 
                                                    { "x": 145,  "y": 70} ],

                                "dottedFarLeft":    [   { "x": -45,  "y": 40}, 
                                                    { "x": 45,  "y": 75} ],

                                'textToAdd' : [
                                        { "x": -25,  "y": 35, "text": "A0"},
                                        { "x": 15,  "y": 35, "text": "A1"},
                                        { "x": 115,  "y": 35, "text": "A2"},
                                        { "x": 190,  "y": 35, "text": "A3"},
                                        { "x": 130,  "y": 90, "text": "Patient"},  
                                        { "x": 15,  "y": 90, "text": "Physical_entity"},  
                                        { "x": -65,  "y": 25, "text": "VOL"},
                                        { "x": 15,  "y": 25, "text": "INTL"},
                                        { "x": 130,  "y": 25, "text": "-MER"},
                                        { "x": 210,  "y": 25, "text": "EXIST"},
                                        { "x": 130,  "y": 80, "text": "PROP"},
                                        { "x": -25,  "y": 45, "text": "FRC"},
                                        { "x": 90,  "y": 45, "text": "FRC"},
                                        { "x": 170,  "y": 45, "text": "PTH"},
                                        { "x": 90,  "y": 100, "text": "FRC"},
                                    ],

                                "argTextToAdd": ["Agent", "Physical_entity", "Patient", "Ground"],

                                "name" : "NetCausativeCOSInstRem" 
                            };


     var NetworkCausativeCOSVolitionalRemove = {     

                                "arrow1":    [   { "x": 30,  "y": 85}, 
                                                { "x": 60,  "y": 85} ],

                                "arrow2":    [   { "x": 30,  "y": 30}, 
                                                { "x": 60,  "y": 30} ],

                                "solid1":    [   { "x": 110,  "y": 30}, 
                                                { "x": 140,  "y": 30} ],

                                "dottedLeft":    [   { "x": 85,  "y": 40}, 
                                                    { "x": 85,  "y": 70} ],

                                "dottedFarLeft":    [   { "x": -15,  "y": 40}, 
                                                    { "x": -15,  "y": 75} ],

                                'textToAdd' : [
                                        { "x": 10,  "y": 35, "text": "A0"},
                                        { "x": 55,  "y": 35, "text": "A1"},
                                        { "x": 130,  "y": 35, "text": "A2"},
                                        { "x": 70,  "y": 90, "text": "Patient"},  
                                        { "x": -50,  "y": 90, "text": "Physical_entity"},  
                                        { "x": -30,  "y": 25, "text": "VOL"},
                                        { "x": 70,  "y": 25, "text": "-MER"},
                                        { "x": 150,  "y": 25, "text": "EXIST"},
                                        { "x": 70,  "y": 80, "text": "PROP"},
                                        { "x": 30,  "y": 45, "text": "FRC"},
                                        { "x": 110,  "y": 45, "text": "PTH"},
                                        { "x": 30,  "y": 100, "text": "FRC"},
                                    ],

                                "argTextToAdd": ["Agent", "Patient", "Ground"],

                                "name" : "NetCausativeCOSVolRem" 
                            };

     var NetworkCausativeCOSInstrumentAttend = {     

                                "arrow":    [   { "x": 90,  "y": 30}, 
                                                { "x": 120,  "y": 30} ],   

                                "arrow1":    [   { "x": 90,  "y": 85}, 
                                                { "x": 120,  "y": 85} ],

                                "arrow2":    [   { "x": -25,  "y": 30}, 
                                                { "x": 5,  "y": 30} ],

                                "dottedLeft":    [   { "x": 55,  "y": 40}, 
                                                    { "x": 55,  "y": 70} ],

                                "dottedFarLeft":    [   { "x": -45,  "y": 40}, 
                                                    { "x": 45,  "y": 75} ],

                                "dottedRight":    [   { "x": 145,  "y": 40}, 
                                                { "x": 145,  "y": 70} ],

                                'textToAdd' : [
                                        { "x": -25,  "y": 35, "text": "A0"},
                                        { "x": 15,  "y": 35, "text": "A1"},
                                        { "x": 115,  "y": 35, "text": "A2"},
                                        { "x": 130,  "y": 90, "text": "Patient"},  
                                        { "x": 15,  "y": 90, "text": "Physical_entity"},  
                                        { "x": -65,  "y": 25, "text": "VOL"},
                                        { "x": 130,  "y": 80, "text": "PROP"},
                                        { "x": -25,  "y": 45, "text": "FRC"},
                                        { "x": 90,  "y": 45, "text": "ATT"},
                                        { "x": 90,  "y": 100, "text": "FRC"},
                                    ],

                                "argTextToAdd": ["Agent", "Physical_entity", "Patient"],

                                "name" : "NetCausativeCOSInstAtt" 
                            };

     var NetworkAbsorbPhysicalCOS = { 

                                "arrow":    [   { "x": -75,  "y": 30}, 
                                                { "x": -45,  "y": 30} ],  

                                "arrow1":    [   { "x": -75,  "y": 75}, 
                                                { "x": -45,  "y": 75} ],

                                "solid2":    [   { "x": 20,  "y": 75}, 
                                                { "x": 50,  "y": 75} ],

                                "arrow2":    [   { "x": 200,  "y": 75}, 
                                                { "x": 230,  "y": 75} ],

                                "dottedFarLeft":    [   { "x": -105,  "y": 40}, 
                                                    { "x": -105,  "y": 70} ],

                                "dottedLeft":    [   { "x": 0,  "y": 40}, 
                                                    { "x": 265,  "y": 70} ],

                                "rectangle": {
                                              "x":55, 
                                              "y":50,
                                              "width": 140,
                                              "height": 50
                                },

                                'textToAdd' : [
                                        { "x": -90,  "y": 35, "text": "A0"},
                                        { "x": -50,  "y": 35, "text": "A1"},
                                        { "x": -150,  "y": 80, "text": "Physical_entity"},
                                        { "x": -150,  "y": 25, "text": "INTL"},
                                        { "x": -75,  "y": 45, "text": "FRC"},
                                        { "x": -75,  "y": 90, "text": "FRC"}, 
                                        { "x": -35,  "y": 80, "text": "Substance"},
                                        { "x": -35,  "y": 70, "text": "MER"},
                                        { "x": 20,  "y": 90, "text": "PTH"},
                                        { "x": 60,  "y": 80, "text": "Source_loc"},
                                        { "x": 60,  "y": 70, "text": "EXIST"},
                                        { "x": 120,  "y": 80, "text": "Physical_entity"}, 
                                        { "x": 120,  "y": 70, "text": "EXIST"},
                                        { "x": 200,  "y": 90, "text": "FRC"},
                                        { "x": 250,  "y": 80, "text": "Substance"},
                                        { "x": 250,  "y": 70, "text": "COS"},
                                        
                                    ], 

                                "argTextToAdd": ["Physical_entity", "Patient"],                                  

                                "name" : "NetAbsorbPhysCOS" 
                            };

     var NetworkAbsorbPhysicalRemove = { 

                                "arrow":    [   { "x": -75,  "y": 30}, 
                                                { "x": -45,  "y": 30} ],  

                                "arrow1":    [   { "x": -75,  "y": 75}, 
                                                { "x": -45,  "y": 75} ],

                                "solid1":    [   { "x": 20,  "y": 30}, 
                                                { "x": 50,  "y": 30} ],

                                "solid2":    [   { "x": 20,  "y": 75}, 
                                                { "x": 50,  "y": 75} ],

                                "arrow2":    [   { "x": 200,  "y": 75}, 
                                                { "x": 230,  "y": 75} ],

                                "dottedFarLeft":    [   { "x": -105,  "y": 40}, 
                                                    { "x": -105,  "y": 70} ],

                                "dottedLeft":    [   { "x": -10,  "y": 40}, 
                                                    { "x": -10,  "y": 65} ],

                                "dottedRight":    [   { "x": 80,  "y": 40}, 
                                                    { "x": 80,  "y": 65} ],
                                "rectangle": {
                                              "x":55, 
                                              "y":50,
                                              "width": 140,
                                              "height": 50
                                },

                                'textToAdd' : [
                                        { "x": -90,  "y": 35, "text": "A0"},
                                        { "x": -40,  "y": 35, "text": "A1"},
                                        { "x": 40,  "y": 35, "text": "A2"},
                                        { "x": -150,  "y": 80, "text": "Physical_entity"},
                                        { "x": -150,  "y": 25, "text": "INTL"},
                                        { "x": -75,  "y": 45, "text": "FRC"},
                                        { "x": -75,  "y": 90, "text": "FRC"}, 
                                        { "x": -35,  "y": 80, "text": "Substance"},
                                        { "x": -25,  "y": 25, "text": "-MER"},
                                        { "x": -35,  "y": 70, "text": "MER"},
                                        { "x": 20,  "y": 90, "text": "PTH"},
                                        { "x": 60,  "y": 80, "text": "Source_loc"},
                                        { "x": 60,  "y": 25, "text": "EXIST"},
                                        { "x": 60,  "y": 70, "text": "EXIST"},
                                        { "x": 120,  "y": 80, "text": "Physical_entity"}, 
                                        { "x": 120,  "y": 70, "text": "EXIST"},
                                        { "x": 200,  "y": 90, "text": "FRC"},
                                        { "x": 250,  "y": 80, "text": "Substance"},
                                        { "x": 250,  "y": 70, "text": "COS"},
                                        
                                    ], 

                                "argTextToAdd": ["Physical_entity", "Patient", "Ground"],                                  

                                "name" : "NetAbsorbPhysRemove" 
                            };

     var NetworkAbsorbAutonomousInternal = { 


                                "arrow1":    [   { "x": -75,  "y": 75}, 
                                                { "x": -45,  "y": 75} ],

                                "solid2":    [   { "x": 20,  "y": 75}, 
                                                { "x": 50,  "y": 75} ],

                                "arrow2":    [   { "x": 200,  "y": 75}, 
                                                { "x": 230,  "y": 75} ],

                                "dottedFarLeft":    [   { "x": -105,  "y": 40}, 
                                                    { "x": -105,  "y": 70} ],

                                "rectangle": {
                                              "x":55, 
                                              "y":50,
                                              "width": 140,
                                              "height": 50
                                },

                                'textToAdd' : [
                                        { "x": -90,  "y": 35, "text": "A0"},
                                        { "x": -150,  "y": 80, "text": "Physical_entity"},
                                        { "x": -150,  "y": 25, "text": "INTL"},
                                        { "x": -75,  "y": 90, "text": "FRC"}, 
                                        { "x": -35,  "y": 80, "text": "Substance"},
                                        { "x": -35,  "y": 70, "text": "MER"},
                                        { "x": 20,  "y": 90, "text": "PTH"},
                                        { "x": 60,  "y": 80, "text": "Source_loc"},
                                        { "x": 60,  "y": 70, "text": "EXIST"},
                                        { "x": 120,  "y": 80, "text": "Physical_entity"}, 
                                        { "x": 120,  "y": 70, "text": "EXIST"},
                                        { "x": 200,  "y": 90, "text": "FRC"},
                                        { "x": 250,  "y": 80, "text": "Substance"},
                                        { "x": 250,  "y": 70, "text": "COS"},
                                        
                                    ], 

                                "argTextToAdd": ["Physical_entity"],                                  

                                "name" : "NetAbsorbAutoInt" 
                            };

     var NetworkAbsorbVolitionalCOS = { 

                                "arrow":    [   { "x": -55,  "y": 30}, 
                                                { "x": -25,  "y": 30} ],  

                                "arrow1":    [   { "x": -55,  "y": 75}, 
                                                { "x": -25,  "y": 75} ],

                                "solid2":    [   { "x": 40,  "y": 75}, 
                                                { "x": 70,  "y": 75} ],

                                "arrow2":    [   { "x": 220,  "y": 75}, 
                                                { "x": 250,  "y": 75} ],

                                "dottedFarLeft":    [   { "x": -85,  "y": 40}, 
                                                    { "x": -85,  "y": 70} ],

                                "dottedLeft":    [   { "x": 20,  "y": 40}, 
                                                    { "x": 285,  "y": 70} ],

                                "rectangle": {
                                              "x":75, 
                                              "y":50,
                                              "width": 140,
                                              "height": 50
                                },

                                'textToAdd' : [
                                        { "x": -70,  "y": 35, "text": "A0"},
                                        { "x": -30,  "y": 35, "text": "A1"},
                                        { "x": -130,  "y": 80, "text": "Physical_entity"},
                                        { "x": -130,  "y": 25, "text": "VOL"},
                                        { "x": -20,  "y": 25, "text": "PROP"},
                                        { "x": -55,  "y": 45, "text": "FRC"},
                                        { "x": -55,  "y": 90, "text": "FRC"}, 
                                        { "x": -15,  "y": 80, "text": "Substance"},
                                        { "x": -15,  "y": 70, "text": "MER"},
                                        { "x": 40,  "y": 90, "text": "PTH"},
                                        { "x": 80,  "y": 80, "text": "Source_loc"},
                                        { "x": 80,  "y": 70, "text": "EXIST"},
                                        { "x": 140,  "y": 80, "text": "Physical_entity"}, 
                                        { "x": 140,  "y": 70, "text": "EXIST"},
                                        { "x": 220,  "y": 90, "text": "FRC"},
                                        { "x": 270,  "y": 80, "text": "Substance"},
                                        { "x": 270,  "y": 70, "text": "COS"},
                                        
                                    ], 

                                "argTextToAdd": ["Physical_entity", "Substance"],                                  

                                "name" : "NetAbsorbVolCOS" 
                            };

    if (FDCategory === 'Autonomous Remove') { 

        if (nameGeneralNetwork === 'RemoveDepriveNetwork') {
            return NetworkAutonomousRemove;
        } else if (nameGeneralNetwork === 'EmissionNetwork') {
            return NetworkEmissionAutonomousRemove;
        }
    }

    if (FDCategory === 'Volitional Remove') { 

        if (nameGeneralNetwork === 'RemoveDepriveNetwork') {
            return NetworkVolitionalRemove;
        } else if (nameGeneralNetwork === 'ForceNetwork') {
            return NetworkForceVolitionalRemove;
        } else if (nameGeneralNetwork === 'CausativeCOSNetwork') {
            return NetworkCausativeCOSVolitionalRemove;
        }
    }

    if (FDCategory === 'Instrument Remove') { 

        if (nameGeneralNetwork === 'CausativeCOSNetwork') {
            return NetworkCausativeCOSInstrumentRemove;
        } 
    }

    if (FDCategory === 'Physical Remove') { 

        if (nameGeneralNetwork === 'AbsorbNetwork') {
            return NetworkAbsorbPhysicalRemove;
        } 
    }

    else if (FDCategory === 'Volitional Place') { 

        if (nameGeneralNetwork === 'MereologicalNetwork') {
            return NetworkMereologicalVolitionalPlace; ; 
        } else if (nameGeneralNetwork === 'IllustrationNetwork') {
            return NetworkIllustrationVolitionalPlace;
        } else if (nameGeneralNetwork === 'EmissionNetwork') {
            return NetworkEmissionVolitionalPlace;
        } else if (nameGeneralNetwork === 'ForceNetwork') {
            return NetworkForceVolitionalPlace;
        }

    }

    else if (FDCategory === 'Self-Volitional Place') { return NetworkSelfVolitionalPlace; }

    else if (FDCategory === 'Volitional Provide') { 

        if (nameGeneralNetwork === 'ProvidePlaceNetwork') {
            return NetworkVolitionalProvide; 
        } else if (nameGeneralNetwork === 'IllustrationNetwork') {
            return NetworkIllustrationVolitionalProvide;
        }
    }

   else if (FDCategory === 'Volitional Attend') {

        if (nameGeneralNetwork === 'RemoveDepriveNetwork') {
            return NetworkVolitionalAttend;
        } else if (nameGeneralNetwork === 'EmissionNetwork') {
            return NetworkEmissionVolitionalAttend;
        } else if (nameGeneralNetwork === 'ForceNetwork') {
            return NetworkForceVolitionalAttend;
        }

    }

    else if (FDCategory === 'Autonomous Internal') { 

        // TODO: check return

        if (nameGeneralNetwork === 'RemoveDepriveNetwork') {
            return NetworkAutonomousInternal; 
        } else if (nameGeneralNetwork === 'ProvidePlaceNetwork') {
            return NetworkAutonomousInternal;
        } else if (nameGeneralNetwork === 'CreationNetwork') {
            return NetworkCreationAutonomousInternal;
        } else if (nameGeneralNetwork === 'EmissionNetwork') {
            return NetworkEmissionAutonomousInternal;
        } else if (nameGeneralNetwork === 'ForceNetwork') {
            return NetworkForceAutonomousInternal;
        } else if (nameGeneralNetwork === 'CausativeCOSNetwork') {
            return NetworkCausativeCOSAutonomousInternal;
        } else if (nameGeneralNetwork === 'AbsorbNetwork') {
            return NetworkAbsorbAutonomousInternal;
        }
    }

    else if (FDCategory === 'Volitional Internal') {

        if (nameGeneralNetwork === 'CarryMotionNetwork') {
            return NetworkVolitionalInternal;
        } else if (nameGeneralNetwork === 'EmissionNetwork') {
            return NetworkEmissionVolitionalInternal;
        } else if (nameGeneralNetwork === 'ForceNetwork') {
            return NetworkForceVolitionalInternal;
        }

    }

    else if (FDCategory === 'Autonomous Deprive') { return NetworkAutonomousDeprive; }

    else if (FDCategory === 'Volitional Deprive') { 

        if (nameGeneralNetwork === 'RemoveDepriveNetwork') {
            return NetworkVolitionalDeprive; 
        } else if (nameGeneralNetwork === 'EmissionNetwork') {
            return NetworkEmissionVolitionalDeprive;
        }
    }

    else if (FDCategory === 'Physical Deprive') { return NetworkPhysicalDeprive; }

    else if (FDCategory === 'Autonomous Provide') { return NetworkAutonomousProvide; }


    else if (FDCategory === 'Autonomous Motion') { 

        if (nameGeneralNetwork === 'GeneralMotionNetwork') {
            return NetworkAutonomousMotion; 
        } else if (nameGeneralNetwork === 'EmissionNetwork') {
            return NetworkEmissionAutonomousMotion;
        }
    }

    else if (FDCategory === 'Self-volitional Motion') { return NetworkSelfVolitionalMotion; }

    else if (FDCategory === 'Volitional Motion') { 

        if (nameGeneralNetwork === 'GeneralMotionNetwork') {
            return NetworkGeneralVolitionalMotion; 
        } else if (nameGeneralNetwork === 'SendMotionNetwork') {
            return NetworkSendVolitionalMotion;
        } else if (nameGeneralNetwork === 'CarryMotionNetwork') {
            return NetworkCarryVolitionalMotion;
        } else if (nameGeneralNetwork === 'ThrowMotionNetwork') {
            return NetworkThrowVolitionalMotion;
        } else if (nameGeneralNetwork === 'ForceNetwork') {
            return NetworkForceVolitionalMotion;
        }
    }

    else if (FDCategory === 'Physical Motion') { return NetworkCarryPhysicalMotion; }

    else if (FDCategory === 'Mutual Motion') { return NetworkMutualMotion; }

    else if (FDCategory === 'Mutual') { return NetworkMutual; }

    else if (FDCategory === 'Autonomous COS') { 

        if (nameGeneralNetwork === 'COSNetwork') {
            return NetworkCOSAutonomousCOS; 
        } else if (nameGeneralNetwork === 'CausativeCOSNetwork') {
            return NetworkCausativeCOSAutonomousCOS;
        }
    }

    else if (FDCategory === 'Volitional COS') { 

        if (nameGeneralNetwork === 'ForceNetwork') {
            return NetworkForceVolitionalCOS; 
        } else if (nameGeneralNetwork === 'GeneralMotionNetwork') {
            return NetworkVolitionalCOS;
        } else if (nameGeneralNetwork === 'COSNetwork') {
            return NetworkCOSVolitionalCOS;
        } else if (nameGeneralNetwork === 'CausativeCOSNetwork') {
            return NetworkCausativeCOSVolitionalCOS;
        } else if (nameGeneralNetwork === 'AbsorbNetwork') {
            return NetworkAbsorbVolitionalCOS;
        }
    }

    else if (FDCategory === 'Instrument COS') { 

        if (nameGeneralNetwork === 'ForceNetwork') {
            return NetworkForceInstrumentCOS; 
        } else if (nameGeneralNetwork === 'COSNetwork') {
            return NetworkCOSInstrumentCOS;
        } else if (nameGeneralNetwork === 'CausativeCOSNetwork') {
            return NetworkCausativeCOSInstrumentCOS;
        }
    }

    else if (FDCategory === 'Physical COS') { 

        if (nameGeneralNetwork === 'ForceNetwork') {
            return NetworkForcePhysicalCOS; 
        } else if (nameGeneralNetwork === 'COSNetwork') {
            return NetworkCOSPhysicalCOS;
        } else if (nameGeneralNetwork === 'CausativeCOSNetwork') {
            return NetworkCausativeCOSPhysicalCOS;
        } else if (nameGeneralNetwork === 'AbsorbNetwork') {
            return NetworkAbsorbPhysicalCOS;
        }
    }

    else if (FDCategory === 'Cause COS') { return NetworkCOSCauseCOS; }

    else if (FDCategory === 'Volitional Create') { 

        if (nameGeneralNetwork === 'IllustrationNetwork') {
            return NetworkIllustrationVolitionalCreate; 
        } else if (nameGeneralNetwork === 'CreationNetwork') {
            return NetworkCreationVolitionalCreate;
        } else if (nameGeneralNetwork === 'EmissionNetwork') {
            return NetworkEmissionVolitionalCreate;
        }

    }

    else if (FDCategory === 'Volitional Create Affect') { return NetworkCreationVolitionalCreateAffect; }

    else if (FDCategory === 'Physical Create') { 

        if (nameGeneralNetwork === 'EmissionNetwork') {
            return NetworkEmissionPhysicalCreate; 
        } else if (nameGeneralNetwork === 'ForceNetwork') {
            return NetworkForcePhysicalCreate;
        }
    }

    else if (FDCategory === 'Autonomous Dynamic Texture') { return NetworkEmissionAutonomousDynamicTexture; }
    
    else if (FDCategory === 'Autonomous Location') { return NetworkEmissionAutonomousLocation; }

    else if (FDCategory === 'Physical Place') { return NetworkEmissionPhysicalPlace; }

    else if (FDCategory === 'Volitional Force') { 

        if (nameGeneralNetwork === 'ForceNetwork') {
            return NetworkForceVolitionalForce; 
        } else if (nameGeneralNetwork === 'ConstrainNetwork') {
            return NetworkConstrainVolitionalForce;
        }
    }

    else if (FDCategory === 'Volitional Force XPR') { return NetworkForceVolitionalForceXPR; }

    else if (FDCategory === 'Instrument Force') { return NetworkForceInstrumentForce; }

    else if (FDCategory === 'Instrument Force XPR') { return NetworkForceInstrumentForceXPR; }

    else if (FDCategory === 'Physical Force') { return NetworkForcePhysicalForce; }

    else if (FDCategory === 'Manipulate Force') { return NetworkForceManipulateForce; }

    else if (FDCategory === 'Instrument Attend') { 

        if (nameGeneralNetwork === 'ForceNetwork') {
            return NetworkForceInstrumentAttend; 
        } else if (nameGeneralNetwork === 'CausativeCOSNetwork') {
            return NetworkCausativeCOSInstrumentAttend;
        }
    }

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

    var IllustrationNetwork = {        

                                "solid2":    [   { "x": 110,  "y": 65}, 
                                                { "x": 140,  "y": 65} ],

                                "arrow":    [   { "x": 10,  "y": 65}, 
                                                { "x": 40,  "y": 65} ],

                                'textToAdd' : [
                                        { "x": -70,  "y": 70, "text": "Physical_entity"}, 
                                        { "x": 55,  "y": 70, "text": "Creation"}, 
                                        { "x": 150,  "y": 70, "text": "Medium"},
                                        { "x": 50,  "y": 55, "text": "DES | MER"},
                                        { "x": 150,  "y": 55, "text": "MER"},
                                        { "x": 10,  "y": 80, "text": "FRC"},
                                        { "x": 110,  "y": 80, "text": "PTH"}
                                    ],

                            "caption": "ASC causal chains used with illustration network",

                            "chains": [{"network": "Volitional Place", "parent": "IllustrationNetwork"},
                                       {"network": "Volitional Create", "parent": "IllustrationNetwork"},
                                       {"network": "Volitional Provide", "parent": "IllustrationNetwork"}
                                    ],

                            "name" : "Illustration network" 
                        };

    var CreationNetwork = {        


                                "arrow":    [   { "x": 50,  "y": 65}, 
                                                { "x": 80,  "y": 65} ],

                                'textToAdd' : [
                                        { "x": -30,  "y": 70, "text": "Physical_entity"}, 
                                        { "x": 90,  "y": 70, "text": "Creation"}, 
                                        { "x": 85,  "y": 55, "text": "DES | MER"},
                                        { "x": 50,  "y": 80, "text": "FRC"}
                                    ],

                            "caption": "ASC causal chains used with creation network",

                            "chains": [{"network": "Volitional Create", "parent": "CreationNetwork"},
                                       {"network": "Volitional Create Affect", "parent": "CreationNetwork"},
                                       {"network": "Autonomous Internal", "parent": "CreationNetwork"}
                                    ],

                            "name" : "Creation network" 
                        };

    var EmissionNetwork = {        

                                "solid2":    [   { "x": 40,  "y": 58}, 
                                                { "x": 70,  "y": 58} ],

                                "arrow":    [   { "x": 40,  "y": 65}, 
                                                { "x": 70,  "y": 65} ],

                                'textToAdd' : [
                                        { "x": -10,  "y": 70, "text": "Source"}, 
                                        { "x": 80,  "y": 70, "text": "Creation"}, 
                                        { "x": 40,  "y": 55, "text": "PTH"},
                                        { "x": 40,  "y": 80, "text": "FRC"}
                                    ],

                            "caption": "ASC causal chains used with emission network",

                            "chains": [{"network": "Physical Create", "parent": "EmissionNetwork"},
                                        {"network": "Volitional Create", "parent": "EmissionNetwork"},
                                       {"network": "Autonomous Dynamic Texture", "parent": "EmissionNetwork"},
                                       {"network": "Autonomous Internal", "parent": "EmissionNetwork"},
                                       {"network": "Autonomous Location", "parent": "EmissionNetwork"},
                                       {"network": "Volitional Internal", "parent": "EmissionNetwork"},
                                       {"network": "Autonomous Motion", "parent": "EmissionNetwork"}, 
                                       {"network": "Autonomous Remove", "parent": "EmissionNetwork"}, 
                                       {"network": "Volitional Deprive", "parent": "EmissionNetwork"},
                                       {"network": "Physical Place", "parent": "EmissionNetwork"},
                                       {"network": "Volitional Place", "parent": "EmissionNetwork"},
                                       {"network": "Volitional Attend", "parent": "EmissionNetwork"},
                                    ],

                            "name" : "Emission network" 
                        };

    var ForceNetwork = {        

                                "arrow":    [   { "x": 50,  "y": 65}, 
                                                { "x": 80,  "y": 65} ],

                                'textToAdd' : [
                                        { "x": -30,  "y": 70, "text": "Physical_entity"}, 
                                        { "x": 100,  "y": 70, "text": "Theme"}, 
                                        { "x": 50,  "y": 80, "text": "FRC"}
                                    ],

                            "caption": "ASC causal chains used with force network",

                            "chains": [{"network": "Volitional Force", "parent": "ForceNetwork"},
                                        {"network": "Volitional Force XPR", "parent": "ForceNetwork"},
                                        {"network": "Instrument Force", "parent": "ForceNetwork"},
                                        {"network": "Instrument Force XPR", "parent": "ForceNetwork"},
                                       {"network": "Physical Force", "parent": "ForceNetwork"},
                                       {"network": "Manipulate Force", "parent": "ForceNetwork"},
                                       {"network": "Volitional COS", "parent": "ForceNetwork"},
                                       {"network": "Instrument COS", "parent": "ForceNetwork"},
                                       {"network": "Physical COS", "parent": "ForceNetwork"},
                                       {"network": "Volitional Place", "parent": "ForceNetwork"}, 
                                       {"network": "Volitional Remove", "parent": "ForceNetwork"}, 
                                       {"network": "Volitional Attend", "parent": "ForceNetwork"}, 
                                       {"network": "Instrument Attend", "parent": "ForceNetwork"},
                                       {"network": "Volitional Internal", "parent": "ForceNetwork"},
                                       {"network": "Autonomous Internal", "parent": "ForceNetwork"},
                                       {"network": "Physical Create", "parent": "ForceNetwork"},
                                       {"network": "Volitional Motion", "parent": "ForceNetwork"},
                                    ],

                            "name" : "Emission network" 
                        };


    var ConstrainNetwork = {        

                                "arrow":    [   { "x": 50,  "y": 65}, 
                                                { "x": 80,  "y": 65} ],

                                'textToAdd' : [
                                        { "x": -30,  "y": 70, "text": "Physical_entity"}, 
                                        { "x": 100,  "y": 70, "text": "Theme"}, 
                                        { "x": 50,  "y": 80, "text": "FRC"},
                                        { "x": 100,  "y": 55, "text": "EXIST"},
                                    ],

                            "caption": "ASC causal chains used with constrain network",

                            "chains": [{"network": "Volitional Force", "parent": "ConstrainNetwork"}],

                            "name" : "Constrain network" 
                        };


    var FormNetwork = {        

                                "solid2":    [   { "x": 60,  "y": 65}, 
                                                { "x": 90,  "y": 65} ],


                                'textToAdd' : [
                                        { "x": 10,  "y": 70, "text": "Material"}, 
                                        { "x": 100,  "y": 70, "text": "Creation"}, 
                                        { "x": 10,  "y": 55, "text": "COS"},
                                        { "x": 100,  "y": 55, "text": "DES"},
                                        { "x": 60,  "y": 80, "text": "TBD"}
                                    ],

                            "caption": "ASC causal chains used with form network",

                            "chains": [{"network": "Autonomous Form", "parent": ""},
                                       {"network": "Volitional Form", "parent": ""},
                                    ],

                            "name" : "Form network" 
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
                                       //{"network": "Physical Motion", "parent": "CarryMotionNetwork"}
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


    var COSNetwork = {        

                            'textToAdd' : [
                                    { "x": 50,  "y": 70, "text": "Patient"}, 
                                    { "x": 50,  "y": 60, "text": "COS"},
                                ],

                            "caption": "ASC causal chains used with COS network",

                            "chains": [{"network": "Autonomous COS", "parent": "COSNetwork"},
                                       {"network": "Cause COS", "parent": "COSNetwork"},
                                       {"network": "Physical COS", "parent": "COSNetwork"},
                                       {"network": "Volitional COS", "parent": "COSNetwork"},
                                       {"network": "Instrument COS", "parent": "COSNetwork"}
                                    ],

                            "name" : "COS network" 
                        };


    var CausativeCOSNetwork = {        

                                "arrow":    [   { "x": 50,  "y": 65}, 
                                                { "x": 80,  "y": 65} ],

                                'textToAdd' : [
                                        { "x": -30,  "y": 70, "text": "Physical_entity"}, 
                                        { "x": 100,  "y": 70, "text": "Theme"}, 
                                        { "x": 50,  "y": 80, "text": "FRC"},
                                        { "x": 100,  "y": 60, "text": "COS"},
                                    ],

                            "caption": "ASC causal chains used with causative COS network",

                            "chains": [{"network": "Autonomous COS", "parent": "CausativeCOSNetwork"},
                                       {"network": "Physical COS", "parent": "CausativeCOSNetwork"},
                                       {"network": "Instrument COS", "parent": "CausativeCOSNetwork"},
                                       {"network": "Volitional COS", "parent": "CausativeCOSNetwork"},
                                       {"network": "Autonomous Internal", "parent": "CausativeCOSNetwork"},
                                       {"network": "Instrument Remove", "parent": "CausativeCOSNetwork"},
                                       {"network": "Volitional Remove", "parent": "CausativeCOSNetwork"},
                                       {"network": "Instrument Attend", "parent": "CausativeCOSNetwork"}
                                    ],

                            "name" : "Causative COS network" 
                        };

    var AbsorbNetwork = {        

                                "arrow1":    [   { "x": -75,  "y": 75}, 
                                                { "x": -45,  "y": 75} ],

                                "solid2":    [   { "x": 20,  "y": 75}, 
                                                { "x": 50,  "y": 75} ],

                                "arrow2":    [   { "x": 200,  "y": 75}, 
                                                { "x": 230,  "y": 75} ],

                                "rectangle": {
                                              "x":55, 
                                              "y":50,
                                              "width": 140,
                                              "height": 50
                                },


                                'textToAdd' : [
                                        { "x": -150,  "y": 80, "text": "Physical_entity"},
                                        { "x": -75,  "y": 90, "text": "FRC"}, 
                                        { "x": -35,  "y": 80, "text": "Substance"},
                                        { "x": -35,  "y": 70, "text": "MER"},
                                        { "x": 20,  "y": 90, "text": "PTH"},
                                        { "x": 60,  "y": 80, "text": "Source_loc"},
                                        { "x": 60,  "y": 70, "text": "EXIST"},
                                        { "x": 120,  "y": 80, "text": "Physical_entity"}, 
                                        { "x": 120,  "y": 70, "text": "EXIST"},
                                        { "x": 200,  "y": 90, "text": "FRC"},
                                        { "x": 250,  "y": 80, "text": "Substance"},
                                        { "x": 250,  "y": 70, "text": "COS"},
                                        
                                    ],

                            "caption": "ASC causal chains used with absorb network",

                            "chains": [
                                       {"network": "Physical COS", "parent": "AbsorbNetwork"},
                                       {"network": "Physical Remove", "parent": "AbsorbNetwork"},
                                       {"network": "Autonomous Internal", "parent": "AbsorbNetwork"},
                                       {"network": "Volitional COS", "parent": "AbsorbNetwork"}
                                    ],

                            "name" : "Absorb network" 
                        };


    var IngestionNetwork = {        

                                "arrow":    [   { "x": -100,  "y": 75}, 
                                                { "x": -70,  "y": 75} ],

                                "solid2":    [   { "x": 80,  "y": 75}, 
                                                { "x": 110,  "y": 75} ],

                                "arrow1":    [   { "x": 5,  "y": 75}, 
                                                { "x": 35,  "y": 75} ],

                                "arrow2":    [   { "x": 220,  "y": 75}, 
                                                { "x": 250,  "y": 75} ],

                                "rectangle": {
                                              "x":115, 
                                              "y":50,
                                              "width": 100,
                                              "height": 50
                                },


                                'textToAdd' : [
                                        { "x": -130,  "y": 80, "text": "Eater"},
                                        { "x": -130,  "y": 70, "text": "VOL"},
                                        { "x": -100,  "y": 90, "text": "FRC"}, 
                                        { "x": -55,  "y": 80, "text": "Instrument"},
                                        { "x": -55,  "y": 70, "text": "INTL"},
                                        { "x": 5,  "y": 90, "text": "FRC"}, 
                                        { "x": 50,  "y": 80, "text": "Food"},
                                        { "x": 50,  "y": 70, "text": "MER"},
                                        { "x": 80,  "y": 90, "text": "PTH"},
                                        { "x": 120,  "y": 80, "text": "Source_loc+"},
                                        { "x": 120,  "y": 70, "text": "EXIST"},
                                        { "x": 180,  "y": 80, "text": "Eater"}, 
                                        { "x": 180,  "y": 70, "text": "EXIST"},
                                        { "x": 220,  "y": 90, "text": "FRC"},
                                        { "x": 260,  "y": 80, "text": "Patient"},
                                        { "x": 260,  "y": 70, "text": "COS"},
                                        
                                    ],

                            "caption": "ASC causal chains used with ingestion network",

                            "chains": [
                                       {"network": "Volitional Remove", "parent": "IngestionNetwork"},
                                       {"network": "Volitional COS", "parent": "IngestionNetwork"}
                                    ],

                            "name" : "Ingestion network" 
                        };

    var FeedingNetwork = {        

                                "arrow":    [   { "x": -120,  "y": 75}, 
                                                { "x": -90,  "y": 75} ],

                                "solid2":    [   { "x": 60,  "y": 75}, 
                                                { "x": 90,  "y": 75} ],

                                "arrow1":    [   { "x": -15,  "y": 75}, 
                                                { "x": 15,  "y": 75} ],

                                "arrow2":    [   { "x": 200,  "y": 75}, 
                                                { "x": 230,  "y": 75} ],

                                "rectangle": {
                                              "x":95, 
                                              "y":50,
                                              "width": 100,
                                              "height": 50
                                },


                                'textToAdd' : [
                                        { "x": -150,  "y": 80, "text": "Eater"},
                                        { "x": -150,  "y": 70, "text": "VOL"},
                                        { "x": -120,  "y": 90, "text": "FRC"}, 
                                        { "x": -75,  "y": 80, "text": "Instrument"},
                                        { "x": -75,  "y": 70, "text": "INTL"},
                                        { "x": -15,  "y": 90, "text": "FRC"}, 
                                        { "x": 30,  "y": 80, "text": "Food"},
                                        { "x": 30,  "y": 70, "text": "MOT"},
                                        { "x": 60,  "y": 90, "text": "PTH"},
                                        { "x": 100,  "y": 80, "text": "Source_loc"},
                                        { "x": 100,  "y": 70, "text": "EXIST"},
                                        { "x": 160,  "y": 80, "text": "Eater"}, 
                                        { "x": 160,  "y": 70, "text": "EXIST"},
                                        { "x": 200,  "y": 90, "text": "FRC"},
                                        { "x": 240,  "y": 80, "text": "Patient"},
                                        { "x": 240,  "y": 70, "text": "COS"},
                                        
                                    ],

                            "caption": "ASC causal chains used with feeding network",

                            "chains": [
                                       // {"network": "Volitional Remove", "parent": "FeedingNetwork"},
                                       // {"network": "Volitional COS", "parent": "FeedingNetwork"}
                                    ],

                            "name" : "Feeding network" 
                        };

    var HurtNetwork = {        

                                "solid2":    [   { "x": 90,  "y": 65}, 
                                                { "x": 120,  "y": 65} ],

                                "arrow":    [   { "x": -10,  "y": 65}, 
                                                { "x": 20,  "y": 65} ],

                                'textToAdd' : [
                                        { "x": -50,  "y": 70, "text": "Agent"}, 
                                        { "x": 30,  "y": 70, "text": "Body_part"}, 
                                        { "x": 130,  "y": 70, "text": "Experiencer"},
                                        { "x": -50,  "y": 60, "text": "VOL"},
                                        { "x": 30,  "y": 60, "text": "COS"},
                                        { "x": 130,  "y": 60, "text": "COS"},
                                        { "x": -10,  "y": 80, "text": "FRC"},
                                        { "x": 90,  "y": 80, "text": "AFF"}
                                    ],

                            "caption": "ASC causal chains used with hurt network",

                            "chains": [
                                       //  {"network": "Volitional Place", "parent": "HurtNetwork"},
                                       // {"network": "Volitional Create", "parent": "HurtNetwork"},
                                       // {"network": "Volitional Provide", "parent": "HurtNetwork"}
                                    ],

                            "name" : "Hurt network" 
                        };

    return eval(NetworkType);

    // if (NetworkType === "RemoveDepriveNetwork") {
    //     return RemoveDepriveNetwork;
    // }

    // if (NetworkType === "ProvidePlaceNetwork") {
    //     return ProvidePlaceNetwork;
    // }

    // if (NetworkType === "GeneralMotionNetwork") {
    //     return GeneralMotionNetwork;
    // }

    // if (NetworkType === "ThrowMotionNetwork") {
    //     return ThrowMotionNetwork;
    // }

    // if (NetworkType === "SendMotionNetwork") {
    //     return SendMotionNetwork;
    // }

    // if (NetworkType === "CarryMotionNetwork") {
    //     return CarryMotionNetwork;
    // }

    // if (NetworkType === "PursuitMotionNetwork") {
    //     return PursuitMotionNetwork;
    // }

    // if (NetworkType === "IllustrationNetwork") {
    //     return IllustrationNetwork;
    // }

    // if (NetworkType === "CreationNetwork") {
    //     return CreationNetwork;
    // }

    // if (NetworkType === "EmissionNetwork") {
    //     return EmissionNetwork;
    // }

    // if (NetworkType === "FormNetwork") {
    //     return FormNetwork;
    // }
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


    // if (participant.indexOf('+') !== -1) {

    //     var part_split = participant.split('+');
    //     var added = 15;

    //     for (i=0;i<part_split.length;i++) {

    //         console.log(part_split[i]);

    //         var addParticipantText = svgContainer.append("text")
    //                         .attr("x", c[1]["x"]-35-strLen)
    //                         .attr("y", (1/2)*(c[0]["y"]+c[1]["y"])+added)
    //                         .text(part_split[i]);
    //         added = added - 25;

    //     }
    // } 
    if (c[0]!='None') {

        var addParticipantText = svgContainer.append("text")
                                    .attr("x", c[1]["x"]-55-strLen)
                                    .attr("y", (1/2)*(c[0]["y"]+c[1]["y"])+3)
                                    .text(participant);

    } else if (r[0]!="None") {

        var addParticipantText = svgContainer.append("text")
                                    .attr("x", r[1]["x"]-50-strLen*1.5)
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

            if (key === "rectangle"){
                void 0;
            } else if (key === "textToAdd") {

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
                                    .attr("fill", function (d) { if (['PTH', 'FRC', 'AFF', 'Mutual', 'ATT'].includes(obj["text"]) && obj["y"] < 46) {return "red"} 
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
            var participant = argTextToAdd[3];
            var strLen = participant.length*2;
            newObj['text'] = participant;
            newObj['x'] -= strLen - 30 ;
        } else if (newObj['text'] === "A4"){
            var participant = argTextToAdd[4];
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

    //console.log(nameGeneralNetwork);

    var linkToConstructionPage = getSpecificNetworkTableIdentifierForURL(FDCategory, nameGeneralNetwork)[1];

    // addSpecificNetworkTitleAbove(svgNetworkContainer, FDCategory, linkToNetworkTablePage)

    // var parentNetworkTitle = nameGeneralNetwork.replace(/([A-Z])/g, ' $1').trim();

    // addGeneralNetworkTitleBelow(svgNetworkContainer, parentNetworkTitle, linkToGeneralNetwork);

    var drawNetwork = createNetworkDiagram(svgNetworkContainer, currentNetwork, argTextToAdd, examplePage=true);



    for (n=0; n<8; n++) {

        // var labels = ['Example: ', 'VerbNet class: ', 'Argument Structure: ', 'VerbNet case frame: ', 'Construction force dynamics: ', 'Verb force dynamics: ', 'Predicate calculus:', 'Aspect: '];

        var labels = ['Example: ', 'VerbNet class: ', 'Argument Structure: ', 'Construction force dynamics: ', 'Aspect: ', 'Verb force dynamics: ', 'Predicate calculus:', 'Force-dynamic mapping: '];

        //console.log(linkToGeneralNetwork);

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

    console.log(thisSpecificNetwork);

    // console.log(d["network"]); // e.g., Volitional Motion

    var linkToGeneralNetwork = arrayNetworkElements[0]["link"]; // e.g., 10003

    var parentNetworkTitle = d["parent"].replace(/([a-z])([A-Z])/g, '$1 $2').trim();

    //var parentNetworkTitle = d["parent"].replace(/([A-Z])/g, ' $1').trim();

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

    for (var identifier in events) {


        if ( events[identifier].length>6 ) {

            if ( events[identifier][5] === d["parent"] && events[identifier][3] === d["network"] ) {

                var sentence = events[identifier][0];
                var vnclass = events[identifier][1];
                var asc = events[identifier][2];
                var generalNetworkLink = events[identifier][7];

                console.log(sentence);

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

    var networkName = events[currentEvent]["name"];

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
            .text(networkName + " network")

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

    for (j=0; j<events[currentEvent]["networks"].length; j++){

            var thisNetwork = events[currentEvent]["networks"][j];

            // console.log(thisNetwork);

            var currentNetwork = getMultipleNetworkPage(thisNetwork);

            //console.log(currentNetwork);

            var heightMultiplier = currentNetwork["chains"].length;

            if (heightMultiplier < 8) {
                var height = 150;
            } else if (heightMultiplier < 10) {
                var height = 230;
            } else if (heightMultiplier < 13) {
                var height = 320;
            }else {
                var height = 410;
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


            //console.log(currentNetwork)

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

                        //console.log(d);

                        var currentLocation = window.location.href;

                        var specificNetworkTableLink = getSpecificNetworkTableIdentifierForURL(d["network"], d["parent"])[0];

                        //console.log(specificNetworkTableLink);

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
    var parentNetworks = events[parentNetworksLink]["networks"];

    var currentNetwork = getNetwork(FDCategory, parentNetworks[0]);

    console.log(currentNetwork);

    var argTextToAdd = currentNetwork["argTextToAdd"];

    console.log(argTextToAdd);

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

        var parentNetworkTitle = parentNetworks[j].replace(/([a-z])([A-Z])/g, '$1 $2').trim();
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