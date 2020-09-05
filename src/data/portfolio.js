const portfolioData = { 
	"imageUrl": 'http://localhost:3000/',
	"logo": "images/app-logo.svg",
	"logoWhite": "images/app-logo-white.svg",
	"name": 'Sushant Anand Sarvade',
	"role": 'Software Developer',
	"intro": "I build intuitive web apps and mobile applications.",
	"projects": [
		{
			"id": 0,
			"title": "Media & Technology Portfolio",
			"imageUrl": "images/portfolio/movie-app-thumbnail.png",
			"link": "http://www.visualnetworks.in/",
			"codeLink": "https://github.com/sushant234/media-and-technology",
			"description": "This project entitles to display the portfolio of the company, disclose all their products that they sell, and also own a tech blog with interesting articles.",
			"technology": ["HTML/CSS", "SASS(SCSS)/ CSS Modules/ Styled Component", "React", "Redux"],
		},	
		
		{
			"id": 2,
			"title": "Zapped Tech Company Portfolio",
			"imageUrl": "images/portfolio/hataw-web.png",
			"link": "http://www.zapped.in/",
			"codeLink": "",
			"description": "Zapped Tech is our tech startup and contains all our quality services.",
			"technology": ["HTML/CSS", "SASS(SCSS)", "React", "Django"],
		},
				{
			"id": 4,			
			"title": "Cold Storage commercial shop",
			"imageUrl": "images/portfolio/react-todo-thumbnail.png",
			"link": "",
			"codeLink": "https://github.com/jrussumbrella/react-paper-todo",
			"description": "This website intends to sell their cold storage meat products online with a secure payment gateway and assisted delivery service",
			"technology": ["HTML", "Paper CSS", "React", "Django", "Bootstrap", "Animate.css"]			
		},
		
										
		],
	"skills": [
		{
			"name": "HTML/CSS",
			"percentage": 80
		},
		{
			"name": "SASS/ SCSS",
			"percentage": 70
		},	
		{
			"name": "Javascript",
			"percentage": 85
		},							
		{
			"name": "Django",
			"percentage": 92
		},

		{
			"name": "REACT",
			"percentage": 80
		},
		{
			"name": "Machine Learning",
			"percentage": 95
		},						
	],
	"workExp": [
		{
			"title": "Fullstack Developer",
			"date" : 'Jan 2020- June 2020',
			"description": "Converting mockup designs into web pages, making sure it's mobile responsive and cross browser compatible. Maintaing and improving website.",
			"company": 'Markytics'
		},
		{
			"title": "Software Developer",
			"date" : 'January 2017 - May 2017',
			"company": 'Zapped',
			"description": " Currently working as a software engineer and help junior developers in developing the Django web applications."
		},				
	]	
 
}

export default portfolioData;