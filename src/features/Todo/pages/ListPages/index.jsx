import React,{ useEffect , useState} from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
// import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';

ListPages.propTypes = {
    
};

function ListPages(props) {
    const initArrayTodo = [
        {
            id: 1,
            name: 'ha',
            status: 'new',
        },
        {
            id: 2,
            name: 'hang',
            status: 'old',
        },
        {
            id: 3,
            name: 'huy',
            status: 'new',
        },
    ]
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [arrayTodo, setArrayTodo] = useState(initArrayTodo);
    const [filterStatus, setFilterStatus] = useState(() => {
        const paramString = queryString.parse(location.search);
        // console.log(paramString);

        return paramString.status || 'all';
    });
    
    useEffect(() => {
        const paramString = queryString.parse(location.search);

        setFilterStatus(paramString.status || 'all');
    }, [location.search])

    const handleTodo = (value,index) => {
        //clone current array to the new one
        const newTodoList = [...arrayTodo];
        // console.log(value,index);

        //toggle STATE
        //Cach 1
        // const newTodo = {
        //     ...newTodoList[index],
        //     status: newTodoList[index].status === 'new' ? 'old' : 'new'
        // }
        // newTodoList[index] = newTodo;
        ///////////////////////
        //Cach 2
        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'old' : 'new'
        }

        //update todo list
        setArrayTodo(newTodoList)
    }  

    const handelShowALL = () => {
        // setFilterStatus('all')
        const queryParams = { status: 'all' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }
    const handelShowNEW = () => {
        // setFilterStatus('new')
        const queryParams = { status: 'new' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }
    const handelShowOLD = () => {
        // setFilterStatus('old')
        const queryParams = { status: 'old' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }

    // const renderTodoList = useMemo(() => {
    //     arrayTodo.filter(valueTodo =>  filterStatus === 'all' || filterStatus === valueTodo.status )
    // },[arrayTodo, filterStatus])


    const renderTodoList = arrayTodo.filter((valueTodo) => (
        filterStatus === 'all' || filterStatus === valueTodo.status
    )) ;
    // console.log(renderTodoList);

    const handleTodoOnSubmit = (value) => {
        const newTodo = {
            id: arrayTodo.length + 1,
            name: value.name,
            status: 'new',
        }
        const newTodoList = [...arrayTodo , newTodo];
        setArrayTodo(newTodoList);
    }
    return (
        <div>
            <h3>What To Do</h3>

            <TodoForm onSubmit={handleTodoOnSubmit}/>

            <TodoList getTodo={renderTodoList} onClickTodo={handleTodo}/>
            <div>
                <button onClick={handelShowALL}>Show All</button>
                <button onClick={handelShowNEW}>Show New</button>
                <button onClick={handelShowOLD}>Show Old</button>
            </div>
        </div>
        
    );
}

export default ListPages; 