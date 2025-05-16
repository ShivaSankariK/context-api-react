/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from 'react';
import { AppContext } from './context';
import './App.css';

export default function TableContent () {
   const {user} = useContext(AppContext);

    return (
        <div className="table">
           <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>age</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((item) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))
                }
            </tbody>
           </table>
        </div>
    );
       
}