import {useState,useEffect} from 'react'
export const SearchPanel = (param,setParam) =>{


    const [users,setUsers] = useState([])


    return <form>
        <div>
            <input type="text" value ={param.name} onchange = {e => {
                setParam({
                    ...param,
                    name:e.target.value
                })
            }}/>
            <select value={param.personId} onChange={e =>setParam({
                ...param,
                personId:e.target.value
            })}>
                <option value="">负责人</option>
                {
                    users.map(user => <option value={user.id}>{user.name}</option>)
                }
            </select>
        </div>
    </form>
}
