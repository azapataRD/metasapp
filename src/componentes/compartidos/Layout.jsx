import { Outlet } from 'react-router-dom';
import Principal from "./Principal";
import Pie from './Pie';
import Encabezado from './Encabezado';

function Layout() {
    return (
        <>
            <Encabezado></Encabezado>
            <Principal>
                <Outlet></Outlet> 
            </Principal>
            <Pie></Pie>
        </>
    );
}

export default Layout;