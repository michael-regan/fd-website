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

    draw();

}

function addSecondDivText (myText, bold=true, n) {

    if (n%2!==0) {element = "textbox_right"}
        else {element = "textbox_left"}

    var theDiv = document.getElementById(element);
    var h2 = document.createElement("H2");
    var vn_element = document.createElement("vn_element")
    var content = document.createTextNode(myText);

    if (n===6) {
        var cell = document.getElementById("textbox");
        cell.appendChild(content);
    }

    if (bold==true) {
        theDiv.appendChild(h2);
        h2.appendChild(content);
    } else {

        if (n === 0 || n === 1 || n === 3){
            theDiv.appendChild(vn_element);
            vn_element.appendChild(content);
        }

        else {

        theDiv.appendChild(content);
        
        }

    }

}

// the event representations


var events = {
    "181": [
        "Brian wiped at the counter",
        "wipe_manner-10.4.1",
        "Sbj V at/on/about/of/over Obl",
        "NP V PP-Conative",
        "Volitional Attend",
        "DirectedAchievement",
        "Theme-of(y,e) & Component-of(a,Brian) & Component-of(b,counter) & DirAch(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL(q1) & EXIST(q2) & ATT(a,b)"
    ],
    "1183": [
        "The dog barked at the cat.",
        "animal_sounds-38",
        "Sbj V at/on/about/of/over Obl",
        "NP V PP.recipient",
        "Volitional Attend",
        "UndirectedActivity",
        "Theme-of(y,e) & Component-of(a,dog) & Component-of(b,cat) & UndAct(a,i,j,q1) & InhStPhExt(b,i,k,q2) & VOL(q1) & EXIST(q2) & ATT(a,b)"
    ], 
    "835": [
        "The employees staffed the store",
        "fill-9.8",
        "Sbj V Obj",
        "NP V NP",
        "Self-volitional Provide",
        "IncrementalAccomplishment",
        "Theme-of(x,e) & Component-of(a,employees) & Component-of(b,store) & IncrAcc(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/INTL(q1) & +MER(q2) & PTH(a,b)"
    ],
     "834": [
        "The eggs mixed with the cream",
        "mix-22.1-1",
        "Sbj V with Obl",
        "NP V PP.co-patient",
        "Autonomous Cover",
        "IncrementalAccomplishment",
        "Theme-of(x,e) & Component-of(a,eggs) & Component-of(b,cream) & IncrAcc(a,i,j,q1) & InhStPh(b,i,k,q2) & INTL(q1) & +MER(q2) & PTH(a,b)"
    ],
    "978": [
        "The child and her mother clung together",
        "cling-22.5",
        "Sbj V",
        "NP V together",
        "Self-volitional Internal",
        "TransitoryState",
        "Theme-of(x,e) & Component-of(a,child and mother) & TranStPh(a,i,j,q1) & VOL/INTL(q1)"
    ],
    "953": [
        "The eggs mixed well",
        "mix-22.1-1",
        "Sbj V",
        "NP V ADVP-Middle",
        "Autonomous Internal",
        "IncrementalAccomplishment",
        "Theme-of(x,e) & Component-of(a,eggs) & IncrAcc(a,i,j,q1) & INTL(q1)"
    ],
    "954": [
        "The eggs and cream mixed well together",
        "mix-22.1-1",
        "Sbj V",
        "NP NP V ADVP-Middle together",
        "Autonomous Internal",
        "IncrementalAccomplishment",
        "Theme-of(x,e) & Component-of(a,eggs and cream) & IncrAcc(a,i,j,q1) & INTL(q1)"
    ],
    "965": [
        "The yolk and the white separated",
        "separate-23.1",
        "Sbj V",
        "NP V",
        "Autonomous Internal",
        "DirectedAchievement",
        "Theme-of(x,e) & Component-of(a,yolk and white) & DirAch(a,i,j,q1) & INTL(q1)"
    ],
    "992": [
        "Herman mixed the eggs",
        "mix-22.1-1",
        "Sbj V Obj",
        "NP V NP",
        "Volitional Internal",
        "DirectedAchievement",
        "Theme-of(y,e) & Component-of(a,Herman) & Component-of(b,eggs) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & INTL(q2) & FRC(a,b)"
    ],
    "993": [
        "Herman mixed the eggs and the cream together",
        "mix-22.1-1",
        "Sbj V Obj",
        "NP V NP NP together",
        "Volitional Internal",
        "IncrementalAccomplishment",
        "Theme-of(y,e) & Component-of(a,Herman) & Component-of(b,eggs and the cream) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & VOL(q1) & INTL(q2) & FRC(a,b)"
    ],
    "997": [
        "I separated the yolk and the white",
        "separate-23.1",
        "Sbj V Obj",
        "NP V NP",
        "Volitional Internal",
        "DirectedAchievement",
        "Theme-of(y,e) & Component-of(a,I) & Component-of(b,yolk and white) & CycAch(a,i,j,q1) & DirAch(b,i,k,q2) & VOL(q1) & INTL(q2) & FRC(a,b)"
    ],
    "1130": [
        "Clouds cleared from the sky.",
        "clear-10.3-1",
        "Sbj V PathP",
        "NP V PP.location",
        "Autonomous Remove",
        "IncrementalAccomplishment",
        "Theme-of(x,e) & Component-of(a,Clouds) & Component-of(b,sky) & IncrAcc(a,i,j,q1) & InhStPh(b,i,k,q2) & -MER(q1) & EXIST(q2) & PTH(a,b)"
    ],
    "1133": [
        "The twig broke off the branch",
        "split-23.2",
        "Sbj V PathP",
        "NP V PP.co-patient",
        "Autonomous Remove",
        "DirectedAchievement",
        "Theme-of(x,e) & Component-of(a,twig) & Component-of(b,branch) & DirAch(a,i,j,q1) & InhStPh(b,i,k,q2) & -MER(q1) & EXIST(q2) & PTH(a,b)"
    ],
    "1134": [
        "The twigs broke off of those branches easily",
        "split-23.2",
        "Sbj V PathP",
        "NP V PP ADV-Middle",
        "Autonomous Remove",
        "IncrementalAccomplishment",
        "Theme-of(x,e) & Component-of(a,twigs) & Component-of(b,branches) & IncrAcc(a,i,j,q1) & InhStPh(b,i,k,q2) & -MER(q1) & EXIST(q2) & PTH(a,b)"
    ],
    "1136": [
        "Doug cleaned the dishes from the table",
        "clear-10.3",
        "Sbj V Obj PathP",
        "NP V NP PP.location",
        "Volitional Remove",
        "IncrementalAccomplishment",
        "Theme-of(y,e) & Component-of(a,Doug) & Component-of(b,dishes) & Component-of(c,table) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & -MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)"
    ],
    "1137": [
        "Sympathetic fans clipped copies of Ms. Shere's recipes from magazines",
        "cut-21.1",
        "Sbj V Obj PathP",
        "NP V NP PP.source",
        "Volitional Remove",
        "IncrementalAccomplishment",
        "Theme-of(y,e) & Component-of(a,fans) & Component-of(b,copies) & Component-of(c,magazines) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & -MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)"
    ],
    "1138": [
        "I unscrewed the handle",
        "disassemble-23.3",
        "Sbj V Obj",
        "NP V NP",
        "Volitional Remove",
        "IncrementalAccomplishment",
        "Theme-of(y,e) & Component-of(a,I) & Component-of(b,handle) & Component-of(c,NI) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & -MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)"
    ],
    "1148": [
        "Brian wiped the fingerprints from the counter",
        "wipe_manner-10.4.1",
        "Sbj V Obj PathP",
        "NP V NP PP.source",
        "Volitional Remove",
        "IncrementalAccomplishment",
        "Theme-of(y,e) & Component-of(a,Brian) & Component-of(b,fingerprints) & Component-of(c,counter) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & -MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)"
    ],
    "1157": [
        "The sky cleared",
        "clear-10.3-1",
        "Sbj V",
        "NP.location V",
        "Autonomous Uncover",
        "IncrementalAccomplishment",
        "Theme-of(y,e) & Component-of(a,NI) & Component-of(b,sky) & IncrAcc(a,i,j,q1) & InhStPh(b,i,k,q2) & INTL(q1) & -MER(q2) & PTH(a,b)"
    ],
    "1158": [
        "Carla was vacuuming",
        "wipe_instr-10.4.2",
        "Sbj V",
        "NP V",
        "Volitional Uncover",
        "UndirectedActivity",
        "Theme-of(z,e) & Component-of(a,Carla) & Component-of(b,NI) & Component-of(c,NI) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & UndAct(c,i,l,q3) & VOL(q1) & INTL(q2) & -MER(q3) & FRC(a,b) & PTH(b,c)"
    ],
    "1161": [
        "The cook boned the fish",
        "pit-10.7",
        "Sbj V Obj",
        "NP V NP",
        "Volitional Uncover",
        "IncrementalAccomplishment",
        "Theme-of(z,e) & Component-of(a,cook) & Component-of(b,NI) & Component-of(c,fish) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & INTL(q2) & -MER(q3) & FRC(a,b) & PTH(b,c)"
    ],
    "1162": [
        "I bled him",
        "substance_emission-43.4-1-1",
        "Sbj V Obj",
        "NP V NP.source",
        "Volitional Uncover",
        "IncrementalAccomplishment",
        "Theme-of(z,e) & Component-of(a,I) & Component-of(b,NI) & Component-of(c,him) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & INTL(q2) & -MER(q3) & FRC(a,b) & PTH(b,c)"
    ],
    "1163": [
        "Carla shoveled the walk",
        "wipe_instr-10.4.2",
        "Sbj V Obj",
        "NP V NP.initial_location",
        "Volitional Uncover",
        "IncrementalAccomplishment",
        "Theme-of(z,e) & Component-of(a,Carla) & Component-of(b,NI) & Component-of(c,walk) & UndAct(a,i,j,q1) & UndAct(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & INTL(q2) & -MER(q3) & FRC(a,b) & PTH(b,c)"
    ],
    "755": [
        "The strong winds cleared the sky.",
        "clear-10.3",
        "Sbj V Obj",
        "NP V NP",
        "Physical Uncover",
        "IncrementalAccomplishment",
        "Theme-of(y,e) & Component-of(a,winds) & Component-of(b,NI) & Component-of(c,sky) & UndAct(a,i,j,q1) & UndAct(b,i,j,q2) & IncrAcc(c,i,k,q3) & INTL(q1) & INTL(q2) & -MER(q3) & FRC(a,b) & PTH(b,c)"
    ], 
    "682": [
        "Cora coiled the rope around the post",
        "coil-9.6",
        "Sbj V Obj PathP",
        "NP V NP PP.location",
        "Volitional Place",
        "IncrementalAccomplishment",
        "Theme-of(y,e) & Component-of(a,Cora) & Component-of(b,rope) & Component-of(c,post) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & +MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)"
    ],
    "187": [
        "Jessica squirted water at me",
        "spray-9.7",
        "Sbj V Obj PathP",
        "NP V NP PP.destination-conative",
        "Volitional Place",
        "IncrementalAccomplishment",
        "Theme-of(y,e) & Component-of(a,Jessica) & Component-of(b,water) & Component-of(c,me) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & +MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)"
    ],
    "247": [
        "Frances hid the presents behind the books in the drawer",
        "concealment-16",
        "Sbj V Obj PathP",
        "NP V NP PP.location",
        "Volitional Place",
        "IncrementalAccomplishment",
        "Theme-of(y,e) & Component-of(a,Frances) & Component-of(b,presents) & Component-of(c,books) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & +MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)"
    ],
    "683": [
        "I spooned the sauce there",
        "funnel-9.3",
        "Sbj V Obj PathP",
        "NP V NP ADVP",
        "Volitional Place",
        "IncrementalAccomplishment",
        "Theme-of(y,e) & Component-of(a,I) & Component-of(b,sauce) & Component-of(c,there) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & InhStPh(c,i,l,q3) & VOL(q1) & +MER(q2) & EXIST(q3) & FRC(a,b) & PTH(b,c)"
    ],
    "679": [
        "The child clung to her mother",
        "cling-22.5",
        "Sbj V PathP",
        "NP V PP.co-theme",
        "Self-Volitional Place",
        "TransitoryState",
        "Theme-of(x,e) & Component-of(a,child) & Component-of(b,mother) & TranStPh(a,i,j,q1) & InhStPhExtShort(b,i,k,q2) & VOL/+MER(q1) & EXIST(q2) & PTH(a,b)"
    ],
    "132": [
        "The children hid",
        "concealment-16",
        "Sbj V",
        "NP V",
        "Self-Volitional Place",
        "IncrementalAccomplishment",
        "Theme-of(x,e) & Component-of(a,children) & Component-of(b,NI) & IncrAcc(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/+MER(q1) & EXIST(q2) & PTH(a,b)"
    ],
    "248": [
        "The children hid in the chimney",
        "concealment-16",
        "Sbj V PathP",
        "NP V PP.location",
        "Self-Volitional Place",
        "IncrementalAccomplishment",
        "Theme-of(x,e) & Component-of(a,children) & Component-of(b,chimney) & IncrAcc(a,i,j,q1) & InhStPh(b,i,k,q2) & VOL/+MER(q1) & EXIST(q2) & PTH(a,b)"
    ],
    "845": [
        "Lora buttered the toast with unsalted butter",
        "butter-9.9",
        "Sbj V Obj in/with Obl",
        "NP V NP PP.theme",
        "Volitional Provide",
        "IncrementalAccomplishment",
        "Theme-of(y,e) & Component-of(a,Lora) & Component-of(b,butter) & Component-of(c,toast) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & INTL(q2) & +MER(q3) & FRC(a,b) & PTH(b,c)"
    ],
    "839": [
        "Lora buttered the toast",
        "butter-9.9",
        "Sbj V Obj",
        "NP V NP.destination",
        "Volitional Provide",
        "IncrementalAccomplishment",
        "Theme-of(y,e) & Component-of(a,Lora) & Component-of(b,NI) & Component-of(c,toast) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & INTL(q2) & +MER(q3) & FRC(a,b) & PTH(b,c)"
    ],
    "840": [
        "Marlene dressed the baby",
        "dress-41.1.1",
        "Sbj V Obj",
        "NP V NP",
        "Volitional Provide",
        "IncrementalAccomplishment",
        "Theme-of(y,e) & Component-of(a,Marlene) & Component-of(b,NI) & Component-of(c,baby) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & INTL(q2) & +MER(q3) & FRC(a,b) & PTH(b,c)"
    ],
    "841": [
        "Leslie covered the bed.",
        "fill-9.8",
        "Sbj V Obj",
        "NP V NP.destination",
        "Volitional Provide",
        "IncrementalAccomplishment",
        "Theme-of(y,e) & Component-of(a,Leslie) & Component-of(b,NI) & Component-of(c,bed) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & INTL(q2) & +MER(q3) & FRC(a,b) & PTH(b,c)"
    ],
    "842": [
        "The jeweler decorated the ring",
        "illustrate-25.3",
        "Sbj V Obj",
        "NP V NP",
        "Volitional Provide",
        "IncrementalAccomplishment",
        "Theme-of(y,e) & Component-of(a,jeweler) & Component-of(b,NI) & Component-of(c,ring) & UndAct(a,i,j,q1) & IncrAcc(b,i,k,q2) & IncrAcc(c,i,l,q3) & VOL(q1) & INTL(q2) & +MER(q3) & FRC(a,b) & PTH(b,c)"
    ],

}


function getNetwork (FDCategory) {


     var NetworkAutonomousRemove = {        

                                "solid1":    [   { "x": 50,  "y": 0}, 
                                                { "x": 100,  "y": 0} ],

                                "solid2":    [   { "x": 50,  "y": 60}, 
                                                { "x": 100,  "y": 60} ],

                                "dottedLeft":    [   { "x": 25,  "y": 10}, 
                                                { "x": 25,  "y": 40} ],

                                "dottedRight":    [   { "x": 125,  "y": 10}, 
                                                { "x": 125,  "y": 40} ],

                                'textToAdd' : [
                                        { "x": 25,  "y": 5, "text": "A0"},
                                        { "x": 25,  "y": 60, "text": "A0"},  
                                        { "x": 90,  "y": 5, "text": "A1"},
                                        { "x": 90,  "y": 60, "text": "A1"},
                                        { "x": -15,  "y": -5, "text": "-MER"},
                                        { "x": 0,  "y": 50, "text": "-MER"},
                                        { "x": 105,  "y": -5, "text": "EXIST"},
                                        { "x": 105,  "y": 50, "text": "EXIST"},
                                        { "x": 65,  "y": 15, "text": "Path"},
                                        { "x": 65,  "y": 75, "text": "Path"}
                                    ],

                                "name" : "NetAutoRem" 
                            };

     var NetworkVolitionalRemove = {        

                                "solid1":    [   { "x": 50,  "y": 0}, 
                                                { "x": 100,  "y": 0} ],

                                "solid2":    [   { "x": 50,  "y": 60}, 
                                                { "x": 100,  "y": 60} ],

                                "dottedLeft":    [   { "x": 25,  "y": 10}, 
                                                { "x": 25,  "y": 40} ],

                                "dottedRight":    [   { "x": 125,  "y": 10}, 
                                                { "x": 125,  "y": 40} ],

                                "arrow":    [   { "x": -50,  "y": 0}, 
                                                { "x": -20,  "y": 0} ],

                                'textToAdd' : [
                                        { "x": -40,  "y": 5, "text": "A0"},
                                        { "x": -10,  "y": 5, "text": "A1"},
                                        { "x": -10,  "y": 60, "text": "A1"},  
                                        { "x": 100,  "y": 5, "text": "A2"},
                                        { "x": 100,  "y": 60, "text": "A2"},
                                        { "x": -80,  "y": -5, "text": "VOL"},
                                        { "x": -45,  "y": 15, "text": "Force"},
                                        { "x": -15,  "y": -5, "text": "EXIST | -MER"},
                                        { "x": 0,  "y": 50, "text": "-MER"},
                                        { "x": 105,  "y": -5, "text": "EXIST"},
                                        { "x": 105,  "y": 50, "text": "EXIST"},
                                        { "x": 65,  "y": 15, "text": "Path"},
                                        { "x": 65,  "y": 75, "text": "Path"}
                                    ],

                                "name" : "NetVolRem" 
                            };

     var NetworkVolitionalPlace = {        

                                "solid1":    [   { "x": 50,  "y": 0}, 
                                                { "x": 100,  "y": 0} ],

                                "solid2":    [   { "x": 50,  "y": 60}, 
                                                { "x": 100,  "y": 60} ],

                                "dottedLeft":    [   { "x": 25,  "y": 10}, 
                                                { "x": 25,  "y": 40} ],

                                "dottedRight":    [   { "x": 125,  "y": 10}, 
                                                { "x": 125,  "y": 40} ],

                                "arrow":    [   { "x": -50,  "y": 0}, 
                                                { "x": -20,  "y": 0} ],

                                'textToAdd' : [
                                        { "x": -40,  "y": 5, "text": "A0"},
                                        { "x": -10,  "y": 5, "text": "A1"},
                                        { "x": -10,  "y": 60, "text": "A1"},  
                                        { "x": 90,  "y": 5, "text": "A2"},
                                        { "x": 90,  "y": 60, "text": "A2"},
                                        { "x": -80,  "y": -5, "text": "VOL"},
                                        { "x": -45,  "y": 15, "text": "Force"},
                                        { "x": -15,  "y": -5, "text": "EXIST | +MER"},
                                        { "x": 0,  "y": 50, "text": "+MER"},
                                        { "x": 105,  "y": -5, "text": "EXIST"},
                                        { "x": 105,  "y": 50, "text": "EXIST"},
                                        { "x": 65,  "y": 15, "text": "Path"},
                                        { "x": 65,  "y": 75, "text": "Path"}
                                    ],

                                "name" : "NetVolPlace" 
                            };


     var NetworkSelfVolitionalPlace = {        

                                "solid1":    [   { "x": 50,  "y": 0}, 
                                                { "x": 100,  "y": 0} ],

                                "solid2":    [   { "x": 50,  "y": 60}, 
                                                { "x": 100,  "y": 60} ],

                                "dottedLeft":    [   { "x": 25,  "y": 10}, 
                                                { "x": 25,  "y": 40} ],

                                "dottedRight":    [   { "x": 125,  "y": 10}, 
                                                { "x": 125,  "y": 40} ],

                                'textToAdd' : [
                                        { "x": 50,  "y": 5, "text": "A0"},
                                        { "x": 50,  "y": 60, "text": "A0"},  
                                        { "x": 90,  "y": 5, "text": "A1"},
                                        { "x": 90,  "y": 60, "text": "A1"},
                                        { "x": -15,  "y": -5, "text": "VOL | +MER"},
                                        { "x": -15,  "y": 50, "text": "VOL | +MER"},
                                        { "x": 105,  "y": -5, "text": "EXIST"},
                                        { "x": 105,  "y": 50, "text": "EXIST"},
                                        { "x": 65,  "y": 15, "text": "Path"},
                                        { "x": 65,  "y": 75, "text": "Path"}
                                    ],

                                "name" : "NetSelfVolPlace" 
                            };


     var NetworkVolitionalAttend = {        

                                "solid2":    [   { "x": 55,  "y": 60}, 
                                                { "x": 95,  "y": 60} ],

                                "dottedRight":    [   { "x": 125,  "y": 10}, 
                                                { "x": 125,  "y": 40} ],

                                "arrow":    [   { "x": 55,  "y": 0}, 
                                                { "x": 95,  "y": 0} ],

                                'textToAdd' : [
                                        { "x": 55,  "y": 5, "text": "A0"},
                                        { "x": -10,  "y": 60, "text": "MovedEntity"},  
                                        { "x": 90,  "y": 5, "text": "A1"},
                                        { "x": 90,  "y": 60, "text": "A1"},
                                        { "x": 20,  "y": -5, "text": "VOL"},
                                        { "x": 0,  "y": 50, "text": "-MER"},
                                        { "x": 105,  "y": -5, "text": "EXIST"},
                                        { "x": 105,  "y": 50, "text": "EXIST"},
                                        { "x": 50,  "y": 15, "text": "Attend"},
                                        { "x": 65,  "y": 75, "text": "Path"}
                                    ],

                                "name" : "NetVolAtt" 
                            };


     var NetworkAutonomousInternal = {        

                                "solid1":    [   { "x": 55,  "y": 55}, 
                                                { "x": 85,  "y": 55} ],

                                "dottedLeft":    [   { "x": 25,  "y": 35}, 
                                                { "x": 70,  "y": 10} ],

                                "dottedRight":    [   { "x": 115,  "y": 35},
                                                      { "x": 70,  "y": 10}
                                                ],

                                'textToAdd' : [
                                        { "x": 100,  "y": 5, "text": "A0"},
                                        { "x": -10,  "y": 60, "text": "MovedEntity"},  
                                        { "x": 90,  "y": 60, "text": "Ground"},
                                        { "x": 55,  "y": -5, "text": "INTL"},
                                        { "x": 10,  "y": 50, "text": "INTL"},
                                        { "x": 95,  "y": 50, "text": "-MER"},
                                        { "x": 60,  "y": 65, "text": "Path"}
                                    ],

                                "name" : "NetAutoIntl" 
                            };

     var NetworkVolitionalInternal = {        

                                "solid1":    [   { "x": 55,  "y": 55}, 
                                                { "x": 85,  "y": 55} ],

                                "dottedLeft":    [   { "x": 25,  "y": 35}, 
                                                { "x": 70,  "y": 10} ],

                                "dottedRight":    [   { "x": 115,  "y": 35},
                                                      { "x": 70,  "y": 10}
                                                ],

                                "arrow":    [   { "x": -10,  "y": 0}, 
                                                { "x": 30,  "y": 0} ],

                                'textToAdd' : [
                                        { "x": -20,  "y": 5, "text": "A0"},
                                        { "x": 40,  "y": 5, "text": "A1"},
                                        { "x": -10,  "y": 60, "text": "MovedEntity"},  
                                        { "x": 90,  "y": 60, "text": "Ground"},
                                        { "x": -40,  "y": -5, "text": "VOL"},
                                        { "x": 60,  "y": -5, "text": "INTL"},
                                        { "x": -10,  "y": 50, "text": "INTL | +MER"},
                                        { "x": 80,  "y": 50, "text": "EXIST | +MER"},
                                        { "x": 60,  "y": 65, "text": "Path"},
                                        { "x": 0,  "y": 15, "text": "force"},
                                    ],

                                "name" : "NetVolIntl" 
                            };


     var NetworkAutonomousUncover = {        

                                "solid1":    [   { "x": 50,  "y": 0}, 
                                                { "x": 100,  "y": 0} ],

                                "solid2":    [   { "x": 50,  "y": 60}, 
                                                { "x": 100,  "y": 60} ],

                                "dottedLeft":    [   { "x": 25,  "y": 10}, 
                                                { "x": 25,  "y": 40} ],

                                "dottedRight":    [   { "x": 125,  "y": 10}, 
                                                { "x": 125,  "y": 40} ],

                                'textToAdd' : [
                                        { "x": 40,  "y": 5, "text": "A0"},
                                        { "x": 40,  "y": 60, "text": "A0"},  
                                        { "x": 90,  "y": 5, "text": "A1"},
                                        { "x": 90,  "y": 60, "text": "A1"},
                                        { "x": 5,  "y": -5, "text": "INTL"},
                                        { "x": 5,  "y": 50, "text": "INTL"},
                                        { "x": 105,  "y": -5, "text": "-MER"},
                                        { "x": 105,  "y": 50, "text": "-MER"},
                                        { "x": 65,  "y": 15, "text": "Path"},
                                        { "x": 65,  "y": 75, "text": "Path"}
                                    ],

                                "name" : "NetAutoUnc" 
                            };


     var NetworkVolitionalUncover = {        

                                "solid1":    [   { "x": 50,  "y": 0}, 
                                                { "x": 100,  "y": 0} ],

                                "solid2":    [   { "x": 50,  "y": 60}, 
                                                { "x": 100,  "y": 60} ],

                                "dottedLeft":    [   { "x": 25,  "y": 10}, 
                                                { "x": 25,  "y": 40} ],

                                "dottedRight":    [   { "x": 125,  "y": 10}, 
                                                { "x": 125,  "y": 40} ],

                                "arrow":    [   { "x": -50,  "y": 0}, 
                                                { "x": -20,  "y": 0} ],

                                'textToAdd' : [
                                        { "x": -50,  "y": 5, "text": "A0"},
                                        { "x": -15,  "y": 5, "text": "A1"},
                                        { "x": -15,  "y": 60, "text": "A1"}, 
                                        { "x": -80,  "y": -5, "text": "VOL"},
                                        { "x": -45,  "y": 15, "text": "Force"}, 
                                        { "x": 100,  "y": 5, "text": "A2"},
                                        { "x": 100,  "y": 60, "text": "A2"},
                                        { "x": -10,  "y": -5, "text": "EXIST|INTL"},
                                        { "x": 0,  "y": 50, "text": "INTL"},
                                        { "x": 105,  "y": -5, "text": "-MER"},
                                        { "x": 105,  "y": 50, "text": "-MER"},
                                        { "x": 65,  "y": 15, "text": "Path"},
                                        { "x": 65,  "y": 75, "text": "Path"}
                                    ],

                                "name" : "NetAutoUnc" 
                            };

     var NetworkPhysicalUncover = {        

                                "solid1":    [   { "x": 50,  "y": 0}, 
                                                { "x": 100,  "y": 0} ],

                                "solid2":    [   { "x": 50,  "y": 60}, 
                                                { "x": 100,  "y": 60} ],

                                "dottedLeft":    [   { "x": 25,  "y": 10}, 
                                                { "x": 25,  "y": 40} ],

                                "dottedRight":    [   { "x": 125,  "y": 10}, 
                                                { "x": 125,  "y": 40} ],

                                "arrow":    [   { "x": -50,  "y": 0}, 
                                                { "x": -20,  "y": 0} ],

                                'textToAdd' : [
                                        { "x": -80,  "y": 5, "text": "winds"},
                                        { "x": -10,  "y": 5, "text": "A1"},
                                        { "x": -10,  "y": 60, "text": "A1"},
                                        { "x": -80,  "y": -5, "text": "INTL"}, 
                                        { "x": -45,  "y": 15, "text": "Force"}, 
                                        { "x": 110,  "y": 5, "text": "sky"},
                                        { "x": 110,  "y": 60, "text": "sky"},
                                        { "x": -10,  "y": -5, "text": "EXIST|INTL"},
                                        { "x": 0,  "y": 50, "text": "INTL"},
                                        { "x": 105,  "y": -5, "text": "-MER"},
                                        { "x": 105,  "y": 50, "text": "-MER"},
                                        { "x": 65,  "y": 15, "text": "Path"},
                                        { "x": 65,  "y": 75, "text": "Path"}
                                    ],

                                "name" : "NetAutoUnc" 
                            };


     var NetworkAutonomousCover = {        

                                "solid1":    [   { "x": 50,  "y": 0}, 
                                                { "x": 100,  "y": 0} ],

                                "solid2":    [   { "x": 50,  "y": 60}, 
                                                { "x": 100,  "y": 60} ],

                                "dottedLeft":    [   { "x": 25,  "y": 10}, 
                                                { "x": 25,  "y": 40} ],

                                "dottedRight":    [   { "x": 125,  "y": 10}, 
                                                { "x": 125,  "y": 40} ],

                                'textToAdd' : [
                                        { "x": 40,  "y": 5, "text": "A0"},
                                        { "x": 40,  "y": 60, "text": "A0"},  
                                        { "x": 90,  "y": 5, "text": "A1"},
                                        { "x": 90,  "y": 60, "text": "A1"},
                                        { "x": 5,  "y": -5, "text": "INTL"},
                                        { "x": 5,  "y": 50, "text": "INTL"},
                                        { "x": 105,  "y": -5, "text": "+MER"},
                                        { "x": 105,  "y": 50, "text": "+MER"},
                                        { "x": 65,  "y": 15, "text": "Path"},
                                        { "x": 65,  "y": 75, "text": "Path"}
                                    ],

                                "name" : "NetAutoUnc" 
                            };


     var NetworkVolitionalProvide = {        

                                "solid1":    [   { "x": 50,  "y": 0}, 
                                                { "x": 100,  "y": 0} ],

                                "solid2":    [   { "x": 50,  "y": 60}, 
                                                { "x": 100,  "y": 60} ],

                                "dottedLeft":    [   { "x": 25,  "y": 10}, 
                                                { "x": 25,  "y": 40} ],

                                "dottedRight":    [   { "x": 125,  "y": 10}, 
                                                { "x": 125,  "y": 40} ],

                                "arrow":    [   { "x": -50,  "y": 0}, 
                                                { "x": -20,  "y": 0} ],

                                'textToAdd' : [
                                        { "x": -40,  "y": 5, "text": "A0"},
                                        { "x": -10,  "y": 5, "text": "A1"},
                                        { "x": -10,  "y": 60, "text": "A1"},  
                                        { "x": 90,  "y": 5, "text": "A2"},
                                        { "x": 90,  "y": 60, "text": "A2"},
                                        { "x": -80,  "y": -5, "text": "VOL"},
                                        { "x": -45,  "y": 15, "text": "Force"},
                                        { "x": -15,  "y": -5, "text": "EXIST | INTL"},
                                        { "x": 10,  "y": 50, "text": "INTL"},
                                        { "x": 105,  "y": -5, "text": "+MER"},
                                        { "x": 105,  "y": 50, "text": "+MER"},
                                        { "x": 65,  "y": 15, "text": "Path"},
                                        { "x": 65,  "y": 75, "text": "Path"}
                                    ],

                                "name" : "NetVolProvide" 
                            };


    if (FDCategory === 'Autonomous Remove') {
        return NetworkAutonomousRemove;
    }

    else if (FDCategory === 'Volitional Remove') {
        return NetworkVolitionalRemove;
    }

    else if (FDCategory === 'Volitional Place') {
        return NetworkVolitionalPlace;
    }

    else if (FDCategory === 'Self-Volitional Place') {
        return NetworkSelfVolitionalPlace;
    }

    else if (FDCategory === 'Volitional Attend') {
        return NetworkVolitionalAttend;
    }

    else if (FDCategory === 'Autonomous Internal') {
        return NetworkAutonomousInternal;
    }

    else if (FDCategory === 'Volitional Internal') {
        return NetworkVolitionalInternal;
    }

    else if (FDCategory === 'Autonomous Uncover') {
        return NetworkAutonomousUncover;
    }

    else if (FDCategory === 'Volitional Uncover') {
        return NetworkVolitionalUncover;
    }

    else if (FDCategory === 'Physical Uncover') {
        return NetworkPhysicalUncover;
    }

    else if (FDCategory === 'Autonomous Cover') {
        return NetworkAutonomousCover;
    }

    else if (FDCategory === 'Volitional Provide') {
        return NetworkVolitionalProvide;
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




function createNetworkDiagram(svgContainer, currentNetwork, argTextToAdd) {

    function addNetworkText (obj){

        var addThisText = svgContainer.append("text")
                                    .attr("x", obj["x"])
                                    .attr("y", obj["y"])
                                    .text(obj["text"]);
    }

    var solidLine1 = currentNetwork["solid1"];
    var solidLine2 = currentNetwork["solid2"];
    var dottedLeft = currentNetwork["dottedLeft"];
    var dottedRight = currentNetwork["dottedRight"];
    var forceArrowX = currentNetwork["arrow"];

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

    if (solidLine1) {
        var lineGraph1 = svgContainer.append("path")
                                    .attr("d", lineFunction(solidLine1))
                                    .attr("stroke", "black")
                                    .attr("stroke-width", 2)
                                    .attr("fill", "none");
    }

    if (solidLine2) {
        var lineGraph2 = svgContainer.append("path")
                                    .attr("d", lineFunction(solidLine2))
                                    .attr("stroke", "black")
                                    .attr("stroke-width", 2)
                                    .attr("fill", "none");
    }


    if (dottedLeft) {
        var dLinesLeft = svgContainer.append("path")
                                    .attr("d", lineFunction(dottedLeft))
                                    .attr("stroke", "black")
                                    .style("stroke-dasharray", ("2, 2"))
                                    .attr("fill", "none");
    }

    var dLinesRight = svgContainer.append("path")
                                .attr("d", lineFunction(dottedRight))
                                .attr("stroke", "black")
                                .style("stroke-dasharray", ("2, 2"))
                                .attr("fill", "none");

    if (forceArrowX){
        var agentArrow = svgContainer.append("path")
                            .attr("d", lineFunction(forceArrowX))
                            .attr("stroke", "black")
                            .style("stroke-width", 2)
                            .attr("marker-end", "url(#triangle)")
                            .attr("fill", "none");
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


function draw () {

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

    var sentence = events[currentEvent][0];
    var themeType = events[currentEvent][3];
    var FDCategory = events[currentEvent][4];
    var syntax = events[currentEvent][5];
    var predicate = events[currentEvent][6];
    
    //The fd-network SVG Container (added 2019.12)
    var svgNetworkContainer = d3.select("#svg-network").append("svg")
                                        .attr("width", 200)
                                        .attr("height", 100);

    var currentNetwork = getNetwork(FDCategory);

    console.log(eventComponents);

    var argTextToAdd = [];

    for (n=0; n<4; n++) {
        if (eventComponents[n].constructor === Array) {
            argTextToAdd.push(eventComponents[n][0]);
        }
    }

    //var NetworkVolitionalMotion = getNetworkObjects();

    var drawNetwork = createNetworkDiagram(svgNetworkContainer, currentNetwork, argTextToAdd);



    for (n=0; n<7; n++) {

        var labels = ['Example: ', 'VerbNet class: ', 'Argument Structure: ', 'VerbNet case frame: ', 'Force dynamics: ', 'Aspect: ', 'Predicate calculus:'];

        var addedHeader = addSecondDivText(labels[n], true, n);
        var addedSentence = addSecondDivText(events[currentEvent][n], false, n);
        // var addedBlank = addSecondDivText('', false, n);

    }

}

if(typeof events[currentEvent] === 'undefined') {
    // does not exist

    var div = document.getElementById('textbox');

    div.innerHTML += '<h2>Representations for mental and social events coming soon!</h2>';   

}
else {
    // does exist
    draw()
}