//For the given JSON iterate over all for loops (for, for in, for of, forEach)

var obj=[
{person:"Name1",
age:2,
company:"Guvi"},

{person:"Name2",
age:3,
company:"Guvi Geek"},

{person:"Name3",
age:4,
company:"Guvi Geek Network"}
]
//Normal For loop
 for(var i=0;i<obj.length;i++){
     console.log(obj[i]);
 }
 //output
/*{ person: 'Name1', age: 2, company: 'Guvi' }
{ person: 'Name2', age: 3, company: 'Guvi Geek' }        
{ person: 'Name3', age: 4, company: 'Guvi Geek Network' }
{ person: 'Name1', age: 2, company: 'Guvi' }*/

//For Each Loop
 obj.forEach(((i)=>{
     console.log(i);
 }))
 //output
/*{ person: 'Name1', age: 2, company: 'Guvi' }
{ person: 'Name2', age: 3, company: 'Guvi Geek' }        
{ person: 'Name3', age: 4, company: 'Guvi Geek Network' }
{ person: 'Name1', age: 2, company: 'Guvi' }*/

// For In loop
// Its enumeration based loop that iterate over the index
for(var i in obj){
    console.log(obj[i]);
}
//output
/*{ person: 'Name1', age: 2, company: 'Guvi' }
{ person: 'Name2', age: 3, company: 'Guvi Geek' }        
{ person: 'Name3', age: 4, company: 'Guvi Geek Network' }
{ person: 'Name1', age: 2, company: 'Guvi' }*/


// For Of loop=>ES-6
// It is iterate over the value
for(var i of obj){
    console.log(i);
}
//output
/*{ person: 'Name1', age: 2, company: 'Guvi' }
{ person: 'Name2', age: 3, company: 'Guvi Geek' }        
{ person: 'Name3', age: 4, company: 'Guvi Geek Network' }
{ person: 'Name1', age: 2, company: 'Guvi' }*/





//Create your own resume data in JSON format

let resume = [{ name:"Sabarish Chandrasekaran",
                mailID:"sabarish27k6@gmail.com",
                phoneNo:9972717643,
                address:{city:"Coimbatore",
                        state: "Tamil Nadu"},
                qualification:"BE Mechanical",
                skills:{set1:"AutoCAD 2D",
                        set2:"CATIA",
                        set3:"SolidWORKS"}},
               { work_experience:{company:"CADD Centre",
                                designation:"CAD Trainer",
                                exp: "10 months",
                                address:{city:"Chennai",
                                        state:"Tamil Nadu",
                                description:`
1.Collaborated with design and engineering staffs to solve 3D CAD 
  related issues.
2.Instituted mentoring program for under-graduate students, increasing 
  student development and enthusiasm for learning.
3.Increased educational expertise and knowledge of EV Technology and
4.Battery Management System by participating in instructor-oriented
  workshops.`}}},
             {project_experience:{project1:{project:"Design&Fabrication of Automated Ration Vending Machine",
                                    duration:"10 months",
                                    year:2019,
                                    Software_used: "Arduino IDE, CATIA & SolidWORKS"},
                                    project2:{project:"Design&Fabrication of Automatic Vacuum Cleaner",
                                    duration:"3 months",
                                    year:2018,
                                    Software_used: "Arduino IDE, CATIA & SolidWORKS"},
                                    project3:{project:"Fabrication of VoiceBased Android Controlled Robot",
                                    duration:"2 months",
                                    year:2017,
                                    Software_used: "Arduino IDE, MIT app inventor"}}},
               { certificates:{doc1:"Diploma in Mechanical Design - Issuer: CADD Centre ,Credential ID:ES191025022",
                              doc2:"Python Bootcamp - Issuer: Udemy ,Credential ID:UC-EMOBCPFB"}},
               { achievements:{ach1:"Participated in National LevelWorkshop on Live Surgery of IC Engine by NLWLI-2018",
                              ach2:"Won Best Project Award for Social Relevance in Project Exhibition by INTUIT- 2019"}},
               { education:{qual1:{qualification:"B.E Mechanical",
                            institution:"Cambridge Institute of Technology, Bangalore",
                            marks:"7.2 CGPA",
                            year:2019},
                           qual2:{qualification:"12th",
                            institution:"Kendriya Vidyalaya No.1 AFS Sambra,Belgaum",
                            marks:"73%",
                            year:2015},
                           qual3:{qualification:"10th",
                            institution:"Kendriya Vidyalaya No.1 AFS Sambra,Belgaum",
                            marks:"8 CGPA",
                            year:2013}}},
               { personal_info:{Languages: "English, Hindi, Tamil",
                               Interest: "Playing Chess, Badminton, Cricket, Competitive PC Games"}}]

console.log(resume);
//output
/*
0: {name: 'Sabarish Chandrasekaran', mailID: 'sabarish27k6@gmail.com', phoneNo: 9972717643, address: {…}, qualification: 'BE Mechanical', …}

1:
work_experience:
address: {city: 'Chennai', state: 'Tamil Nadu', description: '\n1.Collaborated with design and engineering staffs…participating in instructor-oriented\n  workshops.'}
company: "CADD Centre"
designation: "CAD Trainer"
exp: "10 months"

2:
project_experience:
project1: {project: 'Design&Fabrication of Automated Ration Vending Machine', duration: '10 months', year: 2019, Software_used: 'Arduino IDE, CATIA & SolidWORKS'}
project2: {project: 'Design&Fabrication of Automatic Vacuum Cleaner', duration: '3 months', year: 2018, Software_used: 'Arduino IDE, CATIA & SolidWORKS'}
project3: {project: 'Fabrication of VoiceBased Android Controlled Robot', duration: '2 months', year: 2017, Software_used: 'Arduino IDE, MIT app inventor'}

certificates: {doc1: 'Diploma in Mechanical Design - Issuer: CADD Centre ,Credential ID:ES191025022', doc2: 'Python Bootcamp - Issuer: Udemy ,Credential ID:UC-EMOBCPFB'}

4:
achievements: {ach1: 'Participated in National LevelWorkshop on Live Surgery of IC Engine by NLWLI-2018', ach2: 'Won Best Project Award for Social Relevance in Project Exhibition by INTUIT- 2019'}

5:
education:
qual1: {qualification: 'B.E Mechanical', institution: 'Cambridge Institute of Technology, Bangalore', marks: '7.2 CGPA', year: 2019}
qual2: {qualification: '12th', institution: 'Kendriya Vidyalaya No.1 AFS Sambra,Belgaum', marks: '73%', year: 2015}
qual3: {qualification: '10th', institution: 'Kendriya Vidyalaya No.1 AFS Sambra,Belgaum', marks: '8 CGPA', year: 2013}

6:
personal_info: {Languages: 'English, Hindi, Tamil', Interest: 'Playing Chess, Badminton, Cricket, Competitive PC Games'}

length: 7
*/