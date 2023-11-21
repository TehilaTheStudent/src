import React from "react";

export default class ToDoList extends React.Component {
    constructor() {
        super();
        this.state = {
            list1: ["wash", "coooook", "hw"],
            num: 0

        };

    }
    txt = "bhjb";
    age = 0;
    addNum = () => {

        //כמה כללים לעדכון סטייט 
        // בהתחלה
        // this.num++
        //אח"כ
        // 1. ניתן לעדכן את המשתנה בסטייט רק ע"י הפונקציה  סט-סטייט
        // this.setState({num: 9})
        // 2. אין לגשת לסטייט תוך כדי עדכון הסטייט
        // ולכן נשמור קודם המשתנה פשוט את המשתנה מהסטייט
        // וכך נעדכן -בדוגמא הבאה
        // this.setState({num: this.state.num+1})-//לא טוב
        let num2 = this.state.num;
        this.setState({ num: num2 + 1 })
    }
    addToDo = () => {
        this.state.list1.push(this.txt);
        this.state.num++;
        // this.nn=" fdsa"אין כזה אבל זה בסדר? לא עושה  שגיאה
        // this.num++;
        //איך מעדכנים מערך בסטייט

        let x = this.state.list1;
        //העתקת מצביע בלבד שיצביע לאותו מערך ואסור דרכו לעדכן את הסטייט ישירות
        //במקום זה ניצור עותק של המערך עצמו ונוסיף לו איבר ואז נכניס אותו לסטייט
        // let x=this.state.list1.slice()//אפשרות 1
        // x.push(this.txt);

        let x2 = [this.txt, ...this.state.list1]//אפשרות 2
        //spread operator--פריסה
        this.setState({ list1: x })
    }

    delete = (index) => {
        this.state.list1.splice(index, 1)
        let r = [...this.state.list1];
        // r.splice(index, 1);
        this.setState({ list1: r });
    }

    changeTxt = (e) => {
        /*  עדכון הסטייט
           this.state.num+=1; שגוי
          1
          אא לעדכן את המשתנה בסטייט בלי שימוש בפונקציה סט סטייט
          2
          אין לגשת לשלוף נתונים מהסטייט תוך כדי עדכון הסטייט
           this.setState({ num: this.state.num + 1 })
          אלא יש לשלוף לתוך משתנה את הערך מהסטייט 
          הסטייט מתעשכן בצורה אסינכורנית
          */

        //כך טוב לעדכן את הסטייט
        // let x = this.state.num;
        // this.setState({
        //     num: x + 1,
        //     txt: e.target.value
        // });

        this.txt = e.target.value;

    }
    print = (s) => {
        alert(s)

    }
    render() {

        //let arr = this.list1.map(function (item) { return <li>{item}</li> })
        let myC = "";
        //    let myC="stam"; אפשר גם כך
        if (this.state.list1.length < 3)
            myC = "short";
        return (<div>

            {/* {this.num} */}
            {/* על מנת לבדוק בכל הקשה האם משתנה */}

            {this.state.num}
            <h2>WHAT TO DO?</h2>
            <div>
                <input type="text" onKeyUp={this.changeTxt} />
                {/* דוג למשתנה פשוט שננסה לראות אם משתנה או לא */}
                <input type="button" value="אחד למספר הוסף" onClick={this.addNum} />
                <input type="button" value="הוסף" onClick={this.addToDo} />
            </div>
            <ul>
                {/* כאשר נרצה לשלוח פרמטרים לפונקציה שצריכה להתבצע בעת לחיצה או אירוע אחר נעטוף את הזימון בפונקציה אנונימית */}
                {this.state.list1.map((item, index) => {
                    //אפשר גם בצורה הזו אבל כל פעם שיכנס ל<אלאי> הוא יבצע את הבדיקה הזו וחבל אם נרצה לבצע כזו בדיקה על מספר איברים בודדים- אפשר לעשות כךli className={this.state.list1<2 ?"short" :""}
                    return <li className={this.myC}
                        key={this.age++}//הוספתי מפתח יחודי לכל אחד אחרת יעשה הערה בקונסול
                        onClick={() => { this.print(item) }}>
                        {item}
                        <input type="button" value="מחק אותי" onClick={(e) => {
                            e.stopPropagation();//שלא יעבור לli
                            this.delete(index)

                        }}></input>
                    </li>
                })}
            </ul>

        </div >)
    }
}

