
//arrays of Objects
const quiz = [
	{
		q:'Comment dit-on la surveillance ?',
		options:['Überwachung', 'Ansehen','Absehen',"Übersehen" ],
		answer:0
	},
	{
		q:'Que veut dire die Auslandsreise ?',
		options:['la langue étrangère', 'Le voyage à l\'étranger','Accueilir un étranger',"Le pays" ],
		answer:1
	},
		{
		q:'Comment dit-on condamner ?',
		options:['zeigen', 'verurteilen','verbiden'," erpressen" ],
		answer:1
	},
	{
		q:'Comment dit-on Le travail principal ?',
		options:['die Hauptaufgabe', 'die Zeitschrift','Die Hauptarbeit',"Der Stuhl" ],
		answer:0
	},
	{
		q:'Comment dit-on le capitaine ?',
		options:['Rechner', 'der Hauptmann','der Schriftsteller',"besorgt" ],
		answer:1
	},
	{
		q:'Que veut dire deshalb ?',
		options:["c est pourquoi ", 'à cause de','donc',"ensuite" ],
		answer:0
	},

	{
		q:'Comment dit-on la liberté ?',
		options:["die Freiheit ", 'der Wald','die Zeitschrift',"Die Welt" ],
		answer:0
	},
	{
		q:'Comment dit-on menacer ?',
		options:["bedrohen" ,'senden','verbiden',"erpressen" ],
		answer:0
	},

	{
		q:'Comment dit-on manifester ?',
		options:["demonstrieren " ,'bedrohen','brauchen',"geschieden" ],
		answer:0
	},
		{
		q:'Comment dit-on la violence ?',
		options:["die Gewalt " ,'der Wald','Die Welt',"die Zeitschrift" ],
		answer:0
	},
	{
		q:'Comment dit-on arrêter qqn ?',
		options:["jdn fest " ,'jdm zeigen','jdm  verurteilen',"jdm erpressen" ],
		answer:0
	},
	{
		q:'Comment dit-on se taire ?',
		options:["schweigen " ,' verbringen','verurteilen',"vertrauen" ],
		answer:0
	},
	{
		q:'Comment dit-on le dossier ?',
		options:["die Akten " ,' das Buch','Das Heft',"Der Stift" ],
		answer:0
	},
	{
		q:'Que veut dire gründen ?',
		options:["fonder " ,'menacer','se taire',"arrêter qqn" ],
		answer:0
	},
	{
		q:'Que veut dire enfant das Verhalten  ?',
		options:["le comportement " ,' menacer','croire',"comprendre" ],
		answer:0
	},
	{
		q:'Comment dit-on remarquer ?',
		options:["bemerken " ,' verbringen','verdammen',"vertrauen" ],
		answer:0
	},
	{
		q:'Que veut dire gefährlich ?',
		options:["dangereux " ,' peureux','menaçant',"intéressant" ],
		answer:0
	},
	{
		q:'Que veut dire die Bühne ?',
		options:["la scène" ,' le brouillard','solitaire',"le cauchemar" ],
		answer:0
	},

	{ 
		q:'Comment dit-on condamner',
		options:["verurteilen" ,' verbringen ',' verstehen',"fragen" ],
		answer:0
	},
	{
        q:'Comment dit-on l’interrogatoire',
        options:['das Verhör', 'minderjährig','die Hauptaufgabe','die Auslandsreise' ],
        answer:0
    }, 
    {
        q:'Comment dit-on la pression',
        options:['der Druck', 'erpressen','die Schauspielerin','schweigen' ],
        answer:0
    }, 


	{
		q:'Comment dit-on faire du chantage ?',
		options:['erpressen', 'verbringen','fragen',"verstehen" ],
		answer:0
	},
	{
		q:'Comment dit-on le poête ?',
		options:['der Dichter ', ' die Badewanne','Der Dusche',"der Druck" ],
		answer:0
	},
	{
		q:'Comment dit-on  la prison ?',
		options:['das Gefängnis ', ' das Arbeitslosigkeit ','der Beruf',"Der Gründer" ],
		answer:0
	},
	{
		q:'Que veut dire jdn verhaften ?',
		options:['arrêter qqn ', 'faire taire qqn','surveiller qqn',"enfermer qqn" ],
		answer:0
	},
	{
		q:'Comment dit-on courageux ?',
		options:['mutig', ' schweigen','gefährlich',"beweisen" ],
		answer:0
	},
	{
		q:'Que veut dire ängstlich ?',
		options:['anxieux', 'courageux','peureux',"puissant" ],
		answer:0
	},
	{
		q:'Comment dit-on l’influence ?',
		options:['der Einfluss ', 'der Handschuh','der Handschuh',"beeinflüssen" ],
		answer:0
	},
	{
		q:'Que veut dire besorgt ?',
		options:['inquiet', 'solitaire','mineur',"prouver" ],
		answer:0
	},
	{
		q:'Comment dit-on le couteau ?',
		options:['das Messer ', 'das Blut ','die Traumwelt ',"ein Geisterpferd" ],
		answer:0
	},
	{
		q:'Comment dit-on mineur ?',
		options:['minderjährig', 'beweisen','mutig',"hochzuklettern" ],
		answer:0
	},
	{
		q:'Comment dit-on disparu ?',
		options:['verschwunden', 'verurteilen','Verhalten',"verurteilen" ],
		answer:0
	},
	{
		q:'Comment dit-on le visage ?',
		options:['das Gesicht','Die Gründer','das Bein',"der Ellenbogen " ],
		answer:0
	},
	{
		q:'Comment dit-on prouver ?',
		options:['beweisen','verschwunden','verurteilen',"Verhalten" ],
		answer:0
	},
	{
		q:'Comment dit-on elle se réveille ?',
		options:['sie wacht auf','sie sicht auf','sie hinlegen auf',"sie hinsetzen auf" ],
		answer:0
	},
	{
		q:'Que veut dire das Gemälde ?',
		options:['le tableau','le cauchemar','l\'invisible',"la réalité" ],
		answer:0
	},
	{
		q:'Comment dit-on le cauchemar ?',
		options:['der Alptraum','das Gemälde','Außerdem',"beeinflüssen" ],
		answer:0
	},
	{
		q:'Comment dit-on représenter ?',
		options:['dar-stellen','der Vergleich','im Hintergrund',"beeinflüssen" ],
		answer:0
	},
	{
		q:'Comment dit-on le de plus, en outre ?',
		options:['Außerdem','beeinflüssen','minderjährig',"deshalb" ],
		answer:0
	},
	{
		q:'Comment dit-on montrer ?',
		options:['zeigen','hinlegen','hinsetzen',"hüpfen" ],
		answer:0
	},
	{
		q:'Comment dit-on l‘invisible ?',
		options:['das Unsichtbare','Geisterpferd','gewußt',"das Gemälde" ],
		answer:0
	},
	{
		q:'Comment dit-on la réalité ?',
		options:['die Wirklichkeit','die Traumwelt','Der Urlaub',"der Gold" ],
		answer:0
	},
	{
		q:'Comment dit-on le soulèvement ?',
		options:['Der Aufstand','die Traumwelt','Der Urlaub',"der Gold" ],
		answer:0
	},
	{
		q:'Comment dit-on former ?',
		options:['bilden','hinlegen','hinsetzen',"hüpfen" ],
		answer:0
	},
	{
		q:'Que veut dire Die Wiederverinigung ?',
		options:['La réunification','la réalité','le soulèvement',"cauchemar" ],
		answer:0
	},
	{
		q:'Comment dit-on le camarade ?',
		options:['Der Aufstand','das Messer ', 'die Traumwelt ',"ein Geisterpferd"  ],
		answer:0
	},
	{
		q:'Comment dit-on la majorité ?',
		options:['die Mehrheit','der Genosse','Der Urlaub',"Der Aufstand" ],
		answer:0
	},
	{
		q:'Comment dit-on la fuite ?',
		options:['die Flucht','die Traumwelt','Der Urlaub',"der Gold" ],
		answer:0
	},
	{
		q:'Comment dit-on mentir ?',
		options:['lügen','der Vergleich','im Hintergrund',"beeinflüssen"  ],
		answer:0
	}

]
