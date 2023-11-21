// import React from 'react';

// export default class Home extends React.Component
// {
//     name="Naftali Aharonovich";
//     sentence="I'm the father and my name is...";
//     childArr=["Tehila","Daniel","Avigail"];
//     render()
//     {
//         return
//          (
//          <>
//         <div>
//             my children are
//             <ul>
//                 <li>{this.childArr[0]}</li>
//                 <li>{this.childArr[1]}</li>
//                 <li>{this.childArr[2]}</li>
//                 </ul>
//         </div>
//          </>
//         );
//     }
    
// }
import React from 'react'

// קומפוננטה מסוג מחלקה
export default class Home extends React.Component {
    // המקום של הגדרת המשתנים והפונקציות
    //jsx התחביר של ריאקט 
    //1. שמות קומפוננטות תמיד באות גדולה
    //2. ניתן להחזיר רק תגית אחת ברטורן וכשנרצה להחזיר כמה ץגיות נעטוף אותם בתגית אחת
    //3. שמות אירועים באות גדולה
    // onClick, onSubmit, onChange
    //4.נוסיף בראש העמוד אימפורט לריאקט
    //5. אין שימוש במילים שמורות של גאווהסקריפט
    //{/* js */}
    //  <p class="p"></p >
    //  {/* react */}
    // <p className="p"></p> 
    // {/* <input type="button" defaultValue="fadsfs"></input> */}
    //6. 6חייב להיות בתוך js קוד  {}
    // משתנים במחלקה נגדיר ללא המילים let,const 
    text="I am father.."
    listCildren=["Yossi","Dani","..."]
    name = "Ruth"
    age = 15
    x = 5
    y = 10
    myClass = "smaller15"

    printDate = () => {
        //בתוך  פונקציה של המחלקה נגדיר משתנים עם המילה לט
        let d = new Date()
        console.log(d)
        return d;
    }

changeClass=()=>{
// debugger;
    if (this.age > 15)
    this.myClass="greater15"
}
  
    //מילה שמורה
    render() {

            // המקום של התגיות והשימוש במשתנים וזימון הפונקציות שכתובות למעלה
            return (
                // <div> אפשר לעטוף גם עם דיב
                <>
                {this.changeClass()}
                <ul><li>{this.listCildren[0]}</li></ul>
                    <h1>Home Page</h1>
                    <p>now we learn React </p>
                    <p className={this.myClass}>welcome {this.name} your age {this.age}</p>
                    <p>התאריך הנוכחי הוא {this.printDate().toLocaleDateString()}</p>


                    {/* //חייב להיות בתוך js קוד  {} */}
                    <p>x+y</p>
                    <p> {this.x + this.y}</p>

                </>
                // </div>
            )
    }

}


