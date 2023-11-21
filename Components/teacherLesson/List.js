import { Link ,Outlet} from 'react-router-dom'

const List = () => {
    return (
        <>


        <h1> list..........</h1>
        <nav>
        <Link to ="home">עמוד בית בתוך ליסט</Link>
        <Link to ="list">עמוד ליסט בתוך ליסט</Link>
        <Link to ="loginnnn">עמוד  הרשמה בתוך ליסט</Link>
        <Link to ="c">עמוד קורס בתוך ליסט</Link></nav>
        {/* outlet מגדיר את המקום שבו תוצג הקומפוננטה הפנימית שבתוך קומפוננטת ליסט */}
        <Outlet></Outlet>
        <h3>end of list comp</h3>
</>
      );
}
 
export default List;