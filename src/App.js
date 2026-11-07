import './App.css';

import { useEffect, useState } from 'react';
import Profiles from './components/Profiles';
import load from './Users';
import Paging from './Paging';



function App() {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);



    useEffect(() => {
        load(currentPage).then((result) => {
            setUsers(result.data);
            setCurrentPage(result.page);
            setTotalPages(result.total_pages);
        });
    }, [currentPage]);



    return (
        <div className="App">
            <h1>Profile</h1>
            <Paging 
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                />
            <Profiles users={users} />
        </div>
    );
}

export default App;



