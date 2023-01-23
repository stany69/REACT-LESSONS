import { useSelector ,useDispatch} from "react-redux";
import { addEmplAction, remEmplAction ,remEmplByIdAction} from "../Store/emplReducer";
import { decrAction,incrAction } from "../Store/countReducer";

function App() {
    let count =  useSelector(store => store.count.count)
    let empl =  useSelector(store => store.empl.empl)
     let dispatch = useDispatch()



    return (
        
      <div >
        <h1>Счетчик</h1>
        {count}
        <div>
           <button onClick={() =>dispatch(incrAction(+prompt()))}>Инкремент</button>
           <button onClick={() =>dispatch(decrAction(+prompt()))}>Декремент</button>
        </div>
         <h1>Сотрудники</h1>
         {empl.map(elem => 
            <div>
                <h3>{elem.name}</h3>
                <p>{elem.id}</p>
            </div>
            )}
            <div>
              <button onClick={() => dispatch(addEmplAction(prompt()))}>Добавить нового пользователя</button>
              <button onClick={() => dispatch(remEmplAction())}>Удалить последнего пользователя</button>
              <button onClick={() => dispatch(remEmplByIdAction(prompt()))}>Удалить пользователя по ID</button>
            </div>
      </div>
    );
  }
  
  export default App;
  